import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/interior-designer-portfolio/' : '/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['aos']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false
  }
})
