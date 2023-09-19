# Tutorial + git vs Yarn 3

Start by enabling Corepack, if it isn't already:
```
corepack enable

```

Then initialize a new project:
```
yarn init -2

```

## [Config yarn 3 for vscode](https://yarnpkg.com/getting-started/editor-sdks)

1. Install the ZipFS extension, which is maintained by the Yarn team.

2. Run the following command, which will generate a .vscode/settings.json file:

```
yarn dlx @yarnpkg/sdks vscode
```

3. For safety reason VSCode requires you to explicitly activate the custom TS settings:
```
i. Press ctrl+shift+p in a TypeScript file
ii. Choose "Select TypeScript Version"
iii. Pick "Use Workspace Version"
```

## USAGE
If you're coming from npm, the main changes are:

1. Running `yarn` is enough to run an install! It's an alias to `yarn install`.

2. Adding or updating a dependency to a single package is done with `yarn add`.

3. Upgrading a dependency across the whole project is done with `yarn up`.

4. Your scripts are aliased. Calling `yarn build` is the same as `yarn run build`!

5. Most registry-related commands are moved behind yarn npm (ex: `yarn npm audit`).
