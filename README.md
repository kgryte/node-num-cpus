CPUs
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the number of [CPUs](https://nodejs.org/api/os.html#os_os_cpus).


## Installation

``` bash
$ npm install num-cpus
```


## Usage

``` javascript
var numCPUs = require( 'num-cpus' );
```

#### numCPUs

The number of [CPUs](https://nodejs.org/api/os.html#os_os_cpus).

``` javascript
console.log( numCPUs );
// returns <number>
```


## Examples

``` javascript
var cluster = require( 'cluster' ),
	numCPUs = require( 'num-cpus' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI


### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g num-cpus
```


### Usage

``` bash
Usage: numcpus [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```


### Examples

``` bash
$ numcpus
# <number>
```

---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/num-cpus.svg
[npm-url]: https://npmjs.org/package/num-cpus

[travis-image]: http://img.shields.io/travis/kgryte/node-num-cpus/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-num-cpus

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/node-num-cpus/master.svg
[codecov-url]: https://codecov.io/github/kgryte/node-num-cpus?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-num-cpus.svg
[dependencies-url]: https://david-dm.org/kgryte/node-num-cpus

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-num-cpus.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-num-cpus

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-num-cpus.svg
[github-issues-url]: https://github.com/kgryte/node-num-cpus/issues
