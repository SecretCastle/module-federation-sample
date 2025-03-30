import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';
import path from "node:path";

export default defineConfig({
    plugins: [pluginVue()],
    server: {
        port: 3000
    },
    moduleFederation: {
        options: {
            name: 'host_app',
            remotes: {
                remote_app: "remote_app@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                "@shared/tools": {
                    import: path.resolve(__dirname, '../shared/tools/index.js'),
                    version: '0.0.1',
                    eager: true
                }
            }
        }
    }
});
