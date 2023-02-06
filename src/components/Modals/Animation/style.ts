import styled from "styled-components";

interface ModalAnimationProps {
    isRendering: boolean
}

export const ModalAnimation = styled.div `
    position: fixed;
    left: 0;
    
    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, .2);

    visibility: ${(props: ModalAnimationProps) => props.isRendering ? 'visible' : 'hidden'};
    opacity: ${(props: ModalAnimationProps) => props.isRendering ? '1' : '0'};
    backdrop-filter: ${(props: ModalAnimationProps) => props.isRendering ? 'blur(1px)' : 'blur(0)'};
    transform: ${(props: ModalAnimationProps) => props.isRendering ? 'scale(1)' : 'scale(1.3)'};
    top: ${(props: ModalAnimationProps) => props.isRendering ? '0' : '-100%'};

    z-index: 3;
    transition: .3s ease-in-out;
`