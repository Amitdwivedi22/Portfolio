import { profile, email, socialLinks, resumeUrl } from "./portfolio";
import { projects } from "./projects";

export const home = {
  name: profile.name,
  monogram: profile.initials,
  photo: profile.photo,
  role: profile.positioning,
  location: profile.locations,
  bio: profile.introduction,
  intro: `I bring that same approach to open source through my contributions to openSUSE DocBuild. I’m pursuing a ${profile.degree} at ${profile.university}, graduating in ${profile.graduation}.`,
  socials: [
    ...socialLinks.map((link) => ({
      ...link,
      icon: link.label === "GitHub" ? "github" : "linkedin",
    })),
    { label: email, href: `mailto:${email}`, icon: "email" },
    {
      label: "Resume",
      href: resumeUrl,
      icon: "resume",
    },
  ],
  experience: [
    {
      organization: "Athira",
      role: "Backend Engineer Intern",
      dates: "March 2026 – May 2026",
      location: "Remote — San Francisco, USA",
      locationNote: "Remote work for a US-based company.",
      points: [
        "Managed and maintained backend server and API services using FastAPI and MongoDB.",
        "Implemented web scraping to collect educational content and support dataset generation.",
        "Built ingestion workflows to process, validate, and store generated questions in MongoDB.",
        "Integrated Gemini APIs into the question-generation workflow.",
        "Implemented hash-based duplicate detection to prevent repeated records during ingestion.",
        "Developed REST APIs with pagination, search, and topic, difficulty, and question-type filters.",
      ],
    },
    {
      organization: "Nexathread",
      role: "Research & Development Intern",
      dates: "Feb 2025 – Apr 2025",
      points: [
        "Developed responsive web interfaces using React and Tailwind CSS.",
        "Researched technical trends and competitors, preparing reports to support product and business decisions.",
      ],
    },
  ],
  projects,
  // Approved resume and source evidence are mapped in CONTENT_REVIEW.md.
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Prisma",
    "Git",
    "GitHub",
    "Linux",
    "Docker",
  ],
  education: [
    {
      school: profile.university,
      degree: profile.degree,
      dates: "Expected 2027",
    },
  ],
  quote: {
    opening: "Learn with ",
    firstEmphasis: "curiosity",
    closing: "Build with ",
    secondEmphasis: "purpose",
  },
};
