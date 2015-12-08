import applicationModule = require("application"); 
import viewsModule = require("./utils/views");
import serviceModule = require("./utils/service");

applicationModule.cssFile = "styles/app.css"; 

if (serviceModule.service.isAuthenticated) {
	applicationModule.mainModule = viewsModule.Views.main;
}
else {
	applicationModule.mainEntry = {
		moduleName: viewsModule.Views.resort,
		backstackVisible: false
	};
}