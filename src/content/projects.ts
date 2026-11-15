export type ProjectLink = {
  kind: "source" | "demo";
  label: string;
  href: string;
};

export type ProjectCard = {
  slug: string;
  title: string;
  purpose: string;
  technologies: string[];
  statusLabel?: string;
  caseStudy?: string;
  links: ProjectLink[];
};

export type Project = ProjectCard & {
  kind: string;
  problem: string;
  contribution: string;
  capabilities: string[];
  plannedCapabilities?: string[];
  decisions: { title: string; detail: string }[];
  validation: string;
  status: string;
  limitations: string;
};

export const retinaGrade: Project = {
  slug: "retinagrade",
  title: "RetinaGrade",
  kind: "Personal project · Research prototype",
  purpose:
    "An ongoing research project working toward diabetic-retinopathy detection and severity grading. Image and record management are implemented; EfficientNet classification and Grad-CAM explainability are planned.",
  problem:
    "A screening research workflow needs a way to keep uploaded images private, associate records with their owner, and distinguish missing model output from actual results.",
  contribution:
    "I built the application: the Next.js interface and API routes, account-scoped data services, private image storage, and record and report workflows.",
  statusLabel: "In Progress",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "SQLite",
    "Sharp",
    "Zod",
    "PDFKit",
  ],
  capabilities: [
    "Account authentication with cookie sessions and server-side ownership checks on records.",
    "Private JPEG/PNG uploads with validation and normalization before storage.",
    "Creation of analysis records in AWAITING_MODEL state, with owner-scoped history, search, status filtering and pagination.",
    "PDF record summaries that identify unavailable results and explicitly state that the prototype is not diagnostic.",
  ],
  plannedCapabilities: [
    "EfficientNet-based classification for diabetic-retinopathy detection and severity grading.",
    "Grad-CAM explainability for model outputs, after a working inference path is established.",
  ],
  decisions: [
    {
      title: "SQLite for local persistence",
      detail:
        "Prisma and SQLite keep the local data layer in one application. SQLite permits one writer at a time, so concurrent writes and transaction duration need care. Image availability is checked outside the database transaction, and ownership is rechecked inside it.",
    },
    {
      title: "Private storage behind an adapter",
      detail:
        "Image bytes live outside the public web directory and are served through ownership-checked routes. A storage interface keeps file access separate from record services. Local storage requires backup and reconciliation alongside the database; it does not provide distributed object storage.",
    },
  ],
  validation:
    "Source review found automated tests for owner isolation, invalid uploads, history queries and PDF reporting, using temporary test data. These tests were inspected, not executed as part of this portfolio review; no runtime pass result is claimed here.",
  status: "In Progress · Research prototype · Model not connected",
  limitations:
    "The inference client and contract exist, but the worker, enqueueing, retry execution and explanation persistence are incomplete. There is no verified trained-model evaluation, Grad-CAM implementation, clinical validation or accuracy result. Public demo records are synthetic examples, not inference results. Local SQLite and filesystem storage also constrain deployment.",
  caseStudy: "/projects/retinagrade",
  links: [],
};

export const portfolioProject: Project = {
  slug: "portfolio",
  title: "Engineering portfolio",
  kind: "Personal project · This website",
  purpose:
    "A focused home for my work, with engineering evidence behind each published claim.",
  problem:
    "The previous site mixed broad skill ratings and project claims with state-only navigation. Readers needed a clearer way to assess the work and move between sections.",
  contribution:
    "I built the portfolio around a typed content module, reusable layout components, section navigation and source-backed project presentations.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  capabilities: [
    "Native section anchors, wrapping social links and responsive project cards.",
    "Reusable layout, typography and project components with keyboard focus and reduced-motion styles.",
    "A direct email action and confirmed social links.",
  ],
  decisions: [
    {
      title: "Typed content instead of a CMS",
      detail:
        "Content lives alongside the application, with shared types and no external content service. Updating project information requires a code change and rebuild.",
    },
    {
      title: "Direct email contact",
      detail:
        "A mailto link avoids depending on an unverified delivery service. It opens the visitor’s email client; the site cannot confirm that a message was sent. A Nodemailer route exists in the repository, but delivery has not been verified.",
    },
  ],
  validation:
    "ESLint, TypeScript and production build checks passed during the main portfolio phase. Generated HTML checks verified section targets, unique IDs and approved links. Browser-based layout and keyboard verification remain pending because no browser was connected.",
  status: "Implemented · Browser review pending",
  limitations:
    "A reviewed resume PDF is linked; no verified deployment URL is asserted. Automated static checks do not establish visual accessibility or successful email delivery.",
  links: [
    {
      kind: "source",
      label: "View source",
      href: "https://github.com/Amitdwivedi22/Portfolio",
    },
  ],
};
// Retain the earlier portfolio case-study data without featuring it on the homepage.
export const caseStudyProjects: Project[] = [retinaGrade, portfolioProject];

export const rapidRepair: ProjectCard = {
  slug: "rapidrepair",
  title: "RapidRepair",
  purpose:
    "A full-stack service marketplace connecting users with service providers. Includes listings, provider profiles, role-aware dashboard interfaces, JWT authentication with bcrypt hashing, role-based access, and REST APIs for bookings, reviews and ratings.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
  ],
  links: [
    {
      kind: "source",
      label: "Source code",
      href: "https://github.com/Amitdwivedi22/RapidRepair",
    },
  ],
};

export const web3Dropbox: ProjectCard = {
  slug: "web3-dropbox",
  title: "Web3 Dropbox",
  purpose:
    "A decentralized file-storage prototype exploring IPFS and Ethereum smart contracts. Source includes Helia upload/download helpers and file-ownership contracts; storage rental, payments and token incentives remain experimental and unverified end to end.",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "IPFS",
    "Solidity",
    "Ethereum",
  ],
  links: [
    {
      kind: "source",
      label: "Source code",
      href: "https://github.com/Amitdwivedi22/web3-dropbox",
    },
    {
      kind: "demo",
      label: "Live demo",
      href: "https://web3-dropbox.vercel.app/",
    },
  ],
};

export const projects: ProjectCard[] = [rapidRepair, web3Dropbox, retinaGrade];
