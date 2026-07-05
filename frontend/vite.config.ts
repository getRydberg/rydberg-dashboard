import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Accessed over the LAN by hostname/IP (home-server dashboard), not just
    // localhost, so disable Vite's Host header allowlist check.
    allowedHosts: true,
  },
})
