import { useTranslation } from "react-i18next";
import heroVideo from "../assets/back_video.mp4";    // ← your mp4 / webm
import logo      from "../assets/logo.png";
import paint     from "../assets/paint-splash.png";
import "../styles/hero-banner.css";
import {LanguageToggle} from "./LanguageSwitcher.tsx";

export const HeroBanner = () => {
  const { t } = useTranslation();     // ← hook

  return (
      <section className="hero-banner" id="tickets">
        {/* ——— BACKGROUND VIDEO ——— */}
        <video
            className="hero-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
        >
          <source src={heroVideo} media="(min-width: 1200px)" type="video/mp4"/>
          <source src={heroVideo} type="video/mp4"/>
        </video>

        {/* ——— HEADER BAR (unchanged) ——— */}
        <header className="hero-bar">
          <img src={logo} alt="Kultura logo" className="hero-logo"/>

          {/* desktop nav / mobile slide-down */}
          {/*<nav className={`hero-nav ${menuOpen ? "open" : ""}`}>*/}
          {/*  <ul className="nav-links" onClick={() => setMenuOpen(false)}>*/}
          {/*    <li><a href="#about">{t("nav.about")} </a></li>*/}
          {/*    <li><a href="#location">ЛОКАЦИЯ</a></li>*/}
          {/*    <li><a href="#hotels">ОТЕЛИ</a></li>*/}
          {/*    <li><a href="#contact">КОНТАКТЫ</a></li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          <div className="cta-group">
            <button
                className="btn outline desktop-only"
                onClick={() => window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdhx8wWoWIua2H98Xuq9sfRbyMlieVj2Y9KfOYgykoa2Wl3KA/viewform",
                    "_blank", "noopener")}
            >
              {t("cta.participant")}
            </button>

            <button
                className="buy-pill"
                onClick={() => window.open(
                    "https://afisha.md/ro/events/afisha-recomanda/15973/moldova-auto-weekend-festival",
                    "_blank", "noopener")}
            >
              {t("cta.ticket")}
            </button>
          </div>

            <LanguageToggle/>

        </header>

        {/* ——— HERO COPY (unchanged) ——— */}
        <div className="hero-copy">
          <img src={paint} alt="" className="splash-bg"/>
          <h3 className="hero-sub">
              {t("hero.subtitle")}
          </h3>
          <h1 className="hero-title">
            MOLDOVA AUTO<br/>WEEKEND FESTIVAL
          </h1>
          <p className="hero-date">
            {t("hero.date")}
          </p>
        </div>
      </section>
  );
};