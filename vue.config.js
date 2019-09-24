const VueMarkDownOptions = require('./scripts/vue-markdown-loader.conf');
module.exports = {
  productionSourceMap: false,
  parallel: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 108,
            exclude: /muse-ui|iview|src/i
          })
        ]
      }
    }
  },
  chainWebpack(config) {
    config.resolve.extensions.add('.md');
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(VueMarkDownOptions);
  }
};
