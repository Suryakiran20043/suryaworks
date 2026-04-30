import { Section } from "./Section";

const projects = [
  {
    title: "E-commerce Website",
    desc: "Full-stack store with authentication, cart, product management, and order tracking.",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Restaurant Management System",
    desc: "Manages orders, billing, and inventory to improve operational efficiency for restaurants.",
    tech: ["Java", "MySQL", "Swing"],
  },
  {
    title: "Automated Stock Market Analysis",
    desc: "Analyzes market trends and provides data-driven insights for smarter investment decisions.",
    tech: ["Python", "APIs", "Data Viz"],
  },
  {
    title: "Telemedicine Platform — SIH",
    desc: "Improves healthcare access for rural communities through remote consultations and records.",
    tech: ["React", "Node.js", "WebRTC"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="gradient-text">built</span></>}
      subtitle="A selection of projects where I applied my skills to solve real problems."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group glass rounded-2xl p-7 card-shadow hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 gradient-bg rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-secondary/60 text-foreground/80 rounded-full px-3 py-1 border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
