/**
 * http://usejsdoc.org/
 */


Ext.define('KitchenSink.view.binding.Formulas', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-formulas',

    title: 'View Model Formulas',

    width: 370,
    bodyPadding: 10,

    viewModel: {
        // Formulas are defined by the ViewModel:
        type: 'binding-formulas',
        data: {
            x: 10
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Number',
        bind: '{x}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Calculated',
        bind: '{x} * 2 = {twice} / {x} * 4 = {quad}'
    }]
});