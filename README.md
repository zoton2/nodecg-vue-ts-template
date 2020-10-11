# nodecg-vue-ts-template
Template for NodeCG bundles that use Vue.js and TypeScript.


## Technical Details

- Extension uses *TypeScript*.
- Browser uses *Vue.js*, with *TypeScript* for the scripting.
  - *TypeScript* uses decorators, with [vue-class-component](https://github.com/vuejs/vue-class-component), [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) and [vuex-class](https://github.com/ktsn/vuex-class)/[vuex-class-state2way](https://github.com/scleriot/vuex-class-state2way) to help (I chose these because in my experience it helped with correct typings while making Single File Components and such).
  - Includes *Vuex* and a template file for using it with replicants ([`./src/browser_shared/replicant_store.ts`](src/browser_shared/replicant_store.ts)).
  - Dashboard also includes *Vuetify*, for easy styling of UI.
  - Builds using *webpack*.
- *ESLint* is included for extension/browser/typings.
  - Extends [airbnb-typescript/base](https://github.com/iamturns/eslint-config-airbnb-typescript), alongside a few other recommended/essential packages.
  - Has some personal choices/override rules, but not many.
- I personally use *Visual Studio Code* with some appropriate extensions, so have made sure it works well in that editor.
- `script/typeschemas.js` included to help you convert JSON schemas to *TypeScript* typings.
- The extension/browser files have some example code scattered about that should help in how to use things.


## Package Commands

- `autofix`: Automatically fix any possible linting errors using ESLint.
- `autofix:browser`: See above, but only for browser based code.
- `autofix:extension`: See above, but only for extension based code/typings.
- `build`: Build written code for use in production.
- `build:browser`: See above, but only for browser based code.
- `build:extension`: See above, but only for extension based code.
- `clean`: Clean up all built/watched files.
- `start`: Start NodeCG.
- `typeschemas`: Create TypeScript typings of anything in the `schemas` directory, and also the `Configschema.json` if it exists.
- `watch`: Build code and watch for changes, for use in development.
- `watch:browser`: See above, but only for browser based code.
- `watch:extension`: See above, but only for extension based code.
