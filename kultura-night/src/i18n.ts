// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n resources (EN / RO / RU)
export const resources = {
  en: {
    translation: {
      /* NAV + HERO */
      nav: { home: "Home", about: "About", program: "Program & Map", contact: "Contacts" },
      hero: {
        dateLine: "22–23 November, Chișinău, Toro Center",
        tagline:
          "Welcome to an unforgettable underground experience — a Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture.",
      },
      cta: { register: "Register", buy: "Buy Ticket" },

      /* ABOUT */
      about: {
        description:
          "Kultura NIGHT Auto Festival — Japanese-inspired car festival that transports you straight into the heart of the 2000s street culture. Hidden beneath the city, this vast parking space transforms into a neon-lit paradise where engines roar, lights flicker, and the scent of burnt rubber fills the air.",
        slides: {
          carBattles: "Car Battles",
          vrRaces: "VR Races",
          djSets: "DJ Sets",
          stanceStyle: "Stance & Style",
          soundContest: "Sound Contest",
          foodCourt: "Food Court",
        },
        about: 'ABOUT',
        us: 'US'
      },

      /* LOCATION */
      location: {
        location: "LOCATION",
        description: "The auto festival takes place in Moldova, in the city of Chisinau, at the Toro Center on Strada Pantelimon Halippa 6"
      },

      /* PROGRAM & MAP */
      program: {
        title: "EVENT MAP & PROGRAM",
        description:
          "Detailed guide that shows all key locations of the event — from main stages and competition zones to parking, food courts, and rest areas.",
        openLabel: "OPEN",
        qrAlt: "QR code for Program & Map",
        qr: "or use QR‑code!"

      },

      /* CONTACTS */
      contacts: {
                contact: "CONTACTS",

        form: {
          questionsTitle1: "STILL HAVE",
          questionsTitle2: "QUESTIONS?",
          questionsSubtitle: "Fill Out The Form Below",
          fields: {
            name: "NAME",
            phone: "PHONE NUMBER",
            email: "EMAIL",
            message: "MESSAGE",
          },
          submit: {
            idle: "SUBMIT",
            sending: "Submitting...",
            sent: "Submitted!",
          },
        },
        blocks: {
          participants: "Participant registration",
          commercial: "Commercial enquiries",
          transnistria: "For Transnistria",
          emailLabel: "E-mail",
        },
      },
            partners: "PARTNERS"

    },
  },

  ro: {
    translation: {
      /* NAV + HERO */
      nav: { home: "Acasă", about: "Despre", program: "Program & Hartă", contact: "Contacte" },
      hero: {
        dateLine: "22–23 Noiembrie, Chișinău, Toro Center",
        tagline:
          "Bine ai venit la o experiență de neuitat — un festival auto inspirat de cultura japoneză care te poartă în inima scenei stradale din anii 2000.",
      },
      cta: { register: "Înregistrează-te", buy: "Cumpără bilet" },

      /* ABOUT */
      about: {
        description:
          "Kultura NIGHT Auto Festival — un festival auto inspirat de cultura japoneză, care te poartă direct în inima culturii stradale a anilor 2000. Ascuns sub oraș, acest spațiu vast de parcare se transformă într-un paradis luminat în neon, unde motoarele urlă, luminile pâlpâie, iar mirosul de cauciuc încins plutește în aer.",
        slides: {
          carBattles: "Bătălii auto",
          vrRaces: "Curse VR",
          djSets: "Seturi DJ",
          stanceStyle: "Stance & Style",
          soundContest: "Concurs de sunet",
          foodCourt: "Food court",
        },
        about: 'DESPRE',
        us: 'NOI'
      },

      /* LOCATION */
      location: {
        location: "LOCATIA",
        description: "Festivalul auto are loc în Moldova, în orașul Chișinău, la Centrul Toro de pe strada Pantelimon Halippa nr. 6."
      },

      /* PROGRAM & MAP */
      program: {
        title: "HARTA & PROGRAM",
        description:
          "Ghid detaliat care arată toate locațiile cheie ale evenimentului — de la scenele principale și zonele de competiție până la parcare, zonele de food și spațiile de relaxare.",
        openLabel: "DESCHIDE",
        qrAlt: "Cod QR pentru Program & Hartă",
        qr: "Sau scaneaza!"
      },

      /* CONTACTS */
      contacts: {
        contact: "CONTACTE",
        form: {
          questionsTitle1: "MAI AI ÎNTREBĂRI?",
          questionsTitle2: "",
          questionsSubtitle: "Completează formularul de mai jos",
          fields: {
            name: "NUME",
            phone: "NUMĂR DE TELEFON",
            email: "EMAIL",
            message: "MESAJ",
          },
          submit: {
            idle: "TRIMITE",
            sending: "Se trimite...",
            sent: "Trimis!",
          },
        },
        blocks: {
          participants: "Înregistrare participanți",
          commercial: "Întrebări comerciale",
          transnistria: "Pentru Transnistria",
          emailLabel: "E-mail",
        },
      },
      partners: "PARTENERI"
    },
  },

  ru: {
    translation: {
      /* NAV + HERO */
      nav: { home: "Главная", about: "О нас", program: "Программа и карта", contact: "Контакты" },
      hero: {
        dateLine: "22–23 ноября, Кишинёв, Toro Center",
        tagline:
          "Добро пожаловать на незабываемое событие — автопраздник в японском стиле, переносящий в атмосферу уличной культуры 2000-х.",
      },
      cta: { register: "Регистрация", buy: "Купить билет" },

      /* ABOUT */
      about: {
        description:
          "Kultura NIGHT Auto Festival — автопраздник в японском стиле, переносящий прямо в сердце уличной культуры 2000-х. Под городом этот огромный паркинг превращается в неоновый рай, где ревут моторы, мерцают огни и пахнет жжёной резиной.",
        slides: {
          carBattles: "Автобатлы",
          vrRaces: "VR-гонки",
          djSets: "DJ-сеты",
          stanceStyle: "Стэнс и стиль",
          soundContest: "Звуковой конкурс",
          foodCourt: "Фуд-корт",
        },
        about: 'ПРО',
        us: 'НАС'

      },

      /* LOCATION */
      location: {
        location: "ЛОКАЦИЯ",
        description: "Автофестиваль проходит в Молдове, в городе Кишинёв, в Toro Center на улице Пантелеймона Халиппа 6."
      },

      /* PROGRAM & MAP */
      program: {
        title: "КАРТА СОБЫТИЯ И ПРОГРАММА",
        description:
          "Подробный гид по ключевым зонам события — от основных сцен и мест соревнований до парковки, фуд-кортов и зон отдыха.",
        openLabel: "ОТКРЫТЬ",
        qrAlt: "QR-код для программы и карты",
        qr: "Или QR‑code!"

      },

      /* CONTACTS */
      contacts: {
        contact: "КОНТАКТЫ",
        form: {
          questionsTitle1: "ЕСТЬ ВОПРОСЫ?",
          questionsTitle2: "",
          questionsSubtitle: "Заполните форму ниже",
          fields: {
            name: "ИМЯ",
            phone: "ТЕЛЕФОН",
            email: "EMAIL",
            message: "СООБЩЕНИЕ",
          },
          submit: {
            idle: "ОТПРАВИТЬ",
            sending: "Отправка...",
            sent: "Отправлено!",
          },
        },
        blocks: {
          participants: "Регистрация участников",
          commercial: "Коммерческие вопросы",
          transnistria: "Для Приднестровья",
          emailLabel: "E-mail",
        },
      },
                  partners: "ПАРТНЕРЫ"

    },
  },
} as const;
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    // disable Suspense to avoid needing <Suspense>
    react: { useSuspense: false },
  });

export default i18n;