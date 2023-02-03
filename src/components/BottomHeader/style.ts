import styled from "styled-components";

export const ContainerBottomHeader = styled.div `
    width: 100%;
    height: auto;

    padding: 10px 0;
    background-color: ${props => props.theme.colors.bottomHeader};
` 

export const ContentBottomHeader = styled.div `

`

export const NavbarBottomHeader = styled.nav `
    ul {
        display: flex;
        gap: 1.5rem;

        li {
            list-style: none;

            a {
                text-decoration: none;
                font-size: 11pt;
            }
        }
    }
`