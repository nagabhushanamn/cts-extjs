/**
 * http://usejsdoc.org/
 */

Ext.define('KitchenSink.view.binding.TwoWay', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-two-way',

    width: 300,
    bodyPadding: 10,

    controller: 'binding.twoway',
    viewModel: {
        data: {
            title: 'The title'
        }
    },

    bind: {
        title: '{title}'
    },

    items: {
        xtype: 'textfield',
        fieldLabel: 'Title',
        labelWidth: 50,
        // The default config for textfield in a bind is "value" (two-way):
        bind: '{title}'
    },

    tbar: [{
        text: 'Random Title',
        handler: 'onTitleButtonClick'
    }]
});