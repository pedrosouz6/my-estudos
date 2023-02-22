import styled from "styled-components";

export const ContainerLoading = styled.div `
    .lds-ring {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 4;
        background-color: rgba(0, 0, 0, .3);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lds-ring div {
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 5px;
        border: 6px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`