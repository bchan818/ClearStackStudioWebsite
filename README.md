# ClearStack Studio

**From idea to app.**

ClearStack Studio is a software and app studio portfolio website for showing launch-ready proof across MVP software, storefront MVPs, AI-powered tools, internal workflow dashboards, and website/app refresh work.

Live site: <https://clear-stack-studio-website.vercel.app>

## Overview

This site is the public portfolio and service hub for ClearStack Studio. It presents the studio's service packages, proof projects, case studies, and inquiry paths for clients who want to turn an idea into a focused digital product.

The site is designed to be clear, conversion-focused, and honest about what each proof project demonstrates.

## Tech stack

- Next.js
- React
- TypeScript
- CSS / Tailwind CSS
- Vercel deployment

## Main routes

- `/` — homepage and featured work
- `/services` — service package overview
- `/work` — portfolio overview
- `/projects` — proof project comparison dashboard
- `/start` — guided project-path chooser
- `/contact` — inquiry paths and contact options
- `/work/cardscope` — CardScope proof page
- `/work/cardscope/case-study` — CardScope case study
- `/work/clearbloom-beauty` — ClearBloom Beauty storefront proof
- `/work/clearbloom-beauty/case-study` — ClearBloom Beauty case study
- `/work/ai-fashion-model` — AI Fashion Model proof page
- `/work/ai-fashion-model/case-study` — AI Fashion Model case study
- `/work/msw-application-review` — MSW Application Review proof page
- `/work/msw-application-review/case-study` — MSW Application Review case study

## Proof projects

### CardScope

A live MVP/prototype for collectible card search, collection tracking, watchlists, pricing-page positioning, seller tools, and Pro-style product validation.

Standalone demo: <https://cardscope-mvp.vercel.app>

### ClearBloom Beauty

A fictional premium beauty storefront MVP with catalog pages, product details, inquiry checkout, policies, and a future ecommerce upgrade path.

Standalone demo: <https://clearbloom-beauty.vercel.app>

### AI Fashion Model

A static AI-powered creative prototype that demonstrates fashion/lifestyle concept positioning, prompt-driven visual tooling, and creator-branding workflow ideas.

### MSW Application Review

A privacy-safe internal dashboard proof for structured review queues, status tracking, and workflow-focused decision support using mock records only.

## Static/demo-only boundaries

This portfolio uses static routes, mock content, and prototype/demo flows. It does **not** include production backends, databases, authentication, payment processing, private records, or external API integrations.

Specific proof boundaries:

- CardScope proof links to a standalone MVP that still uses mock/local prototype data.
- ClearBloom Beauty is inquiry-based and does not process real payments, inventory, shipping, or tax calculations.
- AI Fashion Model is a concept/prototype surface, not a connected AI generation service.
- MSW Application Review uses generic mock workflow content only and no private student/applicant data.

## Analytics and privacy

Analytics provider: Vercel Analytics via the official `@vercel/analytics` package.

The site uses Vercel Analytics for automatic page-view tracking and a small set of privacy-conscious custom events that help measure which services, proof projects, and conversion paths generate interest:

- `start_project_click` — Start Project and project inquiry CTA clicks.
- `service_package_click` — service package CTA clicks and related service links.
- `case_study_click` — case study and proof-project case-study clicks.
- `live_demo_click` — live demo clicks for public proof projects.
- `inquiry_summary_copy` — when a visitor copies the generated inquiry summary.
- `inquiry_email_open` — when a visitor opens the prefilled email link.

Custom event payloads are intentionally limited to non-sensitive labels such as CTA location, service category, project type, and project slug.

The analytics implementation does **not** send inquiry contents or personal details. It does not track names, email addresses, company names, project descriptions, audience details, must-have features, user-entered URLs, timeline values, budget values, or any other form field content.

No Google Analytics, cookie banner, database, authentication, payment tracking, environment variables, or unrelated tracking provider is added for the current implementation.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run the route and link audit:

```bash
npm run test
```

Create a production build:

```bash
npm run build
```

## Deployment notes

This project is configured for Vercel.

Recommended Vercel settings:

- Framework preset: Next.js
- Root directory: `./`
- Install command: `npm install`
- Build command: `npm run build`
- Environment variables: none required for the current static portfolio

After deployment, verify the main routes, proof-project CTAs, and standalone demo links.

## Continuous integration

GitHub Actions runs the `ClearStack CI` workflow automatically on pushes to `main` and pull requests targeting `main`.

The workflow installs dependencies with `npm ci`, runs ESLint with `npm run lint`, runs the route/link audit with `npm run test`, and creates a production build with `npm run build` on Node.js 20. Vercel remains responsible for deployment; GitHub Actions is verification-only and does not deploy the site.

The route/link audit checks that important internal App Router pages exist, header/footer navigation includes key routes, Start Project CTAs point to `/start`, proof-project cards include expected case-study routes, expected live-demo URLs match the shared site-link constants, and public-facing source does not contain `localhost`, Windows local paths, or `/Users/bchan8/...` local machine paths. The audit does not make external network requests, so live deployment availability is still verified separately after deployment.

## SEO and social metadata

The app includes site-level metadata, Open Graph metadata, Twitter card metadata, a sitemap, robots rules, a basic icon, and a not-found page.

## Roadmap

- Add more polished visual case-study assets.
- Add additional client-ready service examples.
- Add more portfolio proof projects as ClearStack Studio builds new MVPs.
- Continue improving privacy-safe analytics labels as new service paths and proof projects are added.
- Add richer social preview imagery if final brand assets become available.
