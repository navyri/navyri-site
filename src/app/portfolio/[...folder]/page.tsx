import ProtectedImage from "../../../components/portfolio/ProtectedImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import TimelineIndex from "../../../components/portfolio/TimelineIndex";
import {
    getAllDirectoryPaths,
    getDirectoryByPath,
    getGroupedRecords,
    getLatestRecordForPath,
    getRecordsForPath,
    hasNewRecordsForPath,
    monthLabels,
    type ClientRecord,
} from "../../../data/portfolio";

type PortfolioDirectoryPageProps = {
    params: Promise<{
        folder: string[];
    }>;
};

function ClientLabel({ client }: { client: ClientRecord | null }) {
    if (!client) {
        return (
            <span className="portfolio-record__client-value">SERVICE SAMPLE</span>
        );
    }

    if (!client.url) {
        return (
            <span className="portfolio-record__client-value">{client.label}</span>
        );
    }

    return (
        <a
            className="portfolio-record__client-link"
            href={client.url}
            target="_blank"
            rel="noreferrer"
        >
            {client.label}
        </a>
    );
}

export function generateStaticParams() {
    return getAllDirectoryPaths().map((path) => ({
        folder: path,
    }));
}

export default async function PortfolioDirectoryPage({
    params,
}: PortfolioDirectoryPageProps) {
    const { folder: folderPath } = await params;
    const directory = getDirectoryByPath(folderPath);

    if (!directory) {
        notFound();
    }

    const hasSubfolders = Boolean(directory.children?.length);
    const records = getRecordsForPath(folderPath);
    const groupedRecords = getGroupedRecords(records);
    const years = Object.keys(groupedRecords)
        .map(Number)
        .sort((first, second) => second - first);
    const hasRecords = records.length > 0;
    const recordCount = records.length.toString().padStart(2, "0");
    const dateRange = hasRecords
        ? `${years.at(-1)}—${years[0]}`
        : "NO DATED RECORDS";
    const parentPath = folderPath.slice(0, -1);
    const backHref =
        parentPath.length > 0
            ? `/portfolio/${parentPath.join("/")}`
            : "/portfolio";
    const folderKey = folderPath.join("-");

    return (
        <main className="portfolio-folder-page">
            <nav
                className="portfolio-folder-page__pathbar"
                aria-label="Portfolio path"
            >
                <Link href="/portfolio">PORTFOLIO ARCHIVE</Link>

                {folderPath.map((segment, index) => {
                    const currentPath = folderPath.slice(0, index + 1);
                    const currentDirectory = getDirectoryByPath(currentPath);

                    if (!currentDirectory) {
                        return null;
                    }

                    const isCurrent = index === folderPath.length - 1;
                    const href = `/portfolio/${currentPath.join("/")}`;

                    return (
                        <span
                            key={currentPath.join("/")}
                            className="portfolio-path-item"
                        >
                            <span aria-hidden="true">/</span>
                            {isCurrent ? (
                                <strong>{currentDirectory.title}</strong>
                            ) : (
                                <Link href={href}>{currentDirectory.title}</Link>
                            )}
                        </span>
                    );
                })}
            </nav>

            <article className="portfolio-folder-view">
                <div className="portfolio-folder-view__tab" aria-hidden="true">
                    {directory.code}
                </div>

                <header className="portfolio-folder-view__header">
                    <div>
                        <p>
                            {directory.code} /{" "}
                            {hasSubfolders ? "DIRECTORY" : "COMMISSION TIMELINE"}
                        </p>

                        <h1>~ {directory.title} ~</h1>

                        <span>{directory.description}</span>
                    </div>

                    <div className="portfolio-folder-view__meta">
                        {hasSubfolders ? (
                            <>
                                <span>
                                    {directory.children?.length.toString().padStart(2, "0")}{" "}
                                    SUBFOLDERS
                                </span>
                                <span>DIRECTORY VIEW</span>
                            </>
                        ) : (
                            <>
                                <span>
                                    {hasRecords
                                        ? `${recordCount} PUBLIC FILES`
                                        : "NO PUBLIC FILES YET"}
                                </span>
                                <span>{dateRange}</span>
                            </>
                        )}
                    </div>
                </header>

                {hasSubfolders ? (
                    <div className="portfolio-folder-view__directory">
                        <ul className="portfolio-folder-grid portfolio-folder-grid--nested">
                            {directory.children?.map((child) => {
                                const childRecords = getRecordsForPath(child.path);
                                const childHasRecords = childRecords.length > 0;
                                const latestRecord = getLatestRecordForPath(child.path);
                                const hasNewFiles = hasNewRecordsForPath(child.path);

                                return (
                                    <li key={child.path.join("/")}>
                                        <Link
                                            className="portfolio-folder-card"
                                            href={`/portfolio/${child.path.join("/")}`}
                                        >
                                            <span className="portfolio-folder-card__back-tab">
                                                {child.code}
                                            </span>

                                            <span className="portfolio-folder-card__front">
                                                <span
                                                    className="portfolio-folder-card__topline"
                                                    aria-hidden="true"
                                                />

                                                <span className="portfolio-folder-card__body">
                                                    <span className="portfolio-folder-card__name">
                                                        {child.title}
                                                    </span>

                                                    <span className="portfolio-folder-card__description">
                                                        {child.description}
                                                    </span>
                                                </span>

                                                <span
                                                    className={`portfolio-folder-card__status ${childHasRecords
                                                        ? "portfolio-folder-card__status--ready"
                                                        : "portfolio-folder-card__status--empty"
                                                        }`}
                                                >
                                                    {childHasRecords
                                                        ? `${childRecords.length
                                                            .toString()
                                                            .padStart(2, "0")} PUBLIC FILES`
                                                        : "NO PUBLIC FILES YET"}
                                                </span>

                                                {latestRecord && (
                                                    <span className="portfolio-folder-card__updated">
                                                        LATEST / {monthLabels[latestRecord.month]}{" "}
                                                        {latestRecord.year}
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
                    </div>
                ) : hasRecords ? (
                    <div className="portfolio-folder-view__body">
                        <TimelineIndex
                            years={years}
                            folderKey={folderKey}
                            label={`${directory.title} timeline`}
                        />

                        {years.map((year, index) => (
                            <details
                                className="portfolio-year-group"
                                id={`${folderKey}-${year}`}
                                key={year}
                                open={index === 0}
                            >
                                <summary className="portfolio-year-group__heading">
                                    <span
                                        className="portfolio-year-group__marker"
                                        aria-hidden="true"
                                    />

                                    <h2>{year}</h2>

                                    <span>
                                        {groupedRecords[year].length
                                            .toString()
                                            .padStart(2, "0")}{" "}
                                        FILES
                                    </span>
                                </summary>

                                <ul className="portfolio-record-grid">
                                    {groupedRecords[year].map((record) => (
                                        <li className="portfolio-record" key={record.id}>
                                            <div className="portfolio-record__titlebar">
                                                <div>
                                                    <span>CLIENT FILE</span>
                                                    <ClientLabel client={record.client} />
                                                </div>

                                                <div>
                                                    <span>DATE</span>
                                                    <strong>
                                                        {monthLabels[record.month]} / {record.year}
                                                    </strong>
                                                </div>
                                            </div>

                                            <div className="portfolio-record__media">
                                                <ProtectedImage
                                                    className="portfolio-record__image portfolio-record__image--dark"
                                                    src={record.media.dark}
                                                    alt={record.media.alt}
                                                    width={2048}
                                                    height={1249}
                                                    sizes="(max-width: 680px) 100vw, (max-width: 920px) 50vw, 33vw"
                                                />

                                                <ProtectedImage
                                                    className="portfolio-record__image portfolio-record__image--light"
                                                    src={record.media.light}
                                                    alt=""
                                                    aria-hidden="true"
                                                    width={2048}
                                                    height={1249}
                                                    sizes="(max-width: 680px) 100vw, (max-width: 920px) 50vw, 33vw"
                                                />
                                            </div>

                                            <div className="portfolio-record__footer">
                                                <span>{record.type}</span>

                                                <p>{record.title}</p>

                                                {record.client?.platform && (
                                                    <span className="portfolio-record__platform">
                                                        {record.client.platform}
                                                    </span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </div>
                ) : (
                    <div className="portfolio-folder-view__empty">
                        <span>DIRECTORY STATUS / EMPTY</span>

                        <h2>NO PUBLIC FILES YET</h2>

                        <p>
                            This folder is ready for future commission records. New completed
                            work will be added here when it is available for public display.
                        </p>
                    </div>
                )}
            </article>

            <aside
                className="portfolio-folder-page__footer"
                aria-label="Portfolio folder navigation"
            >
                <div>
                    <span>ARCHIVE NAVIGATION</span>

                    <p>
                        Client credits are shown only when public information is available.
                        If you are featured here and would like a record removed, please
                        contact Navyri.
                    </p>
                </div>

                <Link href={backHref}>← back to folder</Link>
            </aside>
        </main>
    );
}