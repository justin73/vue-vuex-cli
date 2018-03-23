const webpackConfig = require('./build/webpack.test.conf.js')
const wallabyWebpack = require('wallaby-webpack')

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.*',
      '!src/**/*.test.js'
    ],

    tests: [
      'test/**/*.spec.js',
      'src/**/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.vue': require('wallaby-vue-compiler')(wallaby.compilers.babel({}))
    },

    testFramework: 'jest',

    setup: function (wallaby) {
      const jestConfig = require('./package.json').jest
      jestConfig.moduleNameMapper = {
        '^@/(.*)$': wallaby.projectCacheDir + '/src/$1'
      }
      wallaby.testFramework.configure(jestConfig)
    },

    debug: true
  }
}
