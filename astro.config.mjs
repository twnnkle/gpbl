import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://twnnkle.github.io',
    base: 'gpbl',
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
