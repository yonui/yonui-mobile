module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": ["standard-react", "standard-with-typescript"],
  "env": {
    "node": true,
    "browser": true
  },
  "plugins": ["export", "@typescript-eslint"],
  "rules": {
      "semi": "off",
      'react/jsx-indent': 'off',
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/return-await": ["error", 'in-try-catch'],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-this-alias": "warn",
      "@typescript-eslint/no-implied-eval": "warn",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/restrict-template-expressions": "off",
      "max-len": ["error", {
        code: 200,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      "max-lines": ["error", 1500],
      "no-var": "error",
      "comma-dangle": "off",
      "object-curly-spacing": "warn",
      "brace-style": "warn",
      "react/prop-types": "off",
      "react/jsx-handler-names": "off",
      "no-fallthrough": "warn",
      "no-global-assign": "warn",
      "react/jsx-pascal-case": "warn",
      "react/jsx-closing-bracket-location": "warn",
      "node/no-deprecated-api": "warn",
      "no-new-func": "warn",
      "no-throw-literal": "warn",
      "standard/no-callback-literal": "warn",
      "no-prototype-builtins": "warn",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-boolean-value": "warn",
      "import/no-duplicates": "warn",
      "import/default": "error",
      "new-cap": "warn",
      "no-extend-native": "warn",
      "curly": "off",
      "no-mixed-operators": "warn",
      "eqeqeq": "off",
      "camelcase": "warn",
      "export/no-import-module-exports": "error",
      "react/jsx-max-props-per-line": ["error", { "when": "multiline", "maximum": 1 }],
      "space-before-function-paren": ["error", {
          "anonymous": "ignore",
          "named": "ignore",
          "asyncArrow": "ignore"
      }],
  },
  "globals": {
      cb: true,
      plus: true,
      wx: true,
      Electron: true,
      _: true,
      jDiwork: true,
      ActiveXObject: true,
      YYCooperationBridge: true,
      moment: true,
      BMap: true,
      UE: true,
      __webpack_public_path__: true
  },
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "settings": {
      "react": {
          "version": "detect"
      }
  }
}
