'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Form',

    events: {
        formViewModelSubmit: 'formViewModelSubmit',
        formViewModelCancel: 'formViewModelCancel'
    },

    onformViewModelFormSubmit: function() {
        this.notify({
            eventName: this.events.formViewModelFormSubmit
        });
    },

    onformViewModelFormCancel: function() {
        this.notify({
            eventName: this.events.formViewModelFormCancel
        });
    },
    // additional properties

});

// START_CUSTOM_CODE_formView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_formView
module.exports = ViewModel;