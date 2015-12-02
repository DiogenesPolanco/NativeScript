'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./authenticationView-service'),
    // additional requires

    viewModel = require('./authenticationView-view-model');

function validateData(data) {
    if (!data.email) {
        alert('Missing email');
        return false;
    }

    if (!data.password) {
        alert('Missing password');
        return false;
    }

    return true;
}

function authError(error) {
    if (error) {
        if (error.message) {
            alert(error.message);
        }

        return false;
    }
}

function signinSuccess() {
    helpers.navigate('components/homeView/homeView');
}

function onSignin(data) {
    if (validateData(data)) {
        data.email = data.email.toLowerCase();
        service.signin(data, signinSuccess, authError);
    }
}

function registerSuccess() {
    helpers.navigate('components/homeView/homeView');
}

function onRegister(data) {
    if (validateData(data)) {
        data.email = data.email.toLowerCase();
        service.register(data, registerSuccess, authError);
    }
}

function onShowRegister() {
    viewModel.onShowRegister();
}

function onShowSignin() {
    viewModel.onShowSignin();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    if (service.isAuthenticated()) {
        service.setAuthorization();
        signinSuccess();
    }
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.signin, onSignin);

        viewModel.on(viewModel.events.register, onRegister);
        viewModel.on(viewModel.events.showRegister, onShowRegister);
        viewModel.on(viewModel.events.showSignin, onShowSignin);

        // additional pageInit

    }
}

// START_CUSTOM_CODE_authenticationView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_authenticationView
exports.pageLoaded = pageLoaded;