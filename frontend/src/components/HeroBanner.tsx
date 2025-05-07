/* src/components/HeroBanner.tsx */
import { useState } from "react";
import heroBg  from "../assets/hero-bg.jpg";
import logo    from "../assets/logo.png";
import paint   from "../assets/paint-splash.png";
import "../styles/hero-banner.css";

export const HeroBanner = () => {
  const [menuOpen, setMenuOpen]   = useState(false);  // ← mobile menu
  /* if later you want the modal again: const [showForm,setShowForm]=useState(false) */

  /* helper to close menu after clicking a link */
  const closeMenu = () => setMenuOpen(false);

  return (
    <section
      className="hero-banner"
      style={{ background:`url(${heroBg}) center/cover no-repeat` }}
      id="tickets"
    >

      {/* ────── HEADER ────── */}
      <header className="hero-bar">

        {/* logo */}
        <img src={logo} alt="Kultura logo" className="hero-logo" />

        {/* hamburger (only shows on mobile) */}
        <button
          className="burger"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span/>
          <span/>
          <span/>
        </button>

        {/* full nav */}
<nav
  className={`hero-nav ${menuOpen ? "open" : ""}`}  // ← keep ‘open’ toggle
>
    <ul className="nav-links" onClick={closeMenu}>
            <li><a href="#about">О ФЕСТИВАЛЕ</a></li>
            <li><a href="#location">ЛОКАЦИЯ</a></li>
            <li><a href="#hotels">ОТЕЛИ</a></li>
            <li><a href="#contact">КОНТАКТЫ</a></li>
          </ul>

          <div className="nav-cta">

            {/* this button is hidden on mobiles via CSS */}
            <button
              className="btn outline desktop‑only"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdhx8wWoWIua2H98Xuq9sfRbyMlieVj2Y9KfOYgykoa2Wl3KA/viewform",
                  "_blank","noopener noreferrer")}
            >
              Стать участником
            </button>

            <button
              className="btn fill"
              onClick={() =>
                window.open(
                  "https://afisha.md/ro/events/afisha-recomanda/15973/moldova-auto-weekend-festival",
                  "_blank","noopener noreferrer")}
            >
              Купить билет
            </button>
          </div>
        </nav>
      </header>

      {/* ────── HERO COPY ────── */}
      <div className="hero-copy">
        <img src={paint} alt="" className="splash-bg" />

        <h3 className="hero-sub">
          Автофестиваль выставочного формата, под открытым небом
        </h3>

        <h1 className="hero-title">
          MOLDOVA&nbsp;AUTO<br/>
          WEEKEND FESTIVAL
        </h1>

        <p className="hero-date">
          9‑10 АВГУСТА 2015&nbsp;•&nbsp;ARENA CHIȘИНĂU, MOLDOVA
        </p>
      </div>
    </section>
  );
};