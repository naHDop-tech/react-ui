import { PromaryColors, Sizes } from '@ui/types'

export interface ILoaderProps {
    isLoading: boolean
    size?: Sizes
    wide?: boolean
    color?: PromaryColors
    speed?: 'slow' | 'normal' | 'fast'
}