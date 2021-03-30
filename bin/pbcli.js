#!/usr/bin/env node

const path = require('path')
const pkg = require('../package.json')
const json = require(path.join(__dirname, '..', 'cli', 'json'))
const desc = require(path.join(__dirname, '..', 'cli', 'desc'))
const update = require(path.join(__dirname, '..', 'cli', 'update'))

const args = process.argv
let ret

switch (args[2]) {
  case 'json':
    ret = json.main(args.slice(3))
    break
  case 'desc':
    ret = desc.main(args.slice(3))
    break
  case 'update':
    ret = update.main(args.slice(3))
    break
  case 'version':
    console.log(pkg.version)
    break
  default:
    throw new Error("Invalid command")
}

if (typeof ret === 'number') {
  process.exit(ret)
}