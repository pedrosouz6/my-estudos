import { useField } from "formik";
import { ContainerCustomTextarea } from "./style";

interface CustomTextarea {
    placeholder: string,
    label: string,
    id: string,
    name: string
}

export function CustomTextarea({label, ...props}: CustomTextarea) {

    const [ field, meta ] = useField(props.name);


    return (
        <ContainerCustomTextarea>
            <label htmlFor={props.id}>{ label }</label>
            <textarea { ...field } { ...props } />
            { meta.touched && meta.error && <span> {meta.error }</span> }
        </ContainerCustomTextarea>
    )
}