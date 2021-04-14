# Tag Splitter Action

This action extracts service name and version from git tag

## Output

### `name`:

Service name from tag

### `version`:

Version number of service

## Example usage

```yaml
on:
  push:
    tags:
      - "*"

name: Split
jobs:
  tag:
    runs-on: ubuntu-20.04
    steps:
      - name: "split"
        id: split
        uses: tanaphonble/tag-splitter-action@v0.0.6
      - name: "set env"
        run: echo "Name=${{steps.split.outputs.name}} Version=${{steps.split.outputs.version}}"
```
