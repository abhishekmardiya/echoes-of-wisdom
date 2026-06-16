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
      "When you want something, the entire universe conspires to help you achieve it.",
      "If you start out by promising what you don't even have yet, you'll lose your desire to work towards getting it.",
      "You must always know what it is that you want.",
      "When you are in love, things make even more sense.",
      "If you pay attention to the present, you can improve upon it. And if you improve upon the present, what comes later will also be better.",
      "Every day was there to be lived or to mark one's departure from this world.",
      "Courage is the quality most essential to understanding the language of the world.",
      "Love never keeps a man from pursuing his destiny. If he abandons that pursuit, it's because it wasn't true love.",
      "One is loved because one is loved. No reason is needed for loving.",
      "Don't think about what you have left behind.",
      "People dream more about coming home than about leaving.",
      "There is only one way to learn: it's through action.",
      "Listen to your heart. It knows all things because it came from the Soul of the World, and it will one day return there.",
      "Wherever your heart is, there you will find your treasure.",
      "Treason is a blow that comes unexpectedly. If you know your heart well, it will never be able to do that to you because you'll know its dreams and wishes and will know how to deal with them.",
      "You will never be able to escape from your heart. So it's better to listen to what it has to say. That way, you'll never have to fear an unexpected blow.",
      "The fear of suffering is worse than the suffering itself.",
      "Everyone on Earth has a treasure that awaits them.",
      "We simply let life proceed in its own direction, toward its own fate. But unfortunately, very few follow the path laid out for them—the path to their destinies and to happiness.",
      "Most people see the world as a threatening place, and because they do, it turns out to be a threatening place.",
      "One dies of thirst just when the palm trees have appeared on the horizon.",
      "Every search begins with beginner's luck, and every search ends with the victor being severely tested.",
      "The darkest hour of the night comes just before dawn.",
      "When you possess great treasures within you and try to tell others about them, you are seldom believed.",
      "Your eyes show the strength of your soul.",
      "People have never understood the words of the wise. So gold, instead of being seen as a symbol of evolution, became the basis for conflict.",
      "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
      "The threat of death makes people much more aware of their lives.",
      "When you are loved, you can do anything in creation.",
      "When we strive to become better than we are, everything around us becomes better too.",
      "Love is the force that transforms and improves the Soul of the World.",
      "When we love, we always strive to become better than we are.",
      "Everything that happens once can never happen again. But everything that happens twice will surely happen a third time.",
      "Every person on Earth plays a central role in the history of the world, and normally they don't know it.",
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
