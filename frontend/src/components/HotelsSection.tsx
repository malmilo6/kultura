/*  src/components/HotelsSection.tsx  */
import "../styles/hotels-section.css";
import hotelImg from "../assets/hotels.png";
import {useTranslation} from "react-i18next";

export const HotelsSection = () => {
      const {t} = useTranslation();

    return (
  <section className="hotels-section" id="hotels">
    <h2>{t("hotels.hotels")}</h2>

    <div className="hotels-grid">

      {/* ---- Photo side ---- */}
      <figure
        className="hotel-photo"
        style={{ backgroundImage: `url(${hotelImg})` }}
      >
        <button>    {t("hotels.book")}</button>
      </figure>

      {/* ---- Text side ---- */}
{/* ---- Promo / text card ---- */}
<div className="hotel-text">

  <h3>{t("hotels.partner")}</h3>

  <p>
    {t("hotels.about")}
  </p>

  <ul className="hotel-list">
    <li>{t("hotels.hotel")}#1</li>
    <li>{t("hotels.hotel")}#2</li>
    <li>{t("hotels.hotel")}#3</li>
    <li>{t("hotels.hotel")}#4</li>
    <li>{t("hotels.hotel")}#5</li>
  </ul>

  <button
    className="hotel-cta"
    onClick={() => window.open("mailto:autoposterprintmd@gmail.com")}
  >
        {t("hotels.contact")}
  </button>
</div>

    </div>
  </section>
);}