import js from "@eslint/js";
import ts from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  reactPlugin.configs.flat?.recommended,
  reactHooks.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parser: ts.parser },
    settings: { react: { version: "detect" } },
  },
];
