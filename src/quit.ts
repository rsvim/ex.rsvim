async function quit(ctx: any): Promise<void> {
  Rsvim.rt.exit();
  Rsvim.cmd.echo("Bye");
}

const _default: CommandDefinition = {
  name: "quit",
  callback: quit,
  attributes: { bang: false, nargs: "0" },
  options: { alias: "q", force: true },
};

export default _default;
