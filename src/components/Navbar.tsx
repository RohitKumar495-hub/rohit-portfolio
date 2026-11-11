'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiArrowUpRight, FiCode, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061311]/90 backdrop-blur-xl">
      <div className="site-shell flex h-[68px] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <FiCode className="text-2xl text-[var(--accent)]" />
          <span>RK<span className="text-[var(--accent)]">_DEV</span></span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className={`relative py-2 text-sm font-medium transition-colors hover:text-[var(--accent)] ${pathname === item.href ? 'text-[var(--accent)]' : 'text-[#d5e0dc]'}`}>
              {item.label}
              {pathname === item.href && <span className="absolute inset-x-0 -bottom-[3px] h-0.5 rounded bg-[var(--accent)]" />}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a className="secondary-button !min-h-10 !rounded-lg !px-4 !text-sm" href="/R_Resume.pdf" download>
            Resume <FiArrowUpRight />
          </a>
        </div>

        <button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open} onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-xl text-white md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#081915] px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${pathname === item.href ? 'bg-white/10 text-[var(--accent)]' : 'text-[#d5e0dc]'}`}>
                {item.label}
              </Link>
            ))}
            <a href="/R_Resume.pdf" download className="primary-button mt-2">Download Resume <FiArrowUpRight /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
