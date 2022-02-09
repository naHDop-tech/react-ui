import React, { FC } from 'react'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { label, ...rest } = props

    return (
        <StyledButton
            {...rest}
        >
            {label}
        </StyledButton>
    )
}