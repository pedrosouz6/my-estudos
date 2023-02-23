import styled from 'styled-components';

export const ContainerHeader = styled.header `
    width: 100%;
    height: 50px;

    background-color: ${props => props.theme.colors.primary};
`

export const ContentHeader = styled.div `
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContentRightHeader = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem; 

    p {
        color: white;

        @media (max-width: 650px) {
            display: none;
        }
    }
`

export const ButtonMenuHeader = styled.button `
    background: none;
    color: white;
    border: none;
    width: 26px;
    height: 26px;
    padding: 3px 0 0 0 ;
    font-size: 16pt;
    cursor: pointer;
` 

export const MenuDropDownHeader = styled.ul `
    position: absolute;
    top: 40px;
    background-color: ${props => props.theme.colors.bottomHeader};
    border: 1px solid ${props => props.theme.colors.borderColor};
    right: 0;
    width: 200px;
    list-style: none;

    border-radius: 3px;

    z-index: 2;

    li {
        span {
            display: block;
            font-size: 10pt;
            padding: 8px;
            border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        }
    }
    
    button {
        background: none;
        width: 100%;
        text-align: start;
        padding: 8px;
        border: none;

        cursor: pointer;
        color: ${props => props.theme.colors.color};
        
        transition: .3s ease-in-out;

        &:hover {
            color: white;
            background-color: ${props => props.theme.colors.primary};
        }
    }
`

export const IndicationIconHeader = styled.i `
    display: block;
    position: absolute;
    top: -11px;
    right: -2px;
    font-size: 14pt;
    color: ${props => props.theme.colors.borderColor};
`