module.exports = {
  extends: 'standard-with-typescript',
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
