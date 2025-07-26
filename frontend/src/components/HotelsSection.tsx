/*  src/components/HotelsSection.tsx  */
import "../styles/hotels-section.css";
import hotelImg from "../assets/img.png";
import {useTranslation} from "react-i18next";

export const HotelsSection = () => {
      const {t} = useTranslation();
    // const waLink = "https://wa.me/37369444577";

    return (
  <section className="hotels-section" id="hotels">
    <h2>{t("hotels.hotels")}</h2>

    <div className="hotels-grid">

      {/* ---- Photo side ---- */}
      <figure
        className="hotel-photo"
        style={{ backgroundImage: `url(${hotelImg})` }}
      >
      </figure>

      {/* ---- Text side ---- */}
{/* ---- Promo / text card ---- */}
        <div className="hotel-text">

            <p>
                {t("hotels.about")}
            </p>


            <ul className="hotel-list">
                <li className="hotel-list-item" onClick={() => window.open("https://wa.me/37369444577")}>Hotel Paris (+37369444577)</li>
                <li className="hotel-list-item" onClick={() => window.open("https://wa.me/37360118861")}>London Boutique Hotel (+37360118861)</li>
                <li className="hotel-list-item" onClick={() => window.open("https://wa.me/37378840484")}>Weekend Boutique Hotel (+37378840484)</li>
                <li className="hotel-list-item" onClick={() => window.open("https://wa.me/373779312131")}>Bernardazzi Grand Hotel (+37378840484)</li>
            </ul>

        </div>

    </div>
  </section>
    );
}