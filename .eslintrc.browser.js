module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.browser.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  env: {
    es6: true,
    node: true,
  },
  globals: {
    nodecg: 'readonly',
    NodeCG: 'readonly',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // Some places have dev deps imported where eslint complains.
      packageDir: ['.', '../..'], // Check for deps in NodeCG folder as well.
    }],
    'vue/html-self-closing': ['error', {
      html: {
        component: 'never', // Transpiler(?) has issues with self closing components.
      },
    }],
    'vue/no-parsing-error': 'off', // Due to some issue in typescript-eslint(?), off for now.
  }
};
