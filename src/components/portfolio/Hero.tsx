import profile from "@/assets/profile.jpg";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hello, I'm <br />
            <span className="gradient-text">Gajawada</span>
            <br />
            Surya Kiran
          </h1>
          <p className="text-lg text-muted-foreground mb-3 font-medium">
            Aspiring Software Developer · Java · DSA · Web Development
          </p>
          <p className="text-base text-muted-foreground/80 mb-8 max-w-xl leading-relaxed">
            A passionate B.Tech student focused on building real-world applications and sharpening
            problem-solving skills through clean code and thoughtful design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition glow-shadow"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass text-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/60 transition"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-4 py-3 transition"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-40 animate-float" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 gradient-bg glow-shadow">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src={profile}
                  alt="Gajawada Surya Kiran"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 card-shadow">
              <div className="text-2xl font-bold gradient-text">8.0</div>
              <div className="text-xs text-muted-foreground">B.Tech GPA</div>
            </div>
            <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 card-shadow">
              <div className="text-2xl font-bold gradient-text">4+</div>
              <div className="text-xs text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
