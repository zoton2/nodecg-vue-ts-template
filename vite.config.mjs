import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { globbySync } from 'globby';
import { defineConfig } from 'vite';
import NodeCGPlugin from 'vite-plugin-nodecg';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const input = globbySync([
    './src/dashboard/*.ts',
    './src/graphics/*.ts',
  ]);
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({
        autoImportComponentCase: 'pascal',
      }),
      NodeCGPlugin(),
    ],
    build: {
      rollupOptions: {
        input,
      },
    },
  };
});
