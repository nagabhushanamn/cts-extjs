Ext.define('App.view.pages.Users', {
    extend: 'Ext.container.Container',
    xtype: 'users',

    requires: [
        'Ext.container.Container'
    ],

    //anchor : '100% -1',

    //layout:{
        //type:'vbox',
        //pack:'center',
        //align:'center'
    //},

    items: [
        {
            xtype: 'mainlist',
            padding:'20px'
            //cls: 'blank-page-container',
            //html: '<div class=\'fa-outer-class\'><span class=\'x-fa fa-clock-o\'></span></div><h1>Welcome to Ext-world!</h1><span class=\'blank-page-text\'> by Nag</span>'
        }
    ]
});
