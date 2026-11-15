import { openSource } from "@/content/open-source";
import { Activity } from "./activity";
import { Section } from "./section";

export function OpenSource() {
  return (
    <Section id="contributions" title="Open Source">
      <div className="contribution-groups">
        {openSource.map((group) => (
          <article
            className="contribution-group"
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
          >
            <header className="contribution-group-heading">
              <h3 id={`${group.id}-heading`}>
                {group.organization}
                <span> / {group.repository}</span>
              </h3>
              <p className="contributor-status">{group.status}</p>
            </header>
            <div className="contribution-entries">
              {group.entries.map((entry) => (
                <section
                  key={entry.id}
                  className="contribution-entry"
                  aria-labelledby={`${entry.id}-title`}
                >
                  <div className="contribution-entry-heading">
                    <h4 id={`${entry.id}-title`}>{entry.title}</h4>
                    <span className="project-status">{entry.status}</span>
                  </div>
                  <p className="contribution-summary">{entry.summary}</p>
                  <ul
                    className="technology-tags"
                    aria-label={`${entry.title} technologies`}
                  >
                    {entry.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="contribution-evidence">
                    <a
                      href={entry.evidence.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${group.organization} / ${group.repository}: ${entry.evidence.label}`}
                    >
                      {entry.evidence.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                    <span className="evidence-date">
                      Verified{" "}
                      <time dateTime={entry.verifiedOn}>
                        {entry.verifiedOn}
                      </time>
                    </span>
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
      <section
        className="activity-support"
        aria-labelledby="github-activity-heading"
      >
        <h3 id="github-activity-heading">GitHub Activity</h3>
        <Activity />
      </section>
    </Section>
  );
}
