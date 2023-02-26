import * as Yup from 'yup';

export const AddNotesSchema = Yup.object({
    note: Yup.string()
    .trim()
    .max(300, 'O máximo de caracteres é 300.')
    .min(1, 'O Você precisa de pelo menos 1 caracter.')
    .required('Campo obrigatório.')
})