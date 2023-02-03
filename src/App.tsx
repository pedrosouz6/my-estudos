import { ThemeProvider } from "styled-components"
import GlobalsStyled from "./components/style/GlobalsStyled"
import dark from "./components/style/theme/dark"
import light from "./components/style/theme/light"
import { Routes } from "./routes"

export default function App() {
    return (
        <ThemeProvider theme={light}>
            <GlobalsStyled />
            <Routes />
        </ThemeProvider>
    )
}