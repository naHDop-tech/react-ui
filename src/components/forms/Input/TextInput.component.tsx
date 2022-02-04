import { FC } from 'react'

import { StyledInput, StyledLabel, StyledMessage, StyledText } from './styles'
import { ITextInputProps } from './types'

export const TextInput: FC<ITextInputProps> = (props): JSX.Element => {
    const {id, disabled, label, message, error, success, onChange, placeholder, ...rest} = props

    return (
      <>
        <StyledLabel>
            <StyledText disabled={disabled} error={error}>{label}</StyledText>
        </StyledLabel>
        <StyledInput 
            id={id} 
            type="text" 
            onChange={onChange} 
            disabled={disabled} 
            error={error} 
            success={success} 
            placeholder={placeholder} 
            {...rest}
        />
        <StyledMessage>
            <StyledText error={error}>{message}</StyledText>
        </StyledMessage>
      </>
    )
}