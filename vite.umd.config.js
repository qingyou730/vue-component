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
    outDir: 'dist/umd',
    clean: true,
    terserOptions : {
      compress : {
        drop_console : true ,
        drop_debugger : true ,
      },
    }, 
    lib: {
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'DydPlusCom',
      fileName: 'dyd-plus',
      formats: ['umd'],
    },
    rollupOptions: {
        external: ['vue', 'vue-component-dyd',],
      // 导出全局名称
      output: {
        exports: 'named'
      },
      // 查找区局依赖 vue --->>  external: ['vue'],
      global: {
        vue: 'Vue',
      }
    }
  }
})
