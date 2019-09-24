export interface Error {
    path: string[];
    key: string;
    message: string;
    meta?: any;
    extensions?: any[];
}
export declare function make(message: string, key?: string | null, path?: string[], meta?: any): Error;
