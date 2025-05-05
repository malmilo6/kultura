/* src/components/HeroBanner.tsx */
import heroBg from "../assets/hero-bg.png";
import logo   from "../assets/logo.png";
import "../styles/hero-banner.css";
import paint from "../assets/paint-splash.png";

export const HeroBanner = () => (
    <section
        className="hero-banner"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
    >
      <header className="hero-bar">
        <img src={logo} alt="Kultura logo" className="hero-logo"/>

        {/* links + CTAs sit on the same row */}
        <nav className="hero-nav">
          <ul className="nav-links">
            <li><a href="#about">О ФЕСТИВАЛЕ</a></li>
            <li><a href="#location">ЛОКАЦИЯ</a></li>
            <li><a href="#hotels">ОТЕЛИ</a></li>
            <li><a href="#contact">КОНТАКТЫ</a></li>
          </ul>

          <div className="nav-cta">
            <button className="btn outline">
              СТАТЬ УЧАСТНИКОМ
            </button>
            <button className="btn fill">КУПИТЬ БИЛЕТ</button>
          </div>
        </nav>
      </header>
      {/*  ===== HERO COPY =====  */}
      <div className="hero-copy">
        {/* single big splash behind the whole h1 */}
        <img src={paint} alt="" className="splash-bg"/>

        <h3 className="hero-sub">
          Автофестиваль выставочного формата, под открытым небом
        </h3>

        <h1 className="hero-title">
          MOLDOVA&nbsp;AUTO<br/>
          WEEKEND FESTIVAL
        </h1>

        <p className="hero-date">
          9‑10 АВГУСТА 2015&nbsp;&nbsp;•&nbsp;&nbsp;ARENA CHIȘINĂU, MOLDOVA
        </p>
      </div>
    </section>
);