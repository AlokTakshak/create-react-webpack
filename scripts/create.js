const path = require("path");
const { copyDirectory, ErrorMessage, SuccessMessage } = require("./helper");
const { CLEAN_NPM_CACHE, SPECIALCHAR } = require("./constants");
const {
  installDependencies,
  getDependencies,
  getDevDependencies,
  getProdDependencies
} = require("./dependencies");

var args = process.argv.slice(2);
var dirName = args[0];
var end_to_end = args[1];

if (dirName === "undefined") {
  throw new Error(ErrorMessage("directory name can't be empty"));
} else if (dirName[0].match("^[A-Z0-9]")) {
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
  const TEMPLATE_PATH = path.join(__dirname, "../template");
  let destination = path.join(process.cwd() + "/" + args[0]);
  const prod = end_to_end == "-e";

  copyDirectory(TEMPLATE_PATH, destination, prod);

  let commands = [],
    options;

  commands.push(CLEAN_NPM_CACHE);
  commands.push(getDependencies());
  prod && commands.push(getProdDependencies());
  commands.push(getDevDependencies());

  options = { cwd: destination, stdio: "inherit" };

  installDependencies(commands, options);
  console.log(SuccessMessage("Successfully created the directory"));
}
