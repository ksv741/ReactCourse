!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n=["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"].filter(e=>e.length>0).map(e=>e.toLowerCase().trim());let o={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"],calcCash(){let e=0;return this.cash.forEach(r=>{e+=+r}),e}},{eu:u,rus:a}=o;!function({owner:e,director:r="Victor",cash:t,emp:n}){let o=`${u} ${a}, 'unexpected sponsor'`;console.log(`\n    We have a business. Owner: ${e} , director: ${r}. Our budget: ${t}. And our employers: ${n}\n    And we have a sponsors:\n    ${o}\n    Note. Be careful with ${u[0]}. It's a huge risk.`)}({owner:"Sam",cash:o.calcCash(),emp:n})}]);