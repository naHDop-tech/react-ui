import styled from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ICommonInputProps } from './types'

export const BaseInput = styled.input<ICommonInputProps>`
    padding: 8px 12px;
    /* width: 100%; */
    background: ${COLOR_MAP.lightBackground};

    border: 1px solid rgba(15, 39, 118, 0.1);
    box-shadow: 0px 1px 1px rgba(152, 162, 179, 0.1), 0px 3px 2px rgba(152, 162, 179, 0.1);

    &:focus{
        outline: none;
        background: ${COLOR_MAP.pureWhite};
        border-bottom: 2px solid ${COLOR_MAP.primary};
    }
`