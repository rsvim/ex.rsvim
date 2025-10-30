import quit from "./quit.js";
import write from "./write.js";
function setDefaultSetupOptions(options, defaultOptions) {
    for (const [key, val] of Object.entries(defaultOptions)) {
        if (!Object.hasOwn(options, key)) {
            Object.defineProperty(options, key, { value: val, writable: false });
        }
    }
}
const DefaultSetupOptions = {
    force: true,
};
function setup(setupOptions) {
    setupOptions = setupOptions ?? DefaultSetupOptions;
    setDefaultSetupOptions(setupOptions, DefaultSetupOptions);
    [quit, write].forEach((cmd) => {
        let options = cmd.options;
        if (typeof setupOptions.force === "boolean") {
            options.force = setupOptions.force;
        }
        Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
    });
    setTimeout(() => { }, 1);
}
export default { setup };
