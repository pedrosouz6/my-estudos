import styled from 'styled-components';

export const ContainerHeader = styled.header `
    width: 100%;
    height: 50px;

    background-color: ${props => props.theme.colors.primary};

    h1 {
        color: white;
        font-style: italic;

        span {
            font-weight: 400;
        }
    }
`

export const ContentHeader = styled.div `
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
    }
`