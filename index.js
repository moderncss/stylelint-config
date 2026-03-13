export default {
  rules: {
    "color-named": [
      "never",
      {
        message: (name) => `Unexpected named color "${name}". Use \`oklch\` instead`,
      },
    ],
    "color-no-hex": [
      true,
      {
        message: (hex) => `Unexpected hex color "${hex}". Use \`oklch\` instead`,
      },
    ],
    "display-notation": "full",
    "function-disallowed-list": [
      ["rgb", "hsl", "hwb", "lab", "lch", "oklab"],
      {
        message: (fn) => `Unexpected function "${fn}". Use \`oklch\` instead`,
      },
    ],
  },
};
