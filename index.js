module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    './base.js',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
    // NOTE:prettierで相殺してほしい
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['jsx', 'tsx'] }],
    'react/jsx-key': 'error',
    // NOTE:prettierで相殺してほしい
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
