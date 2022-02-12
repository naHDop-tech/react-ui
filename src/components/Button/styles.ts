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
    display: flex;
    justify-content: center;

    div {
      margin-left: 10px;
    }

    ${({ size = 'medium', outline = false }) => {
      if (size === 'large') {
        return css`
          padding: ${outline ? '10px 14px' : '11px 15px'};
        `
      }
      if (size === 'medium') {
        return css`
          padding: ${outline ? '4px 12px' : '5px 13px'};
        `
      }
      if (size === 'small') {
        return css`
          font-size: 12px;
          line-height: 20px;
          padding: ${outline ? '2px 8px' : '3px 9px'};
        `
      }
    }}

    color: ${({ color }) => color === 'disabled' || color === 'inactive' ? COLOR_MAP.hex.common.disabledText : COLOR_MAP.hex.common.pureWhite};
    background-color: ${({ color = 'primary' }) => COLOR_MAP.hex.primary[color]};

    ${({ disabled = false, isLoading = false }) => (disabled || isLoading) && 
      css`
        opacity: 0.8;
        pointer-events: none;
      `
    };

    ${({ wide = false }) => wide && 
      css`
        width: 100%;
      `
    };

    ${({ outline = false, color = 'primary' }) => outline && 
      css`
        color: ${COLOR_MAP.hex.primary[color]};
        background-color: transparent;
        border: 1px solid ${COLOR_MAP.hex.primary[color]};
      `
    };

    &:hover {
      filter: brightness(107%);
    }
    &:active {
      transform: translateY(1px);
    }
`;
