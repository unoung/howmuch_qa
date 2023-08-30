const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/recommendation", {
      target: "http://43.200.225.232:8080",
      changeOrigin: true,
    })
  );
};
