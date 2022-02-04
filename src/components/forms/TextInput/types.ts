import { ChangeEventHandler } from "react"

export interface ITextInputProps {
    id?: string,
    label?: string,
    error?: boolean,
    message?: string,
    success?: boolean,
    disabled?: boolean,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}
