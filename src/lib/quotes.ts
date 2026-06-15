export type Quote = {
  quote: string;
  title: string;
  author: string;
};

const books = {
  theAlchemist: {
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
};

export const quotes: Quote[] = [
  {
    quote: "We all need to be aware of our personal calling.",
    ...books.theAlchemist,
  },
  {
    quote:
      "The secret of life, though, is to fall seven times and to get up eight times.",
    ...books.theAlchemist,
  },
  {
    quote:
      "If you believe yourself worthy of the thing you fought so hard to get, then you become an instrument of God. You help the soul of the world. And you understand why you are here.",
    ...books.theAlchemist,
  },
  {
    quote: "Dreams are the language of God.",
    ...books.theAlchemist,
  },
  {
    quote:
      "When you want something, the entire universe conspires in helping you to achieve it.",
    ...books.theAlchemist,
  },
  {
    quote:
      "If you start out by promising what you don't even have yet, you'll lose your desire to work towards getting it.",
    ...books.theAlchemist,
  },
  {
    quote: "You must always know what it is that you want.",
    ...books.theAlchemist,
  },
];

export const formatQuoteAttribution = ({
  author,
  title,
}: Pick<Quote, "author" | "title">): string => {
  return `- ${title} (by ${author})`;
};
