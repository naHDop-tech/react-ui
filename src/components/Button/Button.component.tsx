import React, { FC } from 'react'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const {size, disabled, label, onClick, ...rest} = props

    return (
        <StyledButton
            onClick={onClick} 
            disabled={disabled} 
            size={size} 
            {...rest}
        >
            {label}
        </StyledButton>
    )
}