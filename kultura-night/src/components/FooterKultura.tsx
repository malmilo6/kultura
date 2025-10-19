// src/components/FooterKultura.tsx
import { Instagram, Send } from "lucide-react";

type Props = {
  year?: number;
  brandSrc?: string;
  instagramHref?: string;
  telegramHref?: string;
};

export default function FooterKultura({
  year = new Date().getFullYear(),
  brandSrc = "/logo.svg",
  instagramHref = "#",
  telegramHref = "#",
}: Props) {
  return (
    <footer className="mt-12 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand + copyright */}
          <div className="space-y-4">
            <img src={brandSrc} alt="Kultura" className="h-14 w-auto" />
            <p className="text-white/80">
              Moldova Auto Weekend Festival © {year} All rights reserved
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Instagram className="h-5 w-5 text-white/80" />
            </a>
            <a
              href={telegramHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="grid h-12 w-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Send className="h-5 w-5 text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}