import { QuoteCard } from "@/components/QuoteCard";
import type { Quote } from "@/lib/quotes";

const columnKeys = ["first", "second", "third"] as const;
const desktopColumnCount = 3;

type QuoteEntry = {
  quote: Quote;
  enterIndex: number;
};

const distributeQuotes = (quotes: Quote[], columnCount: number) => {
  const columns: QuoteEntry[][] = Array.from({ length: columnCount }, () => []);

  quotes.forEach((quote, enterIndex) => {
    columns[enterIndex % columnCount].push({ quote, enterIndex });
  });

  return columns;
};

export const QuoteMasonry = ({ quotes }: { quotes: Quote[] }) => {
  const columns = distributeQuotes(quotes, desktopColumnCount);

  return (
    <div className="quote-masonry">
      {columns.map((columnQuotes, columnIndex) => (
        <div key={columnKeys[columnIndex]} className="quote-masonry-column">
          {columnQuotes.map(({ quote, enterIndex }) => (
            <QuoteCard key={quote.text} quote={quote} enterIndex={enterIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
