import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, Instagram, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setStatus(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setStatus("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="gradient-text">connect</span></>} subtitle="Open to opportunities, collaborations, and a good conversation.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 glass rounded-3xl p-8 card-shadow flex flex-col gap-5">
          <a href="mailto:gajawadasuryakiran2004@gmail.com" className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center"><Mail className="w-5 h-5 text-primary-foreground" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm group-hover:text-primary transition break-all">gajawadasuryakiran2004@gmail.com</div>
            </div>
          </a>
          <a href="tel:+918500120751" className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center"><Phone className="w-5 h-5 text-primary-foreground" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm group-hover:text-primary transition">+91 85001 20751</div>
            </div>
          </a>
          <div className="border-t border-border pt-5">
            <div className="text-xs text-muted-foreground mb-3">Find me on</div>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/Suryakiran20043" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/suryakirangajawada" },
                { Icon: Instagram, href: "https://www.instagram.com/surya_kiran_gajawada" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:gradient-bg hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-8 card-shadow space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
          />
          {status && <p className="text-sm text-primary">{status}</p>}
          <button
            type="submit"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition glow-shadow"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}
