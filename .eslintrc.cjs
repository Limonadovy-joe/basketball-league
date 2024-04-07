module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react/recommended',
    'plugin:vitest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y', 'sonarjs', '@tanstack/query', '@emotion', 'vitest', 'testing-library'],
  rules: {
     "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ['error', {ignore: ['css']}]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
