const fs = require("fs");
const path = require("path");
const { copyFile } = require("./helper");
console.log("inside");

var args = process.argv.slice(2);
var dirName = args[0];
var specialChar = RegExp("/[!@#$%^&*()-=_,.?~:;\\{}|<>]/g");
console.log();
if (dirName[0].match("^[A-Z0-9]")) {
  throw new Error(
    "directory name can't start from capital letters or contain special characters in it"
  );
} else if (dirName.match(specialChar)) {
  throw new Error(
    "directory name can't start from capital letters or contain special characters in it"
  );
} else {
  console.log("yes you can create the diretory");
  //   var dirPath = path.join(__dirname + "/" + args[0]);
  //   if (fs.existsSync(dirPath)) {
  //     console.log("yes this file exits", dirPath);
  //   } else {
  //     fs.mkdirSync(dirPath, err => {
  //       if (err) {
  //         throw err;
  //       } else {
  //         console.log("created");
  //       }
  //     });
  //   }
}
