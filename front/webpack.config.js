module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: "bundle.js",
      path: __dirname + '/../back/public'
    },
    context: __dirname,
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/env"
              ]
            }
          }
        },        
        {
          test: /.(css)$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },
              },
            },
          ],
        },
        {
          test: /.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    }
};

  