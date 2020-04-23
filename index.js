module.exports = {
  extends: ['airbnb', 'airbnb/hooks', './base.js', 'prettier/react'],
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
    'react/jsx-filename-extension': ['error', { extensions: ['jsx', 'tsx'] }],
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
}
