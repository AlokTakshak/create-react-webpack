# create-react-webpack

Create React Application with all standard practices, with easy formats which is known to users, so that users can easily modify the various config files as needed.

## Creating an App

### npm

### install module

```
npm i -g create-react-webpack
```

### creating your react app

```
create-react-webpack demo-app
```

Once installed globally, above command i.e `create-react-webpack` for bootstraping new application will be available through out the system.

it will create a directory `demo-app` in the current folder, with below file footprint.

```
demo-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .babelrc
├── .eslintrc.json
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── docker
│   ├── dev.js
│   ├── docker-compose.yml
│   └── Dockerfile.dev
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
│   ├── App.css
│   ├── App.js
│   ├── App.spec.js
│   └── index.js
├── webpack.config.base.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

```
create-react-webpack demo-app -e
```

It `includes` the `node server` for deploying `into` production into your `demo-app`, with below file footprint.

```
demo-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .babelrc
├── .eslintrc.json
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── docker
│   ├── dev.js
│   ├── docker-compose.yml
│   └── Dockerfile.dev
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── server
│   └── index.js
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.spec.js
│   └── index.js
├── webpack.config.base.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Available Scripts

After creating project directory you can run following scripts:-

### `npm run build`

builds the application for production to the `dist` folder inside directory.<br>
Uses webpack `prod` `config` along with `base` `config`

### `npm start`

Start the production server on default port `3000`.<br>
Read files from `dist` folder.<br>
before running this first run `npm run build`.

### `npm run dev`

Start the development server on default port `8080`.<br>
Starts server in hot mode but doesn't preserve state of component if any while reloading.

### `npm run docker:dev`

Start the development server inside the docker container.<br>
Maps machines port `8080` to `docker` container port `8080`.<br>
Helpful in case you want to do development inside container keeping the environment same for everyone, removes the need for changing node version for different applications.

### `npm run dev:hot`

Start the development server on default port `8080`.<br>
Starts server in hot mode preserves state of component also if any while applying hot load patch.

### `npm test`

Launches Test Runner in the intreactive manner.

### `npm run format`

Enforces the formatting rules defined in `.prettierrc`.<br>
For inforcing your rules `replace` the `file` or `content` of `prettierrc`.

### `npm run lint`

Enforces the linting rules defined in `.eslintrc`.
<br>
For inforcing your rules `replace` the `file` or `content` of `eslintrc`.<br>
Here we are using `prettier` for formatting and `eslint` for enforcing rules related to best coding practices.
