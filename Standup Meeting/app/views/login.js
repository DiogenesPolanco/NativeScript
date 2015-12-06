var vmModule = require("../viewModels/login-view-model");
var viewModel;
function pageLoaded(args) {
    var page = args.object;
    viewModel = new vmModule.LoginViewModel();
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function loginButtonTap(args) {
    viewModel.login();
}
exports.loginButtonTap = loginButtonTap;
