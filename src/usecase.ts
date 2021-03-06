interface Tag {
  name?: string;
  version?: string;
  success: boolean;
}

const nameSharpVersion = 2;

export const splitTag = (tag: string): Tag => {
  tag = tag.replace(`refs/heads/`, "");
  tag = tag.replace(`refs/tags/`, "");
  const splitted = tag.split("#");
  if (splitted.length !== nameSharpVersion) {
    return { success: false };
  }

  const [name, version] = splitted;
  return { name, version, success: true };
};
