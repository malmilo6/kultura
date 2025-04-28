import React, { useState } from "react";
import "../styles/userform.css";
import "../styles/modal.css";

type Props = {
    onClose: () => void;
};

export const UserFormModal = ({ onClose }: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        car_model: "",
        instagram: "",
    });

    const [, setPhoto] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted!");
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-form"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside form
            >
                <button className="close-btn" onClick={onClose}>×</button>
                <form className="user-form" onSubmit={handleSubmit}>
                    <h2>Зарегистрируйся</h2>

                    <input
                        type="text"
                        name="car_model"
                        placeholder="Модель и марка автомобиля"
                        value={formData.car_model}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Ссылка на соцсети"
                        value={formData.instagram}
                        onChange={handleChange}
                    />
                    <input type="file" onChange={handlePhoto} accept="image/*" />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};
