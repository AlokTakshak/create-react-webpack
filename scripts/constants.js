const CLEAN_NPM_CACHE = "npm cache clean  --force";
const SPECIALCHAR = RegExp("/[!@#$%^&*()-=_,.?~:;\\{}|<>]/g");
const UNNECESSORYFOLDERS = RegExp("^node_modules|build|dist$", "i");

module.exports = {
  CLEAN_NPM_CACHE,
  SPECIALCHAR,
  UNNECESSORYFOLDERS
};
