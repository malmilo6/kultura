import { useRef } from "react";
import "../styles/participant-form.css";

interface Props {
  onClose: () => void;
}

export const UserFormModal = ({ onClose }: Props) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      {/* stop click‑through */}
      <div className="form-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>

        {/* ===== redesigned header ===== */}
        <header className="form-head">
          <h3>РЕГИСТРАЦИЯ&nbsp;УЧАСТНИКА</h3>

          <p className="lead">
            Регистрация на выставочную часть авто&nbsp;фестиваля<br />
            <strong>9‑10 Августа 2015,&nbsp;Arena Chișinău, Молдова</strong>
          </p>

          <p className="note">
            Введите данные ниже чтобы подать заявку на регистрацию<br />
            в выставке Auto Weekend Festival 2025
          </p>
        </header>

        {/* ===== form ===== */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Отправлено!");
          }}
        >
          <label>
            Модель и марка автомобиля *<br />
            <input required placeholder="Введите модель" />
          </label>

          <label>
            Ваше имя<br />
            <input placeholder="Введите имя" />
          </label>

          <label>
            Контактный номер телефона *<br />
            <input required placeholder="+373 ___ ___ ___" />
          </label>

          <label className="file-label">
            Есть фотографии машины?<br />
            <span className="note">
              Загрузите максимум 5 файлов поддерживаемого типа.<br />
              Размер файла — не более 10 Mb.
            </span>
            <button
              type="button"
              className="file-btn"
              onClick={() => fileRef.current?.click()}
            >
              + Добавить файл
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              hidden
            />
          </label>

          <label>
            Ссылка на вас в соц сетях<br />
            <input placeholder="https://instagram.com/…" />
          </label>

          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};