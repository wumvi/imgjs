(function() {'use strict';var f="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},g="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function h(){h=function(){};g.Symbol||(g.Symbol=k)}var k=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function l(){h();var a=g.Symbol.iterator;a||(a=g.Symbol.iterator=g.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&f(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});l=function(){}}function m(a){var b=0;return n(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function n(a){l();a={next:a};a[g.Symbol.iterator]=function(){return this};return a}function p(a){l();var b=a[Symbol.iterator];return b?b.call(a):m(a)}
var q="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},r;if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var u={s:!0},v={};try{v.__proto__=u;t=v.s;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var x=r;
function y(a,b){a.prototype=q(b.prototype);a.prototype.constructor=a;if(x)x(a,b);else for(var d in b)if("prototype"!=d)if(Object.defineProperties){var c=Object.getOwnPropertyDescriptor(b,d);c&&Object.defineProperty(a,d,c)}else a[d]=b[d];a.v=b.prototype}function z(a){for(var b,d=[];!(b=a.next()).done;)d.push(b.value);return d}
function A(a,b){if(b){var d=g;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];e in d||(d[e]={});d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&f(d,a,{configurable:!0,writable:!0,value:b})}}A("Object.assign",function(a){return a?a:function(a,d){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var w in e)Object.prototype.hasOwnProperty.call(e,w)&&(a[w]=e[w])}return a}});
A("Object.values",function(a){return a?a:function(a){var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(a[c]);return b}});function B(){}B.prototype.toJSON=function(){return this.b()};function C(){this.i=this.j=this.l=this.name=""}y(C,B);C.prototype.a=function(){var a={};this.name&&(a.name=this.name);this.l&&(a.url=this.l);this.j&&(a.id=this.j);this.i&&(a.description=this.i);return a};C.prototype.b=function(){var a=this.a();a["@type"]="Thing";return a};function D(){C.call(this);this.g=this.m=""}y(D,C);D.prototype.a=function(){var a={};this.m&&(a.author=this.m);this.g&&(a.datePublished=this.g);return Object.assign({},a,C.prototype.a.call(this))};D.prototype.b=function(){var a=this.a();a["@type"]="CreativeWork";return a};function E(){D.call(this);this.height=this.width=this.f=""}y(E,D);E.prototype.a=function(){var a={};this.f&&(a.contentUrl=this.f);this.width&&(a.width=this.width);this.height&&(a.height=this.height);return Object.assign({},a,D.prototype.a.call(this))};E.prototype.b=function(){var a=this.a();a["@type"]="MediaObject";return a};function F(){E.call(this);this.c="";this.h=!1;this.o=null}y(F,E);F.prototype.a=function(){var a={};this.c&&(a.caption=this.c);this.h&&(a.representativeOfPage=this.h);this.o&&(a.thumbnail=this.o);return Object.assign({},a,E.prototype.a.call(this))};F.prototype.b=function(){var a=this.a();a["@type"]="ImageObject";return a};function G(a){this.a=a.caption;this.c=a.modified;this.name=a.name;this.g=a.ratio;this.b=a.sizes;this.f=a.transparent}function H(a){a=Object.values(a.b);return Math.max.apply(Math,[].concat(a instanceof Array?a:z(p(a))))};function I(a){this.a=a}var J=["ImgMakerTpl$$module$tpl$img_maker_tpl"],K=this;J[0]in K||!K.execScript||K.execScript("var "+J[0]);for(var L;J.length&&(L=J.shift());)J.length||void 0===I?K=K[L]&&K[L]!==Object.prototype[L]?K[L]:K[L]={}:K[L]=I;
I.prototype.u=function(a,b,d){var c=p(a.split("-"));a=c.next().value;var e=c.next().value;c=c.next().value;c=("000000".substring(0,6-c.length)+c).match(/.{1,2}/g).join("/");a=this.a+a+"/"+e+"/"+c+"/";e=a+"info.json";c=new XMLHttpRequest;c.open("GET",e,!1);c.send();if(200!==c.status)throw Error("Error load "+e);e=JSON.parse(c.responseText);c=new G(e);e='<div class="imj-wrap js--imj-wrap" \n                    data-size=\''+JSON.stringify(c.b)+"' \n                    data-trsp=\""+c.f.toString()+'"\n                    data-modified="'+
c.c+'"\n                    style="--ratio: '+100*c.g+"%; --max-width: "+H(c)+'px;" \n                    data-url="'+(a+c.name)+'">\n                      <figure class="imj-figure">\n                          <img class="imj-img js--imj-img"\n                               src="'+a+'preview.svg" \n                               alt="'+c.a+'"\n                               title="'+c.a+'">';e+=c.a?'<figcaption class="imj-caption">'+c.a+"</figcaption>":"";e+="</figure></div>";b&&(b=new F,b.c=c.a,
b.name=c.a,b.h=d,d=c.f?"png":"jpg",d=a+c.name+"-"+H(c)+"-3."+d,b.f=d,d=(new Date(1E3*c.c)).toISOString(),b.g=d,d=e,b=b.b(),b["@context"]="http://schema.org/",b=JSON.stringify(b),e=d+('<script type="application/ld+json">'+b+"\x3c/script>"));return e};I.prototype.getTpl=I.prototype.u;window.ImgMakerTpl=I;}).call(window);
