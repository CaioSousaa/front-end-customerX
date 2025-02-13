export default [
  eslint.configs.recommended,
  {
    extends: ["prettier"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    settings: {
      node: true,
    },
    plugins: {
      node,
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];
