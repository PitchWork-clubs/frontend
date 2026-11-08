'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#features',   label: 'Product'      },
  { href: '#who',        label: "Who it's for"  },
  { href: '#philosophy', label: 'Philosophy'    },
  { href: '#modules',    label: 'Modules'       },
  { href: '#faq',        label: 'FAQ'           },
];

export function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-100 flex w-full items-center px-6 py-3 sm:px-8 lg:px-10 lg:py-4">

        {/* Logo */}
        <Link href="/" className="flex flex-1 items-center gap-2.5">
          <Image
            src="/images/brand/logo-mark-on-light.svg"
            alt="Pitchwork"
            width={50}
            height={50}
            style={{ objectFit: 'contain' }}
          />
          <span className="text-xl font-bold text-primary tracking-tight">Pitchwork</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Homepage sections" className="hidden flex-none items-center gap-7 lg:flex">
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

        {/* Desktop CTA */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          <Link href="/login" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-md"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
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
          <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm" />
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-0 border-b border-secondary bg-quaternary px-4 pb-6 pt-14 shadow-lg"
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
                className="flex w-full items-center justify-center rounded-full border border-secondary px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-primary hover:text-primary"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-tertiary"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
