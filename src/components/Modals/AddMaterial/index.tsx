import { Formik, Form } from "formik";

import { database, ref, update, push } from "../../../service/firebase";

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

    function onSubmit({ contentName, subjectName }: onSubmit) {

        const datas: onSubmit = {
            contentName,
            subjectName
        }
        
        const newPostKey = push(ref(database)).key;

        const updates = {['k/' + newPostKey]: datas};

        update(ref(database), updates);
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
                                <button>Fechar</button>
                                <input type="submit" value="Adicionar" />
                            </SubmitInputForm>
                        </Form>
                    </ContainerForm>
                    
                </ContainerModalAddMaterial>
            )}
        </Formik>
    )
}