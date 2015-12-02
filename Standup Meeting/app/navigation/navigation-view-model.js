'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home View",
    "modulePath": "components/homeView/homeView",
    "icon": "~/images/icons/home.png"
}, {
    "title": "Form",
    "modulePath": "components/formView/formView",
    "icon": "~/images/icons/bookmarks.png"
}, {
    "title": "About",
    "modulePath": "components/aboutView/aboutView",
    "icon": "~/images/icons/info.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;