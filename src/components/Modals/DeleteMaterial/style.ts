import styled from "styled-components";

export const ContainerModalDeleteMaterial = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 3px;

    max-width: 300px;
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.background};
`

export const HeaderModalDeleteMaterial = styled.div `
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

export const ContentModalDeleteMaterial = styled.span `
    padding: 20px;
    display: block;
`

export const ActionsModalDeleteMaterial = styled.div `
    padding: 10px 20px;
    display: flex;
    gap: 1rem;
    justify-content: end;

    border-top: 1px solid ${props => props.theme.colors.bottomHeader};

    button {
        padding: 5px 13px;
        font-weight: 500;
        border-radius: 3px;
        border: 2px solid ${props => props.theme.colors.primary};
        cursor: pointer;
        transition: .3s ease-in-out;
    }

  
`

export const ButtonCloseModalDeleteMaterial = styled.button `
    color: ${props => props.theme.colors.primary};
    
    &:hover {
        opacity: .8;
    }
`

export const ButtonDeleteModalDeleteMaterial = styled.button `
    background-color: ${props => props.theme.colors.primary};
    color: white;

    &:hover {
        opacity: .8;
    }
`