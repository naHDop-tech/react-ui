import {  MouseEventHandler } from "react"

import { PrimaryColors, Sizes } from '@ui/types'

export interface IButtonProps {
    type?: "button" | "submit"
    label?: string,
    color?: PrimaryColors 
    disabled?: boolean,
    size?: Sizes,
    isLoading?: boolean
    wide?: boolean
    outline?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}