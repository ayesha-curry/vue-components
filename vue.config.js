const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'static',
  // html的输出路径
  indexPath: 'index.html',
  // 文件名hash
  filenameHashing: true,
  // 是否在保存的时候使用'eslint-loader'进行检查
  lintOnSave: true,
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('src/assets'))
  }
}
