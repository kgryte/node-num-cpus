/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	numCPUs = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'num-cpus', function tests() {

	it( 'should export a number', function test() {
		expect( numCPUs ).to.be.a( 'number' );
	});

	it( 'should be greater than 0', function test() {
		assert.isTrue( numCPUs > 0 );
	});

});
