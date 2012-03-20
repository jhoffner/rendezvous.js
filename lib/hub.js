var connect = require('connect'),
	util = require('util'),
	EventEmitter = require('events').EventEmitter,
	hw = require('hardwire'),
	_ = require('underscore')._;

var hub = module.exports = {};

hub.init = function(config){
	
	// local is used for wiring up a bunch of internal/private functionality that doesn't need to be easily exposed through the api.
	// this is especially important because we are extending the connect api and want to lower the risk of overriding existing/new functions that the connect api may add to their connect() instance object
	this.local = new HubLocal(this); 
	
	if (config){
		this.loadConfig(config);
	}
}

hub.loadConfig = function(config){
	
}

var HubLocal = hw.wire({
	init: function(hub){
		this.hub = hub;
		
		process.on('SIGINT', this.close);
	},
	
	close: function(){
		
	}
});
