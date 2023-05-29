import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        manifest: {
          name: "Fariji",
          short_name: "Fariji",
          start_url: "/",
          display: "standalone",
          background_color: "#FFA500",
          icons: [
            {
              src: "/icons/farijix128.png",
              sizes: "128x128",
              type: "image/png",
              purpose: "any"
            },
            {
              src: "/icons/farijix192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable"
            },
            {
              src: "/icons/farijix512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ],
          theme_color: "#FFA500"
        }
      }
    )
  ],
})
