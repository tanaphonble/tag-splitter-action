import { splitTag } from "../src/usecase";

describe("tag-splitter-action", () => {
  describe("normal case", () => {
    it("split tag correctly", () => {
      const input = "ref/head/my-service#1.0.0";
      const expectedOutput = "my-service";

      expect(splitTag(input)).toBe(expectedOutput);
    });
  });
});
