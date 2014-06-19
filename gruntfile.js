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
                    port: 8000,
                    base: 'src'
                }
            }
        },

        open: {
            server: {
                path: 'http://0.0.0.0:8000'
            }
        },

        clean: {
            all: ['.grunt', 'src/css']
        }

    });

    grunt.registerTask('all', 'Compile and open', [
        'connect:server', 'less:prod', 'open:server'
    ]);
    grunt.registerTask('prod', 'Compile and run server', [
        'less:prod', 'connect:server'
    ]);
};