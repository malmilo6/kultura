/*  src/components/HeroBanner.tsx  */
import { useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import logo   from "../assets/logo.png";
import paint  from "../assets/paint-splash.png";
import "../styles/hero-banner.css";

export const HeroBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="hero-banner"
      style={{ background:`url(${heroBg}) center/cover no-repeat` }}
      id="tickets"
    >
      <header className="hero-bar">
        <img src={logo} alt="Kultura logo" className="hero-logo"/>

        {/* links (desktop) / slide‑down (mobile) */}
        <nav className={`hero-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links" onClick={() => setMenuOpen(false)}>
            <li><a href="#about">О ФЕСТИВАЛЕ</a></li>
            <li><a href="#location">ЛОКАЦИЯ</a></li>
            <li><a href="#hotels">ОТЕЛИ</a></li>
            <li><a href="#contact">КОНТАКТЫ</a></li>
          </ul>
        </nav>

        {/* ▶︎ NEW — both pills live here ◀︎ */}
        <div className="cta-group">
          {/* white pill – hide on phones */}
          <button
            className="btn outline desktop-only"
            onClick={() => window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdhx8wWoWIua2H98Xuq9sfRbyMlieVj2Y9KfOYgykoa2Wl3KA/viewform",
              "_blank","noopener,noreferrer")}
          >
            Стать участником
          </button>

          {/* purple pill – always visible */}
          <button
            className="buy-pill"
            onClick={() => window.open(
              "https://afisha.md/ro/events/afisha-recomanda/15973/moldova-auto-weekend-festival",
              "_blank","noopener,noreferrer")}
          >
            Купить билет
          </button>
        </div>

        {/* burger toggle (≤ 768 px) */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>
      </header>

      {/* hero copy unchanged … */}
      <div className="hero-copy">
        <img src={paint} alt="" className="splash-bg"/>
        <h3 className="hero-sub">Автофестиваль выставочного формата, под открытым небом</h3>
        <h1 className="hero-title">MOLDOVA AUTO<br/>WEEKEND FESTIVAL</h1>
        <p  className="hero-date">9‑10 АВГУСТА 2015 • ARENA CHIȘИНĂU, MOLDOVA</p>
      </div>
    </section>
  );
};