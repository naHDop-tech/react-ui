import {  MouseEventHandler } from "react"

export interface IButtonProps {
    type?: "button" | "submit"
    label?: string,
    color?: 'primary' | 'success' | 'error' | 'warning' | 'inactive' | 'disabled' 
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    isLoading?: boolean
    wide?: boolean
    outline?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}