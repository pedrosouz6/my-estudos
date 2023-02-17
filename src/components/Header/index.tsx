import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { BottomHeader } from "../BottomHeader";
import { ThemesMode } from "../ThemesMode";
import { Container } from "../Container";
import { Logo } from "../Logo";

import { TfiMenuAlt } from 'react-icons/tfi';
import { MdArrowDropUp } from 'react-icons/md';
 
import { auth } from '../../service/firebase';

import { 
    ContainerHeader, 
    ContentHeader,
    ContentRightHeader,
    ButtonMenuHeader,
    MenuDropDownHeader,
    IndicationIconHeader
} from "./style";

export function Header() {

    const navigate = useNavigate();

    const [ isRenderingMenuDropDown, setIsRenderingMenuDropDown ] = useState(false);

    function SignOut() {
        auth.signOut();
        navigate('/login');
    }

    function OpenMenuDropDown() {
        setIsRenderingMenuDropDown(!isRenderingMenuDropDown);
    }

    return (
        <>
            <ContainerHeader>
                <Container>
                    <ContentHeader>
                        <Logo />
                        <ContentRightHeader>
                            
                            <p>Seja bem-vindo, { auth.currentUser?.email }</p>

                            <ButtonMenuHeader onClick={() => OpenMenuDropDown()}>
                                <TfiMenuAlt />
                            </ButtonMenuHeader>

                            { isRenderingMenuDropDown && 
                                <MenuDropDownHeader>
                                    <li>
                                        <span>{ auth.currentUser?.email }</span>
                                    </li>

                                    <li><button>Meu perfil</button></li>
                            
                                    <li><ThemesMode /> </li>

                                    <li><button onClick={() => SignOut()}>Sair da conta</button></li>

                                    <IndicationIconHeader>
                                        <MdArrowDropUp />
                                    </IndicationIconHeader>
                                </MenuDropDownHeader>
                            }
                        </ContentRightHeader>
                    </ContentHeader>
                </Container>
            </ContainerHeader>
            <BottomHeader />
        </>
    )
}