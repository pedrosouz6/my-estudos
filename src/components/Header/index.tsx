import { BottomHeader } from "../BottomHeader";
import { Container } from "../Container";

import { 
    ContainerHeader, 
    ContentHeader
} from "./style";

export function Header() {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <ContentHeader>
                        <h1>My<span>Estudos</span></h1>
                        <p>Seja bem-vindo, Pedro Souza</p>
                    </ContentHeader>
                </Container>
            </ContainerHeader>
            <BottomHeader />
        </>
    )
}