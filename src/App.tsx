import { ThemeProvider } from "styled-components"
import GlobalsStyled from "./style/GlobalsStyled"
import dark from "./style/theme/dark"
import light from "./style/theme/light"
import { Routes } from "./routes"

export default function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalsStyled />
            <Routes />
        </ThemeProvider>
    )
}