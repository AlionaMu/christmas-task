const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: { 
    rules: [      
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        },
      },
            { 
              test: /\.txt$/,
              use: 'raw-loader' 
            },
            { 
              test: /\.tsx?$/,
              loader: "ts-loader" },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [ "style-loader", "css-loader", "sass-loader" ],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(mp3|wav)$/,
            type: 'asset/resource',
        },
        {  
            test: /\.json$/i,
            type: 'asset/resource',
        }],
  },
  plugins: [...esLintPlugin(development),
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html')}),  
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new CopyPlugin({
              patterns: [
              { from: 'public'  }  
            ]})
  ],
  resolve: {
    extensions: ['.js', '.ts']
},
  ...devServer(development)
})