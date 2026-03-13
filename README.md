# stylelint-config-modern

[![NPM version](https://img.shields.io/npm/v/stylelint-config-modern.svg)](https://www.npmjs.org/package/stylelint-config-modern) [![Build Status](https://github.com/moderncss/stylelint-config/workflows/CI/badge.svg)](https://github.com/moderncss/stylelint-config/actions)

> The modern CSS shareable config for Stylelint.

It builds on Stylelint's [standard config](https://www.npmjs.com/package/stylelint-config-standard) and turns on additional lint rules to enforce modern CSS features and conventions.

It works alongside the textual rules and examples at [moderncss.ai](https://moderncss.ai).

## Installation

```bash
npm install stylelint-config-modern --save-dev
```

(or `bun`, `pnpm` etc.)

## Usage

Add it to your `stylelint` config:

```diff js
export default {
   "extends": [
    "stylelint-config-standard",
+   "stylelint-config-modern"
  ],
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
