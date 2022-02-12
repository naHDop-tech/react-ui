import styled from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ICommonInputProps } from './types'

export const BaseInput = styled.input<ICommonInputProps>`
    padding: 8px 12px;
    /* width: 100%; */
    background: ${COLOR_MAP.hex.common.lightBackground};

    border: 1px solid ${COLOR_MAP.rgba.greyBorder};
    box-shadow: 0px 1px 1px ${COLOR_MAP.rgba.greyShadow}, 0px 3px 2px ${COLOR_MAP.rgba.greyShadow};

    &:focus{
        outline: none;
        background: ${COLOR_MAP.hex.common.pureWhite};
        border-bottom: 2px solid ${COLOR_MAP.hex.primary.primary};
    }
`