/**
 * Some stuff is commented out that may need re-enabling if necessary.
 */

const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    // es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // project: 'tsconfig.browser.json',
    // sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2020,
  },
  globals: {
    nodecg: 'readonly',
    NodeCG: 'readonly',
  },
  plugins: [
    // 'vue',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/typescript',
  ],
  settings: {
    'import/core-modules': ['nodecg/types/browser'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        // intentionally left blank
      },
      node: {
        /* moduleDirectory: [
          'node_modules',
          '../..',
          '.',
        ], */
      },
      webpack: {
        config: path.join(__dirname, 'webpack.config.js'),
      },
    },
  },
  rules: {
    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'import/no-extraneous-dependencies': ['error', {
      // devDependencies: true, // Some places have dev deps imported where eslint complains.
      packageDir: ['.', '../..'], // Check for deps in NodeCG folder as well.
    }],
    // 'import/no-unresolved': [2, { commonjs: true, caseSensitive: false }],
    'max-len': ['error', { code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }],
    'lines-between-class-members': 'off',
    'vue/html-self-closing': ['error'],
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
  }
};
