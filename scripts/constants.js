const CLEAN_NPM_CACHE = "npm cache clean  --force";
const SPECIALCHAR = RegExp("/[!@#$%^&*()-=_,.?~:;\\{}|<>]/g");
const UNNECESSORY_FOLDERS_FOR_DEV = RegExp(
	"^node_modules|build|dist|server$",
	"i",
);
const UNNECESSORY_FOLDERS_FOR_PROD = RegExp("^node_modules|build|dist$", "i");

module.exports = {
	CLEAN_NPM_CACHE,
	SPECIALCHAR,
	UNNECESSORY_FOLDERS_FOR_DEV,
	UNNECESSORY_FOLDERS_FOR_PROD,
};
