import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/_variables";
        `
      }
    },
    devSourcemap: true
  },
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png','mask-icon-512x512.png'],
      manifest: {
        name: 'Meka Auto',
        short_name: 'MekaAuto',
        description:'Consigue el respuesto que necesitas, rapido y al mejor precio',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'  
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true,

      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      views: fileURLToPath(new URL('./src/views', import.meta.url)),
      components: fileURLToPath(new URL('./src/views/components', import.meta.url)),
      img: fileURLToPath(new URL('./src/img', import.meta.url))
    }
  }
});
