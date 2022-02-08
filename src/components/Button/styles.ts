import styled, { css } from 'styled-components'

import { IButtonProps } from './types'
import { COLOR_MAP } from '@ui/colorMap'

export const StyledButton = styled.button<IButtonProps>`
    border: none;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    font-weight: 400;
    border-radius: 4px;
    display: inline-block;
    ${({ size = 'large' }) => {
      if (size === 'large') {
        return css`
          padding: 10px 14px;
        `
      }
      if (size === 'medium') {
        return css`
          padding: 4px 12px;
        `
      }
      if (size === 'small') {
        return css`
          font-size: 12px;
          line-height: 20px;
          padding: 2px 8px;
        `
      }
    }}
    color: ${({ color }) => color === 'disabled' || color === 'inactive' ? COLOR_MAP.disabledText : COLOR_MAP.pureWhite};
    background-color: ${({ color = 'primary' }) => COLOR_MAP[color]};
    ${({ disabled = false }) => disabled && 
      css`
        opacity: 0.8;
        pointer-events: none;
      `
    };
    &:hover {
      filter: brightness(107%);
    }
    &:active {
      transform: translateY(1px);
    }
`;
