const path = require("path");
const CLEAN_NPM_CACHE = "npm cache clean  --force";
const SPECIALCHAR = RegExp("/[!@#$%^&*()-=_,.?~:;\\{}|<>]/g");
const UNNECESSORYFOLDERS = RegExp("^node_modules|build|dist$", "i");
const TEMPLATE_PATH = path.join(__dirname, "../template");

module.exports = {
  CLEAN_NPM_CACHE,
  SPECIALCHAR,
  TEMPLATE_PATH,
  UNNECESSORYFOLDERS
};
