module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "plugin:vue/base", "plugin:jest/recommended"],
  plugins: ["prettier", "jest"],
  settings: {
    /* Check if imports actually resolve */
    "import/resolver": {
      alias: {
        map: [
          ["@ui", "../ui"],
          ["@common", "../common"]
        ],
        extensions: [".js", ".json", ".vue"]
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      {
        js: "never",
        svg: "never",
        png: "ignorePackages"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions",
        allow: ["state"]
      }
    ],
    "prettier/prettier": "off",
    quotes: "off",
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "import/no-unresolved": 0,
    "no-bitwise": 0
  },
  globals: {}
};
