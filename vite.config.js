import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para el proyecto
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {sourcemap:false},
    // Configuración del servidor de desarrollo
    server: {
        port: 3000,
        open: true
    }
})