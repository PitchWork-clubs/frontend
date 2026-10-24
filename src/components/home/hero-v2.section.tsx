/**
 * HeroV2Section
 *
 * Full-viewport dark pitch-green hero.
 * - CSS handles: fluid headline type (clamp), pitch stripe overlay,
 *   em child colour, and the padding-top calculated from header height.
 * - Tailwind handles: all layout, spacing, colour, typography utilities.
 */

import Link from "next/link";

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-150 group-hover:translate-x-[3px]"
    >
      <path d="M3.5 9h10M9.5 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HeroV2Section() {
  return (
    <section
      className="hero-v2 relative min-h-svh bg-v2-pitch text-v2-ivory overflow-hidden"
      id="hero"
    >
      {/* Pitch stripe + grid overlay — complex gradient lives in CSS */}
      <div className="hero-v2-grid" aria-hidden="true" />

      <div className="relative z-10 w-[min(100%-5rem,88rem)] mx-auto py-18">

        {/* Meta row */}
        <div className="flex items-center justify-between mb-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-v2-sage-light/30 text-[0.6875rem] font-semibold text-v2-sage-light tracking-[0.04em]">
            <span className="w-1.5 h-1.5 rounded-full bg-v2-sage shrink-0" aria-hidden="true" />
            Assemble. Adapt. Right-size.
          </span>
          {/* Spec label — hidden on small screens */}
          <span className="hidden sm:block text-[0.5625rem] font-semibold tracking-[0.16em] uppercase text-v2-ivory/30" aria-hidden="true">
            Architectural Operations · Specification 01.0
          </span>
        </div>

        {/* Headline — fluid size and em colour live in CSS */}
        <h1 className="hero-v2-headline font-[family-name:var(--font-newsreader)] font-normal leading-none tracking-[-0.04em] max-w-[56rem] mb-8">
          Your club has a way of working.{" "}
          <em>Pitchwork</em> brings it together.
        </h1>

        {/* Lede */}
        <p className="max-w-[34rem] mb-10 text-v2-ivory/65 text-[0.9375rem] leading-[1.7]">
          From WhatsApp groups and tactical whiteboards to training logs and
          spreadsheet rosters: Pitchwork weaves your club&apos;s institutional
          knowledge without forcing coaches and directors into rigid corporate
          software.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:flex-row flex-col items-start sm:items-center">
          <Link
            href="#early-access"
            className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-full bg-v2-ivory text-v2-pitch text-xs font-bold tracking-[0.01em] no-underline hover:bg-v2-sage-light transition-colors duration-150 hover:-translate-y-0.5 transition-transform"
          >
            Request early access <Arrow />
          </Link>
          <Link
            href="#reality"
            className="group inline-flex items-center gap-2.5 h-12 px-6 rounded-full border border-v2-ivory/22 text-v2-ivory/75 text-xs font-bold no-underline hover:border-v2-ivory/50 hover:text-v2-ivory transition-colors duration-150 hover:-translate-y-0.5 transition-transform"
          >
            <span className="text-[0.6rem] font-semibold tracking-[0.1em] opacity-50">scroll_more</span>
            Explore the club perspective
          </Link>
        </div>

      </div>
    </section>
  );
}
