import "../styles/partners-section.css";

// import the partner logos you have in /assets  ------------------
import disel       from "../assets/partners/logo_dIselOk.svg";
import energy      from "../assets/partners/Logo_yellow.svg";
import om          from "../assets/partners/OM.svg";
import love       from "../assets/partners/love_fm.svg";
import low_house        from "../assets/partners/low_house.svg";
import oc   from "../assets/partners/oc_vertical.svg";
import record      from "../assets/partners/record_white.svg";
// import sticker from "../assets/partners/sticker.svg"
import sticker from "../assets/partners/sticker.jpg"

import nine        from "../assets/partners/999.svg";
import afisha   from "../assets/partners/AFISHA logo.svg";
import avalon      from "../assets/partners/aval0on white.png";
import gagarin from "../assets/partners/gagarin_car_wash.svg";
import gocon        from "../assets/partners/GoCon.svg";
// import caromoto   from "../assets/partners/LOGO CAROMOTO facebook-01.svg";
import caromoto   from "../assets/partners/caromoto.jpg";
import rcustoms from "../assets/partners/rcustoms.jpg"
import cardream from "../assets/partners/cardream.jpeg"
import brawix from "../assets/partners/img.png"



import dance      from "../assets/partners/logo dance new.svg";
import {useTranslation} from "react-i18next";

// ---------------------------------------------------------------

export const PartnersSection = () => {


  const partners = [
      om, energy, avalon, brawix, caromoto, gagarin, rcustoms, low_house, disel, cardream, oc, gocon, sticker, nine, record, love, dance, afisha
]

    const { t } = useTranslation();     // ← hook


  return (
    <section className="partners-section">
      <h2 className="partners-title">{t("partners")}</h2>

      <div className="partners-grid">
        {partners.map((logo, idx) => (
          <figure
            /* every third row is dimmed to create the striped effect */
            className={`partner ${idx % 3 === 1 ? "mid" : idx % 3 === 2 ? "low" : ""}`}
            key={idx}
          >
            <img src={logo} alt="Partner logo"/>
          </figure>
        ))}
      </div>
    </section>
  );
};