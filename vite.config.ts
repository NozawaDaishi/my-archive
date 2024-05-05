import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-archive/',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '~', replacement: '/public' },
    ],
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/_mixin.scss";`,
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: 'docs', // 出力ディレクトリを docs に変更
    emptyOutDir: true, // これを追加
  },
})
