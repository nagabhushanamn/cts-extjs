// sencha generate model Product Name:string,Description:string,Quantity:int,Price:float
Ext.define('BizDash.model.Product', {
	//extend: 'BizDash.model.Base',
	extend: 'Ext.data.Model',

	requires: [
		'BizDash.model.field.Money',
		'Ext.data.validator.Presence',
		'Ext.data.validator.Length'
	],

	fields: [
		{ name: 'Name', type: 'string' },
		{ name: 'Description', type: 'string' },
		{ name: 'Quantity', type: 'int' },
		{ name: 'Price', type: 'money' },
		{
			name   : 'StockValue',
			type   : 'money',
			convert: function(val, rec) {
				return (rec.get('Quantity') * rec.get('Price')).toFixed(2);
			},
			depends: ['Price', 'Quantity']
		},
		{
			name: 'HistoricSales',
			type: 'auto',
			defaultValue: [4, 9, 12, 66, 9]
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
