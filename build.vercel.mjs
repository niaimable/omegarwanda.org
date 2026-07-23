import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

await build({
  entryPoints: [path.join(__dirname, 'src/main.jsx')],
  bundle: true,
  outfile: path.join(__dirname, 'public/bundle.js'),
  format: 'iife',
  loader: { '.jsx': 'jsx', '.js': 'jsx', '.css': 'css' },
  jsx: 'automatic',
  jsxImportSource: 'react',
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: false,
  logLevel: 'info',
});
