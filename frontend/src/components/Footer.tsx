import logo   from "../assets/logo.png";          // white horizontal logo
import igIcon from "../assets/igIcon.png"; // 32 × 32 px purple square
import tgIcon from "../assets/tgIcon.png";
import "../styles/footer.css"

export const Footer = () => {

  return (
  <footer className="site-footer">
    {/* ───────── TOP ROW ───────── */}
    <div className="footer-top">

      {/* logo + socials */}
      <div className="brand-block">
        <img src={logo} alt="Kultura logo" className="f-logo" />

        <nav className="socials">
          <a href="https://www.instagram.com/kultura_autofestival?igsh=MTRnN2Q4dWYycmcyMw%3D%3D"  target="_blank" rel="noopener noreferrer">
            <img src={igIcon} alt="Instagram" />
          </a>
          <a href="https://t.me/kulturafest" target="_blank" rel="noopener noreferrer">
            <img src={tgIcon} alt="Telegram"  />
          </a>
        </nav>
      </div>

      {/* legal links */}
      {/*<ul className="legal">*/}
      {/*  <li><a href="/offer.pdf"      target="_blank">Оферта</a></li>*/}
      {/*  <li><a href="/privacy.pdf"    target="_blank">Политика конфиденциальности</a></li>*/}
      {/*</ul>*/}
    </div>

    {/* ───────── BOTTOM ROW ───────── */}
    <div className="footer-bottom">
      Moldova Auto Weekend Festival © {new Date().getFullYear()} All rights reserved
    </div>
  </footer>
);}