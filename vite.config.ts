import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      preview: {
        port: 4173,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.NODE_ENV': JSON.stringify(mode)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        sourcemap: !isProduction,
        minify: isProduction ? 'terser' : false,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              icons: ['lucide-react']
            }
          }
        },
        chunkSizeWarningLimit: 1000,
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react']
      }
    };
});
