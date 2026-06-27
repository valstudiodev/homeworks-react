import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'

export default defineConfig({

  base: '/homeworks-react/',

  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'homeworks': path.resolve(__dirname, './src/homeworks'),
      'styles': path.resolve(__dirname, './src/styles'),
      'assets': path.resolve(__dirname, './src/assets'),
      'constants': path.resolve(__dirname, './src/constants')
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
