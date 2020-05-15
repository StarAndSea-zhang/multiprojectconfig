const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false, //!isProduction,
    outputDir: process.env.outputDir,
    productionSourceMap: false, // 生产环境下的 source map
    pages: {
        app: {
            // page 的入口
            entry: 'src/main/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: [
                'chunk-vendors',
                'app',
                'runtime',
            ],
        },
        wap: {
            // page 的入口
            entry: 'src/wap/main.ts',
            template: 'public/index.html',
            filename: 'wap.html',
            chunks: [
                'chunk-vendors',
                'wap',
                'runtime',
            ],
        },
        download: {
            // page 的入口
            entry: 'src/download/main.ts',
            template: 'public/index.html',
            filename: 'download.html',
            chunks: ['chunk-vendors','download', 'runtime']
        },
        doc: {
            // page 的入口
            entry: 'src/openDoc/main.ts',
            template: 'public/index.html',
            filename: 'doc.html',
            chunks: ['chunk-vendors','doc', 'runtime']
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('main',resolve('./src/main'))
        config.resolve.alias.set('download',resolve('./src/download'))
        config.resolve.alias.set('wap',resolve('./src/wap'))
        config.resolve.alias.set('doc',resolve('./src/openDoc'))
        console.log(config.resolve.alias)
    }

}