import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// ⚡ Plugin para inyectar CSS crítico inline automáticamente

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
          "react-vendor": ["react", "react-dom"],
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
          "icons": ["lucide-react"],
          "router": ["react-router-dom"],
          "utils": ["tailwind-merge", "class-variance-authority", "clsx"],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/styles-[hash][extname]'
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
      "react-hook-form",
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