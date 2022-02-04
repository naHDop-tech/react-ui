import {  MouseEventHandler } from "react"

export interface IButtonProps {
    text?: string,
    primary?: boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}