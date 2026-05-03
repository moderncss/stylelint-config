export default {
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    },
  },
  rules: {
    "color-named": [
      "never",
      {
        message: (name) => `Disallowed named color "${name}". Use \`oklch\` instead`,
      },
    ],
    "color-no-hex": [
      true,
      {
        message: (hex) => `Disallowed hex color "${hex}". Use \`oklch\` instead`,
      },
    ],
    "display-notation": "full",
    "function-disallowed-list": [
      ["rgb", "hsl", "hwb", "lab", "lch", "oklab"],
      {
        message: (fn) => `Disallowed color function "${fn}". Use \`oklch\` instead`,
      },
    ],
    "property-layout-mappings": "flow-relative",
    "relative-selector-nesting-notation": "implicit",
    "unit-layout-mappings": "flow-relative",
    "value-keyword-layout-mappings": [
      "flow-relative",
      { ignoreKeywords: ["caption-side", "offset-anchor", "offset-position"] },
    ],
  },
};
