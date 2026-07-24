export type BuilderProjectType =
  | "Product MVP"
  | "Storefront MVP"
  | "AI-Powered Tool"
  | "Internal Workflow Dashboard"
  | "Website/App Refresh";

export const builderProjectTypes: BuilderProjectType[] = [
  "Product MVP",
  "Storefront MVP",
  "AI-Powered Tool",
  "Internal Workflow Dashboard",
  "Website/App Refresh"
];

export const builderFieldClass =
  "mt-2 w-full border border-white/10 bg-slateInk/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70";

export const builderTextareaClass = `${builderFieldClass} min-h-24 resize-y`;

export function valueOrFallback(value: string, fallback = "To be confirmed") {
  return value.trim() || fallback;
}

export function splitLines(value: string) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function bulletList(items: string[]) {
  return items.length ? items.map((item) => `- ${item}`).join("\n") : "- To be confirmed during scope review";
}
