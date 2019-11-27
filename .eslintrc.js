module.exports = {
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'warn'
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
