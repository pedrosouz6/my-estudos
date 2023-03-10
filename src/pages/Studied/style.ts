import styled from "styled-components";

export const ContainerStudied = styled.div `

`

export const TitleAndAddStudied = styled.div `
    width: 100%;
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;

    button {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        
        border: none;
        border-radius: 2px;
        letter-spacing: .3px;
        padding: 5px 20px;
        font-size: 9pt;

        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            opacity: .9;

            i {
                transform: rotate(360deg);
            }
        }

        i {
            transform: rotate(0);
            transition: .3s ease-in-out;
            font-weight: 700;
            font-size: 8pt;

            display: inline-block;
            color: white;
        }
    }
`

export const AllCardsStudied = styled.div `
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    padding-bottom: 1.5rem;

    margin-top: 2rem;

    @media (max-width: 730px) {
        justify-content: center;
    }
`

export const CardsStudied = styled.div `
    flex: 1 1 210px;
    max-width: 230px;
    height: 120px;
    background-color: ${props => props.theme.colors.bottomHeader};
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: 0 0 2px ${props => props.theme.colors.primary};
    border-radius: 3px;

    padding: 10px;
    position: relative;

    transition: .2s ease-in-out;

    &:hover {
        border-left: 3px solid ${props => props.theme.colors.primary};
    }
`

export const TitleCardStudied = styled.h5 `
    font-size: 10pt;
`

export const ContentCardStudied = styled.span `
    display: block;
    font-size: 10pt;
    margin: 8px 0;
`

export const ActionsCardStudied = styled.div `
    width: 100%;
    position: absolute;
    bottom: 10px;

    display: flex;
    gap: .7rem;

    button {
        background: none;
        border: none;

        font-size: 12pt;
        cursor: pointer;
        padding: 1px;
    }
`

export const NoMatterStudied = styled.span `
    text-align: center;
    display: block;
    font-size: 15pt;
    margin-top: 1rem;
`

export const ButtonDeleteActionCardStudied = styled.button `
    color: ${props => props.theme.colors.warning};
`

export const ButtonEditActionCardStudied = styled.button `
    color: ${props => props.theme.colors.primary};
`

export const ButtonCheckActionCardStudied = styled.button `
    color: ${props => props.theme.colors.success};
`

export const ButtonNoteActionCardMaterial = styled.button `
    position: absolute;
    right: 20px;
    padding: 2px;
    color: ${props => props.theme.colors.primary};
    display: block;

    span {
        font-size: 8pt;
        margin-left: 4px;
    }
`