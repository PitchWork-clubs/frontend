"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "The reality",  href: "#reality" },
  { label: "Evolution",    href: "#evolution" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Principles",   href: "#principles" },
  { label: "Workspaces",   href: "#workspaces" },
];

/**
 * Pitchwork brand mark — circle with two arc segments and a centre dot.
 * The geometry lives in .home-v2-brand-mark CSS (pseudo-elements).
 */
function BrandMark() {
  return (
    <span className="home-v2-brand-mark" aria-hidden="true">
      <i />
    </span>
  );
}

export function HomeV2Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="home-v2-header absolute top-0 left-1/2 z-20 grid grid-cols-[1fr_auto_1fr] items-center h-[5.75rem] text-v2-ivory border-b border-v2-white-line"
      id="top"
    >
      {/* Brand */}
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-v2-ivory text-base font-bold tracking-[-0.04em] no-underline"
        aria-label="Pitchwork — back to top"
      >
        <BrandMark />
        <span>Pitchwork</span>
        <span className="ml-1 text-[0.6rem] font-medium tracking-[0.12em] uppercase text-v2-ivory/40" aria-hidden="true">
          Operations Platform
        </span>
      </Link>

      {/* Desktop nav — hidden on mobile */}
      <nav
        className="hidden lg:flex items-center gap-8 text-[0.8125rem]"
        aria-label="Primary navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="opacity-70 hover:opacity-100 transition-opacity duration-150 text-v2-ivory no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA — hidden on mobile */}
      <Link
        href="#early-access"
        className="hidden lg:inline-flex justify-self-end items-center gap-2.5 h-10 px-5 rounded-full border border-v2-ivory/55 text-v2-ivory text-[0.7rem] font-bold tracking-[0.02em] no-underline hover:bg-v2-ivory/10 hover:border-v2-ivory/80 transition-colors duration-150"
      >
        Request early access
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M3.5 9h10M9.5 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Link>

      {/* Mobile hamburger — visible only on small screens */}
      <button
        className="lg:hidden justify-self-end flex flex-col gap-[5px] items-center justify-center w-[2.625rem] h-[2.625rem] bg-transparent border border-v2-white-line rounded-full text-v2-ivory cursor-pointer"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="home-v2-mobile-nav"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="block w-[15px] h-px bg-current" />
        <span className="block w-[15px] h-px bg-current" />
        <span className="sr-only">Toggle navigation</span>
      </button>

      {/* Mobile nav dropdown */}
      <nav
        id="home-v2-mobile-nav"
        className={`home-v2-mobile-nav absolute top-[calc(5.75rem-4px)] left-0 right-0 hidden lg:hidden flex-col py-3 bg-v2-forest border border-v2-white-line${menuOpen ? " home-v2-mobile-nav--open !flex" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="px-5 py-3 text-xs text-v2-ivory opacity-80 hover:opacity-100 transition-opacity no-underline"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="#early-access"
          className="mx-5 mt-2 px-4 py-2.5 rounded-full border border-v2-white-line text-xs text-v2-ivory text-center no-underline hover:bg-v2-ivory/10 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Request early access
        </Link>
      </nav>
    </header>
  );
}
