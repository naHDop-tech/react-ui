import { ChangeEventHandler } from "react"

export interface ICommonInputProps {
    id?: string
    label?: string
    hasError?: boolean
    errorMessage?: string
    type: string
    disabled?: boolean
    readOnly?: boolean
    placeholder?: string
    wide?: boolean
    defaultValue?: any
    onChange?: ChangeEventHandler<HTMLInputElement>
}
