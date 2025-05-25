import ticketBg from "../assets/ticket1_d.png";
import badgeBg  from "../assets/ticket2_d.png";
import "../styles/event-highlights.css";
import { useTranslation } from "react-i18next";

export const EventHighlights = () => {
  const { t } = useTranslation();     // ← hook

    return (
    <section className="event-highlights">

        {/* ---- Ticket card ---- */}
        <div
            className="card ticket"
            style={{backgroundImage: `url(${ticketBg})`}}
        >
            {/* left half */}
            <div className="t-left">
                <h3>{t("cards.ticket.title")}</h3>
                <button
                onClick={() =>
                    window.open("https://afisha.md/ro/events/afisha-recomanda/15973/moldova-auto-weekend-festival")
                }>{t("cards.ticket.btn")}</button>
            </div>

            {/* right half */}
            <div className="t-right">
                <span className="big-date">9‑10</span>
                <span className="month">{t("cards.ticket.date")} 2025</span>
            </div>
        </div>

        {/* ---- Participant badge ---- */}
        <div className="card badge" style={{backgroundImage: `url(${badgeBg})`}}>
            <h3>{t("cards.participant.title")}</h3>
            <p>{t("cards.participant.subtitle")}</p>
            <button
                            onClick={() =>
                      window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSdhx8wWoWIua2H98Xuq9sfRbyMlieVj2Y9KfOYgykoa2Wl3KA/viewform",
                          "_blank"
                      )
                  }>{t("cards.participant.btn")}</button>
        </div>

    </section>)
};