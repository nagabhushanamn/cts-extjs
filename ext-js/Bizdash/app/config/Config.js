
Ext.define('BizDash.config.Config',{
    requires:[
        'BizDash.config.Constants'
    ],
    version:'0.0.1-0',
    getBuildNumber:function(){
        var versionSplit=this.version.split('-');
        return versionSplit[1];
    }
},function(){
    console.log('BizDash.config.Config class defined')
});