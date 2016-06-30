/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('BizDash.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BizDash',

    stores: [
        // TODO: add global / shared stores here
        "Navigation",
        "Products",
        "Users"
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
