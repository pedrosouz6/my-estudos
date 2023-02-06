import { Formik, Form } from "formik";

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

export function ModalAddMaterial({ closeModalAddMaterial }: ModalAddMaterialProps) {

    function onSubmit() {

    }

    return (
        <Formik 
            initialValues={{
                subjectName: '',
                contentName: ''
            }}
            validationSchema={AddMaterialSchema}
            onSubmit={onSubmit}
        >

            {() => (
                <ContainerModalAddMaterial>
                    <HeaderModalAddMaterial>
                        <h5>Adicionar um novo conteúdo</h5>
                        <button onClick={() => closeModalAddMaterial()}>x</button>
                    </HeaderModalAddMaterial>

                    <ContainerForm>
                        <Form >
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