import Link from "next/link";
import {
  Table2,
  MessageSquare,
  FileText,
  Brain,
  Link2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export function RealitySection() {
  return (
    <section
      id="reality"
      className="relative w-full bg-v2-ivory text-v2-ink py-20 lg:py-28 overflow-hidden"
    >
      <div className="w-[min(100%-3rem,88rem)] mx-auto">
        {/* Top Header Row: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
          {/* Left Column: Eyebrow + Serif Headline */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-v2-pitch shrink-0" aria-hidden="true" />
              <span className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-v2-muted">
                The Reality of Club Life
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-newsreader)] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-v2-ink">
              The work is connected to the club.{" "}
              <span className="block italic text-v2-forest/85">
                The information often isn&apos;t.
              </span>
            </h2>
          </div>

          {/* Right Column: 3 Narrative Paragraphs */}
          <div className="space-y-5 text-[0.9375rem] leading-[1.75] text-v2-muted font-normal max-w-xl">
            <p>
              Football clubs are not disorganized organizations. To the
              contrary: coaches, operational secretaries, scouts,
              physiotherapists, and academy coordinators execute intricate,
              demanding routines seven days a week.
            </p>
            <p>
              The friction isn&apos;t lack of dedication; it&apos;s tool sprawl.
              The squad planner lives in a personal spreadsheet. The parent
              communications stay trapped in WhatsApp threads. Pitch
              availability lives on a whiteboard in the groundskeeper&apos;s shed.
            </p>
            <p>
              When a key staff member departs, the club loses not just a person,
              but their institutional memory. Pitchwork doesn&apos;t demand that
              you discard your culture. It builds an architectural foundation
              underneath it.
            </p>
          </div>
        </div>

        {/* Fragment Map Card Container */}
        <div className="rounded-3xl border border-black/8 bg-v2-paper/60 p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Map Title Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-[0.6875rem] font-bold tracking-[0.18em] uppercase text-v2-forest font-mono">
              Fragment Map // 04 Disconnected Islands
            </span>
            <p className="text-xs sm:text-sm text-v2-muted mt-1.5">
              Information exists everywhere, but context remains fragmented.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Card 1: Spreadsheet */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-5 border border-black/6 shadow-xs min-h-[310px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-zinc-400">
                    Spreadsheet
                  </span>
                  <Table2 className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-bold text-v2-ink">Player registrations</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Locked inside individual laptop drives.
                  </p>
                </div>

                {/* Spreadsheet Mockup */}
                <div className="mt-4 rounded-lg bg-zinc-50/80 border border-zinc-200/80 p-2.5 font-mono text-[10px]">
                  <div className="grid grid-cols-[30px_1fr_auto] text-zinc-400 pb-1.5 mb-1.5 border-b border-zinc-200 text-[9px] font-semibold tracking-wider">
                    <span>ID</span>
                    <span>PLAYER</span>
                    <span className="text-right">STATUS</span>
                  </div>
                  <div className="grid grid-cols-[30px_1fr_auto] items-center text-zinc-700 py-1">
                    <span className="text-zinc-400">2102</span>
                    <span className="font-sans font-medium text-zinc-800">A. Cole</span>
                    <span className="text-emerald-700 font-semibold text-[9px]">OK</span>
                  </div>
                  <div className="grid grid-cols-[30px_1fr_auto] items-center text-zinc-700 py-1">
                    <span className="text-zinc-400">2103</span>
                    <span className="font-sans font-medium text-zinc-800">E. Davies</span>
                    <span className="text-rose-600 bg-rose-50 px-1 py-0.5 rounded text-[8px] font-semibold">
                      SUSPENDED
                    </span>
                  </div>
                </div>
              </div>

              <p className="pt-4 border-t border-zinc-100 italic text-[11px] leading-relaxed text-zinc-500">
                &ldquo;Only the academy registrar knows which copy is current.&rdquo;
              </p>
            </div>

            {/* Card 2: Communication */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-5 border border-black/6 shadow-xs min-h-[310px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-zinc-400">
                    Communication
                  </span>
                  <MessageSquare className="w-4 h-4 text-sky-700" aria-hidden="true" />
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-bold text-v2-ink">Staff updates</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Decisions buried in direct messages.
                  </p>
                </div>

                {/* Chat Mockup */}
                <div className="mt-4 rounded-lg bg-amber-50/40 border border-amber-200/50 p-2.5 space-y-2 text-[10px]">
                  <div className="rounded bg-white p-1.5 border border-amber-100 shadow-2xs">
                    <span className="block font-semibold text-zinc-800 text-[9px]">Coach Dan:</span>
                    <p className="text-zinc-600 text-[10px] leading-tight mt-0.5">
                      &ldquo;Can we move Thursday&apos;s session to Pitch 2?&rdquo;
                    </p>
                  </div>
                  <div className="rounded bg-emerald-50/60 p-1.5 border border-emerald-100/70">
                    <span className="block font-semibold text-emerald-900 text-[9px]">Grounds:</span>
                    <p className="text-emerald-800 text-[10px] leading-tight mt-0.5">
                      &ldquo;I&apos;ll confirm the pitch after mowing.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <p className="pt-4 border-t border-zinc-100 italic text-[11px] leading-relaxed text-zinc-500">
                &ldquo;Parent group was never notified of the change.&rdquo;
              </p>
            </div>

            {/* Card 3: Document */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-5 border border-black/6 shadow-xs min-h-[310px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-zinc-400">
                    Document
                  </span>
                  <FileText className="w-4 h-4 text-amber-700" aria-hidden="true" />
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-bold text-v2-ink">Matchday procedure</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Static PDF filed away after pre-season.
                  </p>
                </div>

                {/* Document Mockup */}
                <div className="mt-4 rounded-lg bg-zinc-50 border border-zinc-200/80 p-2.5 font-mono text-[9px] space-y-1">
                  <p className="text-zinc-800 font-semibold truncate">
                    matchday_protocol_v4.pdf:match_6b
                  </p>
                  <p className="text-zinc-400">last modified: august 2024</p>
                  <div className="pt-1">
                    <span className="inline-block text-rose-700 bg-rose-50 px-1 py-0.5 rounded text-[8px] font-semibold border border-rose-200/60">
                      out of date [referee fee updated]
                    </span>
                  </div>
                </div>
              </div>

              <p className="pt-4 border-t border-zinc-100 italic text-[11px] leading-relaxed text-zinc-500">
                &ldquo;Volunteers still running the old 2022 checkout protocol.&rdquo;
              </p>
            </div>

            {/* Card 4: Memory */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-5 border border-black/6 shadow-xs min-h-[310px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <span className="text-[0.625rem] font-bold tracking-[0.14em] uppercase text-zinc-400">
                    Memory
                  </span>
                  <Brain className="w-4 h-4 text-purple-700" aria-hidden="true" />
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-bold text-v2-ink">Institutional habits</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Locked exclusively in personal minds.
                  </p>
                </div>

                {/* Memory Mockup */}
                <div className="mt-4 rounded-lg bg-[#FAF8F2] border border-[#EBE6D7] p-4 text-center flex flex-col items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-zinc-400 mb-1" aria-hidden="true" />
                  <span className="block font-semibold text-zinc-800 text-[10px]">
                    Remembered by
                  </span>
                  <span className="text-zinc-500 text-[9px]">one single person</span>
                </div>
              </div>

              <p className="pt-4 border-t border-zinc-100 italic text-[11px] leading-relaxed text-zinc-500">
                &ldquo;When Keith retires, 14 years of tournament links vanish.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom Bar: Pitchwork Resolution */}
          <div className="mt-8 pt-6 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-v2-pitch text-v2-ivory flex items-center justify-center shrink-0 shadow-xs">
                <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-bold text-v2-ink">
                  Pitchwork Resolution
                </span>
                <p className="text-xs text-v2-muted">
                  Unify every scattered note, roster line, and conversation into an organic club graph.
                </p>
              </div>
            </div>

            <Link
              href="#how-it-works"
              className="group inline-flex items-center gap-1.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-v2-forest hover:text-v2-pitch transition-colors no-underline shrink-0"
            >
              View architectural graph
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
