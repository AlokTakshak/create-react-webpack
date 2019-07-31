# create-react-webpack

This project is bootstraped with [create-react-webpack](https://github.com/AlokTakshak/create-react-webpack).

## Available Scripts

Scripts available inside this project:-

### `npm run build`

builds the application for production to the `dist` folder inside directory.<br>
Uses webpack `prod` `config` along with `base` `config`

### `npm run dev`

Start the development server on default port `8080`.<br>
Starts server in hot mode but doesn't preserve state of component if any while reloading.

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
