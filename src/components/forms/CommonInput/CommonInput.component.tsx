import React from 'react'

import { Wrapper, BaseInput } from './styles'
import { ICommonInputProps } from './types'

export function CommonInput(props: ICommonInputProps): JSX.Element {
    const { label, errorMessage, hasError } = props

    return (
        <Wrapper hasError={hasError}>
            {label && <div className='label'>{label}</div>}
            <BaseInput {...props} />
            {hasError && <div className='error-message'>{errorMessage}</div>}
        </Wrapper>
    )
}
