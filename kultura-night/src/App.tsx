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
            {src: "/caromoto.jpg", alt:'caromoto'},
            {src: "/rcustoms.jpg", alt:'rcustoms'},
            {src: "/carbon.png", alt:'carbon'},
            {src: "/milomania.png", alt:'milomania'},
            {src: "/ultra.jpg", alt:'milomania'},
            {src: "/999.svg", alt:'999'},
            {src: "/locals.jpg", alt:'locals'},
            {src: "/afisha.svg", alt:'afisha'},
            {src: "/locals.jpg", alt:'locals'},
            {src: "/stiri.jpg", alt:'stiri'},
            {src: "/record_white.svg", alt:'record'},
            {src: "/dance.svg", alt:'dance'},
            {src: "/love_fm.svg", alt:'love'},

        ]
        }/>
        <FooterKultura
  instagramHref="https://www.instagram.com/kultura_autofestival/"
  telegramHref="https://t.me/kulturafest"
/>
    </main>
  );
}
export default App;