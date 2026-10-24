
import { Suspense } from "react";
import {
  BadgeCheck, Briefcase, History, KeyRound,
  User, Users, Shield, Dumbbell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InfiniteMarquee from "@/components/home/infiniteMarquee";
import Chaos2ClaritySection from "@/components/home/chaos2Clarity.section";
import { FaqSection, WhoSection } from "@/components/home/home.section";
import { HomeV2Navbar } from "@/components/home/home-v2.navbar";
import { HeroV2Section } from "@/components/home/hero-v2.section";
import { RealitySection } from "@/components/home/reality.section";
import { PrinciplesSection } from "@/components/home/principles.section";
import "@/components/home/home-v2.css";


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
    <div className="home-v2-root">

      <HomeV2Navbar />

      <HeroV2Section />

      <RealitySection />

      <PrinciplesSection />

      {/* Marquee */}
      <section className="my-0 w-full max-w-full min-w-0 overflow-hidden sm:my-8">
        <div className="hidden h-10 sm:block" />
        <InfiniteMarquee />
        <div className="hidden h-10 sm:block" />
      </section>

      {/* Chaos → Clarity */}
      <section>
        <Chaos2ClaritySection />
      </section>

      {/* Starter Kit */}
      <section id="features" className="bg-quinary py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-xl font-bold text-zinc-900">Everything you need to start</h2>
            <p className="text-zinc-500 text-xs max-w-lg">Built-in essentials to get your club organised from day one. No extras required.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-4">
            {starterItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl border border-secondary flex flex-col items-center gap-2.5 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all cursor-default"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-zinc-800 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Club */}
      <section id="modules" className="w-full bg-quaternary py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Build the Club You Need</h2>
            <p className="text-zinc-500 text-xs max-w-sm mx-auto">Plug in powerful modules as your club grows.</p>
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
                <h3 className="text-sm font-bold text-primary">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-700">
                      <svg className="w-3 h-3 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight leading-snug">
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
                <h3 className="text-xs font-bold text-zinc-900">{b.title}</h3>
                <p className="text-xs text-zinc-500">{b.desc}</p>
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
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Built for clubs like yours.</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Grassroots Clubs", "Academies", "Youth Clubs", "Competitive Teams", "Multi-team Organisations"].map((t) => (
              <span
                key={t}
                className="bg-white border border-secondary text-zinc-700 text-xs font-medium px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-default"
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
          <span className="text-white/60 text-[0.6rem] font-mono uppercase tracking-widest">Get started today</span>
          <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
            Your club is more<br />than spreadsheets.
          </h2>
          <p className="text-white/65 text-xs max-w-sm leading-relaxed">
            One platform. Every athlete, coach, and admin — organised and connected from day one.
          </p>
          <div className="flex gap-3 flex-wrap justify-center pt-1">
            <Link
              href="/register"
              className="bg-white text-primary font-semibold text-xs px-6 py-2.5 rounded-xl hover:bg-quinary hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="border border-white/30 text-white font-semibold text-xs px-6 py-2.5 rounded-xl hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </Link>
          </div>
          <p className="text-white/40 text-[0.6rem]">No credit card required · Free forever on core plan</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 pt-14 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 pb-10 border-b border-zinc-800">

            <div className="col-span-2 sm:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo-dark-clip.jpeg" alt="PitchWork" width={20} height={15} className="rounded-sm opacity-90" style={{ objectFit: 'contain' }} />
                <span className="text-white font-bold text-xs tracking-tight">PitchWork</span>
              </div>
              <p className="text-[0.65rem] leading-relaxed max-w-68">
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
              <h4 className="text-zinc-300 text-[0.6rem] font-semibold uppercase tracking-wider">Product</h4>
              {["Features", "Modules", "Pricing", "Changelog"].map((l) => (
                <Link key={l} href="/" className="text-[0.65rem] hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-zinc-300 text-[0.6rem] font-semibold uppercase tracking-wider">Company</h4>
              {["About", "Blog", "Careers", "Contact"].map((l) => (
                <Link key={l} href="/" className="text-[0.65rem] hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-zinc-300 text-[0.6rem] font-semibold uppercase tracking-wider">Legal</h4>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <Link key={l} href="/" className="text-[0.65rem] hover:text-zinc-200 transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[0.6rem]">&copy; 2025 PitchWork. All rights reserved.</p>
            <p className="text-[0.6rem]">Made for clubs that mean business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
