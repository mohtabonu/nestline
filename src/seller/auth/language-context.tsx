import React, { createContext, useContext, useState } from "react";
import { languages } from "../db";

type Language = "RUS" | "UZB";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof languages["RUS"]; 
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("RUS");

  const value: LanguageContextProps = {
    language,
    setLanguage,
    translations: languages[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Кастомный хук
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
