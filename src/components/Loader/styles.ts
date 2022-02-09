import styled from 'styled-components'

import { COLOR_MAP } from '@ui/colorMap'
import { ILoaderProps } from './types'
export const Wrapper = styled.div`
    margin: 14px;
`

export const Spinner = styled.div<Omit<ILoaderProps, 'isLoading'>>`
    border: 16px solid ${COLOR_MAP.lightGrey};
    border-top: 16px solid ${({ color = 'primary' }) => COLOR_MAP[color]};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`