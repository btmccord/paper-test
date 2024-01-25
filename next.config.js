module.exports = { 
    webpack (config) { // required by @svgr/webpack lib
        config.externals = [...config.externals, { canvas: 'canvas', jsdom: 'jsdom' }];

        return config
    }
}
