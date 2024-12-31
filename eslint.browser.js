// @ts-check
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

/* Rules used for anything browser related (dashboard and graphics). */
export default tseslint.config({
  extends: [
    pluginVue.configs['flat/essential'],
    vueTsEslintConfig(),
  ],
  rules: {
    // Allows "main.vue" files to be named as such.
    'vue/multi-word-component-names': ['error', { ignores: ['main'] }],
  },
  files: [
    'src/browser_shared/**/*.ts',
    'src/browser_shared/**/*.vue',
    'src/dashboard/**/*.ts',
    'src/dashboard/**/*.vue',
    'src/graphics/**/*.ts',
    'src/graphics/**/*.vue',
  ],
});
