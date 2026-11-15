# Amit Kumar Dwivedi — Portfolio

A compact, monochrome portfolio for Software Engineer Amit Kumar Dwivedi. Built with Next.js App Router, React, TypeScript and Tailwind CSS, with reference-style project cards, curated open-source evidence, a dated GitHub activity snapshot and a RetinaGrade case study.

## Run locally

Validated with Node.js 20.20.0 and npm 11.19.1. Use npm and the checked-in `package-lock.json`.

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js, normally http://localhost:3000. The dev and production build scripts use Turbopack; `next.config.ts` pins its root to this checkout. `next/font` fetches Inter and Fraunces during the build, so Google Fonts must be reachable. No API key or environment file is needed for the rendered portfolio, its static contribution data, or the email action.

## Validate

```bash
npm run lint
npx --no-install tsc --noEmit --incremental false
npm run build
git diff --check
```

There is no application-wide unit-test suite or `npm test` script. The final review also checks generated HTML (identity, project/status content, headings, links and anchors), static data consistency and reveal behavior using mocked browser APIs. Those checks do not replace browser testing.

`eslint-config-next` is currently 15.5.3 while Next.js is 16.2.11. This pre-existing mismatch passes the current lint baseline; any dependency alignment should be validated separately rather than silently bundled with content changes.

## Edit content

| File | Purpose |
| --- | --- |
| `src/content/portfolio.ts` | Name, role, degree, university, graduation, confirmed social/email links and the active `resumeUrl`. |
| `src/content/home.ts` | Homepage introduction, visible experience, skill chips, education and closing quote. Imports shared profile and project data. |
| `src/content/projects.ts` | Featured project order, summaries, technology labels, typed source/demo actions, RetinaGrade status and detailed case-study content. |
| `src/content/open-source.ts` | Curated PR/issue evidence, precise statuses, technologies and verification dates. Recheck public evidence before changing status. |
| `src/content/activity.json` | Dated static GitHub activity for Amitdwivedi22. This is not live data or a merged-PR count. |
| `src/app/globals.css` | Monochrome tokens, reference layout, responsive rules and visible focus states. |
| `src/app/layout.tsx` | Fonts and personal homepage/sharing metadata. The case-study page defines its own metadata. |

Keep unsupported claims in [CONTENT_REVIEW.md](CONTENT_REVIEW.md), not public copy. RetinaGrade is **In Progress**: application workflows are distinct from planned EfficientNet/Grad-CAM work. RapidRepair dashboard interfaces include mock data; Web3 rental/payment/incentive integration is unverified end to end. Open-source work belongs in its own section, not Employment. The current visible internship is Nexathread; do not automatically import older experience.

To refresh activity, retrieve the source URL stored in `activity.json` for the same username, validate dates are unique/consecutive and ordered, counts are nonnegative integers and levels are 0–4, recalculate `total`, and set the actual retrieval timestamp. Do not generate sample activity or relabel an old snapshot as new. If no verified data is available, an empty `days` array uses the existing unavailable-data presentation. The application makes no runtime activity API request.

### Resume and contact

The active Resume action opens the user-supplied [Google Drive viewer](https://drive.google.com/file/d/1YdRHCP8FzeydoOj6vXLFSndXAqVND1aq/view?usp=sharing), configured by `resumeUrl`. It is not labelled as a direct download. Anonymous PDF access was verified during review; future access still depends on the file's sharing settings.

The earlier generated PDF at `public/resume/amit-kumar-dwivedi-resume.pdf` is retained, along with `output/pdf/` and editable `resume/` source. It is not the active website resume. See [resume instructions](resume/README.md) for regeneration. The supplied Drive file contains older wording/claims; discrepancies are recorded in the content review rather than copied into portfolio descriptions.

Contact is a confirmed `mailto:` action opening the visitor's email client. No form or delivery-success message is rendered. The pre-existing `/api/contact` Nodemailer route is unused and its delivery is unverified; it expects `GMAIL_USER`, `GMAIL_APP_PASSWORD` and optional `RECIPIENT_EMAIL` if deliberately configured in future. Do not expose secrets, configure SMTP merely to preview this site, or claim mail delivery without testing. The contact route requires separate validation/escaping and abuse-control work before exposing a form.

## Production configuration

The current configuration is a Next.js server application, not a static export:

```bash
npm ci
npm run build
npm start
```

Use a Node-capable Next.js host that installs dependencies, builds the application with font access and serves `.next` together with the application's `public` assets and runtime dependencies. Use the host's process manager and port configuration. The API route remains server-backed even though the visible portfolio pages prerender. Do not serve `.next` as a generic static directory.

No deployment workflow, production origin or custom domain has been verified. Canonical URLs and domain-specific sitemap configuration are intentionally absent. Set them only after the actual deployed origin is verified. No push or public deployment is part of the current work; perform either only at the owner's explicit request.

## Reference, provenance and review status

Design reference: [swagatchand98/portfolio_v2](https://github.com/swagatchand98/portfolio_v2), audited at `179dbdee13a98d94d3eeb8a9cb5289b55ec6ee06`. No repository-level source reuse license was found. The owner selected a fresh implementation of the inspected design, not copying reference component source, portrait, resume or identity. Preserve [REFERENCE_PROVENANCE.md](REFERENCE_PROVENANCE.md) and third-party dependency notices; this project does not invent a license grant for the reference.

Intentional differences include approved personal content and its text lengths, curated open-source evidence above a static activity graph, an AD monogram, an approved closing quote, RetinaGrade's status/detail route, a slightly brighter faint-text neutral for contrast, and lightweight native reveals instead of Framer Motion. Content is visible without JavaScript, and motion respects reduced-motion preferences.

Production/lint/type checks and local HTTP checks have passed. Browser-based comparison at 390px, 768px and 1440px, zoom, overflow and interactive keyboard/hover testing remain pending because no connected browser is available. No performance score or full accessibility certification is claimed. LinkedIn returns HTTP 999 to automated retrieval but its URL is user-confirmed. Font-fetch failures under restricted networking are an existing environment constraint.

The ignored `.local-backups/` archive preserves pre-rebuild work locally and is not intended for publication. Original starter assets and recoverable historical work are not indiscriminately deleted. See [PORTFOLIO_PLAN.md](PORTFOLIO_PLAN.md) for phase history, evidence, validation and remaining limits.
