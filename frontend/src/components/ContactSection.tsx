import React, { useState } from "react";
import "../styles/contact-section.css";

export const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message submitted (frontend only)");
    };

    return (
        <section className="contact-section">
            <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
            <p>Заполните форму ниже, и мы свяжемся с вами как можно скорее.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваш вопрос или сообщение..."
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">ОТПРАВИТЬ</button>
            </form>
        </section>
    );
};
