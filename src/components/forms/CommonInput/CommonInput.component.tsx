import React from 'react'

import { BaseInput } from './styles'
import { ICommonInputProps } from './types'

export function CommonInput(props: ICommonInputProps) {
  return (
    <>
        <BaseInput {...props} />
    </>
  )
}
