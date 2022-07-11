import {
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps,
  VariantProps
} from '@shopify/restyle'
import { TextInput, TextInputProps } from 'react-native'
import { Theme } from 'themes'

const textInput = createRestyleComponent<
  VariantProps<Theme, 'textInputVariants'> &
  SpacingProps<Theme> &
  ColorProps<Theme> &
  TextShadowProps<Theme> &
  TypographyProps<Theme> &
  TextInputProps,
  Theme
>(
  [
    spacing,
    color,
    textShadow,
    typography,
    createVariant({ themeKey: 'textInputVariants' })
  ],
  TextInput
)

export default textInput
