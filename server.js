const http = require('http');
const fs   = require('fs');
const path = require('path');
const PORT   = 8080;
const PUBLIC = path.join(__dirname, 'public');
const MIME   = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon' };

function getBundleVersion() {
  try { return fs.statSync(path.join(PUBLIC, 'bundle.js')).mtimeMs.toString(36); }
  catch { return Date.now().toString(36); }
}
function serveIndex(res) {
  const v = getBundleVersion();
  let html = fs.readFileSync(path.join(PUBLIC, 'index.html'), 'utf8');
  html = html.replace(/bundle\.css(\?[^"]*)?"/g, `bundle.css?v=${v}"`);
  html = html.replace(/bundle\.js(\?[^"]*)?"/g,  `bundle.js?v=${v}"`);
  res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-cache, no-store, must-revalidate' });
  res.end(html);
}
const server = http.createServer((req, res) => {
  const urlPath  = req.url.split('?')[0];
  const filePath = path.join(PUBLIC, urlPath);
  if (urlPath === '/' || urlPath === '/index.html') return serveIndex(res);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    const isBundle = ext==='.js' || ext==='.css';
    const headers = { 'Content-Type':type, 'Cache-Control': isBundle ? 'no-cache' : 'public, max-age=31536000' };
    if (isBundle) headers['ETag'] = '"' + fs.statSync(filePath).mtimeMs + '"';
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  serveIndex(res);
});
server.on('error', err => {
  if (err.code==='EADDRINUSE') { console.error(`\n❌ Port ${PORT} already in use.\n`); process.exit(1); }
  else throw err;
});
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀  ROC Church is running!\n\n   Open: http://localhost:${PORT}\n\n   Press Ctrl+C to stop\n`);
});
