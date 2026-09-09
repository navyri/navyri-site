"use client";

import {
    KeyboardEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type DeadlineCalendarProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
};

const weekdayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function createDateKey(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function createLocalDate(value: string) {
    const [year, month, day] = value.split("-").map(Number);

    return new Date(year, month - 1, day);
}

function isSameDay(first: Date, second: Date) {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}

function getMonthLabel(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(date).toUpperCase();
}

function getSelectedDateLabel(value: string) {
    if (!value) {
        return "SELECT A DATE";
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(createLocalDate(value)).toUpperCase();
}

export default function DeadlineCalendar({
    name,
    value,
    onChange,
}: DeadlineCalendarProps) {
    const pickerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const today = useMemo(() => {
        const currentDate = new Date();

        return new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
        );
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [visibleMonth, setVisibleMonth] = useState(() => {
        if (value) {
            const selectedDate = createLocalDate(value);

            return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        }

        return new Date(today.getFullYear(), today.getMonth(), 1);
    });

    useEffect(() => {
        if (!value) {
            return;
        }

        const selectedDate = createLocalDate(value);

        setVisibleMonth(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
        );
    }, [value]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function closeWhenClickingOutside(event: MouseEvent | TouchEvent) {
            if (pickerRef.current?.contains(event.target as Node)) {
                return;
            }

            setIsOpen(false);
        }

        function closeWithEscape(event: globalThis.KeyboardEvent) {
            if (event.key !== "Escape") {
                return;
            }

            setIsOpen(false);
            triggerRef.current?.focus();
        }

        document.addEventListener("mousedown", closeWhenClickingOutside);
        document.addEventListener("touchstart", closeWhenClickingOutside);
        document.addEventListener("keydown", closeWithEscape);

        return () => {
            document.removeEventListener("mousedown", closeWhenClickingOutside);
            document.removeEventListener("touchstart", closeWhenClickingOutside);
            document.removeEventListener("keydown", closeWithEscape);
        };
    }, [isOpen]);

    const calendarDays = useMemo(() => {
        const year = visibleMonth.getFullYear();
        const month = visibleMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();
        const days: Array<Date | null> = Array(firstDay).fill(null);

        for (let day = 1; day <= totalDays; day += 1) {
            days.push(new Date(year, month, day));
        }

        while (days.length % 7 !== 0) {
            days.push(null);
        }

        return days;
    }, [visibleMonth]);

    const minimumMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const isCurrentMinimumMonth =
        visibleMonth.getFullYear() === minimumMonth.getFullYear() &&
        visibleMonth.getMonth() === minimumMonth.getMonth();

    function goToPreviousMonth() {
        if (isCurrentMinimumMonth) {
            return;
        }

        setVisibleMonth(
            (currentMonth) =>
                new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1,
                ),
        );
    }

    function goToNextMonth() {
        setVisibleMonth(
            (currentMonth) =>
                new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1,
                ),
        );
    }

    function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
        if (event.key !== "ArrowDown" && event.key !== "Enter" && event.key !== " ") {
            return;
        }

        event.preventDefault();
        setIsOpen(true);
    }

    function handleDateSelection(dateKey: string) {
        onChange(dateKey);
        setIsOpen(false);

        requestAnimationFrame(() => {
            triggerRef.current?.focus();
        });
    }

    return (
        <div className="contact-calendar-picker" ref={pickerRef}>
            <input name={name} type="hidden" value={value} />

            <button
                aria-controls="deadline-calendar-popup"
                aria-expanded={isOpen}
                aria-haspopup="dialog"
                className={`contact-calendar-picker__trigger ${isOpen ? "contact-calendar-picker__trigger--open" : ""
                    }`}
                ref={triggerRef}
                type="button"
                onClick={() => setIsOpen((currentState) => !currentState)}
                onKeyDown={handleTriggerKeyDown}
            >
                <span>{getSelectedDateLabel(value)}</span>
                <span aria-hidden="true">⌄</span>
            </button>

            {isOpen && (
                <div
                    aria-label="Requested date calendar"
                    aria-modal="false"
                    className="contact-calendar"
                    id="deadline-calendar-popup"
                    role="dialog"
                >
                    <div className="contact-calendar__titlebar">
                        <span>REQUESTED DATE</span>
                        <span>{value ? "DATE SELECTED" : "SELECT A DATE"}</span>
                    </div>

                    <div className="contact-calendar__body">
                        <div className="contact-calendar__navigation">
                            <button
                                aria-label="Previous month"
                                className="contact-calendar__month-button"
                                disabled={isCurrentMinimumMonth}
                                type="button"
                                onClick={goToPreviousMonth}
                            >
                                ←
                            </button>

                            <strong>{getMonthLabel(visibleMonth)}</strong>

                            <button
                                aria-label="Next month"
                                className="contact-calendar__month-button"
                                type="button"
                                onClick={goToNextMonth}
                            >
                                →
                            </button>
                        </div>

                        <div className="contact-calendar__weekdays" aria-hidden="true">
                            {weekdayLabels.map((day) => (
                                <span key={day}>{day}</span>
                            ))}
                        </div>

                        <div className="contact-calendar__days">
                            {calendarDays.map((date, index) => {
                                if (!date) {
                                    return (
                                        <span
                                            aria-hidden="true"
                                            className="contact-calendar__day contact-calendar__day--empty"
                                            key={`empty-${index}`}
                                        />
                                    );
                                }

                                const dateKey = createDateKey(date);
                                const isPastDate = date < today;
                                const isToday = isSameDay(date, today);
                                const isSelected = value === dateKey;

                                return (
                                    <button
                                        aria-label={new Intl.DateTimeFormat("en-US", {
                                            dateStyle: "full",
                                        }).format(date)}
                                        aria-pressed={isSelected}
                                        className={`contact-calendar__day ${isToday ? "contact-calendar__day--today" : ""
                                            } ${isSelected ? "contact-calendar__day--selected" : ""
                                            }`}
                                        disabled={isPastDate}
                                        key={dateKey}
                                        type="button"
                                        onClick={() => handleDateSelection(dateKey)}
                                    >
                                        {date.getDate()}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="contact-calendar__footer">
                        <span>SELECTED DATE</span>
                        <strong>{getSelectedDateLabel(value)}</strong>
                    </div>
                </div>
            )}
        </div>
    );
}