import Link from "next/link";
import {
  FaGithub,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaLinkedinIn,
  FaEnvelope,
  FaRegFileLines,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPrisma,
  SiSqlite,
  SiGit,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { home } from "@/content/home";
import { Section } from "@/components/reference/section";
import { OpenSource } from "@/components/reference/open-source";
import { ProfileAvatar } from "@/components/reference/profile-avatar";

const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  resume: FaRegFileLines,
};
const skillIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  Prisma: SiPrisma,
  SQLite: SiSqlite,
  Git: SiGit,
  Java: FaJava,
  SQL: FaDatabase,
  HTML: SiHtml5,
  CSS: SiCss,
  "REST APIs": FaNetworkWired,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  GitHub: FaGithub,
  Linux: SiLinux,
  Docker: SiDocker,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main" tabIndex={-1} className="reference-page">
        <header className="profile-header">
          <div className="profile-identity">
            <ProfileAvatar
              src={home.photo}
              name={home.name}
              initials={home.monogram}
            />
            <div>
              <h1>{home.name}</h1>
              <p className="profile-role">{home.role}</p>
              <p className="profile-location">
                <FaLocationDot aria-hidden="true" />
                {home.location}
              </p>
            </div>
          </div>
          <nav
            id="contact"
            aria-label="Social and contact links"
            className="profile-socials"
          >
            {home.socials.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("https:") || link.icon === "resume"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <p className="profile-bio">{home.bio}</p>
          <p className="profile-intro">{home.intro}</p>
        </header>
        <OpenSource />
        <Section id="experience" title="Experience">
          <div className="job-list">
            {home.experience.map((job) => (
              <article key={job.organization}>
                <div className="entry-heading">
                  <h3>
                    {job.organization}
                    <span> · {job.role}</span>
                  </h3>
                  <p className="entry-date">{job.dates}</p>
                </div>
                {job.location && (
                  <p className="job-location">
                    {job.location}
                    <span>{job.locationNote}</span>
                  </p>
                )}
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
        <Section id="projects" title="Selected Work">
          <div className="work-list">
            {home.projects.map((project) => (
              <article className="work-card" key={project.slug}>
                <div className="work-heading">
                  <div className="work-title">
                    <h3>{project.title}</h3>
                    {project.statusLabel && (
                      <span className="project-status">
                        {project.statusLabel}
                      </span>
                    )}
                  </div>
                  <div className="work-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        aria-label={`${project.title}: ${link.label}`}
                        title={`${project.title}: ${link.label}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.kind === "source" ? (
                          <FaGithub
                            className="source-icon"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaArrowUpRightFromSquare aria-hidden="true" />
                        )}
                      </a>
                    ))}
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        aria-label={`${project.title} case study`}
                        title={`${project.title} case study`}
                      >
                        <FaArrowUpRightFromSquare aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
                <p>{project.purpose}</p>
                <ul className="technology-tags">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
        <Section id="skills" title="Skills & Technologies">
          <ul className="skill-chips">
            {home.skills.map((skill) => {
              const Icon = skillIcons[skill];
              return (
                <li key={skill}>
                  {Icon && <Icon aria-hidden="true" />}
                  {skill}
                </li>
              );
            })}
          </ul>
        </Section>
        <Section id="education" title="Education">
          {home.education.map((item) => (
            <div className="education-entry entry-heading" key={item.school}>
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
              <p className="entry-date">{item.dates}</p>
            </div>
          ))}
        </Section>
        {home.quote && (
          <figure className="closing-quote">
            <span className="quote-divider" aria-hidden="true" />
            <blockquote>
              <span className="quote-line">
                “{home.quote.opening}
                <em>{home.quote.firstEmphasis}</em>.
              </span>{" "}
              <span className="quote-line">
                {home.quote.closing}
                <em>{home.quote.secondEmphasis}</em>”
              </span>
            </blockquote>
          </figure>
        )}
        <footer className="reference-footer">
          <span>
            © {new Date().getFullYear()} {home.name}
          </span>
          <span>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            &amp; Tailwind
          </span>
        </footer>
      </main>
    </>
  );
}
