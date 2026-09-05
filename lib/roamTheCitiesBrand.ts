import { requireProductBySlug } from "@/lib/products";

const product = requireProductBySlug("roamthecities");

export const roamTheCitiesBrand = {
  productName: product.name,
  shortName: product.shortName ?? "RTC",
  tagline: "Find your next city story.",
  description: product.description,
  category: product.category,
  ownershipStatement: product.ownershipStatement,
  logo: {
    primary: "RoamTheCities wordmark with compact RTC mark",
    compact: "RTC",
    appIcon: "Use the existing mobile app icon asset from the RoamTheCities mobile project when preparing store or launch art.",
    lightBackground: "Use deep forest/ocean lettering on sand or white surfaces.",
    darkBackground: "Use white lettering with sunrise or ocean accent treatments.",
    minimumClearSpace: "Keep at least one compact RTC mark width around the logo.",
    prohibited: ["Do not stretch or skew the mark.", "Do not recolor the mark outside the approved palette.", "Do not combine the consumer logo with ClearStack Studio as if it were one trademark."]
  },
  colors: {
    background: "#F4EFE6",
    surface: "#FFFAF2",
    text: "#17221D",
    mutedText: "#68756E",
    border: "#DCE3DE",
    accent: "#E8A75D",
    ocean: "#0F5674",
    oceanDark: "#0B3C55",
    forest: "#12372A",
    moss: "#436850",
    success: "#246B4B",
    warning: "#C9822B",
    error: "#A33A2B",
    white: "#FFFFFF"
  },
  typography: {
    fontFamily: "Geist or system sans-serif already supported by the web projects; system sans-serif in React Native.",
    primaryHeading: "Large, bold, tight tracking; product-led and concise.",
    secondaryHeading: "Bold section heading with clear product noun.",
    body: "Readable 15-18px equivalent, 1.6-1.7 line height.",
    caption: "Small muted text for status, replacement notes, and accessibility context.",
    buttonLabel: "Short verb-first label, bold weight, no vague click-here text."
  },
  spacing: {
    pagePadding: "clamp(1rem, 4vw, 4rem) on web; 22px horizontal padding on mobile.",
    sectionGap: "3rem minimum between major story sections.",
    cardPadding: "18-24px for mobile/web cards; 32px+ for marketing panels."
  },
  radius: {
    button: "999px on web marketing; 14px on mobile app buttons.",
    card: "18-24px for product UI cards.",
    hero: "1.5-2.5rem for large marketing panels."
  },
  cardStyle: "Warm surface, subtle border, soft travel-product shadow, sunrise or ocean accent when needed.",
  buttonStyles: {
    primary: "Forest/ocean fill with white text.",
    secondary: "White or transparent surface with ocean/forest text.",
    ghost: "Transparent with border and clear focus state."
  },
  imageTreatment: "Use real product screenshots inside reusable device/browser frames. If missing, use clearly labeled placeholders only.",
  screenshotFraming: "Mobile frame for Expo views, browser frame for Next.js views, split frame for shared ecosystem stories, callout frame for feature explanations.",
  socialPreview: {
    openGraph: "1200x630, sand background, ocean/forest gradient card, RoamTheCities name, concise tagline, optional ClearStack Studio secondary line.",
    twitter: "Use the same 1200x630 composition as Open Graph.",
    launch: "Product name, Travel Platform category, honest status, no unverified feature or revenue claims.",
    portfolio: "ClearStack Studio may appear as a small secondary operator line, never as the consumer product logo."
  },
  appStore: {
    apple: ["Mobile Home", "Destination discovery", "Trip planner", "Saved trips", "Notifications", "Offline mode"],
    googlePlay: ["Home", "Destination discovery", "Trip planner", "Trip Command Center", "Saved trips", "Offline mode"]
  },
  assetNaming: [
    "roamthecities-mobile-home.png",
    "roamthecities-mobile-trip-planner.png",
    "roamthecities-mobile-trip-command-center.png",
    "roamthecities-web-destination.png",
    "roamthecities-web-admin-analytics.png",
    "roamthecities-social-og.png"
  ]
} as const;

export type RoamTheCitiesScreenshotVariant = "mobile" | "desktop" | "split" | "callout";
export type RoamTheCitiesScreenshotTheme = "dark" | "light";

export type RoamTheCitiesScreenshotSlot = {
  id: string;
  title: string;
  category: "Mobile" | "Web" | "Shared";
  variant: RoamTheCitiesScreenshotVariant;
  theme: RoamTheCitiesScreenshotTheme;
  caption: string;
  alt: string;
  replacementFileName: string;
  status: "placeholder" | "available";
  imageSrc: string | null;
  callout?: string;
};

export const roamTheCitiesScreenshotSlots: RoamTheCitiesScreenshotSlot[] = [
  {
    id: "mobile-home",
    title: "Mobile Home",
    category: "Mobile",
    variant: "mobile",
    theme: "light",
    caption: "Mobile home screen slot for city inspiration and traveler entry points.",
    alt: "Placeholder for the RoamTheCities mobile home screen.",
    replacementFileName: "roamthecities-mobile-home.png",
    status: "placeholder",
    imageSrc: null,
    callout: "Replace with a verified Expo screenshot."
  },
  {
    id: "mobile-trip-planner",
    title: "Trip Planner",
    category: "Mobile",
    variant: "mobile",
    theme: "light",
    caption: "Mobile trip-planning slot for itinerary, trip items, and saved destinations.",
    alt: "Placeholder for the RoamTheCities mobile trip planner.",
    replacementFileName: "roamthecities-mobile-trip-planner.png",
    status: "placeholder",
    imageSrc: null,
    callout: "Use only a verified build screenshot."
  },
  {
    id: "web-destination",
    title: "Destination Discovery",
    category: "Web",
    variant: "desktop",
    theme: "dark",
    caption: "Web destination slot for city pages, discovery content, and affiliate-safe context.",
    alt: "Placeholder for a RoamTheCities web destination page.",
    replacementFileName: "roamthecities-web-destination.png",
    status: "placeholder",
    imageSrc: null,
    callout: "No production screenshot is currently wired into the ClearStack site."
  },
  {
    id: "shared-ecosystem",
    title: "Shared Ecosystem",
    category: "Shared",
    variant: "split",
    theme: "dark",
    caption: "Split mobile and web slot for explaining shared backend and product architecture.",
    alt: "Placeholder showing RoamTheCities mobile and web experiences sharing one product ecosystem.",
    replacementFileName: "roamthecities-shared-ecosystem.png",
    status: "placeholder",
    imageSrc: null,
    callout: "Use when web and mobile screenshots are both verified."
  },
  {
    id: "web-admin-analytics",
    title: "Admin Analytics",
    category: "Web",
    variant: "desktop",
    theme: "dark",
    caption: "Admin analytics slot for aggregate, privacy-conscious product reporting.",
    alt: "Placeholder for the RoamTheCities admin analytics dashboard.",
    replacementFileName: "roamthecities-web-admin-analytics.png",
    status: "placeholder",
    imageSrc: null,
    callout: "Do not use private traveler data in screenshots."
  }
];
