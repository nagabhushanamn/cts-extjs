/**
 * http://usejsdoc.org/
 */
Ext.define('BizDash.ui.CustomContainer', {
	extend : 'Ext.container.Container',
	border : true,
	padding : 10,
	initComponent : function() {
		Ext.each(this.items, function(item) {
			item.style = {
				backgroundcolor : '#f4f4f4',
				border : '1px solid #333',
			};
			item.padding = 10;
			item.height = 100;
			item.margin=10;
		});
		this.callParent();
	},
	onRender : function() {
		this.callParent(arguments);
		if (this.border) {
			this.el.setStyle('border', '1px solid #333');
		}
	}

});
