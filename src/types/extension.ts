import { ExtensionTypes } from '../enums/extension.enum'

export const ExtensionTypeByName = {
  lang: ExtensionTypes.lang,
  output: ExtensionTypes.output
}

export type ExtensionTypeNames = keyof typeof ExtensionTypeByName
export type ExtensionType = ExtensionTypes.lang|ExtensionTypes.output
