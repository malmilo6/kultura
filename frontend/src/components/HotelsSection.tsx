/*  src/components/HotelsSection.tsx  */
import "../styles/hotels-section.css";
import hotelImg from "../assets/hotels.png";
import {useTranslation} from "react-i18next";

export const HotelsSection = () => {
      const {t} = useTranslation();
    const waLink = "https://wa.me/37369444577";

    return (
  <section className="hotels-section" id="hotels">
    <h2>{t("hotels.hotels")}</h2>

    <div className="hotels-grid">

      {/* ---- Photo side ---- */}
      <figure
        className="hotel-photo"
        style={{ backgroundImage: `url(${hotelImg})` }}
      >
        <button   onClick={() => window.open(waLink, "_blank", "noopener")}
>    {t("hotels.book")}</button>
      </figure>

      {/* ---- Text side ---- */}
{/* ---- Promo / text card ---- */}
        <div className="hotel-text">

            <h3>{t("hotels.partner")}</h3>

            <p>
                {t("hotels.about")}
            </p>

            <ul className="hotel-list">
                {[
                    "Hotel Paris",

                ].map((label, idx) => (
                    <li key={idx}>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {label}
                        </a>
                    </li>
                ))}
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
    );
}