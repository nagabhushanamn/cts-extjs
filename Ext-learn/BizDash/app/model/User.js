Ext.define('BizDash.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'TelNumber', type: 'string' }

    ]
});
