import styled from 'styled-components'

import { BaseInput, Wrapper } from '@components/forms/CommonInput/styles'

export const Input = styled(BaseInput)``

export const NumberWrapper = styled(Wrapper)`
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
`