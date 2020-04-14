module.exports = {

    devServer: {
        "proxy": {
            "/api": {
                "target": 'http://lpapi.cargoflash.com/',
                "pathRewrite": {
                    '^/api': ''
                },
                "ws": true,
                "changeOrigin": true,
                "secure": false
            }
        }
        // '/v3': {
        //     target: 'http://lpapi.cargoflash.com/',
        //     changeOrigin: true,
        //     pathRewrite: {
        //         '^/v3': ''
        //     }
        // }

    }


};