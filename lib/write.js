export async function write(ctx) {
    const bufId = ctx.currentBufferId;
    try {
        const written = Rsvim.rt.writeSync(bufId);
        Rsvim.cmd.echo(`Saved buffer ${bufId}, ${written} bytes have been written.`);
    }
    catch (exception) {
        Rsvim.cmd.echo("Bye");
    }
}
