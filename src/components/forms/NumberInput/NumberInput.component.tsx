import React, { FC } from 'react'

import { ICommonInputProps } from '@components/forms/CommonInput/types'

import { NumberWrapper, Input } from './styles'

export const NumberInput: FC<Omit<ICommonInputProps, 'type'>> = (props): JSX.Element => {
    const { label, errorMessage, hasError } = props

    return (
        <>
            <NumberWrapper hasError={hasError}>
                {label && <div className='label'>{label}</div>}
                <Input type="number" {...props} />
                {hasError && <div className='error-message'>{errorMessage}</div>}
            </NumberWrapper>
        </>
    )
}
