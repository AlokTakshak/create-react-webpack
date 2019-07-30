const fs = require("fs");
const path = require("path");

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

module.exports = { copyFile };
