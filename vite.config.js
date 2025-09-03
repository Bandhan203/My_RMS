import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide': ['lucide-react'],
          'vendor': ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false,
      useFsEvents: false
    }
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
