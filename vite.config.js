import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    cssCodeSplit: true,
    reportCompressedSize: false,
    sourcemap: false,
    minify: "terser",
    assetsInlineLimit: 4096,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        comments: false,
      },
    },

    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          "react-vendor": ["react", "react-dom"],

          // UI libraries - Radix separado por uso
          "radix-core": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
          ],
          "radix-forms": [
            "@radix-ui/react-select",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-label",
          ],
          "radix-layout": [
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-accordion",
            "@radix-ui/react-separator",
          ],

          // Icons
          "icons": ["lucide-react"],

          // Router
          "router": ["react-router-dom"],

          // Utilities
          "utils": ["tailwind-merge", "class-variance-authority", "clsx"],
        },

        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },

    chunkSizeWarningLimit: 500,
  },

  esbuild: {
    drop: ["console", "debugger"],
    legalComments: 'none',
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "react-hook-form", // Solo mantener react-hook-form si lo usas
    ],
    exclude: [],
  },

  css: {
    devSourcemap: false,
  },

  server: {
    fs: {
      allow: [".."],
    },
  },
})