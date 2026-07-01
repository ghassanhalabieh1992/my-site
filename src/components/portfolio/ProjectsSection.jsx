import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#D1FF00] mb-4 uppercase">
            {t.projects.label}
          </p>
          <h2 className="font-heading font-bold text-[#F2F2F2] text-3xl md:text-5xl tracking-tight">
            {t.projects.title}
          </h2>
          <p className="font-body text-[#F2F2F2]/40 text-base mt-4 max-w-lg leading-relaxed">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} lang={lang} />
          ))}
        </div>

        <div className="mt-16">
          <div className="h-px bg-gradient-to-r from-[#404040]/50 via-[#404040]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
