import styled from "styled-components";

export const ContainerMaterial = styled.div `

`

export const TitleAndAddMaterial = styled.div `
    width: 100%;
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;
`

export const AllCardsMaterial = styled.div `
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    margin-top: 2rem;
`

export const CardsMaterial = styled.div `   
    width: 230px;
    height: 110px;
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: 0 0 2px ${props => props.theme.colors.primary};
    border-radius: 3px;
`