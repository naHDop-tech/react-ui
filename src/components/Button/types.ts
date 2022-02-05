import {  MouseEventHandler } from "react"

export interface IButtonProps {
    type?: "button" | "submit"
    text?: string,
    primary?: boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}