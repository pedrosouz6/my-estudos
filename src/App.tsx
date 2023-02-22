import GlobalsStyled from "./style/GlobalsStyled";

import { Routes } from "./routes";
import { ModalMessage } from "./components/Modals/Message";
import { Loading } from "./components/Loading";

import { useLoading } from "./hooks/Loading";

export default function App() {

    const { isLoading } = useLoading();

    return (
        <>
            <GlobalsStyled />
            <Routes />
            <ModalMessage />

            { isLoading && <Loading /> }
        </>
    )
}