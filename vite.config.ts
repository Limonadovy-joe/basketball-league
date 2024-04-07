import { defineConfig, UserConfig } from 'vite';
import { InlineConfig } from 'vitest';
import react from '@vitejs/plugin-react-swc';

interface VitestConfig extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
} as VitestConfig);
