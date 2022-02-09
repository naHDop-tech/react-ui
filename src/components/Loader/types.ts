import { Colors, Sizes } from '@ui/types'

export interface ILoaderProps {
    isLoading: boolean
    size?: Sizes
    wide?: boolean
    color?: Colors
    speed?: 'slow' | 'normal' | 'fast'
}