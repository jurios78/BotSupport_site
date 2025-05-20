import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Корень проекта (где лежит index.html)
  build: {
    outDir: 'dist', // Папка для собранных файлов
    emptyOutDir: true
  }
});
