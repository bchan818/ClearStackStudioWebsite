# RoamTheCities Visual Brand Kit and Screenshot System

This guide keeps RoamTheCities product visuals consistent across the ClearStack Studio website, RoamTheCities web project, mobile app marketing, social previews, and future launch material.

## Confirmed source assets

### ClearStack Studio site

- No RoamTheCities-specific screenshots or logo image files were found under `public/`.
- Existing generic social assets include `public/social/projects.png` and the ClearStack default/social images.
- `/work/roamthecities` uses design-system placeholders until verified screenshots are added.

### RoamTheCities web project

- Existing social preview: `/Users/bchan8/Developer/roamthecities-web/public/og.svg`.
- Existing compact mark pattern: text mark `RoamTheCities` plus compact `RTC` square in `src/components/SiteHeader.tsx`.
- Existing web colors in `src/app/globals.css`: warm background, ocean, ocean-dark, gold, sand, ink, slate, muted, success, error.
- Existing web font: Geist via Next.js font setup.

### RoamTheCities mobile project

- Existing app assets:
  - `assets/images/icon.png` — 1024x1024 app icon.
  - `assets/images/logo-glow.png` — 604x604 glow logo asset.
  - `assets/images/splash-icon.png` — 228x213 splash asset.
  - `assets/images/tutorial-web.png` — 1480x855 tutorial/web graphic.
  - tab icons under `assets/images/tabIcons/`.
- Existing mobile brand constants: `src/constants/brand.ts`.
- Existing mobile colors: forest, moss, sand, sunrise, ink, white, muted, border.

## Brand basics

- Product name: `RoamTheCities`
- Short name: `RTC`
- Tagline: `Find your next city story.`
- Category: `Travel Platform`
- Ownership: `RoamTheCities is a travel platform built and operated by ClearStack Studio.`

Keep ClearStack Studio secondary on consumer-facing RoamTheCities materials. Use it as an operator line, not as a combined consumer logo.

## Color tokens

Use the central ClearStack-side module:

```ts
import { roamTheCitiesBrand } from "@/lib/roamTheCitiesBrand";
```

Semantic tokens:

| Token | Hex | Use |
| --- | --- | --- |
| background | `#F4EFE6` | Warm product background and app-store/store assets |
| surface | `#FFFAF2` | Cards and elevated content |
| text | `#17221D` | Main body copy |
| muted text | `#68756E` | Captions and secondary notes |
| border | `#DCE3DE` | Card and input borders |
| accent | `#E8A75D` | Sunrise highlights and screenshot accents |
| ocean | `#0F5674` | Web hero/product frame accent |
| ocean dark | `#0B3C55` | Dark ocean backgrounds |
| forest | `#12372A` | Primary mobile/app brand color |
| moss | `#436850` | Mobile labels and secondary accents |
| success | `#246B4B` | Success labels |
| warning | `#C9822B` | Warning/planning labels |
| error | `#A33A2B` | Error labels |

Do not scatter new hard-coded RoamTheCities colors in marketing components when a token already exists.

## Typography

Use existing licensed/system fonts only.

- Web: Geist or system sans-serif already configured in the web projects.
- Mobile: React Native system sans-serif.
- Primary heading: large, bold, tight tracking.
- Secondary heading: bold section heading with a clear product noun.
- Body text: readable 15-18px equivalent with relaxed line height.
- Captions: muted and concise.
- Button labels: short, verb-first, and specific.

## Logo and icon usage

- Primary logo: `RoamTheCities` wordmark with compact `RTC` mark.
- Compact logo: `RTC`.
- App icon: use the existing mobile icon asset when preparing app-store or launch art.
- Light background: forest/ocean lettering on sand or white.
- Dark background: white lettering with sunrise or ocean accents.
- Minimum clear space: at least one compact `RTC` mark width around logo artwork.

Do not:

- Stretch or skew the mark.
- Create unsupported trademark variants.
- Merge ClearStack Studio and RoamTheCities into one combined logo.
- Use ClearStack Studio more prominently than RoamTheCities on consumer-facing product art.

## UI styling guidance

- Cards: warm surface, subtle border, rounded corners, soft travel-product shadow.
- Buttons: forest/ocean primary fill, white or transparent secondary, visible focus states.
- Image treatment: place screenshots inside reusable frames rather than manually drawing frames on each page.
- Border radius: 18-24px for cards; 999px web marketing buttons; 14px mobile app buttons.
- Spacing: use generous section spacing and avoid dense screenshot grids.

## Screenshot system

Reusable ClearStack components live in:

```text
components/RoamTheCitiesScreenshotSystem.tsx
```

Central screenshot slots live in:

```text
lib/roamTheCitiesBrand.ts
```

Supported frames:

- mobile device frame
- desktop/browser frame
- split mobile + web frame
- feature callout placeholder
- dark/light background variants through slot metadata

The current slots are placeholders because no verified RoamTheCities production screenshots are wired into the ClearStack public assets.

## Case-study integration

The ClearStack Studio `/work/roamthecities` page should use the reusable screenshot system for a limited set of product-story sections:

- Mobile experience
- Web experience
- Shared ecosystem
- Trip planning workflow

Avoid overwhelming the page with too many screenshots. Use the component slots for a curated story, then link to deeper product pages when real screenshots are available.

## Screenshot categories

### Mobile

- Home — `roamthecities-mobile-home.png`
- Destination discovery — `roamthecities-mobile-destination-discovery.png`
- Trip planner — `roamthecities-mobile-trip-planner.png`
- Trip Command Center — `roamthecities-mobile-trip-command-center.png`
- Saved trips — `roamthecities-mobile-saved-trips.png`
- Notifications — `roamthecities-mobile-notifications.png`
- Offline mode — `roamthecities-mobile-offline-mode.png`

### Web

- Homepage — `roamthecities-web-homepage.png`
- Destination page — `roamthecities-web-destination.png`
- Trip planner — `roamthecities-web-trip-planner.png`
- Admin dashboard — `roamthecities-web-admin-dashboard.png`
- Analytics — `roamthecities-web-admin-analytics.png`

## Social preview conventions

Use 1200x630 for Open Graph and X/Twitter summary-large-image previews.

Recommended layout:

1. Warm sand background.
2. Ocean/forest gradient card.
3. Product name: `RoamTheCities`.
4. Tagline or concise product line.
5. Optional small secondary line: `Built and operated by ClearStack Studio.`
6. No unverified feature, revenue, booking, or adoption claims.

Suggested files:

- `roamthecities-social-og.png`
- `roamthecities-social-twitter.png`
- `roamthecities-social-launch.png`
- `roamthecities-social-clearstack-portfolio.png`

## App-store asset preparation

Do not publish store assets from this task. Prepare screenshot layouts only after verified app screenshots exist.

Recommended Apple App Store slots:

1. Mobile Home
2. Destination discovery
3. Trip planner
4. Saved trips
5. Notifications
6. Offline mode

Recommended Google Play slots:

1. Home
2. Destination discovery
3. Trip planner
4. Trip Command Center
5. Saved trips
6. Offline mode

## Replacement workflow

1. Capture screenshots from verified RoamTheCities web/mobile builds.
2. Remove private traveler data, tokens, internal admin IDs, local URLs, and credentials.
3. Save files using lowercase descriptive names.
4. Place public-safe assets under a ClearStack public folder such as `public/projects/roamthecities/`.
5. Update the matching `imageSrc` in `roamTheCitiesScreenshotSlots`.
6. Add meaningful alt text and a truthful caption.
7. Run lint, route-link tests, build, and broken-image checks.

## Do / don't guidance

Do:

- Keep RoamTheCities primary on consumer-facing assets.
- Use placeholders when real screenshots are missing.
- Label planned or in-development features honestly.
- Use alt text that describes the feature, not just the file name.
- Keep ClearStack Studio as a tasteful operator line.

Do not:

- Fabricate production screenshots.
- Claim a public mobile app launch before it is verified.
- Include private traveler data in screenshots.
- Publish partner commission percentages unless intentionally approved.
- Create one-off screenshot frames directly in case-study pages.
