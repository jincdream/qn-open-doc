const path = require('path');
const fs = require('fs');
const localIdentName = '[name][local]-[hash:base64:5]';
module.exports = {
  packName: 'customeservice-worker',
  packOption: ({context}) => {
    return {
    dll: false,
    modules: true,
    happypack: true,
    common:"vendor",
    less: true,
    sass: true,
    config: {
      pages:'src',
      localIdentName,
      externals:{
        "react": "React",
        "react-dom":"ReactDOM"
      },
      resolve:{
        "react":"worker-react"
      },
      babel: {
        babelrc: false,
        presets: ['react', 'env'],
        plugins: [
          'transform-decorators-legacy',
          'transform-es2015-modules-commonjs',
          'transform-object-rest-spread',
          'transform-class-properties',
          [
            "react-css-modules",
            {
              context,
              "generateScopedName": localIdentName,
              "filetypes": {
                ".scss": {
                  "syntax": "postcss-scss"
                },
                ".less": {
                  "syntax": "postcss-less"
                }
              },
              "webpackHotModuleReloading": true,
              "handleMissingStyleName": "warn"
            }
          ]
        ]
      }
      // contentBase: [ //静态资源目录
      //   {
      //     name: '',
      //     path: path.resolve(__dirname, './')
      //   }
      // ]
    }
  }}
};


