# eslint-config

> Don't tell me how to live my life

[![npm](https://img.shields.io/npm/v/@gakimball/eslint-config.svg?maxAge=2592000)](https://www.npmjs.com/package/@gakimball/eslint-config)

I'm horribly pedantic when it comes to writing code.

## Installation

```bash
npm install @gakimball/eslint-config --save-dev
```

## Usage

In your `.eslintrc`:

```json
{
  "extends": "@gakimball"
}
```

## Overview

Extends the default eslint config, and adds the `import` plugin. Includes these hot rules:

- Two spaces for indentation.
- Single quotes.
- Rigid JSDoc enforcement:
  - Functions, classes, and class methods must have documentation.
  - No use of annotation synonyms.
  - All parameters, props, and return values must have descriptions.
- More, once I figure out what I want.
- Allow functions to be defined after they're first referenced. (Yay hoisting!)
- `if`/`else` go on separate lines. *(This is my stupid hill and I will die on it.)*
- Consistent return values optional.
- Prefer `const`, then `let`, but never `var`.
- Capitalize the first word in a comment.
- Put spaces around inline objects.
- Always use `===` and `!==`.
- Class methods must use `this` (otherwise they can be static).

## Local Development

```bash
git clone https://github.com/gakimball/eslint-config
cd eslint-config
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
