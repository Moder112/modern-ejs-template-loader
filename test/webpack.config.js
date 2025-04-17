module.exports = {
  mode: "production",
  cache: false,
  output: {
    path: __dirname,
    filename: "test.js",
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: {
          loader: require.resolve("../"),
          options: {},
        },
      },
    ],
  },
  externals: {
    "node:test": "commonjs node:test",
  }
};
