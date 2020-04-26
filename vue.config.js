
module.exports = {
    devServer: {
        "proxy": {
            "/api": {
                "target": 'http://api.lionparcel.com/',
                "pathRewrite": {
                    '^/api': ''
                },
                "ws": true,
                "changeOrigin": true,
                "secure": false
            },
            "/routes": {
                "target": 'http://lionparcel.com/api/',
                "ws": true,
                "changeOrigin": true,
                "secure": false,
            },
        }

    }


};