/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('App.view.product.form.ProductFormModel', {
    extend: 'Ext.app.ViewModel',
    
    requires:[
              'Ext.app.ViewModel'
              ],

    alias: 'viewmodel.productForm',

    data: {
        rec: null
    }

    //TODO - add data, formulas and/or methods to support your view
});