import { Formik, Form } from "formik";
import { useMessageModal } from "../../../hooks/MessageModal";

import { database, ref, update, auth } from "../../../service/firebase";

import { CustomTextarea } from "../../Custom/Textarea";
import { AddNotesSchema } from "../../Schema/AddNotes";

import { 
    ContainerModalAddNotes,
    HeaderModalAddNotes,
    ContainerForm,
    SubmitInputForm
} from "./style";

interface ModalAddNotesProps {
    closeModalAddNotes: () => void,
    keyUser: string
}

interface onSubmit {
    note: string
}

export function ModalAddNotes({ closeModalAddNotes, keyUser }: ModalAddNotesProps) {

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal();

    function onSubmit({ note }: onSubmit) {

        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            return auth.signOut();
        }
        
        const updates = {['discipline/' + `/${uidUser}/${keyUser}/note`]: note};

        update(ref(database), updates)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Anotação adicionada com sucesso!');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Ocorreu um erro ao tentar adicionar a anotação!');
        })

        closeModalAddNotes();
    }

    return (
        <Formik 
            initialValues={{
                note: ''
            }}
            validationSchema={AddNotesSchema}
            onSubmit={values => onSubmit(values)}
        >

            {() => (
                <ContainerModalAddNotes>
                    <HeaderModalAddNotes>
                        <h5>Adicionar anotação</h5>
                        <button onClick={() => closeModalAddNotes()}>x</button>
                    </HeaderModalAddNotes>

                    <ContainerForm>
                        <Form>
                            
                            <CustomTextarea
                                placeholder='Escreva sua anotação'
                                name='note'
                                id='note'
                                label='Faça sua anotação'
                            />

                            <SubmitInputForm>
                                <button onClick={() => closeModalAddNotes()} type='button'>Fechar</button>
                                <input type="submit" value="Fazer anotação" />
                            </SubmitInputForm>
                        </Form>
                    </ContainerForm>
                    
                </ContainerModalAddNotes>
            )}
        </Formik>
    )
}