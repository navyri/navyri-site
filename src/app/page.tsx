import Link from "next/link";
import Image from "next/image";
import NowPlaying from "@/components/widgets/NowPlaying";
import TwitchStatus from "@/components/widgets/TwitchStatus";
import VisitorCounter from "@/components/widgets/VisitorCounter";

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
              <div className="home-profile-archive">
                <Image
                  className="profile-panel__image home-profile-archive__image"
                  src="/images/avatar/navyri-profile.png"
                  alt="Navyri's VTuber avatar"
                  width={520}
                  height={520}
                  priority
                />

                <span className="home-profile-archive__code">
                  PROFILE ARCHIVE / 00
                </span>

                <span className="home-profile-archive__title">
                  Navyri portrait
                </span>

                <span className="home-profile-archive__ratio">square</span>
              </div>

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
                  <dt>collector focus</dt>
                  <dd>MLP G4 / MH G1</dd>
                </div>

                <div>
                  <dt>role</dt>
                  <dd>VTuber / Artist</dd>
                </div>

                <div>
                  <dt>languages</dt>
                  <dd className="profile-panel__active">ESP / ENG</dd>
                </div>

                <div>
                  <dt>timezone</dt>
                  <dd className="profile-panel__active">UTC−5</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="content-panel mini-panel twitch-panel">
            <div className="panel-titlebar">
              <span>~ TWITCH / LIVE SIGNAL ~</span>
            </div>

            <div className="mini-panel__body">
              <TwitchStatus />
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
                last update: september 2026
              </p>

              <h1 className="introduction-heading__title">
                ~ introduction / about me ~
              </h1>
            </div>

            <div className="panel-body">
              <p>
                Hi, I&apos;m <strong>Navyri</strong>! a Colombian VTuber, self-taught
                illustrator, collector and systems and computing engineering student.
              </p>
              <p>
                I&apos;ve been drawing for as long as I can remember and I enjoy learning,
                experimenting and adapting each piece to the person, idea, or story behind
                it rather than limiting myself to one fixed style.
              </p>
              <p>
                Outside of art, I love <strong>technology</strong>, <strong>programming</strong>,
                <strong> hardware</strong>, <strong>video editing</strong> and <strong>making things with my own hands</strong>.
              </p>
              <p>
                I&apos;m also a collector at heart. My collection began with the toys I grew
                up with and carefully kept over the years and has grown into a personal
                archive of Generation 4 My Little Pony, Generation 1 Monster High and My
                Little Pony trading cards.
              </p>
              <p>
                This site is my little corner of the internet: a place for <strong>commissions</strong>,
                <strong> projects</strong>, <strong>collection updates</strong>, <strong>handmade creations </strong> 
                and everything I enjoy sharing.{" "}
                <Link className="home-introduction__link" href="/about">
                  Visit my personal archive →
                </Link>
              </p>
            </div>
          </section>

          <section className="content-panel tech-panel">
            <div className="introduction-heading">
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
                  <span>OBS</span>
                </div>
              </div>

              <div className="tech-group">OUTGOING 
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

        <aside className="home-sidebar home-sidebar--right">
          <section className="content-panel mini-panel visitor-panel">
            <div className="panel-titlebar">
              <span>~ VISITS RECORDED ~</span>
            </div>

            <div className="mini-panel__body">
              <VisitorCounter />
            </div>
          </section>

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
                <span>contact form</span>
              </a>
            </div>
          </section>

          <section className="content-panel mini-panel commission-status-panel">
            <div className="panel-titlebar">
              <span>~ COMMISSION STATUS ~</span>
            </div>

            <div className="mini-panel__body">
              <p className="status-open">OPEN</p>

              <dl className="commission-status-panel__details">
                <div>
                  <dt>payments</dt>
                  <dd>USD / COP</dd>
                </div>

                <div>
                  <dt>delivery</dt>
                  <dd>digital / worldwide</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="content-panel mini-panel">
            <div className="panel-titlebar">
              <span>~ COLLECTION ~</span>
            </div>

            <div className="mini-panel__body">
              <p>G4 My Little Pony · G1 Monster High · MLP trading cards</p>
            </div>
          </section>

          <section className="content-panel mini-panel spotify-panel">
            <div className="panel-titlebar">
              <span>~ SPOTIFY / CURRENTLY ~</span>
            </div>

            <div className="mini-panel__body">
              <NowPlaying />
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}