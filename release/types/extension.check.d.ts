import { ExtensionTypeNames, ExtensionType } from './extension';
export declare function isExtensionType<T extends ExtensionType>(other: any): other is T;
export declare function isExtensionTypeName<T extends ExtensionTypeNames, K extends ExtensionType>(other: any, type?: K): other is T;
