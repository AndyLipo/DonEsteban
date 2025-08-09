import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    // Mejorar tree-shaking y optimización
    rollupOptions: {
      output: {
        // Separar librerías grandes en chunks separados
        manualChunks: {
          // React en su propio chunk
          'react-vendor': ['react', 'react-dom'],
          // UI libraries
          'ui-vendor': ['@radix-ui/react-select', '@radix-ui/react-navigation-menu', '@radix-ui/react-checkbox'],
          // Iconos en chunk separado
          'icons': ['lucide-react'],
          // Routing
          'router': ['react-router', 'react-router-dom'],
          // Forms
          'forms': ['@formspree/react'],
          // Utilities
          'utils': ['tailwind-merge', 'class-variance-authority']
        }
      }
    },
    // Optimizar para producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remover console.logs en producción
        drop_debugger: true
      }
    },
    // Reducir límite de warnings para chunks grandes
    chunkSizeWarningLimit: 1000,
    // Habilitar source maps solo en desarrollo
    sourcemap: false
  },
  // Optimizaciones para desarrollo
  server: {
    // Mejorar tiempo de inicio en desarrollo
    fs: {
      // Optimizar acceso a archivos
      allow: ['..']
    }
  },
  // Pre-bundling de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'lucide-react',
      '@formspree/react'
    ],
    // Excluir dependencias que no necesitan pre-bundling
    exclude: []
  }
})