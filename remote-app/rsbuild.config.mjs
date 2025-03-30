import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';
import {dependencies} from './package.json';
import * as path from "node:path";

export default defineConfig({
    output: {
        // 初步探索：remote-app打包成公共产物后，需要加上一个prefix前缀，可让host-app访问到打包产物中的js文件
        // assetPrefix: 'http://localhost:8000'
    },
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
                vue: {
                    singleton: true,
                    eager: true,
                    requiredVersion: dependencies.vue,
                },
                lodash: {
                    singleton: true,
                    eager: true,
                    requiredVersion: dependencies.lodash,
                }
            },
        },
    },
});
