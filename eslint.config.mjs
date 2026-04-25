import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-extra-parens": "error",
      "no-trailing-spaces": "error",
      "space-in-parens": ["error", "never"]
    }
  },
]);