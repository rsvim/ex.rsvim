# ex.rsvim

Ex commands plugin for the [Rsvim](https://github.com/rsvim/rsvim) editor.

## About

This plugin implements builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for Rsvim, aims to provide a user experience compatible with [Vim](https://www.vim.org/).

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

> [!TIP] **Which version should I use?**
>
> If you are using a release version of Rsvim, please use a branch with the same version of this plugin, for example use "v0.1.2" branch from this plugin for Rsvim v0.1.2 release.
>
> If you are using a nightly or dev version of Rsvim, please use the "main" branch of this plugin since it is always consistent with Rsvim project's main branch.

## Setup

Setup this plugin in Rsvim config entry script:

```javascript
// Setup synchronously:
import ex from "@rsvim/ex.rsvim";
ex.setup();
```

The `setup` function accepts an optional object that contains all options, by default it is:

```javascript
{
  // Override existing command when creating commands, if encounter same name or alias.
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
| 🚧     | `quit`  | `q`   | Quit editor                       | v0.1.2        |
| 🚧     | `write` | `w`   | Save current buffer to filesystem | v0.1.2        |

## Development

Contributions are always welcomed :)

Source typescript files are placed in the `src` directory, compiled javascript files are placed in the `lib` directory, generated type files (`.d.ts`) are placed in the `types` directory. Please **DO NOT** manually edit files under `lib` and `types` directories.

To development this plugin, please setup the development environment with:

1. Install [mise](https://github.com/jdx/mise), and run `mise i` to install python, node and other npm cli tools.
2. Run `npm i` to install dependencies.
3. Run `./sync.py` to sync Rsvim specific APIs declarations (e.g. `@types/rsvim`) and put in `./types` directory, it helps typescript recognize the `Rsvim` global object.

To format source code, please run `npm run prettier` command, it will format all the typescript files under `src` directory.

To compile typescript into javascript, please run `npm run tsc` command, it will compile typescript into javascript (in the `lib` directory) and generate type files (in the `types` directory).

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under [Vim License](https://github.com/rsvim/ex.rsvim/blob/main/LICENSE.txt).
