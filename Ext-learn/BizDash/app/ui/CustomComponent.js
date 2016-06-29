/**
 * http://usejsdoc.org/
 */
Ext.define('BizDash.ui.CustomComponent', {
	extend : 'Ext.Component',
	alias:"widget.myComp",
	//	config: {
	//		width:0,
	//		height:0,
	//	},
	//	constructor:function(config){
	//		this.initConfig(config);
	//	},
	//------------------------------------------
	initComponent : function() {
		var self = this;
		self.width=200,
		self.height=100;
		self.html = {
			tag : 'div',
			html : 'X',
			style : {
				float : 'right',
				padding : '10px',
				'background-color' : '#e00',
				color : '#fff',
				'font-weight' : 'bold',
				cursor : 'pointer'
			}
		};
		self.myOwnProperty = [ 1, 2, 3, 4 ];
		self.callParent();
		console.log('step-1 initComponent');
	},
	// ---------------------------------------
	beforeRender : function() {
		console.log('step-2 beforeRender');
		this.callParent(arguments);
	},
	onRender : function() {
		console.log('step-3 onRender');
		this.callParent(arguments);
	},
	afterRender : function() {
		console.log('step-4 afterRender');
		this.el.down('div').on('click',this.myCallback,this);
		this.callParent(arguments);
	},
	//------------------------------------------
	beforeDestroy : function() {
		console.log('step-5 beforeDestroy');
		this.callParent(arguments);
	},
	onDestroy : function() {
		console.log('step-6 onDestroy');
		delete this.myOwnProperty;
		this.el.down('div').un('click',this.myCallback);
		this.callParent(arguments);
	},
	//------------------------------------------
	myCallback:function(){
		var self=this;
		Ext.Msg.confirm('Confirmation','Are you sure to close this comp?',function(btn){
			if(btn==='yes'){
				self.destroy();
			}
		});
	}
	//--------------------------------------------

});
