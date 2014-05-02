module.exports = (grunt)->
  grunt.initConfig(
    pkg : grunt.file.readJSON('package.json')
    
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: "#{__dirname}/src/",
        src: ['**/*.coffee'],
        dest: "#{__dirname}/build/"
        ext: '.js'
      },
    }
    
    browserify: {
      dist: {
        files: {
          'static/runClient.js' : ["#{__dirname}/build/runClient.js"]
        }
      }
    }
    
    supervisor : {
      target : {
        script : "#{__dirname}/build/runServer.js"
        options: {
          watch : ["#{__dirname}/build"]
        }
      }
    }
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      }
      dist: {
        files: {
          'static/runClient.min.js': ['static/runClient.js']
        }
      }
    }
    
    watch: {
      files: '**/*.coffee',
      tasks: ['coffee', 'browserify', 'uglify']
    }
  )
  
  grunt.loadNpmTasks('grunt-supervisor')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  
  grunt.registerTask('server', ['supervisor'])
