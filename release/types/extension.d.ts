import { ExtensionTypes } from '../enums/extension.enum';
export { ExtensionTypes };
export declare const ExtensionTypeByName: {
    lang: ExtensionTypes;
    output: ExtensionTypes;
};
export declare type ExtensionTypeNameMap = typeof ExtensionTypeByName;
export declare type ExtensionTypeNames = keyof ExtensionTypeNameMap;
export declare type ExtensionType = ExtensionTypes.lang | ExtensionTypes.output;
