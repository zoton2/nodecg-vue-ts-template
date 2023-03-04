# nodecg-vue-ts-template

Template for NodeCG bundles that use Vue.js and TypeScript.


## Technical Details

- Tested with Node.js v16 (as of writing, current LTS).
- Extension uses TypeScript.
- Browser uses Vue.js (v3), with TypeScript for the scripting.
  - Includes the [nodecg-vue-composable](https://github.com/Dan-Shields/nodecg-vue-composable) helper composable to help with using replicants; I advise you check it's README for more information.
  - Dashboard also includes Quasar, for easy styling of UI.
  - Builds using Vite, using the [vite-plugin-nodecg](https://github.com/dan-shields/vite-plugin-nodecg) plugin.
- Includes module alias support for both extension and browser.
- ESLint is included for extension/browser/typings.
  - Extends [airbnb-typescript/base](https://github.com/iamturns/eslint-config-airbnb-typescript), alongside a few other recommended/essential packages.
  - Has some personal choices/override rules, but not many.
- I personally use Visual Studio Code with some appropriate extensions ([Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for example), so have made sure it works well in that editor.
- The extension/browser files have some example code scattered about that should help in how to use things.

To use module aliases, you must change all the parts labelled with `@nodecg-vue-ts-template`; either substitute in your own bundle name, or something else you feel is appropriate. The main places these are in are:
- [`./tsconfig.browser.json`](tsconfig.browser.json)
- [`./tsconfig.extension.json`](tsconfig.extension.json)
- [`./vite.config.mjs`](vite.config.mjs)
- [`./src/extension/index.ts`](src/extension/index.ts)


## Package Commands

- `autofix`: Automatically fix any possible linting errors using ESLint.
- `autofix:browser`: See above, but only for browser based code.
- `autofix:extension`: See above, but only for extension based code/typings.
- `build`: Build written code for use in production.
- `build:browser`: See above, but only for browser based code.
- `build:extension`: See above, but only for extension based code.
- `clean`: Clean up all built/watched files.
- `lint`: Finds any possible linting errors using ESLint, but does not fix them.
- `lint:browser`: See above, but only for browser based code.
- `lint:extension`: See above, but only for extension based code/typings.
- `prebuild`: Alias for `clean`, will automatically run before `build` if called.
- `schema-types`: Create TypeScript typings for schemas/`Configschema.json` using `nodecg-cli`.
- `start`: Start NodeCG.
- `watch`: Build code and watch for changes, for use in development.
- `watch:browser`: See above, but only for browser based code.
- `watch:extension`: See above, but only for extension based code.


## Differences between template v1 and v2...

- Upgraded Vue to v3 from v2.
- Uses Vite to build browser code instead of Webpack.
- Uses Quasar for material design styling help instead of Vuetify.
- No TypeScript decorators used in the browser code now as they aren't needed.
- Adds [nodecg-vue-composable](https://github.com/Dan-Shields/nodecg-vue-composable) to help with using/modifying replicants in browser.
- No longer includes any Vue state plugins by default (as no longer needed for replicants), but you can add one if needed (I'd suggest [pinia](https://pinia.vuejs.org/)).
- Includes [@vueuse/head](https://github.com/vueuse/head), in the example code just used to help change the title of each page.
- Uses the [nodecg-types](https://github.com/codeoverflow-org/nodecg-types) package instead of directly referencing the installed NodeCG instance.
