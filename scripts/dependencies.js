const child_process = require("child_process");
const { SuccessMessage } = require("./helper");

const DEPENDENCIES = ["prop-types", "react", "react-dom", "react-hot-loader"];
const DEV_DEPENDENCIES = [
  "@babel/cli",
  "@babel/core",
  "@babel/plugin-proposal-class-properties",
  "@babel/preset-env",
  "@babel/preset-react",
  "babel-loader",
  "brotli-webpack-plugin",
  "compression-webpack-plugin",
  "css-loader",
  "eslint",
  "eslint-plugin-react",
  "html-webpack-plugin",
  "husky",
  "jest",
  "prettier",
  "pretty-quick",
  "style-loader",
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "webpack-manifest-plugin",
  "webpack-merge"
];

/**
 * Returns npm command for installing dependencies
 */
function getDependencies() {
  var installCommand = "npm install --save";
  DEPENDENCIES.forEach(dependency => {
    installCommand += ` ${dependency} `;
  });
  return installCommand;
}

/**
 * Returns npm command for installing dev-dependencies
 */
function getDevDependencies() {
  var installCommand = "npm install --save-dev";
  DEV_DEPENDENCIES.forEach(dependency => {
    installCommand += ` ${dependency} `;
  });
  return installCommand;
}

/**
 *
 * @param {Array<String>} commands list of commands needs to be executed
 * @param {Object} options
 * @param {String} options.cwd directory where you want to execute command
 * @param {String} options.stdio process's stdio config
 */
function installDependencies(commands, options) {
  options.stdio = options.stdio || "inherit";
  //cleaning the npm cache
  child_process.execSync("npm cache clean  --force", options);

  if (commands) {
    try {
      commands.forEach(command => {
        console.log(SuccessMessage(command));
        child_process.execSync(command, options);
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { installDependencies, getDependencies, getDevDependencies };
