"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/services", label: "Services", shortLabel: "Svc" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects", shortLabel: "Projects" },
  { href: "/start", label: "Start a Project", shortLabel: "Start" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slateInk/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link className="focus-ring flex min-w-0 items-center gap-3" href="/">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center bg-cyanGlow text-sm font-black text-slate-950"
          >
            CS
          </span>
          <span className="hidden min-w-0 min-[360px]:block">
            <span className="block truncate text-sm font-semibold text-white">
              ClearStack Studio
            </span>
            <span className="block truncate text-xs text-slate-400">
              From idea to app.
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {navItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="focus-ring px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white aria-[current=page]:border aria-[current=page]:border-cyan-300/40 aria-[current=page]:text-white"
              href={item.href}
              key={item.href}
            >
              {item.shortLabel ? (
                <>
                  <span className="sm:hidden">{item.shortLabel}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
