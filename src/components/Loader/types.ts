import { PrimaryColors, Sizes } from '@ui/types'

export interface ILoaderProps {
    isLoading: boolean
    size?: Sizes
    wide?: boolean
    color?: PrimaryColors
    speed?: 'slow' | 'normal' | 'fast'
}