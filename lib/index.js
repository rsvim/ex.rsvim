import { quit } from "./quit.ts";
import { write } from "./write.ts";
function setDefaultSetupOptions(options, defaultOptions) {
  for (const [key, val] of Object.entries(defaultOptions)) {
    if (!Object.hasOwn(options, key)) {
      Object.defineProperty(options, key, { value: val, writable: false });
    }
  }
}
const ex = {
  setup(options) {
    options = options ?? { force: true };
    setDefaultSetupOptions(options, { force: true });
    Rsvim.cmd.create("quit", quit, undefined, { alias: "q" });
    Rsvim.cmd.create("write", write, undefined, { alias: "w" });
  },
};
