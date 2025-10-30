import { setTimeout } from "../vendor/types/00__web.js";
import quit from "./quit.js";
import write from "./write.js";

export type CommandAttributes = {
  bang: boolean;
  nargs: "0" | "1" | "*" | "+" | "?";
};

export type CommandOptions = {
  force: boolean;
  alias?: string;
};

export type CommandDefinition = {
  name: string;
  callback: (ctx: any) => Promise<void>;
  attributes: CommandAttributes;
  options: CommandOptions;
};

export type SetupOptions = {
  force: boolean;
};

function setDefaultSetupOptions(options: object, defaultOptions: SetupOptions) {
  for (const [key, val] of Object.entries(defaultOptions)) {
    if (!Object.hasOwn(options, key)) {
      Object.defineProperty(options, key, { value: val, writable: false });
    }
  }
}

const DefaultSetupOptions: SetupOptions = {
  force: true,
};

function setup(setupOptions?: SetupOptions): void {
  setupOptions = setupOptions ?? DefaultSetupOptions;
  setDefaultSetupOptions(setupOptions, DefaultSetupOptions);

  [quit, write].forEach((cmd) => {
    let options = cmd.options;
    if (typeof setupOptions.force === "boolean") {
      options.force = setupOptions.force;
    }
    Rsvim.cmd.create(cmd.name, cmd.callback, cmd.attributes, options);
  });
}

export default { setup };
