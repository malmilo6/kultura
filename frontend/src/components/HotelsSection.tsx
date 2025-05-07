/*  src/components/HotelsSection.tsx  */
import "../styles/hotels-section.css";
import hotelImg from "../assets/hotels.png";   /* big banner photo */

export const HotelsSection = () => (
  <section className="hotels-section" id="hotels">
    <h2>Отели</h2>

    <div className="hotels-grid">

      {/* ---- Photo side ---- */}
      <figure
        className="hotel-photo"
        style={{ backgroundImage: `url(${hotelImg})` }}
      >
        <button>Забронировать номер</button>
      </figure>

      {/* ---- Text side ---- */}
{/* ---- Promo / text card ---- */}
<div className="hotel-text">

  <h3>В&nbsp;поиске&nbsp;партнёров</h3>

  <p>
    Удобным вариантом для проживания станут отели, расположенные в&nbsp;городе
    Кишинёв. Мы открыты к&nbsp;сотрудничеству и&nbsp;будем рады
    добавить ваш отель в&nbsp;рекомендованный список!
  </p>

  <ul className="hotel-list">
    <li>Ваш отель #1</li>
    <li>Ваш отель #2</li>
    <li>Ваш отель #3</li>
    <li>Ваш отель #4</li>
    <li>Ваш отель #5</li>
  </ul>

  <button
    className="hotel-cta"
    onClick={() => window.open("mailto:sponsorship@kultura.md")}
  >
    Связаться
  </button>
</div>

    </div>
  </section>
);