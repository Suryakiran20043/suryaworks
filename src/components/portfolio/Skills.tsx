import { Section } from "./Section";
import { Code, Layers, Globe, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Programming",
    skills: [{ name: "Java", level: 85 }],
  },
  {
    icon: Layers,
    title: "Core Concepts",
    skills: [{ name: "Data Structures & Algorithms", level: 80 }],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Other Skills",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Responsive Design", level: 88 },
      { name: "UI/UX Basics", level: 70 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>What I work <span className="gradient-text">with</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-7 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center">
                <g.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full gradient-bg rounded-full transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
