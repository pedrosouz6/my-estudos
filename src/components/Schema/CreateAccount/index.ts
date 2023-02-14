import * as Yup from 'yup';

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const CreateAccountSchema = Yup.object({
    email: Yup.string()
    .trim()
    .max(255, 'O e-mail está muito grande.')
    .matches(regexEmail, 'Preencha o e-mail corretamente.')
    .required('Campo obrigatório.'),

    password: Yup.string()
    .trim()
    .min(6, 'A senha deve ser maior que 5 caracteres')
    .max(32, 'A senha deve ser menor que 32 caracteres')
    .required('Campo obrigatório')
})