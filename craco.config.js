// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    configure: (webpackConfig, { env }) => {
      const isProd = env === "production";

      if (isProd) {
        // 1. Remove React Refresh plugin (webpack)
        webpackConfig.plugins = webpackConfig.plugins.filter(
          (plugin) =>
            !(
              plugin.constructor?.name?.includes("ReactRefresh") ||
              plugin.constructor?.name?.includes("HotModuleReplacementPlugin")
            )
        );

        // 2. Remove React Refresh loader (babel)
        if (webpackConfig.module?.rules) {
          webpackConfig.module.rules.forEach((rule) => {
            if (rule.oneOf) {
              rule.oneOf.forEach((loaderRule) => {
                if (
                  loaderRule.loader &&
                  loaderRule.loader.includes("babel-loader") &&
                  loaderRule.options?.plugins
                ) {
                  loaderRule.options.plugins = loaderRule.options.plugins.filter(
                    (p) =>
                      !(
                        p === "react-refresh/babel" ||
                        p?.includes?.("react-refresh")
                      )
                  );
                }
              });
            }
          });
        }
      }

      return webpackConfig;
    },
  },
};
