// sencha generate model Product Name:string,Description:string,Quantity:int,Price:float

Ext.define('App.model.Product', {
	//extend: 'App.model.Base',
	extend: 'Ext.data.Model',

	requires: [
		'App.model.field.Money',
		'Ext.data.validator.Presence',
		'Ext.data.validator.Length',
		'Ext.data.field.String',
		'Ext.data.field.Number',
		'Ext.data.field.String',
	],

	fields: [
		{ name: 'Name', type: 'string' },
		{ name: 'Description', type: 'string' },
		{ name: 'Quantity', type: 'int' },
		{ name: 'Price', type: 'money' },
		{
			name   : 'StockValueConvert',
			type   : 'money',
			convert: function(val, rec) {
				return (rec.get('Quantity') * rec.get('Price')).toFixed(2);
			},
			depends: ['Price', 'Quantity']
		},
		{
			name     : 'StockValueCalculate',
			type     : 'money',
			calculate: function(data) {
				return data.Quantity * data.Price;
			}
		}
	],

	validators: {
		Name    : [
			{
				type: 'presence'
			},
			{
				type: 'length',
				min : 3
			}
		],
		Quantity: 'presence'
	}
});
