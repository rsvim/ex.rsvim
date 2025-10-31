export type ExAttributes = {
    bang: boolean;
    nargs: "0" | "1" | "*" | "+" | "?";
};
export type ExOptions = {
    force: boolean;
    alias?: string;
};
export type ExDefinition = {
    name: string;
    callback: (ctx: any) => Promise<void>;
    attributes: ExAttributes;
    options: ExOptions;
};
export type SetupOptions = {
    force: boolean;
};
declare function setup(setupOptions?: SetupOptions): void;
declare const _default: {
    setup: typeof setup;
};
export default _default;
