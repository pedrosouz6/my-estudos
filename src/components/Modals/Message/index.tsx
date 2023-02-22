import { useMessageModal } from "../../../hooks/MessageModal";
import { ContainerModalMessage, CountdownModalMessage } from "./style";

export function ModalMessage() {

    const { isErrorMessage, isRenderErrorMessage, messageModal, ToggleRenderErrorMessage } = useMessageModal();

    if(isRenderErrorMessage) {
        setTimeout(() => {
            ToggleRenderErrorMessage(false)
        }, 3000)
    }

    function CancelRenderingErrorMessage() {
        ToggleRenderErrorMessage(false);
    }

    return (
        <ContainerModalMessage 
            isRenderErrorMessage={isRenderErrorMessage} 
            isErrorMessage={isErrorMessage}
        >
            <span>{ messageModal }</span>

            <button onClick={() => CancelRenderingErrorMessage()}>X</button>

            <CountdownModalMessage 
                isRenderErrorMessage={isRenderErrorMessage}  
                isErrorMessage={isErrorMessage}
            />
        </ContainerModalMessage>
    )
}