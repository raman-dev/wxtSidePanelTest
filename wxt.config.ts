import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    // matches: ["https://*.google.com/*"],
    permissions:["sidePanel","tabs","activeTab"],
    commands :{
      open_panel:{
        suggested_key: {
          default: "Ctrl+Shift+H"
        },
        description : "Open extension side panel"
      }
    }
  },
});
