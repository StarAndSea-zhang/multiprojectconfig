const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false, //!isProduction,
  outputDir: process.env.outputDir,
  productionSourceMap: false, // 生产环境下的 source map
  pages: {
    app: {
      // page 的入口
      entry: "src/main/main.ts",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "app", "runtime"]
    },
    wap: {
      // page 的入口
      entry: "src/wap/main.ts",
      template: "public/index.html",
      filename: "wap.html",
      chunks: ["chunk-vendors", "wap", "runtime"]
    },
    download: {
      // page 的入口
      entry: "src/download/main.ts",
      template: "public/index.html",
      filename: "download.html",
      chunks: ["chunk-vendors", "download", "runtime"]
    },
    doc: {
      // page 的入口
      entry: "src/openDoc/main.ts",
      template: "public/index.html",
      filename: "doc.html",
      chunks: ["chunk-vendors", "doc", "runtime"]
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve( './src/main/assets/less/global.less')]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("main", resolve("./src/main"));
    config.resolve.alias.set("download", resolve("./src/download"));
    config.resolve.alias.set("wap", resolve("./src/wap"));
    config.resolve.alias.set("doc", resolve("./src/openDoc"));
    console.log(resolve( './src/main/assets/global.less'));
  }
};
