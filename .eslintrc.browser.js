module.exports = {
  root: true,
  env: {
    node: true,
    // 'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.browser.json',
    extraFileExtensions: ['.vue'],
  },
  globals: {
    nodecg: 'readonly',
    NodeCG: 'readonly',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        // This is needed to properly resolve paths.
        project: 'tsconfig.browser.json',
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    // Everything is compiled for the browser so dev dependencies are fine.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // max-len set to ignore "import" lines (as they usually get long and messy).
    'max-len': ['error', { code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;' }],
    // I mainly have this off as it ruins auto import sorting in VSCode.
    'object-curly-newline': 'off',
    // Allows "main.vue" files to be named as such.
    'vue/multi-word-component-names': ['error', { 'ignores': ['main'] }],
    // Not sure how much this is needed anymore?
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  }
};
