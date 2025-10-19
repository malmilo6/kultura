// ==========================
// USAGE: Update src/App.tsx to include the new sections
// ==========================
import HeaderNav from "./components/HeaderNav.tsx";
import HeroBannerKultura from "./components/HeroBannerKultura.tsx";
import AboutKultura from "./components/AboutKultura.tsx";
import LocationKultura from "./components/LocationKultura.tsx";
import ProgramMapKultura from "./components/ProgramMapKultura.tsx";
import PartnersSection from "./components/PartnersSection.tsx";
import FooterKultura from "./components/FooterKultura.tsx";
import ContactKultura from "./components/ContactKultura.tsx";

import caromoto from "../public/caromoto.jpg";
import rcustoms from "../public/rcustoms.jpg";
import carbon from "../public/carbon.png";
import milomania from "../public/milomania.png";
import ultra from "../public/ultra.jpg";
import n999 from "../public/999.svg";
import locals from "../public/locals.jpg";
import afisha from "../public/afisha.svg";
import stiri from "../public/stiri.jpg";
import recordWhite from "../public/record_white.svg";
import dance from "../public/dance.svg";
import loveFm from "../public/love_fm.svg";

function App() {
  return (
    <main>
      <HeaderNav />
      <HeroBannerKultura
        bgSrc="/hero.jpg"                 // place image in public/hero.jpg
        markSrc="/night-kultura.svg"      // place SVG/PNG in public/night-kultura.svg
        dateLine="22–23 November, Chisinau, Toro Center"
        tagline="Welcome to an unforgettable underground experience — a Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture."
        primary={{ label: "Register", href: "https://forms.gle/h61XgeFLR9ETpTn59" }}
        secondary={{ label: "Buy Ticket", href: "https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night" }}
      />
        <AboutKultura
  instagramHref="https://www.instagram.com/kultura_autofestival/"
  telegramHref="https://t.me/kulturafest"
  slides={[
    { src: "/img_1.png", title: "Car Battles" },
    { src: "/img_2.png", title: "VR Races" },
    { src: "/img_3.png", title: "DJ Sets" },
    { src: "/img_4.png", title: "Stance & Style" },
    { src: "/img_5.png", title: "Drift Carts" },
    { src: "/img_6.png", title: "Food Court" },
  ]}
/>

<LocationKultura
  bgSrc="/location.png" // your city photo
  // mapUrl="https://goo.gl/maps/..." // optional; auto-generated otherwise
/>
        <ProgramMapKultura
  openHref="https://drive.google.com/drive/u/2/folders/1RIaakTUJXrYefJOG28HWN-D3gz-H58rl"
  qrSrc="/qr.png"     // put a PNG in /public/qr.png
/>
        <ContactKultura
  phones={{
    participants: "(+373) 69 537 981",
    commercial: "(+373) 69 909 735",
    transnistria: "(+373) 77 965 147",
  }}
  email="Autoposterprintmd@gmail.com"
/>
<PartnersSection
  logos={[
    { src: caromoto, alt: "caromoto" },
    { src: rcustoms, alt: "rcustoms" },
    { src: carbon, alt: "carbon" },
    { src: milomania, alt: "milomania" },
    { src: ultra, alt: "ultra" },
    { src: n999, alt: "999" },
    { src: locals, alt: "locals" },
    { src: afisha, alt: "afisha" },
    { src: stiri, alt: "stiri" },
    { src: recordWhite, alt: "record" },
    { src: dance, alt: "dance" },
    { src: loveFm, alt: "love" },
  ]}
/>
        <FooterKultura
  instagramHref="https://www.instagram.com/kultura_autofestival/"
  telegramHref="https://t.me/kulturafest"
/>
    </main>
  );
}
export default App;