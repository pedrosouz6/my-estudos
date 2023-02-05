import styled from "styled-components";

export const ContainerBottomHeader = styled.div `
    
    background-color: ${props => props.theme.colors.bottomHeader};
` 

export const ContentBottomHeader = styled.div `
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
`

export const NavbarBottomHeader = styled.nav `
    ul {
        display: flex;
        gap: 1.5rem;

        li {
            list-style: none;

            a {
                text-decoration: none;
                font-size: 10pt;

                i {
                    color: ${props => props.theme.colors.color};
                    font-weight: 700;
                }
            }
        }
    }
`