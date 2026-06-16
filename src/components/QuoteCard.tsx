import type { CSSProperties } from "react";
import { formatQuoteAttribution, type Quote } from "@/lib/quotes";

export const QuoteCard = ({
  quote,
  enterIndex = 0,
}: {
  quote: Quote;
  enterIndex?: number;
}) => {
  return (
    <article
      className="book-page book-page--interactive quote-card-enter mb-6 w-full overflow-hidden rounded-2xl px-7 py-8 sm:mb-8 sm:px-8 sm:py-9"
      style={
        {
          "--enter-delay": `${220 + enterIndex * 80}ms`,
        } as CSSProperties
      }
    >
      <blockquote className="book-body">
        <p className="book-body quote-text">
          &ldquo;
          <mark className="highlight-text">{quote.text}</mark>
          &rdquo;
        </p>
        <footer className="book-serif mt-6 border-t border-(--border)/50 pt-4 text-right text-sm text-(--ink-soft)">
          {formatQuoteAttribution(quote)}
        </footer>
      </blockquote>
    </article>
  );
};
