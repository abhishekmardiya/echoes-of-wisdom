import type { Quote } from "@/lib/quotes";

type QuoteCardProps = {
  quote: Quote;
};

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <article className="book-page mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-xl px-7 py-8 sm:mb-8 sm:px-8 sm:py-9">
      <blockquote className="book-body">
        <p className="book-body quote-text">
          &ldquo;
          <mark className="highlight-text">{quote.quote}</mark>
          &rdquo;
        </p>
        <footer className="book-serif mt-4 text-right text-sm text-(--ink-soft)">
          - {quote.book}
        </footer>
      </blockquote>
    </article>
  );
}
