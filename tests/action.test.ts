import action from "../src/action";
const core = require("@actions/core");

describe("action test", () => {
  describe("success case", () => {
    it("core outputs should be set on success", () => {
      let splitter = jest.fn().mockReturnValueOnce({
        name: "my-application",
        version: "1.0.0",
        success: true,
      });

      core.setOutput = jest.fn();

      action(splitter);

      expect(core.setOutput).toHaveBeenCalledWith("name", "my-application");
      expect(core.setOutput).toHaveBeenCalledWith("version", "1.0.0");
    });
  });

  describe("error case", () => {
    it("splitter not success so action throw error", () => {
      let splitter = jest.fn().mockReturnValueOnce({
        success: false,
      });

      const sut = () => {
        action(splitter);
      };

      expect(sut).toThrowError(
        "invalid tag, format must be name#versiob e.g. my-application#v1.0.0"
      );
    });
  });
});
