import styled, { css } from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ILoaderProps } from './types'

const speedMap = Object.freeze({
    slow: '2s',
    normal: '1.5s',
    fast: '1s',
})

export const Spinner = styled.div<Omit<ILoaderProps, 'isLoading'>>`
    border-radius: 50%;

    ${({ size = 'medium', color = 'primary' }) => {
      if (size === 'large') {
        return css`
            width: 80px;
            height: 80px;

            border: 20px solid ${COLOR_MAP.hex.common.lightGrey};
            border-top: 20px solid ${COLOR_MAP.hex.primary[color]};
        `
      }
      if (size === 'medium') {
        return css`
            width: 40px;
            height: 40px;

            border: 10px solid ${COLOR_MAP.hex.common.lightGrey};
            border-top: 10px solid ${COLOR_MAP.hex.primary[color]};
        `
      }
      if (size === 'small') {
        return css`
            width: 16px;
            height: 16px;

            border: 3px solid ${COLOR_MAP.hex.common.lightGrey};
            border-top: 3px solid ${COLOR_MAP.hex.primary[color]};
        `
      }
    }}

    ${({ wide = false }) => wide && 
      css`
        width: 100%;
        height: 100%;
      `
    };

    ${({ speed = 'normal' }) => css`
        animation: spin ${speedMap[speed]} linear infinite
    `};

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`