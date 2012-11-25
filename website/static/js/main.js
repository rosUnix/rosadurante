require.config({
    baseUrl: '/static/js',
    paths: {
        Backbone: 'libs/backbone.min',
        underscore: 'libs/underscore.min',
        jquery: 'libs/jquery.min',
        Mustache: 'libs/mustache.min'
    },
    shim: {
        underscore: {
            exports: '_',
        },
        Backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        Mustache: {
            exports: 'Mustache',
        }
    }
});

require(['app']);