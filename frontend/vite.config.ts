import { defineConfig } from 'vite'
import { ViteEjsPlugin } from "vite-plugin-ejs";

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    ViteEjsPlugin((viteConfig) => ({
      // viteConfig is the current Vite resolved config
      env: viteConfig.env,
    })),

    react(),
  ],
})
