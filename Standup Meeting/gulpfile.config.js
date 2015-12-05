'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = 'src/';
        this.sourceApp = 'app/';

        this.tsOutputPath= this.sourceApp;
        this.tsOutputPathComponents= this.sourceApp+'components/';
        this.tsOutputPathViewModels= this.sourceApp+'viewModels/';
        
        this.allJavaScript = [this.source + '/**/*.js'];
        this.allJavaScriptComponents = [this.source + 'components/**/*.js'];
        this.allJavaScriptViewModels = [this.source + 'viewModels/**/*.js'];
        
        this.allTypeScript = this.source + '/**/*.ts';
        this.allTypeScriptComponents = this.source + 'components/**/*.ts';
        this.allTypeScriptViewModels = this.source + 'viewModels/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
