import { createContext, useEffect, useState } from "react";

interface propType {
    children: any
}

type AppContextType = {}

export const ThemeModeContext = createContext<AppContextType | any>(null);

export const ThemeModeProvider = (props: propType) => {
    const [theme, setTheme] = useState<string>("white");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return <ThemeModeContext.Provider value={[theme, setTheme]}>
        {props.children}
    </ThemeModeContext.Provider>
}

