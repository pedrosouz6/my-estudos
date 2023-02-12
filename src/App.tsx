import { ThemeProvider } from "styled-components"
import GlobalsStyled from "./style/GlobalsStyled"
import { Routes } from "./routes"

import { useTheme } from "./hooks/Theme"


export default function App() {

    const { theme } = useTheme();

    console.log(process.env.REACT_APP_apiKey);

    return (
        <ThemeProvider theme={theme}>
            <GlobalsStyled />
            <Routes />
        </ThemeProvider>
    )
}