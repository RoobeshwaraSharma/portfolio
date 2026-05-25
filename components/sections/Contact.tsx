"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className=" mx-auto px-8">
      <SectionHeader
        label="// contact"
        title="Get in touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <FadeIn>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m open to discussing new opportunities, collaborations, or
              just chatting about technology. The best way to reach me is by
              email or through LinkedIn.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: <IconMail size={16} />,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: <IconBrandLinkedin size={16} />,
                  label: "LinkedIn",
                  value: "roobeshwarasharma",
                  href: personalInfo.linkedin,
                },
                {
                  icon: <IconBrandGithub size={16} />,
                  label: "GitHub",
                  value: "RoobeshwaraSharma",
                  href: personalInfo.github,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-[#7c6fcd]/30 hover:bg-muted/50 transition-all duration-200 group"
                >
                  <span className="text-[#7c6fcd] group-hover:text-[#a89de8] transition-colors">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.15} direction="right">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-muted-foreground font-mono mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7c6fcd]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-mono mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7c6fcd]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground font-mono mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#7c6fcd]/60 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#7c6fcd] hover:bg-[#6b5ec0] text-white border-0 py-3 h-auto text-sm rounded-xl font-medium"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <IconSend size={15} />
                  )}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-[#0d1f14] border border-[#1a3a24] text-[#4ade80] text-sm"
                    >
                      <IconCheck size={15} />
                      Message sent! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg dark:bg-[#1f0d0d] bg-[#fee2e2] border dark:border-[#3a1a1a] border-[#fca5a5] dark:text-[#f87171] text-[#dc2626] text-sm"
                    >
                      <IconAlertCircle size={15} />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
