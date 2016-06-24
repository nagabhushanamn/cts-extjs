/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BizDash.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',
    
    init:function(){
    	var button=this.getView().query('button[text="Button"]')[0];
    	//button.on("mouseover","onMouseOver");
    	button.on({
    		mouseover:'onMouseOver',
    		mouseout:'onMouseOut',
    		click:{fn:'onClickButton',single:true},
    		confirmed:'onConfirmd',
    		scope:this
    	});
    	
    	var el=this.getView().getEl();
    	el.on('tap', function() {
    		console.log('The ViewPort was tapped/clicked');
    	});
    	
    	
    	// for better performance  use 'Event Delegation'.
    	
		//    	box.on('click',function(e){
		//    		var target=e.getTrahet();
		//    		//....
		//    	},
		//    	{delegate:'a'});
    	
    	
    	// Keyboard Events
    	
    	var map=new Ext.util.KeyMap({
    		target:this.getView().getEl(),
    		key:Ext.event.Event.ENTER,
    		fn:this.onEnterPress,
    		scope:this
    	});
    	
    	// Event Normalization
    	
    	
    },
    onEnterPress:function(){
    	console.log('ENTER key was pressed');
    },
    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        	var button=this.getView().query('button[text="Button"]')[0];
        	button.fireEvent('confirmed',choice);  // custom event
        }
    },
    onMouseOver:function(){
    	//console.log('Button MouseOver Event fired....');
    	//console.dir(this);
    },
    onMouseOut:function(){
    	//console.log('Button MouseOver Event fired....');
    },
    onConfirmd:function(){
    	//console.log('Button MouseOver Event fired....');
    	console.log('The CONFIRMED event was fired');
    }
});
