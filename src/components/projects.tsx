import Link from "next/link";
import type { Project } from "@/content/projects";
import { caseStudyProjects as projects } from "@/content/projects";
import { Badge, Container, SectionHeading, TextLink } from "./foundation";

export function ProjectIllustration({ project }: { project: Project }) {
  return (
    <div
      className={`project-illustration illustration-${project.slug}`}
      aria-label={
        project.slug === "retinagrade"
          ? "RetinaGrade typographic illustration: private images, account-scoped records, model not connected."
          : "Portfolio typographic illustration: typed content, shared components and native navigation."
      }
      role="img"
    >
      <span className="eyebrow">
        {project.slug === "retinagrade"
          ? "Records before predictions"
          : "Content before decoration"}
      </span>
      <div className="illustration-type" aria-hidden="true">
        {project.slug === "retinagrade" ? (
          <>
            Retina<span>Grade.</span>
          </>
        ) : (
          <>
            Built on<span>evidence.</span>
          </>
        )}
      </div>
      <span className="illustration-caption">
        {project.slug === "retinagrade"
          ? "Private images / Account-scoped records / Model not connected"
          : "Typed content / Shared components / Native navigation"}
      </span>
    </div>
  );
}

export function ProjectDetails({
  project,
  inline = false,
}: {
  project: Project;
  inline?: boolean;
}) {
  const Heading = inline ? "h4" : "h2";
  return (
    <div className={inline ? "case-details inline-case" : "case-details"}>
      <section aria-labelledby={`${project.slug}-problem`}>
        <Heading id={`${project.slug}-problem`}>The problem</Heading>
        <p>{project.problem}</p>
      </section>
      <section aria-labelledby={`${project.slug}-contribution`}>
        <Heading id={`${project.slug}-contribution`}>My contribution</Heading>
        <p>{project.contribution}</p>
      </section>
      <section aria-labelledby={`${project.slug}-capabilities`}>
        <Heading id={`${project.slug}-capabilities`}>
          Implemented capabilities
        </Heading>
        <ul>
          {project.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {project.plannedCapabilities &&
        project.plannedCapabilities.length > 0 && (
          <section aria-labelledby={`${project.slug}-planned`}>
            <Heading id={`${project.slug}-planned`}>Planned ML work</Heading>
            <ul>
              {project.plannedCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              These are planned capabilities, not completed training, validated
              results or a connected inference service.
            </p>
          </section>
        )}
      <section aria-labelledby={`${project.slug}-decisions`}>
        <Heading id={`${project.slug}-decisions`}>
          Decisions & tradeoffs
        </Heading>
        <dl className="decision-list">
          {project.decisions.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby={`${project.slug}-validation`}>
        <Heading id={`${project.slug}-validation`}>Validation</Heading>
        <p>{project.validation}</p>
      </section>
      <section aria-labelledby={`${project.slug}-limitations`}>
        <Heading id={`${project.slug}-limitations`}>
          Status & limitations
        </Heading>
        <p className="case-status">{project.status}</p>
        <p>{project.limitations}</p>
      </section>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          number="Work"
          title="Engineering, in practice."
          id="projects-title"
          description="Two personal projects: what I built, why I built it that way, and where the work stands."
        />
        {projects.map((project, index) => (
          <article
            className="featured-project"
            id={`project-${project.slug}`}
            aria-labelledby={`${project.slug}-title`}
            key={project.slug}
          >
            <div className="project-preview">
              <span className="eyebrow project-index">
                {String(index + 1).padStart(2, "0")} / {project.kind}
              </span>
              <ProjectIllustration project={project} />
            </div>
            <div className="project-overview">
              <p className="eyebrow accent">{project.status}</p>
              <h3 id={`${project.slug}-title`}>{project.title}</h3>
              <p className="project-purpose">{project.purpose}</p>
              <div className="badge-list">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="project-links">
                {project.caseStudy && (
                  <Link className="button-link" href={project.caseStudy}>
                    Read RetinaGrade case study{" "}
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
                {project.links.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label} <span aria-hidden="true">↗</span>
                  </TextLink>
                ))}
              </div>
            </div>
            {!project.caseStudy && <ProjectDetails project={project} inline />}
          </article>
        ))}
      </Container>
    </section>
  );
}

export function RetinaArchitecture() {
  return (
    <figure className="architecture">
      <figcaption>Implemented data flow</figcaption>
      <div className="architecture-flow" aria-hidden="true">
        <div>
          Browser<span>Account workspace</span>
        </div>
        <span>↓</span>
        <div>
          Next.js routes & services<span>Session + ownership checks</span>
        </div>
        <span>↓</span>
        <div className="architecture-stores">
          <div>
            Prisma / SQLite<span>Users, images, records</span>
          </div>
          <div>
            Private filesystem<span>Image bytes</span>
          </div>
        </div>
      </div>
      <p>
        The browser calls Next.js routes. Server services check the session and
        record ownership, then use Prisma with SQLite for metadata and a private
        storage adapter for image bytes. Model inference is not connected to
        this flow.
      </p>
    </figure>
  );
}
