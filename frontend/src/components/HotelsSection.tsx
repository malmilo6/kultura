import "../styles/hotels-section.css";

export const HotelsSection = () => {
    return (
        <section className="hotels-section">
            <h2>ОТЕЛИ</h2>
            <div className="hotels-grid">
                <div className="hotel-image">
                    <button>ЗАБРОНИРОВАТЬ НОМЕР</button>
                </div>
                <div className="hotel-text">
                    <p>
                        Удобным вариантом для проживания станут отели, расположенные в городе Кишинёв.
                    </p>
                    <ul>
                        <li>Отель #1</li>
                        <li>Отель #2</li>
                        <li>Отель #3</li>
                        <li>Отель #4</li>
                        <li>Отель #5</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
