import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 添加基础路径配置
  base: '/',
  // 添加构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 生成 source map
    sourcemap: true,
    // 优化打包大小
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  // 服务器配置
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
});