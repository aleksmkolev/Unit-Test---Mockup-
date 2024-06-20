import { assert } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

// export { isOddOrEven } from main function
// npm init
// npm install mocha chai
// package.json "type": "module", "scripts": { "test": "mocha"},
// TO RUN : terminal: npm test

describe("test with non string value", () => {
  it("test with array", () => {
    assert.isNotOk(isOddOrEven(["Pesho"])), "result must be undefined";
  });

  it("Test with objet", () => {
    assert.equal(
      isOddOrEven({ name: "Gosho" }),
      undefined,
      "result must be undefined"
    );
  });

  it("Test with number", () => {
    assert.equal(isOddOrEven(5), undefined, "result must be undefined");
  });

  it("Test with null", () => {
    assert.equal(isOddOrEven(null), undefined, "result must be undefined");
  });
});

describe("test with string value", () => {
  it("test with even text length", () => {
    assert.equal(isOddOrEven("abcd"), "even", "result must be even");
  });

  it("test with odd text length", () => {
    assert.equal(isOddOrEven("abc"), "odd", "result must be odd");
  });
});
