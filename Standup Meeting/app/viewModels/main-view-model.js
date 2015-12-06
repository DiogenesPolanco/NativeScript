var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../views/common/view-model-base");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
    }
    return MainViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.MainViewModel = MainViewModel;
