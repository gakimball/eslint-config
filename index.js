module.exports = {
  extends: [
    'eslint',
  ],
  plugins: [
    'import',
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
    'brace-style': ['error', 'stroustrup'],
    'capitalized-comments': ['error', 'always', {
      ignoreConsecutiveComments: true,
    }],
    'class-methods-use-this': 'error',
    'consistent-return': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'no-invalid-this': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
    }],
    'no-use-before-define': ['error', {
      functions: false,
    }],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    radix: ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'require-jsdoc': ['error', {
      require: {
        ArrowFunctionExpression: false,
        ClassDeclaration: true,
        FunctionDeclaration: true,
        MethodDefinition: true,
      }
    }],
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
      requireReturnDescription: true,
      requireParamDescription: true,
    }],
  },
};
