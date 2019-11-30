const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const {
	UNNECESSORY_FOLDERS_FOR_DEV,
	UNNECESSORY_FOLDERS_FOR_PROD,
} = require("./constants");

/**
 * @summary copies the directory content from source to destination directory
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 * @param {boolean} prod  tells if user require prod environment
 */
function copyDirectory(source, destination, prod) {
	let UNNECESSORY_FOLDERS = prod
		? UNNECESSORY_FOLDERS_FOR_PROD
		: UNNECESSORY_FOLDERS_FOR_DEV;

	createDirectory(destination);

	var content = fs.readdirSync(source);
	for (let i = 0; i < content.length; i++) {
		let currentFile = fs.lstatSync(path.join(source, content[i]));

		if (String(content[i]).match(UNNECESSORY_FOLDERS)) {
			continue;
		} else if (currentFile.isDirectory()) {
			copyDirectory(
				path.join(source, content[i]),
				path.join(destination, content[i]),
				prod,
			);
		} else if (currentFile.isSymbolicLink()) {
			var symlink = fs.readlinkSync(source, content[i]);
			fs.symlinkSync(symlink, path.join(destination, content[i]));
		} else {
			copyFile(
				path.join(source, content[i]),
				path.join(destination, content[i]),
				prod,
			);
		}
	}
}

/**
 * @summary copies the file content from source to destination file
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 * @param {boolean} prod  tells if user require prod environment
 */
function copyFile(source, destination, prod) {
	var inputFile, outputFile;
	if (source.match(".json$")) {
		inputFile = JSON.parse(fs.readFileSync(source, "utf8"));
		if (prod && source.match("package.json$")) {
			inputFile.scripts.start = "node server/";
		}
		fs.writeFileSync(destination, JSON.stringify(inputFile, null, 2), "utf8");
	} else {
		inputFile = fs.createReadStream(source);
		outputFile = fs.createWriteStream(destination);
		inputFile.pipe(outputFile);
	}
}

/**
 * Creates a directory from input
 * @param {String} destination path of destination directory
 */
function createDirectory(destination) {
	if (fs.existsSync(destination)) {
		throw new Error(ErrorMessage("Directory Already Exists!"));
	} else {
		fs.mkdirSync(destination);
	}
}

function ErrorMessage(message) {
	return chalk.bold.red(message);
}

function SuccessMessage(message) {
	return chalk.bold.green(message);
}

module.exports = {
	copyDirectory,
	copyFile,
	createDirectory,
	ErrorMessage,
	SuccessMessage,
};
