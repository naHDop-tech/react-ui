import {  MouseEventHandler } from "react"

import { PromaryColors, Sizes } from '@ui/types'

export interface IButtonProps {
    type?: "button" | "submit"
    label?: string,
    color?: PromaryColors 
    disabled?: boolean,
    size?: Sizes,
    isLoading?: boolean
    wide?: boolean
    outline?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}