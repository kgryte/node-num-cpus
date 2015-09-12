'use strict';

var cluster = require( 'cluster' ),
	numCPUs = require( './../lib' );

var i;

function onTimeout() {
	process.exit( 0 );
}

if ( cluster.isMaster ) {
	for ( i = 0; i < numCPUs; i++ ) {
		cluster.fork();
	}
} else {
	console.log( 'Worker %s. Process id: %d.', cluster.worker.id, cluster.worker.process.pid );

	setTimeout( onTimeout, 1000 );
}
