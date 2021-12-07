import { defineConfig } from 'vite'
const { resolve } = require('path')
import react from '@vitejs/plugin-react'
// import 'vite/modulepreload-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        manifest: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // users: resolve(__dirname, './user.html')
            }
        }
    }
})