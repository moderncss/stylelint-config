import { beforeAll, describe, expect, it } from "bun:test";

import stylelint from "stylelint";

import config from "../index.js";

describe("flags no warnings with valid css", () => {
  let result;

  beforeAll(async () => {
    const validCss = await Bun.file("./__tests__/valid.css").text();
    result = await stylelint.lint({
      code: validCss,
      config,
    });
  });

  it("has no errors", () => {
    expect(result.errored).toBe(false);
  });

  it("flags no warnings", () => {
    expect(result.results[0].warnings.length).toBe(0);
  });
});

describe("flags warnings with invalid css", () => {
  let result;

  beforeAll(async () => {
    const invalidCss = await Bun.file("./__tests__/invalid.css").text();
    result = await stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it("includes an error", () => {
    expect(result.errored).toBe(true);
  });

  it("flags one warning", () => {
    expect(result.results[0].warnings.length).toBe(1);
  });

  it("flags the correct warning", () => {
    const [warning] = result.results[0].warnings;
    expect(warning.text).toBe('Expected "block" to be "block flow" (display-notation)');
    expect(warning.rule).toBe("display-notation");
    expect(warning.severity).toBe("error");
    expect(warning.line).toBe(2);
    expect(warning.column).toBe(12);
  });
});
