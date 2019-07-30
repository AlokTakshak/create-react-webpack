const fs = require("fs");
const path = require("path");
const { copyDirectory } = require("./helper");
const { SPECIALCHAR, TEMPLATE_PATH } = require("./constants");

var args = process.argv.slice(2);
var dirName = args[0];

//use process.cwd if after deployment also path take path of scripts folder

if (dirName[0].match("^[A-Z0-9]")) {
  throw new Error(
    chalk.bold.red("directory name can't start from capital letters ")
  );
} else if (dirName.match(SPECIALCHAR)) {
  throw new Error(
    chalk.bold.red(
      "directory name can't start from capital letters or contain special characters in it"
    )
  );
} else {
  let destination = path.join(process.cwd() + "/" + args[0]);
  copyDirectory(TEMPLATE_PATH, destination);
}
