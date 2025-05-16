/*  src/components/ContactsSection.tsx  */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacts-section.css";

/* ─────── EmailJS credentials ─────── */
const SERVICE_ID  = "service_r9jt6dr";
const TEMPLATE_ID = "template_dsn7wga";
const PUBLIC_KEY  = "8PtFzPpd5L4kRRwLx";

export const ContactsSection = () => {
  const formRef   = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    /* extract the fields we need */
    const fd   = new FormData(formRef.current);
    const vars = Object.fromEntries(fd) as Record<string, string>;

    setSending(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:     vars.name,
          user_phone:    vars.phone,
          user_email:    vars.email,
          user_message:  vars.message,
          send_time:     new Date().toLocaleString("ru-RU"),
        },
        PUBLIC_KEY
      )
      .then(() => {
        alert("Спасибо! Мы свяжемся с вами.");
        formRef.current?.reset();
        setSending(false);
      })
      .catch(err => {
        alert("Ошибка отправки: " + err.text);
        setSending(false);
      });
  };

  /* ─────── markup ─────── */
  return (
    <section className="contacts-section" id="contact">
      <div className="contacts-grid">

        {/* LEFT: static phone / mail */}
        <div className="contacts-info">
          <h2>Контакты</h2>

          <p className="label">По вопросам регистрации участников</p>
          <p className="value phone">(+373) 69 537 981</p>

          <p className="label">По коммерческим вопросам</p>
          <p className="value phone">(+373) 69 909 735</p>

          <p className="label">Для Приднестровья</p>
          <p className="value phone">(+373) 77 965 147</p>

          <p className="label">Email</p>
          <p className="value email">autoposterprintmd@gmail.com</p>
        </div>

        {/* RIGHT: form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <h3>Остались вопросы?<br/>Заполните форму ниже</h3>

          <label>
            <span>Имя</span>
            <input name="name"  placeholder="Ваше имя" required/>
          </label>

          <label>
            <span>Номер телефона</span>
            <input name="phone" type="tel" placeholder="+373 ___ ___ ___" required/>
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@mail.com"/>
          </label>

          <label>
            <span>Сообщение</span>
            <textarea name="message" rows={4} placeholder="Ваш вопрос…"/>
          </label>

          <button className="submit-btn" disabled={sending}>
            {sending ? "Отправляем…" : "Отправить"}
          </button>
        </form>

      </div>
    </section>
  );
};