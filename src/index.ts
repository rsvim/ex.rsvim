import { quit } from "./quit.js";
import { write } from "./write.js";

type SetupOptions = {
  force: boolean;
};

function setDefaultSetupOptions(options: object, defaultOptions: SetupOptions) {
  for (const [key, val] of Object.entries(defaultOptions)) {
    if (!Object.hasOwn(options, key)) {
      Object.defineProperty(options, key, { value: val, writable: false });
    }
  }
}

const ex = {
  setup(options?: SetupOptions): void {
    options = options ?? { force: true };
    setDefaultSetupOptions(options, { force: true });

    Rsvim.cmd.create("quit", quit, undefined, { alias: "q" });
    Rsvim.cmd.create("write", write, undefined, { alias: "w" });
  },
};
