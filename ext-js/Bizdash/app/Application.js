/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
    paths:{
        Ext:'../ext/src',
        Bizdash:'./app',
        'Custom.path':'../CustomClasses/path'
    }
});

Ext.define('BizDash.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BizDash',
    requires:['BizDash.config.Config'],
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
