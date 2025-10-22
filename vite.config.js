import { defineConfig } from "vite"
import { imagetools } from "vite-imagetools"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools() // compresión y resizing automático de imágenes
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    cssCodeSplit: true,
    reportCompressedSize: true,
    brotliSize: true,
    sourcemap: false,
    minify: "terser",

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },

    // Mejorar tree-shaking y optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          "react-vendor": ["react", "react-dom"],

          // UI libraries
          "ui-vendor": [
            "@radix-ui/react-select",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-checkbox",
          ],

          // Icons
          "icons": ["lucide-react"],

          // Router
          "router": ["react-router", "react-router-dom"],

          // Forms
          "forms": ["@formspree/react"],

          // Utilities
          "utils": ["tailwind-merge", "class-variance-authority"],
        },
      },
    },

    // Reducir límite de warnings para chunks grandes
    chunkSizeWarningLimit: 1000,
  },

  esbuild: {
    drop: ["console", "debugger"], // elimina logs también del prebundle
  },

  // Optimizaciones para desarrollo
  server: {
    fs: {
      allow: [".."],
    },
  },

  // Pre-bundling selectivo
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "lucide-react",
      "@formspree/react",
    ],
    exclude: [],
  },
})
