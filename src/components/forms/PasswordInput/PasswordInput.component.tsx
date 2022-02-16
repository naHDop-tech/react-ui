import React, { FC } from 'react'

import { ICommonInputProps } from '@components/forms/CommonInput/types'
import { PasswordWrapper, Input } from './styles'

import LockIcon from '/static/svg/password_lock_icon.svg'

export const PasswordInput: FC<Omit<ICommonInputProps, 'type'>> = (props): JSX.Element => {
    const { label, errorMessage, hasError } = props
    
    return (
        <>
            <PasswordWrapper hasError={hasError}>
                {label && <div className='label'>{label}</div>}
                <Input type="password" {...props} />
                <img src={LockIcon} alt="logo" role="img" className="icon" />
                {hasError && <div className='error-message'>{errorMessage}</div>}
            </PasswordWrapper>
        </>
    )
}
