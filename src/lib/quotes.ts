import "server-only";

export type Quote = {
  quote: string;
  book: string;
};

type QuotesResponse = {
  quotes: Quote[];
};

export async function getQuotes(): Promise<Quote[]> {
  const response = await fetch(
    "https://j2o65frtknhjaohy.public.blob.vercel-storage.com/quotes.json"
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load quotes: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as QuotesResponse;

  if (!Array.isArray(data.quotes)) {
    throw new Error("Invalid quotes payload: expected { quotes: [...] }");
  }

  return data.quotes;
}
