var k=true,l=null,n=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,u=Number,v=Math,ba=typeof global!=="undefined"?global:this,ca={},da=p.defineProperty&&p.defineProperties,w="Array,Boolean,Date,Function,Number,String,RegExp".split(","),ea=y(w[0]),fa=y(w[1]),ga=y(w[2]),A=y(w[3]),B=y(w[4]),C=y(w[5]),D=y(w[6]);
function y(a){var b,c;if(/String|Number|Boolean/.test(a))b=a.toLowerCase();c=a==="Array"&&q.isArray||function(d){if(b&&typeof d===b)return k;return p.prototype.toString.call(d)==="[object "+a+"]"};return ca[a]=c}
function ha(a){if(!a.SugarMethods){E(a,"SugarMethods",{});F(a,n,n,{extend:function(b,c,d){F(a,d!==n,c,b)},sugarRestore:function(){return ia(a,arguments,function(b,c,d){E(b,c,d.method)})},sugarRevert:function(){return ia(a,arguments,function(b,c,d){if(d.qa)E(b,c,d.Ba);else delete b[c]})}})}}function F(a,b,c,d){var e=b?a.prototype:a;ha(a);G(d,function(f,h){var i=e[f],j=H(e,f);if(typeof c==="function")h=ja(e[f],h,c);if(c!==n||!e[f])E(e,f,h);a.SugarMethods[f]={xa:b,method:h,Ba:i,qa:j}})}
function I(a,b,c,d,e){var f={};d=C(d)?d.split(","):d;d.forEach(function(h,i){e(f,h,i)});F(a,b,c,f)}function ia(a,b,c){var d=b.length===0,e=K(b),f=n;G(a.SugarMethods,function(h,i){if(d||e.indexOf(h)>-1){f=k;c(i.xa?a.prototype:a,h,i)}});return f}function ja(a,b,c){return function(){return(a&&(c===k||!c.apply(this,arguments))?a:b).apply(this,arguments)}}function E(a,b,c){if(da)p.defineProperty(a,b,{value:c,configurable:k,enumerable:n,writable:k});else a[b]=c}
function K(a,b){var c=[],d,e;d=0;for(e=a.length;d<e;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function ka(a,b,c){K(q.prototype.concat.apply([],q.prototype.slice.call(a,c||0)),b)}function la(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}function L(a){return a!==void 0}function N(a){return a===void 0}function ma(a){return a&&typeof a==="object"}function na(a){return!!a&&p.prototype.toString.call(a)==="[object Object]"&&"hasOwnProperty"in a}
function H(a,b){return p.hasOwnProperty.call(a,b)}function G(a,b){for(var c in a)if(H(a,c))if(b.call(a,c,a[c],a)===n)break}function oa(a,b){G(b,function(c){a[c]=b[c]});return a}function pa(a){oa(this,a)}pa.prototype.constructor=p;function qa(a,b,c,d){var e=[];a=parseInt(a);for(var f=d<0;!f&&a<=b||f&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}function O(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function ra(a,b){return O(a,b,"floor")}
function P(a,b,c,d){d=v.abs(a).toString(d||10);d=sa(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}function ta(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function ua(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function sa(a,b){return q(v.max(0,L(a)?a:1)+1).join(b||"")}
function va(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}function R(a){C(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}
function wa(a,b){var c=typeof a,d,e,f,h,i,j,g;if(c==="string")return a;f=p.prototype.toString.call(a);d=na(a);e=f==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(j=b.length;j--;)if(b[j]===a)return"CYC";b.push(a);d=t(a.constructor);h=e?a:p.keys(a).sort();j=0;for(g=h.length;j<g;j++){i=e?j:h[j];d+=i+wa(a[i],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+f+d}
function xa(a){return/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/.test(p.prototype.toString.call(a))||na(a)}function ya(a,b,c){var d=[],e=a.length,f=b[b.length-1]!==n,h;K(b,function(i){if(fa(i))return n;if(f){i%=e;if(i<0)i=e+i}h=c?a.charAt(i)||"":a[i];d.push(h)});return d.length<2?d[0]:d}function za(a,b){I(b,k,n,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(K(arguments)))}})}ha(p);G(w,function(a,b){ha(ba[b])});
