module.exports = function(grunt){
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),

        jshint : {
            options: {
                undef: true,
                browser: true,
                devel: true,
                esversion: 6,
                reporter: require('jshint-stylish'),
                globals:{
                    jQuery: true
                }
            },
            build: ['files/js/app.js', 'files/**/*.js']

        },

        uglify: {
            build: {
                files: {
                    'files/js_prod/app.min.js': ['files/js/*.js']
                }
            }
            

        },
        cssmin : {
            target : {
                files : {
                    'files/css_prod/app.min.css' : [
                        'files/css/*.css'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: ['files/css/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['files/js/*.js'],
                tasks: ['jshint', 'uglify']
            }
        }



    });

    grunt.task.registerTask('default', ['watch']);
    // load all the grunt plugins 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

}