import { ChangeEventHandler } from "react"

export interface ICommonInputProps {
    id?: string,
    label?: string,
    hasError?: boolean,
    message?: string,
    success?: boolean,
    disabled?: boolean,
    readonly?: boolean,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}
