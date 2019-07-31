const path = require("path");
const { copyDirectory, ErrorMessage, SuccessMessage } = require("./helper");
const { SPECIALCHAR, TEMPLATE_PATH } = require("./constants");
const {
  installDependencies,
  getDependencies,
  getDevDependencies
} = require("./dependencies");

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

  let commands = [],
    options;

  commands.push(getDependencies());
  commands.push(getDevDependencies());
  options = { cwd: destination, stdio: "inherit" };

  installDependencies(commands, options);
  console.log(SuccessMessage("Successfully created the directory"));
}
