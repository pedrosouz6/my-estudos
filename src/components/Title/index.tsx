import { TextTitle } from "./style";

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <TextTitle>
            { text }
        </TextTitle>
    )
}   