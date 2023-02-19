import { useState, createContext, ReactNode } from 'react';

interface ProviderMessageModalProps {
    children: ReactNode
}

interface ContextMessageModalProps {
    messageModal: string,
    ToggleMessageModal: (message: string) => void,
    isErrorMessage: boolean | null,
    ToggleErrorMessage: (error: boolean | null) => void,
    isRenderErrorMessage: boolean | null,
    ToggleRenderErrorMessage: (render: boolean | null) => void
}

export const ContextMessageModal = createContext({} as ContextMessageModalProps);

export function ProviderMessageModal({ children }: ProviderMessageModalProps) {

    const [ messageModal, setMessageModal ] = useState<string>('');
    const [ isErrorMessage, setIsErrorMessage ] = useState<boolean | null>(null);
    const [ isRenderErrorMessage, setIsRenderErrorMessage ] = useState<boolean | null>(null);
    
    function ToggleMessageModal(message: string) {
        setMessageModal(message);
    }

    function ToggleErrorMessage(error: boolean | null) {
        setIsErrorMessage(error);
    }

    function ToggleRenderErrorMessage(render: boolean | null) {
        setIsRenderErrorMessage(render);
    }

    return (
        <ContextMessageModal.Provider value={{
            messageModal,
            ToggleMessageModal,
            isErrorMessage,
            ToggleErrorMessage,
            isRenderErrorMessage,
            ToggleRenderErrorMessage
        }}>

            { children }

        </ContextMessageModal.Provider>
    )
}
