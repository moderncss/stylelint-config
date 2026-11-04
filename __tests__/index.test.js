import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { before, describe, it } from "node:test";

import stylelint from "stylelint";

import config from "../index.js";

const validCss = await readFile("./__tests__/valid.css", "utf8");
const invalidCss = await readFile("./__tests__/invalid.css", "utf8");

describe("flags no warnings with valid css", () => {
  let result;

  before(async () => {
    result = await stylelint.lint({
      code: validCss,
      config,
    });
  });

  it("has no errors", () => {
    assert.equal(result.errored, false);
  });

  it("flags no warnings", () => {
    assert.equal(result.results[0].warnings.length, 0);
  });
});

describe("flags warnings with invalid css", () => {
  let result;

  before(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it("includes an error", () => {
    assert.equal(result.errored, true);
  });

  it("flags two warnings", () => {
    assert.equal(result.results[0].warnings.length, 2);
  });

  it("has correct warnings", () => {
    assert.deepEqual(
      result.results[0].warnings.map(({ line, column, rule, severity, text }) => ({
        line,
        column,
        rule,
        severity,
        text,
      })),
      [
        {
          line: 2,
          column: 12,
          rule: "display-notation",
          severity: "error",
          text: 'Expected "block" to be "block flow" (display-notation)',
        },
        {
          line: 3,
          column: 3,
          rule: "property-layout-mappings",
          severity: "error",
          text: 'Expected "margin-left" to be "margin-inline-start" (property-layout-mappings)',
        },
      ],
    );
  });
});

describe("flags no warnings when extended by package name", () => {
  let result;

  before(async () => {
    result = await stylelint.lint({
      code: validCss,
      config: { extends: "stylelint-config-modern" },
    });
  });

  it("has no errors", () => {
    assert.equal(result.errored, false);
  });

  it("flags no warnings", () => {
    assert.equal(result.results[0].warnings.length, 0);
  });
});
