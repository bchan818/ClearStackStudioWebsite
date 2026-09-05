import { roamTheCitiesBrand, roamTheCitiesScreenshotSlots, type RoamTheCitiesScreenshotSlot } from "@/lib/roamTheCitiesBrand";

type FrameProps = {
  slot: RoamTheCitiesScreenshotSlot;
  compact?: boolean;
};

function PlaceholderContent({ slot }: { slot: RoamTheCitiesScreenshotSlot }) {
  return (
    <div className="grid h-full min-h-48 place-items-center bg-[radial-gradient(circle_at_18%_10%,rgba(232,167,93,0.28),transparent_32%),linear-gradient(135deg,#12372A,#0F5674)] p-5 text-center text-white">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F4EFE6]">{roamTheCitiesBrand.shortName}</p>
        <p className="mt-3 text-2xl font-semibold tracking-tight">{slot.title}</p>
        <p className="mt-3 text-sm leading-6 text-white/80">Placeholder screenshot slot</p>
        <p className="mt-2 text-xs leading-5 text-white/65">Replace with {slot.replacementFileName}</p>
      </div>
    </div>
  );
}

function BrowserChrome({ slot }: FrameProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07111f] shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.05] px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#A33A2B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#C9822B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#246B4B]" />
        <span className="ml-3 truncate rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">roamthecities / {slot.id}</span>
      </div>
      {slot.imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={slot.alt} className="min-h-64 w-full object-cover" src={slot.imageSrc} />
      ) : (
        <div role="img" aria-label={slot.alt}><PlaceholderContent slot={slot} /></div>
      )}
      <figcaption className="border-t border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300">{slot.caption}</figcaption>
    </figure>
  );
}

function MobileFrame({ slot, compact = false }: FrameProps) {
  return (
    <figure className="mx-auto w-full max-w-[330px] rounded-[2.25rem] border border-white/15 bg-[#17221D] p-3 shadow-glow">
      <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" aria-hidden="true" />
      <div className={`overflow-hidden rounded-[1.65rem] border border-white/10 ${compact ? "min-h-72" : "min-h-96"}`}>
        {slot.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt={slot.alt} className="h-full min-h-72 w-full object-cover" src={slot.imageSrc} />
        ) : (
          <div role="img" aria-label={slot.alt}><PlaceholderContent slot={slot} /></div>
        )}
      </div>
      <figcaption className="px-2 py-4 text-sm leading-6 text-slate-300">{slot.caption}</figcaption>
    </figure>
  );
}

function SplitFrame({ slot }: FrameProps) {
  return (
    <figure className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-glow">
      <div className="grid gap-5 lg:grid-cols-[0.6fr_1fr] lg:items-center">
        <MobileFrame slot={{ ...slot, title: "Mobile" }} compact />
        <BrowserChrome slot={{ ...slot, title: "Web" }} />
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-slate-300">{slot.caption}</figcaption>
    </figure>
  );
}

export function RoamTheCitiesScreenshotFrame({ slot, compact = false }: FrameProps) {
  if (slot.variant === "mobile") return <MobileFrame slot={slot} compact={compact} />;
  if (slot.variant === "split") return <SplitFrame slot={slot} />;
  return <BrowserChrome slot={slot} />;
}

export function RoamTheCitiesScreenshotGallery({ slots = roamTheCitiesScreenshotSlots.slice(0, 4) }: { slots?: RoamTheCitiesScreenshotSlot[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8" aria-labelledby="roamthecities-screenshots-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">Visual system</p>
        <h2 id="roamthecities-screenshots-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Reusable screenshot frames for mobile, web, and shared product stories.</h2>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">These frames reserve accessible, responsive slots for verified RoamTheCities screenshots. Missing screenshots stay visibly labeled as placeholders so the page does not fabricate production interfaces.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {slots.map((slot) => <RoamTheCitiesScreenshotFrame key={slot.id} slot={slot} />)}
      </div>
    </section>
  );
}

export function RoamTheCitiesBrandTokenSummary() {
  const colors = roamTheCitiesBrand.colors;
  const tokens = [
    ["background", colors.background],
    ["surface", colors.surface],
    ["text", colors.text],
    ["muted text", colors.mutedText],
    ["border", colors.border],
    ["accent", colors.accent],
    ["success", colors.success],
    ["warning", colors.warning],
    ["error", colors.error]
  ];

  return (
    <section className="bg-[#081827] px-6 py-16 sm:py-20 lg:px-8" aria-labelledby="roamthecities-brand-title">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldLift">Brand kit</p>
            <h2 id="roamthecities-brand-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">RoamTheCities visual standards, kept close to the existing product identity.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">The kit uses the confirmed RoamTheCities mobile/web palette: warm sand surfaces, deep forest/ocean text, sunrise accents, rounded cards, and bold system typography.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {tokens.map(([name, value]) => (
              <div className="border border-white/10 bg-white/[0.035] p-4" key={name}>
                <div className="h-12 rounded-xl border border-white/10" style={{ backgroundColor: value }} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{name}</p>
                <p className="mt-1 font-mono text-sm text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
