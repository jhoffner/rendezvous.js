
var hubProto = require('./lib/hub'),
	Endpoint = require('./lib/endpoint'),
	connect = require('connect');

exports.createHub = function(config){
	var hub = connect();
	connect.utils.merge(hub, hubProto);
	
	hub.init(config);
	
	return hub;
}

exports.createEndpoint = function(config){
	return new Endpoint(config);
}

exports.version = "0.1.0";
