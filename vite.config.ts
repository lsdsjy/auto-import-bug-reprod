import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), AutoImport({ imports: ['react'] }),]
})
