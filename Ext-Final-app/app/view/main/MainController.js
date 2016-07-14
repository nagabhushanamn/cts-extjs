Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
               'App.view.product.ProductList'
               ],
    
    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

   // /#users  | /#products
    routes: {
        ':id': 'onRouteChange'
    },


    onRouteChange:function(id){
        this.setCurrentView(id);
    },

    
    lastView: null,

    setCurrentView: function(hashTag) {
        
    	hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            store = navigationList.getStore(),
            
            node = store.findNode('routeId', hashTag) || store.findNode('viewType', hashTag),
                   
            view = (node && node.get('viewType')) || 'page404',
            lastView = me.lastView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();  // destruction-phase
        }

        lastView = mainLayout.getActiveItem();

      
        
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,  //e.g  route=home , view='pageblank'
                routeId: hashTag,  // for existingItem search later
                hideMode: 'offsets'
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
            	mainCard.add(newView);
                Ext.suspendLayouts();
                mainLayout.setActiveItem(newView);
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        me.lastView = newView;
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.redirectTo(to);  // if to=users , url = /#users
        }
    },

  

    onMainViewRender:function() {
        if (!window.location.hash) {
            this.redirectTo("home");
        }
    },
    
    
	onItemSelected : function(sender, record) {
		//Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	     Ext.create('MyApp.view.main.EmailEditor');
	},

	onConfirm : function(choice) {
		if (choice === 'yes') {
			//
		}
	}
    

  
});
