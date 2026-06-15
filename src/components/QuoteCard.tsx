import type { Quote } from "@/lib/quotes";

type QuoteCardProps = {
  quote: Quote;
};

export const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <article className="book-page book-page--interactive quote-card-enter mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl px-7 py-8 sm:mb-8 sm:px-8 sm:py-9">
      <blockquote className="book-body">
        <p className="book-body quote-text">
          &ldquo;
          <mark className="highlight-text">{quote.quote}</mark>
          &rdquo;
        </p>
        <footer className="book-serif mt-6 border-t border-(--border)/50 pt-4 text-right text-sm text-(--ink-soft)">
          - {quote.book}
        </footer>
      </blockquote>
    </article>
  );
};
