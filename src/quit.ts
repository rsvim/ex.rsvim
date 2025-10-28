async function quit(ctx: any): Promise<void> {
  Rsvim.rt.exit();
  Rsvim.cmd.echo("Bye");
}

export default {
  name: "quit",
  callback: quit,
  attributes: { bang: false, nargs: "0" },
  options: { alias: "q", force: true },
};
