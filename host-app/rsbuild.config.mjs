import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';

export default defineConfig({
    plugins: [pluginVue()],
    server: {
        port: 3000,
        // proxy: {
        //     './remoteEntry.js': {
        //         target: 'http://localhost:8000',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/remoteEntry.js': '/remoteEntry.js'
        //         }
        //     }
        // }
    },
    moduleFederation: {
        options: {
            name: 'host_app',
            remotes: {
                remote_app: "remote_app@http://localhost:3001/remoteEntry.js",
            }
        }
    }
});
