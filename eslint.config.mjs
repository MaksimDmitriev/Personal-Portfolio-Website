// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import compat from "eslint-plugin-compat";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      compat, // declare once
    },
    rules: {
      "compat/compat": "error",
    },
  },
];
