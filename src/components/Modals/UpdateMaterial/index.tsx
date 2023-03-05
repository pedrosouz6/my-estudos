import { Formik, Form } from "formik";
import { useEffect, useState } from 'react';
import { useMessageModal } from "../../../hooks/MessageModal";

import { database, ref, update, auth , onValue } from "../../../service/firebase";

import { CustomInput } from "../../Custom/Input";
import { UpdateMaterialSchema } from "../../Schema/UpdateMaterial";

import { 
    ContainerModalUpdateMaterial,
    HeaderModalUpdateMaterial,
    ContainerForm,
    SubmitInputForm
} from "./style";

interface ModalUpdateMaterialProps {
    closeModalUpdateMaterial: () => void,
    keyUser: string
}

interface onSubmit {
    subjectName: string | null,
    contentName: string | null,
}

export function ModalUpdateMaterial({ closeModalUpdateMaterial, keyUser }: ModalUpdateMaterialProps) {

    const [ loadValues, setLoadValues ] = useState(false);

    const [ subject, setSubject ] = useState<string>('');
    const [ content, setContent ] = useState<string>('');

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal();

    function onSubmit({ contentName, subjectName }: onSubmit) {

        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            return auth.signOut();
        }

        const datas: onSubmit = {
            contentName, 
            subjectName
        }
        
        const updates = {['discipline/' + `/${uidUser}/${keyUser}`]: datas};

        update(ref(database), updates)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Matéria atualizada com sucesso!');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Ocorreu um erro ao tentar atualizada a matéria!');
        })

        closeModalUpdateMaterial();
    }

    useEffect(() => {
        setLoadValues(false);

        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            auth.signOut();
        }

        const datasUser = ref(database, `discipline/${uidUser}/${keyUser}`);

        onValue(datasUser, (snapshot) => {
            const datas = Object.entries<string>(snapshot.val() || []);

            setContent(datas[0][1]);
            setSubject(datas[3][1]);

            setLoadValues(true);
        })
    }, [])

    return (
        <>
        {loadValues &&
            <Formik 
            initialValues={{
                subjectName: subject,
                contentName: content
            }}
            validationSchema={UpdateMaterialSchema}
            onSubmit={values => onSubmit(values)}
        >

            {() => (
                <ContainerModalUpdateMaterial>
                    <HeaderModalUpdateMaterial>
                        <h5>Atualizar</h5>
                        <button onClick={() => closeModalUpdateMaterial()}>x</button>
                    </HeaderModalUpdateMaterial>

                    <ContainerForm>
                        <Form>
                            <CustomInput 
                                type="text" 
                                label="Matéria"
                                id="subjectName"
                                name="subjectName" 
                                placeholder="Nome da matéria"
                            />

                            <CustomInput 
                                type="text" 
                                label="Conteúdo" 
                                id="contentName"
                                name="contentName" 
                                placeholder="Nome do conteúdo" 
                            />

                            <SubmitInputForm>
                                <button onClick={() => closeModalUpdateMaterial()} type='button'>Fechar</button>
                                <input type="submit" value="Atualizar" />
                            </SubmitInputForm>
                        </Form>
                    </ContainerForm>
                    
                </ContainerModalUpdateMaterial>
            )}
        </Formik>
        }
        </>

    )
}