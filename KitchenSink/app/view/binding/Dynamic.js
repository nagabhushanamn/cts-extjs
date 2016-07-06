/**
 * http://usejsdoc.org/
 */
Ext.define('KitchenSink.view.binding.Dynamic', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-dynamic',

    width: 300,
    bodyPadding: 10,
    controller: 'binding-dynamic',

    viewModel: {
        data: {
            title: 'Some Title',
            content: 'Some Content'
        }
    },

    bind: {
        title: 'Info - {title}',
        html: 'Stuff: {content}'
    },

    tbar: [{
        text: 'Change title',
        listeners: {
            click: 'onChangeTitleClick'
        }
    }, {
        text: 'Change content',
        listeners: {
            click: 'onChangeContentClick'
        }
    }]
});