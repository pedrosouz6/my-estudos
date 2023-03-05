import styled from "styled-components";

export const ContainerMaterial = styled.div `

`

export const TitleAndAddMaterial = styled.div `
    width: 100%;
    margin-top: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;

    button {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        
        border: none;
        border-radius: 2px;
        letter-spacing: .3px;
        padding: 8px 16px;
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

export const AllCardsMaterial = styled.div `
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    padding-bottom: 1.5rem;

    margin-top: 2rem;

    @media (max-width: 470px) {
        justify-content: center;
    }
`

export const CardsMaterial = styled.div `
    flex: 1 1 190px;
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

    @media (max-width: 470px) {
        max-width: 300px;
    }
`

export const TitleCardMaterial = styled.h5 `
    font-size: 10pt;
`

export const ContentCardMaterial = styled.span `
    display: block;
    font-size: 10pt;
    margin: 8px 0;
`

export const ActionsCardMaterial = styled.div `
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

export const NoMatterMaterial = styled.span `
    text-align: center;
    display: block;
    font-size: 15pt;
    margin-top: 1rem;
`

export const ButtonDeleteActionCardMaterial = styled.button `
    color: ${props => props.theme.colors.warning};
`

export const ButtonEditActionCardMaterial = styled.button `
    color: ${props => props.theme.colors.primary};
`

export const ButtonCheckActionCardMaterial = styled.button `
    color: ${props => props.theme.colors.color};
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