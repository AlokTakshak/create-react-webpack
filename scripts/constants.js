const path = require("path");
const SPECIALCHAR = RegExp("/[!@#$%^&*()-=_,.?~:;\\{}|<>]/g");
const UNNECESSORYFOLDERS = RegExp("^node_modules|build|dist$", "i");
const TEMPLATE_PATH = path.join(__dirname, "../template");

module.exports = { SPECIALCHAR, TEMPLATE_PATH, UNNECESSORYFOLDERS };
