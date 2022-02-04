import React, { FC } from 'react'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const {size, primary, disabled, text, onClick, ...rest} = props

    return (
        <StyledButton 
            type="button" 
            onClick={onClick} 
            primary={primary} 
            disabled={disabled} 
            size={size} 
            {...rest}
        >
            {text}
        </StyledButton>
    )
}