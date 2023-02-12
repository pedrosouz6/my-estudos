import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { CustomInput } from "../../components/Custom/Input";

import { IoIosArrowForward } from 'react-icons/io';

import { 
    ContainerCreateAccount, 
    ContentCreateAccount,
    HeaderCreateAccount,
    ContainerForm,
    LinksCreateAccount
} from "./style";
import { Logo } from "../../components/Logo";

export function CreateAccount() {

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
                                    type="password"
                                />

                                <button disabled type="submit">Criar conta</button>

                                <LinksCreateAccount>
                                    <Link to='/'>Já tenho conta <i><IoIosArrowForward /></i></Link>
                                </LinksCreateAccount>
                            </Form>
                        </ContainerForm>
                    </ContentCreateAccount>
                </ContainerCreateAccount>   
            )}
        </Formik>
    )
}