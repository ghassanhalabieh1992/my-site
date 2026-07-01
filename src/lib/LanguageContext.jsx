import React, { createContext, useContext, useState } from 'react';
import { translations } from '@/i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nexora_lang') || 'pt-BR';
  });

  const toggleLang = () => {
    const next = lang === 'pt-BR' ? 'en' : 'pt-BR';
    setLang(next);
    localStorage.setItem('nexora_lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
