import styled from "styled-components";

export const ContainerThemesMode = styled.div `
    position: relative;
    display: flex;
    align-items: center;

`

export const DropDownThemesMode = styled.ul `
    position: absolute;
    left: 0;
    z-index: 2;
    top: 28px;
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 3px;

    li {
        width: 100px;
        list-style: none;

        &:first-child {
            border-bottom: 1px solid ${props => props.theme.colors.background};
        }

        button {
            width: 100%;

            color: ${props => props.theme.colors.color};
            background: ${props => props.theme.colors.bottomHeader};
            border: none;
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 7px 5px;
            cursor: pointer;

            &:hover {
                opacity: .9;
            }
        }
    }
`

export const ButtonDropDownThemesMode = styled.div `
    button {
        background: none;
        border: none;
        font-size: 15pt;
        padding: 3px 3px 0 3px;
        cursor: pointer;
        color: white;
    }
`   

export const ArrowThemesMode = styled.i `
    position: absolute;
    top: 14px;
    left: -1px;
    color: ${props => props.theme.colors.background};
    font-size: 20pt;
    display: block;
    width: 0px;
    height: 0px;
    z-index: 1;
`