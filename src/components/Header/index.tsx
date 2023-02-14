import { useNavigate } from 'react-router-dom';

import { BottomHeader } from "../BottomHeader";
import { ThemesMode } from "../ThemesMode";
import { Container } from "../Container";
import { Logo } from "../Logo";

import { auth } from '../../service/firebase';

import { 
    ContainerHeader, 
    ContentHeader,
    ContentRightHeader
} from "./style";

export function Header() {

    const navigate = useNavigate();

    function signOut() {
        auth.signOut();
        navigate('/login');
    }

    return (
        <>
            <ContainerHeader>
                <Container>
                    <ContentHeader>
                        <Logo />

                        <ContentRightHeader>
                            <ThemesMode />
                            <p>Seja bem-vindo, Pedro Souza</p>

                            <button onClick={() => signOut()}>sair</button>
                        </ContentRightHeader>
                    </ContentHeader>
                </Container>
            </ContainerHeader>
            <BottomHeader />
        </>
    )
}