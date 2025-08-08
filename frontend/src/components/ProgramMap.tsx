import { useTranslation } from "react-i18next";
import mapQR from "../assets/map-qr.png";           // ← save the QR PNG here
import "../styles/program-map.css";

export const ProgramMapSection = () => {
  const { t } = useTranslation();

  const scheduleURL =
    "https://drive.google.com/drive/folders/1LA6T0S_vScWbXRXjQFuN5oi2TUjN6V2y?usp=sharing";

  const mapURL =
    "https://drive.google.com/file/d/1vzRNL3Dp0xuwTAHQCg3ObELQK19L6Ux9/view?usp=sharing";

  return (
    <section className="info-section" id="info">
      <h2>{t("info.title", "Program & Map")}</h2>

      <div className="info-grid">
        {/* -------- program block -------- */}
        <article className="info-card">
          <h3>{t("program.title", "Program")}</h3>
          <p>{t("program.desc", "Full event schedule (PDF):")}</p>

          <a
            className="simple-btn"
            href={scheduleURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("program.btn", "Open schedule")}
          </a>
        </article>

        {/* -------- map block -------- */}
        <article className="info-card">
          <h3>{t("map.title", "Event map")}</h3>

          <a href={mapURL} target="_blank" rel="noopener noreferrer">
            <img src={mapQR} alt="QR code – event map" className="qr-img" />
          </a>

          <a
            className="simple-btn"
            href={mapURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("map.btn", "Open map")}
          </a>
        </article>
      </div>
    </section>
  );
};