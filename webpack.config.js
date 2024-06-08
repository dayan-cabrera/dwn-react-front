const path = require("path");

module.exports = {
  mode: "development", // Habilita características de desarrollo
  entry: "./src/index.tsx", // Tu punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Ignora los errores de módulos no resueltos
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
  },
};
