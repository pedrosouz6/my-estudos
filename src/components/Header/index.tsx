import { BottomHeader } from "../BottomHeader";
import { ThemesMode } from "../ThemesMode";
import { Container } from "../Container";

import { 
    ContainerHeader, 
    ContentHeader,
    ContentRightHeader
} from "./style";

export function Header() {
    return (
        <>
            <ContainerHeader>
                <Container>
                    <ContentHeader>
                        <h1>My<span>Estudos</span></h1>

                        <ContentRightHeader>
                            <ThemesMode />
                            <p>Seja bem-vindo, Pedro Souza</p>
                        </ContentRightHeader>
                    </ContentHeader>
                </Container>
            </ContainerHeader>
            <BottomHeader />
        </>
    )
}