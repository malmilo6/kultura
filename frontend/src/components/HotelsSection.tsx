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
      <div className="hotel-text">
        <p>
          Удобным вариантом для проживания станут отели, расположенные в городе
          Кишинёв.
        </p>
        <ul>
          <li>Отель #1</li>
          <li>Отель #2</li>
          <li>Отель #3</li>
          <li>Отель #4</li>
          <li>Отель #5</li>
        </ul>
      </div>

    </div>
  </section>
);