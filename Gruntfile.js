module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    amd: true,
                    namespace: function(filename) {
                        var folder = new String(filename).replace(/templates\/(.*)(\/\w+\.hbs)/, '$1');
                        return "JST." + folder;
                    },
                    processName: function (filePath) {
                        var fn = filePath.split("/")[2]; // remove path
                        return fn.split(".")[0]; // remove .hbs
                    }
                },
                files: {
                    "templates.js": "templates/**/*.hbs"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
}
