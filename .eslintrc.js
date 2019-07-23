module.exports = {
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Disable rules handled by prettier
    'react/jsx-one-expression-per-line': 'off',

    // Disables rules we choose not to apply
    'import/prefer-default-export': 'off',
    'react/sort-comp': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-underscore-dangle': 0,
  },
  globals: {
    it: 'readonly',
    describe: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true
  }
}
