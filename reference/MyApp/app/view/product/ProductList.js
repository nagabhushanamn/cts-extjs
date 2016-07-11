/**
 * http://usejsdoc.org/
 */
Ext.define('MyApp.view.product.ProductList', {
    extend: 'Ext.panel.Panel',

    /* Marks these are required classes to be to loaded before loading this view */
    requires: [
        //'CD.view.contactList.ContactListController',
        //'CD.view.contactList.ContactListModel'
    ],

    xtype: 'app-productList',
    controller: 'productList',

    /* View model of the view */
	//    viewModel: {
	//        type: ''
	//    },

    items: [{
        xype: 'container',
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                cls: 'product-list',
                defaults: {
                    flex: 1
                },
                items: [
                    {
                        xtype: 'grid',
                        reference: 'productListGrid',
                        scrollable: true,
                        autoScroll: true,
                        plugins: [{
                            ptype: 'rowediting',
                            clicksToMoveEditor: 1,
                            autoCancel: false
                        }],
                        listeners: {
                            //selectionchange: 'onSelectionChange'
                        },
                        flex:1,
                        store: {
                        	type:'products'
                        },
                        title: 'Products List',
                        pageSize: 10,
                        columns: { 
                            defaults: {
                               editor: {
                                    xtype: 'textfield',
                                    allowBlank: false
                                }
                            },
                            items: [
                                {
                                    text: 'Name',
                                    width: 100,
                                    dataIndex: 'name'
                                },
                                {
                                    text: 'Price',
                                    width: 100,
                                    dataIndex: 'price'
                                },
                                {
                                    text: 'Description',
                                    maxWidth: 500,
                                    flex:1,
                                    dataIndex: 'desc',
                                },
                                {
                                    text: 'Type',
                                    flex:1,
                                    maxWidth: 500,
                                    dataIndex: 'type'
                                }
                            ]
                        },
                        dockedItems: [{
                                xtype: 'pagingtoolbar',
                                store: {
                                	type:'products'
                                },
                                dock: 'bottom',
                                displayInfo: true
                            }
                        ]
                    }
                ]
            }
        ]
    }]
});