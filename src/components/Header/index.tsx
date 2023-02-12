import { BottomHeader } from "../BottomHeader";
import { ThemesMode } from "../ThemesMode";
import { Container } from "../Container";
import { Logo } from "../Logo";

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
                        <Logo />

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