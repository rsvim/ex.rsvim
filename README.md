# ex.rsvim

Ex commands plugin for the [Rsvim](https://github.com/rsvim/rsvim) editor.

## About

This plugin implements builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for [Rsvim](https://github.com/rsvim/rsvim) editor, aims to provide a user experience compatible with [Vim](https://www.vim.org/).

## Installation

First define Rsvim config home directory:

```bash
export RSVIM_CONFIG_HOME=$XDG_CONFIG_HOME/rsvim     # Use $XDG_CONFIG_HOME
# or
export RSVIM_CONFIG_HOME=$HOME/.rsvim               # Use $HOME
```

Then install with either git or npm:

```bash
# Download with git
git clone --depth=1 https://github.com/rsvim/ex.rsvim $RSVIM_CONFIG_HOME/@rsvim/ex.rsvim

# Or with npm
cd $RSVIM_CONFIG_HOME
npm install @rsvim/ex.rsvim
```

## Setup

Setup this plugin in Rsvim config entry script:

```javascript
const ex = import("@rsvim/ex.rsvim");
ex.setup();
```

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under [Vim License](https://github.com/rsvim/rsvim/blob/main/LICENSE.txt).
