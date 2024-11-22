import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// TODO: Сделать все SVG компонентами. Только нужно сохранить ховер эффекты и чтобы при сборке не было js для этого

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'never',
    assets: 'assets',
    format: 'file',
  },
  integrations: [relativeLinks()],
  vite: {
    build: {
      cssMinify: false,
      minify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];

            if (/png|jpeg|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            } else if (/woff|woff2|ttf|otf/i.test(extType)) {
              extType = 'fonts';
            }

            return `assets/${extType}/[name][extname]`;
          },
          entryFileNames: 'assets/js/[name].js',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  compressHTML: false,
});
