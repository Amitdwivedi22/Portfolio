import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Container, TextLink } from "@/components/foundation";
import {
  ProjectDetails,
  ProjectIllustration,
  RetinaArchitecture,
} from "@/components/projects";
import { retinaGrade as project } from "@/content/projects";
import { profile } from "@/content/portfolio";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    title: "RetinaGrade case study | Amit Kumar Dwivedi",
    description:
      "Private image storage, account-scoped records and engineering tradeoffs in a research prototype. Model inference is not connected.",
  },
  twitter: {
    card: "summary",
    title: "RetinaGrade case study | Amit Kumar Dwivedi",
    description:
      "Private image storage, account-scoped records and engineering tradeoffs in a research prototype. Model inference is not connected.",
  },
  title: "RetinaGrade case study | Amit Kumar Dwivedi",
  description:
    "A source-reviewed look at RetinaGrade: private image storage, account-scoped records, engineering tradeoffs and the limits of an unconnected inference prototype.",
};

export default function RetinaGradeCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">
        Skip to case study
      </a>
      <header className="site-header">
        <Container className="case-header">
          <Link
            href="/"
            className="wordmark"
            aria-label={`${profile.name}, home`}
          >
            AD<span aria-hidden="true">.</span>
          </Link>
          <Link className="text-link" href="/#projects">
            ← Back to projects
          </Link>
        </Container>
      </header>
      <main id="case-main" tabIndex={-1}>
        <section className="case-hero">
          <Container>
            <p className="eyebrow accent">{project.kind}</p>
            <h1>
              {project.title}
              <span className="accent">.</span>
            </h1>
            <p className="case-intro">{project.purpose}</p>
            <div className="case-meta">
              <span className="case-status">{project.status}</span>
              <span>Application implementation · Amit Kumar Dwivedi</span>
            </div>
            <div className="badge-list">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <nav aria-label="Case study sections" className="case-navigation">
              <TextLink href="#retinagrade-problem">
                Problem & contribution
              </TextLink>
              <TextLink href="#retinagrade-capabilities">Capabilities</TextLink>
              <TextLink href="#architecture">Architecture</TextLink>
              <TextLink href="#retinagrade-planned">Planned ML work</TextLink>
              <TextLink href="#retinagrade-decisions">Tradeoffs</TextLink>
              <TextLink href="#retinagrade-validation">Validation</TextLink>
              <TextLink href="#retinagrade-limitations">Limitations</TextLink>
            </nav>
            <ProjectIllustration project={project} />
          </Container>
        </section>
        <Container className="case-content">
          <ProjectDetails project={project} />
          <section id="architecture" aria-labelledby="architecture-title">
            <h2 id="architecture-title">Architecture</h2>
            <RetinaArchitecture />
          </section>
        </Container>
      </main>
      <footer className="site-footer">
        <Container className="footer-inner">
          <span className="footer-name">{profile.name}</span>
          <Link className="text-link" href="/#projects">
            ← All projects
          </Link>
          <Link className="text-link" href="/#contact">
            Contact
          </Link>
        </Container>
      </footer>
    </>
  );
}
