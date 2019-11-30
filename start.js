#!/usr/bin/env node

const child_process = require("child_process");
const path = require("path");
const updateNotifier = require("update-notifier");
const pkg = require("./package.json");
const { ErrorMessage, SuccessMessage } = require("./scripts/helper");

const notifier = updateNotifier({
	pkg,
	updateCheckInterval: 1000 * 60 * 60 * 24,
});

if (notifier.update && notifier.update.latest !== pkg.version) {
	const old = notifier.update.current;
	const latest = notifier.update.latest;

	var message =
		`${SuccessMessage("New")} version of ${SuccessMessage(
			pkg.name,
		)} available! ${ErrorMessage(old)} -> ${SuccessMessage(latest)}\n` +
		`Run ${SuccessMessage(`npm install -g ${pkg.name}`)} to update!`;

	notifier.notify({ message: message });
	console.log("______________________________________________________________");
	console.log(message);
	console.log("______________________________________________________________");
}
var args = process.argv.slice(2);
var dirName = args[0];
var end_to_end = args[1];

var p = path.join(__dirname, "scripts/create.js");
child_process.execSync(`node ${p} ${dirName} ${end_to_end}`, {
	stdio: "inherit",
});
