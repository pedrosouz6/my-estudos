import { Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';

import { CustomInput } from "../../components/Custom/Input";
import { Logo } from "../../components/Logo";

import { sendPasswordResetEmail, auth, actionCodeSettings } from '../../service/firebase';

import { RedefinePasswordSchema } from "../../components/Schema/RedefinePassword";

import { 
    ContainerForm,
    ContainerRedefinePassword,
    ContentRedefinePassword,
    HeaderRedefinePassword,
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";

interface onSubmit {
    email: string
}

export function RedefinePassword() {

    const navigate = useNavigate();

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal();

    function onSubmit({ email }: onSubmit) { 
        
        sendPasswordResetEmail(auth, email, actionCodeSettings)
        .then(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(false);
            ToggleMessageModal('Verifique seu e-mail para redefinir a senha!');
            navigate('/login');
        })
        .catch(() => {
            ToggleRenderErrorMessage(true);
            ToggleErrorMessage(true);
            ToggleMessageModal('Este e-mail não está cadastrado!');
        })
    }

    return (
        <Formik 
            initialValues={{
                email: ''
            }}
            validationSchema={RedefinePasswordSchema}
            onSubmit={values => onSubmit(values)}
        >
            {({dirty, isValid}) => (
                <ContainerRedefinePassword>
                    <Logo />
                    <ContentRedefinePassword>
                        <HeaderRedefinePassword>
                            <h4>Redefinir senha</h4>
                        </HeaderRedefinePassword>

                        <ContainerForm>
                                <Form>
                                    <CustomInput 
                                        label="E-mail"
                                        id="email"
                                        name="email"
                                        placeholder="Digite seu e-mail"
                                        type="text"
                                    />

                                    <button 
                                        type="submit"
                                        disabled={!isValid || !dirty}
                                    >
                                        Enviar e-mail
                                    </button>
                                </Form>
                            </ContainerForm>
                    </ContentRedefinePassword>
                </ContainerRedefinePassword>
            )}
        </Formik>
    )
}