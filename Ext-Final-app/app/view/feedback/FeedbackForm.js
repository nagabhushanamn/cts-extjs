/**
 * http://usejsdoc.org/
 */

Ext.define('App.view.customer.FeedbackForm', {

	extend : 'Ext.container.Container',
	alias : 'widget.feedback',
	scrollable : true,

	requires:[
	          'Ext.form.FieldContainer',
	          'Ext.form.field.Date',
	          'Ext.form.field.Text',
	          'Ext.form.field.Number',
	          'Ext.form.RadioGroup',
	          'Ext.form.CheckboxGroup',
	          'Ext.form.field.TextArea',
	          ],
	
	margin : 20,

	items : [
	{
		layout : {
			type : 'hbox',
			align : 'center',
			pack : 'center'
		},
		items : [ {
			xtype : 'form',
			maxWidth : 700,
			flex : 1,
			bodyPadding: 20,
            title: 'Custom Feedback',
            items:[
                   {
                	   xtype: 'fieldcontainer',  
                       layout: 'hbox', 
                       fieldLabel: 'Name',
                       combineErrors: true,
                       defaultType: 'textfield',
                       defaults: {
                           allowBlank: false,
                           flex: 1
                       },
                       items: [
		                       {
		                           name: 'firstName',
		                           emptyText: 'First Name'
		                       },
		                       {
		                           name: 'lastName',
		                           margin: '0 0 0 5',
		                           emptyText: 'Last Name' 
		                       }
		                       ]
                   },
                   {
                       xtype: 'datefield',
                       fieldLabel: 'Date of Birth',
                       name: 'dob',
                       maxValue: new Date() /* Prevent entering future date. */
                   },
                   {
                       fieldLabel: 'Email Address',
                       name: 'email',
                       vtype: 'email',
                       xtype: 'textfield',
                       allowBlank: false
                   },
                   {
                       fieldLabel: 'Phone Number',
                       xtype: 'textfield',
                       labelWidth: 100,
                       name: 'phone',
                       width: 200,
                       emptyText: 'xxx-xxx-xxxx',
                       maskRe: /[\d\-]/,
                       regex: /^\d{3}-\d{3}-\d{4}$/,
                       regexText: 'The format must be xxx-xxx-xxxx'
                   },
                   {
                       xtype: 'numberfield',
                       name: 'productsPurchased',
                       fieldLabel: 'How many times have you purchased our product?',
                       value: 0,
                       maxValue: 1000,
                       minValue: 0
                   },
                   {
                       xtype: 'radiogroup',
                       fieldLabel: 'How satisfied with our service?',
                       vertical: false,
                       columns: 1,
                       items: [
                           {
                               boxLabel: 'Very satisfied',
                               name: 'rb',
                               inputValue: '1'
                           },
                           {
                               boxLabel: 'Satisfied',
                               name: 'rb',
                               inputValue: '2'
                           },
                           {
                               boxLabel: 'Didn\'t care',
                               name: 'rb',
                               inputValue: '3'
                           },
                           {
                               boxLabel: 'Dissatisfied',
                               name: 'rb',
                               inputValue: '4'
                           },
                           {
                               boxLabel: 'Very Dissatisfied',
                               name: 'rb',
                               inputValue: '5'
                           }
                       ]

                   },
                   {
                       xtype: 'checkboxgroup',
                       fieldLabel: 'Which of these words would you use to describe our products? Select all that apply',
                       vertical: true,
                       columns: 1,
                       items: [
                           {
                               boxLabel: 'Reliable',
                               name: 'ch',
                               inputValue: '1'
                           },
                           {
                               boxLabel: 'High quality',
                               name: 'ch',
                               inputValue: '2'
                           },
                           {
                               boxLabel: 'Good value for money',
                               name: 'ch',
                               inputValue: '3'
                           },
                           {
                               boxLabel: 'Overpriced',
                               name: 'ch',
                               inputValue: '4'
                           },
                           {
                               boxLabel: 'Poor quality',
                               name: 'ch',
                               inputValue: '5'
                           }
                       ]

                   },
                   {
                       xtype: 'radiogroup',
                       fieldLabel: 'How likely is it that you would recommend this company to a friend or colleague?',
                       vertical: false,
                       defaults: {
                           padding: 20
                       },
                       items: [
                           {
                               boxLabel: '1',
                               name: 'recommend',
                               inputValue: '1'
                           },
                           {
                               boxLabel: '2',
                               name: 'recommend',
                               inputValue: '2'
                           },
                           {
                               boxLabel: '3',
                               name: 'recommend',
                               inputValue: '3'
                           },
                           {
                               boxLabel: '4',
                               name: 'recommend',
                               inputValue: '4'
                           },
                           {
                               boxLabel: '5',
                               name: 'recommend',
                               inputValue: '5'
                           }
                       ]
                   },
                   {
                       xtype: 'textareafield',
                       fieldLabel: 'Comments',
                       labelAlign: 'top',
                       name: 'comments',
                       width: 400,
                       height: 100
                   }
                   
                   ],
           
           buttons:[
                    {
                    	text:'Submit',
                    	handler:function(){
                    		console.log('submitting Feedback Form...');
                    		var form = this.up('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                    url: 'cutomer/feedback',
                                    success: function () {

                                    },
                                    failure: function () {

                                    }
                                });
                            } else {
                                Ext.Msg.alert('Error', 'Fix the errors in the form')
                            }
                    	}
                    }
                    ]
                   
		}]

	}]

});