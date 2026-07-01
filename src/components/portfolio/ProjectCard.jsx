import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const { t, lang } = useLanguage();

  const description = lang === 'pt-BR' && project.descriptionPt
    ? project.descriptionPt
    : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full group relative"
    >
      <div className="relative overflow-hidden bg-[#0D0D0D] border border-[#404040]/20 hover:border-[#D1FF00]/30 transition-all duration-500">
        {/* Image container */}
        <div className="relative h-[280px] md:h-[320px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: "linear-gradient(to top, #080808 0%, transparent 60%)",
              opacity: hovered ? 0.95 : 0.7,
            }}
          />

          {/* Tech stack reveal */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[#D1FF00]/40 text-[#D1FF00] bg-[#080808]/60 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-2">
                {String(index + 1).padStart(2, "0")} / {t.projects.cardLabel}
              </p>
              <h3 className="font-heading font-bold text-[#F2F2F2] text-lg md:text-xl tracking-tight">
                {project.title}
              </h3>
            </div>
            {project.url && project.url !== '#' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#404040]/40 text-[#404040] hover:border-[#D1FF00] hover:text-[#D1FF00] transition-all duration-300"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
          <p className="font-body text-sm text-[#F2F2F2]/40 mt-3 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
