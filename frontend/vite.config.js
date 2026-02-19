import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If using Tailwind, you might have this plugin (install if needed: npm install @tailwindcss/vite)
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
});