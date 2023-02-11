import { createContext, ReactNode, useState } from 'react';

import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

interface ThemeType {
    title: string,
    colors: {
        primary: string,
        
        background: string,
        color: string,

        header: string,
        bottomHeader: string,

        success: string,
        info: string,
        warning: string
    }
}

interface ContextThemeProps {
    theme: ThemeType,
    ToggleTheme: (theme: ThemeType) => void
}

interface ProviderThemeProps {
    children: ReactNode
}

export const ContextTheme = createContext({} as ContextThemeProps);

export function ProviderTheme({ children }: ProviderThemeProps) {

    const [ theme, setTheme ] = useState<ThemeType>(light); 

    function ToggleTheme(theme: ThemeType) {
        setTheme(theme);
    }

    return (
        <ContextTheme.Provider value={{
            theme,
            ToggleTheme
        }}> 

            { children }

        </ContextTheme.Provider>
    )
}