import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { IoIosArrowForward } from 'react-icons/io';

import { auth, createUserWithEmailAndPassword } from "../../service/firebase";

import { CreateAccountSchema } from "../../components/Schema/CreateAccount";
import { CustomInput } from "../../components/Custom/Input";
import { Logo } from "../../components/Logo";

import { 
    ContainerCreateAccount, 
    ContentCreateAccount,
    HeaderCreateAccount,
    ContainerForm,
    LinksCreateAccount,
    ShowPassword
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";
import { useState } from "react";

interface User {
    email: string,
    password: string
}

export function CreateAccount() {

    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal();
    const [ isShowPassword, setIsShowPassword ] = useState<boolean>(false);

    const navigate = useNavigate();

    function onSubmit({ email, password }: User) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('uid_user', userCredential.user.uid);

            navigate('/material');
        })
        .catch((error) => {
            const errorMessage: string = error.message;

            if(errorMessage.includes('email-already')) {
                ToggleRenderErrorMessage(true);
                ToggleErrorMessage(true);
                ToggleMessageModal('O e-mail já está cadastrado!');
            }
        })
    }

    return (
        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={CreateAccountSchema}
            onSubmit={(values) => onSubmit(values)}
        >
            {({ isValid, dirty }) => (
                <ContainerCreateAccount>
                    <Logo />
                    <ContentCreateAccount>
                        <HeaderCreateAccount>
                            <h4>Criar conta</h4>
                        </HeaderCreateAccount>

                        <ContainerForm>
                            <Form>
                                <CustomInput 
                                    label="E-mail"
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu e-mail"
                                    type="text"
                                />

                                <CustomInput 
                                    label="Senha"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    type={isShowPassword ? 'text' : 'password'}
                                />

                                <ShowPassword>
                                    <input type="checkbox" id='checkbox' onClick={() => setIsShowPassword(!isShowPassword)} />
                                    <label htmlFor="checkbox"> Mostrar senha</label>
                                </ShowPassword>

                                <button 
                                    type="submit"
                                    disabled={!isValid || !dirty}
                                >
                                    Criar conta
                                </button>

                                <LinksCreateAccount>
                                    <Link to='/login'>Já tenho conta <i><IoIosArrowForward /></i></Link>
                                </LinksCreateAccount>
                            </Form>
                        </ContainerForm>
                    </ContentCreateAccount>
                </ContainerCreateAccount>   
            )}
        </Formik>
    )
}