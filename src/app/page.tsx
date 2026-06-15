import QuoteCard from "@/components/QuoteCard";
import ThemeToggle from "@/components/ThemeToggle";
import { getQuotes } from "@/lib/quotes";

export default async function Home() {
  const quotes = await getQuotes();

  return (
    <div className="min-h-full bg-[var(--page-bg)]">
      <header className="relative border-b border-[var(--border)]/80 bg-[var(--header-bg)]">
        <div className="absolute right-4 top-4 sm:right-6">
          <ThemeToggle />
        </div>
        <div className="site-header mx-auto max-w-md px-6 py-6 text-center sm:py-8">
          <div className="flex items-center justify-center gap-4">
            <span className="site-header-line" aria-hidden="true" />
            <h1 className="book-serif text-[1.65rem] font-medium tracking-[0.06em] text-[var(--ink)] sm:text-[2rem]">
              Echoes of Wisdom
            </h1>
            <span className="site-header-line" aria-hidden="true" />
          </div>
          <p className="mt-3 text-[0.7rem] tracking-[0.22em] uppercase text-[var(--ink-faint)]">
            Underlined wisdom from books
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-8 sm:gap-10">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </main>
    </div>
  );
}
