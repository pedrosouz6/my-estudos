import { BottomHeader } from "../BottomHeader";
import { Container } from "../Container";

import { 
    ContainerHeader, 
    TopHeader 
} from "./style";

export function Header() {
    return (
        <>
            <ContainerHeader>
                <Container>
                    Pedro
                </Container>
            </ContainerHeader>
            <BottomHeader />
        </>
    )
}