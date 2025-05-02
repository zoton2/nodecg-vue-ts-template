# nodecg-vue-ts-template

Template for NodeCG bundles that use Vue.js and TypeScript.


## Technical Details

- Tested with Node.js v22.11.0 and above (as of writing, latest LTS properly tested and supported with NodeCG).
- Extension uses TypeScript.
- Browser uses Vue.js (v3), with TypeScript for the scripting.
  - Includes the [nodecg-vue-composable](https://github.com/Dan-Shields/nodecg-vue-composable) helper composable to help with using replicants; I advise you check it's README for more information.
  - Dashboard also includes Quasar, for easy styling of UI.
    - If you wish to configure Quasar differently, check [the quasar vite-plugin documentation](https://quasar.dev/start/vite-plugin#using-quasar).
  - Builds using Vite, using the [vite-plugin-nodecg](https://github.com/nodecg/vite-plugin-nodecg) plugin.
    - The bundle also overrides `vite` to v6 (dependency asks for v5) as it is tested working.
- ESLint is included for extension/browser/typings.
  - Extends some other recommended configurations.
- I personally use Visual Studio Code with some appropriate extensions so have made sure it works well in that editor.
  - Includes a `.vscode/extensions.json` that will suggest you appropriate extensions.
  - Includes a `.vscode/settings.json` that has some settings that you may find useful.
- The extension/browser files have some example code scattered about that should help in how to use things.

## Limitations

- I don't use any JSON schema specs higher than `draft-07` due to Visual Studio Code not supporting them correctly; see [this issue](https://github.com/microsoft/vscode/issues/98724).

## Package Commands

- `autofix`: Automatically fix any possible linting errors using ESLint.
- `prebuild`: Clean up all built/watched files; will automatically run before `build` if called.
- `build`: Build written code for use in production.
- `clean`: Clean up all built/watched files.
- `lint`: Finds any possible linting errors using ESLint, but does not fix them.
- `schema-types`: Create TypeScript typings for schemas/`Configschema.json` using `nodecg` CLI.
- `start`: Start NodeCG.
- `watch`: Build code and watch for changes, for use in development.

## Changelogs

All changes onwards from v3.0.0 are available on the [releases](../../releases) section. Other changelogs are available below.

### Differences between template v2 and v3...

This is a "brief" list of changes, although in relality it was mostly rewritten from the ground up, so there are probably more.

If you want to see all of the changes, check out the [original PR](https://github.com/zoton2/nodecg-vue-ts-template/pull/24).

- Switched Vite config file to TypeScript (`vite.config.mjs` > `vite.config.ts`).
- Updated how the extension code is built and how it is run in a Node.js context:
  - It now runs using the `module` type.
  - It is built targetting more modern standards (based on `@tsconfig/node22`).
- All updates needed for NodeCG v2, which isn't too many but is still some (mainly type related).
- Bumped `package.json`s `nodecg.compatibleRange` to `^2.3.0`, as that's the first NodeCG version that properly supported Node.js v22.11.0 LTS.
- Use NodeCG types from official dependency.
- Replaced [@vueuse/head](https://github.com/vueuse/head) with [@unhead/vue](https://github.com/unjs/unhead), due to the former's sunsetting.
- ESLint overhaul:
  - Upgraded from ESLint v9 from v8.
  - Switched to using flat configs.
  - A lot was stripped out that I don't think was needed (feel free to report any issues you may have).
  - No longer extends the configuration from airbnb-typescript, as it isn't available for ESLint v9 yet, and I wanted to try without it.
- Reduced the amount of `package.json` scripts/commands by combining some of them and removing the extension/browser/etc. splits.
- Added a `./src/browser_shared` folder with a shared `replicant.ts` helper file for browser contexts.
- Removed MDI CSS being imported by default on dashboard panels.
- Removed the `module-alias` parts as I felt they may have made things too confusing.
- Moved browser `*.ts` entry files into the the respective sub-directories for better organisation.

### Differences between template v1 and v2...

- Upgraded Vue to v3 from v2.
- Uses Vite to build browser code instead of Webpack.
- Uses Quasar for material design styling help instead of Vuetify.
- No TypeScript decorators used in the browser code now as they aren't needed.
- Adds [nodecg-vue-composable](https://github.com/Dan-Shields/nodecg-vue-composable) to help with using/modifying replicants in browser.
- No longer includes any Vue state plugins by default (as no longer needed for replicants), but you can add one if needed (I'd suggest [pinia](https://pinia.vuejs.org/)).
- Includes [@vueuse/head](https://github.com/vueuse/head), in the example code just used to help change the title of each page.
- Uses the [nodecg-types](https://github.com/codeoverflow-org/nodecg-types) package instead of directly referencing the installed NodeCG instance.
