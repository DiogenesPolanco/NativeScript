import observableModule = require("data/observable"); 
import pageModule = require("ui/page");  
import vmModule = require("../viewModels/login-view-model"); 

var viewModel : vmModule.LoginViewModel;
export function pageLoaded(args: observableModule.EventData) {
    var  page = <pageModule.Page>args.object;  
    viewModel = new  vmModule.LoginViewModel();
    page.bindingContext = viewModel; 
}
 
export function loginButtonTap(args : observableModule.EventData) { 
    viewModel.login();
}