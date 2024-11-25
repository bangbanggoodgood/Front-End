import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     '/users': 'http://localhost:8080',
  //     '/sido': 'http://localhost:8080',
  //     '/gugun': 'http://localhost:8080',
  //     '/dong': 'http://localhost:8080',
  //     '/apartments': 'http://localhost:8080',
  //     '/comments': 'http://localhost:8080',
  //     '/likes': 'http://localhost:8080',
  //     '/deals': 'http://localhost:8080',
  //     '/questions': 'http://localhost:8080',
  //   },
  // },
})
