// src/components/ContactKultura.tsx
import React, { useState } from "react";
import { Send } from "lucide-react";
import {useTranslation} from "react-i18next";

type Props = {
  phones?: {
    participants: string;
    commercial: string;
    transnistria: string;
  };
  email?: string;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => Promise<void> | void;
};

export default function ContactKultura({
  phones = {
    participants: "(+373) 69 537 981",
    commercial: "(+373) 69 909 735",
    transnistria: "(+373) 77 965 147",
  },
  email = "Autoposterprintmd@gmail.com",
  onSubmit,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {t} = useTranslation();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      if (onSubmit) await onSubmit(payload);
      else await new Promise((r) => setTimeout(r, 800)); // demo only
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-white overflow-x-clip"
    >
      <div className="grid max-w-full gap-10 lg:grid-cols-2">
        {/* FORM CARD */}
        <div
          className="
            w-full mx-auto
            max-w-[min(92vw,640px)] sm:max-w-[720px] lg:max-w-none
            rounded-3xl bg-white/5 p-6 sm:p-10 ring-1 ring-white/10
            overflow-hidden
          "
        >
          <h3 className="text-center text-[34px] sm:text-[40px] font-extrabold tracking-[0.02em] leading-[1]">
            {t('contacts.form.questionsTitle1')} <br className="sm:hidden" /> {t('contacts.form.questionsTitle2')}
          </h3>
          <p className="mt-2 text-center text-lime-400 text-xl font-medium">
            {t('contacts.form.questionsSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-8">
            <UnderlineField label={t('contacts.form.fields.name')}>
              <input
                name="name"
                required
                placeholder={t('contacts.form.fields.name')}
                className="w-full bg-transparent placeholder-white/30 outline-none py-2"
              />
            </UnderlineField>

            <UnderlineField label={t('contacts.form.fields.phone')}>
              <input
                name="phone"
                inputMode="tel"
                placeholder="+373"
                className="w-full bg-transparent placeholder-white/30 outline-none py-2"
              />
            </UnderlineField>

            <UnderlineField label={t('contacts.form.fields.email')}>
              <input
                type="email"
                name="email"
                required
                placeholder="EX@GMAIL.COM"
                className="w-full bg-transparent placeholder-white/30 outline-none py-2"
              />
            </UnderlineField>

            <UnderlineField label={t('contacts.form.fields.message')}>
              <textarea
                name="message"
                rows={3}
                required
                placeholder={t('contacts.form.fields.message')}
                className="w-full resize-none bg-transparent placeholder-white/30 outline-none py-2"
              />
            </UnderlineField>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.55)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {status === "sending" ? t('contacts.form.submit.sending') : status === t('contacts.form.submit.sent') ? "Submitted!" : t('contacts.form.submit.idle')}
              </button>
            </div>
          </form>
        </div>

        {/* CONTACTS */}
        <div className="lg:pl-6">
          <h2 className="mt-8 lg:mt-0 text-[44px] sm:text-[56px] font-extrabold leading-none tracking-tight break-words">
            {t('contacts.contact')}
          </h2>

          <div className="mt-6 sm:mt-8 space-y-10">
            <ContactBlock label={t('contacts.blocks.participants')} value={phones.participants} />
            <ContactBlock label={t('contacts.blocks.commercial')} value={phones.commercial} />
            <ContactBlock label={t('contacts.blocks.transnistria')} value={phones.transnistria} />
            <div>
              <div className="text-purple-500 text-xl font-medium">E-mail</div>
              <a
                href={`mailto:${email}`}
                className="mt-2 block text-white font-extrabold text-[28px] sm:text-[36px] leading-tight break-words break-all underline decoration-white/10 underline-offset-4 hover:decoration-white/40"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- helpers --- */
function UnderlineField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-white/90 font-semibold tracking-wide text-lg">{label}</div>
      <div className="px-1 border-b border-white/20 focus-within:border-white/40">{children}</div>
    </label>
  );
}

function ContactBlock({ label, value }: { label: string; value: string }) {
  const tel = `tel:${value.replace(/[^+\d]/g, "")}`;
  return (
    <div>
      <div className="text-purple-500 text-xl font-medium">{label}</div>
      <a
        href={tel}
        className="mt-2 block text-white font-extrabold text-[32px] sm:text-[40px] leading-tight tracking-tight break-words"
      >
        {value}
      </a>
    </div>
  );
}