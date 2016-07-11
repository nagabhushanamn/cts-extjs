/**
 * http://usejsdoc.org/
 */
Ext.define('MyApp.store.Products', {
    extend: 'Ext.data.Store',
    model:'MyApp.model.Product',
    storeId:'products',
    alias: 'store.products',
    proxy: {
        type: 'rest',
        url:'http://localhost:3000/api/products'
    },
    autoLoad:true,
    autoSync:true
});
