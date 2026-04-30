import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Hands-on <span className="gradient-text">experience</span></>}>
      <div className="max-w-3xl mx-auto glass rounded-3xl p-8 card-shadow">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0 glow-shadow">
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="text-xl font-semibold">Personal & Academic Projects</h3>
              <span className="text-xs text-primary glass rounded-full px-3 py-1">2026 – Present</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building practical applications and refining my craft through hands-on work
              across full-stack development, algorithms, and product thinking.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li className="flex gap-2"><span className="text-primary">▹</span> Building responsive, accessible web applications</li>
              <li className="flex gap-2"><span className="text-primary">▹</span> Solving DSA problems for efficient solutions</li>
              <li className="flex gap-2"><span className="text-primary">▹</span> Implementing real-world features end-to-end</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
