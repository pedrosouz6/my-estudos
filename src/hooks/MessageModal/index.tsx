import { useContext } from 'react';
import { ContextMessageModal } from '../../context/MessageModal';

export function useMessageModal() {
    return useContext(ContextMessageModal);
}