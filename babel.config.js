module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        "root": ["./src"], // Set the alias root to your desired directory
        "alias": {
          "@": "./"
        }
      }
    ]],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    }
  };
};
