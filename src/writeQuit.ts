import type { ExDefinition } from ".";
import type { RsvimCmd } from "../vendor/@rsvim/types/01__rsvim";
import quit from "./quit";
import write from "./write";

async function writeQuit(ctx: RsvimCmd.CommandContext): Promise<void> {
  await write.callback(ctx);
  await quit.callback(ctx);
}

const _default: ExDefinition = {
  name: "writeQuit",
  callback: writeQuit,
  attributes: { bang: false, nargs: "0" },
  options: { alias: "wq", force: true },
};

export default _default;
