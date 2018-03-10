exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['specs/spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    framework: 'jasmine',
    ignoreUncaughtException: true,
    "Dwebdriver.chrome.driver=/home/alena/WebstormProjects/Project1/environment/grid/drivers_nix/chromedriver_nix64_v235": ""

};