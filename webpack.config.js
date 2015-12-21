'use strict';

const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = { // --inline --hot
    context: /*path.resolve(*/__dirname + '/app'/*)*/,
    entry: {
        main: './main'
    },
    output: {
        path: /*path.resolve(*/__dirname + '/build'/*)*/,
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.less'],
        // root: [path.join(__dirname, "app/vendors")]
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        },/* {
            test: /\.html$/,
            loader: 'html'
        },*/ {
            test: /\.less$/,
            loader: 'style!css!less?resolve url'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]?[hash]'
        }, {
            test: /\.json$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new TransferWebpackPlugin([
            { from: 'img', to: 'img' },
            { from: 'partials', to: 'partials'}
        ])
    ],
    devServer: {
        contentBase: __dirname + '/build',
        hot: true
    }

    // watch: true
};