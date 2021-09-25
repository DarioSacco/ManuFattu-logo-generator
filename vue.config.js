module.exports = {
  assetsDir: 'assets',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ManuFattu-logo-generator/'
    : '/',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule
      .use('./svg-cleaner')
      .loader('./svg-cleaner');
  },
};