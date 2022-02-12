import styled, { css } from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ICommonInputProps } from './types'

const onActiveMixin = css`
    outline: none;
    box-shadow: none;
    background: ${COLOR_MAP.hex.common.pureWhite};
`

export const BaseInput = styled.input<ICommonInputProps>`
    font-family: inherit;
    padding: 8px 12px;
    /* width: 100%; */
    background: ${COLOR_MAP.hex.common.lightBackground};

    border: 1px solid ${COLOR_MAP.rgba.greyBorder};
    box-shadow: 0px 1px 1px ${COLOR_MAP.rgba.greyShadow},
        0px 3px 2px ${COLOR_MAP.rgba.greyShadow};

    &:focus{
        ${onActiveMixin}
        border-bottom: 2px solid ${COLOR_MAP.hex.primary.primary};
    }

    ${({ hasError }) => hasError && 
        css`
            box-shadow: none;
            border-bottom: 2px solid ${COLOR_MAP.hex.primary.error};

            &:focus{
                ${onActiveMixin}
                border-bottom: 2px solid ${COLOR_MAP.hex.primary.error};
            }
        `
    }
`