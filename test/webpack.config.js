module.exports = {
  mode: "production",
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
          options: {
            minify: {
                html: true,
                js: true,
            }
          },
        },
      },
    ],
  },
  externals: {
    "node:test": "commonjs node:test",
  }
};
