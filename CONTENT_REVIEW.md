# Content review

## Publication rule
Only current user-confirmed facts and directly observed repository evidence are published. Existing website copy is not independent verification. Empty sections and their navigation links stay hidden; no placeholder claims appear publicly.

## User-confirmed information
- Approved public destinations: https://github.com/Amitdwivedi22, https://www.linkedin.com/in/amit-kumar-dwivedi-9b1789233, and adwivedi08340@gmail.com. The user confirmed all three for publication.
- The main-experience phase used portfolio evidence only. In the project phase the user additionally approved RetinaGrade and confirmed “I built it.” This approval covers portfolio inclusion; resume inclusion remains unresolved.
- Name: Amit Kumar Dwivedi.
- B.Tech in Cloud Computing & Information Security, Jain University; expected graduation 2027.
- Target roles: Software Engineer, Backend Developer, Full-Stack Developer.
- Preferred locations: Bengaluru and remote roles accepting applicants from India. This is a preference, not a confirmed home address.
- Preferred Node.js backend stack: Express with TypeScript; preference does not establish proficiency.

## Verified repository evidence
The portfolio uses Next.js, React, TypeScript/JavaScript, Tailwind CSS, Node.js, npm and ESLint. These are presented as technologies used in this repository, not proficiency ratings. Git is the repository's version-control system. No local resume file was found.

## Previously reported; not yet independently verified
- Skills: JavaScript, TypeScript, Python, Java, SQL, React, Next.js, Tailwind CSS, Node.js, Express, FastAPI, MongoDB, PostgreSQL, MySQL, Git, GitHub, Linux, Docker, Pytest, REST APIs, AI API integration. Repository-supported technologies above have narrower evidence; remaining claims are held.
- openSUSE DocBuild: reported merged test-coverage work and subsequent contributions. Need PR URLs, merge state, authorship and actual scope. Open-source participation is never employment.
- Nextcloud: issue investigation/proposals; no merged-contribution claim without evidence.
- Athira: Backend Engineer Intern, March–May 2026; FastAPI, MongoDB, scraping, Gemini and dataset ingestion reported. Existing page included Athira but no supporting evidence. Confirm dates, scope, company description and inclusion separately for portfolio/resume.
- Nexathread: R&D Intern, February–April 2025 reported; old website says R&D Developer. Confirm official title and actual responsibilities.
- Automated Educational Dataset Pipeline: need repository, implemented scope and evidence.
- RetinaGuard AI / RetinaGrade: Next.js and Express/TypeScript reported. EfficientNet and Grad-CAM were planned; never label implemented without source evidence. Confirm preferred name and inclusion separately for portfolio/resume.

## Existing content requiring confirmation
Web3 Dropbox and SustainDev links and completion claims; technology lists; diploma, institution and 8.91 CGPA; Class 10 score; three hackathons, four projects and two years coding; language proficiency; GSAP, Three.js and AWS claims. These are not published in the new foundation.

The old GitHub link was date-filtered to September 2025. GitHub, LinkedIn and email have since been confirmed by the user. X and telephone ownership/currentness remain unconfirmed. The resume link points to a Google Drive folder, not a direct artifact. Web retrieval failed for the tested portfolio/project demos and resume folder: this is inconclusive, not evidence that URLs are broken. Only the approved GitHub, LinkedIn and email destinations are published. The resume action is deferred until a reviewed artifact is available.

## Outstanding questions
1. RetinaGrade is now approved for this portfolio. Its resume inclusion and Athira inclusion in either artifact remain unresolved. LinkedIn exclusions do not answer those questions.
2. Supply approved project/contribution evidence and a directly accessible current resume; confirm Nexathread's official title.
3. Resolved for this phase: the user confirmed GitHub, LinkedIn and email. Contact and footer links are enabled; X and telephone are held.

The user selected hiding pending sections. No response to unresolved questions is required to maintain the completed visual foundation.

## Main experience evidence
The portfolio project entry describes directly observed App Router, typed content, reusable components, navigation and reduced-motion implementation. Backend skills are limited to Node.js, Next.js Route Handlers and Nodemailer used by this repository. No database group or automated-testing claim is published without evidence. The existing mail route is described without claiming verified delivery; visitors use a mailto action that opens their email client.


## Project case-study phase: RetinaGrade
Approved by the user for portfolio inclusion, with personal implementation attribution. Local source is accessible at `/home/amit/Documents/RetinaGrade/retinaguard-ai`. The checkout has no configured Git remote; no public repository or live URL is asserted. No suitable screenshots were found in public assets; previews are explicitly typographic illustrations.

Current source supersedes the earlier Express description: Next.js App Router, React, TypeScript, Tailwind CSS, Prisma/SQLite, Sharp, Zod and PDFKit. Evidence inspected:
- `package.json`: dependency and test-command inventory.
- `src/server/auth/sessions.ts` and record HTTP/service boundaries: cookie sessions and account-scoped access.
- `src/server/services/images.ts`, `src/server/storage/normalize.ts`, `src/server/storage/interface.ts`: upload validation/normalization, private storage and recovery boundary.
- `src/server/services/analyses.ts`: owner scoping, AWAITING_MODEL creation, filtering/search and pagination, retry-safe record creation. This is record-creation idempotency, not a completed inference retry worker.
- `src/server/services/report.ts`: account-scoped PDF summaries, unavailable-result handling and non-diagnostic wording.
- `src/server/db/client.ts`: Prisma SQLite adapter. Analysis service explicitly keeps image availability work outside database transactions, rechecking ownership within them.
- `src/server/services/model.ts`: model disconnected, predictions/heatmaps unavailable; execution throws MODEL_NOT_CONFIGURED.
- `tests/backend/records.test.ts` and `tests/backend/reporting.test.ts`: source-reviewed tests for owner scope, upload failures, history queries and report export. Not executed in this portfolio phase; no passing runtime result or coverage metric is asserted.
- README and backend-status documentation: incomplete worker/enqueue/retry/explanation integration, synthetic demo data and deployment limitations. No trained-model, Grad-CAM, clinical-validation or accuracy claim is published.

Dataset pipeline and other previously reported projects remain unpublished. The user selected using available approved projects rather than supplying further pipeline evidence. No new resume or employment content is introduced.

## Resume source decisions (supersedes earlier unresolved resume notes)
The user approved `/home/amit/Downloads/resume (1).pdf` as the latest career-detail source and selected including both Athira and RetinaGrade in the resume. Athira dates/role/responsibilities, Nexathread's Research & Development Intern title and February-April 2025 dates, diploma institution/dates, telephone and broader technical skills are taken from that approved source. They are user-supplied career facts, not independently employer-verified. No internship performance metric is added.

The explicit B.Tech in Cloud Computing & Information Security / expected 2027 correction overrides different degree wording in the source PDF. RetinaGrade uses the inspected Next.js/Prisma/SQLite implementation, not the earlier reported Express stack. Source/demo links are omitted for RetinaGrade. Technical skills stay visible on the one-page resume without proficiency claims.

Public evidence reverified for resume publication: https://github.com/openSUSE/docbuild/pull/705 (merged), https://github.com/openSUSE/docbuild/pull/747 (open, unmerged), https://github.com/nextcloud/approval/pull/399 (merged). The Nextcloud claim is restricted to PHP approved-tag validation in the merged diff, not local frontend changes or the separate assignment-request comment. These findings supersede earlier investigation-only/missing-PR notes. No public website contribution row is added in this resume-only phase.

The new reference-styled PDF and editable source are generated from approved facts. Original resume files are preserved. Telephone is included in the resume per the approved source; the website contact section remains limited to its previously confirmed destinations.

## Reference-matched homepage phase (current website content)
The user selected fresh implementation rather than reference source reuse, and a real static contribution snapshot rather than a runtime API. The page uses the confirmed profile, source-supported RetinaGrade/portfolio projects, approved resume, and Nexathread details from the latest approved resume. Athira remains off the website pending website-specific inclusion; resume approval is unchanged.

No reference-author identity, photograph, quote, contact destination, project, domain or tracking configuration was imported. The avatar is Amit's monogram. The quote is null/off until approved content is supplied; no empty quote placeholder is rendered. There is no remaining reference-author personal content in the rendered pages. Authorship/provenance is documented separately in REFERENCE_PROVENANCE.md.

GitHub activity snapshot: `src/content/activity.json`, username Amitdwivedi22, retrieved 2026-11-15 UTC from `https://github-contributions-api.jogruber.de/v4/Amitdwivedi22?y=last`. The retrieved 365 dates are consecutive and unique; counts sum to 59. The public calendar explicitly labels it as a dated snapshot, not live activity or merged PR count. Values come from the source service; no activity was fabricated. No client or server runtime call is made. Regeneration must validate dates/counts/levels and update the retrieval timestamp; if data cannot be fetched, use the unavailable message rather than generated sample cells.

Skills are compacted from approved/source-supported items, without proficiency ratings. Portfolio project content was corrected to describe current section navigation (not the retired mobile menu) and acknowledge the reviewed linked resume. RetinaGrade limitations and its unverified external source/demo destinations remain unchanged.

## Personalization phase — 2026-11-15
The user's latest explicit profile takes precedence: Amit Kumar Dwivedi; Full-Stack Developer | Backend Developer | Open-Source Contributor; B.Tech in Cloud Computing & Information Security, Jain University, expected 2027. Introductory copy follows the user's supplied wording about full-stack applications/APIs, exploring decentralized systems, RetinaGrade and openSUSE DocBuild. This expresses interests/current work, not seniority, production scale or completed model inference.

The homepage uses 25 supported skill chips in the requested category order, with no proficiency ratings:
- JavaScript, TypeScript, Python, Java, SQL: approved resume plus Python/Pytest contribution and SQLite/SQL implementation evidence.
- React, Next.js, HTML, CSS, Tailwind CSS: portfolio source and approved resume.
- Node.js, Express.js, REST APIs: approved resume and repository/server-route evidence; no claim Express powers RetinaGrade.
- MongoDB and MySQL: approved latest resume; SQLite and Prisma: inspected RetinaGrade source. Database items are not inferred solely from the preferred stack.
- Git, GitHub, Linux, Docker, Pytest: approved latest resume and inspected contribution/repository evidence.
- Solidity, Ethereum and IPFS: the Web3 Dropbox entry in the approved latest resume. These are user-supplied skills, not independently verified deployment or scalability claims; no new Web3 project/completion claims are added.

FastAPI remains unpublished as a skill pending specific implementation/work evidence. Its presence in RetinaGrade's ML dependency manifest does not demonstrate an implemented service; the inspected README identifies that service as future work. This does not invalidate the previously reported internship stack, but that claim has not been specifically substantiated here.

Nexathread remains the only visible employment entry with unchanged role, dates and bullets. Athira and other absent experience were not added. LinkedIn and email remain the existing confirmed destinations; GitHub remains Amitdwivedi22. The initials avatar and favicon are Amit's AD branding; no reference author's portrait or personal branding is present. The reference palette, fonts, layout, section order and animation behavior are preserved. Resume content/assets were not regenerated in this phase.

## Three-project replacement phase — 2026-11-15
Homepage order is now RapidRepair, Web3 Dropbox, RetinaGrade. The earlier portfolio project data is retained but no longer featured. Cards use their real titles, not fabricated application screenshots; no suitable screenshots were found in the inspected materials (RapidRepair's logo is not a screenshot).

### RapidRepair
Source URL `https://github.com/Amitdwivedi22/RapidRepair` verified via public repository metadata. Local source reviewed at `/home/amit/Documents/RapidRepair/RapidRepair`:
- frontend/backend package manifests verify React, TypeScript, Tailwind, Node/Express and MongoDB/Mongoose.
- User model and authentication controller verify bcrypt hashing, JWT generation, customer/provider registration roles; auth middleware verifies tokens and implements role checks.
- Service, booking and review routes/controllers support listings, provider access restrictions, booking operations and reviews/ratings.
- ProviderProfilePage and Dashboard exist, but Dashboard.tsx explicitly uses mockBookings. Public copy says role-aware dashboard interfaces, not a fully integrated live booking dashboard. No runtime/authentication or production-security validation is claimed, and the placeholder backend test command is not a passing test suite.
Only the verified repository action is shown; no demo or usage metric was invented.

### Web3 Dropbox
Both `https://github.com/Amitdwivedi22/web3-dropbox` and `https://web3-dropbox.vercel.app/` were rechecked successfully. The demo returned HTTP 200 with the Web3 Dropbox title; wallet operations, transactions and file transfer were not exercised. Repository source inspection covered package.json, README, src/services/ipfs.ts, FileStorage.sol and StorageMarket.sol.
The manifest verifies React/Next.js, TypeScript and Tailwind plus blockchain/storage packages. The Helia helper implements upload/download operations. FileStorage implements file records, ownership checks and visibility flags; this is not proof of encrypted-byte access control. Marketplace source includes staking/payment/storage-request functions, but end-to-end integration/deployment was not verified. README explicitly marks Express backend services as planned and contains broader aspirational claims alongside an MVP/simulation description. Source helpers/contracts do not establish a finished rental/payment/incentive platform. Public copy is intentionally prototype/exploration wording, not completion or scalability claims. Express is not listed as implemented; no encryption, token rewards or storage-rental completion claim is introduced.

### RetinaGrade
The user explicitly requested In Progress, now visible on the card and case study. Planned EfficientNet classification and Grad-CAM explainability are separated from implemented account/image/record/PDF workflows. The aim is diabetic-retinopathy detection and severity grading, not a claim of working predictions. No trained model, accuracy, clinical validation or production-readiness claim is made.
The inspected application manifest and implementation still use Next.js Route Handlers with Node.js and Prisma/SQLite; no Express backend is present. The supplied Express stack remains a discrepancy rather than an invented implementation label. Existing detailed limitations and source-reviewed-test wording remain. No public RetinaGrade source or live-demo URL is verified, so only its internal case-study action is shown.

## Prominent open-source section — 2026-11-15
Curated static evidence is now public immediately below the introduction, under Open Source. Static records live in `src/content/open-source.ts`; no GitHub API is called by the application during rendering or build. Each entry includes technologies, exact status, a descriptive direct evidence action and the verification date.

Public evidence rechecked on 2026-11-15 through GitHub:
- https://github.com/openSUSE/docbuild/pull/705 — authored by Amitdwivedi22, closed and merged. Python/Pytest tests exercise manifest cross-reference language/category behavior, preserve source JSON, and cover missing-file and invalid-schema handling. No percentage or current runtime test-pass claim is added.
- https://github.com/openSUSE/docbuild/pull/747 — authored by Amitdwivedi22, open and unmerged. This is the specific evidence for continuing DocBuild work: progress callbacks, Rich status updates and regression tests, disabling animation for non-interactive/verbose output. Active contributor is an open-source role, not employment at SUSE.
- https://github.com/nextcloud/approval/issues/452#issuecomment-6768231915 — authored by Amitdwivedi22. The comment proposes investigating approval workflows/file versioning/named revisions and requests assignment. The public entry is explicitly Investigation proposed, with group context Issue investigation and feature exploration. It does not establish an assignment, completed investigation, code contribution or merge. PHP/Nextcloud are repository context, not an assertion that code was changed for this issue.

Historical merged Nextcloud PR #399 remains verified separately in prior materials/resume; it is not used to turn issue #452 into a completed contribution. Nexathread stays the only current public employment entry. Open-source groups are separate from Experience.

The existing GitHub calendar is retained beneath the curated work as a supporting GitHub Activity subsection, with its original snapshot data/count/date unchanged. Those activity counts are not a merged-PR count. No additional activity metrics, organization logos or fabricated statistics were introduced.

## Final functional-details phase — 2026-11-15
Active website resume is now the user's supplied Google Drive viewer:
https://drive.google.com/file/d/1YdRHCP8FzeydoOj6vXLFSndXAqVND1aq/view?usp=sharing
Configured centrally as resumeUrl in src/content/portfolio.ts and reused by homepage social actions. This is an external viewer action, not a direct download or proof that portfolio claims match every older statement in the file. Both the viewer and anonymous PDF download returned HTTP 200. The PDF opens as one page and identifies Amit Kumar Dwivedi; embedded email/GitHub/LinkedIn links match the user's confirmed destinations. Verified PDF SHA256: 40b48663e7cf605c0e1355e6ac5c71b523dcba37078966ea3dc4edb2783c5d4b.

The Drive PDF is linked as supplied, without rewriting. It uses older Cloud Technology degree wording (portfolio retains the user's explicit Cloud Computing correction), and describes Web3 storage rental, token incentives and deployed contracts more broadly than the inspected source supports. It also lists Express for Web3 while source marks that backend planned. These statements are not copied into the portfolio or treated as new implementation evidence. The generated local PDF and editable source remain as an earlier retained artifact, not the active website resume; no old artifact is relabelled as newly updated.

Confirmed public actions remain GitHub Amitdwivedi22, LinkedIn amit-kumar-dwivedi-9b1789233 and mailto:adwivedi08340@gmail.com. GitHub, supplied Drive viewer, both project source URLs, Web3 demo, both DocBuild evidence links, Nextcloud issue/comment and the framework footer link responded HTTP 200. LinkedIn returned HTTP 999 to automated retrieval; ownership/destination remains user-confirmed, and this response is not classified as a broken profile or reason to substitute another URL.

No contact form is rendered. No local .env files or configured GMAIL_USER/GMAIL_APP_PASSWORD environment pair were found; secret values were not printed. The unused Nodemailer route is preserved and unconnected, and no email was sent. The site offers an email-client action and does not display simulated or verified-delivery success.

Repository metadata has an empty homepage field and local configuration provides no verified deployment URL. Canonical/metadataBase/sitemap origin values remain absent. Accurate personal titles/descriptions, sharing metadata, initials favicon and reference provenance remain in place; there is no reference-author resume, portrait, domain, analytics or destination in rendered pages.

## Final handoff review — 2026-11-15
No further personal/career claims were added during finalization. Identity, exactly three featured projects, RetinaGrade In Progress/planned ML separation and the current open-source evidence were confirmed against the approved materials. The live DocBuild states remain merged #705 and open/unmerged #747. External project/evidence/Drive links responded; LinkedIn automated retrieval remains restricted (HTTP 999), with its user-confirmed URL retained. Active Drive resume access and name/one-page PDF validity were reconfirmed; its older claim/degree discrepancies remain noted rather than silently imported.

Final targeted source scans found no common secret-pattern matches, candidate .env/key credential files, accidental debug statements or reference-author identity in application source. Approved contact details and the provided resume remain intentional public information. This is not an exhaustive security guarantee. Browser-based visual/mobile/keyboard comparison remains unperformed because no connected surface exists. No new implementation facts, metrics or performance scores are asserted.


## User-approved website update — 2026-11-15
This update supersedes earlier website-only holds and historical headline/quote notes above. The user explicitly approved Athira for the website: Backend Engineer Intern, March 2026 – May 2026, Remote — San Francisco, USA, with remote work for a US-based company stated explicitly. Its six responsibilities are user-supplied career facts: FastAPI/MongoDB backend maintenance, educational scraping, question ingestion/validation/storage, Gemini integration, hash-based deduplication, and REST APIs with pagination/search/topic/difficulty/question-type filters. No metrics, employer verification or additional responsibilities are claimed. Nexathread is unchanged; open source remains separate from employment.

The current headline is exactly Software Engineer and the hero location is Bengaluru, India, both explicitly supplied by the user. LinkedIn is exactly https://www.linkedin.com/in/amit-kumar-dwivedi-9b1789233/ and email remains adwivedi08340@gmail.com. The email address is visible in the existing contact area; it remains a mailto action, not a contact-form delivery integration.

The user approved the closing statement “Learn with curiosity. Build with purpose”, without attribution, immediately after Education. Solidity, Ethereum, IPFS and Pytest are removed only from skills, not from accurate project/contribution descriptions. All downloadable resume files, editable resume sources and the active Drive link are unchanged.


## User-approved portrait and degree correction — 2026-11-15
The latest explicit correction supersedes previous degree wording on the website: B.Tech in Computer Science & Engineering at Jain University, graduating in 2027. The two introduction paragraphs use the user's exact supplied wording. Hero title Software Engineer and location Bengaluru, India are unchanged.

The supplied photo was found at images/Amit.jpeg, not the initially stated public path. It was inspected and copied byte-for-byte to public/images/Amit.jpeg; the original remains intact. Only the profile placeholder is replaced, with full-name alternative text and AD shown only on image error. Other AD branding is unchanged. CSS provides a close circular crop without retouching or changing the source image. Resume files and their wording/destination were not changed; earlier recorded resume discrepancies remain separate.
