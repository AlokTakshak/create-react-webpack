const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { UNNECESSORYFOLDERS } = require("./constants");

/**
 * @summary copies the directory content from source to destination directory
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 */
function copyDirectory(source, destination) {
  createDirectory(destination);

  var content = fs.readdirSync(source);
  for (let i = 0; i < content.length; i++) {
    let currentFile = fs.lstatSync(path.join(source, content[i]));

    if (String(content[i]).match(UNNECESSORYFOLDERS)) {
      continue;
    } else if (currentFile.isDirectory()) {
      copyDirectory(
        path.join(source, content[i]),
        path.join(destination, content[i])
      );
    } else if (currentFile.isSymbolicLink()) {
      var symlink = fs.readlinkSync(source, content[i]);
      fs.symlinkSync(symlink, path.join(destination, content[i]));
    } else {
      copyFile(
        path.join(source, content[i]),
        path.join(destination, content[i])
      );
    }
  }
}

/**
 * @summary copies the file content from source to destination file
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 */
function copyFile(source, destination) {
  var inputFile, outputFile;
  if (source.match(".json$")) {
    inputFile = JSON.parse(fs.readFileSync(source, "utf8"));
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
  SuccessMessage
};
