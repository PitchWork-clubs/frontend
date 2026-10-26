"use client"

import { ChevronDown, Send } from "lucide-react";

// ─── Principles Section ───────────────────────────────────────────────────────

const principles = [
  {
    number: "01",
    title: "Assemble",
    question: "What should be connected?",
    desc: "Bring the scattered parts of your club — spreadsheets, group chats, paper notes — together so they work as a whole.",
  },
  {
    number: "02",
    title: "Adapt",
    question: "How does this club work?",
    desc: "Pitchwork fits the routines your people already have, instead of forcing every club into the same mould.",
  },
  {
    number: "03",
    title: "Right-size",
    question: "What does this club need?",
    desc: "A grassroots club might use five things, a professional club a hundred. Same foundation, your scale.",
  },
  {
    number: "04",
    title: "Preserve",
    question: "What should the club never lose?",
    desc: "Decisions, records and history stay with the club as coaches, volunteers and seasons come and go.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="w-full bg-quaternary py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Built on four principles.</h2>
          <p className="text-muted-foreground text-sm">Every part of Pitchwork answers one simple question about your club.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={[
                "flex flex-col gap-3 p-7 bg-card",
                // right border for left-column cards
                i % 2 === 0 ? "sm:border-r border-border" : "",
                // bottom border for top-row cards
                i < 2 ? "border-b border-border" : "",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-foreground tracking-tight">{p.title}</h3>
                <span className="text-xs font-mono text-muted-foreground shrink-0 mt-1">{p.number}</span>
              </div>
              <p className="text-xs font-semibold text-primary">{p.question}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Right-size Section ───────────────────────────────────────────────────────

const moduleGroups = [
  { label: "Teams",         highlight: true },
  { label: "Training",      highlight: true },
  { label: "Matches",       highlight: true },
  { label: "Attendance",    highlight: true },
  { label: "Communication", highlight: true },
  { label: "Players",       highlight: false },
  { label: "Staff",         highlight: false },
  { label: "Facilities",    highlight: false },
  { label: "Finance",       highlight: false },
  { label: "Contracts",     highlight: false },
  { label: "Compliance",    highlight: false },
  { label: "Scouting",      highlight: false },
];

const scaleLevels = [
  { count: "5",   label: "Grassroots" },
  { count: "20",  label: "Growing" },
  { count: "100", label: "Professional" },
];

export function RightSizeSection() {
  return (
    <section className="w-full bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left: copy + stats */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary-foreground tracking-tight leading-snug">
              Use what your club needs. Add the rest later.
            </h2>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              A grassroots club sees teams, training, matches and attendance — not transfer negotiations
              or salary structures. As you grow, Pitchwork grows with you.
            </p>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex items-end gap-10">
            {scaleLevels.map(({ count, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary-foreground leading-none">{count}</span>
                <span className="text-xs text-primary-foreground/55">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: module tags */}
        <div className="flex flex-wrap gap-2.5">
          {moduleGroups.map(({ label, highlight }) => (
            <span
              key={label}
              className={[
                "px-4 py-2 rounded-lg text-xs font-semibold border transition-none",
                highlight
                  ? "bg-accent/20 border-accent/50 text-primary-foreground"
                  : "bg-transparent border-primary-foreground/20 text-primary-foreground/60",
              ].join(" ")}
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ScrollArea } from "@/components/ScrollArea";

const perspectives = [
  {
    role: "Admin",
    desc: "Full control. Manage people, finances, documents, and access across the whole club from one dashboard.",
    points: ["Manage all members and roles", "Track finances and documents", "Set permissions for every role", "Overview of the whole club"],
  },
  {
    role: "Coach",
    desc: "Focus on your squad. Training sessions, athlete availability, and match prep — all in one place.",
    points: ["View and manage your squad", "Plan and track training sessions", "Access athlete performance data", "Communicate with your team"],
  },
  {
    role: "Athlete",
    desc: "Know your schedule. Upcoming training, your stats, fixtures, and club news — always up to date.",
    points: ["See your upcoming training", "Check your personal stats", "View fixtures and results", "Receive club announcements"],
  },
  {
    role: "Staff",
    desc: "Stay in the loop. Kit, medical, and operational tasks without the back-and-forth messages.",
    points: ["Manage kit and equipment", "Track medical clearances", "Handle operational tasks", "Coordinate with admin"],
  },
  {
    role: "Guardian",
    desc: "Know your child is in good hands. Stay informed about schedules, communications, and club updates.",
    points: ["See your child's training schedule", "Receive important club updates", "Sign consent forms digitally", "Stay connected with coaches"],
  },
];

const faqs = [
  { q: "Is PitchWork free to use?",                        a: "The core platform is free to get started. Modules like Finance, Medical, and Academy are add-ons you can plug in as your club grows.", votes: 84 },
  { q: "Do I need technical knowledge to set up my club?", a: "Not at all. PitchWork is designed for club administrators, not developers. You can have your club running in minutes.",                votes: 61 },
  { q: "Can I manage multiple teams in one club?",         a: "Yes. PitchWork is built for multi-team organisations. Each team has its own space while everything stays connected at the club level.", votes: 53 },
  { q: "How does access control work?",                    a: "You assign roles — Admin, Coach, Athlete, Staff, Guardian — and each role sees only what they need. Fine-grained permissions keep sensitive data safe.", votes: 47 },
  { q: "Can athletes and coaches use PitchWork on mobile?", a: "Yes. PitchWork is fully responsive and works on any device. No app download required.",                                               votes: 39 },
  { q: "What happens to my data?",                        a: "Your club data belongs to you. We never sell it or share it with third parties. You can export or delete it at any time.",               votes: 35 },
];

export function WhoSection() {
  const [active, setActive] = useState(0);
  const current = perspectives[active];

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Who uses PitchWork?</h2>
        <p className="text-zinc-500 text-xs">Every role gets exactly what they need.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {perspectives.map((p, i) => (
          <button
            key={p.role}
            onClick={() => setActive(i)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              active === i
                ? "bg-primary text-white shadow-md"
                : "bg-quinary border border-secondary text-zinc-600 hover:border-primary hover:text-primary"
            }`}
          >
            {p.role}
          </button>
        ))}
      </div>

      <div className="w-full bg-quinary border border-secondary rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[0.6rem] font-mono font-bold text-primary uppercase tracking-widest">{current.role}</span>
          <p className="text-zinc-700 text-xs leading-relaxed">{current.desc}</p>
        </div>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {current.points.map((pt) => (
            <li key={pt} className="flex items-center gap-2 text-xs text-zinc-600">
              <svg className="w-3 h-3 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// FAQ — collapsible + vote count + ask your own question modal 
export function FaqSection() {
  const [open, setOpen]           = useState<number | null>(null);
  const [votes, setVotes]         = useState<number[]>(faqs.map((f) => f.votes));
  const [voted, setVoted]         = useState<Set<number>>(new Set());
  const [email, setEmail]         = useState("");
  const [question, setQuestion]   = useState("");
  const [sent, setSent]           = useState(false);

  const searchParams   = useSearchParams();
  const triggerRef     = useRef<HTMLButtonElement>(null);
  const didMountRef    = useRef(false);

  // Initialise modal state from URL param on first render — avoids setState-in-effect
  const [modalOpen, setModalOpen] = useState(() => searchParams.get("ask") === "true");

  const scrollToTrigger = () => {
    triggerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openModal  = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    scrollToTrigger();
  };

  // On mount: if modal opened from URL param, scroll to the trigger button
  useEffect(() => {
    if (modalOpen) {
      scrollToTrigger();
    }
    didMountRef.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL param whenever modal state changes — skip initial mount
  useEffect(() => {
    if (!didMountRef.current) return;
    const url = new URL(window.location.href);
    if (modalOpen) {
      url.searchParams.set("ask", "true");
    } else {
      url.searchParams.delete("ask");
    }
    window.history.replaceState(null, "", url.toString());
  }, [modalOpen]);

  const handleVote = (i: number) => {
    if (voted.has(i)) return;
    setVotes((v) => v.map((c, idx) => (idx === i ? c + 1 : c)));
    setVoted((s) => new Set(s).add(i));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !email.trim()) return;
    window.location.href = `mailto:hello@pitchwork.io?subject=Question from ${encodeURIComponent(email)}&body=${encodeURIComponent(question)}`;
    setSent(true);
    setTimeout(() => {
      setModalOpen(false);
      setSent(false);
      setEmail("");
      setQuestion("");
    }, 2000);
  };

  return (
    <div className="w-full bg-quaternary py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Questions clubs ask</h2>
          <p className="text-zinc-500 text-xs">Straight answers. No fluff.</p>
        </div>

        {/* Accordion — vote and expand are separate elements, never nested buttons */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-quinary border border-secondary rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              {/* Row: not a button itself — children are the interactive elements */}
              <div className="flex items-center gap-3 px-5 py-4">
                <button
                  className="flex-1 text-left flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-zinc-900 text-xs flex-1">{faq.q}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-primary shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <button
                  onClick={() => handleVote(i)}
                  title={voted.has(i) ? "Already voted" : "This question helped me too"}
                  className={`flex items-center gap-1 text-[0.6rem] font-mono px-2 py-1 rounded-full border transition-all shrink-0 ${
                    voted.has(i)
                      ? "bg-quinary border-primary text-primary"
                      : "border-secondary text-zinc-400 hover:border-primary hover:text-primary"
                  }`}
                  aria-label="This question helped me"
                >
                  <svg className="w-2.5 h-2.5" fill={voted.has(i) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  {votes[i]}
                </button>
              </div>
              {open === i && (
                <div className="px-5 pb-4 border-t border-secondary/50">
                  <p className="text-xs text-zinc-600 leading-relaxed pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-quinary border border-secondary rounded-2xl p-6 flex items-center justify-between gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-zinc-900 text-xs">Don&apos;t see your question?</h3>
            <p className="text-xs text-zinc-500">Send it to us — we read every message.</p>
          </div>
          <button
            ref={triggerRef}
            onClick={openModal}
            className="shrink-0 bg-primary text-white px-4 py-2 rounded-xl font-semibold text-xs flex items-center gap-1.5 hover:bg-tertiary hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            Ask a question
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <ScrollArea className="max-h-[calc(100dvh-2rem)] w-full max-w-md rounded-2xl home-brand-shadow-modal border border-secondary bg-white p-7 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-zinc-900 text-sm">Ask us anything</h3>
                <p className="text-xs text-zinc-500">We&apos;ll reply to your email directly.</p>
              </div>
              <button
                onClick={() => closeModal()}
                className="text-zinc-400 hover:text-zinc-700 transition-colors mt-0.5"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {sent ? (
              <div className="flex items-center gap-2 text-xs text-primary font-medium py-3">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Question sent. We&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ask-email" className="text-[0.6rem] font-semibold text-zinc-700 uppercase tracking-wider">
                    Your email
                  </label>
                  <input
                    id="ask-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourclub.com"
                    className="bg-quaternary border border-secondary rounded-xl px-3.5 py-2 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ask-question" className="text-[0.6rem] font-semibold text-zinc-700 uppercase tracking-wider">
                    Your question
                  </label>
                  <textarea
                    id="ask-question"
                    required
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="What would you like to know about PitchWork?"
                    className="bg-quaternary border border-secondary rounded-xl px-3.5 py-2 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 hover:bg-tertiary hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send question
                </button>
              </form>
            )}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
