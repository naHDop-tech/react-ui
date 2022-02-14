import React, { FC } from 'react'

import { CommonInput } from '@components/forms/CommonInput'
import { ICommonInputProps } from '@components/forms/CommonInput/types'

export const NumberInput: FC<Omit<ICommonInputProps, 'type'>> = (props): JSX.Element => {
  return <CommonInput type="number" {...props}/>
}
