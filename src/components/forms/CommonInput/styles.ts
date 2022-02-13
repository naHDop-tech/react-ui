import { HTMLProps } from 'react'
import styled, { css } from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ICommonInputProps } from './types'

const onActiveMixin = css`
    outline: none;
    box-shadow: none;
    background: ${COLOR_MAP.hex.common.pureWhite};
`

const smallTextMixin = css`
    font-size: 12px;
    line-height: 18px;
`

export const Wrapper = styled.div<Pick<ICommonInputProps, 'hasError'>>`
    font-family: inherit;

    .label {
        ${smallTextMixin}
        line-height: 18px;

        letter-spacing: -0.24px;

        ${({ hasError }) => hasError && 
            css`
                color: ${COLOR_MAP.hex.primary.error};
            `
        }
    }

    .error-message {
        font-weight: 400;
        ${smallTextMixin}

        letter-spacing: -0.08px;

        color: ${COLOR_MAP.hex.primary.error};
    }
`

export const BaseInput = styled.input<ICommonInputProps>`
    font-family: inherit;
    padding: 8px 12px;

    background: ${COLOR_MAP.hex.common.lightBackground};

    border: 1px solid ${COLOR_MAP.rgba.greyBorder};
    box-shadow: 0px 1px 1px ${COLOR_MAP.rgba.greyShadow},
        0px 3px 2px ${COLOR_MAP.rgba.greyShadow};

    &:focus {
        ${onActiveMixin}
        border-bottom: 2px solid ${COLOR_MAP.hex.primary.primary};
    }

    ${({ hasError }) => hasError && 
        css`
            box-shadow: none;
            border-bottom: 2px solid ${COLOR_MAP.hex.primary.error};

            &:focus {
                ${onActiveMixin}
                border-bottom: 2px solid ${COLOR_MAP.hex.primary.error};
            }
        `
    }

    ${({ wide }) => wide && 'width: 100%'};

    ${({ readOnly }) => readOnly && css`
        background: ${COLOR_MAP.hex.common.pureWhite};

        &:focus {
            border: 1px solid ${COLOR_MAP.rgba.greyBorder};
            box-shadow: 0px 1px 1px ${COLOR_MAP.rgba.greyShadow},
                0px 3px 2px ${COLOR_MAP.rgba.greyShadow};
            border-bottom: 1px solid ${COLOR_MAP.rgba.greyBorder};
        }
    `};

    ${({ disabled }) => disabled && css`
        border: 1px solid rgba(15, 39, 118, 0.1);
        background: ${COLOR_MAP.hex.common.disabledBackdground};
        color: ${COLOR_MAP.hex.common.disabledText};
    `}
`