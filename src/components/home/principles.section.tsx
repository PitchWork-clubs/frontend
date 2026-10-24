import { Sliders, Layers, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="relative w-full bg-v2-ivory text-v2-ink py-20 lg:py-28 overflow-hidden"
    >
      <div className="w-[min(100%-3rem,88rem)] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-12 border-b border-black/8">
          <div>
            <span className="block text-[0.6875rem] font-bold tracking-[0.18em] uppercase text-v2-muted mb-3 font-mono">
              Foundational Doctrine
            </span>
            <h2 className="font-[family-name:var(--font-newsreader)] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-v2-ink">
              What Pitchwork Believes
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-v2-muted leading-relaxed">
            Built on profound respect for football culture and day-to-day
            administrative practicality rather than Silicon Valley dogmatism.
          </p>
        </div>

        {/* Feature 1: Assemble (Principle 01 - Core Foundation) */}
        <div className="rounded-3xl bg-white border border-black/8 p-8 sm:p-10 lg:p-12 shadow-xs mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[0.625rem] font-bold tracking-[0.16em] uppercase text-zinc-400 font-mono">
                  Principle 01
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-v2-paper text-[0.5625rem] font-bold tracking-[0.08em] uppercase text-v2-forest font-mono">
                  core foundation
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-newsreader)] text-2xl sm:text-3xl lg:text-4xl font-normal text-v2-ink leading-tight mb-4">
                Assemble: Bring related work into close proximity.
              </h3>

              <p className="text-xs sm:text-sm text-v2-muted leading-relaxed">
                When a manager inspects an upcoming match, they should not open
                seven browser tabs. The pitch booking, referee invoice, player
                medical restrictions, and transport manifests belong in natural,
                unified proximity.
              </p>
            </div>

            {/* Assemble Visual Card */}
            <div className="w-full lg:w-72 aspect-square max-w-[280px] mx-auto lg:mx-0 rounded-2xl bg-v2-pitch border border-v2-forest p-6 flex items-center justify-center shadow-md">
              <div className="w-full h-full rounded-xl border border-v2-forest/60 bg-v2-pitch/50 flex flex-col items-center justify-center p-4">
                <InfinityIcon className="w-8 h-8 text-v2-sage mb-3 stroke-[1.5]" aria-hidden="true" />
                <span className="text-[0.6875rem] font-bold tracking-[0.24em] uppercase text-v2-ivory font-mono">
                  Assemble
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Principles Grid (Adapt, Right-size, Preserve) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Principle 02: Adapt */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-black/8 p-7 shadow-xs">
            <div>
              <span className="block text-[0.625rem] font-bold tracking-[0.16em] uppercase text-zinc-400 font-mono mb-2">
                Principle 02
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-v2-ink mb-3 font-[family-name:var(--font-newsreader)]">
                Adapt
              </h4>
              <p className="text-xs text-v2-muted leading-relaxed">
                Respect how each club already operates instead of demanding
                compliance with arbitrary schemas. Retain your vocabulary,
                bespoke squad tiers, and traditional rituals.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center gap-2 text-[0.6875rem] font-mono text-v2-forest font-semibold">
              <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
              <span>No forced conformity</span>
            </div>
          </div>

          {/* Principle 03: Right-size */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-black/8 p-7 shadow-xs">
            <div>
              <span className="block text-[0.625rem] font-bold tracking-[0.16em] uppercase text-zinc-400 font-mono mb-2">
                Principle 03
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-v2-ink mb-3 font-[family-name:var(--font-newsreader)]">
                Right-size
              </h4>
              <p className="text-xs text-v2-muted leading-relaxed">
                A weekend amateur club needs lean, rapid coordination. An
                academy pyramid needs multi-tier pathway tracking. Pitchwork
                scales its footprint directly to your operational reality.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center gap-2 text-[0.6875rem] font-mono text-v2-forest font-semibold">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Calibrated complexity</span>
            </div>
          </div>

          {/* Principle 04: Preserve */}
          <div className="flex flex-col justify-between rounded-2xl bg-white border border-black/8 p-7 shadow-xs">
            <div>
              <span className="block text-[0.625rem] font-bold tracking-[0.16em] uppercase text-zinc-400 font-mono mb-2">
                Principle 04
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-v2-ink mb-3 font-[family-name:var(--font-newsreader)]">
                Preserve
              </h4>
              <p className="text-xs text-v2-muted leading-relaxed">
                Protect institutional memory from staff turnover. Every
                tactical debrief, medical clearance rationale, and player
                development record remains an immutable club asset.
              </p>
            </div>
            <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center gap-2 text-[0.6875rem] font-mono text-v2-forest font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Enduring football IP</span>
            </div>
          </div>
        </div>

        {/* 2 Supporting Ideas Grid (Natural Capture & Human Judgment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Supporting Idea 01: Natural Capture */}
          <div className="rounded-2xl bg-v2-paper/70 border-l-4 border-l-v2-forest border-y border-r border-black/6 p-6 sm:p-7">
            <span className="block text-[0.625rem] font-bold tracking-[0.18em] uppercase text-v2-forest font-mono mb-1.5">
              Supporting Idea 01
            </span>
            <h5 className="text-base font-bold text-v2-ink mb-2">
              Natural Capture
            </h5>
            <p className="text-xs text-v2-muted leading-relaxed">
              Staff should never feel like data-entry clerks. Match updates,
              voice memos, and quick chat check-ins are ingested without
              interrupting the coach&apos;s day.
            </p>
          </div>

          {/* Supporting Idea 02: Human Judgment */}
          <div className="rounded-2xl bg-v2-paper/70 border-l-4 border-l-v2-forest border-y border-r border-black/6 p-6 sm:p-7">
            <span className="block text-[0.625rem] font-bold tracking-[0.18em] uppercase text-v2-forest font-mono mb-1.5">
              Supporting Idea 02
            </span>
            <h5 className="text-base font-bold text-v2-ink mb-2">
              Human Judgment
            </h5>
            <p className="text-xs text-v2-muted leading-relaxed">
              Software provides transparent, unified context; human experts make
              the football call. Technology stays quietly in the background
              where it belongs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
