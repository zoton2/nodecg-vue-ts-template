// @ts-check
import tseslint from 'typescript-eslint';
import browser from './eslint.browser.js';
import extension from './eslint.extension.js';

/* Exists so anything looking for an ESLint config file (including VSCode and the `eslint` command) can find the rules. */
export default tseslint.config([
  {
    ignores: [
      // Ignore built files.
      'dashboard/**/*',
      'extension/**/*',
      'graphics/**/*',
      'shared/dist/**/*',
    ],
  },
  browser,
  extension,
]);
