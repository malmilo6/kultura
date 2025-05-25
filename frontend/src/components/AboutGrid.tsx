/*  src/components/AboutGrid.tsx  */
import "../styles/about-grid.css";
import picture1 from "../assets/picture1.png"
import picture2 from "../assets/picture2.png"
import picture3 from "../assets/picture3.png"
import picture4 from "../assets/picture4.png"
import picture5 from "../assets/picture5.png"
import picture6 from "../assets/picture6.png"
import {useTranslation} from "react-i18next";

export const AboutGrid = () => {
const {t} = useTranslation();

  const items = [
  { key: "expo",     image: picture1 },
  { key: "battle",   image: picture2 },
  { key: "graffiti", image: picture3 },
  { key: "partners", image: picture4 },
  { key: "dj",       image: picture5 },
  { key: "food",     image: picture6 },
];

const ribbons = ["purple", "green"];   // add more colours if you wish
const baseText =
  "9‑10 АВГУСТА 2025 • ARENA CHIȘINĂU, MOLDOVA • ";

// repeat the phrase 10× (or more) with String.repeat()
const ribbonText = baseText.repeat(10);


  return (
      <section className="about-section" id="about">

          {/* ---------- INTRO ROW ---------- */}
          <div className="about-intro">
              <h2>{t(`about.title`)}</h2>

              <p>
                  <strong className="green">{t(`about.brand`)}</strong>
                  {t(`about.intro`)}
              </p>
          </div>

          {/* ---------- IMAGE GRID ---------- */}
          <div className="about-grid">
              {items.map(({key, image}) => (
                  <div
                      key={key}
                      className="about-card"
                      style={{
                          backgroundImage: `url(${image})`,
                          backgroundPosition: "center",
                          aspectRatio: "1 / 1",
                      }}
                  >
                      <span className="card-label">{t(`about.cards.${key}`)}</span>
                  </div>
              ))}
          </div>

          <div className="about-ribbons">
              {ribbons.map((clr) => (
                  <div key={clr} className={`ribbon ${clr}`}>
                      {ribbonText}
                  </div>
              ))}
          </div>
      </section>
  );
};