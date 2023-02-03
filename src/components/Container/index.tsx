import { ReactNode } from "react";
import { ContainerAll } from "./style";

interface ContainerProps {
    children: ReactNode
} 

export function Container({ children }: ContainerProps) {
    return (
        <ContainerAll>
            { children }
        </ContainerAll>
    )
}