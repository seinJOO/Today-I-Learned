/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true // 테스트 코드를 위한 세팅
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 100,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
