#!/usr/bin/env node

const path = require("path");
const child_process = require("child_process");

var args = process.argv.slice(2);
var dirName = args[0];

var p=path.join(__dirname,"scripts/create.js")
child_process.execSync(`node ${p} ${dirName}`,{  stdio: "inherit" });