module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/no-explicit-any": "off"
  }
};
