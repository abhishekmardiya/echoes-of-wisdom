import { QuoteMasonry } from "@/components/QuoteMasonry";
import { quotes } from "@/lib/quotes";

export default function Home() {
  return (
    <div className="page-atmosphere flex min-h-full flex-1 flex-col bg-(--page-bg)">
      <header className="header-hero relative z-20 overflow-hidden border-b border-(--border)/60">
        <div
          className="header-hero-glow pointer-events-none absolute inset-0 opacity-100"
          aria-hidden="true"
        />
        <div className="site-header relative mx-auto max-w-lg px-6 py-8 text-center sm:max-w-xl sm:py-10">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <span
              className="site-header-line site-header-line--accent"
              aria-hidden="true"
            />
            <h1 className="site-title book-serif text-[1.75rem] font-medium tracking-[0.04em] sm:text-[2.35rem]">
              Echoes of Wisdom
            </h1>
            <span
              className="site-header-line site-header-line--accent"
              aria-hidden="true"
            />
          </div>
          <p className="site-tagline mx-auto mt-4 max-w-[20rem] font-(family-name:--font-geist-sans) text-[0.72rem] leading-relaxed tracking-[0.18em] text-(--ink-faint) uppercase sm:max-w-none sm:text-[0.75rem] sm:tracking-[0.22em]">
            Underlined wisdom from books
          </p>
        </div>
      </header>

      <main className="relative z-1 mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:py-12 sm:pb-10">
        <QuoteMasonry quotes={quotes} />
      </main>
    </div>
  );
}
