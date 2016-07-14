/**
 * http://usejsdoc.org/
 */

Ext.define('App.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    // Model
    fields: [{
        name: 'text'
    }],

    // data
    root: {
        expanded: true,
        children: [
            {
                text: 'Home',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'pageblank',
                routeId: 'home', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Users',
                iconCls: 'x-fa fa-file-o',
                viewType: 'users',
                leaf: true
            },

            {
                text: 'Products',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'View All',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'products',
                        leaf: true
                    },
                   
                ]
            },
            {
                text: 'Calc - MVVM',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'app-calc',
                routeId: 'calc', 
                leaf: true
            },
            {
                text: 'Todo - App',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'app-todo',
                routeId: 'todo',
                leaf: true
            },
            {
                text: 'Feedback - Form',
                iconCls: 'x-fa fa-desktop',
                viewType: 'feedback',
                routeId: 'feedback',
                leaf: true
            },
            {
                text: 'Charts',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'charts',
                leaf: true
            }
        ]
    }
});
