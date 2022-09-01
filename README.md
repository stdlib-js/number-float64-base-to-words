<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a [double-precision floating-point number][ieee754] into a higher order word and a lower order word.



<section class="usage">

## Usage

To use in Observable,

```javascript
toWords = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var toWords = require( 'path/to/vendor/umd/number-float64-base-to-words/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.toWords;
})();
</script>
```

#### toWords( \[out,] x )

Splits a [double-precision floating-point number][ieee754] into a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`).

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]
```

By default, the function returns an `array` containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits and includes the exponent and sign.

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]

var high = w[ 0 ];
// returns 1774486211

var low = w[ 1 ];
// returns 2479577218
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Uint32Array = require( '@stdlib/array-uint32' );

var out = new Uint32Array( 2 );

var w = toWords( out, 3.14e201 );
// returns <Uint32Array>[ 1774486211, 2479577218 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var frac;
var exp;
var w;
var x;
var i;

// Generate random numbers and split into words...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = -floor( randu()*324.0 );
    x = frac * pow( 10.0, exp );
    w = toWords( x );
    console.log( 'x: %d. higher: %d. lower: %d.', x, w[ 0 ], w[ 1 ] );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-to-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-to-words

[test-image]: https://github.com/stdlib-js/number-float64-base-to-words/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-to-words/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-to-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-to-words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-to-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-to-words/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-to-words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-to-words/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
