import styled from "styled-components";

export const ContainerBottomHeader = styled.div `
    
    background-color: ${props => props.theme.colors.bottomHeader};
` 

export const ContentBottomHeader = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`

export const NavbarBottomHeader = styled.nav `
    ul {
        display: flex;
        gap: 1.5rem;

        li {
            list-style: none;
            line-height: 12px;

            a {
                text-decoration: none;
                font-size: 10pt;


                i {
                    color: inherit;
                    display: block;
                    text-align: center;
                    font-weight: 700;
                    font-size: 11pt;
                }
            }
        }
    }
`