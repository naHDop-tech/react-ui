import React, { FC } from 'react'

// import { PasswordWrapper, Input } from './styles'

import { CommonInput } from '@components/forms/CommonInput'
import { ICommonInputProps } from '@components/forms/CommonInput/types'

// import LockIcon from './img/password_lock_icon.svg'

export const PasswordInput: FC<Omit<ICommonInputProps, 'type'>> = (props): JSX.Element => {
    // const { label, errorMessage, hasError } = props
    
    // return (
    //     <>
    //         <PasswordWrapper hasError={hasError}>
    //             {label && <div className='label'>{label}</div>}
    //             <Input type="password" {...props} />
    //             <img src={LockIcon} alt="logo" role="img" className="icon" />
    //             {hasError && <div className='error-message'>{errorMessage}</div>}
    //         </PasswordWrapper>
    //     </>
    // )
    return <CommonInput type='password' {...props} />
}
