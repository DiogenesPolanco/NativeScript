var vmModule = require("../viewModels/resort-view-model");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new vmModule.ResortViewModel();
    page.bindingContext = viewModel;
    viewModel.set("timer", setInterval(function () {
        viewModel.updateClock();
    }, 1000));
}
exports.pageLoaded = pageLoaded;
