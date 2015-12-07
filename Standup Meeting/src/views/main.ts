import observableModule = require("data/observable"); 
import pageModule = require("ui/page");  
import vmModule = require("../viewModels/main-view-model"); 
import viewsModule = require("../utils/views");  

var viewModel : vmModule.MainViewModel;
export function pageLoaded(args: observableModule.EventData) {
    var  page = <pageModule.Page>args.object;  
    viewModel = new  vmModule.MainViewModel();
    viewModel.set("message",viewsModule.Views.message);
    page.bindingContext = viewModel; 
}