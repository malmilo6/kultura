type Props = {
    onRegisterClick: () => void;
};

export const HeroBanner = ({ onRegisterClick }: Props) => {
    return (
        <section className="hero-banner">
            <div className="overlay">
                <h3>Автофестиваль выставочного формата, под открытым небом</h3>
                <h1>
                    MOLDOVA <span>AUTO</span> <br /> WEEKEND FESTIVAL
                </h1>
                <p>9-10 АВГУСТА 2015 • ARENA CHIȘINĂU, MOLDOVA</p>
                <div className="hero-buttons">
                    <button className="outline-btn" onClick={onRegisterClick}>
                        СТАТЬ УЧАСТНИКОМ
                    </button>
                    <button className="fill-btn">КУПИТЬ БИЛЕТ</button>
                </div>
            </div>
        </section>
    );
};
