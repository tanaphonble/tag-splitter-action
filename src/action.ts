import * as core from "@actions/core";
interface Tag {
  name?: string;
  version?: string;
  success: boolean;
}

interface SplitterFunc {
  (tag: string): Tag;
}

export default (splitter: SplitterFunc) => {
  const { GITHUB_REF } = process.env;
  const tag = splitter(`${GITHUB_REF}`);

  if (!tag.success) {
    throw new Error(
      "invalid tag, format must be name#versiob e.g. my-application#v1.0.0"
    );
  }

  console.log("tag", tag);
  console.log("set name:", tag.name);
  core.setOutput("name", tag.name);
  console.log("set version:", tag.version);
  core.setOutput("version", tag.version);
};
