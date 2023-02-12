import styled from "styled-components";

export const ContainerCustomInput = styled.div `
    margin-bottom: 20px;

    input {
        width: 100%;
        height: 37px;
        background-color: ${props => props.theme.colors.bottomHeader};
        color: ${props => props.theme.colors.color};

        border-radius: 3px;
        outline: none;
        border: none;
        padding: 2px 8px;
    }

    span {
        font-size: 9pt;
        color: #f40000;
        font-weight: 600;
    }

    label {
        display: block;
        font-size: 11pt;
        margin-bottom: 5px;
    }

`