// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
const express = require('express')
const app = express()
 
var goods = require('./public/data/goods.json')  //本地json文件数据
var ratings = require('./public/data/ratings.json')
var seller = require('./public/data/seller.json')
 
var apiRoutes = express.Router();
app.use('/api',apiRoutes)

module.exports = {

  /* 部署应用包的基本URL */
  /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
  //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",

  /* 生产环境构建文件的目录 defalut: dist */

  outputDir: "dist",

  /* 放置生成的静态文件目录（js css img） */

  assetsDir: "static",

  /* 指定生成的index.html 输出路径 相对 default: index.html */

  // indexPath: "index.html",

  /* 指定生成文件名中包含hash default: true */

  // filenameHashing: true,

  /* 多页模式下 */

  /* pages: {
  
      index: {
  
        // page 的入口
  
        entry: "src/index/main.js",
  
        // 模板来源
  
        template: "public/index.html",
  
        // 在 dist/index.html 的输出
  
        filename: "index.html",
  
        // 当使用 title 选项时，
  
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  
        // title: "Index Page",
  
        // 在这个页面中包含的块，默认情况下会包含
  
        // 提取出来的通用 chunk 和 vendor chunk。
  
        chunks: ["chunk-vendors", "chunk-common", "index"]
  
      },
  
      // 当使用只有入口的字符串格式时，
  
      // 模板会被推导为 `public/subpage.html`
  
      // 并且如果找不到的话，就回退到 `public/index.html`。
  
      // 输出文件名会被推导为 `subpage.html`。
  
      // subpage: "src/subpage/main.js"
  
    } */

  /* 是否保存时 lint 代码 */

  //lintOnSave: process.env.NODE_ENV === "production",

  /* 是否使用编译器 default: false */

  // runtimeCompiler: false,

  /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */

  // transpileDependencies: [],

  /* 生产环境的source map */

  //productionSourceMap: true,

  // crossorigin: "",

  //integrity: false,

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    // config.plugin('provide').use(webpack.ProvidePlugin, [{ //配置jquery
    //     $: 'jquery',
    //     jquery: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery',
    //     Popper: ['popper.js','default']
    //   }]);
  },

  // css相关配置

  // css: {

  //   // 是否使用css分离插件 ExtractTextPlugin

  //   extract: true,

  //   // 开启 CSS source maps?

  //   sourceMap: false,

  //   // css预设器配置项

  //   loaderOptions: {},

  //   // 启用 CSS modules for all css / pre-processor files.

  //   modules: false

  // },

  devServer: {
    before(app) {
      app.get('/api/goods', (req, res) => {
           res.json({              
               errno: 0,   // 这里是你的json内容
               data: goods
           })
       })
       app.get('/api/ratings', (req, res) => {
           res.json({              
               errno: 0,   // 这里是你的json内容
               data: ratings
           })
       })
       app.get('/api/seller', (req, res) => {
        res.json({              
            errno: 0,   // 这里是你的json内容
            data: seller
        })
    })
    },

    port: 8081,

    host: "0.0.0.0",

    https: false,

    // 自动启动浏览器

    open: true,

    proxy: {
      "/api": {
        //代理路径 例如 https://baidu.com
        target: "https://baidu.com",
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,  //是否跨域
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }

  }

};