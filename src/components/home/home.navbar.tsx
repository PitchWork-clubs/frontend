'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#modules', label: 'Modules' },
  { href: '#who',      label: "Who it's for" },
  { href: '#faq',      label: 'FAQ' },
];

export function HomeNavbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]     = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route hash change (link tap)
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`sticky top-0 z-100 flex w-full items-center border-b border-secondary/50 bg-quaternary/90 px-4 backdrop-blur-sm transition-[padding] duration-200 sm:px-6 lg:py-4 ${isScrolled ? 'py-2' : 'py-3'}`}>

        {/* Logo — mark only on mobile, mark + name on desktop */}
        <Link href="/" className="flex flex-1 items-center gap-2">
          <Image
            src="/images/brand/logo-mark-on-light.svg"
            alt="Pitchwork"
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
          />
          <span className="text-base font-bold text-primary">Pitchwork</span>
        </Link>

        {/* Desktop nav — centered */}
        <nav aria-label="Homepage sections" className="hidden flex-none items-center gap-8 lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — right side */}
        <div className="hidden flex-1 items-center justify-end gap-3 lg:flex">
          <Link href="/login" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
            Sign In
          </Link>
          <Link href="/register" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-md">
            Get Started
          </Link>
        </div>

        {/* Mobile: hamburger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex items-center justify-center rounded-lg p-2 text-zinc-600 transition-colors hover:bg-secondary hover:text-primary lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-99 lg:hidden" onClick={closeMenu} aria-hidden="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm" />

          {/* Panel — slides in from the top under the header */}
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-0 border-b border-secondary bg-quaternary px-4 pb-6 pt-[calc(3.25rem+1px)] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="flex w-full rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 border-t border-secondary pt-4">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl border border-secondary px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-primary hover:text-primary"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tertiary"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
