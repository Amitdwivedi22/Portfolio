import type { ComponentProps, ReactNode } from "react";
import type { EvidenceItem } from "@/content/portfolio";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function SectionHeading({
  number,
  title,
  description,
  id,
}: {
  number: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{number} /</span>
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}
export function ButtonLink({ className = "", ...props }: ComponentProps<"a">) {
  return <a className={`button-link ${className}`} {...props} />;
}
export function TextLink({ className = "", ...props }: ComponentProps<"a">) {
  return <a className={`text-link ${className}`} {...props} />;
}
export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}
export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`surface ${className}`}>{children}</div>;
}
export function EvidenceSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: EvidenceItem[];
}) {
  if (!items.length) return null;
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Container>
        <SectionHeading number="Work" title={title} id={`${id}-title`} />
        {items.map((item, index) => (
          <article className="project-row" key={item.title}>
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="eyebrow accent">{item.kind}</p>
              <h3>{item.title}</h3>
              <p className="project-summary">{item.summary}</p>
              <p>{item.detail}</p>
              <div className="badge-list">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="project-links">
                {item.links.map((link) => (
                  <TextLink href={link.href} key={link.href}>
                    {link.label} <span aria-hidden="true">↗</span>
                  </TextLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
