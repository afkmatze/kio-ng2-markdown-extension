import { ExtensionTypeNames, ExtensionType, ExtensionTypes, ExtensionTypeByName } from './extension'

export function isExtensionType <T extends ExtensionType> ( other:any ):other is T {
  return (other in ExtensionTypes && 'number' === typeof other)
}
export function isExtensionTypeName <T extends ExtensionTypeNames, K extends ExtensionType> ( other:any, type?:K ):other is T {
  if ( ( 'string' !== typeof other ) || ( type && ExtensionTypeByName[other] !== type ) )
  {
    return false
  }
  return (other in ExtensionTypeByName)
}