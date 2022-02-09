import React, { FC } from 'react'

import { ILoaderProps } from './types'
import { Wrapper, Spinner } from './styles'

export const Loader: FC<ILoaderProps> = (props): JSX.Element => {
    const { children, isLoading, ...rest } = props

    return (
        <Wrapper>
            {isLoading ? <Spinner {...rest} /> : children}
        </Wrapper>
    )
}