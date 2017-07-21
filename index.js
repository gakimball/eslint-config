module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  rules: {
    'brace-style': ['error', 'stroustrup', {
      allowSingleLine: true,
    }],
    'callback-return': 'off',
    'capitalized-comments': ['error', 'always', {
      ignoreConsecutiveComments: true,
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: ['render'],
    }],
    'consistent-return': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all']
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-style': 'off',
    'guard-for-in': 'off',
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'no-invalid-this': 'off',
    'no-multi-spaces': 'error'
    'no-shadow': 'error',
    'no-use-before-define': ['error', {
      functions: false,
    }],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-jsdoc': 'off',
    strict: 'off',
    'valid-jsdoc': ['error', {
      prefer: {
        arg: 'param',
        argument: 'param',
        augments: 'extends',
        const: 'constant',
        constructor: 'class',
        desc: 'description',
        emits: 'fires',
        exception: 'throws',
        func: 'function',
        property: 'prop',
        return: 'returns',
        var: 'member',
        virtual: 'abstract',
      },
      requireReturn: false,
      requireReturnType: true,
      requireReturnDescription: false,
      requireParamDescription: true,
      matchDescription: '.+',
    }],
    yoda: 'error'
  },
};
