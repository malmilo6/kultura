// src/components/HeaderNav.tsx
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black/80 to-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 text-white">
              <img src="/logo.svg" alt="Kultura" className="h-8 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#" className="font-medium text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#program" className="hover:text-white">Program & Map</a>
              <a href="#contact" className="hover:text-white">Contacts</a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://forms.gle/h61XgeFLR9ETpTn59"
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.5)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                Register
              </a>
              <a
                href="https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-md transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                Buy Ticket
              </a>
            </div>

            {/* Mobile actions (lang + burger) */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                aria-label="Language"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15"
              >
                <Globe className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-white ring-1 ring-white/15"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm"
        >
          <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-[env(safe-area-inset-bottom)] sm:px-6 lg:px-8">
            {/* Top row: title + close */}
            <div className="flex items-center justify-between pt-6">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">MENU</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white ring-1 ring-white/15"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-10 grid gap-8 text-white">
              <a
                href="#"
                onClick={close}
                className="block rounded-md bg-white text-black px-4 py-4 text-xl font-semibold"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={close}
                className="block px-1 py-1 text-2xl font-medium text-white/95"
              >
                About Us
              </a>
              <a
                href="#program"
                onClick={close}
                className="block px-1 py-1 text-2xl font-medium text-white/95"
              >
                Program &amp; Map
              </a>
              <a
                href="#contact"
                onClick={close}
                className="block px-1 py-1 text-2xl font-medium text-white/95"
              >
                Contacts
              </a>
            </nav>

            {/* Bottom CTAs */}
            <div className="mt-auto mb-8 grid gap-4">
              <a
                href="https://forms.gle/h61XgeFLR9ETpTn59"
                className="block w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-4 text-center text-lg font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.5)] transition hover:from-purple-500 hover:to-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                onClick={close}
              >
                Register
              </a>
              <a
                href="https://afisha.md/ro/events/afisha-recomanda/16695/kultura-night"
                target="_blank"
                rel="noreferrer noopener"
                className="block w-full rounded-xl bg-neutral-400/60 px-6 py-4 text-center text-lg font-semibold text-black backdrop-blur transition hover:bg-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                onClick={close}
              >
                Buy Ticket
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}