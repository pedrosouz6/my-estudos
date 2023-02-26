import styled from "styled-components";

export const ContainerCustomTextarea = styled.div `
    margin-bottom: 10px;

    label {
        display: block;
        margin-bottom: 10px;
        font-size: 11pt;
    }
    
    textarea {
        width: 100%;
        height: 120px;
        border: none;
        resize: none;
        outline: none;
        border-radius: 3px;
        padding: 10px;
    }

    span {
        font-size: 9pt;
        color: ${props => props.theme.colors.warning};
        font-weight: 600;
    }

`