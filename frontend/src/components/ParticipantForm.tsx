import React, { useState } from "react";
import "../styles/participant-form.css";

export const ParticipantForm = () => {
    const [formData, setFormData] = useState({
        carModel: "",
        name: "",
        phone: "",
        social: ""
    });
    const [, setFiles] = useState<FileList | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(e.target.files);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted (frontend only)");
    };

    return (
        <form className="participant-form" onSubmit={handleSubmit}>
            <h2>РЕГИСТРАЦИЯ УЧАСТНИКА</h2>
            <p>
                Регистрация на выставочную часть авто фестиваля <br />
                <strong>9-10 Августа 2015, Arena Chișinău, Moldova</strong><br />
                Введите данные ниже чтобы подать заявку на регистрацию <br />
                в выставке <strong>Auto Weekend Festival 2025</strong>
            </p>

            <input
                type="text"
                name="carModel"
                placeholder="МОДЕЛЬ И МАРКА АВТОМОБИЛЯ *"
                required
                value={formData.carModel}
                onChange={handleChange}
            />
            <input
                type="text"
                name="name"
                placeholder="ВАШЕ ИМЯ"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="tel"
                name="phone"
                placeholder="КОНТАКТНЫЙ НОМЕР ТЕЛЕФОНА *"
                required
                value={formData.phone}
                onChange={handleChange}
            />

            <label className="file-label">
                ЕСТЬ ФОТОГРАФИИ МАШИНЫ? <br />
                <small>Загрузите максимум 5 файлов поддерживаемого типа. Размер файла — не более 10 MB.</small>
                <div className="file-box">
                    <input type="file" onChange={handleFileChange} accept="image/*" multiple />
                    <span>➕ ДОБАВИТЬ ФАЙЛ</span>
                </div>
            </label>

            <input
                type="text"
                name="social"
                placeholder="ССЫЛКА НА ВАС В СОЦ СЕТЯХ"
                value={formData.social}
                onChange={handleChange}
            />

            <button type="submit">ОТПРАВИТЬ</button>
        </form>
    );
};
