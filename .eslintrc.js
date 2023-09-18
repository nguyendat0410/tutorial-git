module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      allowImportExportEverywhere: true,
      legacyDecorators: true,
    },
  },
  rules: {
    quotes: [1, 'single'],
    'prettier/prettier': [
      2,
      {
        bracketSpacing: true,
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        jsxSingleQuote: false,
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
};
