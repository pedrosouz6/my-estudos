import { useField } from 'formik';

import { ContainerCustomInput } from "./style";

interface CustomInputProps {
    type: string,
    name: string,
    placeholder: string
    label: string,
    id: string
}

export function CustomInput({ label, ...props }: CustomInputProps) {

    const [ field, meta ] = useField(props.name);

    return (
        <ContainerCustomInput>
            <label htmlFor={props.id}> { label } </label>
            <input { ...field } { ...props } />
            
            { meta.touched && meta.error && <span> {meta.error }</span> }
        </ContainerCustomInput>
    )
}