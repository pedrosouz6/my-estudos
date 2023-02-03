import { Container } from "../Container";

import { ContainerBottomHeader, ContentBottomHeader, NavbarBottomHeader } from "./style";

export function BottomHeader() {
    return (
        <ContainerBottomHeader>
            <Container>
                <ContentBottomHeader>
                    <NavbarBottomHeader>
                        <ul>
                            <li><a href="">Meus conteúdos</a></li>
                            <li><a href="">Anotações</a></li>
                        </ul>
                    </NavbarBottomHeader>
                </ContentBottomHeader>
            </Container>
        </ContainerBottomHeader>
    )
}