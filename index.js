const http= require("http")
const httpProxy = require("http-proxy")
const proxy = httpProxy.createProxyServer({
changeOrigin: true,
secure: false
});
const server  = http.createServer((req, res) =>{
    const targetUrl = 'https://jsonplaceholder.typicode.com'
    proxy.web(req,res, {target: targetUrl} ,(error) =>{
        console.error(`proxy error: ${error.message}`)
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(`Error: ${error.message}`)
    });
});
const port = 3000
server.listen(port, () =>{
    console.log(` the Proxy server is working on http://localhost:${port} `)
});
