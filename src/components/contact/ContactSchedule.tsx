"use client";

import {
    useEffect,
    useState,
} from "react";

const weekdayLabels = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

type ScheduleData = {
    year: number;
    month: number;
    day: number;
};

function getCurrentScheduleData(): ScheduleData {
    const currentDate = new Date();

    return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        day: currentDate.getDate(),
    };
}

function getCalendarDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days = Array<string>(firstDay).fill("");

    for (let day = 1; day <= totalDays; day += 1) {
        days.push(String(day));
    }

    while (days.length % 7 !== 0) {
        days.push("");
    }

    return days;
}

function getMonthCode(month: number) {
    return String(month + 1).padStart(2, "0");
}

export default function ContactSchedule() {
    const [schedule, setSchedule] = useState<ScheduleData | null>(null);

    useEffect(() => {
        setSchedule(getCurrentScheduleData());
    }, []);

    if (!schedule) {
        return (
            <section className="contact-schedule" aria-hidden="true">
                <div className="contact-schedule__titlebar">
                    <span>SCHEDULE FILE</span>
                    <span>LOADING</span>
                </div>

                <div className="contact-schedule__body">
                    <div className="contact-schedule__weekdays">
                        {weekdayLabels.map((day) => (
                            <span key={day}>{day}</span>
                        ))}
                    </div>

                    <div className="contact-schedule__days">
                        {Array.from({ length: 35 }, (_, index) => (
                            <span className="contact-schedule__day" key={index} />
                        ))}
                    </div>
                </div>

                <div className="contact-schedule__footer">
                    <span>DEADLINE STATUS</span>
                    <strong>FLEXIBLE</strong>
                </div>
            </section>
        );
    }

    const calendarDays = getCalendarDays(schedule.year, schedule.month);
    const scheduleCode = `${schedule.year}.${getMonthCode(schedule.month)}`;

    return (
        <section className="contact-schedule" aria-hidden="true">
            <div className="contact-schedule__titlebar">
                <span>SCHEDULE FILE</span>
                <span>{scheduleCode}</span>
            </div>

            <div className="contact-schedule__body">
                <div className="contact-schedule__weekdays">
                    {weekdayLabels.map((day) => (
                        <span key={day}>{day}</span>
                    ))}
                </div>

                <div className="contact-schedule__days">
                    {calendarDays.map((day, index) => (
                        <span
                            className={
                                day === String(schedule.day)
                                    ? "contact-schedule__day contact-schedule__day--current"
                                    : "contact-schedule__day"
                            }
                            key={`${day}-${index}`}
                        >
                            {day}
                        </span>
                    ))}
                </div>
            </div>

            <div className="contact-schedule__footer">
                <span>DEADLINE STATUS</span>
                <strong>FLEXIBLE</strong>
            </div>
        </section>
    );
}