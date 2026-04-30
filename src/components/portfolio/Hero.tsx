import profile from "@/assets/profile.jpg";
import { ArrowRight, Download, Sparkles, Github, Linkedin, Mail } from "lucide-react";

const techStack = [
  "Java", "DSA", "React", "TypeScript", "Node.js", "Tailwind", "Git", "SQL", "HTML5", "CSS3",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-[120px] animate-float" />
        <div
          className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-accent/25 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-primary/15 blur-[120px] animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            color: "oklch(0.7 0.18 250)",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center w-full">
        {/* LEFT */}
        <div className="animate-fade-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 glass rounded-full pl-1.5 pr-4 py-1.5 mb-6 text-xs">
            <span className="flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-2.5 py-1 font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Open to work
            </span>
            <span className="text-muted-foreground">Web Developer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] mb-6 tracking-tight">
            Hey, I'm <br className="sm:hidden" />
            <span className="gradient-text">Surya Kiran</span>
            <span className="inline-block ml-2 animate-float">
              <Sparkles className="inline w-8 h-8 md:w-10 md:h-10 text-primary" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            I enjoy turning ideas into{" "}
            <span className="text-foreground font-medium">clean and responsive web experiences</span>{" "}
            that people love to use. Most of my time goes into experimenting with modern tools, polishing small details, and learning something new every day. I'm especially excited about building{" "}
            <span className="text-foreground font-medium">intuitive UIs</span>{" "}
            that feel simple, fast, and a little bit fun.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-95 transition glow-shadow"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass text-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/60 transition"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-3 py-3 transition border-b border-transparent hover:border-foreground/40"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-3 mb-10">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-2" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 max-w-md">
            {[
              { v: "8.0", l: "B.Tech GPA" },
              { v: "4+", l: "Projects" },
              { v: "10+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Profile */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up order-1 lg:order-2">
          <div className="relative">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-6 rounded-full opacity-70">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, oklch(0.7 0.18 250), oklch(0.65 0.2 285), transparent 60%)",
                  animation: "spin 12s linear infinite",
                  filter: "blur(2px)",
                }}
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-40 animate-float" />

            {/* Frame */}
            <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full p-[3px] gradient-bg glow-shadow">
              <div className="w-full h-full rounded-full overflow-hidden bg-card relative">
                <img
                  src={profile}
                  alt="Gajawada Surya Kiran"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating chips */}
            <div
              className="absolute top-1/2 -left-10 hidden md:flex glass rounded-xl px-3 py-2 card-shadow items-center gap-2 animate-float"
              style={{ animationDelay: "3.5s" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee tech strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-background/40 backdrop-blur-md py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...techStack, ...techStack].map((t, i) => (
            <span
              key={i}
              className="text-sm font-medium text-muted-foreground/70 hover:text-primary transition flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
