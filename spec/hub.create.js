
var rendezvous = require('../index'),
	vows = require('vows'),
	assert = require('assert'),
	should = require('should');

exports.createHub = vows
	.describe('Create Hub')
	.addBatch({
		'simple create': {
			topic: rendezvous.createHub({}),
			'is not null' : function(hub){
				assert.isNotNull(hub);
			},
			'has local' : function(hub){
				assert.isNotNull(hub.local);
			}
		}	
	});
