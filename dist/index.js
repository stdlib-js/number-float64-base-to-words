"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw r=0,i}}};var o=a(function(T,c){"use strict";var f=require("@stdlib/assert-is-little-endian"),v,s,t;f===!0?(s=1,t=0):(s=0,t=1);v={HIGH:s,LOW:t};c.exports=v});var n=a(function(U,I){"use strict";var l=require("@stdlib/array-uint32"),p=require("@stdlib/array-float64"),H=o(),W=new p(1),q=new l(W.buffer),x=H.HIGH,G=H.LOW;function y(e,r,i,u){return W[0]=e,r[u]=q[x],r[u+i]=q[G],r}I.exports=y});var L=a(function(V,d){"use strict";var A=n();function E(e){return A(e,[0,0],1,0)}d.exports=E});var g=require("@stdlib/utils-define-nonenumerable-read-only-property"),O=L(),w=n();g(O,"assign",w);module.exports=O;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
