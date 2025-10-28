export async function quit(ctx: any): Promise<void> {
  Rsvim.rt.exit();
  Rsvim.cmd.echo("Bye");
}
