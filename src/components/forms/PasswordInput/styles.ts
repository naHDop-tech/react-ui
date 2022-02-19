import styled from 'styled-components'

import { BaseInput, Wrapper } from '@components/forms/CommonInput/styles'

export const PasswordWrapper = styled(Wrapper)`
    position: relative;

    .icon {
        position: absolute;
        left: 10px;
        pointer-events: none;
        top: 26px;
    }
`

export const Input = styled(BaseInput)`
    padding-left: 30px;
`
