var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const { createProxyMiddleware } = require('http-proxy-middleware');

const route = {
    "target": 'http://lionparcel.com/api/',
    "changeOrigin": true, // needed for virtual hosted sites
    " ws": true, // proxy websockets
    "secure": false,
}
const tariff = {
    "target": 'http://api.lionparcel.com/',
    "changeOrigin": true, // needed for virtual hosted sites
    " ws": true, // proxy websockets
    "secure": false,
    "pathRewrite": {
        '^/api': ''
    },
}

const exProxy = createProxyMiddleware(route);
const secondProxy = createProxyMiddleware(tariff);
app = express();
app.use('/routes', exProxy);
app.use('/api', secondProxy);
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);