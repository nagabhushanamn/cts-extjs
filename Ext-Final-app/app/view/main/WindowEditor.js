/**
 * http://usejsdoc.org/
 */

Ext.define('MyApp.view.main.WindowEditor', {
   extend: 'Ext.Window',

   alias: 'widget.windoweditor',

   width:400,
   height:200,
   padding:20,

   autoShow: true,

   title: 'Update Email',

   items: [{
       xtype: 'form',
       items: [{
           xtype: 'textfield',
           allowBlank: false,
           vtype: 'email'
       },{
           xtype: 'button',
           text: 'Submit Change',
           formBind: true
       }]
   }]
});