import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "B.Tech",
    school: "Sree Chaitanya College of Engineering (JNTUH)",
    period: "2025 – Present",
    gpa: "8.0",
  },
  {
    degree: "Intermediate",
    school: "Sai Sri Junior College",
    period: "2023",
    gpa: "8.2",
  },
  {
    degree: "SSC",
    school: "Siddhartha E/M High School",
    period: "2021",
    gpa: "9.8",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>My academic <span className="gradient-text">journey</span></>}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.degree} className="relative pl-16">
              <div className="absolute left-0 top-2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center glow-shadow">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl p-6 card-shadow hover:translate-x-1 transition-transform">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{it.degree}</h3>
                  <span className="text-xs text-primary glass rounded-full px-3 py-1">
                    GPA {it.gpa}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm mb-1">{it.school}</p>
                <p className="text-xs text-muted-foreground">{it.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
