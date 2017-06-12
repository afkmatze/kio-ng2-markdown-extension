/// <reference types="showdown" />
import { ConverterOptions, Converter } from 'showdown';
import { ExtensionType } from '../types/extension';
import { ExtensionTypes } from '../enums/extension.enum';
export interface Formatter {
    (text: string, converter: Converter, options?: ConverterOptions): string;
}
export interface Extension<T extends ExtensionType> {
    type: T;
}
export interface MatchingExtension<T extends ExtensionType> extends Extension<T> {
    regex: RegExp | string;
    replace: Formatter | string;
}
export interface FormattingExtension<T extends ExtensionType> extends Extension<T> {
    format: Formatter;
}
export declare type ExtensionImplementation<T extends ExtensionType> = MatchingExtension<T> | FormattingExtension<T>;
export interface LangExtension extends Extension<ExtensionTypes.lang> {
}
export interface OutputExtension extends Extension<ExtensionTypes.output> {
}
