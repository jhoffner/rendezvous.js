var connect = require('connect'),
	util = require('util'),
	EventEmitter = require('events').EventEmitter,
	hw = require('hardwire'),
	_ = require('underscore')._;
	
module.exports = (function(){
	
	function Endpoint(){
		
	}
	
	util.inherits(Endpoint, EventEmitter);
	
	_.extend(Endpoint.prototype, {
	});
	
	return Endpoint;
})();
