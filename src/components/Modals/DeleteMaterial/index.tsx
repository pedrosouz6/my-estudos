import { remove, ref, database } from '../../../service/firebase';

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

    function DeleteMaterial() {
        const user = localStorage.getItem('uid_user');

        remove(ref(database, `discipline/${user}/${keyUser}`)) ;
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
                <ButtonCloseModalDeleteMaterial onClick={() => closeModalDeleteMaterial()}>
                    Fechar
                </ButtonCloseModalDeleteMaterial>
                <ButtonDeleteModalDeleteMaterial onClick={() => DeleteMaterial()}>Deletar</ButtonDeleteModalDeleteMaterial>
            </ActionsModalDeleteMaterial>
        </ContainerModalDeleteMaterial>
    )
}