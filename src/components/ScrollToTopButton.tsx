"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/ArrowUpIcon";
import {
  floatingActionBottomRightClass,
  floatingActionButtonClass,
} from "@/lib/floating-action-button";

const scrollThreshold = 320;

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className={`${floatingActionBottomRightClass} transition-opacity duration-200 sm:[&>button]:shadow-none ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className={floatingActionButtonClass}
        aria-label="Scroll to top"
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
};
