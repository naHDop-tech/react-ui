import { ChangeEventHandler } from "react"

export interface ICommonInputProps {
    id?: string
    label?: string
    hasError?: boolean
    errorMessage?: string
    success?: boolean
    disabled?: boolean
    readonly?: boolean
    placeholder?: string
    wide?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}
