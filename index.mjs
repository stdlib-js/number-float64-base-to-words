// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";var s,n;!0===e?(s=1,n=0):(s=0,n=1);var i=t,d={HIGH:s,LOW:n},a=new r(1),m=new i(a.buffer),l=d.HIGH,o=d.LOW;var f=function(t,r){return a[0]=r,t[0]=m[l],t[1]=m[o],t};var j=function(t,r){return 1===arguments.length?f([0,0],t):f(t,r)};export{j as default};
//# sourceMappingURL=index.mjs.map
