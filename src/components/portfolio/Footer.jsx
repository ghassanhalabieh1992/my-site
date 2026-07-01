import React from "react";
import { COMPANY_NAME, EMAIL } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#404040]/15 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#404040]">
          © {new Date().getFullYear()} — {COMPANY_NAME.toUpperCase()}
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-[10px] tracking-[0.2em] text-[#404040] hover:text-[#D1FF00] transition-colors"
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}