// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/* Rules used for anything extension related. */
export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
  ],
  files: [
    'src/extension/**/*.ts',
    'src/types/**/*.d.ts',
  ],
  ignores: [
    'src/types/schemas/**/*.d.ts',
    'src/types/env.d.ts',
  ],
});
