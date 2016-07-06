/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('KitchenSink.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KitchenSink',

    stores: [
        // TODO: add global / shared stores here
        'Companies'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
