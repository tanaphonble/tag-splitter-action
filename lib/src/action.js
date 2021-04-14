import * as core from "@actions/core";
import { splitTag } from "./usecase";
export default async();
{
    const { GITHUB_REF } = process.env;
    const tag = splitTag(GITHUB_REF);
    if (!tag)
        core.setFailed("invalid tag");
    core.setOutput("name", tag.name);
    core.setOutput("version", tag.version);
}
;
