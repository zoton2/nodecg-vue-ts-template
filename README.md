# nodecg-vue-ts-template

Template for NodeCG bundles that use Vue.js and TypeScript.


## Technical Details

- Tested with Node.js v16 (as of writing, current LTS).
- Extension uses *TypeScript*.
- Browser uses *Vue.js (v2)*, with *TypeScript* for the scripting.
  - *TypeScript* uses decorators, with [vue-class-component](https://github.com/vuejs/vue-class-component), [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) and [vuex-class](https://github.com/ktsn/vuex-class) to help (I chose these because in my experience it helped with correct typings while making Single File Components and such).
  - Includes *Vuex* and a template file for using it with replicants ([`./src/browser_shared/replicant_store.ts`](src/browser_shared/replicant_store.ts)).
  - Dashboard also includes *Vuetify*, for easy styling of UI.
  - Builds using *webpack*.
- *ESLint* is included for extension/browser/typings.
  - Extends [airbnb-typescript/base](https://github.com/iamturns/eslint-config-airbnb-typescript), alongside a few other recommended/essential packages.
  - Has some personal choices/override rules, but not many.
- I personally use *Visual Studio Code* with some appropriate extensions ([Vetur](https://github.com/vuejs/vetur) for example), so have made sure it works well in that editor.
- The extension/browser files have some example code scattered about that should help in how to use things.

To use module aliases, you must change all the parts labelled with `@nodecg-vue-ts-template`, either substitute in your own bundle name, or something else you feel is appropriate. The main places these are in are:
- [`./tsconfig.browser.json`](tsconfig.browser.json)
- [`./tsconfig.extension.json`](tsconfig.extension.json)
- [`./src/extension/index.ts`](src/extension/index.ts)


## Package Commands

- `autofix`: Automatically fix any possible linting errors using ESLint.
- `autofix:browser`: See above, but only for browser based code.
- `autofix:extension`: See above, but only for extension based code/typings.
- `build`: Build written code for use in production.
- `build:browser`: See above, but only for browser based code.
- `build:extension`: See above, but only for extension based code.
- `clean`: Clean up all built/watched files.
- `schema-types`: Create TypeScript typings for schemas/`Configschema.json` using `nodecg-cli`.
- `start`: Start NodeCG.
- `watch`: Build code and watch for changes, for use in development.
- `watch:browser`: See above, but only for browser based code.
- `watch:extension`: See above, but only for extension based code.


## Some notes on updating replicants from browser context...

I always suggest updating your replicants by triggering mutations/actions inside of the Vuex store modules. Although you may be able to use a `get`/`set` combination successfully for non-object/non-array based replicants, it can lead to issues with the opposite, hence the suggestion (believe me, I spent too long trying). This means it's a bit more complex than setting things in the extension code, but isn't much different than how you may usually use a Vuex store if you are already used to those. Check out the included samples for more help.
