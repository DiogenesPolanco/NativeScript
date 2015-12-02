var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//platform.telerik.com/bs-api/v1/',

    appId: 'ofo2ezs900j4wdjn',
    scheme: 'https'
});

// START_CUSTOM_CODE_standupMeeting
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_standupMeeting
module.exports = provider;