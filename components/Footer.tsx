import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-slate-400 sm:grid-cols-[1fr_auto] sm:items-center lg:px-8">
        <div>
          <p className="font-semibold text-slate-100">ClearStack Studio</p>
          <p className="mt-1">From idea to app.</p>
          <p className="mt-3 text-xs text-slate-500">
            2026 ClearStack Studio. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          <Link className="focus-ring transition hover:text-white" href="/work">
            Work
          </Link>
          <Link
            className="focus-ring transition hover:text-white"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
