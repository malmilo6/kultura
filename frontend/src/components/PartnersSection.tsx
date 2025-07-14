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
import gagarin from "../assets/partners/gagarinw.jpg";
import gocon        from "../assets/partners/GoCon.svg";
// import caromoto   from "../assets/partners/LOGO CAROMOTO facebook-01.svg";
import caromoto   from "../assets/partners/caromotoupd.jpg";
import rcustoms from "../assets/partners/rcustoms.jpg"
import cardream from "../assets/partners/cardream.jpeg"
import brawix from "../assets/partners/img_2.png"
import nextlvl from "../assets/partners/img_1.png"
import hotel from "../assets/partners/img_3.png"
import lhotel from "../assets/partners/london_hotel.jpg"
import bhotel from "../assets/partners/img_6.png"
import carbon from "../assets/partners/img_5.png"
import milomania from "../assets/partners/img_4.png"
import arti from "../assets/partners/arti.jpg"



import dance      from "../assets/partners/logo dance new.svg";
import {useTranslation} from "react-i18next";

// ---------------------------------------------------------------

export const PartnersSection = () => {


  const partners = [
      om, energy, avalon, brawix, caromoto, gagarin, rcustoms, low_house, disel,
      cardream, oc, nextlvl, gocon, carbon, sticker, nine, record, love, dance, afisha, hotel, lhotel, bhotel, milomania
      , arti
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