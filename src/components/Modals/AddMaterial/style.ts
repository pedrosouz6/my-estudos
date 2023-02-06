import styled from "styled-components";

export const ContainerModalAddMaterial = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${props => props.theme.colors.background};
    width: calc(100% - 40px);
    max-width: 450px;
    height: auto;
        
    z-index: 4;
    transition: .3s ease-in-out;

    border-radius: 3px;

`

export const HeaderModalAddMaterial = styled.div `
    position: relative;
    width: 100%;
    height: 45px;
    border-radius: 3px 3px 0 0;

    background-color: ${props => props.theme.colors.primary};
    padding: 0 20px;

    h5 {
        color: white;
        font-size: 12pt;
        font-weight: 500;
        line-height: 45px;
    }

    button {
        position: absolute;
        top: -10px;
        right: -8px;

        width: 23px;
        height: 23px;
        background-color: ${props => props.theme.colors.primary};
        box-shadow: -1px 1px 2px white;
        color: white;

        padding-left: 2px;
        border-radius: 50%;
        border: none;
        font-size: 12pt;
        
        cursor: pointer;
    }
`

export const ContainerForm = styled.div `
    padding: 20px 20px 0 20px;
`

export const SubmitInputForm = styled.div `
    display: flex;
    gap: 1rem;
    justify-content: end;
    padding-bottom: 20px;

    button, input {
        cursor: pointer;
        padding: 7px 24px;
        border-radius: 3px;
        border: 2px solid ${props => props.theme.colors.primary};
        transition: .3s ease-in-out;

        &:hover {
            opacity: .9;
        }
    }

    input {
        background-color: ${props => props.theme.colors.primary};
        color: white;
    }

    button {
        background: none;
        font-weight: 600;
        color: ${props => props.theme.colors.primary};
    }
`