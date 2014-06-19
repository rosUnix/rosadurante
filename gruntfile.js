/* globals module */

module.exports = function (grunt) {
    'use strict';

    [
        'grunt-contrib-less',
        'grunt-contrib-connect',
        'grunt-open'

    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            prod: {
                options: {
                    paths: ['src/less'],
                    yuicompress: true
                },
                files: {
                    'src/css/styles.css': 'src/less/styles.less'
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: process.env.PORT || 5000,
                    base: 'src',
                    keepalive: true,
                }
            },
            dev: {
                options: {
                    port: 8000,
                    base: 'src'
                }
            }
        },

        open: {
            dev: {
                path: 'http://0.0.0.0:8000'
            }
        },

        clean: {
            all: ['.grunt', 'src/css']
        }

    });

    grunt.registerTask('dev', 'Compile and open', [
        'connect:dev', 'less:prod', 'open:dev'
    ]);
    grunt.registerTask('prod', 'Compile and run server', [
        'less:prod', 'connect:server'
    ]);
};