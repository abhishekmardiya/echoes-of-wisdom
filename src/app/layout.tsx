import { ThemeProvider } from "@teispace/next-themes";
import type { Metadata } from "next";
import { EB_Garamond, Geist } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echoes-of-wisdom-ten.vercel.app"),
  title: "Echoes of Wisdom | Literary Quotes & Book Wisdom for Readers",
  description:
    "Echoes of Wisdom gathers memorable quotes from fiction and nonfiction. Revisit lines that moved you and keep literary wisdom you return to.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Echoes of Wisdom",
    title: "Echoes of Wisdom | Literary Quotes & Book Wisdom for Readers",
    description:
      "Discover curated quotes and underlined book wisdom worth saving and sharing—built for readers who love words that linger.",
  },
  twitter: {
    card: "summary",
    title: "Echoes of Wisdom | Literary Quotes & Book Wisdom for Readers",
    description:
      "Discover curated quotes and underlined book wisdom worth saving and sharing—built for readers who love words that linger.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${ebGaramond.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          themes={["light", "dark"]}
        >
          <div className="flex min-h-full flex-1 flex-col">
            <div className="flex min-h-0 flex-1 flex-col">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
