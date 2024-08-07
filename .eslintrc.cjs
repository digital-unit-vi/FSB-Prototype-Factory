module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "prettier",
  ],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".jpg",
          ".jpeg",
          ".png",
          ".svg",
        ],
      },
    },
  },
  ignorePatterns: ["components/build-assets/**"],
};
