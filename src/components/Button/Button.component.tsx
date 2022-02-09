import React, { FC } from 'react'

import { Loader } from '@components/Loader'

import { StyledButton } from './styles'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { label, isLoading = false, ...rest } = props

    return (
        <StyledButton
            {...rest}
        >
            {isLoading ? (<>{label}<Loader isLoading={isLoading} size='small' color={rest.color}/></>) : label}
        </StyledButton>
    )
}