export async function write(ctx: any): Promise<void> {
  const bufId = ctx.currentBufferId as number;
  try {
    const written = Rsvim.rt.writeSync(bufId);
    Rsvim.cmd.echo(
      `Saved buffer ${bufId}, ${written} bytes have been written.`,
    );
  } catch (exception) {
    Rsvim.cmd.echo("Bye");
  }
}
