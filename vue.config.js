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

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 boolean | 'warning' | 'default' | 'error'
  lintOnSave: 'default', 

  
  runtimeCompiler: false
}