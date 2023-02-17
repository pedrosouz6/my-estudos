import * as Yup from 'yup';

export const AddMaterialSchema = Yup.object({
    subjectName: Yup.string()
    .trim()
    .min(1, "O nome da matéria deve ser maior que 1 caractere.")
    .max(80, "O nome da matéria está muito grande, máximo de 50 caracteres.")
    .required("Campo obrigatório."),

    contentName: Yup.string()
    .trim()
    .min(1, "O nome do conteúdo deve ser maior que 1 caractere.")
    .max(100, "O nome do conteúdo está muito grande, máximo de 50 caracteres.")
    .required("Campo obrigatório."),
})