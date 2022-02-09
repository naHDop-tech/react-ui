import {  MouseEventHandler } from "react"

import { Colors, Sizes } from '@ui/types'

export interface IButtonProps {
    type?: "button" | "submit"
    label?: string,
    color?: Colors 
    disabled?: boolean,
    size?: Sizes,
    isLoading?: boolean
    wide?: boolean
    outline?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}