(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0985238c","chunk-2d21b316"],{"1fb5":function(t,r,e){"use strict";r.byteLength=f,r.toByteArray=d,r.fromByteArray=l;for(var n=[],i=[],u="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,s=o.length;c<s;++c)n[c]=o[c],i[o.charCodeAt(c)]=c;function a(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");-1===e&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function f(t){var r=a(t),e=r[0],n=r[1];return 3*(e+n)/4-n}function h(t,r,e){return 3*(r+e)/4-e}function d(t){var r,e,n=a(t),o=n[0],c=n[1],s=new u(h(t,o,c)),f=0,d=c>0?o-4:o;for(e=0;e<d;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[f++]=r>>16&255,s[f++]=r>>8&255,s[f++]=255&r;return 2===c&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[f++]=255&r),1===c&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[f++]=r>>8&255,s[f++]=255&r),s}function y(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function p(t,r,e){for(var n,i=[],u=r;u<e;u+=3)n=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),i.push(y(n));return i.join("")}function l(t){for(var r,e=t.length,i=e%3,u=[],o=16383,c=0,s=e-i;c<s;c+=o)u.push(p(t,c,c+o>s?s:c+o));return 1===i?(r=t[e-1],u.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],u.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"=")),u.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},bf73:function(t,r,e){"use strict";function n(){}e.r(r),ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(t,r){var e,n=new Uint8Array(this);void 0===r&&(r=n.length);var i=new ArrayBuffer(r-t),u=new Uint8Array(i);for(e=0;e<u.length;e++)u[e]=n[e+t];return i}),n.prototype.processBlock=function(t){var r,e,n=this.current[0],i=this.current[1],u=this.current[2],o=this.current[3],c=this.current[4],s=[t[0]<<24|t[1]<<16|t[2]<<8|t[3],t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[8]<<24|t[9]<<16|t[10]<<8|t[11],t[12]<<24|t[13]<<16|t[14]<<8|t[15],t[16]<<24|t[17]<<16|t[18]<<8|t[19],t[20]<<24|t[21]<<16|t[22]<<8|t[23],t[24]<<24|t[25]<<16|t[26]<<8|t[27],t[28]<<24|t[29]<<16|t[30]<<8|t[31],t[32]<<24|t[33]<<16|t[34]<<8|t[35],t[36]<<24|t[37]<<16|t[38]<<8|t[39],t[40]<<24|t[41]<<16|t[42]<<8|t[43],t[44]<<24|t[45]<<16|t[46]<<8|t[47],t[48]<<24|t[49]<<16|t[50]<<8|t[51],t[52]<<24|t[53]<<16|t[54]<<8|t[55],t[56]<<24|t[57]<<16|t[58]<<8|t[59],t[60]<<24|t[61]<<16|t[62]<<8|t[63]];for(e=16;e<80;e++)s.push((s[e-3]^s[e-8]^s[e-14]^s[e-16])<<1|(s[e-3]^s[e-8]^s[e-14]^s[e-16])>>>31);for(e=0;e<80;e++)r=(n<<5|n>>>27)+c+s[e],r+=e<20?1518500249+(i&u|~i&o)|0:e<40?1859775393+(i^u^o)|0:e<60?2400959708+(i&u|i&o|u&o)|0:3395469782+(i^u^o)|0,c=o,o=u,u=i<<30|i>>>2,i=n,n=r;this.current[0]+=n,this.current[1]+=i,this.current[2]+=u,this.current[3]+=o,this.current[4]+=c,this.currentLen+=64},n.prototype.doPadding=function(){var t=8*(this.inLen+this.currentLen),r=0,e=4294967295&t,n=this.inLen<=55?55-this.inLen:119-this.inLen,i=new Uint8Array(new ArrayBuffer(n+1+8));return i[0]=128,i[i.length-1]=255&e,i[i.length-2]=e>>>8&255,i[i.length-3]=e>>>16&255,i[i.length-4]=e>>>24&255,i[i.length-5]=255&r,i[i.length-6]=r>>>8&255,i[i.length-7]=r>>>16&255,i[i.length-8]=r>>>24&255,i},n.prototype.getDigest=function(){var t=new Uint8Array(new ArrayBuffer(20));return t[3]=255&this.current[0],t[2]=this.current[0]>>>8&255,t[1]=this.current[0]>>>16&255,t[0]=this.current[0]>>>24&255,t[7]=255&this.current[1],t[6]=this.current[1]>>>8&255,t[5]=this.current[1]>>>16&255,t[4]=this.current[1]>>>24&255,t[11]=255&this.current[2],t[10]=this.current[2]>>>8&255,t[9]=this.current[2]>>>16&255,t[8]=this.current[2]>>>24&255,t[15]=255&this.current[3],t[14]=this.current[3]>>>8&255,t[13]=this.current[3]>>>16&255,t[12]=this.current[3]>>>24&255,t[19]=255&this.current[4],t[18]=this.current[4]>>>8&255,t[17]=this.current[4]>>>16&255,t[16]=this.current[4]>>>24&255,t.buffer},n.prototype.reset=function(){this.currentLen=0,this.inLen=0,this.current=new Uint32Array(new ArrayBuffer(20)),this.current[0]=1732584193,this.current[1]=4023233417,this.current[2]=2562383102,this.current[3]=271733878,this.current[4]=3285377520},n.prototype.blockLen=64,n.prototype.digestLen=20;var i=function(t){var r,e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n},u=function(t){var r=new ArrayBuffer(1),e=new Uint8Array(r);return e[0]=t,e},o=function(t){if(t.constructor===Uint8Array)return t;if(t.constructor===ArrayBuffer)return new Uint8Array(t);if(t.constructor===String)return i(t);if(t.constructor===Number){if(t>255)throw"For more than one byte, use an array buffer";if(t<0)throw"Input value must be positive";return u(t)}throw"Unsupported type"},c=function(t){var r=function(t){var r=t.length,e=0;while(r>0){var n=this.blockLen-this.inLen;n>r&&(n=r);var i=t.subarray(e,e+n);this.inbuf.set(i,this.inLen),e+=n,r-=n,this.inLen+=n,this.inLen===this.blockLen&&(this.processBlock(this.inbuf),this.inLen=0)}},e=function(){var t=this.doPadding();this.update(t);var r=this.getDigest();return this.reset(),r},n=function(){if(!t)throw"Unsupported algorithm: "+t.toString();t.prototype.update=r,t.prototype.finalize=e;var n=new t;return n.inbuf=new Uint8Array(new ArrayBuffer(n.blockLen)),n.reset(),n}();return{update:function(t){n.update(o(t))},finalize:function(){return n.finalize()},digest:function(t){return n.update(o(t)),n.finalize()},reset:function(){n.reset()},digestLength:function(){return n.digestLen}}},s=function(t){var r,e,n,i=!1,u=function(){var u,o;if(!i){if(void 0===r)throw"MAC key is not defined";for(o=r.byteLength>64?new Uint8Array(t.digest(r)):new Uint8Array(r),e=new Uint8Array(new ArrayBuffer(64)),u=0;u<o.length;u++)e[u]=54^o[u];for(u=o.length;u<64;u++)e[u]=54;for(n=new Uint8Array(new ArrayBuffer(64)),u=0;u<o.length;u++)n[u]=92^o[u];for(u=o.length;u<64;u++)n[u]=92;i=!0,t.update(e.buffer)}},c=function(){i=!1,r=void 0,e=void 0,n=void 0,t.reset()},s=function(){var r=t.finalize();return t.reset(),t.update(n.buffer),t.update(r),r=t.finalize(),c(),r},a=function(t){r=t};return{setKey:function(t){a(o(t)),u()},update:function(r){t.update(r)},finalize:function(){return s()},mac:function(t){return this.update(t),this.finalize()},reset:function(){c()},hmacLength:function(){return t.digestLength()}}},a={SHA1:function(){return c(n)},HMAC_SHA1:function(){return s(c(n))}};r["default"]=a},fbb8:function(t,r,e){"use strict";e.r(r),e.d(r,"unix",(function(){return c})),e.d(r,"blobToBuffer",(function(){return s})),e.d(r,"assertOptions",(function(){return a})),e.d(r,"getCanonicalizedOSSHeaders",(function(){return f})),e.d(r,"getCanonicalizedResource",(function(){return h})),e.d(r,"getSignature",(function(){return d}));var n=e("1fb5"),i=e.n(n),u=e("bf73");function o(t){return t&&"[object Date]"===Object.prototype.toString.call(t)&&"Invalid Date"!==t.toString}function c(t){let r;return t&&(r=new Date(t)),o(r)||(r=new Date),Math.round(r.getTime()/1e3)}function s(t){return new Promise((r,e)=>{const n=new FileReader;n.onload=()=>{const t=new Uint8Array(n.result);r(t)},n.onerror=()=>{e(n.error)},n.readAsArrayBuffer(t)})}function a(t){const{accessKeyId:r,accessKeySecret:e,bucket:n,endpoint:i}=t;if(!r)throw new Error("need accessKeyId");if(!e)throw new Error("need accessKeySecret");if(!n&&!i)throw new Error("need bucket or endpoint")}function f(t){let r="",e=Object.keys(t);return e=e.map(t=>t.toLowerCase()),e.sort(),e.forEach(e=>{0===e.indexOf("x-oss-")&&(r+=`${e}:${t[e]}\n`)}),r}function h(t="",r="",e){let n="";t&&(n+="/"+t),r&&("/"!==r.charAt(0)&&(n+="/"),n+=r);let i=""+n,u="?";if(e){const t=(t,r)=>t[0]>r[0]?1:t[0]<r[0]?-1:0,r=t=>{i+=u+t,e[t]&&(i+="="+e[t]),u="&"};Object.keys(e).sort(t).forEach(r)}return i}function d(t={}){const{type:r="header",verb:e="",contentMd5:n="",expires:o=c()+3600,bucket:s,objectName:a,accessKeySecret:d,headers:y={},subResource:p}=t,l=y["x-oss-date"]||"",A=y["Content-Type"]||"",w=[e,n,A];"header"===r?w.push(l):w.push(o);const g=f(y),b=h(s,a,p);w.push(`${g}${b}`);const v=w.join("\n");console.log("text",v,d);const L=new u["default"].HMAC_SHA1;L.setKey(d),L.update(v);const C=new Uint8Array(L.finalize()),U=i.a.fromByteArray(C);return U}}}]);