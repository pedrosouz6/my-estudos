import { Container } from "../Container";

import { ImBooks } from 'react-icons/im';

import { IoIosJournal } from 'react-icons/io';

import { ContainerBottomHeader, ContentBottomHeader, NavbarBottomHeader } from "./style";

export function BottomHeader() {
    return (
        <ContainerBottomHeader>
            <Container>
                <ContentBottomHeader>
                    <NavbarBottomHeader>
                        <ul>
                            <li><a href=""> <i><ImBooks /></i> Meus conteúdos</a></li>
                            <li><a href=""> <i><IoIosJournal /></i> Anotações</a></li>
                        </ul>
                    </NavbarBottomHeader>
                </ContentBottomHeader>
            </Container>
        </ContainerBottomHeader>
    )
}