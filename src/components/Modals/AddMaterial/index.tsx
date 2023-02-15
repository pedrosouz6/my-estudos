import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import { database, ref, update, push, auth } from "../../../service/firebase";

import { CustomInput } from "../../Custom/Input";
import { AddMaterialSchema } from "../../Schema/AddMaterial";

import { 
    ContainerModalAddMaterial,
    HeaderModalAddMaterial,
    ContainerForm,
    SubmitInputForm
} from "./style";

interface ModalAddMaterialProps {
    closeModalAddMaterial: () => void
}

interface onSubmit {
    subjectName: string,
    contentName: string
}

export function ModalAddMaterial({ closeModalAddMaterial }: ModalAddMaterialProps) {
    
    const navigate = useNavigate();

    function onSubmit({ contentName, subjectName }: onSubmit) {

        const uidUser = localStorage.getItem('uid_user');

        if(!uidUser) {
            auth.signOut();
            navigate('/login');
        }

        const datas: onSubmit = {
            contentName, 
            subjectName
        }
        
        const newPostKey = push(ref(database)).key;

        const updates = {['discipline/' + `/${uidUser}/` + newPostKey]: datas};

        update(ref(database), updates);

        closeModalAddMaterial()
    }

    return (
        <Formik 
            initialValues={{
                subjectName: '',
                contentName: ''
            }}
            validationSchema={AddMaterialSchema}
            onSubmit={values => onSubmit(values)}
        >

            {() => (
                <ContainerModalAddMaterial>
                    <HeaderModalAddMaterial>
                        <h5>Adicionar um novo conteúdo</h5>
                        <button onClick={() => closeModalAddMaterial()}>x</button>
                    </HeaderModalAddMaterial>

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
                                <button onClick={() => closeModalAddMaterial()} type='button'>Fechar</button>
                                <input type="submit" value="Adicionar" />
                            </SubmitInputForm>
                        </Form>
                    </ContainerForm>
                    
                </ContainerModalAddMaterial>
            )}
        </Formik>
    )
}