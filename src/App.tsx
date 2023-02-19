import GlobalsStyled from "./style/GlobalsStyled";
import { Routes } from "./routes";
import { ModalMessage } from "./components/Modals/Message";

export default function App() {
    return (
        <>
            <GlobalsStyled />
            <Routes />
            <ModalMessage />
        </>
    )
}