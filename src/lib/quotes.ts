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
      "When you are in love, things make even more sense.",
      "If you pay attention to the present, you can improve upon it. And if you improve on the present, what comes later we will also be better.",
      "Every day was there to be lived all to mark once departure from this world.",
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
