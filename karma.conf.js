module.exports = function(config) {
    var webpackConfig = require('./config/webpack.test.js');

    config.set({
        basePath: '',
        frameworks: [ 'jasmine' ],
        files: [ 
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/sinon/pkg/sinon.js',
            { pattern: 'spec-bundle.js', watched: false } 
        ],
        preprocessors: { 'spec-bundle.js': ['webpack', 'sourcemap'] },
        webpack: webpackConfig,
        webpackServer: { noInfo: true },
        reporters: [ 'spec' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [ 'PhantomJS' ],
        singleRun: true
    });
};