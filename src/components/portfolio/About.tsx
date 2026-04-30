import { Section } from "./Section";
import { Brain, Target, Rocket, Code2 } from "lucide-react";

const traits = [
  { icon: Brain, title: "Dedicated Learner", desc: "Continuously expanding knowledge across modern stacks." },
  { icon: Target, title: "Project-Oriented", desc: "Driven by shipping real, useful applications." },
  { icon: Code2, title: "Problem Solver", desc: "Strong DSA foundation for efficient solutions." },
  { icon: Rocket, title: "Growth Mindset", desc: "Sharing my journey and improving every day." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Designing solutions, <span className="gradient-text">not just code</span></>}>
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 glass rounded-3xl p-8 card-shadow">
          <p className="text-foreground/90 leading-relaxed mb-4">
            I'm a passionate software developer in the making, with a deep interest in{" "}
            <span className="text-primary font-semibold">Java, Data Structures & Algorithms</span>,
            and modern <span className="text-primary font-semibold">Web Development</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I love turning ideas into impactful real-world applications — from automating workflows
            to crafting clean, responsive interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey is one of consistent learning, building, and sharing — and I'm just getting started.
          </p>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {traits.map((t) => (
            <div
              key={t.title}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform card-shadow"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <t.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1.5">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
