import type { ReactNode } from "react";
import { Reveal } from "./reveal";
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className="reference-section"
        aria-labelledby={`${id}-heading`}
      >
        <h2 id={`${id}-heading`}>{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}
