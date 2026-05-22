"use client";
import { motion } from "motion/react";
import { personalInfo } from "@/data";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload, IconMapPin } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#7c6fcd 1px, transparent 1px), linear-gradient(90deg, #7c6fcd 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c6fcd]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#4ade80]/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status badge */}
          {personalInfo.openToWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1f14] border border-[#1a3a24] text-xs text-[#4ade80] mb-8 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              Open to opportunities
            </div>
          )}

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
            <span className="text-[#f0f0f0]">Roobeshwara</span>
            <br />
            <span className="gradient-text">Sharma</span>
          </h1>

          {/* Role */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#7c6fcd]" />
            <p className="text-[#a0a0a0] text-base md:text-lg font-light">
              Senior Software Engineer · Full-Stack · Azure Certified
            </p>
          </div>

          {/* Tagline */}
          <p className="text-[#666] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
            {personalInfo.tagline}
          </p>

          {/* Currently */}
          <p className="text-[#555] text-sm mb-10 font-mono">
            Currently exploring{" "}
            <span className="text-[#a89de8]">LLMs & RAG</span> at Avonet Technologies
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-[#555] text-sm mb-10">
            <IconMapPin size={14} />
            <span>{personalInfo.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#7c6fcd] hover:bg-[#6b5ec0] text-white text-sm rounded-lg transition-all duration-200 hover:translate-y-[-1px]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#141414] border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#a0a0a0] hover:text-white text-sm rounded-lg transition-all duration-200"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#555] hover:text-[#f0f0f0] transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#555] hover:text-[#f0f0f0] transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#555] hover:text-[#f0f0f0] transition-colors"
              aria-label="Email"
            >
              <IconMail size={20} />
            </a>
            <div className="w-px h-4 bg-[#2a2a2a]" />
            <span className="text-[#444] text-xs font-mono">{personalInfo.email}</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[#444] text-xs font-mono">scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#7c6fcd] to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
