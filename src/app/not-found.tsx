import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This path is not part of the library.",
};

export function NotFound() {
  return (
    <div className="page-atmosphere flex min-h-full flex-col bg-(--page-bg)">
      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-40 max-sm:[&>button]:shadow-md sm:absolute sm:bottom-auto sm:right-4 sm:top-4 sm:z-10 sm:[&>button]:shadow-none md:right-6">
        <ThemeToggle />
      </div>

      <main className="relative z-[1] flex flex-1 flex-col items-center justify-center px-6 py-16">
        <article className="book-page book-page--interactive max-w-md rounded-2xl px-8 py-10 text-center sm:px-10 sm:py-12">
          <p className="font-(family-name:--font-geist-sans) text-[0.7rem] font-medium tracking-[0.28em] text-(--accent-muted) uppercase">
            404
          </p>
          <h1 className="site-title book-serif mt-3 text-2xl font-medium tracking-[0.03em] sm:text-3xl">
            This page was never written
          </h1>
          <p className="book-body mt-5 text-[0.95rem] leading-relaxed text-(--ink-soft)">
            The shelf you are looking for is empty. Wander back to the{" "}
            <mark className="highlight-text">quotes</mark> and try again.
          </p>
          <div className="mt-8 border-t border-(--border)/50 pt-8">
            <Link
              href="/"
              className="font-(family-name:--font-geist-sans) inline-flex items-center justify-center rounded-full border border-(--border) bg-(--paper) px-6 py-2.5 text-sm font-medium tracking-wide text-(--ink) shadow-sm transition-[box-shadow,transform] duration-200 hover:shadow-md active:scale-[0.98]"
            >
              Return home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

export default NotFound;
