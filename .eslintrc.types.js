module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // Some places have dev deps imported where eslint complains.
      packageDir: ['.', '../..'], // Check for deps in NodeCG folder as well.
    }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'max-len': ['error', { 'code': 100 }],
    'lines-between-class-members': 'off',
  },
};
