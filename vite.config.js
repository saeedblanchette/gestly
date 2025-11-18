import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),  ViteImageOptimizer({
      png: {
        quality: 65,
      },
      jpeg: {
        quality: 65,
      },
      jpg: {
        quality: 65,
      },
      webp: {
        quality: 65,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),],
    base: '/gestly/'
})


