import { splitTag } from "../src/usecase";

describe("usecase test", () => {
  describe("normal case", () => {
    it("split tag correctly", () => {
      const input = "my-service-1#1.0.0";
      const expectedOutput = {
        name: "my-service-1",
        version: "1.0.0",
        success: true,
      };

      const tag = splitTag(input);
      expect(splitTag(input)).toStrictEqual(expectedOutput);
    });

    it("split GITHUB_REF heads correctly", () => {
      const input = "refs/heads/my-service-2#2.0.0";
      const expectedOutput = {
        name: "my-service-2",
        version: "2.0.0",
        success: true,
      };

      const tag = splitTag(input);
      expect(tag).toStrictEqual(expectedOutput);
    });

    it("split GITHUB_REF tags correctly", () => {
      const input = "refs/tags/my-service-3#3.0.0";
      const expectedOutput = {
        name: "my-service-3",
        version: "3.0.0",
        success: true,
      };

      const tag = splitTag(input);
      expect(tag).toStrictEqual(expectedOutput);
    });

    it("split tag failed", () => {
      const input = "x";
      const expectedOutput = {
        success: false,
      };

      const tag = splitTag(input);
      expect(tag).toStrictEqual(expectedOutput);
    });
  });
});
