/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.config.Config', {
	extend : 'Ext.util.Observable',
	singleton : true,
	requires : [ 'BizDash.config.Constants' ],
	config : {
		version : '0.0.1-0',
		isPhone : false,
		isTablet : false,
		isDesktop : false
	},
	platformConfig : [ {
		platform : [ 'phone' ],
		isPhone : true
	}, {
		platform : [ 'tablet' ],
		isTablet : true
	}, {
		platform : [ 'desktop' ],
		isDesktop : true
	} ],
	applyVersion : function(newVersion, oldVersion) {
		return newVersion;
	},
	updateVersion : function(newVersion, oldVersion) {
		// this.fireEvent('versionchanged', newVersion, oldVersion);
	},
	constructor : function(config) {
		this.initConfig(config);
		this.callParent([ config ]);
	},
	getBuildNumber : function() {
		var versionSplit = this.getVersion().split('-');
		return versionSplit[1];
	}
}, function() {
	//console.log('BizDash.config.Config class defined');
});