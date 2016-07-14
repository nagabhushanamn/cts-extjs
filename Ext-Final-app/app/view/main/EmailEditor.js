/**
 * http://usejsdoc.org/
 */

Ext.define('MyApp.view.main.EmailEditor', {
   extend: 'Ext.Window',

   alias: 'widget.emaileditor',

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