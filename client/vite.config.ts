import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Fariji',
        short_name: 'Fariji',
        theme_color: '#FF9549',
        background_color: '#ffffff',
        display: "standalone",
        start_url: "/"
      },
      workbox: {
         // Cache the index.html file
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://example.com/$'),
            handler: 'StaleWhileRevalidate',
          },
        ],
      },
      registerType: 'autoUpdate',
    }),
    
  ],
})
