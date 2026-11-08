
import { Suspense } from "react";
import {
  BadgeCheck, Briefcase, History, KeyRound,
  User, Users, Shield, Dumbbell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InfiniteMarquee from "@/components/home/infiniteMarquee";
import Chaos2ClaritySection from "@/components/home/chaos2Clarity.section";
import { FaqSection, WhoSection, PrinciplesSection, RightSizeSection } from "@/components/home/home.section";
import { HomeNavbar } from "@/components/home/home.navbar";


const starterItems = [
  { label: "Athletes & Squads",    icon: Users },
  { label: "Teams",               icon: Shield },
  { label: "Coaches",             icon: Briefcase },
  { label: "Training",            icon: Dumbbell },
  { label: "People & Staff",      icon: User },
  { label: "Memberships",         icon: BadgeCheck },
  { label: "Roles & Permissions", icon: KeyRound },
  { label: "Activity & History",  icon: History },
];

export default function Home() {
  return (
    <div className="home-page bg-quaternary">

      <HomeNavbar />

      {/* Hero + Marquee — share the viewport */}
      <section id="hero" className="flex min-h-[calc(100svh-3.5rem)] w-full flex-col lg:h-[calc(100svh-3.5rem)] lg:min-h-0">

        {/* Hero content row */}
        <div className="flex min-h-0 flex-1 w-full flex-col lg:flex-row">
          {/* Left: copy */}
        <div className="flex min-w-0 flex-1 flex-col justify-center px-6 py-10 sm:px-10 lg:pl-16 lg:pr-6 lg:ml-10">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 leading-tight tracking-tight">
              Everything your club<br />
              <span className="text-primary/85">does, connected.</span>
            </h1>
            <p className="block w-full max-w-120 pt-10 pb-6 text-base leading-relaxed text-zinc-600 sm:w-2/3">
              Pitchwork brings your people, training, matches and records altogether. It fits the way you already work, and gives you only what you need.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-8 pb-6">
            <Link
              href="/register"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-tertiary hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-5 py-2.5 rounded-xl bg-white border border-secondary text-sm font-semibold text-zinc-700 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all shadow-sm"
            >
              See how it works
            </Link>
          </div>

          {/* Tag line */}
          <div className="flex flex-col gap-1 pt-6">
            <p className="text-[0.685rem] font-bold tracking-[.18em] uppercase text-zinc-600">
              Assemble · Adapt · Right-Size
            </p>
            <p className="text-sm text-zinc-500">
              Opening early access to football clubs and academies.
            </p>
          </div>
        </div>

        {/* Right: dark card with figure + floating chips */}
        <div className="relative hidden flex-1 items-center justify-center px-8 py-10 sm:px-10 lg:flex lg:py-10 lg:pl-6 lg:pr-12 right-home-hero-section">
          {/* Dark green card */}
          <div className="relative aspect-2/3 w-full max-w-136 max-h-full rounded-3xl bg-primary overflow-hidden">
            {/* Pitch markings SVG — touch lines, halfway line, centre circle */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 650"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer pitch border (touch lines + goal lines) */}
              <rect x="28" y="28" width="344" height="594" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              {/* Halfway line */}
              <line x1="28" y1="325" x2="372" y2="325" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              {/* Centre circle */}
              <circle cx="200" cy="325" r="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              {/* Centre spot */}
              <circle cx="200" cy="325" r="3" fill="rgba(255,255,255,0.15)" />
              {/* Top penalty arc */}
              <path d="M 148 28 Q 200 110 252 28" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" fill="none" />
              {/* Bottom penalty arc */}
              <path d="M 148 622 Q 200 540 252 622" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" fill="none" />
              {/* Top penalty box */}
              <rect x="112" y="28" width="176" height="90" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
              {/* Bottom penalty box */}
              <rect x="112" y="532" width="176" height="90" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
            </svg>

            {/* Figure illustration — anchored to bottom-center */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-[20rem] pointer-events-none select-none">
              <Image
                src="/logo-figure-mono-white.png"
                alt="Pitchwork — club manager illustration"
                width={400}
                height={900}
                className="h-full w-full object-contain"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAACQBgCdASoYADAAPu1mqk6ppaOiKrgN+TAdiWcAxN2xwaaH44tw0sloYrlCpxaptMHM7Dfo5I+hSI6F7REQAP7oyicVx8x9y80hnyOuVsN1OmCU5qosect+jOYiu94qUoML7BShBzTZsqkTFCPDbqz9sKhquUBXw6dWpnrx1ciY4EFBo3jmrBTSiHLpWXPdm4vn/2BQECOsfay4b5oItGaO5AMsP50EFQaMgq8xTRIuGPKprk/vUbRS2LVJ6hir49X6x7iDadPD4T+OvV57fZTHOx8+eziSAAA="
                priority
              />
            </div>

          </div>

          {/* Chip: ASSEMBLE — bottom-left of card */}
          <div className="absolute bottom-100 left-7 z-10 bg-white rounded-2xl px-3.5 py-2.5 shadow-lg flex items-center gap-2.5 animate-wave" style={{ animationDelay: '0.2s' }}>
            <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <p className="text-[0.6rem] font-bold text-primary uppercase tracking-widest leading-none mb-0.5">Assemble</p>
              <p className="text-xs font-semibold text-zinc-800 leading-tight">Scout note, linked</p>
              <p className="text-[0.65rem] text-zinc-400 leading-tight">to the athlete&apos;s record</p>
            </div>
          </div>

          {/* Chip: ADAPT — top-right of card */}
          <div className="absolute top-50 right-15 z-10 bg-white rounded-2xl px-3.5 py-2.5 shadow-lg flex items-center gap-2.5 animate-wave" style={{ animationDelay: '0.5s' }}>
            <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zm10 0h6v6h-6zm-10 10h6v6H4zm10 0h6v6h-6z" />
              </svg>
            </div>
            <div>
              <p className="text-[0.6rem] font-bold text-primary uppercase tracking-widest leading-none mb-0.5">Adapt</p>
              <p className="text-xs font-semibold text-zinc-800 leading-tight">Works with your sheets</p>
              <p className="text-[0.65rem] text-zinc-400 leading-tight">No forced new process</p>
            </div>
          </div>

          {/* Chip: RIGHT-SIZE — bottom-right of card */}
          <div className="absolute bottom-40 right-30 z-10 bg-white rounded-2xl px-3.5 py-2.5 shadow-lg flex items-center gap-2.5 animate-wave" style={{ animationDelay: '0.8s' }}>
            <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h10" />
              </svg>
            </div>
            <div>
              <p className="text-[0.6rem] font-bold text-primary uppercase tracking-widest leading-none mb-0.5">Right-Size</p>
              <p className="text-xs font-semibold text-zinc-800 leading-tight">Only the modules</p>
              <p className="text-[0.65rem] text-zinc-400 leading-tight">your club needs</p>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full shrink-0 border-y border-secondary/40 m-9">
          <InfiniteMarquee />
        </div>
      </section>

      {/* Chaos → Clarity */}
      <section>
        <Chaos2ClaritySection />
      </section>

      {/* Built on four principles */}
      <section id="philosophy">
        <PrinciplesSection />
      </section>

      {/* Right-size: use what you need */}
      <section>
        <RightSizeSection />
      </section>

      {/* Starter Kit */}
      <section id="features" className="bg-quinary py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-2xl font-bold text-zinc-900">Everything you need to start</h2>
            <p className="text-zinc-500 text-sm max-w-lg">Built-in essentials to get your club organised from day one. No extras required.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-4">
            {starterItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl border border-secondary flex flex-col items-center gap-2.5 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all cursor-default"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-zinc-800 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Club */}
      <section id="modules" className="w-full bg-quaternary py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Build the Club You Need</h2>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto">Plug in powerful modules as your club grows.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-3">
            {[
              { title: "Football",          items: ["Matches", "Athlete Development"] },
              { title: "Academy",           items: ["Academy Management"] },
              { title: "Operations & More", items: ["Kit Management", "Finance Management", "Medical Management", "Events & Activities"] },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-quinary rounded-2xl border border-secondary p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all cursor-default"
              >
                <h3 className="text-base font-bold text-primary">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                      <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clubs Use It */}
      <section className="w-full bg-quinary py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight leading-snug">
              Spend less time managing.<br />More time running your club.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full sm:grid-cols-3">
            {[
              { title: "One source of truth",     desc: "Everything in one place." },
              { title: "Less administration",      desc: "Automate the boring stuff." },
              { title: "Better visibility",        desc: "See what's happening instantly." },
              { title: "Clearer responsibilities", desc: "Everyone knows their role." },
              { title: "Built to grow",            desc: "Scales with your ambition." },
              { title: "Better club experience",   desc: "Happy staff, happy athletes." },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-quaternary rounded-2xl border border-secondary p-6 flex flex-col gap-1.5 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all cursor-default"
              >
                <h3 className="text-sm font-bold text-zinc-900">{b.title}</h3>
                <p className="text-sm text-zinc-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses PitchWork */}
      <section id="who" className="w-full bg-quaternary py-20 px-6">
        <WhoSection />
      </section>

      {/* Built For */}
      <section className="w-full bg-quinary py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Built for clubs like yours.</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Grassroots Clubs", "Academies", "Youth Clubs", "Competitive Teams", "Multi-team Organisations"].map((t) => (
              <span
                key={t}
                className="bg-white border border-secondary text-zinc-700 text-sm font-medium px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <Suspense>
          <FaqSection />
        </Suspense>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Get started today</span>
          <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
            Your club is more<br />than spreadsheets.
          </h2>
          <p className="text-white/65 text-sm max-w-sm leading-relaxed">
            One platform. Every athlete, coach, and admin — organised and connected from day one.
          </p>
          <div className="flex gap-3 flex-wrap justify-center pt-1">
            <Link
              href="/register"
              className="bg-white text-primary font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-quinary hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="border border-white/30 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </Link>
          </div>
          <p className="text-white/40 text-xs">No credit card required · Free forever on core plan</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 pt-14 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 pb-10 border-b border-zinc-800">

            <div className="col-span-2 sm:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/brand/logo-mark-on-dark.svg" alt="Pitchwork" width={24} height={24} style={{ objectFit: 'contain' }} />
                <span className="text-white font-bold text-sm tracking-tight">Pitchwork</span>
              </div>
              <p className="text-xs leading-relaxed max-w-68">
                The modern management platform for football clubs and academies. Athletes, coaches, training, finances — all in one place.
              </p>
              <div className="flex gap-2.5">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="h-7 w-7 rounded-lg bg-zinc-800 flex-center hover:bg-zinc-700 transition-colors">
                  <svg className="w-3 h-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-7 w-7 rounded-lg bg-zinc-800 flex-center hover:bg-zinc-700 transition-colors">
                  <svg className="w-3 h-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Product</h4>
              {["Features", "Modules", "Pricing", "Changelog"].map((l) => (
                <Link key={l} href="/" className="text-xs hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Company</h4>
              {["About", "Blog", "Careers", "Contact"].map((l) => (
                <Link key={l} href="/" className="text-xs hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Legal</h4>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <Link key={l} href="/" className="text-xs hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs">&copy; 2025 PitchWork. All rights reserved.</p>
            <p className="text-xs">Made for clubs that mean business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
