const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { UNNECESSORYFOLDERS } = require("./constants");

/**
 *@summary copies the directory content from source to destination directory
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
 *@summary copies the file content from source to destination file
 * @param {String} source path of source file
 * @param {String} destination  path of destination file
 */
function copyFile(source, destination) {
  var inputFile = fs.createReadStream(source);
  var outputFile = fs.createWriteStream(destination);
  inputFile.pipe(outputFile);
}

/**
 *
 * @param {String} destination path of destination directory
 */
function createDirectory(destination) {
  if (fs.existsSync(destination)) {
    throw new Error(chalk.bold.red("Directory Already Exists!"));
  } else {
    fs.mkdirSync(destination, error => {
      if (error) {
        throw error;
      } else {
        console.log(chalk.bold.green("Successfully created the directory"));
      }
    });
  }
}

module.exports = { copyDirectory, copyFile, createDirectory };
