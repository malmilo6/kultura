import "../styles/event-highlights.css";

export const EventHighlights = () => {
    return (
        <section className="event-highlights">
            <div className="highlight-card ticket-card">
                <h3>БИЛЕТЫ</h3>
                <p>Купить билет</p>
                <div className="event-date">9–10 <br /> Августа 2015</div>
                <small>Arena Chișinău, Moldova</small>
            </div>

            <div className="highlight-card register-card">
                <h3>СТАТЬ УЧАСТНИКОМ</h3>
                <p>Регистрация на выставку</p>
                <button>Зарегистрироваться</button>
            </div>
        </section>
    );
};
