import { useMessageModal } from '../../../hooks/MessageModal';
import { remove, ref, database, auth } from '../../../service/firebase';

import { 
    ContainerModalDeleteMaterial,
    HeaderModalDeleteMaterial,
    ContentModalDeleteMaterial,
    ActionsModalDeleteMaterial,
    ButtonCloseModalDeleteMaterial,
    ButtonDeleteModalDeleteMaterial
} from "./style";

interface ModalDeleteMaterialProps {
    closeModalDeleteMaterial: () => void,
    keyUser: string
}

export function ModalDeleteMaterial({ closeModalDeleteMaterial, keyUser }: ModalDeleteMaterialProps) {

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal(); 

    function DeleteMaterial() {
        const user = localStorage.getItem('uid_user');

        if(!user) {
            return auth.signOut();
        }

        remove(ref(database, `discipline/${user}/${keyUser}`))
        .then((datas) => {
            ToggleErrorMessage(false);
            ToggleRenderErrorMessage(true);
            ToggleMessageModal('Matéria deletada com sucesso');
        })
        .catch((error) => {
            ToggleErrorMessage(true);
            ToggleRenderErrorMessage(true);
            ToggleMessageModal('Erro ao tentar deletar matéria');
        });

        closeModalDeleteMaterial();
    }

    return (
        <ContainerModalDeleteMaterial>
            <HeaderModalDeleteMaterial>
                <h5>Deletar matéria</h5>
                <button onClick={() => closeModalDeleteMaterial()}>x</button>
            </HeaderModalDeleteMaterial>

            <ContentModalDeleteMaterial>
                Você tem certeza que deseja deletar esse contéudo?
            </ContentModalDeleteMaterial>

            <ActionsModalDeleteMaterial>
                <ButtonCloseModalDeleteMaterial 
                    onClick={() => closeModalDeleteMaterial()}
                >
                    Fechar
                </ButtonCloseModalDeleteMaterial>
                <ButtonDeleteModalDeleteMaterial 
                    onClick={() => DeleteMaterial()}
                >
                    Deletar
                </ButtonDeleteModalDeleteMaterial>
            </ActionsModalDeleteMaterial>
        </ContainerModalDeleteMaterial>
    )
}