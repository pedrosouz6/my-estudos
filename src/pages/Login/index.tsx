import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import { signInWithEmailAndPassword, auth } from '../../service/firebase';

import { CustomInput } from "../../components/Custom/Input";
import { LoginSchema } from "../../components/Schema/Login";
import { Logo } from "../../components/Logo";

import { IoIosArrowForward } from 'react-icons/io';

import { 
    ContainerLogin, 
    ContentLogin,
    HeaderLogin,
    ContainerForm,
    LinksLogin,
    ShowPassword
} from "./style";
import { useMessageModal } from "../../hooks/MessageModal";
import { useState } from "react";

interface onSubmit {
    email: string,
    password: string
}

export function Login() {

    const navigate = useNavigate();
    const { ToggleErrorMessage, ToggleMessageModal, ToggleRenderErrorMessage } = useMessageModal();

    const [ isShowPassword, setIsShowPassword ] = useState<boolean>(false);

    function onSubmit({ email, password }: onSubmit) {

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('uid_user', userCredential.user.uid);

            navigate('/material');
        })
        .catch((error) => {
            const errorMessage: string = error.message;

            if(errorMessage.includes('password')) {
                ToggleErrorMessage(true);
                ToggleMessageModal('A senha está incorreta!');
                ToggleRenderErrorMessage(true);

                return;
            }

            ToggleErrorMessage(true);
            ToggleMessageModal('O e-mail não está cadastrado!');
            ToggleRenderErrorMessage(true);
        });
    }

    return (
        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values => onSubmit(values)}
        >
            {({ isValid, dirty }) => (
                <ContainerLogin>
                    <Logo />
                    <ContentLogin>
                        <HeaderLogin>
                            <h4>Faça seu login</h4>
                        </HeaderLogin>

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
                                    Entrar
                                </button>

                                <LinksLogin>
                                    <Link to='/redefine-password'>Esqueci a senha <i><IoIosArrowForward /></i></Link>
                                    <Link to='/create-account'>Criar conta <i><IoIosArrowForward /></i></Link>
                                </LinksLogin>
                            </Form>
                        </ContainerForm>
                    </ContentLogin>
                </ContainerLogin>   
            )}
        </Formik>
    )
}