/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random-base-randu' );
var Uint32Array = require( '@stdlib/array-uint32' );
var tryRequire = require( '@stdlib/utils-try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var toWords = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( toWords instanceof Error )
};


// MAIN //

bench( pkg+'::native,memory_reuse', opts, function benchmark( b ) {
	var out;
	var x;
	var i;

	out = new Uint32Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*1.0e7 ) - 5.0e6;
		toWords( out, x );
		if ( out[ 0 ] !== 0 && out[ 0 ] === out[ 1 ] ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( out[ 0 ] !== 0 && out[ 0 ] === out[ 1 ] ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
