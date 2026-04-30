import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  const header = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`reveal text-center mb-14 max-w-2xl mx-auto ${header.visible ? "is-visible" : ""}`}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-semibold">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div
          ref={body.ref}
          className={`reveal ${body.visible ? "is-visible" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
