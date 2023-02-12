import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { CustomInput } from "../../components/Custom/Input";
import { Logo } from "../../components/Logo";

import { IoIosArrowForward } from 'react-icons/io';

import { 
    ContainerLogin, 
    ContentLogin,
    HeaderLogin,
    ContainerForm,
    LinksLogin
} from "./style";

export function Login() {

    function onSubmit() {

    }

    return (
        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={onSubmit}
        >
            {() => (
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
                                    type="password"
                                />

                                <button disabled type="submit">Entrar</button>

                                <LinksLogin>
                                    <Link to="">Esqueci a senha <i><IoIosArrowForward /></i></Link>
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