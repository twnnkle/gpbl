import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    build: {
        inlineStylesheets: 'never'
    },
    vite: {
        build: {
            cssMinify: false
        }
    }
});
