import { Section } from "./Section";
import { Globe2, Palette, Zap, Settings2 } from "lucide-react";

const services = [
  { icon: Globe2, title: "Web Development", desc: "Responsive, performant websites built with modern tech stacks." },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, user-friendly interfaces that prioritize clarity and flow." },
  { icon: Zap, title: "Dynamic Web Apps", desc: "Interactive applications with real-time, engaging features." },
  { icon: Settings2, title: "Project Support", desc: "Development support, code review, and performance optimization." },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>How I can <span className="gradient-text">help you</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="glass rounded-2xl p-7 card-shadow hover:-translate-y-1 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
