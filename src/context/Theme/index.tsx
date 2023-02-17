import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

export interface ThemeType {
    title: string,
    colors: {
        primary: string,

        background: string,
        color: string,

        borderColor: string,

        header: string,
        bottomHeader: string,

        success: string,
        info: string,
        warning: string
    }
}

interface ContextThemeProps {
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
            ToggleTheme
        }}> 
            <ThemeProvider theme={theme}>
                { children }    
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}