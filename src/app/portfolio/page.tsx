import Link from "next/link";
import {
    getLatestRecordForPath,
    getRecordsForPath,
    hasNewRecordsForPath,
    monthLabels,
    portfolioDirectories,
} from "../../data/portfolio";

export default function PortfolioPage() {
    return (
        <main className="portfolio-directory-page">
            <section
                className="portfolio-directory-intro"
                aria-labelledby="portfolio-title"
            >
                <div className="portfolio-directory-intro__titlebar">
                    <span>LOCAL ARCHIVE / COMMISSION RECORDS</span>
                    <span>DIRECTORY READY</span>
                </div>

                <div className="portfolio-directory-intro__body">
                    <p className="portfolio-directory-intro__eyebrow">
                        NAVYRI COMMISSIONS
                    </p>

                    <h1 id="portfolio-title">~ PORTFOLIO ARCHIVE ~</h1>

                    <p>
                        Browse selected commission records by service type.
                        <br />
                        Open a folder to explore its archived files and completed work.
                    </p>

                    <div className="portfolio-directory-intro__path">
                        <span>PATH</span>
                        <strong>/portfolio</strong>
                        <span>
                            {portfolioDirectories.length.toString().padStart(2, "0")} FOLDERS
                        </span>
                    </div>
                </div>
            </section>

            <section
                className="portfolio-directory"
                aria-labelledby="portfolio-directory-title"
            >
                <div className="portfolio-directory__titlebar">
                    <span id="portfolio-directory-title">
                        COMMISSION FILE DIRECTORY
                    </span>
                    <span>SELECT A FOLDER</span>
                </div>

                <ul className="portfolio-folder-grid">
                    {portfolioDirectories.map((directory) => {
                        const hasSubfolders = Boolean(directory.children?.length);
                        const records = getRecordsForPath(directory.path);
                        const latestRecord = getLatestRecordForPath(directory.path);
                        const hasNewFiles = hasNewRecordsForPath(directory.path);

                        return (
                            <li key={directory.path.join("/")}>
                                <Link
                                    className="portfolio-folder-card"
                                    href={`/portfolio/${directory.path.join("/")}`}
                                >
                                    <span className="portfolio-folder-card__back-tab">
                                        {directory.code}
                                    </span>

                                    <span className="portfolio-folder-card__front">
                                        <span
                                            className="portfolio-folder-card__topline"
                                            aria-hidden="true"
                                        />

                                        <span className="portfolio-folder-card__body">
                                            <span className="portfolio-folder-card__name">
                                                {directory.title}
                                            </span>

                                            <span className="portfolio-folder-card__description">
                                                {directory.description}
                                            </span>
                                        </span>

                                        <span
                                            className={`portfolio-folder-card__status ${hasSubfolders || records.length > 0
                                                    ? "portfolio-folder-card__status--ready"
                                                    : "portfolio-folder-card__status--empty"
                                                }`}
                                        >
                                            {hasSubfolders
                                                ? `${directory.children?.length
                                                    .toString()
                                                    .padStart(2, "0")} SUBFOLDERS`
                                                : records.length > 0
                                                    ? `${records.length
                                                        .toString()
                                                        .padStart(2, "0")} PUBLIC FILES`
                                                    : "NO PUBLIC FILES YET"}
                                        </span>

                                        {!hasSubfolders && latestRecord && (
                                            <span className="portfolio-folder-card__updated">
                                                LATEST / {monthLabels[latestRecord.month]} {latestRecord.year}
                                            </span>
                                        )}

                                        {hasNewFiles && (
                                            <span className="portfolio-folder-card__new">
                                                NEW FILES
                                            </span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <aside
                className="portfolio-directory-note"
                aria-label="Portfolio archive note"
            >
                <div>
                    <span className="portfolio-directory-note__label">
                        ARCHIVE NOTICE
                    </span>

                    <p>
                        Records are listed from newest to oldest inside each file.
                        <br />
                        Client credits are included where public information is available.
                    </p>
                </div>

                <Link className="portfolio-directory-note__action" href="/commissions">
                    ← commission information
                </Link>
            </aside>
        </main>
    );
}