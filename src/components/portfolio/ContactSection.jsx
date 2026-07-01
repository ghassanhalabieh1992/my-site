import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, EMAIL, COMPANY_NAME } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080808]">
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
            03 / DIRECT_LINK
          </p>
          <h2 className="font-heading font-bold text-[#F2F2F2] text-3xl md:text-5xl tracking-tight">
            Let's Build Something
          </h2>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#D1FF00]/60 mt-3">
            {COMPANY_NAME.toUpperCase()}
          </p>
        </motion.div>

        {/* Terminal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border border-[#404040]/30 bg-[#0A0A0A] p-8 md:p-12 max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="font-mono text-[10px] text-[#404040] ml-2 tracking-wider">TERMINAL</span>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-[#404040]">
              <span className="text-[#D1FF00]">$</span> echo "Got a project in mind?"
            </p>
            <p className="font-mono text-sm text-[#F2F2F2]/70">
              Got a project in mind?
            </p>
            <p className="font-mono text-sm text-[#404040]">
              <span className="text-[#D1FF00]">$</span> echo "Let's discuss your vision over WhatsApp."
            </p>
            <p className="font-mono text-sm text-[#F2F2F2]/70">
              Let's discuss your vision over WhatsApp.
            </p>
            <div className="pt-4 flex items-center gap-3">
              <span className="font-mono text-sm text-[#D1FF00]">$</span>
              <span className="font-mono text-sm text-[#F2F2F2]/70">START_CONVERSATION?</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D1FF00] text-[#080808] font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#D1FF00]/90 transition-all duration-300 ml-2"
              >
                <MessageCircle size={14} />
                YES
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl"
        >
          <div className="border border-[#404040]/15 p-5 group hover:border-[#D1FF00]/20 transition-colors">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-2">WHATSAPP</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#F2F2F2]/70 group-hover:text-[#D1FF00] transition-colors"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>
          <div className="border border-[#404040]/15 p-5 group hover:border-[#D1FF00]/20 transition-colors">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-2">EMAIL</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-sm text-[#F2F2F2]/70 group-hover:text-[#D1FF00] transition-colors"
            >
              {EMAIL}
            </a>
          </div>
          <div className="border border-[#404040]/15 p-5 group hover:border-[#D1FF00]/20 transition-colors">
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040] mb-2">STATUS</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D1FF00] animate-pulse" />
              <span className="font-mono text-sm text-[#D1FF00]">Available for Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
