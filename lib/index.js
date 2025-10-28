import quit from "./quit.js";
import write from "./write.js";
function setDefaultSetupOptions(options, defaultOptions) {
    for (const [key, val] of Object.entries(defaultOptions)) {
        if (!Object.hasOwn(options, key)) {
            Object.defineProperty(options, key, { value: val, writable: false });
        }
    }
}
function setup(setupOptions) {
    setupOptions = setupOptions ?? { force: true };
    setDefaultSetupOptions(setupOptions, { force: true });
    [quit, write].forEach((cmd) => {
        let options = cmd.options;
        if (typeof setupOptions.force === "boolean") {
            options.force = setupOptions.force;
        }
        Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
    });
}
export default { setup };
