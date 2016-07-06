/**
 * http://usejsdoc.org/
 */
Ext.define('KitchenSink.view.binding.HelloWorld', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-hello-world',
    width: 500,
    bodyPadding: 10,

    viewModel: {
        data: {
            title: 'Hello World',
            html: 'The html content',
            buttonText: 'A button'
        }
    },

    bind: {
        title: '{title}',
        html: '{html}'
    },

    tbar: [{
        bind: '{buttonText}'
    }]
});