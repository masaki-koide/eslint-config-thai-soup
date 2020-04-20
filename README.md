# eslint-config-thai-soup

ESLint config for TypeScript and React project.

## Usage

It requires `eslint`, `prettier`, `typescript`.

1. Install the correct versions of each package, which are listed by the command.

```sh
yarn info eslint-config-thai-soup peerDependencies
```

2. Add `thai-soup` to the extends section of your ESLint config.

```js
{
  "extends": ["thai-soup"],
  "rules": {
    // Additional, per-project rules
  }
}
```
