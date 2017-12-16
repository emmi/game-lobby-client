function gruntSetup(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    sourceMap: false
                },
                files: {                         // Dictionary of files
                    './src/stylesheets/main.css': './src/stylesheets/Main.scss'
                }
            }
        },
        originalWatch: {
            sass: {
                files: 'src/**/*.scss',
                tasks: ['sass'],
                options: {
                    atBegin: true
                }
            },
        },
        shell: {
            serve: {
                options: {
                    stdout: true,
                    execOptions: {
                        maxBuffer: Infinity
                    }
                },
                command: 'react-scripts start'
            }
        },
        concurrent: {
            watchAndServe: {
                tasks: [
                    'originalWatch:sass',
                    'shell:serve'
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.renameTask('watch', 'originalWatch');

    //TASKS

    grunt.registerTask('ensureBuildDir', 'Makes sure that the build directory exists', function() {
        grunt.file.mkdir('./build');
    });

    grunt.registerTask('serve', [
        'ensureBuildDir',
        'concurrent:watchAndServe'
    ]);

    // grunt.registerTask('default', ['sass']);

};

module.exports = gruntSetup;
