import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: './src/test/vitest.setup.ts',
      environment: 'jsdom',
      threads: false,
    },
  })
);
