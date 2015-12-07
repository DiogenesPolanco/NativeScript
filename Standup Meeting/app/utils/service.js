var constantsModule = require("./constants");
var notificationsModule = require("./notifications");
var Service = (function () {
    function Service() {
    }
    Object.defineProperty(Service.prototype, "isAuthenticated", {
        get: function () {
            fetch(constantsModule.apiTestPost, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ form: { "comments": "Test" } })
            }).then(function (response) {
                console.log(response.url);
                return response.url !== undefined;
            }, function (error) {
                return false;
            });
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.login = function (username, password) {
        return new Promise(function (resolve, reject) {
            fetch(constantsModule.apiTestGet).then(function (response) {
                resolve(response.url);
            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    };
    Service.showErrorAndReject = function (error, reject) {
        notificationsModule.showError(error.message);
        reject(error);
    };
    return Service;
})();
exports.Service = Service;
exports.service = new Service();
