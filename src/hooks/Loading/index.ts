import { useContext } from 'react';
import { ContextLoading } from '../../context/Loading';

export function useLoading() {
    return useContext(ContextLoading);
}