declare function quit(ctx: any): Promise<void>;
declare const _default: {
    name: string;
    callback: typeof quit;
    attributes: {
        bang: boolean;
        nargs: string;
    };
    options: {
        alias: string;
        force: boolean;
    };
};
export default _default;
