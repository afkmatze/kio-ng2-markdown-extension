import { ExtensionTypes } from '../enums/extension.enum';
export declare const ExtensionTypeByName: {
    lang: ExtensionTypes;
    output: ExtensionTypes;
};
export declare type ExtensionTypeNames = keyof typeof ExtensionTypeByName;
export declare type ExtensionType = ExtensionTypes.lang | ExtensionTypes.output;
