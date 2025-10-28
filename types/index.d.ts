export type CommandAttributes = {
    bang: boolean;
    nargs: "0" | "1" | "*" | "+" | "?";
};
export type CommandOptions = {
    force: boolean;
    alias?: string;
};
export type CommandDefinition = {
    name: string;
    callback: (ctx: any) => Promise<void>;
    attributes: CommandAttributes;
    options: CommandOptions;
};
type SetupOptions = {
    force: boolean;
};
declare function setup(setupOptions?: SetupOptions): void;
declare const _default: {
    setup: typeof setup;
};
export default _default;
