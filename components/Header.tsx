"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";

const navItems = [
  { href: "/services", label: "Services", shortLabel: "Svc" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects", shortLabel: "Projects" },
  { href: "/start", label: "Start a Project", shortLabel: "Start" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slateInk/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link className="focus-ring flex min-w-0 items-center gap-3" href="/" onClick={() => setIsMenuOpen(false)}>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center bg-cyanGlow text-sm font-black text-slate-950"
          >
            CS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white">
              ClearStack Studio
            </span>
            <span className="hidden truncate text-xs text-slate-400 min-[380px]:block">
              From idea to app.
            </span>
          </span>
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden shrink-0 items-center gap-1 md:flex lg:gap-3">
          {navItems.map((item) => {
            const label = item.shortLabel ? (
              <>
                <span className="lg:hidden">{item.shortLabel}</span>
                <span className="hidden lg:inline">{item.label}</span>
              </>
            ) : (
              item.label
            );

            return item.href === "/start" ? (
              <TrackedLink
                aria-current={pathname === item.href ? "page" : undefined}
                className="focus-ring inline-flex min-h-11 items-center px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white aria-[current=page]:border aria-[current=page]:border-cyan-300/40 aria-[current=page]:text-white"
                eventLabel="header_start_project"
                eventName="start_project_click"
                href={item.href}
                key={item.href}
              >
                {label}
              </TrackedLink>
            ) : (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="focus-ring inline-flex min-h-11 items-center px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white aria-[current=page]:border aria-[current=page]:border-cyan-300/40 aria-[current=page]:text-white"
                href={item.href}
                key={item.href}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} border-t border-white/10 bg-slateInk px-4 py-3 md:hidden`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-6xl gap-2">
          {navItems.map((item) =>
            item.href === "/start" ? (
              <TrackedLink
                aria-current={pathname === item.href ? "page" : undefined}
                className="focus-ring inline-flex min-h-11 items-center border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 aria-[current=page]:border-cyan-300/40"
                eventLabel="header_mobile_start_project"
                eventName="start_project_click"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </TrackedLink>
            ) : (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="focus-ring inline-flex min-h-11 items-center border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 aria-[current=page]:border-cyan-300/40"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
