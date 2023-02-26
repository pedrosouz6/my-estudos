import styled from "styled-components";

export const ContainerNotes = styled.div `

`

export const TitleAndAddNotes = styled.div `
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

export const AllCardsNotes = styled.div `
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

export const CardsNotes = styled.div `
    flex: 1 1 210px;
    max-width: 230px;
    height: 300px;
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

export const TitleCardNotes = styled.h5 `
    font-size: 10pt;

    span {
        font-weight: 400;
    }
`

export const ContentCardNotes = styled.span `
    display: block;
    font-size: 10pt;
    margin: 10px 0;
`

export const ActionsCardNotes = styled.div `
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

export const NoMatterNotes = styled.span `
    text-align: center;
    display: block;
    font-size: 15pt;
    margin-top: 1rem;
`

export const ButtonDeleteActionCardNotes = styled.button `
    color: ${props => props.theme.colors.warning};
`

interface ButtonEditActionCardNotesProps {
    studiedContent: boolean
}

export const ButtonEditActionCardNotes = styled.button `
    color: ${props => props.theme.colors.primary};
`

export const ButtonCheckActionCardNotes = styled.button `
    color: ${(props: ButtonEditActionCardNotesProps) => 
    props.studiedContent ? 
    (props) => props.theme.colors.success :
    (props) => props.theme.colors.color};
`