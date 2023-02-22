import styled from "styled-components";

interface ContainerModalMessageProps {
    isRenderErrorMessage: boolean | null,
    isErrorMessage: boolean | null
}

export const ContainerModalMessage = styled.div `
    position: fixed;
    top: 60px;
    right: 40px;
    z-index: 4;

    width: 200px;
    height: auto;
    padding: 10px;
    border-radius: 3px;
    transition: .3s ease-in-out;

    visibility: ${(props: ContainerModalMessageProps) => 
    props.isRenderErrorMessage ? 'visible' : 'hidden'};

    opacity: ${(props: ContainerModalMessageProps) => 
    props.isRenderErrorMessage ? '1' : '0'};

    transform: ${(props: ContainerModalMessageProps) => 
    props.isRenderErrorMessage ? 
    'translateX(0)' : 
    'translateX(300px)'};
    
    background-color: ${(props: ContainerModalMessageProps) => 
    props.isErrorMessage ? 
    (props) => props.theme.colors.warning : 
    (props) => props.theme.colors.success};    

    border: 1px solid ${(props: ContainerModalMessageProps) => 
    props.isErrorMessage ? 
    (props) => props.theme.colors.warning : 
    (props) => props.theme.colors.success};

    span {
        color: white;
        font-size: 11pt;
    } 
    
    button {
        position: absolute;
        top: -1px;
        right: 0;

        background: none;
        border: none;
        color: white;
        padding: 1px;

        cursor: pointer;
    }
`

export const CountdownModalMessage = styled.div `
    height: 3px;
    background-color: white;

    transition: 2.8s linear;

    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 0 0 3px 3px;

    width: ${(props: ContainerModalMessageProps) => 
    props.isRenderErrorMessage ? '100%' : '0%'};
`