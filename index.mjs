// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.0-esm/index.mjs";var r,i;!0===n?(r=1,i=0):(r=0,i=1);var d={HIGH:r,LOW:i},m=new t(1),a=new e(m.buffer),l=d.HIGH,o=d.LOW;function j(s,e,t,n){return m[0]=s,e[n]=a[l],e[n+t]=a[o],e}function f(s){return j(s,[0,0],1,0)}s(f,"assign",j);export{j as assign,f as default};
//# sourceMappingURL=index.mjs.map