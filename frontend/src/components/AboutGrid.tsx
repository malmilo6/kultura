/*  src/components/AboutGrid.tsx  */
import "../styles/about-grid.css";
import picture1 from "../assets/picture1.png"
import picture2 from "../assets/picture2.png"
import picture3 from "../assets/picture3.png"
import picture4 from "../assets/picture4.png"
import picture5 from "../assets/picture5.png"
import picture6 from "../assets/picture6.png"

export const AboutGrid = () => {
  const items = [
    { title: "ВЫСТАВКА",       image: picture1 },
    { title: "АВТОБАТТЛЫ",     image: picture2 },
    { title: "ГРАФФИТИ",       image: picture3 },
    { title: "ЗОНЫ ПАРТНЁРОВ", image: picture4 },
    { title: "DJ",             image: picture5 },
    { title: "ФУДКОРТ",        image: picture6 },
  ];

const ribbons = ["purple", "green"];   // add more colours if you wish
const baseText =
  "9‑10 АВГУСТА 2015 • ARENA CHIȘINĂU, MOLDOVA • ";

// repeat the phrase 10× (or more) with String.repeat()
const ribbonText = baseText.repeat(10);


  return (
      <section className="about-section" id="about">

          {/* ---------- INTRO ROW ---------- */}
          <div className="about-intro">
              <h2>О ФЕСТИВАЛЕ</h2>

              <p>
                  <strong className="green">KULTURA Auto Festival</strong>&nbsp;— это
                  автофестиваль выставочного формата, на котором мы собрали только
                  культовые автомобили. Он посвящён стильным автомобилям, граффити и
                  урбан культуре. 2 дня фестиваля&nbsp;под&nbsp;открытым небом.
              </p>
          </div>

          {/* ---------- IMAGE GRID ---------- */}
          <div className="about-grid">
              {items.map(({title, image}) => (
                  <div
                      key={title}
                      className="about-card"
                      style={{
                          backgroundImage: `url(${image})`,
                          backgroundPosition: "center",
                          aspectRatio: "1 / 1",
                      }}
                  >
                      <span className="card-label">{title}</span>
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