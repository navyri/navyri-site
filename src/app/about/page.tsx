import Link from "next/link";
import Image from "next/image";
import NowPlaying from "@/components/NowPlaying";

const favoriteGames = [
    "Fatal Frame",
    "Valorant",
    "Elden Ring",
    "Elden Ring Nightreign",
    "Dark Souls",
    "Alice: Madness Returns",
    "Silent Hill f",
    "Dead by Daylight",
    "Resident Evil",
    "Lies of P",
    "Warframe",
    "Arknights: Endfield",
    "Minecraft",
    "Fortnite",
];

const gameWishlist = [
    "Tormented Souls",
    "Resident Evil series",
    "Final Fantasy",
    "Dark Souls II",
    "Dark Souls III",
];

const favoriteAnime = [
    "Ao Haru Ride",
    "Kimi ni Todoke",
    "Toradora!",
    "Tamako Market",
    "Kyoukai no Kanata",
    "Sword Art Online",
    "Shigatsu wa Kimi no Uso",
    "Kotoura-san",
    "Diabolik Lovers",
    "Mahou Shoujo Madoka★Magica",
    "Owari no Seraph",
    "Mahou Shoujo Site",
    "Yuuki Yuuna wa Yuusha de Aru",
    "Noragami",
    "Violet Evergarden",
    "Sakurasou no Pet na Kanojo",
    "Mirai Nikki",
    "Death Note",
    "Kimi no Na wa.",
    "Plastic Memories",
    "Hotarubi no Mori e",
    "Mekakucity Actors",
    "Charlotte",
    "Another",
    "Koe no Katachi",
    "Howl no Ugoku Shiro",
    "Tonari no Totoro",
    "Sousou no Frieren",
];

const watchLinks = [
    {
        label: "Twitch",
        value: "@navyri",
        href: "https://www.twitch.tv/navyri",
    },
    {
        label: "YouTube",
        value: "@navyri",
        href: "https://www.youtube.com/@navyri",
    },
    {
        label: "TikTok",
        value: "@navyri_",
        href: "https://www.tiktok.com/@navyri_",
    },
    {
        label: "Instagram",
        value: "@navyri__",
        href: "https://www.instagram.com/Navyri__",
    },
];

const communityLinks = [
    {
        label: "Discord",
        value: "join server",
        href: "https://discord.com/invite/Aee7t3w",
    },
    {
        label: "VGen",
        value: "commissions",
        href: "https://vgen.co/navyri",
    },
    {
        label: "Ko-fi",
        value: "support me",
        href: "https://ko-fi.com/navyri",
    },
    {
        label: "Contact",
        value: "email form",
        href: "/contact",
    },
];

const archiveLinks = [
    {
        label: "Spotify",
        value: "music profile",
        href: "https://open.spotify.com/user/mary_san2005?nd=1&dlsi=371d8bcd5b7e468c",
    },
    {
        label: "GitHub",
        value: "@navyri",
        href: "https://github.com/navyri",
    },
    {
        label: "Collection",
        value: "Notion archive",
        href: "https://mary-collectors.notion.site/",
    },
];

const supportLinks = [
    {
        label: "Throne",
        value: "wishlist",
        href: "https://throne.com/Navyri",
    },
    {
        label: "Amazon",
        value: "wishlist",
        href: "https://www.amazon.com/registries/gl/guest-view/3NPIY2UJVCCOB?ref_=cm_sw_r_cp_ud_ggr-subnav-share_VY7VXB4Z7XXSG1Q50F94",
    },
    {
        label: "PayPal",
        value: "support me",
        href: "https://www.paypal.com/paypalme/tinymiri05",
    },
];

type LinkItem = {
    label: string;
    value: string;
    href: string;
};

function ArchiveSlot({
    code,
    title,
    ratio,
}: {
    code: string;
    title: string;
    ratio: string;
}) {
    return (
        <div className={`archive-slot archive-slot--${ratio}`}>
            <span className="archive-slot__code">{code}</span>

            <div className="archive-slot__center">
                <span className="archive-slot__mark">+</span>
                <strong>IMAGE PENDING</strong>
                <span>coming soon</span>
            </div>

            <span className="archive-slot__title">{title}</span>
            <span className="archive-slot__ratio">{ratio}</span>
        </div>
    );
}

function ExternalLinkList({ links }: { links: LinkItem[] }) {
    return (
        <div className="about-link-list">
            {links.map((link) => {
                const isExternal = link.href.startsWith("http");

                if (!isExternal) {
                    return (
                        <Link
                            key={link.label}
                            className="about-link-list__item retro-underline"
                            href={link.href}
                        >
                            <span>{link.label}</span>
                            <span>{link.value}</span>
                        </Link>
                    );
                }

                return (
                    <a
                        key={link.label}
                        className="about-link-list__item retro-underline"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>{link.label}</span>
                        <span>{link.value}</span>
                    </a>
                );
            })}
        </div>
    );
}

export default function AboutPage() {
    return (
        <main className="about-page">
            <section className="content-panel about-archive-header">
                <div className="introduction-heading">
                    <p className="introduction-heading__update">
                        archive entry: august 2026
                    </p>

                    <h1 className="introduction-heading__title">
                        ~ about navyri / personal file ~
                    </h1>
                </div>

                <div className="about-archive-header__content">
                    <div className="about-fullbody-portrait">
                        <Image
                            className="about-fullbody-portrait__image"
                            src="/images/avatar/navyri-profile-fullbody.png"
                            alt="Navyri's fullbody VTuber avatar"
                            fill
                            priority
                            sizes="(max-width: 680px) min(100vw - 3rem, 16rem), (max-width: 920px) 30vw, 18vw"
                        />

                        <span className="about-fullbody-portrait__code">
                            ARCHIVE PORTRAIT / 01
                        </span>

                        <span className="about-fullbody-portrait__title">
                            navyri fullbody portrait
                        </span>

                        <span className="about-fullbody-portrait__ratio">fullbody</span>
                    </div>

                    <div className="about-archive-header__text">
                        <p className="about-archive-header__lead">
                            Hi, I&apos;m Navyri — a Colombian VTuber, self-taught illustrator,
                            collector, and systems and computing engineering student.
                        </p>

                        <p>
                            I have been drawing for as long as I can remember. I mainly create
                            anime and chibi-inspired artwork, especially <strong>emotes</strong>,{" "}
                            <strong>badges</strong>, <strong>profile pictures</strong>,{" "}
                            <strong>banners</strong>, and other custom assets for creators and their
                            communities. I do not limit myself to one specific art style; I enjoy
                            learning, experimenting, and adapting each piece to the personality
                            behind it.
                        </p>

                        <p>
                            Outside of art, I&apos;m deeply into <strong>technology</strong>,{" "}
                            <strong>programming</strong>, <strong>hardware</strong>, and making
                            things with my own hands. I enjoy building creative projects, working
                            with code, editing my own videos, and turning small ideas into something
                            real — whether that means a digital asset, a handmade accessory, or a
                            new project to learn from.
                        </p>

                        <p>
                            I&apos;m also a collector at heart. My collection began with the toys I
                            grew up with and carefully kept throughout the years. What started as
                            something personal slowly became a special collection focused on{" "}
                            <strong>Generation 4 My Little Pony</strong>,{" "}
                            <strong>Generation 1 Monster High</strong>, and My Little Pony trading
                            cards. I organize part of it in Notion, where I also keep track of my
                            wishlist and collecting goals.
                        </p>

                        <p>
                            When I&apos;m not drawing or studying, I&apos;m probably watching anime
                            or k-dramas, trying to get better at a game, working on a craft,
                            listening to music, or enjoying sleep. This site is my little corner of
                            the internet: a place for commissions, projects, collectibles, handmade
                            creations, and everything I enjoy sharing.
                        </p>
                    </div>

                    <div className="about-archive-header__side">
                        <div className="about-secondary-portrait">
                            <Image
                                className="about-secondary-portrait__image"
                                src="/images/avatar/navyri-profile-2.png"
                                alt="Navyri's secondary VTuber avatar portrait"
                                fill
                                sizes="(max-width: 680px) 45vw, (max-width: 920px) 30vw, 14vw"
                            />

                            <span className="about-secondary-portrait__code">
                                AVATAR FILE / 02
                            </span>

                            <span className="about-secondary-portrait__title">
                                Navyri portrait
                            </span>

                            <span className="about-secondary-portrait__ratio">portrait</span>
                        </div>

                        <div className="about-side-note">
                            <span>personal archive</span>
                            <p>art · games · tech · collection · handmade things</p>
                        </div>

                        <div className="about-quick-file">
                            <p className="about-panel__label">quick file</p>

                            <dl className="about-details">
                                <div>
                                    <dt>name</dt>
                                    <dd>Navyri</dd>
                                </div>

                                <div>
                                    <dt>location</dt>
                                    <dd>Colombia</dd>
                                </div>

                                <div>
                                    <dt>pronouns</dt>
                                    <dd>she / her</dd>
                                </div>

                                <div>
                                    <dt>type</dt>
                                    <dd>INTP</dd>
                                </div>

                                <div>
                                    <dt>signal</dt>
                                    <dd className="about-details__open">commissions open</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-split-section">
                <div className="about-process-capture">
                    <ArchiveSlot
                        code="PROCESS CAPTURE / 03"
                        title="art process / workspace"
                        ratio="landscape"
                    />
                </div>

                <section className="content-panel about-section about-split-section__panel">
                    <div className="panel-titlebar">
                        <span>~ ARTIST NOTES ~</span>
                        <span>digital + handmade</span>
                    </div>

                    <div className="about-section__body">
                        <p>
                            I mainly create anime and chibi-inspired art, especially emotes,
                            badges, profile pictures, banners, and custom assets for creators
                            and their communities. I do not limit myself to one fixed style; I
                            enjoy learning, experimenting, and adapting each piece to the
                            person, mood, and story behind it.
                        </p>

                        <p>
                            My current art tools are Procreate on my 11-inch iPad Pro, Paint
                            Tool SAI, Clip Studio Paint, and a well-loved 2013 Wacom Intuos
                            CTL-480.
                        </p>

                        <Link className="retro-underline about-section__link" href="/commissions">
                            explore commissions
                        </Link>
                    </div>
                </section>
            </section>

            <section className="about-split-section about-split-section--reverse">
                <section className="content-panel about-section about-split-section__panel">
                    <div className="panel-titlebar">
                        <span>~ COLLECTION ARCHIVE ~</span>
                        <span>kept with care</span>
                    </div>

                    <div className="about-section__body">
                        <p>
                            I have always been a collector at heart. The foundation of my
                            collection is made of toys I grew up with and carefully kept
                            through the years. Over time, they became part of a personal
                            archive focused on <strong>Generation 4 My Little Pony</strong>,{" "}
                            <strong>Generation 1 Monster High</strong>, and My Little Pony
                            trading cards.
                        </p>

                        <p>
                            I keep part of my collection and wishlist organized in Notion,
                            where I can document the pieces, memories, and goals that matter
                            to me.
                        </p>

                        <a
                            className="retro-underline about-section__link"
                            href="https://mary-collectors.notion.site/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            view collection &amp; wishlist archive
                        </a>
                    </div>
                </section>

                <ArchiveSlot
                    code="COLLECTION CAPTURE / 04"
                    title="figures / cards / archive"
                    ratio="landscape"
                />
            </section>

            <section className="content-panel about-section">
                <div className="panel-titlebar">
                    <span>~ THINGS I LIKE ~</span>
                    <span>usual signals</span>
                </div>

                <div className="about-section__body">
                    <div className="about-tags">
                        <span>anime</span>
                        <span>horror games</span>
                        <span>soulslikes</span>
                        <span>technology</span>
                        <span>hardware</span>
                        <span>collecting</span>
                        <span>handmade crafts</span>
                        <span>video editing</span>
                        <span>coding</span>
                        <span>Italian food</span>
                    </div>
                </div>
            </section>

            <section className="about-game-section">
                <ArchiveSlot
                    code="GAME FILE / 05"
                    title="game screenshot / gif"
                    ratio="game"
                />

                <section className="content-panel about-section">
                    <div className="panel-titlebar">
                        <span>~ GAME FILE ~</span>
                        <span>press start</span>
                    </div>

                    <div className="about-section__body">
                        <p>
                            I love horror, psychological stories, soulslikes, co-op games, and
                            games that let me disappear into a strange world for a while.
                        </p>

                        <div className="about-subsection">
                            <p className="about-panel__label">
                                favorites / frequently played
                            </p>

                            <div className="about-tags about-tags--games">
                                {favoriteGames.map((game) => (
                                    <span key={game}>{game}</span>
                                ))}
                            </div>
                        </div>

                        <div className="about-subsection">
                            <p className="about-panel__label">on my wishlist</p>

                            <div className="about-tags about-tags--wishlist">
                                {gameWishlist.map((game) => (
                                    <span key={game}>{game}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="content-panel about-section about-anime-section">
                <div className="panel-titlebar">
                    <span>~ ANIME / MEDIA FILE ~</span>
                    <span>personal favorites</span>
                </div>

                <div className="about-section__body">
                    <p>
                        I love romance, coming-of-age stories, emotional drama,
                        supernatural fantasy, darker magical-girl stories, psychological
                        horror, mystery, and films that leave a feeling behind after they
                        end.
                    </p>

                    <ArchiveSlot
                        code="MEDIA STRIP / 06"
                        title="anime / film / media strip"
                        ratio="strip"
                    />

                    <div className="about-tags about-tags--anime">
                        {favoriteAnime.map((anime) => (
                            <span key={anime}>{anime}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-media-setup-layout">
                <section className="content-panel about-section about-music-panel">
                    <div className="panel-titlebar">
                        <span>~ MUSIC FREQUENCY ~</span>
                        <span>on repeat</span>
                    </div>

                    <div className="about-section__body">
                        <p>
                            My playlists move between pop, K-pop, J-pop, rock, songs in English,
                            Spanish, Japanese, Korean, and French, plus the occasional corrido
                            tumbado or reggaeton mood.
                        </p>

                        <div className="spotify-playlist-preview">
                            <div className="spotify-playlist-preview__bar">
                                <span>PLAYLIST SIGNAL / 07</span>

                                <a
                                    className="retro-underline spotify-playlist-preview__open"
                                    href="https://open.spotify.com/playlist/3uBNKhJx8dcLKDhTQBmIJw?si=a19ae1a195fa413c"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    open in Spotify
                                </a>
                            </div>

                            <iframe
                                className="spotify-playlist-preview__embed"
                                src="https://open.spotify.com/embed/playlist/3uBNKhJx8dcLKDhTQBmIJw?utm_source=generator&theme=1"
                                title="Navyri's The Marías and Not for Radio playlist"
                                width="100%"
                                height="152"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>

                        <p className="about-panel__label">current favorite artist</p>
                        <p className="about-music-artist">Not for Radio</p>

                        <a
                            className="retro-underline about-section__link"
                            href="https://open.spotify.com/user/mary_san2005?nd=1&dlsi=371d8bcd5b7e468c"
                            target="_blank"
                            rel="noreferrer"
                        >
                            open Navyri&apos;s Spotify profile
                        </a>
                    </div>
                </section>

                <div className="about-media-setup-layout__right">
                    <section className="content-panel about-section now-playing-panel">
                        <div className="panel-titlebar">
                            <span>~ CURRENTLY / NOW PLAYING ~</span>
                            <span>Spotify</span>
                        </div>

                        <div className="now-playing-panel__body">
                            <NowPlaying />
                        </div>
                    </section>

                    <section className="content-panel about-section about-setup-panel">
                        <div className="panel-titlebar">
                            <span>~ DESK / TECH SETUP ~</span>
                            <span>upgraded by me</span>
                        </div>

                        <div className="about-section__body">
                            <p className="about-panel__label">main laptop</p>

                            <p>
                                ASUS ROG Strix G16 (2023) · G614JI-AS94
                                <br />
                                Intel Core i9-13980HX · NVIDIA GeForce RTX 4070 Laptop GPU
                                <br />
                                64 GB DDR5 RAM — upgraded by me
                            </p>

                            <p className="about-panel__label">art &amp; everyday hardware</p>

                            <p>
                                11-inch iPad Pro (2020) · Wacom Intuos CTL-480
                                <br />
                                BlackShark V2 Pro · Viper V3 Pro · GameSir Supernova
                            </p>
                        </div>
                    </section>
                </div>
            </section>

            <section className="content-panel about-section about-links-panel">
                <div className="panel-titlebar">
                    <span>~ SIGNALS / FIND ME ~</span>
                    <span>stay in touch</span>
                </div>

                <div className="about-links-panel__body">
                    <section className="about-links-group about-links-group--framed">
                        <h2>watch &amp; follow</h2>
                        <ExternalLinkList links={watchLinks} />
                    </section>

                    <section className="about-links-group about-links-group--framed">
                        <h2>community &amp; commissions</h2>
                        <ExternalLinkList links={communityLinks} />
                    </section>

                    <section className="about-links-group about-links-group--framed">
                        <h2>archive &amp; personal</h2>
                        <ExternalLinkList links={archiveLinks} />
                    </section>

                    <section className="about-links-group about-links-group--framed">
                        <h2>support &amp; wishlists</h2>
                        <ExternalLinkList links={supportLinks} />
                    </section>
                </div>
            </section>
        </main>
    );
}