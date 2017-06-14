import { 
  ExtensionImplementation,
  MatchingExtension, FormattingExtension,
  Formatter,
  ExtensionProvider,
  provideExtension
} from './interfaces'
import { 
  ExtensionTypes, ExtensionType,
  ExtensionTypeNames,
  ExtensionTypeByName,
  isExtensionType, isExtensionTypeName
} from './types'
export * from './enums'
export * from './types'
export * from './interfaces'

export function nameOfType <T extends ExtensionTypes> ( type:T ):ExtensionTypeNames {
  if ( 'number' === typeof type )
  {
    const name = ExtensionTypes[<number>type]
    if ( isExtensionTypeName(name) )
    {
      return name
    }
  }
  else {
    return nameOfType(ExtensionTypes[<string>type])
  }
}

export function isMatchingExtension <T extends ExtensionType>( other:any ):other is MatchingExtension<T> {
  return ( 'regex' in other && 'replace' in other )
}

export function isFormattingExtension <T extends ExtensionType>( other:any ):other is FormattingExtension<T> {
  return ( 'filter' in other && 'function' === typeof other.filter && other.filter.length > 0 )
}

export function isExtensionImplementation <T extends ExtensionType> ( other:any ):other is ExtensionImplementation<T> {
  return isFormattingExtension(other) || isMatchingExtension(other)
}

export function isExtensionProvider ( other:any ):other is ExtensionProvider {
  return ( 'name' in other && 'function' === typeof other )
}

export function isExtensionKey ( other:any ):other is string {
  return ( 'string' === typeof other )
}