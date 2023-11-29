import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // devServer: {
	//   proxy:{
  //     '/api':{
  //         target: "http://localhost:8889/", //跨域地址
  //         changeOrigin: true, //支持跨域
  //         rewrite: (path) => path.replace(/^\/api/, "")//重写路径,替换/api
  //     }
  //  }
  // },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
