import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/{fcc_javascript_calculator}",
  plugins: [react()],
})
