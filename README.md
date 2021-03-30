## pbc

A CLI tool for generating protobuf description from a schema repository. No installation needed.

**Supported output format**
- .desc
- .json (JSON descriptors *[protobufjs](https://www.npmjs.com/package/protobufjs.org)*)

## Usage

### Schema Repository Structure
All .proto files must be in the **"schema"** directory.
```
proto-repo
├── schema
    ├── schemaA.proto
    └── schemaB.proto
```

### .protobuf
A config file including a git URL of the schema repository for fetching schemas. Need to be created and stored in your project.

**Example**
```
my_project
├── src
├── package.json
└── .protobuf
```

.protobuf contains a git url
```
git@github.com:ltman/proto-repo.git
```

### CLI Command
- **update** - fetch .proto schemas from the schema remote repository and store in local.
- **desc** - generate .desc output _(required Google protoc)_
- **json** - generate .json (JSON descriptors) output

```
npx pbc update <branch-name>
npx pbc desc <dest>
npx pbc json <dest>
```



    