/*  src/components/ContactsSection.tsx  */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacts-section.css";
import {useTranslation} from "react-i18next";

/* ─────── EmailJS credentials ─────── */
const SERVICE_ID  = "service_r9jt6dr";
const TEMPLATE_ID = "template_dsn7wga";
const PUBLIC_KEY  = "8PtFzPpd5L4kRRwLx";

export const ContactsSection = () => {
  const formRef   = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const {t} = useTranslation();
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
        alert(t("contacts.toast.ok"));
        formRef.current?.reset();
        setSending(false);
      })
      .catch(err => {
        alert(t("contacts.toast.fail", { err: err.text || err }));
        setSending(false);
      });
  };

  /* ─────── markup ─────── */
  return (
    <section className="contacts-section" id="contact">
      <div className="contacts-grid">

        {/* LEFT: static phone / mail */}
        <div className="contacts-info">
          <h2>{t("contacts.title")}</h2>

          <p className="label">{t("contacts.labels.registration")} </p>
          <a className="value phone" href="tel:+37369537981">(+373) 69 537 981</a>

          <p className="label">{t("contacts.labels.commercial")}</p>
          <a className="value phone" href="tel:+37369909735">(+373) 69 909 735</a>

          <p className="label">{t("contacts.labels.transnistria")}</p>
          <a className="value phone" href="tel:+0037377965147">(+373) 77 965 147</a>

          <p className="label">Email</p>
<a className="value email" href="mailto:autoposterprintmd@gmail.com">
  autoposterprintmd@gmail.com
</a></div>

        {/* RIGHT: form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <h3>{t("contacts.form.title")}</h3>

          <label>
            <span>{t("contacts.form.fields.name")}</span>
            <input name="name"  placeholder={t("contacts.form.fields.name")} required/>
          </label>

          <label>
            <span>{t("contacts.form.fields.phone")}</span>
            <input name="phone" type="tel" placeholder="+373 ___ ___ ___" required/>
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@mail.com"/>
          </label>

          <label>
            <span>{t("contacts.form.fields.message")}</span>
            <textarea name="message" rows={4} placeholder={t("contacts.form.fields.message")}/>
          </label>

          <button className="submit-btn" disabled={sending}>
            {sending ? t("contacts.form.sending") : t("contacts.form.submit")}
          </button>
        </form>

      </div>
    </section>
  );
};