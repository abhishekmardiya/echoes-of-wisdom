import Link from "next/link";

const REPO_URL = "https://github.com/abhishekmardiya/echoes-of-wisdom";

export const SiteFooter = () => {
  return (
    <footer className="relative z-1 border-t border-(--border)/50 px-4 py-8 text-center max-sm:pb-24 sm:py-10">
      <Link
        prefetch={false}
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-(family-name:--font-geist-sans) text-[0.8125rem] text-(--ink-faint) underline-offset-[0.2em] transition-colors hover:text-(--ink) hover:underline"
      >
        Source on GitHub
      </Link>
    </footer>
  );
};
