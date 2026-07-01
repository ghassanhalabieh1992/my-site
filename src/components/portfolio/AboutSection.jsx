import React from "react";
import { motion } from "framer-motion";
import { skills, experience } from "@/data/portfolio";

export default function AboutSection({ portraitImage }) {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#D1FF00] mb-4 uppercase">
            02 / INTELLIGENCE_PROFILE
          </p>
          <h2 className="font-heading font-bold text-[#F2F2F2] text-3xl md:text-5xl tracking-tight">
            The Engineer
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Portrait - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative sticky top-24">
              <div className="relative overflow-hidden border border-[#404040]/20">
                <img
                  src={portraitImage}
                  alt="Software and AI engineer portrait"
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40" />
              </div>
              {/* Status badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#080808]/80 backdrop-blur-sm border border-[#404040]/30 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#D1FF00] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#D1FF00]">AVAILABLE_FOR_HIRE</span>
              </div>
            </div>
          </motion.div>

          {/* System log - right side */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-4">{"SYS_LOG > BIOGRAPHY"}</p>
              <p className="font-body text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed">
                I am a Software & AI Engineer specializing in building high-performance web applications
                and intelligent systems. My work lives at the intersection of clean code architecture and
                cutting-edge artificial intelligence — creating digital experiences that are not just
                functional, but genuinely intelligent.
              </p>
              <p className="font-body text-[#F2F2F2]/70 text-base md:text-lg leading-relaxed mt-4">
                From full-stack web development to machine learning pipelines, I bring a systematic
                approach to solving complex problems. Every project is engineered for performance,
                scalability, and exceptional user experience.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-6">{"SYS_LOG > TECH_STACK"}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((group) => (
                  <div key={group.category} className="border border-[#404040]/15 p-5">
                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#D1FF00] mb-3">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[11px] text-[#F2F2F2]/50 hover:text-[#D1FF00] transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-6">{"SYS_LOG > EXPERIENCE"}</p>
              <div className="space-y-0">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6 py-4 border-b border-[#404040]/15 group hover:border-[#D1FF00]/20 transition-colors"
                  >
                    <span className="font-mono text-[11px] tracking-[0.1em] text-[#404040] group-hover:text-[#D1FF00] transition-colors whitespace-nowrap w-24 flex-shrink-0">
                      {exp.year}
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-[#F2F2F2] text-sm">{exp.role}</p>
                      <p className="font-mono text-[11px] text-[#F2F2F2]/30 mt-1">{exp.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
