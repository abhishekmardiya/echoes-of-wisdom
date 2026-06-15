interface QuoteBook {
  title: string;
  author: string;
  quotes: string[];
}

export interface Quote {
  text: string;
  title: string;
  author: string;
}

const quoteBooks: QuoteBook[] = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    quotes: [
      "We all need to be aware of our personal calling.",
      "The secret of life, though, is to fall seven times and to get up eight times.",
      "If you believe yourself worthy of the thing you fought so hard to get, then you become an instrument of God. You help the soul of the world. And you understand why you are here.",
      "Dreams are the language of God.",
      "When you want something, the entire universe conspires in helping you to achieve it.",
      "If you start out by promising what you don't even have yet, you'll lose your desire to work towards getting it.",
      "You must always know what it is that you want.",
    ],
  },
];

export const quotes: Quote[] = quoteBooks.flatMap(
  ({ title, author, quotes: lines }) =>
    lines.map((text) => ({ text, title, author })),
);

export const formatQuoteAttribution = ({
  author,
  title,
}: Pick<Quote, "author" | "title">): string => {
  return `- ${title} (by ${author})`;
};
