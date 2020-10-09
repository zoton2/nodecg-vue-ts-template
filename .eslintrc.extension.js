module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.extension.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/core-modules': ['nodecg/types/server'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        // intentionally left blank
      },
      /* node: {
        moduleDirectory: [
          'node_modules',
          '../..',
          '.',
        ],
      }, */
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      // devDependencies: true, // Some places have dev deps imported where eslint complains.
      packageDir: ['.', '../..'], // Check for deps in NodeCG folder as well.
    }],
    // 'import/no-unresolved': [2, { commonjs: true, caseSensitive: false }],
    'max-len': ['error', { code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }],
    'lines-between-class-members': 'off',
    'object-curly-newline': 'off',
  },
  overrides: [{
    files: ['*.d.ts'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    }
  }]
};
