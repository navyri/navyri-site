import Image from "next/image";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-layout">
        <aside className="home-sidebar">
          <section className="content-panel profile-panel">
            <div className="panel-titlebar">
              <span>~ ABOUT NAVYRI ~</span>
            </div>

            <div className="profile-panel__body">
              <Image
                className="profile-panel__image"
                src="/images/avatar/navyri-profile.png"
                alt="Navyri's VTuber avatar"
                width={520}
                height={520}
                priority
              />

              <h2 className="profile-panel__name">Navyri</h2>

              <dl className="profile-panel__details">
                <div>
                  <dt>age</dt>
                  <dd>21</dd>
                </div>

                <div>
                  <dt>country</dt>
                  <dd>Colombia</dd>
                </div>

                <div>
                  <dt>pronouns</dt>
                  <dd>she / her</dd>
                </div>

                <div>
                  <dt>personality</dt>
                  <dd>INTP</dd>
                </div>

                <div>
                  <dt>role</dt>
                  <dd>VTuber / Artist</dd>
                </div>

                <div>
                  <dt>commissions</dt>
                  <dd className="profile-panel__open">Open</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="content-panel mini-panel">
            <div className="panel-titlebar">
              <span>~ FAVORITE FOOD ~</span>
            </div>

            <div className="mini-panel__body">
              <p className="mini-panel__highlight">Italian food</p>
              <p>Pasta · pizza · tiramisù</p>
            </div>
          </section>

          <section className="content-panel mini-panel">
            <div className="panel-titlebar">
              <span>~ INTERESTS ~</span>
            </div>

            <div className="mini-panel__body">
              <p>Anime · technology · hardware</p>
              <p>Gaming · art · handmade crafts</p>
            </div>
          </section>
        </aside>

        <div className="home-main-column">
          <section className="content-panel home-introduction">
            <div className="introduction-heading">
              <p className="introduction-heading__update">
                last update: august 2026
              </p>

              <h1 className="introduction-heading__title">
                ~ introduction / about me ~
              </h1>
            </div>

            <div className="panel-body">
              <p>
                Hi, I&apos;m <strong>Navyri</strong> — a Colombian YouTuber,
                VTuber, illustrator, and systems and computing engineering
                student.
              </p>

              <p>
                I have been drawing for as long as I can remember. I mainly
                create anime and chibi-inspired artwork, especially{" "}
                <strong>emotes</strong>, <strong>badges</strong>, profile
                pictures, banners, and other custom assets for creators and
                their communities. I do not limit myself to one specific art
                style; I enjoy learning, experimenting, and adapting each piece
                to the personality behind it.
              </p>

              <p>
                Outside of art, I&apos;m deeply into <strong>technology</strong>,
                programming, hardware, and making things with my own hands. I
                enjoy building creative projects, working with code, editing my
                own videos, and turning small ideas into something real —
                whether that means a digital asset, a handmade accessory, or a
                new project to learn from.
              </p>

              <p>
                I&apos;m also a collector at heart. My collection began with the
                toys I grew up with and carefully kept throughout the years.
                What started as something personal slowly became a special
                collection focused on <strong>Generation 4 My Little Pony</strong>,
                <strong> Generation 1 Monster High</strong>, and My Little Pony
                trading cards. I organize part of it in Notion, where I also
                keep track of my wishlist and collecting goals.
              </p>

              <p>
                When I&apos;m not drawing or studying, I&apos;m probably watching
                anime, trying to get better at a game, working on a craft, or
                enjoying Italian food. This site is my little corner of the
                internet: a place for commissions, projects, collectibles,
                handmade creations, and everything I enjoy sharing.
              </p>
            </div>
          </section>

          <section className="content-panel tech-panel">
            <div className="introduction-heading">
              <p className="introduction-heading__update">
                last update: august 2026
              </p>

              <h2 className="introduction-heading__title">
                ~ technology stack ~
              </h2>
            </div>

            <div className="tech-panel__body">
              <div className="tech-group">
                <h3>languages</h3>

                <div className="tech-tags">
                  <span>C++</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="tech-group">
                <h3>frameworks &amp; libraries</h3>

                <div className="tech-tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                  <span>Vite</span>
                  <span>Spring Boot</span>
                </div>
              </div>

              <div className="tech-group">
                <h3>tools &amp; creative software</h3>

                <div className="tech-tags">
                  <span>VS Code</span>
                  <span>IntelliJ IDEA</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Notion</span>
                  <span>Adobe Premiere Pro</span>
                  <span>Photoshop</span>
                </div>
              </div>

              <div className="tech-group">
                <h3>cloud &amp; infrastructure</h3>

                <div className="tech-tags">
                  <span>AWS</span>
                  <span>Cloudflare</span>
                  <span>Docker</span>
                  <span>Linux</span>
                  <span>PostgreSQL</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="home-sidebar">
          <section className="content-panel socials-panel">
            <div className="panel-titlebar">
              <span>~ SOCIALS ~</span>
            </div>

            <div className="socials-panel__body">
              <a
                href="https://www.twitch.tv/navyri"
                target="_blank"
                rel="noreferrer"
              >
                Twitch
                <span>@navyri</span>
              </a>

              <a
                href="https://www.tiktok.com/@navyri_"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
                <span>@navyri_</span>
              </a>

              <a
                href="https://www.youtube.com/@navyri"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
                <span>@navyri</span>
              </a>

              <a
                href="https://www.instagram.com/Navyri__"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <span>@navyri__</span>
              </a>

              <a
                href="https://discord.com/invite/Aee7t3w"
                target="_blank"
                rel="noreferrer"
              >
                Discord
                <span>join server</span>
              </a>

              <a
                href="https://ko-fi.com/navyri"
                target="_blank"
                rel="noreferrer"
              >
                Ko-fi
                <span>support me</span>
              </a>

              <a
                href="https://vgen.co/navyri"
                target="_blank"
                rel="noreferrer"
              >
                VGen
                <span>commissions</span>
              </a>

              <a href="/contact">
                Contact
                <span>email form</span>
              </a>
            </div>
          </section>

          <section className="content-panel mini-panel commission-status-panel">
            <div className="panel-titlebar">
              <span>~ COMMISSION STATUS ~</span>
            </div>

            <div className="mini-panel__body">
              <p className="status-open">OPEN</p>
              <p>Starting from $12 USD</p>
              <p>International / digital</p>
            </div>
          </section>

          <section className="content-panel mini-panel">
            <div className="panel-titlebar">
              <span>~ COLLECTION ~</span>
            </div>

            <div className="mini-panel__body">
              <p>G4 My Little Pony</p>
              <p>G1 Monster High</p>
              <p>MLP trading cards</p>

              <a
                className="mini-panel__link"
                href="https://mary-collectors.notion.site/"
                target="_blank"
                rel="noreferrer"
              >
                View collection &amp; wishlist
              </a>
            </div>
          </section>

          <section className="content-panel mini-panel spotify-panel">
            <div className="panel-titlebar">
              <span>~ SPOTIFY / CURRENTLY ~</span>
            </div>

            <div className="mini-panel__body">
              <p className="mini-panel__highlight">Listening</p>
              <p>Now playing integration coming soon.</p>

              <a
                className="mini-panel__link"
                href="https://open.spotify.com/user/mary_san2005?nd=1&dlsi=371d8bcd5b7e468c"
                target="_blank"
                rel="noreferrer"
              >
                Open Spotify profile
              </a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}