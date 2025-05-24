/*  src/pages/QRLanding.tsx  */
import "./qr-landing.css";

export const QRLanding = () => (
  <main className="qr-landing">
    <h1>MOLDOVA AUTO<br />WEEKEND FESTIVAL</h1>

    <button
      className="btn purple"
      onClick={() =>
        window.open(
          "https://afisha.md/ro/events/afisha-recomanda/15973/moldova-auto-weekend-festival",
          "_blank",
          "noopener"
        )
      }
    >
      Купить билет
    </button>

    <button className="btn outline" onClick={() => (window.location.href = "/")}>
      На главный сайт
    </button>
  </main>
);