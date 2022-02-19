import React, { FC } from 'react'

import { PasswordWrapper, Input } from './styles'

import { ICommonInputProps } from '@components/forms/CommonInput/types'

import LockIcon  from './static/media/lock.icon.svg'

export const PasswordInput: FC<Omit<ICommonInputProps, 'type'>> = (props): JSX.Element => {
    const { label, errorMessage, hasError } = props
    
    return (
        <>
            <PasswordWrapper hasError={hasError}>
                {label && <div className='label'>{label}</div>}
                <Input type="password" {...props} />
                <img src={LockIcon} role="img" className='icon' />
                {hasError && <div className='error-message'>{errorMessage}</div>}
            </PasswordWrapper>
        </>
    )
}
