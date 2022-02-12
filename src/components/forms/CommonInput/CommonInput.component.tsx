import React from 'react'

import { Wrapper, BaseInput } from './styles'
import { ICommonInputProps } from './types'

export function CommonInput(props: ICommonInputProps) {
    const { label, errorMessage } = props

    return (
        <Wrapper hasError={props.hasError}>
            {label && <div className='label'>{label}</div>}
            <BaseInput {...props} />
            {props.hasError && <div className='error-message'>{errorMessage}</div>}
        </Wrapper>
    )
}
