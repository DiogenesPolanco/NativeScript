var Service = (function () {
    function Service() {
    }
    Object.defineProperty(Service.prototype, "isAuthenticated", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.login = function (username, password) {
        return new Promise(function (resolve, reject) {
            resolve('OK');
        });
    };
    return Service;
})();
exports.Service = Service;
exports.service = new Service();
