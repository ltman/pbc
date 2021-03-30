## pbc

A CLI tool for generating protobuf description from a schema repository. No installation needed.

**Supported output format**
- .desc
- .json (JSON descriptors of *[protobufjs](https://www.npmjs.com/package/protobufjs)*)

## Usage

### Create .protobuf file
.protobuf is a config file including a git URL of the schema repository for fetching schemas. 
Need to be created and stored in your project.

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

### Schema Repository Structure
All .proto files must be in the **"schema"** directory.
```
proto-repo
└── schema
    ├── schemaA.proto
    └── schemaB.proto
```

### CLI Command
- **update** - fetch .proto schemas from the remote repository and store in local.
- **raw** - copy all .proto from the remote repository
- **desc** - generate .desc output _(required Google *[protoc](https://developers.google.com/protocol-buffers/docs/downloads)*)_
- **json** - generate .json (JSON descriptors) output

```
npx pbc update <branch-name>
npx pbc raw <dest>
npx pbc desc <dest>
npx pbc json <dest>
```



    