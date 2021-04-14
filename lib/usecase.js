"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTag = void 0;
const nameSharpVersion = 2;
const splitTag = (tag) => {
    tag = tag.replace("refs/heads/", "");
    console.log("tag", tag);
    const splitted = tag.split("#");
    if (splitted.length !== nameSharpVersion) {
        return { success: false };
    }
    const [name, version] = splitted;
    return { name, version, success: true };
};
exports.splitTag = splitTag;
