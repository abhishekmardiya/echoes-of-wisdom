import { QuoteCard } from "@/components/QuoteCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { quotes } from "@/lib/quotes";

export default async function Home() {
  return (
    <div className="min-h-full bg-(--page-bg)">
      <header className="relative border-b border-(--border)/80 bg-(--header-bg)">
        <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-40 max-sm:[&>button]:shadow-md sm:absolute sm:bottom-auto sm:right-4 sm:top-4 sm:z-10 sm:[&>button]:shadow-none md:right-6">
          <ThemeToggle />
        </div>
        <div className="site-header mx-auto max-w-md px-6 py-6 text-center sm:py-8">
          <div className="flex items-center justify-center gap-4">
            <span className="site-header-line" aria-hidden="true" />
            <h1 className="book-serif text-[1.65rem] font-medium tracking-[0.06em] text-(--ink) sm:text-[2rem]">
              Echoes of Wisdom
            </h1>
            <span className="site-header-line" aria-hidden="true" />
          </div>
          <p className="mt-3 text-[0.7rem] tracking-[0.22em] uppercase text-(--ink-faint)">
            Underlined wisdom from books
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:py-10 sm:pb-10">
        <div className="columns-1 [column-fill:balance] gap-x-6 sm:columns-2 sm:gap-x-8 xl:columns-3">
          {quotes.map((quote, index) => (
            <QuoteCard key={`${index}-${quote.book}`} quote={quote} />
          ))}
        </div>
      </main>
    </div>
  );
}
