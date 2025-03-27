import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';

export default defineConfig({
    plugins: [pluginVue()],
    server: {
        port: 3000
    },
    moduleFederation: {
        options: {
            name: 'host_app',
            remotes: {
                remote_app: "remote_app@http://localhost:8000/remoteEntry.js",
            }
        }
    }
});
