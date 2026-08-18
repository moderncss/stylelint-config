import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { before, describe, it } from "node:test";

import stylelint from "stylelint";

import config from "../index.js";

describe("flags no warnings with valid css", () => {
  let result;

  before(async () => {
    const validCss = await readFile("./__tests__/valid.css", "utf8");
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
    const invalidCss = await readFile("./__tests__/invalid.css", "utf8");
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

  it("flags the display-notation warning", () => {
    const warning = result.results[0].warnings.find((w) => w.rule === "display-notation");
    assert.equal(warning.text, 'Expected "block" to be "block flow" (display-notation)');
    assert.equal(warning.severity, "error");
    assert.equal(warning.line, 2);
    assert.equal(warning.column, 12);
  });

  it("flags the property-layout-mappings warning", () => {
    const warning = result.results[0].warnings.find((w) => w.rule === "property-layout-mappings");
    assert.equal(
      warning.text,
      'Expected "margin-left" to be "margin-inline-start" (property-layout-mappings)',
    );
    assert.equal(warning.severity, "error");
    assert.equal(warning.line, 3);
    assert.equal(warning.column, 3);
  });
});
