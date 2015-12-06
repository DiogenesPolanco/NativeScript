var applicationModule = require("application");
var viewsModule = require("./utils/views");
var serviceModule = require("./utils/service");
applicationModule.cssFile = "styles/app.css";
if (serviceModule.service.isAuthenticated) {
    applicationModule.mainModule = viewsModule.Views.main;
}
else {
    applicationModule.mainEntry = {
        moduleName: viewsModule.Views.login,
        backstackVisible: false
    };
}
