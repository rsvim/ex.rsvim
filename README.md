# ex.rsvim

<a href="https://www.npmjs.com/package/@rsvim/ex.rsvim"><img alt="rsvim" src="https://img.shields.io/npm/v/%40rsvim%2Fex.rsvim" /></a>
<a href="https://github.com/rsvim/ex.rsvim/actions/workflows/ci.yml"><img alt="ci.yml" src="https://img.shields.io/github/actions/workflow/status/rsvim/ex.rsvim/ci.yml?branch=main&label=ci" /></a>

## About

Implements [Vim](https://www.vim.org/)'s builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for Rsvim, provide a compatible user experience in command-line.

## Installation

First go to Rsvim config home directory:

```bash
cd $XDG_CONFIG_HOME/rsvim
# or
cd $HOME/.rsvim
```

<details>
<summary><small><i style="color: grey;">Which version should I use?</i></small></summary>
<small><i style="color: grey;">

<ul>
<li> For release version of Rsvim, use a "x.y.?" branch or tag. </li>
<li> For development branch of Rsvim, use "main" branch. </li>
</ul>

</i></small>

</details>

### git

```bash
# version branch
git clone --branch=v0.1.x https://github.com/rsvim/ex.rsvim @rsvim/ex.rsvim

# or main branch
git clone https://github.com/rsvim/ex.rsvim @rsvim/ex.rsvim
```

### npm

```bash
# tagged version
npm install @rsvim/ex.rsvim@v0.1.0

# or latest version
npm install @rsvim/ex.rsvim
```

## Setup

Setup in your config entry script:

```javascript
import ex from "@rsvim/ex.rsvim";
ex.setup();
```

The `setup` function accepts an optional object, by default is:

https://github.com/rsvim/ex.rsvim/blob/1f09822850f2d70af712c7d62eb5b08c84c647e2/src/index.ts?plain=1#L32-L36

You can pass your custom options when setup:

```javascript
import ex from "@rsvim/ex.rsvim";
ex.setup({
  // Your configurations here...
});
```

## Command Index

There are a lot of ex commands, which cannot be done all at once. This section trace the status of each command with below symbols:

- ✅ Almost compatible
- 🔰 Basically usable
- 🚧 Working in Progress
- 🔴 Missing

| Status | Command     | Alias | Description                                       | Since Version |
| ------ | ----------- | ----- | ------------------------------------------------- | ------------- |
| 🔰     | `quit`      | `q`   | Quit editor                                       | v0.1.x        |
| 🔰     | `write`     | `w`   | Save current buffer to filesystem                 | v0.1.x        |
| 🔰     | `writeQuit` | `wq`  | Save current buffer to filesystem and quit editor | v0.1.x        |

## Contribution

Contributions are always welcomed :)

### Project Structure

```
|-lib    // Compiled javascript files
|-src    // Typescript source files
|-types  // Typescript type declarations
```

> [!WARNING]
> Please **DO NOT** manually edit files under `lib` and `types`.

### Development Environment

Please setup the development environment with:

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i` to install python, node and other npm cli tools.
3. Run `npm i` to install dependencies.

Here are some useful tools:

- `npm run prettier`: Format source code.
- `npm run tsc`: Compile typescript to javascript and `.d.ts` declarations.

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under [Vim License](https://github.com/rsvim/ex.rsvim/blob/main/LICENSE.txt).
