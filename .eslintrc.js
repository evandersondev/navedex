module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': 'off',
    camelcase: 'off',
    'no-undef': 'off',
    'react/display-name': 'off',
    'react/prop-types': [0],
  },
}
