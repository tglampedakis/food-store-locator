const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/v3',
    createProxyMiddleware({
      target: 'https://api.yelp.com',
      changeOrigin: true,
    })
  );
};
