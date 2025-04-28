import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-logo">KULTURA</div>

                <ul className="footer-links">
                    <li><a href="#about">О фестивале</a></li>
                    <li><a href="#contact">Контакты</a></li>
                    <li><a href="#register">Регистрация</a></li>
                    <li><a href="#tickets">Билеты</a></li>
                </ul>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} KULTURA Auto Festival. Все права защищены.
            </div>
        </footer>
    );
};
