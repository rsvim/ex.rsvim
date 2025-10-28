# ex.rsvim

Ex commands plugin for the [Rsvim](https://github.com/rsvim/rsvim) editor.

## About

This plugin implements builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for [Rsvim](https://github.com/rsvim/rsvim) editor, aims to provide a user experience compatible with [Vim](https://www.vim.org/).

## Installation

```bash
# Define Rsvim config home
export RSVIM_CONFIG_HOME=$XDG_CONFIG_HOME/rsvim     # Use $XDG_CONFIG_HOME
# or
export RSVIM_CONFIG_HOME=$HOME/.rsvim               # Use $HOME

# Download with git
git clone --depth=1 https://github.com/rsvim/ex.rsvim $RSVIM_CONFIG_HOME/@rsvim/ex.rsvim

# Or with npm
cd $RSVIM_CONFIG_HOME
npm install @rsvim/ex.rsvim
```
