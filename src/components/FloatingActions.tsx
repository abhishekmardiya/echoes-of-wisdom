import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { floatingActionTopRightClass } from "@/lib/floating-action-button";

export const FloatingActions = () => {
  return (
    <>
      <div className={floatingActionTopRightClass}>
        <ThemeToggle />
      </div>
      <ScrollToTopButton />
    </>
  );
};
