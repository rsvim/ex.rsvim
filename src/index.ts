import { quit } from "./quit.ts";
import { write } from "./write.ts";

const ex = {
  setup(): void {
    Rsvim.cmd.create("quit", quit, undefined, { alias: "q" });
    Rsvim.cmd.create("write", write, undefined, { alias: "w" });
  },
};
