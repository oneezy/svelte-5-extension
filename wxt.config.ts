import { defineConfig } from 'wxt';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: "Name",
    description: "My extension description",
    permissions: ["storage"],
    web_accessible_resources: [
      {
        resources: ["dashboard.html"],
        matches: ["*://*/*"]
      }
    ],
    // entrypoints: {
    //   // Existing entry points
    //   background: 'src/entrypoints/background.ts',
    //   popup: 'src/entrypoints/popup/popup.ts',
    //   dashboard: 'src/entrypoints/dashboard/dashboard.ts',
    //   // Updated content script entry point
    //   content: 'src/entrypoints/content/content.ts'
    // },
  },
  vite: () => ({
    plugins: [
      wasm(),
      topLevelAwait(),
      tailwindcss()
    ],
  }),

  runner: {
    startUrls: ['https://www.google.com']
  }
});
