/**
 * This example shows selection binding. The selection from each component
 * is bound to the same source and is automatically updated when a selection
 * in any component changes.
 */
Ext.define('KitchenSink.view.binding.Selection', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-selection',
    requires:[
              'KitchenSink.model.Company',
              'KitchenSink.data.Company'
              ],
    width: 600,
    height: 270,

    viewModel: {
        stores: {
            companies: {
                model: 'Company',
                autoLoad: true
            }
        }
    },

    controller: 'binding.selection',

    layout: 'vbox',

    items: [{
        xtype: 'combobox',
        margin: '10 0 0 10',
        forceSelection: true,
        editable: false,
        displayField: 'name',
        valueField: 'id',
        triggerAction: 'all',
        queryMode: 'local',
        labelWidth: 160,
        bind: {
            store: '{companies}',
            selection: '{selectedCompany}'
        },
        fieldLabel: 'Company Combo'
    }, {
        xtype: 'container',
        width: 600,
        margin: '15 0 0 0',
        flex: 1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        padding: 15,
        items: [{
            title: 'Companies Grid',
            flex: 1,
            xtype: 'grid',
            reference: 'grid',
            bind: {
                store: '{companies}',
                selection: '{selectedCompany}'
            },
            columns: [{
                text: 'Name', dataIndex: 'name', flex: 1
            }, {
                text: 'Phone', dataIndex: 'phone'
            }]
        }, {
            flex: 1,
            cls: 'binding-selection-view',
            itemSelector: '.customer',
            scrollable: 'y',
            xtype: 'dataview',
            reference: 'dataview',
            tpl: 'Company View <tpl for="."><div class="customer"><div class="indicator"></div>{name}<div class="indicator rtl"></div></div></tpl>',
            bind: {
                store: '{companies}',
                selection: '{selectedCompany}'
            }
        }]
    }]
});