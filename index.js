module.exports = {
  extends: [
    'eslint',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
  },
  rules: {
    indent: ['error', 2],
    'no-invalid-this': 0,
    quotes: ['error', 'single'],
  },
};
