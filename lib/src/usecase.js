const nameSharpVersion = 2;
export const splitTag = (tag) => {
    tag = tag.replace("refs/heads/", "");
    console.log("tag", tag);
    const splitted = tag.split("#");
    if (splitted.length !== nameSharpVersion) {
        return null;
    }
    const [name, version] = splitted;
    return { name, version };
};
