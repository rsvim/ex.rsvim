# ex.rsvim

<a href="https://www.npmjs.com/package/@rsvim/ex.rsvim"><img alt="rsvim" src="https://img.shields.io/npm/v/%40rsvim%2Fex.rsvim" /></a>

## About

This plugin implements [Vim](https://www.vim.org/)'s builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for Rsvim, aims to provide a compatible user experience on command-line.

## Installation

First define Rsvim config home directory:

```bash
export RSVIM_CONFIG_HOME=$XDG_CONFIG_HOME/rsvim     # use $XDG_CONFIG_HOME
# or
export RSVIM_CONFIG_HOME=$HOME/.rsvim               # use $HOME
```

Then install with either git or npm.

### git

> [!TIP]
>
> **Which version should I use?**
>
> - For release version of Rsvim, use a **"x.y.?"** branch, for example use "v0.1.x" branch for Rsvim v0.1.2.
> - For nightly or main branch of Rsvim, use "main" branch since it is always consistent with Rsvim project's main branch.

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
```

The `setup` function accepts an optional object that contains all options, by default it is:

https://github.com/rsvim/ex.rsvim/blob/1f09822850f2d70af712c7d62eb5b08c84c647e2/src/index.ts?plain=1#L32-L36

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

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i` to install python, node and other npm cli tools.
3. Run `npm i` to install dependencies.

To sync Rsvim specific API declarations (e.g. `@types/rsvim`), please follow below steps:

1. Clone [rsvim](https://github.com/rsvim/rsvim) repo in the sibling directory under the same parent directory as _this_ repo.
2. Run `./sync.py` to copy typescript API declarations file to `./types` directory.

To format source code, please run command `prettier -w .` (or `npm run prettier`).

To compile typescript into javascript, please run command `tsc`.

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under [Vim License](https://github.com/rsvim/ex.rsvim/blob/main/LICENSE.txt).
