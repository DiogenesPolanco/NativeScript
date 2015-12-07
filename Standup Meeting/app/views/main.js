var vmModule = require("../viewModels/main-view-model");
var viewsModule = require("../utils/views");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new vmModule.MainViewModel();
    viewModel.set("message", viewsModule.Views.message);
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
