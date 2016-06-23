/**
 * http://usejsdoc.org/
 */

Ext.define('BizDash.config.Config', {
	extend : 'Ext.util.Observable',
	requires : [ 'BizDash.config.Constants' ],
	singleton : true,
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
		// this.fireEvent('versionChanged',newVersion,oldVersion);
	},
	getBuildNumber : function() {
		return this.version.split('-')[1];
	}
}, function() {
	console.log('BizDash.config.Config class defined');
});