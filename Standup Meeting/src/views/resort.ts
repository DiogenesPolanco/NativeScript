import observableModule = require("data/observable"); 
import pageModule = require("ui/page");  
import vmModule = require("../viewModels/resort-view-model"); 

var viewModel : vmModule.ResortViewModel;
export function pageLoaded(args: observableModule.EventData) {
    var  page = <pageModule.Page>args.object;  
    
    viewModel = new  vmModule.ResortViewModel();  
    page.bindingContext = viewModel; 
    
    viewModel.set("timer", setInterval(() => { 
            viewModel.updateClock(); 
    }, 1000)) ; 
}