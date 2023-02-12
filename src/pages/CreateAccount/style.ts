import styled from 'styled-components';

export const ContainerCreateAccount = styled.div `
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;

    padding: 20px;
`

export const ContentCreateAccount = styled.div `
    max-width: 350px;
    width: 100%;
    height: auto;

    background-color: white;

    padding: 40px 20px;
    border-radius: 7px;
`

export const HeaderCreateAccount = styled.div `
    h4 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 15pt;
    }
`

export const ContainerForm = styled.div `
    button {
        width: 100%;
        height: 38px;
        background-color: ${props => props.theme.colors.primary};
        color: white;

        border: none;
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;

        transition: .3s ease-in-out;

        &:disabled {
            border: 2px solid ${props => props.theme.colors.primary};
            background: none;
            color: ${props => props.theme.colors.primary};
            opacity: .3;
            cursor: no-drop;
        }

        &:hover && &:enabled {
            opacity: .9;
        }
    }
`

export const LinksCreateAccount = styled.div `
    margin-top: 2rem;

    a {
        display: block;
        color: ${props => props.theme.colors.primary};
        text-align: center;
        margin-bottom: .8rem;
        font-weight: 500;
        text-decoration: none;
        font-size: 11pt;

        i {
            font-size: 7pt;
        }

    }
`