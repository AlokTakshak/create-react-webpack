#!/usr/bin/env node

const path = require("path");
const child_process = require("child_process");
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

const notifier = updateNotifier({pkg});
notifier.notify();
notifier.update && console.log(notifier.update)

var args = process.argv.slice(2);
var dirName = args[0];
var end_to_end = args[1];

var p=path.join(__dirname,"scripts/create.js")
child_process.execSync(`node ${p} ${dirName} ${end_to_end}`,{  stdio: "inherit" });