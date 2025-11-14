import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Set base so assets referenced with import.meta.env.BASE_URL work when
      // deploying to a subpath (e.g. GitHub Pages). Prefer providing
      // VITE_BASE_URL in an .env file; otherwise fall back to repo name.
      base: env.VITE_BASE_URL || env.BASE_URL || '/MichaelMagat-portfolio/',
      server: {
      port: 3000,
      host: '0.0.0.0',
      },
      plugins: [react()],
  define: {
  // expose common keys for both Vite-style and legacy process.env usage
  // renamed from GEMINI to BUILD for a more human-friendly name
  'import.meta.env.VITE_BUILD_API_KEY': JSON.stringify(env.VITE_BUILD_API_KEY || env.BUILD_API_KEY || ''),
  'process.env.API_KEY': JSON.stringify(env.VITE_BUILD_API_KEY || env.BUILD_API_KEY || ''),
  'process.env.BUILD_API_KEY': JSON.stringify(env.VITE_BUILD_API_KEY || env.BUILD_API_KEY || ''),
  },
      resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
      }
    };
});
