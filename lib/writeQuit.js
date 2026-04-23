import quit from "./quit";
import write from "./write";
async function writeQuit(ctx) {
    await write.callback(ctx);
    await quit.callback(ctx);
}
const _default = {
    name: "writeQuit",
    callback: writeQuit,
    attributes: { bang: false, nargs: "0" },
    options: { alias: "wq", force: true },
};
export default _default;
