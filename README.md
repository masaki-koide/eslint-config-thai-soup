# eslint-config-thai-soup

ESLint config for TypeScript and React project.

## Installation

```sh
yarn add --dev eslint-config-thai-soup
```

## Usage

It requires `eslint`, `prettier`, `typescript`.

1. Install the correct versions of each package, which are listed by the command.

```sh
yarn info eslint-config-thai-soup peerDependencies
```

2. In your ESLint config, specify `thai-soup` in the extends section and the path of your project's tsconfig.json in the parserOptions section. if you don't need React, you can use `thai-soup/base`.

```js
{
  "extends": ["thai-soup"], // or thai-soup/base
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    // Additional, per-project rules
  }
}
```

## Tips

I recommend Duncan Leung's article for faster ESlint performance

[Why typescript-eslint Performance is Slow](https://duncanleung.com/why-slow-plugin-typescript-eslint-performance-issues/)
