'use strict';
var GulpConfig = (function () {
    function gulpConfig() { 
        this.source = 'src/';
        this.sourceApp = 'app/';

        this.tsOutputPath= this.sourceApp; 
        
        this.allJavaScript = [this.source + '/**/*.js']; 
        this.allTypeScript = this.source + '/**/*.ts'; 

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
