async function write(ctx) {
    const bufId = ctx.currentBufferId;
    try {
        const written = Rsvim.buf.writeSync(bufId);
        Rsvim.cmd.echo(`Saved buffer ${bufId}, ${written} bytes have been written.`);
    }
    catch (exception) {
        Rsvim.cmd.echo("Bye");
    }
}
const _default = {
    name: "write",
    callback: write,
    attributes: { bang: false, nargs: "0" },
    options: { alias: "w", force: true },
};
export default _default;
