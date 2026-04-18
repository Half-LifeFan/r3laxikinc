import Image from "next/image";

const bioLines = [
  "r3laxik inc. — a corp where ppl like R3LAXIK and MR. DODEP4UK are in, created by Nikolai Viktorovich, better known by the alias R3LAXIK. Works together w/ MR. DODEP4UK, TheBatBoy, and Davideandgo10. The corp was made for team collabs.",
  "Editors — MR. DODEP4UK & R3LAXIK",
  "Writer — R3LAXIK",
  "Director — R3LAXIK",
  "You can check everyone’s socials by hittin’ the “Contact Us” button.",
];

export default function HomePage() {
  return (
    <main className="site">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <section className="layout" id="home">
        <header className="topbar reveal reveal--delay-1">
          <a className="brand" href="#home" aria-label="r3laxik inc. homepage">
            <Image
              className="brand__mark"
              src="/logo-mark.png"
              alt="r3laxik inc. logo mark"
              width={4800}
              height={2700}
              priority
            />
          </a>

          <nav className="menu" aria-label="Social links">
            <a
              className="menu__link"
              href="https://patreon.com/R3LAXIK?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
              target="_blank"
              rel="noreferrer"
            >
              patreon
            </a>
            <a
              className="button button--small"
              href="https://discord.com/channels/@me/1204122995920994324"
              target="_blank"
              rel="noreferrer"
            >
              CALL ME
            </a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero__logoWrap reveal reveal--delay-2">
            <Image
              className="hero__logo"
              src="/logo-full.png"
              alt="r3laxik inc. full logo"
              width={4800}
              height={2700}
              priority
            />
          </div>

          <article className="card card--bio reveal reveal--delay-3">
            {bioLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        </section>

        <section className="feature">
          <div className="feature__media reveal reveal--delay-4">
            <Image
              src="/puzzles.png"
              alt="Mr. Puzzles promotional artwork"
              width={1920}
              height={1080}
            />
          </div>

          <article className="card card--story reveal reveal--delay-5">
            <p>
              On August 5, 2026, the full movie “PRIPYAT TIME: RETURNING” is
              droppin’. Why RETURNING? ‘Cuz in the story Mr. Puzzles turns out
              not to be dead, and he’s got clones. The rest you’ll find out when
              the movie drops — we ain’t tryna spoil the whole plot :3
            </p>
          </article>
        </section>

        <footer className="contactPanel reveal reveal--delay-6">
          <a
            className="button button--large"
            href="https://choko.link/r3laxik_inc"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
          <p>My tg - @r3laxik_dedepsteina</p>
        </footer>
      </section>
    </main>
  );
}
