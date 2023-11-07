module.exports = {

  // 部署的路径，默认空即可，一般当不是部署在根域名时需要配置，但保持默认同样可访问(相对路径)
  publicPath: '', 

  // 生产环境构建目录
  outputDir: 'dist', 

  // 生成静态文件目录，相对于outputDir
  assetsDir: 'static', 

  // 指定生成的'index.html'的路径，相对于outputDir
  indexPath: 'index.html', 

  // 生成的静态资源的文件名中是否包含了 hash
  filenameHashing: true, 

  // MPA多页面模式
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html', // 在dist/index.html 的输出，
  //     title: '标题', // page title
  //   },
  //   otherPage: {

  //   }
  // },

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 boolean | 'warning' | 'default' | 'error'
  lintOnSave: 'default', 

  // 是否使用包含运行时编译器的 Vue 构建版本，配合修改main.js中的代码
  runtimeCompiler: true,

  // 你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖；boolean | Array<string | RegExp>
  // transpileDependencies: false,

  // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。仅控制构建时通过loader注入的
  // crossorigin: ''

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  // integrity: ''

  // 配置代理服务器
  // devServer: ''
  devServe: {
    '/api': {
      target: '<url>',
      ws: true,
      changeOrigin: true,
    },
    '/otherApi': {
      target: '<otherApi>'
    }
  }
}