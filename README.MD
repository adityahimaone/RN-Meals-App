# React Native - Meals APP

This is a React Native App that allows you to browse through different meals and add them to your favorites.

## Features

- React Navigation (yarn add @react-navigation/native)
- Drawer Navigation (yarn add @react-navigation/drawer)
- React Context
- React Redux
- Eslint + Prettier

## Installation

Clone the repository and run the following commands:

```bash
yarn install
yarn start
```

## Preview

<div align="center">
  <div style="display: flex; flex-direction: row; align-items: flex-start;">
   <img width="250" height="auto" src="https://user-images.githubusercontent.com/30428194/189687958-dc5b8fac-7c11-4741-8110-e4f1ca584e8c.jpg"/>
   <img width="250" height="auto" src="https://user-images.githubusercontent.com/30428194/189688576-257e0196-d189-4718-8505-6a3fd7e5d3e6.jpg"/>
   <img width="250" height="auto" src="https://user-images.githubusercontent.com/30428194/189688654-71c2dc11-dd96-4b68-8e9f-a38fb2c3a1df.jpg"/>
 </div>
</div>

### Eslint Install & Configuration Notes
Adding eslint for React Native

1. Command

```bash
  yarn add eslint -D
  npx eslint --init
  yarn add eslint-plugin-react-native -D
  yarn add prettier -D -E

```

2. Eslint Final Config for .eslintrc.json

```bash
"extends": [
  "plugin:react/recommended",
  "airbnb",
  "airbnb/hooks",
  "prettier",
  "prettier/react"
],
"plugins": [
  "react",
  "react-native"
],
"rules": {
  // allow .js files to contain JSX code
  "react/jsx-filename-extension": [1, { "extensions": [".js", "jsx"] }],
            
  // prevent eslint to complain about the styles variable being used before it was defined
  "no-use-before-define": ["error", { "variables": false }],

  // ignore errors for the react-navigation package
  "react/prop-types": ["error", {"ignore": ["navigation", "navigation.navigate"]}]
```

3. Create .prettierrc.json
```bash
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "singleQuote": true,
  "semi": true,
  "printWidth": 100,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```