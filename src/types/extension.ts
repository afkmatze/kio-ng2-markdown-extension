import { ExtensionTypes } from '../enums/extension.enum'
export { ExtensionTypes }

export const ExtensionTypeByName = {
  lang: ExtensionTypes.lang,
  output: ExtensionTypes.output
}
export type ExtensionTypeNameMap = typeof ExtensionTypeByName
export type ExtensionTypeNames = keyof ExtensionTypeNameMap
export type ExtensionType = ExtensionTypes.lang|ExtensionTypes.output
