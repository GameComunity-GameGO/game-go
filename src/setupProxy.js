const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.39.37.209:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    "/ws",
    createProxyMiddleware({
      target: "http://15.164.200.86:8080/ws/chat",
      ws: true,
      changeOrigin: true,
    })
  );
};
