# ex.rsvim

Ex commands plugin for the [Rsvim](https://github.com/rsvim/rsvim) editor.

## About

This plugin implements builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for Rsvim, aims to provide a user experience compatible with [Vim](https://www.vim.org/).

The main branch of this plugin is always consistent with Rsvim project's main branch, for a released version, please use the version branch, for example "v0.1.2".

Contributions are always welcomed :) .

## Installation

First define Rsvim config home directory:

```bash
export RSVIM_CONFIG_HOME=$XDG_CONFIG_HOME/rsvim     # use $XDG_CONFIG_HOME
# or
export RSVIM_CONFIG_HOME=$HOME/.rsvim               # use $HOME
```

Then install with either git or npm.

### git

```bash
# version branch
git clone --depth=1 --branch=v0.1.2 https://github.com/rsvim/ex.rsvim $RSVIM_CONFIG_HOME/@rsvim/ex.rsvim

# main branch
git clone --depth=1 https://github.com/rsvim/ex.rsvim $RSVIM_CONFIG_HOME/@rsvim/ex.rsvim
```

### npm

```bash
cd $RSVIM_CONFIG_HOME

# latest version
npm install @rsvim/ex.rsvim

# specified version
npm install @rsvim/ex.rsvim@v0.1.2

# main branch
npm install @rsvim/ex.rsvim@main
```

## Setup

Setup this plugin in Rsvim config entry script:

```javascript
// Setup synchronously:
import ex from "@rsvim/ex.rsvim";
ex.setup();

// Or setup asynchronously:
const ex = await import("@rsvim/ex.rsvim");
ex.setup();
```

## Configuration

By default this plugin will use below configuration:

```javascript
{
  // Override existing command when creating commands, if they have same command name or alias.
  force: true;
}
```

You can pass your own configuration options when setup:

```javascript
import ex from "@rsvim/ex.rsvim";
ex.setup({
  // Your configurations here...
});
```

## Commands Index

Vim contains a lot of ex commands, which cannot be done all at once. This section trace the status of each command with four symbols: 🚧 Working in Progress or Planned, ✅ Ready to use, 🔴 Not exist or Missing.

| Status | Command | Alias | Description                       | Since Version |
| ------ | ------- | ----- | --------------------------------- | ------------- |
| 🚧     | `quit`  | `q`   | Quit editor                       |               |
| 🚧     | `write` | `w`   | Save current buffer to filesystem |               |

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under [Vim License](https://github.com/rsvim/ex.rsvim/blob/main/LICENSE.txt).
