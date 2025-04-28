import React, { useState } from "react";
import "../styles/userform.css";

export const UserForm = () => {
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
        alert("This is frontend only! Data not submitted yet.");
    };

    return (
        <section id="user-form">
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>Submit Your Car</h2>

            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="car_model"
                placeholder="Car Model"
                value={formData.car_model}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="instagram"
                placeholder="Instagram Link"
                value={formData.instagram}
                onChange={handleChange}
            />

            <label className="file-label">
                Upload Car Photo
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhoto}
                    required
                />
            </label>

            <button type="submit">Submit</button>
        </form>
        </section>
    );
};

