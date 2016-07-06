/**
 * http://usejsdoc.org/
 */

/**
 * This ViewModel provides data for the ChildSession view.
 */
Ext.define('KitchenSink.view.binding.ChildSessionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.binding.childsession',
    stores: {
        // Define a store of Customer records that links to the Session.
        customers: {
            model: 'KitchenSink.model.Company',
            autoLoad: true,
            session: true
        }
    }
});