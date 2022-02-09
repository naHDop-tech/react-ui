import React, { FC } from 'react'

import { ILoaderProps } from './types'
import { Spinner } from './styles'

export const Loader: FC<ILoaderProps> = (props): JSX.Element => {
    const { children, isLoading, ...rest } = props

    return (
        <>
            {isLoading ? <Spinner {...rest} /> : children}
        </>
    )
}