import { Container } from "../Container";

import { GiBookshelf } from 'react-icons/gi';
import { IoIosJournal } from 'react-icons/io';

import { ContainerBottomHeader, ContentBottomHeader, NavbarBottomHeader } from "./style";
import { NavLink } from "react-router-dom";

export function BottomHeader() {
    return (
        <ContainerBottomHeader>
            <Container>
                <ContentBottomHeader>
                    <NavbarBottomHeader>
                        <ul>
                            <li>
                                <NavLink to='/material' 
                                    style={({ isActive }) => ({ 
                                        color: isActive ? '#007cf8' : '',
                                        fontWeight: isActive ? '500' : ''
                                    })}
                                > 
                                    <i><GiBookshelf /></i> Meus conteúdos
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/notes' 
                                    style={({ isActive }) => ({ 
                                        color: isActive ? '#007cf8' : '',
                                        fontWeight: isActive ? '500' : ''
                                    })}
                                > 
                                    <i><IoIosJournal /></i> Anotações
                                </NavLink>
                            </li>
                        </ul>
                    </NavbarBottomHeader>
                </ContentBottomHeader>
            </Container>
        </ContainerBottomHeader>
    )
}