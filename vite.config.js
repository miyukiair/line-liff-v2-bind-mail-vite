import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/line-liff-v2-bind-mail-vite/dist/',
  alias: {
    "/@": path.resolve(__dirname, "src"),
  },
  optimizeDeps: {
    include: ["axios"]
  },
  server: {cors: true}
})
