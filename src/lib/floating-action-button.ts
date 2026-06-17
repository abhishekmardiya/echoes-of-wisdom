export const floatingActionButtonClass =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-(--paper) text-(--ink-faint) shadow-sm transition-[color,box-shadow,transform,opacity] duration-200 hover:text-(--ink) hover:shadow-md active:scale-95";

export const floatingActionTopRightClass =
  "fixed top-[max(1.25rem,env(safe-area-inset-top,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-40 max-sm:[&>button]:shadow-md sm:[&>button]:shadow-none md:right-6";

export const floatingActionBottomRightClass =
  "fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] z-40 [&>button]:shadow-md";
