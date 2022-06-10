import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      external: resolve(__dirname, 'src'),
      input: {
        main: resolve(__dirname, 'src/index.html'),
        "delhi-accidents": resolve(__dirname, 'src/delhi-accidents/index.html')
      }
    }
  }
})
