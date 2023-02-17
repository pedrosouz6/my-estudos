import styled from "styled-components";

export const ContainerThemesMode = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    label {
        font-size: 13px;
   }

    select {
        width: 100px;
        padding: 3px 0;
        border: 1px solid ${props => props.theme.colors.borderColor};
        border-radius: 3px;
    }
`