import { useMessageModal } from '../../../hooks/MessageModal';
import { update, ref, database, auth } from '../../../service/firebase';

import { 
    ContainerModalDeleteNotes,
    HeaderModalDeleteNotes,
    ContentModalDeleteNotes,
    ActionsModalDeleteNotes,
    ButtonCloseModalDeleteNotes,
    ButtonDeleteModalDeleteNotes
} from "./style";

interface ModalDeleteNotesProps {
    closeModalDeleteNotes: () => void,
    keyUser: string
}

export function ModalDeleteNotes({ closeModalDeleteNotes, keyUser }: ModalDeleteNotesProps) {

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal(); 

    function DeleteNotes() {
        const user = localStorage.getItem('uid_user');

        if(!user) {
            return auth.signOut();
        }

        const updates = {['discipline/' + `/${user}/${keyUser}/note`]: ''};

        update(ref(database), updates)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Anotação deletada com sucesso!');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Ocorreu um erro ao tentar deletar a anotação!');
        })
        closeModalDeleteNotes();
    }

    return (
        <ContainerModalDeleteNotes>
            <HeaderModalDeleteNotes>
                <h5>Deletar anotação</h5>
                <button onClick={() => closeModalDeleteNotes()}>x</button>
            </HeaderModalDeleteNotes>

            <ContentModalDeleteNotes>
                Você tem certeza que deseja deletar essa anotação?
            </ContentModalDeleteNotes>

            <ActionsModalDeleteNotes>
                <ButtonCloseModalDeleteNotes 
                    onClick={() => closeModalDeleteNotes()}
                >
                    Fechar
                </ButtonCloseModalDeleteNotes>
                <ButtonDeleteModalDeleteNotes 
                    onClick={() => DeleteNotes()}
                >
                    Deletar
                </ButtonDeleteModalDeleteNotes>
            </ActionsModalDeleteNotes>
        </ContainerModalDeleteNotes>
    )
}