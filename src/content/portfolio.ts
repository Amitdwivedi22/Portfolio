import { projects } from "./projects";
export { projects } from "./projects";

export type EvidenceItem = {
  title: string;
  kind: string;
  summary: string;
  detail: string;
  technologies: string[];
  links: { label: string; href: string }[];
};
export type Experience = {
  role: string;
  organization: string;
  dates: string;
  summary: string;
};

// Only approved public facts belong here. Pending claims live in CONTENT_REVIEW.md.
export const profile = {
  name: "Amit Kumar Dwivedi",
  initials: "AD",
  photo: "/images/Amit.jpeg",
  interests: "Backend & full-stack development",
  positioning: "Software Engineer",
  introduction:
    "I turn ideas into working software—from user-facing applications to the APIs and backend systems behind them. My focus is on clear architecture, maintainable code, and solving practical problems.",
  locations: "Bengaluru, India",
  degree: "B.Tech in Computer Science & Engineering",
  university: "Jain University",
  graduation: "2027",
};
export const contributions: EvidenceItem[] = [];
export const experience: Experience[] = [];
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Amitdwivedi22" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amit-kumar-dwivedi-9b1789233/",
  },
];
export const email = "adwivedi08340@gmail.com";
// User-supplied active resume. This opens the Drive viewer, not a direct download.
export const resumeUrl =
  "https://drive.google.com/file/d/1YdRHCP8FzeydoOj6vXLFSndXAqVND1aq/view?usp=sharing";

export const contactLinks = [
  { label: "Email", href: `mailto:${email}` },
  ...socialLinks,
];
export const skills = [
  { label: "Languages", items: ["TypeScript", "JavaScript"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    label: "Backend",
    items: ["Node.js", "Next.js Route Handlers", "Nodemailer"],
  },
  {
    label: "Tools / static checks",
    items: ["Git", "npm", "ESLint", "TypeScript compiler"],
  },
];
export const navigation = [
  ...(projects.length ? [{ label: "Projects", href: "#projects" }] : []),
  ...(contributions.length
    ? [{ label: "Open source", href: "#open-source" }]
    : []),
  { label: "Skills", href: "#skills" },
  ...(experience.length ? [{ label: "Experience", href: "#experience" }] : []),
  { label: "About", href: "#about" },
  ...(contactLinks.length ? [{ label: "Contact", href: "#contact" }] : []),
];
