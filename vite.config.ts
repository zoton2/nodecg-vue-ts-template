import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import NodeCGPlugin from 'vite-plugin-nodecg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: fileURLToPath(
        new URL('./src/dashboard/quasar-variables.sass', import.meta.url)
      )
    }),
    checker({ vueTsc: { tsconfigPath: 'tsconfig.browser.json' } }),
    NodeCGPlugin({
      inputs: {
        'graphics/*/main.ts': './src/graphics/template.html',
        'dashboard/*/main.ts': './src/dashboard/template.html',
      },
    }),
  ],
});
