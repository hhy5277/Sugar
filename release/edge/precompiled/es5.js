x(o,m,m,{keys:function(a){var b=[];if(!ka(a)&&!N(a)&&!L(a))throw new TypeError("Object required");y(a,function(c){b.push(c)});return b}});
function wa(a,b,c,d){var e=a.length,g=d==-1,f=g?e-1:0;c=isNaN(c)?f:parseInt(c>>0);if(c<0)c=e+c;if(!g&&c<0||g&&c>=e)c=f;for(;g&&c>=0||!g&&c<e;){if(a[c]===b)return c;c+=d}return-1}function xa(a,b,c,d){var e=a.length,g=0,f=c!==void 0;ya(b);if(e==0&&!f)throw new TypeError("Reduce called on empty array with no initial value");else if(f)c=c;else{c=a[d?e-1:g];g++}for(;g<e;){f=d?e-g-1:g;if(f in a)c=b.call(void 0,c,a[f],f,a);g++}return c}
function ya(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}function za(a){if(a.length===0)throw new TypeError("First argument must be defined");}x(r,m,m,{isArray:function(a){return ia(a,"Array")}});
x(r,j,m,{every:function(a,b){var c=this.length,d=0;for(za(arguments);d<c;){if(d in this&&!a.call(b,this[d],d,this))return m;d++}return j},some:function(a,b){var c=this.length,d=0;for(za(arguments);d<c;){if(d in this&&a.call(b,this[d],d,this))return j;d++}return m},map:function(a,b){var c=this.length,d=0,e=Array(c);for(za(arguments);d<c;){if(d in this)e[d]=a.call(b,this[d],d,this);d++}return e},filter:function(a,b){var c=this.length,d=0,e=[];for(za(arguments);d<c;){d in this&&a.call(b,this[d],d,this)&&
e.push(this[d]);d++}return e},indexOf:function(a,b){if(E(this))return this.indexOf(a,b);return wa(this,a,b,1)},lastIndexOf:function(a,b){if(E(this))return this.lastIndexOf(a,b);return wa(this,a,b,-1)},forEach:function(a,b){var c=this.length,d=0;for(ya(a);d<c;){d in this&&a.call(b,this[d],d,this);d++}},reduce:function(a,b){return xa(this,a,b)},reduceRight:function(a,b){return xa(this,a,b,j)}});
(function(){var a=sa().match(/^\s+$/);try{u.prototype.trim.call([1])}catch(b){a=m}x(u,j,!a,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(s("^["+sa()+"]+"),"")},trimRight:function(){return this.replace(s("["+sa()+"]+$"),"")}})})();
(function(){var a=m;if(Function.prototype.va){a=function(){};var b=a.va();a=new b instanceof b&&!(new a instanceof b)}x(Function,j,!a,{bind:function(c){var d=this,e=A(arguments).slice(1),g,f;if(!L(this))throw new TypeError("Function.prototype.bind called on a non-function");f=function(){return d.apply(d.prototype&&this instanceof d?this:c,e.concat(A(arguments)))};g=function(){};g.prototype=this.prototype;f.prototype=new g;return f}})})();
(function(){var a=new t(t.UTC(1999,11,31));a=a.toISOString&&a.toISOString()==="1999-12-31T00:00:00.000Z";D(t,j,!a,"toISOString,toJSON",function(b,c){b[c]=function(){return R(this.getUTCFullYear(),4)+"-"+R(this.getUTCMonth()+1,2)+"-"+R(this.getUTCDate(),2)+"T"+R(this.getUTCHours(),2)+":"+R(this.getUTCMinutes(),2)+":"+R(this.getUTCSeconds(),2)+"."+R(this.getUTCMilliseconds(),3)+"Z"}})})();
