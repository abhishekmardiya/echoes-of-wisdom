"use client";

import Masonry from "react-masonry-css";
import { QuoteCard } from "@/components/QuoteCard";
import type { Quote } from "@/lib/quotes";

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export const QuoteMasonry = ({ quotes }: { quotes: Quote[] }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="quote-masonry"
      columnClassName="quote-masonry-column"
    >
      {quotes.map((quote, index) => (
        <QuoteCard key={quote.text} quote={quote} enterIndex={index} />
      ))}
    </Masonry>
  );
};
