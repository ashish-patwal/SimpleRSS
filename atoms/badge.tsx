import {
  createRestyleComponent,
  createVariant,
  VariantProps
} from '@shopify/restyle'
import { Theme } from 'themes'
import Box, { BoxProps } from './box'

const Badge = createRestyleComponent<
  VariantProps<Theme, 'badgeVariants'> & BoxProps,
  Theme
>([createVariant({ themeKey: 'badgeVariants' })], Box)

export default Badge
