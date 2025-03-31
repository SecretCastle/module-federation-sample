import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';
import path from 'node:path';
import pkg from '../shared/package.json';

const isDev = import.meta.env.NODE_ENV === 'development';

export default defineConfig({
    plugins: [pluginVue()], server: {
        port: 3000,
    }, moduleFederation: {
        options: {
            name: 'host_app', remotes: {
                remote_app: `remote_app@http://localhost:${isDev ? '3001' : '8000'}/remoteEntry.js`,
            },
            shared: {
                '@shared': {
                    import: path.resolve(__dirname, '../shared/index.js'),
                    version: pkg.version,
                    requiredVersion: pkg.version,
                    eager: true,
                },
            },
        },
    },
});
