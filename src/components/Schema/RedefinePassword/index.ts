import * as Yup from 'yup';

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const RedefinePasswordSchema = Yup.object({
    email: Yup.string()
    .trim()
    .max(255, 'O e-mail está muito grande.')
    .matches(regexEmail, 'Preencha o e-mail corretamente.')
    .required('Campo obrigatório.'),
}) 