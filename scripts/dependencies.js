const child_process = require("child_process");

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
  "file-loader",
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
const PROD_DEPENDENCIES = ["express", "express-static-gzip"];

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
 * Returns npm command for installing  prod dependencies
 */
function getProdDependencies() {
  var installCommand = "npm install --save";
  PROD_DEPENDENCIES.forEach(dependency => {
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

  if (commands) {
    try {
      commands.forEach(command => {
        child_process.execSync(command, options);
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  installDependencies,
  getDependencies,
  getDevDependencies,
  getProdDependencies
};
