import React, { createContext, useEffect, useState } from 'react';

const defaultLanguage = 'EN';

export interface LanguageContextType {
    language: string;
    changeLanguage: (newLanguage: string) => void;
}
export const LanguageContext = createContext<LanguageContextType>({
    language: '',
    changeLanguage: () => { },
});

export const LanguageProvider: React.FC = ({ children }: any) => {
    const [language, setLanguage] = useState<string>(defaultLanguage);

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    // Dil deyişdirme 
    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};