import { build } from '/home/claude/.npm-global/lib/node_modules/tsx/node_modules/esbuild/lib/main.js';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
await build({
  entryPoints: [path.join(__dirname, 'src/main.jsx')],
  bundle: true,
  outfile: path.join(__dirname, 'public/bundle.js'),
  format: 'iife',
  loader: { '.jsx':'jsx', '.js':'jsx', '.css':'css' },
  jsx: 'automatic',
  jsxImportSource: 'react',
  alias: {
    'react': '/home/claude/.npm-global/lib/node_modules/react',
    'react-dom': '/home/claude/.npm-global/lib/node_modules/react-dom',
    'react-dom/client': '/home/claude/.npm-global/lib/node_modules/react-dom/client.js',
  },
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: false,
  logLevel: 'info',
});
