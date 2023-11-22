import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

 const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/es',
    clean: true,
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'DydPlusCom',
      fileName: 'yud-plus',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome']
    }

  }
})
