# create-react-webpack

This project is bootstraped with [create-react-webpack](https://github.com/AlokTakshak/create-react-webpack).

## Available Scripts

Scripts available inside this project:-

### `npm start`

if you have initalized by passing `-e` option to `create-react-webpack`. <br>
Start the production server on default port `3000`.<br>
Read files from `dist` folder.<br>
before running this first run `npm run build`.

### `npm run build`

builds the application for production to the `dist` folder inside directory.<br>
Uses webpack `prod` `config` along with `base` `config`

### `npm run dev`

Start the development server on default port `8080`.<br>
Starts server in hot mode but doesn't preserve state of component if any while reloading.

### `npm run dev:hot`

Start the development server on default port `8080`.<br>
Starts server in hot mode preserves state of component also if any while applying hot load patch.

### `npm run docker:dev`

Start the development server inside the docker container.<br>
Maps machines port `8080` to `docker` container port `8080`.<br>
Helpful in case you want to do development inside container keeping the environment same for everyone, removes the need for changing node version for different applications.

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
