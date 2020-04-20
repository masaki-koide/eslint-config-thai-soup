module.exports = {
  extends: ['airbnb', 'airbnb/hooks', './base.js', 'prettier/react'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/button-has-type': 'off',
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
}
