import "../styles/venue-section.css";
import arenaImg from "../assets/arena.png";
import {useTranslation} from "react-i18next";               // big photo

export const VenueSection = () => {
    const {t} = useTranslation();

    return (
  <section className="venue-section" id="location">
    <h2>{t("location")}</h2>

    <div className="venue-grid">

      {/* ---- photo ---- */}
      <figure
        className="venue-photo"
        style={{ backgroundImage: `url(${arenaImg})` }}
      >
        <figcaption>ARENA CHIȘINĂU, MOLDOVA</figcaption>
      </figure>

      {/* ---- map ---- */}
      <div className="venue-map">
        <iframe
          title="Arena Chișinău map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.925314972008!2d28.859195877064835!3d47.07237347114571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df515c66daf%3A0x8d08ef5dfdddd4a0!2zQ2hpyJlpbsSDdSBBcmVuYQ!5e1!3m2!1sen!2s!4v1746639102408!5m2!1sen!2s"          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>
);}