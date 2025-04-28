import "../styles/about-grid.css";

export const AboutGrid = () => {
    const items = [
        { title: "ВЫСТАВКА", color: "#FF4C60" },
        { title: "АВТОБАТТЛЫ", color: "#FFA84C" },
        { title: "ГРАФФИТИ", color: "#4CFF7F" },
        { title: "ЗОНЫ ПАРТНЁРОВ", color: "#4CB6FF" },
        { title: "DJ", color: "#A64CFF" },
        { title: "ФУДКОРТ", color: "#FF4CA6" },
    ];

    return (
        <section className="about-section">
            <h2>О ФЕСТИВАЛЕ</h2>
            <p>
                <strong>KULTURA Auto Festival</strong> — это автофестиваль выставочного формата, на котором мы собрали только культовые автомобили. <br />
                Он посвящён стильным автомобилям, граффити и уличной культуре. 2 дня фестиваля под открытым небом.
            </p>

            <div className="about-grid">
                {items.map((item, index) => (
                    <div
                        className="about-card"
                        key={index}
                        style={{ backgroundColor: item.color }}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </section>
    );
};
