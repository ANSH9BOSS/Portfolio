// Build script that bypasses symlink issues
const { build } = require('vite');

build({
  root: process.cwd(),
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInclude: ['**/*'],
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}).then(() => {
  console.log('✅ Build successful! Output in dist/');
}).catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
