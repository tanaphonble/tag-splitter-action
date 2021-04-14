import { splitTag } from "../src/usecase";
describe("tag-splitter-action", () => {
    describe("normal case", () => {
        it("split tag correctly", () => {
            const input = "my-service-1#1.0.0";
            const expectedOutput = { name: "my-service-1", version: "1.0.0" };
            const tag = splitTag(input);
            expect(splitTag(input)).toStrictEqual(expectedOutput);
        });
        it("split GITHUB_REF correctly", () => {
            const input = "refs/heads/my-service-2#2.0.0";
            const expectedOutput = { name: "my-service-2", version: "2.0.0" };
            const tag = splitTag(input);
            expect(tag).toStrictEqual(expectedOutput);
        });
    });
});
