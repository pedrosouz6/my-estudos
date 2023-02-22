import { createContext, ReactNode, useState } from 'react';

interface ContextLoadingProps {
    isLoading: boolean,
    ToggleLoading: (loading: boolean) => void
}

interface ProviderLoadingProps {
    children: ReactNode
}

export const ContextLoading = createContext({} as ContextLoadingProps);

export function ProviderLoading({ children }: ProviderLoadingProps) {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    function ToggleLoading(loading: boolean) {
        setIsLoading(loading);
    }

    return (
        <ContextLoading.Provider value={{
            isLoading,
            ToggleLoading
        }}>

            { children }

        </ContextLoading.Provider>
    )
}