var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../views/common/view-model-base");
var constantsModule = require("../utils/constants");
var ResortViewModel = (function (_super) {
    __extends(ResortViewModel, _super);
    function ResortViewModel() {
        _super.call(this);
    }
    Object.defineProperty(ResortViewModel.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            console.log(value);
            if (this._timer !== value) {
                this._timer = value;
                this.notifyPropertyChange("timer", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange("message", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            if (this._total !== value) {
                this._total = value;
                this.notifyPropertyChange("total", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "days", {
        get: function () {
            return this._days;
        },
        set: function (value) {
            if (this._days !== value) {
                this._days = value;
                this.notifyPropertyChange("days", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (value) {
            if (this._hours !== value) {
                this._hours = value;
                this.notifyPropertyChange("hours", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            if (this._minutes !== value) {
                this._minutes = value;
                this.notifyPropertyChange("minutes", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResortViewModel.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            if (this._seconds !== value) {
                this._seconds = value;
                this.notifyPropertyChange("seconds", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ResortViewModel.prototype.updateClock = function () {
        this.total = Date.parse(constantsModule.endtime) - Date.parse(new Date().toString());
        this.seconds = Math.floor((this.total / 1000) % 60);
        this.minutes = Math.floor((this.total / 1000 / 60) % 60);
        this.hours = Math.floor((this.total / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(this.total / (1000 * 60 * 60 * 24));
        this.message = this.days + " Days " +
            this.hours + " Hours " +
            this.minutes + " Minutes " +
            this.seconds + " Seconds ";
        if (this.total <= 0) {
            clearInterval(this.timer);
        }
    };
    return ResortViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.ResortViewModel = ResortViewModel;
