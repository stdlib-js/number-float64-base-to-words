// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";var s,n;!0===r?(s=1,n=0):(s=0,n=1);var i={HIGH:s,LOW:n},d=new e(1),m=new t(d.buffer),a=i.HIGH,l=i.LOW;function o(t,e){return d[0]=e,t[0]=m[a],t[1]=m[l],t}function f(t,e){return 1===arguments.length?o([0,0],t):o(t,e)}export{f as default};
//# sourceMappingURL=index.mjs.map
