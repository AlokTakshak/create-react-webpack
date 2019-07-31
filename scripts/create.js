const path = require("path");
const { copyDirectory, ErrorMessage, SuccessMessage } = require("./helper");
const { SPECIALCHAR, TEMPLATE_PATH } = require("./constants");

var args = process.argv.slice(2);
var dirName = args[0];

if (dirName[0].match("^[A-Z0-9]")) {
  throw new Error(
    ErrorMessage("directory name can't start from capital letters ")
  );
} else if (dirName.match(SPECIALCHAR)) {
  throw new Error(
    ErrorMessage(
      "directory name can't start from capital letters or contain special characters in it"
    )
  );
} else {
  //using process.cwd for getting current path
  let destination = path.join(process.cwd() + "/" + args[0]);
  copyDirectory(TEMPLATE_PATH, destination);
  console.log(SuccessMessage("Successfully created the directory"));
}
