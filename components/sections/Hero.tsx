"use client";
import { motion } from "motion/react";
import { personalInfo } from "@/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh" }}
      id="hero"
    >
      {/* Full-width background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#7c6fcd 1px, transparent 1px), linear-gradient(90deg, #7c6fcd 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7c6fcd]/5 blur-3xl pointer-events-none" />

      {/* Centered two-column layout */}
      <div
        className="relative z-10 mx-auto px-8 flex flex-col lg:flex-row"
        style={{ minHeight: "100dvh" }}
      >
        {/* ── Left column: text ── */}
        <motion.div
          className="flex-1 flex flex-col justify-center pt-28 pb-16 lg:pt-20 lg:pb-20 lg:pr-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight mb-4">
            <span className="text-foreground">Roobeshwara</span>
            <br />
            <span className="gradient-text">Sharma</span>
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#7c6fcd]" />
            <p className="text-muted-foreground text-sm md:text-base font-light">
              Senior Software Engineer · Full-Stack · Azure Certified
            </p>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
            {personalInfo.tagline}
          </p>

          <p className="text-muted-foreground/60 text-sm mb-3 font-mono">
            Currently exploring{" "}
            <span className="text-[#a89de8]">LLMs & RAG</span> at Avonet
            Technologies
          </p>

          <div className="flex items-center gap-1.5 text-muted-foreground/50 text-sm mb-8">
            <IconMapPin size={14} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c6fcd] hover:bg-[#6b5ec0] text-white text-sm rounded-lg font-medium transition-all duration-200 hover:-translate-y-px"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground text-sm rounded-lg font-medium transition-all duration-200"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <IconMail size={20} />
            </a>
            <div className="w-px h-4 bg-border" />
            <span className="text-muted-foreground/40 text-xs font-mono">
              {personalInfo.email}
            </span>
          </div>
        </motion.div>

        {/* ── Right column: profile card ── */}
        <motion.div
          className="lg:w-[42%] xl:w-[40%] flex flex-col items-center justify-center relative overflow-hidden border-border min-h-[50vh] lg:min-h-0 lg:border-l dark:bg-gradient-to-br dark:from-[#0e0c1a] dark:to-[#090f0c] bg-gradient-to-br from-[#f3f0ff] to-[#edfff5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Ambient glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#7c6fcd]/15 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#4ade80]/10 blur-3xl" />

          {/* Profile placeholder */}
          <div className="relative mb-5">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#7c6fcd]/30 via-[#a89de8]/20 to-[#4ade80]/20 blur-xl" />
            <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-2xl border border-[#7c6fcd]/30 dark:bg-gradient-to-br dark:from-[#1a1530] dark:to-[#0f1f18] bg-gradient-to-br from-[#ede9fb] to-[#e8f8ef] flex flex-col items-center justify-center gap-2">
              {/* Swap for <Image src="/profile.jpg" fill alt="Roobeshwara Sharma" /> when photo is ready */}
              <span className="text-6xl xl:text-7xl font-light text-[#7c6fcd] select-none">
                RS
              </span>
              <span className="text-[10px] font-mono text-[#7c6fcd]/40 tracking-widest uppercase">
                Photo coming soon
              </span>
            </div>
          </div>

          {/* Name card */}
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-foreground">
              Roobeshwara Sharma
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">
              Senior Software Engineer
            </p>
          </div>

          {/* Available badge */}
          <div className="px-3 py-1.5 rounded-full bg-card/80 border border-border text-xs font-mono text-[#4ade80] flex items-center gap-1.5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Available for opportunities
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-muted-foreground/30 text-xs font-mono">
              scroll
            </span>
            <motion.div
              className="w-px h-6 bg-gradient-to-b from-[#7c6fcd] to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
