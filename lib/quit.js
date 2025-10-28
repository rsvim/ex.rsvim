async function quit(ctx) {
    Rsvim.rt.exit();
    Rsvim.cmd.echo("Bye");
}
const _default = {
    name: "quit",
    callback: quit,
    attributes: { bang: false, nargs: "0" },
    options: { alias: "q", force: true },
};
export default _default;
