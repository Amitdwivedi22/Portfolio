# Portfolio foundation plan and audit

## Baseline
Audited commit: e4baca8, initially on main with a clean working tree. No applicable AGENTS.md found. Implementation branch: feat/portfolio-visual-foundation.

Stack: Next.js 16.2.11 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide, npm/package-lock.json. Scripts: dev, build, start, lint. Type check: `./node_modules/.bin/tsc --noEmit --incremental false`. No test suite or CI configuration was found. README is create-next-app boilerplate; Vercel guidance is not confirmation of an actual deployment. Contact API uses Nodemailer and Gmail environment variables; credentials were not inspected and no email was sent.

Before changes, lint and TypeScript passed. Build passed with network access; sandbox build failed fetching Google Fonts. This is an existing environmental dependency, not a newly introduced regression. Next 16 and eslint-config-next 15 remain mismatched but existing lint passes; dependency changes are outside this phase.

## Audit findings
- State-switched content lacked section URLs; forced loading transitions and canvas/3D motion distracted from the work.
- Missing form label associations, nested resume controls, no reduced-motion support and incorrect viewport key.
- Responsive classes existed, but browser-based overflow/contrast/zoom validation had not been completed.
- Generic MERN positioning, arbitrary skill percentages and unsupported achievement numbers weakened evidence. Projects lacked clear implementation evidence and individual contributions.
- Resume links point to an external folder; no local resume asset. External retrieval was inconclusive.
- Duplicate Squares components and starter SVG assets remain unused; no removal is needed for this phase.
- Existing contact endpoint performs limited validation and interpolates user input into HTML; validation/escaping and abuse controls are a separate future task. Endpoint is unchanged and the public form is hidden.

## Completed visual foundation
- Navy-charcoal surfaces, restrained teal, Inter typography with small monospace labels; shared color, typography, spacing, radius, shadow and motion values.
- Reusable containers, headings, links, button links, badges, surfaces and substantial evidence rows.
- Sticky responsive header; mobile disclosure state, Escape handling/focus return, breakpoint reset and close on selection.
- Native section anchors, semantic landmarks, skip link, visible focus and reduced-motion CSS; correct viewport width.
- Typed content module separates published data from unresolved claims. All pending sections and nav items are hidden.
- Confirmed Hero, repository-evidenced Skills, About/Education and minimal footer. No unverified social links, employment, project or resume claims.
- Removed animated decoration from the rendered page. Metadata now reflects the confirmed early-career positioning.
- CONTENT_REVIEW.md records evidence categories and open questions.

## Proposed structure and later phases
1. This phase: visual components and truthful content foundation only.
2. Evidence review: confirm projects, contribution links, experience, contact destinations and resume source; resolve inclusion preferences.
3. Portfolio content: enable Featured Projects, Open Source, Skills, Experience, About/Education, Contact in that order after the Hero. Project entries must explain problem, own contribution, implemented technology and evidence links. Open source remains separate from employment.
4. Resume: independently update a verified resume with consistent dates/claims; no invented results.
5. Release: browser/accessibility QA, contact hardening if enabled, deployment configuration review and publishing only in a later authorized phase.

## Acceptance and validation
- Public content contains only confirmed facts or narrowly described repository evidence; pending sections render nothing.
- Keyboard users can reach navigation and content; mobile menu exposes expanded state; Escape restores toggle focus; all links have visible focus.
- Responsive CSS covers mobile, tablet and desktop with bounded prose widths. Required browser acceptance: 375px, 768px, 1440px, 200% zoom, reduced motion, menu interactions, anchor offsets and no horizontal overflow.
- Browser validation is BLOCKED: computer-use inventory reports no browsers/apps. No screenshot, contrast measurement or interactive viewport result is claimed. CSS/source review is not a substitute.
- No deployment, resume rewrite, dependency migration or contact API change in this phase.
- Final automated checks: ESLint passed; standalone TypeScript check passed; production build passed with font network access. The restricted build reproduced the baseline font-fetch failure.
- Preview attempt announced port 3001, then exited because another Next dev process already owns this checkout. That existing process was preserved. The HTTP readiness request could not connect. Live preview is not verified; inspect the existing local dev session for the remaining browser checks.


## Main portfolio experience phase
Implemented on the existing branch, preserving the uncommitted visual foundation.
- Replaced the abstract hero with the confirmed name, backend/full-stack positioning and factual supporting copy. Added View Projects and Contact anchors and approved GitHub/LinkedIn links. Resume action remains deferred pending a reviewed file.
- Added a substantial personal-project entry for this repository, including implemented features, source link and technologies. The contact route is described without a delivery claim.
- Grouped demonstrated skills into languages, frontend, backend and tools/static checks. Database and employment content remain hidden; no testing expertise or proficiency percentages are asserted.
- Added direct email contact, visible address, social links and consistent footer destinations. No form is presented.
- Simplified About/Education copy and associated section landmarks with real heading IDs.
- Responsive styles accommodate wrapping actions, email text and narrow header layouts. Existing keyboard and reduced-motion support retained.
- Browser inventory checked again: no connected apps or browsers. Responsive screenshots, 200% zoom and interactive menu checks remain unverified. No deployment was performed.
- Phase validation passed: ESLint, standalone TypeScript check, production build (with Google Fonts access), and git diff whitespace check. Generated HTML checks passed for one h1, unique IDs, all internal anchor targets, approved links, intended visible sections and absence of held employment/resume/form content. These checks do not replace browser inspection or verify external-service availability.


## Project evidence phase
Two approved personal projects are featured; no filler project was introduced.
- RetinaGrade leads the homepage project section and has a dedicated `/projects/retinagrade` case study. It presents problem, contribution, verified stack, capabilities, two architecture tradeoffs, reviewed test coverage scope, status and limitations.
- Engineering portfolio has a concise inline case study with the same information structure and its approved repository link.
- Typed project content is separated from contribution entries. Source/demo links are optional; RetinaGrade has none until public destinations are verified. The portfolio has a confirmed source link and no asserted live deployment.
- Honest typographic illustrations replace unavailable screenshots. A responsive, text-described architecture diagram shows only the implemented Next.js/service/SQLite/private-storage flow.
- Case-study navigation includes a skip link, labelled section anchors, back-to-project links and visible focus styles. Project previews remain in reading order on mobile.
- Current RetinaGrade evidence supports Next.js/Prisma/SQLite, not the previously reported Express stack. No implemented inference, trained model, Grad-CAM, clinical validation or accuracy claim is made. Tests are described as source-reviewed, not executed.
- Browser inventory is still empty. Responsive screenshots and interactive keyboard navigation remain unverified; no browser result is claimed.
- No changes were made to RetinaGrade itself and nothing was deployed.
- Final project-phase checks passed: ESLint, standalone TypeScript, production build (including the static case-study route) and git diff whitespace check. Rendered HTML validation passed for both pages: single h1, unique IDs, heading-label references, local routes and cross-page anchors, expected case-study sections, approved portfolio source URL and absence of local source paths/unapproved employment. No screenshot assets were introduced. Keyboard behavior was reviewed in source only; interactive/browser checks remain pending.

## Polish phase
Completed without changing the approved palette or career/project facts.
- Consolidated responsive media groups, increased small supporting type, bounded reading widths and adjusted section rhythm. Added minmax grid tracks, intrinsic-size safeguards, wrapping labels/actions and more robust narrow-screen project illustrations. No overflow-hiding workaround was added.
- Native details/summary mobile navigation is present in server HTML and usable without JavaScript. The small client enhancement handles Escape with focus return, outside presses, focus leaving the menu, selected-section focus and breakpoint focus transfer. Desktop/header rendering is server-side; project content is no longer imported by the client menu.
- Unified brief color/border feedback, removed hover translation and kept reduced-motion overrides last in the stylesheet. No content visibility depends on animation.
- Added accurate per-page Open Graph/Twitter summary metadata and an SVG initials favicon. No canonical, metadata origin, absolute sharing image or sitemap is published until a deployed URL is verified.
- Restricted JetBrains Mono to weight 400 with font swapping retained. Build still needs Google Fonts network access. Kept lightweight HTML/CSS project illustrations; there are no raster media assets to optimize or lazy-load. Their accessible labels now include the informative concepts.
- Removed verified-unused framer-motion, class-variance-authority and tw-animate-css dependencies; package and npm lockfile agree. Kept clsx/tailwind-merge because the configured component utility references them.
- Validation passed: ESLint, standalone TypeScript, production build, git whitespace checks, generated HTML metadata/heading/ID/anchor checks, native disclosure presence, favicon parsing and dependency/lockfile checks.
- Calculated text contrast against the page, surface, About and RetinaGrade illustration backgrounds: foreground minimum 11.69:1, muted minimum 6.61:1, accent minimum 8.58:1. Primary button/focus accent against the page is 11.44:1. These are palette calculations, not a complete accessibility audit.
- Browser inventory remains empty. 320/375/768/1024/1440px rendered layouts, 200% zoom, actual overflow, keyboard interaction and reduced-motion behavior remain unverified in a browser. Chrome exists locally but no supported connected browser is available; no browser/performance score is claimed. No runtime performance measurement was performed.
- Remaining planned work is unchanged: the verified open-source section and updated resume have plans but are not implemented. Nothing was deployed in this phase.

## Reference-styled resume phase
Completed a new resume rather than relabelling an old artifact. Visual direction comes from swagatchand98/portfolio_v2/public/resume.pdf: centered header, cyan headings, thin divider rules, single column. Reference-author content, metrics and employment were not reused. Plain contact labels replace icons.
- Latest source approved by the user: `/home/amit/Downloads/resume (1).pdf`. Explicit degree correction takes precedence. Athira and RetinaGrade were both explicitly approved for resume inclusion.
- Content covers internships, education, two source-supported projects, three verified open-source PRs and technical skills. Internships and open-source contributions have separate headings. RetinaGrade inference remains explicitly unconnected; no metrics are invented.
- Editable content: `resume/content.json`; generator: `resume/generate.py`; instructions and dependency pin: `resume/README.md` and `resume/requirements.txt`. ReportLab and embedded DejaVu Sans were used because no reusable LaTeX source/compiler was found.
- New PDF: `output/pdf/amit-kumar-dwivedi-resume.pdf`; identical served copy: `public/resume/amit-kumar-dwivedi-resume.pdf`. The homepage Resume (PDF) action points to this copy.
- PDF validation passed: one Letter page, minimum font size 10.5pt, all text within margins, sensible Poppler extraction order, eight exact clickable destinations, and identical public/output copies. The final page was rendered with Poppler and visually inspected; divider lines, spacing and text are unclipped. No ATS score is asserted.
- Public PR states rechecked during generation: openSUSE/docbuild #705 merged, #747 open/unmerged; nextcloud/approval #399 merged. External PRs are status snapshots, not live API data in the website.
- This phase does not implement the separate planned open-source website section or publish additional career sections. Shared portfolio/resume facts agree; user-supplied employment/skills appear in the resume under their approved source.
- Integration validation passed: ESLint, standalone TypeScript, production build and whitespace check. Built homepage HTML contains the exact local Resume PDF path; the corresponding public file matches the inspected artifact byte-for-byte. No live deployment or browser-based website validation is claimed.

## Reference-template rebuild audit — current direction (2026-11-15)

This section is the current rebuild direction. It supersedes the earlier original-design direction, while preserving the history above, approved content decisions, evidence and completed resume. The goal is to closely match `swagatchand98/portfolio_v2` in later phases, replacing personal information with Amit's approved content. This audit phase makes no visual or content replacements. All later work remains local: do not push or deploy publicly unless the user explicitly requests it.

### Repository preservation and instruction review

- Portfolio source: https://github.com/Amitdwivedi22/Portfolio. Starting branch: `feat/portfolio-visual-foundation`; dedicated audit branch: `rebuild/reference-template-audit`. HEAD remains `e4baca8dbd7862aec0ebf7360b44d3368fa5fad5`.
- The working tree already contains the uncommitted design system, page/components, project case study, metadata, content review, resume source/PDF and dependency changes from earlier phases. These are preserved; no reset, stash, automatic commit, push or replacement is performed.
- No applicable AGENTS.md was found in the portfolio or searched parent directories. The separate reference checkout contains AGENTS.md and CLAUDE.md; both were read. Its AGENTS.md requires reading the installed Next.js documentation before future source implementation. It does not govern files in Amit's checkout.
- Current stack: Next.js 16.2.11, React 19, TypeScript, Tailwind CSS 4 and npm with package-lock.json. Available scripts: `dev`, `build`, `start`, `lint`; standalone type check: `./node_modules/.bin/tsc --noEmit --incremental false`.
- `next.config.ts` pins the Turbopack root. No verified production origin or deployment workflow/configuration was found. README contains generic Vercel deployment instructions and stale starter-font information; it is not deployment evidence. Existing `/api/contact` requires server execution and SMTP configuration; it is not part of this audit's changes.
- `eslint-config-next` remains at 15.5.3 while Next.js is 16.2.11; baseline lint passes. This is an existing configuration mismatch, not a regression from this phase.

### Separate reference checkout and source inspection

- Reference: https://github.com/swagatchand98/portfolio_v2.
- Local audit copy: `/tmp/portfolio-reference-audit-20261115`; never nest or copy its `.git` into the portfolio. `/tmp` is temporary, so this pinned source can be fetched again if the directory disappears.
- Audited commit: `179dbdee13a98d94d3eeb8a9cb5289b55ec6ee06`. Its README, AGENTS.md, CLAUDE.md, package/config files, layout/styles, section components, data modules, metadata and contribution helper were inspected.
- Reference stack: Next.js 16.2.9, React 19.2.4, TypeScript and Tailwind CSS 4. Additional dependencies: Framer Motion, react-icons, Vercel Analytics and Speed Insights. No dependency changes are made in Amit's checkout during this phase.
- No repository-level license, copyright or attribution notice was found in the audited source. Do not infer a source/asset reuse grant from public GitHub visibility or attribution. Before later copying, obtain permission or a license from the author. If reuse becomes authorized, record its scope, preserve required notices and add provenance identifying the reference and pinned commit. Keep dependency license notices intact. No reference source/assets are incorporated in this audit.

### Reference appearance and interactions — verified from source

| Element | Reference specification |
| --- | --- |
| Page composition | Single centered column, Tailwind `max-w-2xl` (42rem / 672px), full available width, 20px horizontal padding. Vertical page padding 64px, increasing to 96px at the `sm` breakpoint. |
| Palette | Background `#09090b`; surface `#111114`; hover surface `#17171b`; foreground `#e9e9ee`; muted `#a1a1aa`; faint `#71717a`; white accent. Borders use white at 8% and 14% opacity. |
| Backdrop | Fixed, pointer-transparent radial white highlight centered above the page, at 5% opacity. No animated particles or terminal simulation. |
| Typography | Inter body and interface. Fraunces normal/italic for the quotation. Name: 20px semibold; role/social/experience copy mainly 14px; introductory paragraphs 15px; section labels 12px uppercase with 0.18em tracking. |
| Header | 72px circular image or monogram, name/role/location beside it, wrapping social/resume links below, then two short introductory paragraphs. No sticky navigation bar or hamburger menu exists in the reference. |
| Section order | Header → Contributions → Experience → Selected Work → Skills & Technologies → Education → Quote → Footer. Shared sections have 56px top spacing and 20px between label and contents. |
| Experience | Company and role on the left; dates on the right from `sm` (640px). Narrow screens stack these. Small bullet points, 14px relaxed text, 28px between jobs. |
| Project presentation | Stacked cards with 20px gaps, 16px padding, 12px corner radius, subtle borders and surface background. Name and source/demo icons share a row; description and wrapping tags follow. Hover strengthens border/background. |
| Skills | Wrapping icon-and-text chips, 8px gaps, subtle borders/surface, 8px radius, no proficiency percentages. |
| Education/footer | Education entries use the same stacked-to-row responsive pattern. Footer stacks on narrow screens and becomes a row at `sm`; quotation and footer each have 80px top spacing. |
| Quote | Centered serif italic text at 24px with a quote icon and attribution. The author's quote selection is not Amit's approved content. |
| Reveal motion | Framer Motion fades from opacity 0 and y=16 to visible when scrolled into view; duration 0.5s, once per section, viewport margin -60px and cubic-bezier [0.22, 1, 0.36, 1]. Reduced motion bypasses the animated wrapper. |
| Link feedback | 180ms color transitions; project and skill hover changes. Social/source links use labels or accessible names and external-link protections. |
| Contribution graph | 53-week grayscale grid, seven rows, 10px cells, 3px gaps, month labels, caption and legend; horizontal scrolling is confined to its container. |

These are source-derived measurements and behavior descriptions, not desktop/mobile screenshot verification. The existing polished charcoal/teal page is not the reference design and must not be treated as the fidelity baseline for later rebuilding.

### Runtime, data and metadata implications

- Content is separated into profile, experience, project, skill and education data files. This pattern can map to the portfolio's approved data without adopting the reference author's claims.
- The reference contribution graph fetches `github-contributions-api.jogruber.de` server-side with hourly revalidation and an unavailable-data fallback. Its totals are data-derived, not decorative fixtures. Amit's earlier preference was curated static contribution evidence; whether to retain the graph is a future explicit decision, not silently resolved in this audit. Never copy the reference author's graph or invent activity.
- Reference reveal markup starts hidden; content resilience when JavaScript fails must be addressed in the later interaction phase without inventing a different design. Small faint text and focus styles also require accessibility review.
- Reference metadata includes `swagatchand.me`, the author's identity/photo, generated sharing images/icons, robots/sitemap routes and Person JSON-LD. None of those identity/domain values may be carried over. Await a verified Amit deployment origin for canonical/sitemap configuration.
- Do not copy the reference avatar, PDF resume or personal claims. Preserve Amit's generated resume and evidence-based projects. No quotation, photo, employer URL or project destination should be invented to fill a matching slot.
- Analytics and speed-insights dependencies are not needed merely to reproduce the appearance; decide any telemetry separately in a later phase.

### Baseline results and verification limits

The following checks completed during the immediately preceding read-only audit. This documentation-only completion preserves the same application source and dependency files.

| Target | Check | Result |
| --- | --- | --- |
| Amit portfolio | `npm run lint` | Passed. |
| Amit portfolio | `./node_modules/.bin/tsc --noEmit --incremental false` | Passed. |
| Amit portfolio | `npm run build` | Passed with Google Fonts network access. `/`, `/projects/retinagrade`, `/icon.svg` and `/api/contact` were generated/classified by Next.js. |
| Amit portfolio | `git diff --check` | Passed. |
| Reference checkout | `npm ci --ignore-scripts --no-audit --no-fund` | Passed; dependencies installed only in the separate audit directory. |
| Reference checkout | `npm run lint` | Passed. |
| Reference checkout | `npm run build` | Passed, including framework TypeScript checks and generated metadata routes. |
| Reference checkout | Temporary production server on 127.0.0.1:3105 | HTTP 200; expected header and Selected Work content present. Owned server stopped after readiness check. This does not verify heatmap availability or visual rendering. |
| Both | Desktop/mobile browser inspection | Not completed: connected browser/app inventory is empty, reconfirmed during this documentation step. |

Initial restricted-network Git access failed at DNS resolution; fetching succeeded with approved network access. Previous restricted portfolio builds failed fetching Google Fonts; successful network-enabled builds establish that as an environmental constraint. No new application failure was observed in this audit. No screenshot, runtime performance score or completed keyboard/viewport audit is claimed.

### Phased rebuild outline and acceptance criteria

1. **Audit foundation — completed:** preserve current files/history; create the audit branch; retain a separate, pinned reference checkout; document source-derived design, baseline checks, licensing and browser limits. This phase changes only this plan file in the portfolio.
2. **Reuse and content mapping:** resolve source/asset reuse permission and graph policy; map approved profile, links, internships, projects, skills, education and resume to the reference's slots. Resolve optional photo/quote rather than inventing content. Continue to distinguish internships from open-source work and incomplete features from implemented capabilities.
3. **Reference appearance:** reproduce the verified column width, monochrome tokens, typography, compact header, section spacing, cards/chips and responsive arrangement. Retain the existing framework and approved PDF. Keep earlier case-study routes functional while their presentation is adapted. Do not introduce another original visual direction.
4. **Interactions and accessibility:** reproduce the reference's restrained feedback/reveals with reduced-motion handling and content-visible failure behavior. Add meaningful focus indicators, accessible labels and robust small-screen wrapping without adding a non-reference navigation system.
5. **Validation and handoff:** when browser access is available, compare reference and rebuilt page at 375px, 768px, 1024px and 1440px, then check 320px and 200% zoom for overflow/readability. Verify motion, links, headings, images, resume access and keyboard operation. Run lint/type/build checks; document all remaining limits. A visual fidelity claim requires actual comparison, not source review alone.

Future phases must preserve the reference appearance while using only approved Amit content. Missing evidence stays in CONTENT_REVIEW.md, not public placeholders. Completion of a later phase does not authorize commits, pushes or deployment automatically; never push or deploy publicly unless the user requests it.

## Reference appearance implementation — completed 2026-11-15

This is a fresh implementation of the inspected design, as selected by the user; reference component source and personal assets were not copied. See REFERENCE_PROVENANCE.md for the pinned reference and reuse findings.

### Implemented
- Replaced the original large hero/sticky-navigation design with the inspected 672px centered column, monochrome tokens, subtle top radial background, Inter typography, 72px monogram identity block and wrapping social/resume links. Fraunces is configured for the optional closing quote, with preloading off while unused.
- Preserved reference order: Header, Contributions, Experience, Selected Work, Skills, Education, optional Quote, Footer. The quote is disabled pending approved text; no author content or invented placeholder is used.
- New presentational components live under `src/components/reference/`; homepage configuration is centralized in `src/content/home.ts` and reuses existing profile/project records. Nexathread is shown using approved resume facts. Athira website inclusion is still unresolved and is not silently inferred from resume inclusion.
- Implemented stacked 12px-radius project cards, source/case-study icon actions, wrapping tags and skill chips. Experience/education dates stack on mobile and align from 640px. Page padding is 20px horizontally and 64px/96px vertically, with 56px section gaps.
- Implemented 16px/500ms fade-up entrances with a small IntersectionObserver/Web Animations enhancement, matching the reference's easing and restrained feedback. Initial server content is visible; no-JS, unsupported animation APIs and reduced-motion conditions leave content readable. No animation library is required.
- Added react-icons for social/technology presentation. No Vercel analytics, Speed Insights, tracking ID or external form service was adopted. Existing Next.js version, npm deployment/build scripts, Turbopack root and contact route are preserved.
- Static real GitHub snapshot contains 365 consecutive days totaling 59 contributions for Amitdwivedi22, retrieved 2026-11-15 UTC. The grayscale calendar uses source counts/levels, confines horizontal scrolling to the graph and labels the snapshot date. It makes no runtime API request. The data module supports an unavailable-data fallback for an empty snapshot; no fake cells/totals are introduced.
- Existing RetinaGrade case-study URL and content remain functional, restyled with matching monochrome tokens, compact typography and shared width. The existing PDF is preserved byte-for-byte and still linked. No canonical/domain or deployment URL was invented.
- Before replacing files, saved all existing tracked/untracked source work in `.local-backups/portfolio-before-reference-rebuild-20261115.tar.gz` (ignored, not publicly served). Git history and the existing `rebuild/reference-template-audit` branch are preserved. Older components remain available; application data and checked resume assets were not reset.

### Checks and remaining limitations
- Passed `npm run lint`, standalone `tsc --noEmit --incremental false`, `npm run build` with font network access, and `git diff --check`.
- Generated HTML checks passed for both pages: one h1, unique IDs, labelled heading references, local/cross-page anchors, correct section order, resume target and absence of reference-author identity. Snapshot date continuity/count totals and unchanged output/public PDF copies passed.
- Temporary local production server returned HTTP 200 for `/`, `/projects/retinagrade`, `/resume/amit-kumar-dwivedi-resume.pdf` and `/icon.svg`. Downloaded PDF bytes matched the inspected public artifact. Owned server stopped after checks.
- Browser inventory remains empty. Desktop/mobile visual comparison, zoom/overflow inspection, animation timing observation and interactive keyboard checks are not claimed. Matching is based on source-derived specifications, not verified screenshots. Faint small text follows the reference; a full rendered accessibility review is still pending.
- User-selected deviations are deliberate: original code rather than source reuse, dated activity snapshot instead of hourly live data, monogram instead of another person's photograph, disabled unapproved quote, approved personal content only. These are tracked differences rather than a new design direction.
- This phase does not implement a separate curated PR section, expand work history or deploy. No commits, pushes or public deployment were made.

## Personalization phase — completed 2026-11-15
- Updated central profile positioning to `Full-Stack Developer | Backend Developer | Open-Source Contributor`. Homepage introduction follows the user's supplied full-stack/API, decentralized-systems, RetinaGrade and openSUSE DocBuild wording, with correct Jain University degree and expected graduation 2027.
- Expanded the existing reference-style chip list to 25 supported skills, ordered by languages, frontend, backend, data, tooling/testing and Web3. Icon exports were verified against the installed package. FastAPI is held in CONTENT_REVIEW.md because a dependency entry/planned service is insufficient implementation evidence.
- Retained confirmed GitHub, LinkedIn, email and resume actions, the AD monogram and name in the footer. Changed the existing AD favicon from the earlier teal palette to the reference's monochrome palette. No reference-author photo/branding was found or introduced.
- Kept Nexathread's title, dates and responsibilities unchanged; no absent employment was automatically imported. Project content, static activity snapshot, quote-off choice, typography, section order and interactions remain intact.
- Added role-line wrapping safeguards and nonshrinking skill icons without changing the 72px avatar, 672px column, chip design or breakpoints. Homepage title/description and sharing metadata now reflect the new role and confirmed profile; no domain/canonical URL was invented.
- Code/content checks passed for 25 unique skill/icon mappings, existing Nexathread dates/entry count, and matching unchanged resume PDF copies. Browser inventory remains empty: 320px/375px/768px/desktop wrapping and interactive inspection are not claimed. CSS/source review is not a rendered-layout check.
- No commits, pushes or deployment were performed in this phase.
- Final validation passed: ESLint, standalone TypeScript, production build with font access, whitespace check, rendered identity/education/introduction/skill content, exact approved links, heading/anchor integrity, preserved employment scope, sharing metadata and monochrome SVG favicon. No browser-based result is claimed.

## Three-project replacement phase — completed 2026-11-15
- Featured projects are exactly RapidRepair, Web3 Dropbox and RetinaGrade in that order. Added a concise ProjectCard type with optional visible status and typed source/demo links, separate from detailed case-study data. Retained earlier portfolio-project content without featuring it.
- Kept the reference card padding, radius, background, borders, hover transitions, typography and technology chips. Added a wrapping title/status group and In Progress badge for RetinaGrade. Source actions use GitHub icons, demo/internal-case actions use external-arrow icons; all have descriptive accessible labels. Unavailable links are omitted rather than represented with #.
- RapidRepair summary is supported by inspected routes/models/controllers, while its dashboard is accurately called an interface because displayed bookings are mock data. No demo is added.
- Web3 Dropbox links to the verified source and responding demo; source includes IPFS helpers and contracts, but rental/payment/incentive integration remains unverified. Express is planned in its README, so implemented badges follow the manifest/source rather than the supplied broader stack.
- RetinaGrade case-study structure is preserved. Added a separately labelled Planned ML work section and anchor for EfficientNet/Grad-CAM. In Progress/model-disconnected status and earlier limitations remain explicit. Actual Next.js/Node/Prisma/SQLite stack is used; no unverified Express label or external URL is added.
- No screenshot assets were introduced: title-led cards are the honest fallback consistent with the reference. No application screenshots, metrics or results were fabricated.
- External checks: RapidRepair source metadata HTTP 200, Web3 source metadata HTTP 200, Web3 demo HTTP 200 and matching title. These checks do not demonstrate working wallet transactions, storage availability or other application flows.
- Browser inventory is empty; rendered mobile wrapping, screenshot comparison and interactive keyboard inspection remain unverified. Layout source retains wrapping titles/tags, nonshrinking actions and visible focus styles.
- Personal profile, experience, skills, activity snapshot and resume content are unchanged. No push or deployment is authorized or performed.
- Final validation passed: lint, standalone TypeScript, production build, whitespace check, generated HTML assertions for exactly three ordered cards and their precise accessible actions, visible In Progress status, separately scoped planned ML content, heading/label/anchor integrity, no card screenshot placeholders, and unchanged matching PDF assets. Temporary production server returned HTTP 200 for homepage, existing case-study route and resume, then was stopped. No interactive browser verification is claimed.

## Prominent open-source phase — completed 2026-11-15
- Extended the existing Contributions section into Open Source, retaining `#contributions` immediately below the introduction. Curated work leads; the unchanged dated GitHub calendar is now a supporting GitHub Activity subsection rather than the only evidence.
- Added typed static data for organization/repository, summaries, technologies, precise entry status, direct evidence actions and verification dates. No live GitHub API dependency or runtime status request was introduced.
- openSUSE / DocBuild is labelled Active contributor with separate Merged (#705) and Open PR (#747) entries. Nextcloud / Approval is labelled Issue investigation and feature exploration; its #452 comment is explicitly Investigation proposed, not completed findings/code/merged work.
- Rechecked both PR authors/statuses and the exact Nextcloud comment through public GitHub API. #705 merged, #747 open/unmerged, comment owned by Amitdwivedi22. Evidence dates are static snapshots checked 2026-11-15, not promises of current live status. No test counts or coverage metrics were added.
- Reused reference typography, separators, wrapping technology tags, subtle status badges and the existing section reveal. Heading hierarchy is h2 Open Source → h3 organization → h4 entry; h3 GitHub Activity labels the supporting calendar. No conflicting grid, logos, extra animations or fake counts were added.
- Employment remains separate and unchanged; no SUSE/Nextcloud employment is asserted. Historical Nextcloud #399 remains in prior materials and was not conflated with the #452 investigation.
- Browser inventory is empty. Responsive source includes wrapping headings, status/evidence groups and long link text; actual viewport, keyboard and visual inspection remain unverified.
- Profile, employment, projects, skills, metadata, dated activity JSON and resume content are preserved. No commits, pushes or deployment are performed.
- Final validation passed: ESLint, standalone TypeScript, production build with existing font access, whitespace check, rendered Open Source/organization/entry heading hierarchy, three precise status labels and direct evidence targets, verification dates, local route/anchor integrity and separation from Experience. Hash comparisons confirmed the profile/home data, project data, activity snapshot, root metadata and resume artifacts were not changed. No browser-based responsive or keyboard result is claimed.

## Final functional-details phase — 2026-11-15
- Centralized the user's supplied Drive viewer as resumeUrl and connected the existing Resume action with new-tab/noopener behavior. It is labelled Resume, not a direct download. Anonymous viewer/download HTTP 200 and one-page PDF/name/contact validation passed.
- Preserved the generated local resume and editable source as earlier artifacts; updated resume/README.md to identify the active supplied file. Differences in degree wording and older Web3 completion claims are recorded in CONTENT_REVIEW.md rather than silently rewriting the file or promoting unsupported portfolio claims.
- Retained verified GitHub, LinkedIn and email actions. Public external destinations returned HTTP 200 except LinkedIn's automated-retrieval HTTP 999; the user-confirmed LinkedIn URL remains intact and is not falsely classified as broken.
- Confirmed no form is rendered and no local SMTP configuration is available. Mailto remains the contact mechanism. Unused backend route is unconnected; no email was sent and delivery is not claimed.
- Audited existing homepage/case-study metadata, AD favicon and branding; they are already personal and accurate. Reference-author personal content/analytics/destinations are absent from rendered pages. Provenance/dependency notices are retained. No verified deployment origin was found, including an empty public GitHub repository homepage field; no canonical or sitemap domain was invented.
- Reference design, pages, projects, employment, skills, contribution snapshot and previous PDF bytes are preserved. Browser inventory remains empty, so responsive/interactivity checks cannot be represented as manually completed. No public push, commit or deployment was performed.
- Final validation passed: ESLint, standalone TypeScript, production build with existing font access, whitespace check, rendered active Drive resume action without a download claim, exact confirmed contact/social destinations, internal route/anchor integrity and safe new-tab attributes. Both pages have personal metadata, a valid favicon and no rendered form or author tracking scripts. Hash checks confirmed the design, metadata, project/snapshot/contribution data, provenance, resume PDFs/source and unused contact route stayed unchanged.
- Temporary local production server returned HTTP 200 for homepage, RetinaGrade case study, favicon and retained earlier PDF; served PDF bytes matched the local artifact. Owned server stopped. External Drive viewer/download and all checked non-LinkedIn public actions returned HTTP 200; LinkedIn remains user-confirmed with automated HTTP 999 noted. Browser inventory was empty, so no manual responsive/keyboard result is claimed.

## Reference fidelity and accessibility corrections — 2026-11-15
Source comparison used pinned reference commit 179dbdee13a98d94d3eeb8a9cb5289b55ec6ee06. No connected browser/app was available, so this phase does not claim visual comparison at 390px, 768px or 1440px.

### Corrections applied
- Set reference-equivalent line heights explicitly: role/social/chip/education description 20px; location, tags, dates, footer and activity caption 16px. Experience role weight now inherits the reference-equivalent 500 instead of dropping to 400.
- Project GitHub source icons are explicitly 16px; demo/case-study icons remain 14px. Fixed the footer link's cascade so hover reaches white as in the reference.
- Kept the column at 672px, avatar at 72px, 640px breakpoint, spacing, card geometry, palette identity, font families and section order. Added intrinsic-size/word-wrap protection for longer project/contribution/case-study text and badges, plus wrapping case-study header links; no page-wide overflow clipping workaround is used.
- Added WebKit scrollbar styling to complement the existing standard properties, matching the reference graph's local scroll treatment without page-wide horizontal scrolling.
- Raised only the faint-text neutral from #71717a to #80808a for small-text accessibility. Calculated contrast is now 5.09:1 on page #09090b, 4.82:1 on surface #111114 and 4.57:1 on hover surface #17171b. The reference value calculated at 3.70–4.12:1. These are sRGB palette calculations, not rendered-pixel or full accessibility measurements.
- Reveal enhancement skips sections already in/above the viewport during hydration or restored scrolling, avoiding a fade-out of visible content. Initial reduced motion and unsupported APIs create no observer/animation. Subsequent entries retain 16px/500ms reference easing, once-only observation, preference-change cancellation and cleanup. Server/no-JS content remains visible.

### Deliberate differences retained
Amit's approved content and longer role; curated contribution evidence above the dated real activity snapshot; RetinaGrade's status and case-study route; initials instead of another person's portrait; disabled unapproved quote; direct confirmed contact/Drive resume links; and lightweight browser-native reveal logic instead of Framer Motion. There is no mobile menu in either homepage design, so no hamburger/disclosure behavior was invented. No raster images are currently rendered; the initials treatment reserves dimensions and technical/title illustrations use text. No dependencies were added or removed in this phase.

### Checks and remaining limits
Mocked reveal-logic checks passed for initial visibility/restored scroll, initial reduced motion, missing observer/animation APIs, observed entrance parameters, runtime preference cancellation and cleanup. These are logic checks, not actual browser interaction or animation observations. Contrast and core-dimension/source safeguards passed. Browser-based keyboard/focus/hover behavior, overflow/clipping, zoom, broken-image rendering and matched-viewport screenshot comparison remain pending. No performance measurement or score is asserted.
- Final automated validation passed: ESLint, standalone TypeScript, production build with existing font access, whitespace check, generated heading/label/anchor/asset references, personal metadata, descriptive graphic labels and visible server-rendered sections. Hash checks confirmed all content modules, root metadata, favicon, resume content/PDF, package files and provenance were preserved. Only targeted styles, source-icon class, reveal logic and this plan were changed for the phase. No commit, push or deployment was performed.

## Final review and handoff — 2026-11-15
This is the current completion summary; earlier deferred/temporary notes above are phase history. The portfolio is locally review-ready with documented verification limits, not publicly deployed or visually certified.

### Final in-scope changes
- Replaced starter README with actual npm setup/run/validation/production-server commands; content-editing map; active Drive versus retained generated resume explanation; static-snapshot refresh rules; Next.js deployment configuration; font-network requirements; contact limitations; provenance and review status.
- Removed only the retired, unreferenced header/mobile-navigation components introduced in earlier phases. Confirmed both exist in the ignored pre-rebuild recovery archive before removal. Kept original starter assets, detailed project data, checked PDFs, historical audit evidence and dependency notices; did not indiscriminately remove user work or unused original files.
- No approved content, visual styles, metadata, package files or resume content changed in finalization. Hash checks confirmed all remaining source files, dependencies, provenance and retained resume artifacts match the pre-finalization state.

### Final factual/functional review
- Identity is Amit Kumar Dwivedi; role, education and expected 2027 graduation follow explicit user corrections. Featured order is RapidRepair, Web3 Dropbox and RetinaGrade; RetinaGrade is visibly In Progress with separately labelled planned ML work. Prototype, mock-data and integration limitations remain accurate and documented.
- Open Source is separate from Experience. DocBuild #705 merged and #747 open/unmerged were rechecked publicly; Nextcloud #452 remains a proposed investigation, not a claimed completed implementation/merge. No new metrics or employer relationship is asserted.
- Contact is mailto, not a simulated form. Active resume opens the user-supplied publicly accessible Drive viewer; anonymous one-page PDF/name validation passed. Old local resume remains a retained artifact, not labelled the latest active version. No email was sent or delivery claimed.
- GitHub/profile/project sources, Web3 demo, DocBuild PRs, Nextcloud issue/comment, Next.js footer and Drive viewer returned HTTP 200. LinkedIn returned HTTP 999 to automated retrieval and remains the exact user-confirmed URL; this is a retrieval limit, not a substituted destination or false successful check.
- Local production checks returned HTTP 200 for homepage, RetinaGrade case study, favicon and retained PDF; served PDF matched local bytes. The owned server was stopped after checking.

### Final validation results
- `npm run lint`: passed.
- `npx --no-install tsc --noEmit --incremental false`: passed.
- `npm run build`: passed with existing Google Fonts access.
- `git diff --check`: passed.
- Generated HTML review: passed identity, three ordered project cards, In Progress status, contribution labels, h1/heading-label references, valid internal/cross-page anchors and local assets, safe new-tab attributes, no forms/reference identity, preserved active resume destination.
- Mocked reveal checks: passed initial in-view/restored-scroll visibility, reduced-motion and missing-API fallbacks, entrance parameters, runtime cancellation and cleanup. This is not a browser interaction test. No application-wide unit-test suite exists, and no npm test result is invented.
- Targeted tracked/untracked text scan found no common private-key, AWS/GitHub token or long credential-assignment pattern matches, and no candidate .env/key credential files. Matching values were not printed. Approved public contact details remain intentionally present. No accidental console.log/debug/debugger, TODO/FIXME or reference-author identity strings were found in application source. Pattern scanning is not an exhaustive secret/security guarantee. Recovery archives remain ignored and outside public assets.
- Branch remains `rebuild/reference-template-audit`; HEAD remains `e4baca8dbd7862aec0ebf7360b44d3368fa5fad5`. No commit, push, deployment or Git-history rewrite was performed.

### Existing constraints and remaining blockers
- No application validation failures or new regressions were observed. Restricted-network Google Fonts failures and the eslint-config-next 15 / Next.js 16 mismatch predate finalization; the network-enabled build and current lint pass. No dependency migration was bundled into review.
- No connected browser is available. Matched screenshots at 390/768/1440px, actual overflow/zoom/hover/focus/keyboard observations and visual fidelity signoff remain pending. No performance measurements or scores are claimed.
- No verified deployed origin exists, so canonical/sitemap domain metadata is intentionally omitted. This work does not authorize public deployment.
- The supplied Drive resume contains older Web3 completion/stack and degree wording; the discrepancy is recorded in CONTENT_REVIEW.md and was not copied into corrected portfolio claims. Revising the user's remote resume is a separate content task.
- Intended reference differences are personal content/lengths, curated evidence before a dated activity snapshot, initials, disabled unapproved quote, RetinaGrade's status/detail route, faint-text contrast improvement, safe no-JS content and native lightweight reveals. No source-reuse license was invented; fresh-implementation provenance and third-party notices are preserved.


## Approved hero, internship, skills, contacts and quote update — 2026-11-15
Completed this website-only update; this section supersedes historical headline, disabled-quote and Athira-website-hold notes above.
- Shared headline is Software Engineer; hero location is Bengaluru, India. Page title, description and social metadata follow the new positioning.
- Athira appears once above Nexathread as Backend Engineer Intern, March 2026 – May 2026. Remote — San Francisco, USA is followed by an explicit remote-work/US-company clarification. All six user-supplied responsibilities are retained without new metrics or claims. Nexathread is unchanged.
- Removed Solidity, Ethereum, IPFS and Pytest only from skills and their icon mappings. Remaining 21 chips are unchanged; project and open-source mentions remain intact.
- LinkedIn uses the exact supplied URL including trailing slash, target=_blank and noopener noreferrer. The existing email contact action now displays the address and retains the exact mailto destination. No duplicate contacts, copy button or form was introduced.
- Added the exact approved quote immediately after Education in a semantic blockquote, without heading or attribution. It uses existing Fraunces typography, a responsive two-line composition, white accent emphasis and an aria-hidden divider. No new animation or dependencies were introduced. Existing reveals and reduced-motion behavior are unchanged.
- Updated README summary and quote-editing notes. Downloadable resume artifacts, editable resume sources, active resume link, project data and contribution data are unchanged; artifact hashes verified.

### Checks
- ESLint and standalone TypeScript passed. Production build passed with network access for existing Google Fonts; the initial sandbox build failed fetching Inter/Fraunces, matching the documented environment limitation.
- Generated HTML assertions passed exact identity/headline/location, one Athira internship with all six bullets, explicit remote location, unchanged remaining skills, exact LinkedIn/mailto destinations, safe new-tab attributes, personal metadata, semantic quote text/emphasis and immediate adjacency after Education. No form is rendered.
- Project In Progress status and preserved project/contribution technology mentions passed. Hash checks passed for resume files and project/contribution data; active Drive destination unchanged.
- Browser inventory returned no apps or browsers. Actual mobile/desktop layout, keyboard and animation inspection was unavailable; no visual or performance measurement is claimed.
- No push or deployment performed; existing uncommitted work preserved.


## Profile portrait and introduction update — 2026-11-15
- Inspected the existing 960×1280 photo at images/Amit.jpeg. The requested public path was absent; added a byte-identical copy at public/images/Amit.jpeg, served as /images/Amit.jpeg. Original photo untouched.
- Added an isolated client avatar component using Next.js Image, explicit intrinsic dimensions, optimized image sizing, preload and full-name alt text. The existing 72px circle, border and surrounding layout remain; overflow-hidden proportional CSS cropping targets source square (310,510)–(670,870). AD renders only after image error. Other AD branding is unchanged.
- Visually inspected a temporary raster preview of the specified CSS crop: full hair/chin and upper shoulders are visible, with the table/lower body excluded. This preview is not a browser screenshot or mobile/desktop layout test. No connected apps/browsers were available for actual responsive inspection.
- Replaced the two introductory paragraphs with the user's exact text and set the shared website degree to B.Tech in Computer Science & Engineering. Kept paragraph styling/spacing, Software Engineer, Bengaluru, India and all unrelated content unchanged. This supersedes prior website degree wording.
- Passed production build (network-enabled existing Google Fonts fetch), ESLint, standalone TypeScript and whitespace checks. Initial sandbox build failed solely fetching Inter/Fraunces, the previously documented network limitation.
- Generated HTML checks passed exact paragraphs, hero title/location, corrected degree, image URL/alt/dimensions. Mocked avatar logic passed initial image state and accessible AD-on-error fallback; actual browser image-failure interaction remains untested.
- Hash verification passed original/public photo equality and preservation of all snapshotted resume artifacts, project/contribution data and favicon. Active Drive destination unchanged. No commit, push or deployment performed.
