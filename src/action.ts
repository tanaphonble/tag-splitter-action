import * as core from "@actions/core";
import { splitTag } from "./usecase";

export default async () => {
  const { GITHUB_REF } = process.env;
  const tag = splitTag(`${GITHUB_REF}`);
  console.log("tag", tag);

  if (!tag.success) core.setFailed("invalid tag");

  console.log("set name:", tag.name);
  core.setOutput("name", tag.name);
  console.log("set version:", tag.version);
  core.setOutput("version", tag.version);
};
