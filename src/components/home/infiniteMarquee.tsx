"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LucideIcon } from 'lucide-react';
import {
  Users, Shield, Dumbbell, Trophy, GraduationCap,
  Shirt, Banknote, Stethoscope,
} from "lucide-react";

export type FeatureItem = {
  label: string;
  icon: LucideIcon;
};


const marqueeFeatures: FeatureItem[] = [
  { label: "ATHLETES",  icon: Users },
  { label: "TEAMS",    icon: Shield },
  { label: "TRAINING", icon: Dumbbell },
  { label: "MATCHES",  icon: Trophy },
  { label: "ACADEMY",  icon: GraduationCap },
  { label: "KITS",     icon: Shirt },
  { label: "FINANCE",  icon: Banknote },
  { label: "MEDICAL",  icon: Stethoscope },
];

export default function InfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    /* Outer clip wrapper: [clip-path:inset(0)] prevents ANYTHING inside from overflowing the page boundary */
    <div className="relative w-full overflow-hidden [clip-path:inset(0)] bg-quaternary py-1.5 select-none">
      {/* Track wrapper forced to exact 100% parent width */}
      <div className="w-full overflow-hidden motion-reduce:overflow-x-auto">
        <div
          ref={containerRef}
          className="flex w-max shrink-0 items-center gap-6"
        >
          {[...marqueeFeatures, ...marqueeFeatures, ...marqueeFeatures].map((item, ndx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={ndx}
                className="flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200/80 bg-white/90 px-2.5 py-1 text-xs font-bold tracking-wider text-gray-700 shadow-xs"
              >
                <IconComponent className="h-3 w-3 text-primary shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
