# stylelint-config-modern

[![NPM version](https://img.shields.io/npm/v/stylelint-config-modern.svg)](https://www.npmjs.org/package/stylelint-config-modern) [![Build Status](https://github.com/moderncss/stylelint-config/workflows/CI/badge.svg)](https://github.com/moderncss/stylelint-config/actions)

> The modern CSS shareable config for Stylelint.

It complements Stylelint's [standard config](https://www.npmjs.com/package/stylelint-config-standard) by turning on additional lint rules to enforce modern CSS features and conventions.

It works alongside the textual rules and examples at [moderncss.ai](https://moderncss.ai).

## Installation

Install using `npm` (or `bun`, `pnpm` etc.):

```bash
npm install stylelint-config-modern --save-dev
```

## Usage

Add it to your `stylelint` config:

```diff js
export default {
   extends: [
    "stylelint-config-standard",
+   "stylelint-config-modern"
  ],
};
```

### Directionality

This config sets [`languageOptions.directionality`](https://stylelint.io/user-guide/configure#directionality) to the CSS initial values (`block: "top-to-bottom"`, `inline: "left-to-right"`).

If your project is right-to-left, vertical, or bidirectional, override it in your config.

For example, for right-to-left:

```diff js
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-modern"
  ],
+ languageOptions: {
+   directionality: { block: "top-to-bottom", inline: "right-to-left" },
+ },
};
```

### Cross-file references (opt-in)

If you use the modern CSS features of custom properties and `@custom-media`, you may want to check they're known across your project by using the [`referenceFiles`](https://stylelint.io/user-guide/configure#referencefiles) configuration property.

For example, if they're defined in a `tokens` directory:

```diff js
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-modern"
  ],
+ referenceFiles: ["tokens/*.css"],
+ rules: {
+   "no-unknown-custom-properties": true,
+   "no-unknown-custom-media": true,
+ },
};
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
