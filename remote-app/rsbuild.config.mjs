import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 3001,
  },
  moduleFederation: {
    options: {
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/button.vue',
        './CountDown': './src/components/CountDown.vue',
      },
      shared: {
        ...dependencies,
        vue: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.vue,
        },
      },
    },
  },
});
