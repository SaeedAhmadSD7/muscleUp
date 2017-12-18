!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=ea.type(a);return"function"===c||ea.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(ea.isFunction(b))return ea.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return ea.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ma.test(b))return ea.filter(b,a,c);b=ea.filter(b,a)}return ea.grep(a,function(a){return ea.inArray(a,b)>=0!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function f(a){var b=ua[a]={};return ea.each(a.match(ta)||[],function(a,c){b[c]=!0}),b}function g(){oa.addEventListener?(oa.removeEventListener("DOMContentLoaded",h,!1),a.removeEventListener("load",h,!1)):(oa.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}function h(){(oa.addEventListener||"load"===event.type||"complete"===oa.readyState)&&(g(),ea.ready())}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(za,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:ya.test(c)?ea.parseJSON(c):c}catch(e){}ea.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!ea.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(ea.acceptData(a)){var e,f,g=ea.expando,h=a.nodeType,i=h?ea.cache:a,j=h?a[g]:a[g]&&g;if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=W.pop()||ea.guid++:g),i[j]||(i[j]=h?{}:{toJSON:ea.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[j]=ea.extend(i[j],b):i[j].data=ea.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[ea.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[ea.camelCase(b)])):e=f,e}}function l(a,b,c){if(ea.acceptData(a)){var d,e,f=a.nodeType,g=f?ea.cache:a,h=f?a[ea.expando]:ea.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){ea.isArray(b)?b=b.concat(ea.map(b,ea.camelCase)):b in d?b=[b]:(b=ea.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!j(d):!ea.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?ea.cleanData([a],!0):ca.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}function m(){return!0}function n(){return!1}function o(){try{return oa.activeElement}catch(a){}}function p(a){var b=Ka.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function q(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==xa?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==xa?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||ea.nodeName(d,b)?f.push(d):ea.merge(f,q(d,b));return void 0===b||b&&ea.nodeName(a,b)?ea.merge([a],f):f}function r(a){Ea.test(a.type)&&(a.defaultChecked=a.checked)}function s(a,b){return ea.nodeName(a,"table")&&ea.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function t(a){return a.type=(null!==ea.find.attr(a,"type"))+"/"+a.type,a}function u(a){var b=Va.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function v(a,b){for(var c,d=0;null!=(c=a[d]);d++)ea._data(c,"globalEval",!b||ea._data(b[d],"globalEval"))}function w(a,b){if(1===b.nodeType&&ea.hasData(a)){var c,d,e,f=ea._data(a),g=ea._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)ea.event.add(b,c,h[c][d])}g.data&&(g.data=ea.extend({},g.data))}}function x(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!ca.noCloneEvent&&b[ea.expando]){e=ea._data(b);for(d in e.events)ea.removeEvent(b,d,e.handle);b.removeAttribute(ea.expando)}"script"===c&&b.text!==a.text?(t(b).text=a.text,u(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),ca.html5Clone&&a.innerHTML&&!ea.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Ea.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function y(b,c){var d,e=ea(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:ea.css(e[0],"display");return e.detach(),f}function z(a){var b=oa,c=_a[a];return c||(c=y(a,b),"none"!==c&&c||($a=($a||ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=($a[0].contentWindow||$a[0].contentDocument).document,b.write(),b.close(),c=y(a,b),$a.detach()),_a[a]=c),c}function A(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}function B(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=mb.length;e--;)if(b=mb[e]+c,b in a)return b;return d}function C(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ea._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Ca(d)&&(f[g]=ea._data(d,"olddisplay",z(d.nodeName)))):(e=Ca(d),(c&&"none"!==c||!e)&&ea._data(d,"olddisplay",e?c:ea.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function D(a,b,c){var d=ib.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=ea.css(a,c+Ba[f],!0,e)),d?("content"===c&&(g-=ea.css(a,"padding"+Ba[f],!0,e)),"margin"!==c&&(g-=ea.css(a,"border"+Ba[f]+"Width",!0,e))):(g+=ea.css(a,"padding"+Ba[f],!0,e),"padding"!==c&&(g+=ea.css(a,"border"+Ba[f]+"Width",!0,e)));return g}function F(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ab(a),g=ca.boxSizing&&"border-box"===ea.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=bb(a,b,f),(0>e||null==e)&&(e=a.style[b]),db.test(e))return e;d=g&&(ca.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+E(a,b,c||(g?"border":"content"),d,f)+"px"}function G(a,b,c,d,e){return new G.prototype.init(a,b,c,d,e)}function H(){return setTimeout(function(){nb=void 0}),nb=ea.now()}function I(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=Ba[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function J(a,b,c){for(var d,e=(tb[b]||[]).concat(tb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function K(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ca(a),p=ea._data(a,"fxshow");c.queue||(h=ea._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,ea.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=ea.css(a,"display"),k="none"===j?ea._data(a,"olddisplay")||z(a.nodeName):j,"inline"===k&&"none"===ea.css(a,"float")&&(ca.inlineBlockNeedsLayout&&"inline"!==z(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",ca.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],pb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||ea.style(a,d)}else j=void 0;if(ea.isEmptyObject(m))"inline"===("none"===j?z(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=ea._data(a,"fxshow",{}),f&&(p.hidden=!o),o?ea(a).show():l.done(function(){ea(a).hide()}),l.done(function(){var b;ea._removeData(a,"fxshow");for(b in m)ea.style(a,b,m[b])});for(d in m)g=J(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function L(a,b){var c,d,e,f,g;for(c in a)if(d=ea.camelCase(c),e=b[d],f=a[c],ea.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=ea.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function M(a,b,c){var d,e,f=0,g=sb.length,h=ea.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=nb||H(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ea.extend({},b),opts:ea.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:nb||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ea.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(L(k,j.opts.specialEasing);g>f;f++)if(d=sb[f].call(j,a,k,j.opts))return d;return ea.map(k,J,j),ea.isFunction(j.opts.start)&&j.opts.start.call(a,j),ea.fx.timer(ea.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function N(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(ta)||[];if(ea.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function O(a,b,c,d){function e(h){var i;return f[h]=!0,ea.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Rb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function P(a,b){var c,d,e=ea.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&ea.extend(!0,a,c),a}function Q(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function R(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function S(a,b,c,d){var e;if(ea.isArray(b))ea.each(b,function(b,e){c||Vb.test(a)?d(a,e):S(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ea.type(b))d(a,b);else for(e in b)S(a+"["+e+"]",b[e],c,d)}function T(){try{return new a.XMLHttpRequest}catch(b){}}function U(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function V(a){return ea.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var W=[],X=W.slice,Y=W.concat,Z=W.push,$=W.indexOf,_={},aa=_.toString,ba=_.hasOwnProperty,ca={},da="1.11.1",ea=function(a,b){return new ea.fn.init(a,b)},fa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ga=/^-ms-/,ha=/-([\da-z])/gi,ia=function(a,b){return b.toUpperCase()};ea.fn=ea.prototype={jquery:da,constructor:ea,selector:"",length:0,toArray:function(){return X.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:X.call(this)},pushStack:function(a){var b=ea.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return ea.each(this,a,b)},map:function(a){return this.pushStack(ea.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:W.sort,splice:W.splice},ea.extend=ea.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||ea.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(ea.isPlainObject(c)||(b=ea.isArray(c)))?(b?(b=!1,f=a&&ea.isArray(a)?a:[]):f=a&&ea.isPlainObject(a)?a:{},g[d]=ea.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},ea.extend({expando:"jQuery"+(da+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===ea.type(a)},isArray:Array.isArray||function(a){return"array"===ea.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!ea.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==ea.type(a)||a.nodeType||ea.isWindow(a))return!1;try{if(a.constructor&&!ba.call(a,"constructor")&&!ba.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(ca.ownLast)for(b in a)return ba.call(a,b);for(b in a);return void 0===b||ba.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?_[aa.call(a)]||"object":typeof a},globalEval:function(b){b&&ea.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(ga,"ms-").replace(ha,ia)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(fa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ea.merge(d,"string"==typeof a?[a]:a):Z.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if($)return $.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return Y.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(e=a[b],b=a,a=e),ea.isFunction(a)?(c=X.call(arguments,2),d=function(){return a.apply(b||this,c.concat(X.call(arguments)))},d.guid=a.guid=a.guid||ea.guid++,d):void 0},now:function(){return+new Date},support:ca}),ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){_["[object "+b+"]"]=b.toLowerCase()});var ja=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sa.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ua,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=ta.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ia,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ba.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return ba.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,aa=Y.slice,ba=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},ca="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",da="[\\x20\\t\\r\\n\\f]",ea="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fa=ea.replace("w","w#"),ga="\\["+da+"*("+ea+")(?:"+da+"*([*^$|!~]?=)"+da+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fa+"))|)"+da+"*\\]",ha=":("+ea+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ga+")*)|.*)\\)|)",ia=new RegExp("^"+da+"+|((?:^|[^\\\\])(?:\\\\.)*)"+da+"+$","g"),ja=new RegExp("^"+da+"*,"+da+"*"),ka=new RegExp("^"+da+"*([>+~]|"+da+")"+da+"*"),la=new RegExp("="+da+"*([^\\]'\"]*?)"+da+"*\\]","g"),ma=new RegExp(ha),na=new RegExp("^"+fa+"$"),oa={ID:new RegExp("^#("+ea+")"),CLASS:new RegExp("^\\.("+ea+")"),TAG:new RegExp("^("+ea.replace("w","w*")+")"),ATTR:new RegExp("^"+ga),PSEUDO:new RegExp("^"+ha),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+da+"*(even|odd|(([+-]|)(\\d*)n|)"+da+"*(?:([+-]|)"+da+"*(\\d+)|))"+da+"*\\)|)","i"),bool:new RegExp("^(?:"+ca+")$","i"),needsContext:new RegExp("^"+da+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+da+"*((?:-\\d)?\\d*)"+da+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,va=new RegExp("\\\\([\\da-f]{1,6}"+da+"?|("+da+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=aa.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xa){_={apply:Y.length?function(a,b){$.apply(a,aa.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=ra.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=ra.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+da+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+da+"*(?:value|"+ca+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+da+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=ra.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",ha)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?ba.call(D,a)-ba.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?ba.call(D,a)-ba.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(la,"='$1']"),v.matchesSelector&&I&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+da+")"+a+"("+da+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=ba.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=ja.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ia," ")}),h=h.slice(d.length));for(g in w.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e
}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ca,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ea.find=ja,ea.expr=ja.selectors,ea.expr[":"]=ea.expr.pseudos,ea.unique=ja.uniqueSort,ea.text=ja.getText,ea.isXMLDoc=ja.isXML,ea.contains=ja.contains;var ka=ea.expr.match.needsContext,la=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ma=/^.[^:#\[\.,]*$/;ea.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ea.find.matchesSelector(d,a)?[d]:[]:ea.find.matches(a,ea.grep(b,function(a){return 1===a.nodeType}))},ea.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(ea(a).filter(function(){for(b=0;e>b;b++)if(ea.contains(d[b],this))return!0}));for(b=0;e>b;b++)ea.find(a,d[b],c);return c=this.pushStack(e>1?ea.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&ka.test(a)?ea(a):a||[],!1).length}});var na,oa=a.document,pa=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,qa=ea.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:pa.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||na).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof ea?b[0]:b,ea.merge(this,ea.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:oa,!0)),la.test(c[1])&&ea.isPlainObject(b))for(c in b)ea.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=oa.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return na.find(a);this.length=1,this[0]=d}return this.context=oa,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):ea.isFunction(a)?"undefined"!=typeof na.ready?na.ready(a):a(ea):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),ea.makeArray(a,this))};qa.prototype=ea.fn,na=ea(oa);var ra=/^(?:parents|prev(?:Until|All))/,sa={children:!0,contents:!0,next:!0,prev:!0};ea.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!ea(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),ea.fn.extend({has:function(a){var b,c=ea(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(ea.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=ka.test(a)||"string"!=typeof a?ea(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&ea.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ea.unique(f):f)},index:function(a){return a?"string"==typeof a?ea.inArray(this[0],ea(a)):ea.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ea.unique(ea.merge(this.get(),ea(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ea.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ea.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ea.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ea.dir(a,"nextSibling")},prevAll:function(a){return ea.dir(a,"previousSibling")},nextUntil:function(a,b,c){return ea.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ea.dir(a,"previousSibling",c)},siblings:function(a){return ea.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ea.sibling(a.firstChild)},contents:function(a){return ea.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ea.merge([],a.childNodes)}},function(a,b){ea.fn[a]=function(c,d){var e=ea.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ea.filter(d,e)),this.length>1&&(sa[a]||(e=ea.unique(e)),ra.test(a)&&(e=e.reverse())),this.pushStack(e)}});var ta=/\S+/g,ua={};ea.Callbacks=function(a){a="string"==typeof a?ua[a]||f(a):ea.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(c=a.memory&&f,d=!0,g=h||0,h=0,e=i.length,b=!0;i&&e>g;g++)if(i[g].apply(f[0],f[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var d=i.length;!function f(b){ea.each(b,function(b,c){var d=ea.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=i.length:c&&(h=d,k(c))}return this},remove:function(){return i&&ea.each(arguments,function(a,c){for(var d;(d=ea.inArray(c,i,d))>-1;)i.splice(d,1),b&&(e>=d&&e--,g>=d&&g--)}),this},has:function(a){return a?ea.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],e=0,this},disable:function(){return i=j=c=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,c){return!i||d&&!j||(c=c||[],c=[a,c.slice?c.slice():c],b?j.push(c):k(c)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},ea.extend({Deferred:function(a){var b=[["resolve","done",ea.Callbacks("once memory"),"resolved"],["reject","fail",ea.Callbacks("once memory"),"rejected"],["notify","progress",ea.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ea.Deferred(function(c){ea.each(b,function(b,f){var g=ea.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&ea.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?ea.extend(a,d):d}},e={};return d.pipe=d.then,ea.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=X.call(arguments),g=f.length,h=1!==g||a&&ea.isFunction(a.promise)?g:0,i=1===h?a:ea.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?X.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&ea.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var va;ea.fn.ready=function(a){return ea.ready.promise().done(a),this},ea.extend({isReady:!1,readyWait:1,holdReady:function(a){a?ea.readyWait++:ea.ready(!0)},ready:function(a){if(a===!0?!--ea.readyWait:!ea.isReady){if(!oa.body)return setTimeout(ea.ready);ea.isReady=!0,a!==!0&&--ea.readyWait>0||(va.resolveWith(oa,[ea]),ea.fn.triggerHandler&&(ea(oa).triggerHandler("ready"),ea(oa).off("ready")))}}}),ea.ready.promise=function(b){if(!va)if(va=ea.Deferred(),"complete"===oa.readyState)setTimeout(ea.ready);else if(oa.addEventListener)oa.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1);else{oa.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&oa.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!ea.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}g(),ea.ready()}}()}return va.promise(b)};var wa,xa="undefined";for(wa in ea(ca))break;ca.ownLast="0"!==wa,ca.inlineBlockNeedsLayout=!1,ea(function(){var a,b,c,d;c=oa.getElementsByTagName("body")[0],c&&c.style&&(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xa&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ca.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=oa.createElement("div");if(null==ca.deleteExpando){ca.deleteExpando=!0;try{delete a.test}catch(b){ca.deleteExpando=!1}}a=null}(),ea.acceptData=function(a){var b=ea.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var ya=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,za=/([A-Z])/g;ea.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?ea.cache[a[ea.expando]]:a[ea.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),ea.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=ea.data(f),1===f.nodeType&&!ea._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=ea.camelCase(d.slice(5)),i(f,d,e[d])));ea._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){ea.data(this,a)}):arguments.length>1?this.each(function(){ea.data(this,a,b)}):f?i(f,a,ea.data(f,a)):void 0},removeData:function(a){return this.each(function(){ea.removeData(this,a)})}}),ea.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=ea._data(a,b),c&&(!d||ea.isArray(c)?d=ea._data(a,b,ea.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=ea.queue(a,b),d=c.length,e=c.shift(),f=ea._queueHooks(a,b),g=function(){ea.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ea._data(a,c)||ea._data(a,c,{empty:ea.Callbacks("once memory").add(function(){ea._removeData(a,b+"queue"),ea._removeData(a,c)})})}}),ea.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ea.queue(this[0],a):void 0===b?this:this.each(function(){var c=ea.queue(this,a,b);ea._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ea.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ea.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=ea.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=ea._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ba=["Top","Right","Bottom","Left"],Ca=function(a,b){return a=b||a,"none"===ea.css(a,"display")||!ea.contains(a.ownerDocument,a)},Da=ea.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===ea.type(c)){e=!0;for(h in c)ea.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,ea.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(ea(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Ea=/^(?:checkbox|radio)$/i;!function(){var a=oa.createElement("input"),b=oa.createElement("div"),c=oa.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ca.leadingWhitespace=3===b.firstChild.nodeType,ca.tbody=!b.getElementsByTagName("tbody").length,ca.htmlSerialize=!!b.getElementsByTagName("link").length,ca.html5Clone="<:nav></:nav>"!==oa.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),ca.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",ca.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",ca.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,ca.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){ca.noCloneEvent=!1}),b.cloneNode(!0).click()),null==ca.deleteExpando){ca.deleteExpando=!0;try{delete b.test}catch(d){ca.deleteExpando=!1}}}(),function(){var b,c,d=oa.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(ca[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),ca[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Fa=/^(?:input|select|textarea)$/i,Ga=/^key/,Ha=/^(?:mouse|pointer|contextmenu)|click/,Ia=/^(?:focusinfocus|focusoutblur)$/,Ja=/^([^.]*)(?:\.(.+)|)$/;ea.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=ea.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return typeof ea===xa||a&&ea.event.triggered===a.type?void 0:ea.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(ta)||[""],h=b.length;h--;)f=Ja.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=ea.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=ea.event.special[n]||{},l=ea.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ea.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),ea.event.global[n]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea.hasData(a)&&ea._data(a);if(q&&(k=q.events)){for(b=(b||"").match(ta)||[""],j=b.length;j--;)if(h=Ja.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ea.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ea.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)ea.event.remove(a,n+b[j],c,d,!0);ea.isEmptyObject(k)&&(delete q.handle,ea._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||oa],n=ba.call(b,"type")?b.type:b,o=ba.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||oa,3!==d.nodeType&&8!==d.nodeType&&!Ia.test(n+ea.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[ea.expando]?b:new ea.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:ea.makeArray(c,[b]),j=ea.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!ea.isWindow(d)){for(i=j.delegateType||n,Ia.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||oa)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(ea._data(h,"events")||{})[b.type]&&ea._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&ea.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&ea.acceptData(d)&&g&&d[n]&&!ea.isWindow(d)){k=d[g],k&&(d[g]=null),ea.event.triggered=n;try{d[n]()}catch(p){}ea.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=ea.event.fix(a);var b,c,d,e,f,g=[],h=X.call(arguments),i=(ea._data(this,"events")||{})[a.type]||[],j=ea.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=ea.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(d.namespace))&&(a.handleObj=d,a.data=d.data,c=((ea.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?ea(c,this).index(i)>=0:ea.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[ea.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ha.test(e)?this.mouseHooks:Ga.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ea.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||oa),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||oa,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==o()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===o()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ea.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return ea.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=ea.extend(new ea.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ea.event.trigger(e,null,b):ea.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ea.removeEvent=oa.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===xa&&(a[d]=null),a.detachEvent(d,c))},ea.Event=function(a,b){return this instanceof ea.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?m:n):this.type=a,b&&ea.extend(this,b),this.timeStamp=a&&a.timeStamp||ea.now(),void(this[ea.expando]=!0)):new ea.Event(a,b)},ea.Event.prototype={isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=m,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=m,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=m,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},ea.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){ea.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!ea.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),ca.submitBubbles||(ea.event.special.submit={setup:function(){return ea.nodeName(this,"form")?!1:void ea.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=ea.nodeName(b,"input")||ea.nodeName(b,"button")?b.form:void 0;c&&!ea._data(c,"submitBubbles")&&(ea.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),ea._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&ea.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return ea.nodeName(this,"form")?!1:void ea.event.remove(this,"._submit")}}),ca.changeBubbles||(ea.event.special.change={setup:function(){return Fa.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ea.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),ea.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),ea.event.simulate("change",this,a,!0)})),!1):void ea.event.add(this,"beforeactivate._change",function(a){var b=a.target;Fa.test(b.nodeName)&&!ea._data(b,"changeBubbles")&&(ea.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||ea.event.simulate("change",this.parentNode,a,!0)}),ea._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ea.event.remove(this,"._change"),!Fa.test(this.nodeName)}}),ca.focusinBubbles||ea.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){ea.event.simulate(b,a.target,ea.event.fix(a),!0)};ea.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ea._data(d,b);e||d.addEventListener(a,c,!0),ea._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ea._data(d,b)-1;e?ea._data(d,b,e):(d.removeEventListener(a,c,!0),ea._removeData(d,b))}}}),ea.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=n;else if(!d)return this;return 1===e&&(g=d,d=function(a){return ea().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=ea.guid++)),this.each(function(){ea.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,ea(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=n),this.each(function(){ea.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){ea.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?ea.event.trigger(a,b,c,!0):void 0}});var Ka="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",La=/ jQuery\d+="(?:null|\d+)"/g,Ma=new RegExp("<(?:"+Ka+")[\\s/>]","i"),Na=/^\s+/,Oa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pa=/<([\w:]+)/,Qa=/<tbody/i,Ra=/<|&#?\w+;/,Sa=/<(?:script|style|link)/i,Ta=/checked\s*(?:[^=]|=\s*.checked.)/i,Ua=/^$|\/(?:java|ecma)script/i,Va=/^true\/(.*)/,Wa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xa={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ca.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ya=p(oa),Za=Ya.appendChild(oa.createElement("div"));Xa.optgroup=Xa.option,Xa.tbody=Xa.tfoot=Xa.colgroup=Xa.caption=Xa.thead,Xa.th=Xa.td,ea.extend({clone:function(a,b,c){var d,e,f,g,h,i=ea.contains(a.ownerDocument,a);if(ca.html5Clone||ea.isXMLDoc(a)||!Ma.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Za.innerHTML=a.outerHTML,Za.removeChild(f=Za.firstChild)),!(ca.noCloneEvent&&ca.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ea.isXMLDoc(a)))for(d=q(f),h=q(a),g=0;null!=(e=h[g]);++g)d[g]&&x(e,d[g]);if(b)if(c)for(h=h||q(a),d=d||q(f),g=0;null!=(e=h[g]);g++)w(e,d[g]);else w(a,f);return d=q(f,"script"),d.length>0&&v(d,!i&&q(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,m=p(b),n=[],o=0;l>o;o++)if(f=a[o],f||0===f)if("object"===ea.type(f))ea.merge(n,f.nodeType?[f]:f);else if(Ra.test(f)){for(h=h||m.appendChild(b.createElement("div")),i=(Pa.exec(f)||["",""])[1].toLowerCase(),k=Xa[i]||Xa._default,h.innerHTML=k[1]+f.replace(Oa,"<$1></$2>")+k[2],e=k[0];e--;)h=h.lastChild;if(!ca.leadingWhitespace&&Na.test(f)&&n.push(b.createTextNode(Na.exec(f)[0])),!ca.tbody)for(f="table"!==i||Qa.test(f)?"<table>"!==k[1]||Qa.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)ea.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);for(ea.merge(n,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);h=m.lastChild}else n.push(b.createTextNode(f));for(h&&m.removeChild(h),ca.appendChecked||ea.grep(q(n,"input"),r),o=0;f=n[o++];)if((!d||-1===ea.inArray(f,d))&&(g=ea.contains(f.ownerDocument,f),h=q(m.appendChild(f),"script"),g&&v(h),c))for(e=0;f=h[e++];)Ua.test(f.type||"")&&c.push(f);return h=null,m},cleanData:function(a,b){for(var c,d,e,f,g=0,h=ea.expando,i=ea.cache,j=ca.deleteExpando,k=ea.event.special;null!=(c=a[g]);g++)if((b||ea.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?ea.event.remove(c,d):ea.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j?delete c[h]:typeof c.removeAttribute!==xa?c.removeAttribute(h):c[h]=null,W.push(e))}}}),ea.fn.extend({text:function(a){return Da(this,function(a){return void 0===a?ea.text(this):this.empty().append((this[0]&&this[0].ownerDocument||oa).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?ea.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||ea.cleanData(q(c)),c.parentNode&&(b&&ea.contains(c.ownerDocument,c)&&v(q(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&ea.cleanData(q(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&ea.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return ea.clone(this,a,b)})},html:function(a){return Da(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(La,""):void 0;if("string"==typeof a&&!Sa.test(a)&&(ca.htmlSerialize||!Ma.test(a))&&(ca.leadingWhitespace||!Na.test(a))&&!Xa[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Oa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(ea.cleanData(q(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,ea.cleanData(q(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=Y.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],n=ea.isFunction(m);if(n||j>1&&"string"==typeof m&&!ca.checkClone&&Ta.test(m))return this.each(function(c){var d=k.eq(c);n&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(h=ea.buildFragment(a,this[0].ownerDocument,!1,this),c=h.firstChild,1===h.childNodes.length&&(h=c),c)){for(f=ea.map(q(h,"script"),t),e=f.length;j>i;i++)d=h,i!==l&&(d=ea.clone(d,!0,!0),e&&ea.merge(f,q(d,"script"))),b.call(this[i],d,i);if(e)for(g=f[f.length-1].ownerDocument,ea.map(f,u),i=0;e>i;i++)d=f[i],Ua.test(d.type||"")&&!ea._data(d,"globalEval")&&ea.contains(g,d)&&(d.src?ea._evalUrl&&ea._evalUrl(d.src):ea.globalEval((d.text||d.textContent||d.innerHTML||"").replace(Wa,"")));h=c=null}return this}}),ea.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ea.fn[a]=function(a){for(var c,d=0,e=[],f=ea(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),ea(f[d])[b](c),Z.apply(e,c.get());return this.pushStack(e)}});var $a,_a={};!function(){var a;ca.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=oa.getElementsByTagName("body")[0],c&&c.style?(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xa&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(oa.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var ab,bb,cb=/^margin/,db=new RegExp("^("+Aa+")(?!px)[a-z%]+$","i"),eb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ab=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},bb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ab(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||ea.contains(a.ownerDocument,a)||(g=ea.style(a,b)),db.test(g)&&cb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),
void 0===g?g:g+""}):oa.documentElement.currentStyle&&(ab=function(a){return a.currentStyle},bb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ab(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),db.test(g)&&!eb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"}),function(){function b(){var b,c,d,e;c=oa.getElementsByTagName("body")[0],c&&c.style&&(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f=g=!1,i=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(b,null)||{}).top,g="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,e=b.appendChild(oa.createElement("div")),e.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",b.style.width="1px",i=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=b.getElementsByTagName("td"),e[0].style.cssText="margin:0;border:0;padding:0;display:none",h=0===e[0].offsetHeight,h&&(e[0].style.display="",e[1].style.display="none",h=0===e[0].offsetHeight),c.removeChild(d))}var c,d,e,f,g,h,i;c=oa.createElement("div"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=c.getElementsByTagName("a")[0],d=e&&e.style,d&&(d.cssText="float:left;opacity:.5",ca.opacity="0.5"===d.opacity,ca.cssFloat=!!d.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",ca.clearCloneStyle="content-box"===c.style.backgroundClip,ca.boxSizing=""===d.boxSizing||""===d.MozBoxSizing||""===d.WebkitBoxSizing,ea.extend(ca,{reliableHiddenOffsets:function(){return null==h&&b(),h},boxSizingReliable:function(){return null==g&&b(),g},pixelPosition:function(){return null==f&&b(),f},reliableMarginRight:function(){return null==i&&b(),i}}))}(),ea.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var fb=/alpha\([^)]*\)/i,gb=/opacity\s*=\s*([^)]*)/,hb=/^(none|table(?!-c[ea]).+)/,ib=new RegExp("^("+Aa+")(.*)$","i"),jb=new RegExp("^([+-])=("+Aa+")","i"),kb={position:"absolute",visibility:"hidden",display:"block"},lb={letterSpacing:"0",fontWeight:"400"},mb=["Webkit","O","Moz","ms"];ea.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ca.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=ea.camelCase(b),i=a.style;if(b=ea.cssProps[h]||(ea.cssProps[h]=B(i,h)),g=ea.cssHooks[b]||ea.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=jb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(ea.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||ea.cssNumber[h]||(c+="px"),ca.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=ea.camelCase(b);return b=ea.cssProps[h]||(ea.cssProps[h]=B(a.style,h)),g=ea.cssHooks[b]||ea.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=bb(a,b,d)),"normal"===f&&b in lb&&(f=lb[b]),""===c||c?(e=parseFloat(f),c===!0||ea.isNumeric(e)?e||0:f):f}}),ea.each(["height","width"],function(a,b){ea.cssHooks[b]={get:function(a,c,d){return c?hb.test(ea.css(a,"display"))&&0===a.offsetWidth?ea.swap(a,kb,function(){return F(a,b,d)}):F(a,b,d):void 0},set:function(a,c,d){var e=d&&ab(a);return D(a,c,d?E(a,b,d,ca.boxSizing&&"border-box"===ea.css(a,"boxSizing",!1,e),e):0)}}}),ca.opacity||(ea.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=ea.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===ea.trim(f.replace(fb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=fb.test(f)?f.replace(fb,e):f+" "+e)}}),ea.cssHooks.marginRight=A(ca.reliableMarginRight,function(a,b){return b?ea.swap(a,{display:"inline-block"},bb,[a,"marginRight"]):void 0}),ea.each({margin:"",padding:"",border:"Width"},function(a,b){ea.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+Ba[d]+b]=f[d]||f[d-2]||f[0];return e}},cb.test(a)||(ea.cssHooks[a+b].set=D)}),ea.fn.extend({css:function(a,b){return Da(this,function(a,b,c){var d,e,f={},g=0;if(ea.isArray(b)){for(d=ab(a),e=b.length;e>g;g++)f[b[g]]=ea.css(a,b[g],!1,d);return f}return void 0!==c?ea.style(a,b,c):ea.css(a,b)},a,b,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ca(this)?ea(this).show():ea(this).hide()})}}),ea.Tween=G,G.prototype={constructor:G,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ea.cssNumber[c]?"":"px")},cur:function(){var a=G.propHooks[this.prop];return a&&a.get?a.get(this):G.propHooks._default.get(this)},run:function(a){var b,c=G.propHooks[this.prop];return this.options.duration?this.pos=b=ea.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):G.propHooks._default.set(this),this}},G.prototype.init.prototype=G.prototype,G.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ea.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){ea.fx.step[a.prop]?ea.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ea.cssProps[a.prop]]||ea.cssHooks[a.prop])?ea.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ea.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ea.fx=G.prototype.init,ea.fx.step={};var nb,ob,pb=/^(?:toggle|show|hide)$/,qb=new RegExp("^(?:([+-])=|)("+Aa+")([a-z%]*)$","i"),rb=/queueHooks$/,sb=[K],tb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=qb.exec(b),f=e&&e[3]||(ea.cssNumber[a]?"":"px"),g=(ea.cssNumber[a]||"px"!==f&&+d)&&qb.exec(ea.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,ea.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};ea.Animation=ea.extend(M,{tweener:function(a,b){ea.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],tb[c]=tb[c]||[],tb[c].unshift(b)},prefilter:function(a,b){b?sb.unshift(a):sb.push(a)}}),ea.speed=function(a,b,c){var d=a&&"object"==typeof a?ea.extend({},a):{complete:c||!c&&b||ea.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ea.isFunction(b)&&b};return d.duration=ea.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ea.fx.speeds?ea.fx.speeds[d.duration]:ea.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){ea.isFunction(d.old)&&d.old.call(this),d.queue&&ea.dequeue(this,d.queue)},d},ea.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ea.isEmptyObject(a),f=ea.speed(b,c,d),g=function(){var b=M(this,ea.extend({},a),f);(e||ea._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ea.timers,g=ea._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&rb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&ea.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ea._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ea.timers,g=d?d.length:0;for(c.finish=!0,ea.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),ea.each(["toggle","show","hide"],function(a,b){var c=ea.fn[b];ea.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(I(b,!0),a,d,e)}}),ea.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ea.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ea.timers=[],ea.fx.tick=function(){var a,b=ea.timers,c=0;for(nb=ea.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||ea.fx.stop(),nb=void 0},ea.fx.timer=function(a){ea.timers.push(a),a()?ea.fx.start():ea.timers.pop()},ea.fx.interval=13,ea.fx.start=function(){ob||(ob=setInterval(ea.fx.tick,ea.fx.interval))},ea.fx.stop=function(){clearInterval(ob),ob=null},ea.fx.speeds={slow:600,fast:200,_default:400},ea.fn.delay=function(a,b){return a=ea.fx?ea.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=oa.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=oa.createElement("select"),e=c.appendChild(oa.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",ca.getSetAttribute="t"!==b.className,ca.style=/top/.test(d.getAttribute("style")),ca.hrefNormalized="/a"===d.getAttribute("href"),ca.checkOn=!!a.value,ca.optSelected=e.selected,ca.enctype=!!oa.createElement("form").enctype,c.disabled=!0,ca.optDisabled=!e.disabled,a=oa.createElement("input"),a.setAttribute("value",""),ca.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),ca.radioValue="t"===a.value}();var ub=/\r/g;ea.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ea.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ea(this).val()):a,null==e?e="":"number"==typeof e?e+="":ea.isArray(e)&&(e=ea.map(e,function(a){return null==a?"":a+""})),b=ea.valHooks[this.type]||ea.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=ea.valHooks[e.type]||ea.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ub,""):null==c?"":c)}}}),ea.extend({valHooks:{option:{get:function(a){var b=ea.find.attr(a,"value");return null!=b?b:ea.trim(ea.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(ca.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!ea.nodeName(c.parentNode,"optgroup"))){if(b=ea(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ea.makeArray(b),g=e.length;g--;)if(d=e[g],ea.inArray(ea.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),ea.each(["radio","checkbox"],function(){ea.valHooks[this]={set:function(a,b){return ea.isArray(b)?a.checked=ea.inArray(ea(a).val(),b)>=0:void 0}},ca.checkOn||(ea.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var vb,wb,xb=ea.expr.attrHandle,yb=/^(?:checked|selected)$/i,zb=ca.getSetAttribute,Ab=ca.input;ea.fn.extend({attr:function(a,b){return Da(this,ea.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ea.removeAttr(this,a)})}}),ea.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===xa?ea.prop(a,b,c):(1===f&&ea.isXMLDoc(a)||(b=b.toLowerCase(),d=ea.attrHooks[b]||(ea.expr.match.bool.test(b)?wb:vb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=ea.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void ea.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(ta);if(f&&1===a.nodeType)for(;c=f[e++];)d=ea.propFix[c]||c,ea.expr.match.bool.test(c)?Ab&&zb||!yb.test(c)?a[d]=!1:a[ea.camelCase("default-"+c)]=a[d]=!1:ea.attr(a,c,""),a.removeAttribute(zb?c:d)},attrHooks:{type:{set:function(a,b){if(!ca.radioValue&&"radio"===b&&ea.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),wb={set:function(a,b,c){return b===!1?ea.removeAttr(a,c):Ab&&zb||!yb.test(c)?a.setAttribute(!zb&&ea.propFix[c]||c,c):a[ea.camelCase("default-"+c)]=a[c]=!0,c}},ea.each(ea.expr.match.bool.source.match(/\w+/g),function(a,b){var c=xb[b]||ea.find.attr;xb[b]=Ab&&zb||!yb.test(b)?function(a,b,d){var e,f;return d||(f=xb[b],xb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,xb[b]=f),e}:function(a,b,c){return c?void 0:a[ea.camelCase("default-"+b)]?b.toLowerCase():null}}),Ab&&zb||(ea.attrHooks.value={set:function(a,b,c){return ea.nodeName(a,"input")?void(a.defaultValue=b):vb&&vb.set(a,b,c)}}),zb||(vb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},xb.id=xb.name=xb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},ea.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:vb.set},ea.attrHooks.contenteditable={set:function(a,b,c){vb.set(a,""===b?!1:b,c)}},ea.each(["width","height"],function(a,b){ea.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),ca.style||(ea.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Bb=/^(?:input|select|textarea|button|object)$/i,Cb=/^(?:a|area)$/i;ea.fn.extend({prop:function(a,b){return Da(this,ea.prop,a,b,arguments.length>1)},removeProp:function(a){return a=ea.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),ea.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!ea.isXMLDoc(a),f&&(b=ea.propFix[b]||b,e=ea.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=ea.find.attr(a,"tabindex");return b?parseInt(b,10):Bb.test(a.nodeName)||Cb.test(a.nodeName)&&a.href?0:-1}}}}),ca.hrefNormalized||ea.each(["href","src"],function(a,b){ea.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),ca.optSelected||(ea.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),ea.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ea.propFix[this.toLowerCase()]=this}),ca.enctype||(ea.propFix.enctype="encoding");var Db=/[\t\r\n\f]/g;ea.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(ta)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Db," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=ea.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(ta)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Db," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?ea.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):ea.isFunction(a)?this.each(function(c){ea(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var b,d=0,e=ea(this),f=a.match(ta)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===xa||"boolean"===c)&&(this.className&&ea._data(this,"__className__",this.className),this.className=this.className||a===!1?"":ea._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Db," ").indexOf(b)>=0)return!0;return!1}}),ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){ea.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ea.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var Eb=ea.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ea.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=ea.trim(b+"");return e&&!ea.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():ea.error("Invalid JSON: "+b)},ea.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||ea.error("Invalid XML: "+b),c};var Hb,Ib,Jb=/#.*$/,Kb=/([?&])_=[^&]*/,Lb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nb=/^(?:GET|HEAD)$/,Ob=/^\/\//,Pb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Qb={},Rb={},Sb="*/".concat("*");try{Ib=location.href}catch(Tb){Ib=oa.createElement("a"),Ib.href="",Ib=Ib.href}Hb=Pb.exec(Ib.toLowerCase())||[],ea.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ib,type:"GET",isLocal:Mb.test(Hb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ea.parseJSON,"text xml":ea.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?P(P(a,ea.ajaxSettings),b):P(ea.ajaxSettings,a)},ajaxPrefilter:N(Qb),ajaxTransport:N(Rb),ajax:function(a,b){function c(a,b,c,d){var e,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),j=void 0,g=d||"",v.readyState=a>0?4:0,e=a>=200&&300>a||304===a,c&&(s=Q(l,v,c)),s=R(l,s,v,e),e?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(ea.lastModified[f]=u),u=v.getResponseHeader("etag"),u&&(ea.etag[f]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,e=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",e?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,i&&n.trigger(e?"ajaxSuccess":"ajaxError",[v,l,e?k:r]),p.fireWith(m,[v,w]),i&&(n.trigger("ajaxComplete",[v,l]),--ea.active||ea.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=ea.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?ea(m):ea.event,o=ea.Deferred(),p=ea.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!k)for(k={};b=Lb.exec(g);)k[b[1].toLowerCase()]=b[2];b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return j&&j.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||Ib)+"").replace(Jb,"").replace(Ob,Hb[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=ea.trim(l.dataType||"*").toLowerCase().match(ta)||[""],null==l.crossDomain&&(d=Pb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Hb[1]&&d[2]===Hb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Hb[3]||("http:"===Hb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=ea.param(l.data,l.traditional)),O(Qb,l,b,v),2===t)return v;i=l.global,i&&0===ea.active++&&ea.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Nb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Kb.test(f)?f.replace(Kb,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(ea.lastModified[f]&&v.setRequestHeader("If-Modified-Since",ea.lastModified[f]),ea.etag[f]&&v.setRequestHeader("If-None-Match",ea.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Sb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)v.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(e in{success:1,error:1,complete:1})v[e](l[e]);if(j=O(Rb,l,b,v)){v.readyState=1,i&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,j.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return ea.get(a,b,c,"json")},getScript:function(a,b){return ea.get(a,void 0,b,"script")}}),ea.each(["get","post"],function(a,b){ea[b]=function(a,c,d,e){return ea.isFunction(c)&&(e=e||d,d=c,c=void 0),ea.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),ea.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ea.fn[b]=function(a){return this.on(b,a)}}),ea._evalUrl=function(a){return ea.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ea.fn.extend({wrapAll:function(a){if(ea.isFunction(a))return this.each(function(b){ea(this).wrapAll(a.call(this,b))});if(this[0]){var b=ea(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return ea.isFunction(a)?this.each(function(b){ea(this).wrapInner(a.call(this,b))}):this.each(function(){var b=ea(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ea.isFunction(a);return this.each(function(c){ea(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ea.nodeName(this,"body")||ea(this).replaceWith(this.childNodes)}).end()}}),ea.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!ca.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||ea.css(a,"display"))},ea.expr.filters.visible=function(a){return!ea.expr.filters.hidden(a)};var Ub=/%20/g,Vb=/\[\]$/,Wb=/\r?\n/g,Xb=/^(?:submit|button|image|reset|file)$/i,Yb=/^(?:input|select|textarea|keygen)/i;ea.param=function(a,b){var c,d=[],e=function(a,b){b=ea.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=ea.ajaxSettings&&ea.ajaxSettings.traditional),ea.isArray(a)||a.jquery&&!ea.isPlainObject(a))ea.each(a,function(){e(this.name,this.value)});else for(c in a)S(c,a[c],b,e);return d.join("&").replace(Ub,"+")},ea.fn.extend({serialize:function(){return ea.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=ea.prop(this,"elements");return a?ea.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!ea(this).is(":disabled")&&Yb.test(this.nodeName)&&!Xb.test(a)&&(this.checked||!Ea.test(a))}).map(function(a,b){var c=ea(this).val();return null==c?null:ea.isArray(c)?ea.map(c,function(a){return{name:b.name,value:a.replace(Wb,"\r\n")}}):{name:b.name,value:c.replace(Wb,"\r\n")}}).get()}}),ea.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&T()||U()}:T;var Zb=0,$b={},_b=ea.ajaxSettings.xhr();a.ActiveXObject&&ea(a).on("unload",function(){for(var a in $b)$b[a](void 0,!0)}),ca.cors=!!_b&&"withCredentials"in _b,_b=ca.ajax=!!_b,_b&&ea.ajaxTransport(function(a){if(!a.crossDomain||ca.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Zb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete $b[g],b=void 0,f.onreadystatechange=ea.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=$b[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}}),ea.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ea.globalEval(a),a}}}),ea.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),ea.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=oa.head||ea("head")[0]||oa.documentElement;return{send:function(d,e){b=oa.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ac=[],bc=/(=)\?(?=&|$)|\?\?/;ea.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ac.pop()||ea.expando+"_"+Eb++;return this[a]=!0,a}}),ea.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=ea.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ea.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ac.push(e)),g&&ea.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),ea.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||oa;var d=la.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=ea.buildFragment([a],b,e),e&&e.length&&ea(e).remove(),ea.merge([],d.childNodes))};var cc=ea.fn.load;ea.fn.load=function(a,b,c){if("string"!=typeof a&&cc)return cc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=ea.trim(a.slice(h,a.length)),a=a.slice(0,h)),ea.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&ea.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?ea("<div>").append(ea.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},ea.expr.filters.animated=function(a){return ea.grep(ea.timers,function(b){return a===b.elem}).length};var dc=a.document.documentElement;ea.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ea.css(a,"position"),l=ea(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=ea.css(a,"top"),i=ea.css(a,"left"),j=("absolute"===k||"fixed"===k)&&ea.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ea.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ea.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){ea.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,ea.contains(b,e)?(typeof e.getBoundingClientRect!==xa&&(d=e.getBoundingClientRect()),c=V(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===ea.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ea.nodeName(a[0],"html")||(c=a.offset()),c.top+=ea.css(a[0],"borderTopWidth",!0),c.left+=ea.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-ea.css(d,"marginTop",!0),left:b.left-c.left-ea.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||dc;a&&!ea.nodeName(a,"html")&&"static"===ea.css(a,"position");)a=a.offsetParent;return a||dc})}}),ea.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);ea.fn[a]=function(d){return Da(this,function(a,d,e){var f=V(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?ea(f).scrollLeft():e,c?e:ea(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),ea.each(["top","left"],function(a,b){ea.cssHooks[b]=A(ca.pixelPosition,function(a,c){return c?(c=bb(a,b),db.test(c)?ea(a).position()[b]+"px":c):void 0})}),ea.each({Height:"height",Width:"width"},function(a,b){ea.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){ea.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Da(this,function(b,c,d){var e;return ea.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,
Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?ea.css(b,c,g):ea.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),ea.fn.size=function(){return this.length},ea.fn.andSelf=ea.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ea});var ec=a.jQuery,fc=a.$;return ea.noConflict=function(b){return a.$===ea&&(a.$=fc),b&&a.jQuery===ea&&(a.jQuery=ec),ea},typeof b===xa&&(a.jQuery=a.$=ea),ea});
+ function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this),
            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
            g = a(f),
            h = g.data("bs.collapse"),
            i = h ? "toggle" : e.data(),
            j = e.attr("data-parent"),
            k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e.toggleClass("collapsed", g.hasClass("in"))), b.call(g, i)
    })
}(jQuery);
! function(a) {
    var b = function() {
        var b = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            c = (function() {
                a(window).load(function() {
                    a("body").children().on("click.superclick", function() {
                        var b = a(".sf-js-enabled");
                        b.superclick("reset")
                    })
                })
            }(), function(a, c) {
                var d = b.menuClass;
                c.cssArrows && (d += " " + b.menuArrowClass), a.toggleClass(d)
            }),
            d = function(c, d) {
                return c.find("li." + d.pathClass).slice(0, d.pathLevels).addClass(d.activeClass + " " + b.bcClass).filter(function() {
                    return a(this).children(".sidebar-submenu").hide().show().length
                }).removeClass(d.pathClass)
            },
            e = function(a) {
                a.children("a").toggleClass(b.anchorClass)
            },
            f = function(a) {
                var b = a.css("ms-touch-action");
                b = "pan-y" === b ? "auto" : "pan-y", a.css("ms-touch-action", b)
            },
            g = function(b) {
                var c, d = a(this),
                    e = d.siblings(".sidebar-submenu");
                return e.length ? (c = e.is(":hidden") ? h : i, a.proxy(c, d.parent("li"))(), !1) : void 0
            },
            h = function() {
                var b = a(this);
                l(b);
                b.siblings().superclick("hide").end().superclick("show")
            },
            i = function() {
                var b = a(this),
                    c = l(b);
                a.proxy(j, b, c)()
            },
            j = function(b) {
                b.retainPath = a.inArray(this[0], b.$path) > -1, this.superclick("hide"), this.parents("." + b.activeClass).length || (b.onIdle.call(k(this)), b.$path.length && a.proxy(h, b.$path)())
            },
            k = function(a) {
                return a.closest("." + b.menuClass)
            },
            l = function(a) {
                return k(a).data("sf-options")
            };
        return {
            hide: function(b) {
                if (this.length) {
                    var c = this,
                        d = l(c);
                    if (!d) return this;
                    var e = d.retainPath === !0 ? d.$path : "",
                        f = c.find("li." + d.activeClass).add(this).not(e).removeClass(d.activeClass).children(".sidebar-submenu"),
                        g = d.speedOut;
                    b && (f.show(), g = 0), d.retainPath = !1, d.onBeforeHide.call(f), f.stop(!0, !0).animate(d.animationOut, g, function() {
                        var b = a(this);
                        d.onHide.call(b)
                    })
                }
                return this
            },
            show: function() {
                var a = l(this);
                if (!a) return this;
                var b = this.addClass(a.activeClass),
                    c = b.children(".sidebar-submenu");
                return a.onBeforeShow.call(c), c.stop(!0, !0).animate(a.animation, a.speed, function() {
                    a.onShow.call(c)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var d = a(this),
                        g = d.data("sf-options"),
                        h = d.find("li:has(ul)");
                    return g ? (c(d, g), e(h), f(d), d.off(".superclick"), h.children(".sidebar-submenu").attr("style", function(a, b) {
                        return b.replace(/display[^;]+;?/g, "")
                    }), g.$path.removeClass(g.activeClass + " " + b.bcClass).addClass(g.pathClass), d.find("." + g.activeClass).removeClass(g.activeClass), g.onDestroy.call(d), void d.removeData("sf-options")) : !1
                })
            },
            reset: function() {
                return this.each(function() {
                    var b = a(this),
                        c = l(b),
                        d = a(b.find("." + c.activeClass).toArray().reverse());
                    d.children("a").trigger("click")
                })
            },
            init: function(h) {
                return this.each(function() {
                    var i = a(this);
                    if (i.data("sf-options")) return !1;
                    var j = a.extend({}, a.fn.superclick.defaults, h),
                        k = i.find("li:has(ul)");
                    j.$path = d(i, j), i.data("sf-options", j), c(i, j), e(k), f(i), i.on("click.superclick", "a", g), k.not("." + b.bcClass).superclick("hide", !0), j.onInit.call(this)
                })
            }
        }
    }();
    a.fn.superclick = function(c, d) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? a.error("Method " + c + " does not exist on jQuery.fn.superclick") : b.init.apply(this, arguments)
    }, a.fn.superclick.defaults = {
        activeClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        onInit: a.noop,
        onBeforeShow: a.noop,
        onShow: a.noop,
        onBeforeHide: a.noop,
        onHide: a.noop,
        onIdle: a.noop,
        onDestroy: a.noop
    }
}(jQuery);
! function(a) {
    jQuery.fn.extend({
        slimScroll: function(b) {
            var c = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                },
                d = a.extend(c, b);
            return this.each(function() {
                function c(b) {
                    if (j) {
                        var b = b || window.event,
                            c = 0;
                        b.wheelDelta && (c = -b.wheelDelta / 120), b.detail && (c = b.detail / 3);
                        var f = b.target || b.srcTarget || b.srcElement;
                        a(f).closest("." + d.wrapperClass).is(v.parent()) && e(c, !0), b.preventDefault && !u && b.preventDefault(), u || (b.returnValue = !1)
                    }
                }

                function e(a, b, c) {
                    u = !1;
                    var e = a,
                        f = v.outerHeight() - A.outerHeight();
                    if (b && (e = parseInt(A.css("top")) + a * parseInt(d.wheelStep) / 100 * A.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), A.css({
                            top: e + "px"
                        })), p = parseInt(A.css("top")) / (v.outerHeight() - A.outerHeight()), e = p * (v[0].scrollHeight - v.outerHeight()), c) {
                        e = a;
                        var g = e / v[0].scrollHeight * v.outerHeight();
                        g = Math.min(Math.max(g, 0), f), A.css({
                            top: g + "px"
                        })
                    }
                    v.scrollTop(e), v.trigger("slimscrolling", ~~e), h(), i()
                }

                function f() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", c, !1), this.addEventListener("mousewheel", c, !1), this.addEventListener("MozMousePixelScroll", c, !1)) : document.attachEvent("onmousewheel", c)
                }

                function g() {
                    o = Math.max(v.outerHeight() / v[0].scrollHeight * v.outerHeight(), s), A.css({
                        height: o + "px"
                    });
                    var a = o == v.outerHeight() ? "none" : "block";
                    A.css({
                        display: a
                    })
                }

                function h() {
                    if (g(), clearTimeout(m), p == ~~p) {
                        if (u = d.allowPageScroll, q != p) {
                            var a = 0 == ~~p ? "top" : "bottom";
                            v.trigger("slimscroll", a)
                        }
                    } else u = !1;
                    return q = p, o >= v.outerHeight() ? void(u = !0) : (A.stop(!0, !0).fadeIn("fast"), void(d.railVisible && z.stop(!0, !0).fadeIn("fast")))
                }

                function i() {
                    d.alwaysVisible || (m = setTimeout(function() {
                        d.disableFadeOut && j || k || l || (A.fadeOut("slow"), z.fadeOut("slow"))
                    }, 1e3))
                }
                var j, k, l, m, n, o, p, q, r = "<div></div>",
                    s = 30,
                    u = !1,
                    v = a(this);
                if (v.parent().hasClass(d.wrapperClass)) {
                    var w = v.scrollTop();
                    if (A = v.parent().find("." + d.barClass), z = v.parent().find("." + d.railClass), g(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            v.parent().css("height", "auto"), v.css("height", "auto");
                            var x = v.parent().parent().height();
                            v.parent().css("height", x), v.css("height", x)
                        }
                        if ("scrollTo" in b) w = parseInt(d.scrollTo);
                        else if ("scrollBy" in b) w += parseInt(d.scrollBy);
                        else if ("destroy" in b) return A.remove(), z.remove(), void v.unwrap();
                        e(w, !1, !0)
                    }
                } else {
                    d.height = "auto" == d.height ? v.parent().height() : d.height;
                    var y = a(r).addClass(d.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    v.css({
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    var z = a(r).addClass(d.railClass).css({
                            width: d.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: d.alwaysVisible && d.railVisible ? "block" : "none",
                            "border-radius": d.railBorderRadius,
                            background: d.railColor,
                            opacity: d.railOpacity,
                            zIndex: 90
                        }),
                        A = a(r).addClass(d.barClass).css({
                            background: d.color,
                            width: d.size,
                            position: "absolute",
                            top: 0,
                            opacity: d.opacity,
                            display: d.alwaysVisible ? "block" : "none",
                            "border-radius": d.borderRadius,
                            BorderRadius: d.borderRadius,
                            MozBorderRadius: d.borderRadius,
                            WebkitBorderRadius: d.borderRadius,
                            zIndex: 99
                        }),
                        B = "right" == d.position ? {
                            right: d.distance
                        } : {
                            left: d.distance
                        };
                    z.css(B), A.css(B), v.wrap(y), v.parent().append(A), v.parent().append(z), d.railDraggable && A.bind("mousedown", function(b) {
                        var c = a(document);
                        return l = !0, t = parseFloat(A.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY, A.css("top", currTop), e(0, A.position().top, !1)
                        }), c.bind("mouseup.slimscroll", function(a) {
                            l = !1, i(), c.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(a) {
                        return a.stopPropagation(), a.preventDefault(), !1
                    }), z.hover(function() {
                        h()
                    }, function() {
                        i()
                    }), A.hover(function() {
                        k = !0
                    }, function() {
                        k = !1
                    }), v.hover(function() {
                        j = !0, h(), i()
                    }, function() {
                        j = !1, i()
                    }), v.bind("touchstart", function(a, b) {
                        a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
                    }), v.bind("touchmove", function(a) {
                        if (u || a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
                            var b = (n - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
                            e(b, !0), n = a.originalEvent.touches[0].pageY
                        }
                    }), g(), "bottom" === d.start ? (A.css({
                        top: v.outerHeight() - A.outerHeight()
                    }), e(0, !0)) : "top" !== d.start && (e(a(d.start).position().top, null, !0), d.alwaysVisible || A.hide()), f()
                }
            }), this
        }
    }), jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}(jQuery);
function body_sizer() {
    var a = $(window).height(),
        b = $("#page-header").height(),
        c = a - b;
    $("#page-sidebar").css("height", a), $(".scroll-sidebar").css("height", c), $("#page-content").css("min-height", c)
}

function pageTransitions() {
    var a = [".pt-page-moveFromLeft", "pt-page-moveFromRight", "pt-page-moveFromTop", "pt-page-moveFromBottom", "pt-page-fade", "pt-page-moveFromLeftFade", "pt-page-moveFromRightFade", "pt-page-moveFromTopFade", "pt-page-moveFromBottomFade", "pt-page-scaleUp", "pt-page-scaleUpCenter", "pt-page-flipInLeft", "pt-page-flipInRight", "pt-page-flipInBottom", "pt-page-flipInTop", "pt-page-rotatePullRight", "pt-page-rotatePullLeft", "pt-page-rotatePullTop", "pt-page-rotatePullBottom", "pt-page-rotateUnfoldLeft", "pt-page-rotateUnfoldRight", "pt-page-rotateUnfoldTop", "pt-page-rotateUnfoldBottom"];
    for (var b in a) {
        var c = a[b];
        if ($(".add-transition").hasClass(c)) return $(".add-transition").addClass(c + "-init page-transition"), void setTimeout(function() {
            $(".add-transition").removeClass(c + " " + c + "-init page-transition")
        }, 1200)
    }
}
$(document).ready(function() {
    body_sizer(), $(function() {
        $(".scroll-sidebar").slimscroll({
            height: "100%",
            color: "rgba(155, 164, 169, 0.68)",
            size: "6px"
        })
    }), $(function() {
        $("#sidebar-menu").hover(function() {
            $("#page-sidebar").toggleClass("sidebar-hover")
        })
    })
}), $(window).on("resize", function() {
    body_sizer()
}), $(document).ready(function() {
    pageTransitions(), $(".dropdown").on("show.bs.dropdown", function(a) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown()
    }), $(".dropdown").on("hide.bs.dropdown", function(a) {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp()
    }), $(function() {
        $("#sidebar-menu").superclick({
            animation: {
                height: "show"
            },
            animationOut: {
                height: "hide"
            }
        });
        var a = window.location.pathname.split("/");
        a = a[a.length - 1], void 0 !== a && ($("#sidebar-menu").find("a[href$='" + a + "']").addClass("active"), $("#sidebar-menu").find("a[href$='" + a + "']").parents().eq(3).superclick("show"))
    }), $(function() {
        $("#close-sidebar").click(function() {
            $("body").toggleClass("closed-sidebar"), $(".glyph-icon", this).toggleClass("icon-outdent").toggleClass("icon-indent")
        })
    })
});
+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery);
$(document).ready(function(){$(".switch-button").click(function(a){a.preventDefault();var b=$(this).attr("switch-parent"),c=$(this).attr("switch-target");$(b).slideToggle(),$(c).slideToggle()}),$(".hidden-button").hover(function(){$(".btn-hide",this).fadeIn("fast")},function(){$(".btn-hide",this).fadeOut("normal")}),$(".toggle-button").click(function(a){a.preventDefault(),$(".glyph-icon",this).toggleClass("icon-rotate-180"),$(this).parents(".content-box:first").find(".content-box-wrapper").slideToggle()}),$(".remove-button").click(function(a){a.preventDefault();var b=$(this).attr("data-animation"),c=$(this).parents(".content-box:first");$(c).addClass("animated"),$(c).addClass(b);window.setTimeout(function(){$(c).slideUp()},500),window.setTimeout(function(){$(c).removeClass(b).fadeIn()},2500)}),$(function(){"use strict";$(".infobox-close").click(function(a){a.preventDefault(),$(this).parent().fadeOut()})})});
+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=window.SVGElement&&c instanceof window.SVGElement,f=c.getBoundingClientRect?c.getBoundingClientRect():null,g=d?{top:0,left:0}:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=e?{}:{width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()};return a.extend({},f,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery);
+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery);
$(function() {
    "use strict";
    $('a[href="#"]').click(function(a) {
        a.preventDefault()
    })
}),
//     $(function() {
//     "use strict";
//     $(".todo-box li input").on("click", function() {
//         $(this).parent().toggleClass("todo-done")
//     })
// }), $(function() {
//     "use strict";
//     var a = 0;
//     $(".timeline-scroll .tl-row").each(function(b, c) {
//         var d = $(c);
//         a += d.outerWidth() + parseInt(d.css("margin-left"), 10) + parseInt(d.css("margin-right"), 10)
//     }), $(".timeline-horizontal", this).width(a)
// }), $(function() {
//     "use strict";
//     $(".input-switch-alt").simpleCheckbox()
// }),
    $(function() {
    "use strict";
    $(".scrollable-slim").slimScroll({
        color: "#8da0aa",
        size: "10px",
        alwaysVisible: !0
    })
}), $(function() {
    "use strict";
    $(".scrollable-slim-sidebar").slimScroll({
        color: "#8da0aa",
        size: "10px",
        height: "100%",
        alwaysVisible: !0
    })
}), $(function() {
    "use strict";
    $(".scrollable-slim-box").slimScroll({
        color: "#8da0aa",
        size: "6px",
        alwaysVisible: !1
    })
}), $(function() {
    "use strict";
    $(".loading-button").click(function() {
        var a = $(this);
        a.button("loading")
    })
}), $(function() {
    "use strict";
    $(".tooltip-button").tooltip({
        container: "body"
    })
}), $(function() {
    "use strict";
    $(".alert-close-btn").click(function() {
        $(this).parent().addClass("animated fadeOutDown")
    })
}), $(function() {
    "use strict";
    $(".popover-button").popover({
        container: "body",
        html: !0,
        animation: !0,
        content: function() {
            var a = $(this).attr("data-id");
            return $(a).html()
        }
    }).click(function(a) {
        a.preventDefault()
    })
}),
//     $(document).ready(function() {
//     $.material.init()
// }),
    $(function() {
    "use strict";
    $(".popover-button-default").popover({
        container: "body",
        html: !0,
        animation: !0
    }).click(function(a) {
        a.preventDefault()
    })
});
var mUIColors = {
        "default": "#3498db",
        gray: "#d6dde2",
        primary: "#00bca4",
        success: "#2ecc71",
        warning: "#e67e22",
        danger: "#e74c3c",
        info: "#3498db"
    },
    getUIColor = function(a) {
        return mUIColors[a] ? mUIColors[a] : mUIColors["default"]
    };
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"@VERSION",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(){var b=this.css("position"),c="absolute"===b,d=this.parents().filter(function(){var b=a(this);return c&&"static"===b.css("position")?!1:/(auto|scroll)/.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==b&&d.length?d:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;h>g;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return f=!g&&h.length?a.widget.extend.apply(null,[f].concat(h)):f,g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))}),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});
!function(a){"function"==typeof define&&define.amd?define(["jquery","./widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).mouseup(function(){b=!1}),a.widget("ui.mouse",{version:"@VERSION",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f="string"==typeof this.options.cancel&&c.target.nodeName?a(c.target).closest(this.options.cancel).length:!1;return e&&!f&&this._mouseCapture(c)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0)):!0}},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):b.which?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(c){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),b=!1,!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d||e?c.width():c.outerWidth(),height:d||e?c.height():c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],f||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:0>c?"left":b>0?"right":"center",vertical:0>f?"top":d>0?"bottom":"middle"};l>p&&h(b+c)<p&&(i.horizontal="center"),m>q&&h(d+f)<q&&(i.vertical="middle"),g(h(b),h(c))>g(h(d),h(f))?i.important="horizontal":i.important="vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;b.collisionWidth>f?i>0&&0>=j?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):j>0&&0>=i?a.left=e:i>j?a.left=e+f-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;b.collisionHeight>f?i>0&&0>=j?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):j>0&&0>=i?a.top=e:i>j?a.top=e+f-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];0>k?(c=a.left+m+n+o+b.collisionWidth-g-f,(0>c||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];0>k?(d=a.top+n+o+p+b.collisionHeight-g-f,a.top+n+o+p>k&&(0>d||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,a.top+n+o+p>l&&(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,g,h=document.getElementsByTagName("body")[0],i=document.createElement("div");b=document.createElement(h?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},h&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(g in d)b.style[g]=d[g];b.appendChild(i),c=h||document.documentElement,c.insertBefore(b,c.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",e=a(i).offset().left,f=e>10&&11>e,b.innerHTML="",c.removeChild(b)}()}(),a.ui.position});
!function(a){"use strict";function b(a,b,c,d){a.beginPath(),a.arc(b,c,d,0,s,!1),a.fill()}function c(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function d(a,c,d,e,f,g,h,i){var j=Math.cos(c*s),k=Math.sin(c*s);i-=h,b(a,d-k*f,e+j*g+.5*i,h+(1-.5*j)*i)}function e(a,b,c,e,f,g,h,i){var j;for(j=5;j--;)d(a,b+j/5,c,e,f,g,h,i)}function f(a,b,c,d,f,g,h){b/=3e4;var i=.21*f,j=.12*f,k=.24*f,l=.28*f;a.fillStyle=h,e(a,b,c,d,i,j,k,l),a.globalCompositeOperation="destination-out",e(a,b,c,d,i,j,k-g,l-g),a.globalCompositeOperation="source-over"}function g(a,b,d,e,f,g,h){b/=12e4;var i,j,k,l,m=.25*f-.5*g,n=.32*f+.5*g,o=.5*f-.5*g;for(a.strokeStyle=h,a.lineWidth=g,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.arc(d,e,m,0,s,!1),a.stroke(),i=8;i--;)j=(b+i/8)*s,k=Math.cos(j),l=Math.sin(j),c(a,d+k*n,e+l*n,d+k*o,e+l*o)}function h(a,b,c,d,e,f,g){b/=15e3;var h=.29*e-.5*f,i=.05*e,j=Math.cos(b*s),k=j*s/-16;a.strokeStyle=g,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",c+=j*i,a.beginPath(),a.arc(c,d,h,k+s/8,k+7*s/8,!1),a.arc(c+Math.cos(k)*h*t,d+Math.sin(k)*h*t,h,k+5*s/8,k+3*s/8,!0),a.closePath(),a.stroke()}function i(a,b,c,d,e,f,g){b/=1350;var h,i,j,k,l=.16*e,m=11*s/12,n=7*s/12;for(a.fillStyle=g,h=4;h--;)i=(b+h/4)%1,j=c+(h-1.5)/1.5*(1===h||2===h?-1:1)*l,k=d+i*i*e,a.beginPath(),a.moveTo(j,k-1.5*f),a.arc(j,k,.75*f,m,n,!1),a.fill()}function j(a,b,d,e,f,g,h){b/=750;var i,j,k,l,m=.1875*f;for(a.strokeStyle=h,a.lineWidth=.5*g,a.lineCap="round",a.lineJoin="round",i=4;i--;)j=(b+i/4)%1,k=Math.floor(d+(i-1.5)/1.5*(1===i||2===i?-1:1)*m)+.5,l=e+j*f,c(a,k,l-1.5*g,k,l+1.5*g)}function k(a,b,d,e,f,g,h){b/=3e3;var i,j,k,l,m=.16*f,n=.75*g,o=b*s*.7,p=Math.cos(o)*n,q=Math.sin(o)*n,r=o+s/3,t=Math.cos(r)*n,u=Math.sin(r)*n,v=o+2*s/3,w=Math.cos(v)*n,x=Math.sin(v)*n;for(a.strokeStyle=h,a.lineWidth=.5*g,a.lineCap="round",a.lineJoin="round",i=4;i--;)j=(b+i/4)%1,k=d+Math.sin((j+i/4)*s)*m,l=e+j*f,c(a,k-p,l-q,k+p,l+q),c(a,k-t,l-u,k+t,l+u),c(a,k-w,l-x,k+w,l+x)}function l(a,b,c,d,f,g,h){b/=3e4;var i=.21*f,j=.06*f,k=.21*f,l=.28*f;a.fillStyle=h,e(a,b,c,d,i,j,k,l),a.globalCompositeOperation="destination-out",e(a,b,c,d,i,j,k-g,l-g),a.globalCompositeOperation="source-over"}function m(a,b,c,d,e,f,g){var h=e/8,i=h/3,j=2*i,k=b%1*s,l=Math.cos(k),m=Math.sin(k);a.fillStyle=g,a.strokeStyle=g,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.arc(c,d,h,k,k+Math.PI,!1),a.arc(c-i*l,d-i*m,j,k+Math.PI,k,!1),a.arc(c+j*l,d+j*m,i,k+Math.PI,k,!0),a.globalCompositeOperation="destination-out",a.fill(),a.globalCompositeOperation="source-over",a.stroke()}function n(a,b,c,d,e,f,g,h,i){b/=2500;var j,k,l,n,o=u[g],p=(b+g-v[g].start)%h,q=(b+g-v[g].end)%h,r=(b+g)%h;if(a.strokeStyle=i,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",1>p){if(a.beginPath(),p*=o.length/2-1,j=Math.floor(p),p-=j,j*=2,j+=2,a.moveTo(c+(o[j-2]*(1-p)+o[j]*p)*e,d+(o[j-1]*(1-p)+o[j+1]*p)*e),1>q){for(q*=o.length/2-1,k=Math.floor(q),q-=k,k*=2,k+=2,n=j;n!==k;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.lineTo(c+(o[k-2]*(1-q)+o[k]*q)*e,d+(o[k-1]*(1-q)+o[k+1]*q)*e)}else for(n=j;n!==o.length;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.stroke()}else if(1>q){for(a.beginPath(),q*=o.length/2-1,k=Math.floor(q),q-=k,k*=2,k+=2,a.moveTo(c+o[0]*e,d+o[1]*e),n=2;n!==k;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.lineTo(c+(o[k-2]*(1-q)+o[k]*q)*e,d+(o[k-1]*(1-q)+o[k+1]*q)*e),a.stroke()}1>r&&(r*=o.length/2-1,l=Math.floor(r),r-=l,l*=2,l+=2,m(a,b,c+(o[l-2]*(1-r)+o[l]*r)*e,d+(o[l-1]*(1-r)+o[l+1]*r)*e,e,f,i))}var o,p;!function(){var b=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame;b&&c?(o=function(a,c){function d(){e.value=b(d),a()}var e={value:null};return d(),e},p=function(a){c(a.value)}):(o=setInterval,p=clearInterval)}();var q=500,r=.08,s=2*Math.PI,t=2/Math.sqrt(2),u=[[-.75,-.18,-.7219,-.1527,-.6971,-.1225,-.6739,-.091,-.6516,-.0588,-.6298,-.0262,-.6083,.0065,-.5868,.0396,-.5643,.0731,-.5372,.1041,-.5033,.1259,-.4662,.1406,-.4275,.1493,-.3881,.153,-.3487,.1526,-.3095,.1488,-.2708,.1421,-.2319,.1342,-.1943,.1217,-.16,.1025,-.129,.0785,-.1012,.0509,-.0764,.0206,-.0547,-.012,-.0378,-.0472,-.0324,-.0857,-.0389,-.1241,-.0546,-.1599,-.0814,-.1876,-.1193,-.1964,-.1582,-.1935,-.1931,-.1769,-.2157,-.1453,-.229,-.1085,-.2327,-.0697,-.224,-.0317,-.2064,.0033,-.1853,.0362,-.1613,.0672,-.135,.0961,-.1051,.1213,-.0706,.1397,-.0332,.1512,.0053,.158,.0442,.1624,.0833,.1636,.1224,.1615,.1613,.1565,.1999,.15,.2378,.1402,.2749,.1279,.3118,.1147,.3487,.1015,.3858,.0892,.4236,.0787,.4621,.0715,.5012,.0702,.5398,.0766,.5768,.089,.6123,.1055,.6466,.1244,.6805,.144,.7147,.163,.75,.18],[-.75,0,-.7033,.0195,-.6569,.0399,-.6104,.06,-.5634,.0789,-.5155,.0954,-.4667,.1089,-.4174,.1206,-.3676,.1299,-.3174,.1365,-.2669,.1398,-.2162,.1391,-.1658,.1347,-.1157,.1271,-.0661,.1169,-.017,.1046,.0316,.0903,.0791,.0728,.1259,.0534,.1723,.0331,.2188,.0129,.2656,-.0064,.3122,-.0263,.3586,-.0466,.4052,-.0665,.4525,-.0847,.5007,-.1002,.5497,-.113,.5991,-.124,.6491,-.1325,.6994,-.138,.75,-.14]],v=[{start:.36,end:.11},{start:.56,end:.16}],w=function(a){this.list=[],this.interval=null,this.color=a&&a.color?a.color:"black",this.resizeClear=!(!a||!a.resizeClear)};w.CLEAR_DAY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);g(a,b,.5*d,.5*e,f,f*r,c)},w.CLEAR_NIGHT=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);h(a,b,.5*d,.5*e,f,f*r,c)},w.PARTLY_CLOUDY_DAY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,h=Math.min(d,e);g(a,b,.625*d,.375*e,.75*h,h*r,c),f(a,b,.375*d,.625*e,.75*h,h*r,c)},w.PARTLY_CLOUDY_NIGHT=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);h(a,b,.667*d,.375*e,.75*g,g*r,c),f(a,b,.375*d,.625*e,.75*g,g*r,c)},w.CLOUDY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);f(a,b,.5*d,.5*e,g,g*r,c)},w.RAIN=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);i(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.SLEET=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);j(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.SNOW=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);k(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.WIND=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);n(a,b,.5*d,.5*e,f,f*r,0,2,c),n(a,b,.5*d,.5*e,f,f*r,1,2,c)},w.FOG=function(a,b,d){var e=a.canvas.width,f=a.canvas.height,g=Math.min(e,f),h=g*r;l(a,b,.5*e,.32*f,.75*g,h,d),b/=5e3;var i=Math.cos(b*s)*g*.02,j=Math.cos((b+.25)*s)*g*.02,k=Math.cos((b+.5)*s)*g*.02,m=Math.cos((b+.75)*s)*g*.02,n=.936*f,o=Math.floor(n-.5*h)+.5,p=Math.floor(n-2.5*h)+.5;a.strokeStyle=d,a.lineWidth=h,a.lineCap="round",a.lineJoin="round",c(a,i+.2*e+.5*h,o,j+.8*e-.5*h,o),c(a,k+.2*e+.5*h,p,m+.8*e-.5*h,p)},w.prototype={add:function(a,b){var c;"string"==typeof a&&(a=document.getElementById(a)),null!==a&&("string"==typeof b&&(b=b.toUpperCase().replace(/-/g,"_"),b=w.hasOwnProperty(b)?w[b]:null),"function"==typeof b&&(c={element:a,context:a.getContext("2d"),drawing:b},this.list.push(c),this.draw(c,q)))},set:function(a,b){var c;for("string"==typeof a&&(a=document.getElementById(a)),c=this.list.length;c--;)if(this.list[c].element===a)return this.list[c].drawing=b,void this.draw(this.list[c],q);this.add(a,b)},remove:function(a){var b;for("string"==typeof a&&(a=document.getElementById(a)),b=this.list.length;b--;)if(this.list[b].element===a)return void this.list.splice(b,1)},draw:function(a,b){var c=a.context.canvas;this.resizeClear?c.width=c.width:a.context.clearRect(0,0,c.width,c.height),a.drawing(a.context,b,this.color)},play:function(){var a=this;this.pause(),this.interval=o(function(){var b,c=Date.now();for(b=a.list.length;b--;)a.draw(a.list[b],c)},1e3/60)},pause:function(){this.interval&&(p(this.interval),this.interval=null)}},a.Skycons=w}(this),$(function(){"use strict";var a,b=new Skycons,c=["clear-day","clear-night","partly-cloudy-day","partly-cloudy-night","cloudy","rain","sleet","snow","wind","fog"];for(a=c.length;a--;)b.set(c[a],c[a]);b.add(document.getElementById("icon-cloud"),Skycons.PARTLY_CLOUDY_DAY);var d=new Skycons({color:"white"});d.add(document.getElementById("icon-clear-2"),Skycons.PARTLY_CLOUDY_NIGHT),b.play()});
! function(a, b, c) {
    ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define("datatables", ["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : jQuery && !jQuery.fn.dataTable && a(jQuery)
    }(function(d) {
        "use strict";

        function e(a) {
            var b, c, f = "a aa ai ao as b fn i m o s ",
                g = {};
            d.each(a, function(d, h) {
                b = d.match(/^([^A-Z]+?)([A-Z])/), b && -1 !== f.indexOf(b[1] + " ") && (c = d.replace(b[0], b[2].toLowerCase()), g[c] = d, "o" === b[1] && e(a[d]))
            }), a._hungarianMap = g
        }

        function f(a, b, g) {
            a._hungarianMap || e(a);
            var h;
            d.each(b, function(e, i) {
                h = a._hungarianMap[e], h === c || !g && b[h] !== c || ("o" === h.charAt(0) ? (b[h] || (b[h] = {}), d.extend(!0, b[h], b[e]), f(a[h], b[h], g)) : b[h] = b[e])
            })
        }

        function g(a) {
            var b = Wa.defaults.oLanguage,
                c = a.sZeroRecords;
            !a.sEmptyTable && c && "No data available in table" === b.sEmptyTable && La(a, a, "sZeroRecords", "sEmptyTable"), !a.sLoadingRecords && c && "Loading..." === b.sLoadingRecords && La(a, a, "sZeroRecords", "sLoadingRecords"), a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            var d = a.sDecimal;
            d && Ua(d)
        }

        function h(a) {
            rb(a, "ordering", "bSort"), rb(a, "orderMulti", "bSortMulti"), rb(a, "orderClasses", "bSortClasses"), rb(a, "orderCellsTop", "bSortCellsTop"), rb(a, "order", "aaSorting"), rb(a, "orderFixed", "aaSortingFixed"), rb(a, "paging", "bPaginate"), rb(a, "pagingType", "sPaginationType"), rb(a, "pageLength", "iDisplayLength"), rb(a, "searching", "bFilter");
            var b = a.aoSearchCols;
            if (b)
                for (var c = 0, d = b.length; d > c; c++) b[c] && f(Wa.models.oSearch, b[c])
        }

        function i(a) {
            rb(a, "orderable", "bSortable"), rb(a, "orderData", "aDataSort"), rb(a, "orderSequence", "asSorting"), rb(a, "orderDataType", "sortDataType")
        }

        function j(a) {
            var b = a.oBrowser,
                c = d("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(d("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(d('<div class="test"/>').css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                e = c.find(".test");
            b.bScrollOversize = 100 === e[0].offsetWidth, b.bScrollbarLeft = 1 !== e.offset().left, c.remove()
        }

        function k(a, b, d, e, f, g) {
            var h, i = e,
                j = !1;
            for (d !== c && (h = d, j = !0); i !== f;) a.hasOwnProperty(i) && (h = j ? b(h, a[i], i, a) : a[i], j = !0, i += g);
            return h
        }

        function l(a, c) {
            var e = Wa.defaults.column,
                f = a.aoColumns.length,
                g = d.extend({}, Wa.models.oColumn, e, {
                    nTh: c ? c : b.createElement("th"),
                    sTitle: e.sTitle ? e.sTitle : c ? c.innerHTML : "",
                    aDataSort: e.aDataSort ? e.aDataSort : [f],
                    mData: e.mData ? e.mData : f,
                    idx: f
                });
            a.aoColumns.push(g);
            var h = a.aoPreSearchCols;
            h[f] = d.extend({}, Wa.models.oSearch, h[f]), m(a, f, null)
        }

        function m(a, b, e) {
            var g = a.aoColumns[b],
                h = a.oClasses,
                j = d(g.nTh);
            if (!g.sWidthOrig) {
                g.sWidthOrig = j.attr("width") || null;
                var k = (j.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                k && (g.sWidthOrig = k[1])
            }
            e !== c && null !== e && (i(e), f(Wa.defaults.column, e), e.mDataProp === c || e.mData || (e.mData = e.mDataProp), e.sType && (g._sManualType = e.sType), e.className && !e.sClass && (e.sClass = e.className), d.extend(g, e), La(g, e, "sWidth", "sWidthOrig"), "number" == typeof e.iDataSort && (g.aDataSort = [e.iDataSort]), La(g, e, "aDataSort"));
            var l = g.mData,
                m = B(l),
                n = g.mRender ? B(g.mRender) : null,
                o = function(a) {
                    return "string" == typeof a && -1 !== a.indexOf("@")
                };
            g._bAttrSrc = d.isPlainObject(l) && (o(l.sort) || o(l.type) || o(l.filter)), g.fnGetData = function(a, b, d) {
                var e = m(a, b, c, d);
                return n && b ? n(e, b, a, d) : e
            }, g.fnSetData = function(a, b, c) {
                return C(l)(a, b, c)
            }, a.oFeatures.bSort || (g.bSortable = !1, j.addClass(h.sSortableNone));
            var p = -1 !== d.inArray("asc", g.asSorting),
                q = -1 !== d.inArray("desc", g.asSorting);
            g.bSortable && (p || q) ? p && !q ? (g.sSortingClass = h.sSortableAsc, g.sSortingClassJUI = h.sSortJUIAscAllowed) : !p && q ? (g.sSortingClass = h.sSortableDesc, g.sSortingClassJUI = h.sSortJUIDescAllowed) : (g.sSortingClass = h.sSortable, g.sSortingClassJUI = h.sSortJUI) : (g.sSortingClass = h.sSortableNone, g.sSortingClassJUI = "")
        }

        function n(a) {
            if (a.oFeatures.bAutoWidth !== !1) {
                var b = a.aoColumns;
                sa(a);
                for (var c = 0, d = b.length; d > c; c++) b[c].nTh.style.width = b[c].sWidth
            }
            var e = a.oScroll;
            ("" !== e.sY || "" !== e.sX) && qa(a), Pa(a, null, "column-sizing", [a])
        }

        function o(a, b) {
            var c = r(a, "bVisible");
            return "number" == typeof c[b] ? c[b] : null
        }

        function p(a, b) {
            var c = r(a, "bVisible"),
                e = d.inArray(b, c);
            return -1 !== e ? e : null
        }

        function q(a) {
            return r(a, "bVisible").length
        }

        function r(a, b) {
            var c = [];
            return d.map(a.aoColumns, function(a, d) {
                a[b] && c.push(d)
            }), c
        }

        function s(a) {
            var b, d, e, f, g, h, i, j, k, l = a.aoColumns,
                m = a.aoData,
                n = Wa.ext.type.detect;
            for (b = 0, d = l.length; d > b; b++)
                if (i = l[b], k = [], !i.sType && i._sManualType) i.sType = i._sManualType;
                else if (!i.sType) {
                    for (e = 0, f = n.length; f > e; e++) {
                        for (g = 0, h = m.length; h > g && (k[g] === c && (k[g] = y(a, g, b, "type")), j = n[e](k[g], a), j && "html" !== j); g++);
                        if (j) {
                            i.sType = j;
                            break
                        }
                    }
                    i.sType || (i.sType = "string")
                }
        }

        function t(a, b, e, f) {
            var g, h, i, j, k, m, n, o = a.aoColumns;
            if (b)
                for (g = b.length - 1; g >= 0; g--) {
                    n = b[g];
                    var p = n.targets !== c ? n.targets : n.aTargets;
                    for (d.isArray(p) || (p = [p]), i = 0, j = p.length; j > i; i++)
                        if ("number" == typeof p[i] && p[i] >= 0) {
                            for (; o.length <= p[i];) l(a);
                            f(p[i], n)
                        } else if ("number" == typeof p[i] && p[i] < 0) f(o.length + p[i], n);
                        else if ("string" == typeof p[i])
                            for (k = 0, m = o.length; m > k; k++)("_all" == p[i] || d(o[k].nTh).hasClass(p[i])) && f(k, n)
                }
            if (e)
                for (g = 0, h = e.length; h > g; g++) f(g, e[g])
        }

        function u(a, b, c, e) {
            var f = a.aoData.length,
                g = d.extend(!0, {}, Wa.models.oRow, {
                    src: c ? "dom" : "data"
                });
            g._aData = b, a.aoData.push(g);
            for (var h = a.aoColumns, i = 0, j = h.length; j > i; i++) c && z(a, f, i, y(a, f, i)), h[i].sType = null;
            return a.aiDisplayMaster.push(f), (c || !a.oFeatures.bDeferRender) && I(a, f, c, e), f
        }

        function v(a, b) {
            var c;
            return b instanceof d || (b = d(b)), b.map(function(b, d) {
                return c = H(a, d), u(a, c.data, d, c.cells)
            })
        }

        function w(a, b) {
            return b._DT_RowIndex !== c ? b._DT_RowIndex : null
        }

        function x(a, b, c) {
            return d.inArray(c, a.aoData[b].anCells)
        }

        function y(a, b, d, e) {
            var f = a.iDraw,
                g = a.aoColumns[d],
                h = a.aoData[b]._aData,
                i = g.sDefaultContent,
                j = g.fnGetData(h, e, {
                    settings: a,
                    row: b,
                    col: d
                });
            if (j === c) return a.iDrawError != f && null === i && (Ka(a, 0, "Requested unknown parameter " + ("function" == typeof g.mData ? "{function}" : "'" + g.mData + "'") + " for row " + b, 4), a.iDrawError = f), i;
            if (j !== h && null !== j || null === i) {
                if ("function" == typeof j) return j.call(h)
            } else j = i;
            return null === j && "display" == e ? "" : j
        }

        function z(a, b, c, d) {
            var e = a.aoColumns[c],
                f = a.aoData[b]._aData;
            e.fnSetData(f, d, {
                settings: a,
                row: b,
                col: c
            })
        }

        function A(a) {
            return d.map(a.match(/(\\.|[^\.])+/g), function(a) {
                return a.replace(/\\./g, ".")
            })
        }

        function B(a) {
            if (d.isPlainObject(a)) {
                var b = {};
                return d.each(a, function(a, c) {
                    c && (b[a] = B(c))
                }),
                    function(a, d, e, f) {
                        var g = b[d] || b._;
                        return g !== c ? g(a, d, e, f) : a
                    }
            }
            if (null === a) return function(a) {
                return a
            };
            if ("function" == typeof a) return function(b, c, d, e) {
                return a(b, c, d, e)
            };
            if ("string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b, c) {
                return b[a]
            };
            var e = function(a, b, d) {
                var f, g, h, i;
                if ("" !== d)
                    for (var j = A(d), k = 0, l = j.length; l > k; k++) {
                        if (f = j[k].match(sb), g = j[k].match(tb), f) {
                            j[k] = j[k].replace(sb, ""), "" !== j[k] && (a = a[j[k]]), h = [], j.splice(0, k + 1), i = j.join(".");
                            for (var m = 0, n = a.length; n > m; m++) h.push(e(a[m], b, i));
                            var o = f[0].substring(1, f[0].length - 1);
                            a = "" === o ? h : h.join(o);
                            break
                        }
                        if (g) j[k] = j[k].replace(tb, ""), a = a[j[k]]();
                        else {
                            if (null === a || a[j[k]] === c) return c;
                            a = a[j[k]]
                        }
                    }
                return a
            };
            return function(b, c) {
                return e(b, c, a)
            }
        }

        function C(a) {
            if (d.isPlainObject(a)) return C(a._);
            if (null === a) return function() {};
            if ("function" == typeof a) return function(b, c, d) {
                a(b, "set", c, d)
            };
            if ("string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b, c) {
                b[a] = c
            };
            var b = function(a, d, e) {
                for (var f, g, h, i, j, k = A(e), l = k[k.length - 1], m = 0, n = k.length - 1; n > m; m++) {
                    if (g = k[m].match(sb), h = k[m].match(tb), g) {
                        k[m] = k[m].replace(sb, ""), a[k[m]] = [], f = k.slice(), f.splice(0, m + 1), j = f.join(".");
                        for (var o = 0, p = d.length; p > o; o++) i = {}, b(i, d[o], j), a[k[m]].push(i);
                        return
                    }
                    h && (k[m] = k[m].replace(tb, ""), a = a[k[m]](d)), (null === a[k[m]] || a[k[m]] === c) && (a[k[m]] = {}), a = a[k[m]]
                }
                l.match(tb) ? a = a[l.replace(tb, "")](d) : a[l.replace(sb, "")] = d
            };
            return function(c, d) {
                return b(c, d, a)
            }
        }

        function D(a) {
            return mb(a.aoData, "_aData")
        }

        function E(a) {
            a.aoData.length = 0, a.aiDisplayMaster.length = 0, a.aiDisplay.length = 0
        }

        function F(a, b, d) {
            for (var e = -1, f = 0, g = a.length; g > f; f++) a[f] == b ? e = f : a[f] > b && a[f]--; - 1 != e && d === c && a.splice(e, 1)
        }

        function G(a, b, d, e) {
            var f, g, h = a.aoData[b];
            if ("dom" !== d && (d && "auto" !== d || "dom" !== h.src)) {
                var i, j = h.anCells;
                if (j)
                    for (f = 0, g = j.length; g > f; f++) {
                        for (i = j[f]; i.childNodes.length;) i.removeChild(i.firstChild);
                        j[f].innerHTML = y(a, b, f, "display")
                    }
            } else h._aData = H(a, h).data;
            h._aSortData = null, h._aFilterData = null;
            var k = a.aoColumns;
            if (e !== c) k[e].sType = null;
            else
                for (f = 0, g = k.length; g > f; f++) k[f].sType = null;
            J(h)
        }

        function H(a, b) {
            var c, e, f, g, h = [],
                i = [],
                j = b.firstChild,
                k = 0,
                l = a.aoColumns,
                m = function(a, b, c) {
                    if ("string" == typeof a) {
                        var d = a.indexOf("@");
                        if (-1 !== d) {
                            var e = a.substring(d + 1);
                            f["@" + e] = c.getAttribute(e)
                        }
                    }
                },
                n = function(a) {
                    e = l[k], g = d.trim(a.innerHTML), e && e._bAttrSrc ? (f = {
                        display: g
                    }, m(e.mData.sort, f, a), m(e.mData.type, f, a), m(e.mData.filter, f, a), h.push(f)) : h.push(g), k++
                };
            if (j)
                for (; j;) c = j.nodeName.toUpperCase(), ("TD" == c || "TH" == c) && (n(j), i.push(j)), j = j.nextSibling;
            else {
                i = b.anCells;
                for (var o = 0, p = i.length; p > o; o++) n(i[o])
            }
            return {
                data: h,
                cells: i
            }
        }

        function I(a, c, d, e) {
            var f, g, h, i, j, k = a.aoData[c],
                l = k._aData,
                m = [];
            if (null === k.nTr) {
                for (f = d || b.createElement("tr"), k.nTr = f, k.anCells = m, f._DT_RowIndex = c, J(k), i = 0, j = a.aoColumns.length; j > i; i++) h = a.aoColumns[i], g = d ? e[i] : b.createElement(h.sCellType), m.push(g), (!d || h.mRender || h.mData !== i) && (g.innerHTML = y(a, c, i, "display")), h.sClass && (g.className += " " + h.sClass), h.bVisible && !d ? f.appendChild(g) : !h.bVisible && d && g.parentNode.removeChild(g), h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, g, y(a, c, i), l, c, i);
                Pa(a, "aoRowCreatedCallback", null, [f, l, c])
            }
            k.nTr.setAttribute("role", "row")
        }

        function J(a) {
            var b = a.nTr,
                c = a._aData;
            if (b) {
                if (c.DT_RowId && (b.id = c.DT_RowId), c.DT_RowClass) {
                    var e = c.DT_RowClass.split(" ");
                    a.__rowc = a.__rowc ? qb(a.__rowc.concat(e)) : e, d(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)
                }
                c.DT_RowData && d(b).data(c.DT_RowData)
            }
        }

        function K(a) {
            var b, c, e, f, g, h = a.nTHead,
                i = a.nTFoot,
                j = 0 === d("th, td", h).length,
                k = a.oClasses,
                l = a.aoColumns;
            for (j && (f = d("<tr/>").appendTo(h)), b = 0, c = l.length; c > b; b++) g = l[b], e = d(g.nTh).addClass(g.sClass), j && e.appendTo(f), a.oFeatures.bSort && (e.addClass(g.sSortingClass), g.bSortable !== !1 && (e.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ea(a, g.nTh, b))), g.sTitle != e.html() && e.html(g.sTitle), Ra(a, "header")(a, e, g, k);
            if (j && P(a.aoHeader, h), d(h).find(">tr").attr("role", "row"), d(h).find(">tr>th, >tr>td").addClass(k.sHeaderTH), d(i).find(">tr>th, >tr>td").addClass(k.sFooterTH), null !== i) {
                var m = a.aoFooter[0];
                for (b = 0, c = m.length; c > b; b++) g = l[b], g.nTf = m[b].cell, g.sClass && d(g.nTf).addClass(g.sClass)
            }
        }

        function L(a, b, e) {
            var f, g, h, i, j, k, l, m, n, o = [],
                p = [],
                q = a.aoColumns.length;
            if (b) {
                for (e === c && (e = !1), f = 0, g = b.length; g > f; f++) {
                    for (o[f] = b[f].slice(), o[f].nTr = b[f].nTr, h = q - 1; h >= 0; h--) a.aoColumns[h].bVisible || e || o[f].splice(h, 1);
                    p.push([])
                }
                for (f = 0, g = o.length; g > f; f++) {
                    if (l = o[f].nTr)
                        for (; k = l.firstChild;) l.removeChild(k);
                    for (h = 0, i = o[f].length; i > h; h++)
                        if (m = 1, n = 1, p[f][h] === c) {
                            for (l.appendChild(o[f][h].cell), p[f][h] = 1; o[f + m] !== c && o[f][h].cell == o[f + m][h].cell;) p[f + m][h] = 1, m++;
                            for (; o[f][h + n] !== c && o[f][h].cell == o[f][h + n].cell;) {
                                for (j = 0; m > j; j++) p[f + j][h + n] = 1;
                                n++
                            }
                            d(o[f][h].cell).attr("rowspan", m).attr("colspan", n)
                        }
                }
            }
        }

        function M(a) {
            var b = Pa(a, "aoPreDrawCallback", "preDraw", [a]);
            if (-1 !== d.inArray(!1, b)) return void oa(a, !1);
            var e = [],
                f = 0,
                g = a.asStripeClasses,
                h = g.length,
                i = (a.aoOpenRows.length, a.oLanguage),
                j = a.iInitDisplayStart,
                k = "ssp" == Sa(a),
                l = a.aiDisplay;
            a.bDrawing = !0, j !== c && -1 !== j && (a._iDisplayStart = k ? j : j >= a.fnRecordsDisplay() ? 0 : j, a.iInitDisplayStart = -1);
            var m = a._iDisplayStart,
                n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, oa(a, !1);
            else if (k) {
                if (!a.bDestroying && !S(a)) return
            } else a.iDraw++;
            if (0 !== l.length)
                for (var o = k ? 0 : m, p = k ? a.aoData.length : n, r = o; p > r; r++) {
                    var s = l[r],
                        t = a.aoData[s];
                    null === t.nTr && I(a, s);
                    var u = t.nTr;
                    if (0 !== h) {
                        var v = g[f % h];
                        t._sRowStripe != v && (d(u).removeClass(t._sRowStripe).addClass(v), t._sRowStripe = v)
                    }
                    Pa(a, "aoRowCallback", null, [u, t._aData, f, r]), e.push(u), f++
                } else {
                var w = i.sZeroRecords;
                1 == a.iDraw && "ajax" == Sa(a) ? w = i.sLoadingRecords : i.sEmptyTable && 0 === a.fnRecordsTotal() && (w = i.sEmptyTable), e[0] = d("<tr/>", {
                    "class": h ? g[0] : ""
                }).append(d("<td />", {
                    valign: "top",
                    colSpan: q(a),
                    "class": a.oClasses.sRowEmpty
                }).html(w))[0]
            }
            Pa(a, "aoHeaderCallback", "header", [d(a.nTHead).children("tr")[0], D(a), m, n, l]), Pa(a, "aoFooterCallback", "footer", [d(a.nTFoot).children("tr")[0], D(a), m, n, l]);
            var x = d(a.nTBody);
            x.children().detach(), x.append(d(e)), Pa(a, "aoDrawCallback", "draw", [a]), a.bSorted = !1, a.bFiltered = !1, a.bDrawing = !1
        }

        function N(a, b) {
            var c = a.oFeatures,
                d = c.bSort,
                e = c.bFilter;
            d && Ba(a), e ? X(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(), b !== !0 && (a._iDisplayStart = 0), a._drawHold = b, M(a), a._drawHold = !1
        }

        function O(a) {
            var b = a.oClasses,
                c = d(a.nTable),
                e = d("<div/>").insertBefore(c),
                f = a.oFeatures,
                g = d("<div/>", {
                    id: a.sTableId + "_wrapper",
                    "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
                });
            a.nHolding = e[0], a.nTableWrapper = g[0], a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var h, i, j, k, l, m, n = a.sDom.split(""), o = 0; o < n.length; o++) {
                if (h = null, i = n[o], "<" == i) {
                    if (j = d("<div/>")[0], k = n[o + 1], "'" == k || '"' == k) {
                        for (l = "", m = 2; n[o + m] != k;) l += n[o + m], m++;
                        if ("H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter), -1 != l.indexOf(".")) {
                            var p = l.split(".");
                            j.id = p[0].substr(1, p[0].length - 1), j.className = p[1]
                        } else "#" == l.charAt(0) ? j.id = l.substr(1, l.length - 1) : j.className = l;
                        o += m
                    }
                    g.append(j), g = d(j)
                } else if (">" == i) g = g.parent();
                else if ("l" == i && f.bPaginate && f.bLengthChange) h = ka(a);
                else if ("f" == i && f.bFilter) h = W(a);
                else if ("r" == i && f.bProcessing) h = na(a);
                else if ("t" == i) h = pa(a);
                else if ("i" == i && f.bInfo) h = ea(a);
                else if ("p" == i && f.bPaginate) h = la(a);
                else if (0 !== Wa.ext.feature.length)
                    for (var q = Wa.ext.feature, r = 0, s = q.length; s > r; r++)
                        if (i == q[r].cFeature) {
                            h = q[r].fnInit(a);
                            break
                        }
                if (h) {
                    var t = a.aanFeatures;
                    t[i] || (t[i] = []), t[i].push(h), g.append(h)
                }
            }
            e.replaceWith(g)
        }

        function P(a, b) {
            var c, e, f, g, h, i, j, k, l, m, n, o = d(b).children("tr"),
                p = function(a, b, c) {
                    for (var d = a[b]; d[c];) c++;
                    return c
                };
            for (a.splice(0, a.length), f = 0, i = o.length; i > f; f++) a.push([]);
            for (f = 0, i = o.length; i > f; f++)
                for (c = o[f], k = 0, e = c.firstChild; e;) {
                    if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase())
                        for (l = 1 * e.getAttribute("colspan"), m = 1 * e.getAttribute("rowspan"), l = l && 0 !== l && 1 !== l ? l : 1, m = m && 0 !== m && 1 !== m ? m : 1, j = p(a, f, k), n = 1 === l ? !0 : !1, h = 0; l > h; h++)
                            for (g = 0; m > g; g++) a[f + g][j + h] = {
                                cell: e,
                                unique: n
                            }, a[f + g].nTr = c;
                    e = e.nextSibling
                }
        }

        function Q(a, b, c) {
            var d = [];
            c || (c = a.aoHeader, b && (c = [], P(c, b)));
            for (var e = 0, f = c.length; f > e; e++)
                for (var g = 0, h = c[e].length; h > g; g++) !c[e][g].unique || d[g] && a.bSortCellsTop || (d[g] = c[e][g].cell);
            return d
        }

        function R(a, b, c) {
            if (Pa(a, "aoServerParams", "serverParams", [b]), b && d.isArray(b)) {
                var e = {},
                    f = /(.*?)\[\]$/;
                d.each(b, function(a, b) {
                    var c = b.name.match(f);
                    if (c) {
                        var d = c[0];
                        e[d] || (e[d] = []), e[d].push(b.value)
                    } else e[b.name] = b.value
                }), b = e
            }
            var g, h = a.ajax,
                i = a.oInstance;
            if (d.isPlainObject(h) && h.data) {
                g = h.data;
                var j = d.isFunction(g) ? g(b) : g;
                b = d.isFunction(g) && j ? j : d.extend(!0, b, j), delete h.data
            }
            var k = {
                data: b,
                success: function(b) {
                    var d = b.error || b.sError;
                    d && a.oApi._fnLog(a, 0, d), a.json = b, Pa(a, null, "xhr", [a, b]), c(b)
                },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function(b, c, d) {
                    var e = a.oApi._fnLog;
                    "parsererror" == c ? e(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && e(a, 0, "Ajax error", 7), oa(a, !1)
                }
            };
            a.oAjaxData = b, Pa(a, null, "preXhr", [a, b]), a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource, d.map(b, function(a, b) {
                return {
                    name: b,
                    value: a
                }
            }), c, a) : a.sAjaxSource || "string" == typeof h ? a.jqXHR = d.ajax(d.extend(k, {
                url: h || a.sAjaxSource
            })) : d.isFunction(h) ? a.jqXHR = h.call(i, b, c, a) : (a.jqXHR = d.ajax(d.extend(k, h)), h.data = g)
        }

        function S(a) {
            return a.bAjaxDataGet ? (a.iDraw++, oa(a, !0), R(a, T(a), function(b) {
                U(a, b)
            }), !1) : !0
        }

        function T(a) {
            var b, c, e, f, g = a.aoColumns,
                h = g.length,
                i = a.oFeatures,
                j = a.oPreviousSearch,
                k = a.aoPreSearchCols,
                l = [],
                m = Aa(a),
                n = a._iDisplayStart,
                o = i.bPaginate !== !1 ? a._iDisplayLength : -1,
                p = function(a, b) {
                    l.push({
                        name: a,
                        value: b
                    })
                };
            p("sEcho", a.iDraw), p("iColumns", h), p("sColumns", mb(g, "sName").join(",")), p("iDisplayStart", n), p("iDisplayLength", o);
            var q = {
                draw: a.iDraw,
                columns: [],
                order: [],
                start: n,
                length: o,
                search: {
                    value: j.sSearch,
                    regex: j.bRegex
                }
            };
            for (b = 0; h > b; b++) e = g[b], f = k[b], c = "function" == typeof e.mData ? "function" : e.mData, q.columns.push({
                data: c,
                name: e.sName,
                searchable: e.bSearchable,
                orderable: e.bSortable,
                search: {
                    value: f.sSearch,
                    regex: f.bRegex
                }
            }), p("mDataProp_" + b, c), i.bFilter && (p("sSearch_" + b, f.sSearch), p("bRegex_" + b, f.bRegex), p("bSearchable_" + b, e.bSearchable)), i.bSort && p("bSortable_" + b, e.bSortable);
            i.bFilter && (p("sSearch", j.sSearch), p("bRegex", j.bRegex)), i.bSort && (d.each(m, function(a, b) {
                q.order.push({
                    column: b.col,
                    dir: b.dir
                }), p("iSortCol_" + a, b.col), p("sSortDir_" + a, b.dir)
            }), p("iSortingCols", m.length));
            var r = Wa.ext.legacy.ajax;
            return null === r ? a.sAjaxSource ? l : q : r ? l : q
        }

        function U(a, b) {
            var d = function(a, d) {
                    return b[a] !== c ? b[a] : b[d]
                },
                e = d("sEcho", "draw"),
                f = d("iTotalRecords", "recordsTotal"),
                g = d("iTotalDisplayRecords", "recordsFiltered");
            if (e) {
                if (1 * e < a.iDraw) return;
                a.iDraw = 1 * e
            }
            E(a), a._iRecordsTotal = parseInt(f, 10), a._iRecordsDisplay = parseInt(g, 10);
            for (var h = V(a, b), i = 0, j = h.length; j > i; i++) u(a, h[i]);
            a.aiDisplay = a.aiDisplayMaster.slice(), a.bAjaxDataGet = !1, M(a), a._bInitComplete || ia(a, b), a.bAjaxDataGet = !0, oa(a, !1)
        }

        function V(a, b) {
            var e = d.isPlainObject(a.ajax) && a.ajax.dataSrc !== c ? a.ajax.dataSrc : a.sAjaxDataProp;
            return "data" === e ? b.aaData || b[e] : "" !== e ? B(e)(b) : b
        }

        function W(a) {
            var c = a.oClasses,
                e = a.sTableId,
                f = a.oLanguage,
                g = a.oPreviousSearch,
                h = a.aanFeatures,
                i = '<input type="search" class="' + c.sFilterInput + '"/>',
                j = f.sSearch;
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", i) : j + i;
            var k = d("<div/>", {
                    id: h.f ? null : e + "_filter",
                    "class": c.sFilter
                }).append(d("<label/>").append(j)),
                l = function() {
                    var b = (h.f, this.value ? this.value : "");
                    b != g.sSearch && (X(a, {
                        sSearch: b,
                        bRegex: g.bRegex,
                        bSmart: g.bSmart,
                        bCaseInsensitive: g.bCaseInsensitive
                    }), a._iDisplayStart = 0, M(a))
                },
                m = d("input", k).val(g.sSearch).attr("placeholder", f.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", "ssp" === Sa(a) ? ta(l, 400) : l).bind("keypress.DT", function(a) {
                    return 13 == a.keyCode ? !1 : void 0
                }).attr("aria-controls", e);
            return d(a.nTable).on("search.dt.DT", function(c, d) {
                if (a === d) try {
                    m[0] !== b.activeElement && m.val(g.sSearch)
                } catch (e) {}
            }), k[0]
        }

        function X(a, b, d) {
            var e = a.oPreviousSearch,
                f = a.aoPreSearchCols,
                g = function(a) {
                    e.sSearch = a.sSearch, e.bRegex = a.bRegex, e.bSmart = a.bSmart, e.bCaseInsensitive = a.bCaseInsensitive
                },
                h = function(a) {
                    return a.bEscapeRegex !== c ? !a.bEscapeRegex : a.bRegex
                };
            if (s(a), "ssp" != Sa(a)) {
                $(a, b.sSearch, d, h(b), b.bSmart, b.bCaseInsensitive), g(b);
                for (var i = 0; i < f.length; i++) Z(a, f[i].sSearch, i, h(f[i]), f[i].bSmart, f[i].bCaseInsensitive);
                Y(a)
            } else g(b);
            a.bFiltered = !0, Pa(a, null, "search", [a])
        }

        function Y(a) {
            for (var b, c, d = Wa.ext.search, e = a.aiDisplay, f = 0, g = d.length; g > f; f++) {
                for (var h = [], i = 0, j = e.length; j > i; i++) c = e[i], b = a.aoData[c], d[f](a, b._aFilterData, c, b._aData, i) && h.push(c);
                e.length = 0, e.push.apply(e, h)
            }
        }

        function Z(a, b, c, d, e, f) {
            if ("" !== b)
                for (var g, h = a.aiDisplay, i = _(b, d, e, f), j = h.length - 1; j >= 0; j--) g = a.aoData[h[j]]._aFilterData[c], i.test(g) || h.splice(j, 1)
        }

        function $(a, b, c, d, e, f) {
            var g, h, i, j = _(b, d, e, f),
                k = a.oPreviousSearch.sSearch,
                l = a.aiDisplayMaster;
            if (0 !== Wa.ext.search.length && (c = !0), h = ba(a), b.length <= 0) a.aiDisplay = l.slice();
            else
                for ((h || c || k.length > b.length || 0 !== b.indexOf(k) || a.bSorted) && (a.aiDisplay = l.slice()), g = a.aiDisplay, i = g.length - 1; i >= 0; i--) j.test(a.aoData[g[i]]._sFilterRow) || g.splice(i, 1)
        }

        function _(a, b, c, e) {
            if (a = b ? a : aa(a), c) {
                var f = d.map(a.match(/"[^"]+"|[^ ]+/g) || "", function(a) {
                    return '"' === a.charAt(0) ? a.match(/^"(.*)"$/)[1] : a
                });
                a = "^(?=.*?" + f.join(")(?=.*?") + ").*$"
            }
            return new RegExp(a, e ? "i" : "")
        }

        function aa(a) {
            return a.replace(eb, "\\$1")
        }

        function ba(a) {
            var b, c, d, e, f, g, h, i, j = a.aoColumns,
                k = Wa.ext.type.search,
                l = !1;
            for (c = 0, e = a.aoData.length; e > c; c++)
                if (i = a.aoData[c], !i._aFilterData) {
                    for (g = [], d = 0, f = j.length; f > d; d++) b = j[d], b.bSearchable ? (h = y(a, c, d, "filter"), k[b.sType] && (h = k[b.sType](h)), null === h && (h = ""), "string" != typeof h && h.toString && (h = h.toString())) : h = "", h.indexOf && -1 !== h.indexOf("&") && (ub.innerHTML = h, h = vb ? ub.textContent : ub.innerText), h.replace && (h = h.replace(/[\r\n]/g, "")), g.push(h);
                    i._aFilterData = g, i._sFilterRow = g.join("  "), l = !0
                }
            return l
        }

        function ca(a) {
            return {
                search: a.sSearch,
                smart: a.bSmart,
                regex: a.bRegex,
                caseInsensitive: a.bCaseInsensitive
            }
        }

        function da(a) {
            return {
                sSearch: a.search,
                bSmart: a.smart,
                bRegex: a.regex,
                bCaseInsensitive: a.caseInsensitive
            }
        }

        function ea(a) {
            var b = a.sTableId,
                c = a.aanFeatures.i,
                e = d("<div/>", {
                    "class": a.oClasses.sInfo,
                    id: c ? null : b + "_info"
                });
            return c || (a.aoDrawCallback.push({
                fn: fa,
                sName: "information"
            }), e.attr("role", "status").attr("aria-live", "polite"), d(a.nTable).attr("aria-describedby", b + "_info")), e[0]
        }

        function fa(a) {
            var b = a.aanFeatures.i;
            if (0 !== b.length) {
                var c = a.oLanguage,
                    e = a._iDisplayStart + 1,
                    f = a.fnDisplayEnd(),
                    g = a.fnRecordsTotal(),
                    h = a.fnRecordsDisplay(),
                    i = h ? c.sInfo : c.sInfoEmpty;
                h !== g && (i += " " + c.sInfoFiltered), i += c.sInfoPostFix, i = ga(a, i);
                var j = c.fnInfoCallback;
                null !== j && (i = j.call(a.oInstance, a, e, f, g, h, i)), d(b).html(i)
            }
        }

        function ga(a, b) {
            var c = a.fnFormatNumber,
                d = a._iDisplayStart + 1,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay(),
                g = -1 === e;
            return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
        }

        function ha(a) {
            var b, c, d, e = a.iInitDisplayStart,
                f = a.aoColumns,
                g = a.oFeatures;
            if (!a.bInitialised) return void setTimeout(function() {
                ha(a)
            }, 200);
            for (O(a), K(a), L(a, a.aoHeader), L(a, a.aoFooter), oa(a, !0), g.bAutoWidth && sa(a), b = 0, c = f.length; c > b; b++) d = f[b], d.sWidth && (d.nTh.style.width = ya(d.sWidth));
            N(a);
            var h = Sa(a);
            "ssp" != h && ("ajax" == h ? R(a, [], function(c) {
                var d = V(a, c);
                for (b = 0; b < d.length; b++) u(a, d[b]);
                a.iInitDisplayStart = e, N(a), oa(a, !1), ia(a, c)
            }, a) : (oa(a, !1), ia(a)))
        }

        function ia(a, b) {
            a._bInitComplete = !0, b && n(a), Pa(a, "aoInitComplete", "init", [a, b])
        }

        function ja(a, b) {
            var c = parseInt(b, 10);
            a._iDisplayLength = c, Qa(a), Pa(a, null, "length", [a, c])
        }

        function ka(a) {
            for (var b = a.oClasses, c = a.sTableId, e = a.aLengthMenu, f = d.isArray(e[0]), g = f ? e[0] : e, h = f ? e[1] : e, i = d("<select/>", {
                name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect
            }), j = 0, k = g.length; k > j; j++) i[0][j] = new Option(h[j], g[j]);
            var l = d("<div><label/></div>").addClass(b.sLength);
            return a.aanFeatures.l || (l[0].id = c + "_length"), l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", i[0].outerHTML)), d("select", l).val(a._iDisplayLength).bind("change.DT", function(b) {
                ja(a, d(this).val()), M(a)
            }), d(a.nTable).bind("length.dt.DT", function(b, c, e) {
                a === c && d("select", l).val(e)
            }), l[0]
        }

        function la(a) {
            var b = a.sPaginationType,
                c = Wa.ext.pager[b],
                e = "function" == typeof c,
                f = function(a) {
                    M(a)
                },
                g = d("<div/>").addClass(a.oClasses.sPaging + b)[0],
                h = a.aanFeatures;
            return e || c.fnInit(a, g, f), h.p || (g.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
                fn: function(a) {
                    if (e) {
                        var b, d, g = a._iDisplayStart,
                            i = a._iDisplayLength,
                            j = a.fnRecordsDisplay(),
                            k = -1 === i,
                            l = k ? 0 : Math.ceil(g / i),
                            m = k ? 1 : Math.ceil(j / i),
                            n = c(l, m);
                        for (b = 0, d = h.p.length; d > b; b++) Ra(a, "pageButton")(a, h.p[b], b, n, l, m)
                    } else c.fnUpdate(a, f)
                },
                sName: "pagination"
            })), g
        }

        function ma(a, b, c) {
            var d = a._iDisplayStart,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay();
            0 === f || -1 === e ? d = 0 : "number" == typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = e >= 0 ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? f > d + e && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : Ka(a, 0, "Unknown paging action: " + b, 5);
            var g = a._iDisplayStart !== d;
            return a._iDisplayStart = d, g && (Pa(a, null, "page", [a]), c && M(a)), g
        }

        function na(a) {
            return d("<div/>", {
                id: a.aanFeatures.r ? null : a.sTableId + "_processing",
                "class": a.oClasses.sProcessing
            }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
        }

        function oa(a, b) {
            a.oFeatures.bProcessing && d(a.aanFeatures.r).css("display", b ? "block" : "none"), Pa(a, null, "processing", [a, b])
        }

        function pa(a) {
            var b = d(a.nTable);
            b.attr("role", "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY) return a.nTable;
            var e = c.sX,
                f = c.sY,
                g = a.oClasses,
                h = b.children("caption"),
                i = h.length ? h[0]._captionSide : null,
                j = d(b[0].cloneNode(!1)),
                k = d(b[0].cloneNode(!1)),
                l = b.children("tfoot"),
                m = "<div/>",
                n = function(a) {
                    return a ? ya(a) : null
                };
            c.sX && "100%" === b.attr("width") && b.removeAttr("width"), l.length || (l = null);
            var o = d(m, {
                "class": g.sScrollWrapper
            }).append(d(m, {
                "class": g.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: e ? n(e) : "100%"
            }).append(d(m, {
                "class": g.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(j.removeAttr("id").css("margin-left", 0).append(b.children("thead")))).append("top" === i ? h : null)).append(d(m, {
                "class": g.sScrollBody
            }).css({
                overflow: "auto",
                height: n(f),
                width: n(e)
            }).append(b));
            l && o.append(d(m, {
                "class": g.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: e ? n(e) : "100%"
            }).append(d(m, {
                "class": g.sScrollFootInner
            }).append(k.removeAttr("id").css("margin-left", 0).append(b.children("tfoot")))).append("bottom" === i ? h : null));
            var p = o.children(),
                q = p[0],
                r = p[1],
                s = l ? p[2] : null;
            return e && d(r).scroll(function(a) {
                var b = this.scrollLeft;
                q.scrollLeft = b, l && (s.scrollLeft = b)
            }), a.nScrollHead = q, a.nScrollBody = r, a.nScrollFoot = s, a.aoDrawCallback.push({
                fn: qa,
                sName: "scrolling"
            }), o[0]
        }

        function qa(a) {
            var b, c, e, f, g, h, i, j, k, l = a.oScroll,
                m = l.sX,
                n = l.sXInner,
                p = l.sY,
                q = l.iBarWidth,
                r = d(a.nScrollHead),
                s = r[0].style,
                t = r.children("div"),
                u = t[0].style,
                v = t.children("table"),
                w = a.nScrollBody,
                x = d(w),
                y = w.style,
                z = d(a.nScrollFoot),
                A = z.children("div"),
                B = A.children("table"),
                C = d(a.nTHead),
                D = d(a.nTable),
                E = D[0],
                F = E.style,
                G = a.nTFoot ? d(a.nTFoot) : null,
                H = a.oBrowser,
                I = H.bScrollOversize,
                J = [],
                K = [],
                L = [],
                M = function(a) {
                    var b = a.style;
                    b.paddingTop = "0", b.paddingBottom = "0", b.borderTopWidth = "0", b.borderBottomWidth = "0", b.height = 0
                };
            if (D.children("thead, tfoot").remove(), g = C.clone().prependTo(D), b = C.find("tr"), e = g.find("tr"), g.find("th, td").removeAttr("tabindex"), G && (h = G.clone().prependTo(D), c = G.find("tr"), f = h.find("tr")), m || (y.width = "100%", r[0].style.width = "100%"), d.each(Q(a, g), function(b, c) {
                    i = o(a, b), c.style.width = a.aoColumns[i].sWidth
                }), G && ra(function(a) {
                    a.style.width = ""
                }, f), l.bCollapse && "" !== p && (y.height = x[0].offsetHeight + C[0].offsetHeight + "px"), k = D.outerWidth(), "" === m ? (F.width = "100%", I && (D.find("tbody").height() > w.offsetHeight || "scroll" == x.css("overflow-y")) && (F.width = ya(D.outerWidth() - q))) : "" !== n ? F.width = ya(n) : k == x.width() && x.height() < D.height() ? (F.width = ya(k - q), D.outerWidth() > k - q && (F.width = ya(k))) : F.width = ya(k), k = D.outerWidth(), ra(M, e), ra(function(a) {
                    L.push(a.innerHTML), J.push(ya(d(a).css("width")))
                }, e), ra(function(a, b) {
                    a.style.width = J[b]
                }, b), d(e).height(0), G && (ra(M, f), ra(function(a) {
                    K.push(ya(d(a).css("width")))
                }, f), ra(function(a, b) {
                    a.style.width = K[b]
                }, c), d(f).height(0)), ra(function(a, b) {
                    a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + L[b] + "</div>", a.style.width = J[b]
                }, e), G && ra(function(a, b) {
                    a.innerHTML = "", a.style.width = K[b]
                }, f), D.outerWidth() < k ? (j = w.scrollHeight > w.offsetHeight || "scroll" == x.css("overflow-y") ? k + q : k, I && (w.scrollHeight > w.offsetHeight || "scroll" == x.css("overflow-y")) && (F.width = ya(j - q)), ("" === m || "" !== n) && Ka(a, 1, "Possible column misalignment", 6)) : j = "100%", y.width = ya(j), s.width = ya(j), G && (a.nScrollFoot.style.width = ya(j)), p || I && (y.height = ya(E.offsetHeight + q)), p && l.bCollapse) {
                y.height = ya(p);
                var N = m && E.offsetWidth > w.offsetWidth ? q : 0;
                E.offsetHeight < w.offsetHeight && (y.height = ya(E.offsetHeight + N))
            }
            var O = D.outerWidth();
            v[0].style.width = ya(O), u.width = ya(O);
            var P = D.height() > w.clientHeight || "scroll" == x.css("overflow-y"),
                R = "padding" + (H.bScrollbarLeft ? "Left" : "Right");
            u[R] = P ? q + "px" : "0px", G && (B[0].style.width = ya(O), A[0].style.width = ya(O), A[0].style[R] = P ? q + "px" : "0px"), x.scroll(), !a.bSorted && !a.bFiltered || a._drawHold || (w.scrollTop = 0)
        }

        function ra(a, b, c) {
            for (var d, e, f = 0, g = 0, h = b.length; h > g;) {
                for (d = b[g].firstChild, e = c ? c[g].firstChild : null; d;) 1 === d.nodeType && (c ? a(d, e, f) : a(d, f), f++), d = d.nextSibling, e = c ? e.nextSibling : null;
                g++
            }
        }

        function sa(b) {
            var c, e, f, g, h, i = b.nTable,
                j = b.aoColumns,
                k = b.oScroll,
                l = k.sY,
                m = k.sX,
                o = k.sXInner,
                p = j.length,
                s = r(b, "bVisible"),
                t = d("th", b.nTHead),
                u = i.getAttribute("width"),
                v = i.parentNode,
                w = !1;
            for (c = 0; c < s.length; c++) e = j[s[c]], null !== e.sWidth && (e.sWidth = ua(e.sWidthOrig, v), w = !0);
            if (w || m || l || p != q(b) || p != t.length) {
                var x = d(i).clone().empty().css("visibility", "hidden").removeAttr("id").append(d(b.nTHead).clone(!1)).append(d(b.nTFoot).clone(!1)).append(d("<tbody><tr/></tbody>"));
                x.find("tfoot th, tfoot td").css("width", "");
                var y = x.find("tbody tr");
                for (t = Q(b, x.find("thead")[0]), c = 0; c < s.length; c++) e = j[s[c]], t[c].style.width = null !== e.sWidthOrig && "" !== e.sWidthOrig ? ya(e.sWidthOrig) : "";
                if (b.aoData.length)
                    for (c = 0; c < s.length; c++) f = s[c], e = j[f], d(wa(b, f)).clone(!1).append(e.sContentPadding).appendTo(y);
                if (x.appendTo(v), m && o ? x.width(o) : m ? (x.css("width", "auto"), x.width() < v.offsetWidth && x.width(v.offsetWidth)) : l ? x.width(v.offsetWidth) : u && x.width(u), va(b, x[0]), m) {
                    var z = 0;
                    for (c = 0; c < s.length; c++) e = j[s[c]], h = d(t[c]).outerWidth(), z += null === e.sWidthOrig ? h : parseInt(e.sWidth, 10) + h - d(t[c]).width();
                    x.width(ya(z)), i.style.width = ya(z)
                }
                for (c = 0; c < s.length; c++) e = j[s[c]], g = d(t[c]).width(), g && (e.sWidth = ya(g));
                i.style.width = ya(x.css("width")), x.remove()
            } else
                for (c = 0; p > c; c++) j[c].sWidth = ya(t.eq(c).width());
            u && (i.style.width = ya(u)), !u && !m || b._reszEvt || (d(a).bind("resize.DT-" + b.sInstance, ta(function() {
                n(b)
            })), b._reszEvt = !0)
        }

        function ta(a, b) {
            var d, e, f = b || 200;
            return function() {
                var b = this,
                    g = +new Date,
                    h = arguments;
                d && d + f > g ? (clearTimeout(e), e = setTimeout(function() {
                    d = c, a.apply(b, h)
                }, f)) : d ? (d = g, a.apply(b, h)) : d = g
            }
        }

        function ua(a, c) {
            if (!a) return 0;
            var e = d("<div/>").css("width", ya(a)).appendTo(c || b.body),
                f = e[0].offsetWidth;
            return e.remove(), f
        }

        function va(a, b) {
            var c = a.oScroll;
            if (c.sX || c.sY) {
                var e = c.sX ? 0 : c.iBarWidth;
                b.style.width = ya(d(b).outerWidth() - e)
            }
        }

        function wa(a, b) {
            var c = xa(a, b);
            if (0 > c) return null;
            var e = a.aoData[c];
            return e.nTr ? e.anCells[b] : d("<td/>").html(y(a, c, b, "display"))[0]
        }

        function xa(a, b) {
            for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; g > f; f++) c = y(a, f, b, "display") + "", c = c.replace(wb, ""), c.length > d && (d = c.length, e = f);
            return e
        }

        function ya(a) {
            return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
        }

        function za() {
            if (!Wa.__scrollbarWidth) {
                var a = d("<p/>").css({
                        width: "100%",
                        height: 200,
                        padding: 0
                    })[0],
                    b = d("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 200,
                        height: 150,
                        padding: 0,
                        overflow: "hidden",
                        visibility: "hidden"
                    }).append(a).appendTo("body"),
                    c = a.offsetWidth;
                b.css("overflow", "scroll");
                var e = a.offsetWidth;
                c === e && (e = b[0].clientWidth), b.remove(), Wa.__scrollbarWidth = c - e
            }
            return Wa.__scrollbarWidth
        }

        function Aa(a) {
            var b, c, e, f, g, h, i, j = [],
                k = a.aoColumns,
                l = a.aaSortingFixed,
                m = d.isPlainObject(l),
                n = [],
                o = function(a) {
                    a.length && !d.isArray(a[0]) ? n.push(a) : n.push.apply(n, a)
                };
            for (d.isArray(l) && o(l), m && l.pre && o(l.pre), o(a.aaSorting), m && l.post && o(l.post), b = 0; b < n.length; b++)
                for (i = n[b][0], f = k[i].aDataSort, c = 0, e = f.length; e > c; c++) g = f[c], h = k[g].sType || "string", j.push({
                    src: i,
                    col: g,
                    dir: n[b][1],
                    index: n[b][2],
                    type: h,
                    formatter: Wa.ext.type.order[h + "-pre"]
                });
            return j
        }

        function Ba(a) {
            var b, c, d, e, f, g = [],
                h = Wa.ext.type.order,
                i = a.aoData,
                j = (a.aoColumns, 0),
                k = a.aiDisplayMaster;
            for (s(a), f = Aa(a), b = 0, c = f.length; c > b; b++) e = f[b], e.formatter && j++, Ga(a, e.col);
            if ("ssp" != Sa(a) && 0 !== f.length) {
                for (b = 0, d = k.length; d > b; b++) g[k[b]] = b;
                j === f.length ? k.sort(function(a, b) {
                    var c, d, e, h, j, k = f.length,
                        l = i[a]._aSortData,
                        m = i[b]._aSortData;
                    for (e = 0; k > e; e++)
                        if (j = f[e], c = l[j.col], d = m[j.col], h = d > c ? -1 : c > d ? 1 : 0, 0 !== h) return "asc" === j.dir ? h : -h;
                    return c = g[a], d = g[b], d > c ? -1 : c > d ? 1 : 0
                }) : k.sort(function(a, b) {
                    var c, d, e, j, k, l, m = f.length,
                        n = i[a]._aSortData,
                        o = i[b]._aSortData;
                    for (e = 0; m > e; e++)
                        if (k = f[e], c = n[k.col], d = o[k.col], l = h[k.type + "-" + k.dir] || h["string-" + k.dir], j = l(c, d), 0 !== j) return j;
                    return c = g[a], d = g[b], d > c ? -1 : c > d ? 1 : 0
                })
            }
            a.bSorted = !0
        }

        function Ca(a) {
            for (var b, c, d = a.aoColumns, e = Aa(a), f = a.oLanguage.oAria, g = 0, h = d.length; h > g; g++) {
                var i = d[g],
                    j = i.asSorting,
                    k = i.sTitle.replace(/<.*?>/g, ""),
                    l = i.nTh;
                l.removeAttribute("aria-sort"), i.bSortable ? (e.length > 0 && e[0].col == g ? (l.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b = k + ("asc" === c ? f.sSortAscending : f.sSortDescending)) : b = k, l.setAttribute("aria-label", b)
            }
        }

        function Da(a, b, e, f) {
            var g, h = a.aoColumns[b],
                i = a.aaSorting,
                j = h.asSorting,
                k = function(a) {
                    var b = a._idx;
                    return b === c && (b = d.inArray(a[1], j)), b + 1 >= j.length ? 0 : b + 1
                };
            if ("number" == typeof i[0] && (i = a.aaSorting = [i]), e && a.oFeatures.bSortMulti) {
                var l = d.inArray(b, mb(i, "0")); - 1 !== l ? (g = k(i[l]), i[l][1] = j[g], i[l]._idx = g) : (i.push([b, j[0], 0]), i[i.length - 1]._idx = 0)
            } else i.length && i[0][0] == b ? (g = k(i[0]), i.length = 1, i[0][1] = j[g], i[0]._idx = g) : (i.length = 0, i.push([b, j[0]]), i[0]._idx = 0);
            N(a), "function" == typeof f && f(a)
        }

        function Ea(a, b, c, d) {
            var e = a.aoColumns[c];
            Na(b, {}, function(b) {
                e.bSortable !== !1 && (a.oFeatures.bProcessing ? (oa(a, !0), setTimeout(function() {
                    Da(a, c, b.shiftKey, d), "ssp" !== Sa(a) && oa(a, !1)
                }, 0)) : Da(a, c, b.shiftKey, d))
            })
        }

        function Fa(a) {
            var b, c, e, f = a.aLastSort,
                g = a.oClasses.sSortColumn,
                h = Aa(a),
                i = a.oFeatures;
            if (i.bSort && i.bSortClasses) {
                for (b = 0, c = f.length; c > b; b++) e = f[b].src, d(mb(a.aoData, "anCells", e)).removeClass(g + (2 > b ? b + 1 : 3));
                for (b = 0, c = h.length; c > b; b++) e = h[b].src, d(mb(a.aoData, "anCells", e)).addClass(g + (2 > b ? b + 1 : 3))
            }
            a.aLastSort = h
        }

        function Ga(a, b) {
            var c, d = a.aoColumns[b],
                e = Wa.ext.order[d.sSortDataType];
            e && (c = e.call(a.oInstance, a, b, p(a, b)));
            for (var f, g, h = Wa.ext.type.order[d.sType + "-pre"], i = 0, j = a.aoData.length; j > i; i++) f = a.aoData[i], f._aSortData || (f._aSortData = []), (!f._aSortData[b] || e) && (g = e ? c[i] : y(a, i, b, "sort"), f._aSortData[b] = h ? h(g) : g)
        }

        function Ha(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: d.extend(!0, [], a.aaSorting),
                    search: ca(a.oPreviousSearch),
                    columns: d.map(a.aoColumns, function(b, c) {
                        return {
                            visible: b.bVisible,
                            search: ca(a.aoPreSearchCols[c])
                        }
                    })
                };
                Pa(a, "aoStateSaveParams", "stateSaveParams", [a, b]), a.oSavedState = b, a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }

        function Ia(a, b) {
            var c, e, f = a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var g = a.fnStateLoadCallback.call(a.oInstance, a);
                if (g && g.time) {
                    var h = Pa(a, "aoStateLoadParams", "stateLoadParams", [a, g]);
                    if (-1 === d.inArray(!1, h)) {
                        var i = a.iStateDuration;
                        if (!(i > 0 && g.time < +new Date - 1e3 * i) && f.length === g.columns.length) {
                            for (a.oLoadedState = d.extend(!0, {}, g), a._iDisplayStart = g.start, a.iInitDisplayStart = g.start, a._iDisplayLength = g.length, a.aaSorting = [], d.each(g.order, function(b, c) {
                                a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c)
                            }), d.extend(a.oPreviousSearch, da(g.search)), c = 0, e = g.columns.length; e > c; c++) {
                                var j = g.columns[c];
                                f[c].bVisible = j.visible, d.extend(a.aoPreSearchCols[c], da(j.search))
                            }
                            Pa(a, "aoStateLoaded", "stateLoaded", [a, g])
                        }
                    }
                }
            }
        }

        function Ja(a) {
            var b = Wa.settings,
                c = d.inArray(a, mb(b, "nTable"));
            return -1 !== c ? b[c] : null
        }

        function Ka(b, c, d, e) {
            if (d = "DataTables warning: " + (null !== b ? "table id=" + b.sTableId + " - " : "") + d, e && (d += ". For more information about this error, please see http://datatables.net/tn/" + e), c) a.console && console.log && console.log(d);
            else {
                var f = Wa.ext,
                    g = f.sErrMode || f.errMode;
                if ("alert" != g) throw new Error(d);
                alert(d)
            }
        }

        function La(a, b, e, f) {
            return d.isArray(e) ? void d.each(e, function(c, e) {
                d.isArray(e) ? La(a, b, e[0], e[1]) : La(a, b, e)
            }) : (f === c && (f = e), void(b[e] !== c && (a[f] = b[e])))
        }

        function Ma(a, b, c) {
            var e;
            for (var f in b) b.hasOwnProperty(f) && (e = b[f], d.isPlainObject(e) ? (d.isPlainObject(a[f]) || (a[f] = {}), d.extend(!0, a[f], e)) : c && "data" !== f && "aaData" !== f && d.isArray(e) ? a[f] = e.slice() : a[f] = e);
            return a
        }

        function Na(a, b, c) {
            d(a).bind("click.DT", b, function(b) {
                a.blur(), c(b)
            }).bind("keypress.DT", b, function(a) {
                13 === a.which && (a.preventDefault(), c(a))
            }).bind("selectstart.DT", function() {
                return !1
            })
        }

        function Oa(a, b, c, d) {
            c && a[b].push({
                fn: c,
                sName: d
            })
        }

        function Pa(a, b, c, e) {
            var f = [];
            return b && (f = d.map(a[b].slice().reverse(), function(b, c) {
                return b.fn.apply(a.oInstance, e)
            })), null !== c && d(a.nTable).trigger(c + ".dt", e), f
        }

        function Qa(a) {
            var b = a._iDisplayStart,
                c = a.fnDisplayEnd(),
                d = a._iDisplayLength;
            c === a.fnRecordsDisplay() && (b = c - d), (-1 === d || 0 > b) && (b = 0), a._iDisplayStart = b
        }

        function Ra(a, b) {
            var c = a.renderer,
                e = Wa.ext.renderer[b];
            return d.isPlainObject(c) && c[b] ? e[c[b]] || e._ : "string" == typeof c ? e[c] || e._ : e._
        }

        function Sa(a) {
            return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
        }

        function Ta(a, b) {
            var c = [],
                d = Sb.numbers_length,
                e = Math.floor(d / 2);
            return d >= b ? c = ob(0, b) : e >= a ? (c = ob(0, d - 2), c.push("ellipsis"), c.push(b - 1)) : a >= b - 1 - e ? (c = ob(b - (d - 2), b), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)) : (c = ob(a - 1, a + 2), c.push("ellipsis"), c.push(b - 1), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)), c.DT_el = "span", c
        }

        function Ua(a) {
            d.each({
                num: function(b) {
                    return Tb(b, a)
                },
                "num-fmt": function(b) {
                    return Tb(b, a, fb)
                },
                "html-num": function(b) {
                    return Tb(b, a, bb)
                },
                "html-num-fmt": function(b) {
                    return Tb(b, a, bb, fb)
                }
            }, function(b, c) {
                Xa.type.order[b + a + "-pre"] = c
            })
        }

        function Va(a) {
            return function() {
                var b = [Ja(this[Wa.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Wa.ext.internal[a].apply(this, b)
            }
        }
        var Wa, Xa, Ya, Za, $a, _a = {},
            ab = /[\r\n]/g,
            bb = /<.*?>/g,
            cb = /^[\w\+\-]/,
            db = /[\w\+\-]$/,
            eb = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
            fb = /[',$Â£â‚¬Â¥%\u2009\u202F]/g,
            gb = function(a) {
                return a && a !== !0 && "-" !== a ? !1 : !0
            },
            hb = function(a) {
                var b = parseInt(a, 10);
                return !isNaN(b) && isFinite(a) ? b : null
            },
            ib = function(a, b) {
                return _a[b] || (_a[b] = new RegExp(aa(b), "g")), "string" == typeof a ? a.replace(/\./g, "").replace(_a[b], ".") : a
            },
            jb = function(a, b, c) {
                var d = "string" == typeof a;
                return b && d && (a = ib(a, b)), c && d && (a = a.replace(fb, "")), gb(a) || !isNaN(parseFloat(a)) && isFinite(a)
            },
            kb = function(a) {
                return gb(a) || "string" == typeof a
            },
            lb = function(a, b, c) {
                if (gb(a)) return !0;
                var d = kb(a);
                return d && jb(pb(a), b, c) ? !0 : null
            },
            mb = function(a, b, d) {
                var e = [],
                    f = 0,
                    g = a.length;
                if (d !== c)
                    for (; g > f; f++) a[f] && a[f][b] && e.push(a[f][b][d]);
                else
                    for (; g > f; f++) a[f] && e.push(a[f][b]);
                return e
            },
            nb = function(a, b, d, e) {
                var f = [],
                    g = 0,
                    h = b.length;
                if (e !== c)
                    for (; h > g; g++) f.push(a[b[g]][d][e]);
                else
                    for (; h > g; g++) f.push(a[b[g]][d]);
                return f
            },
            ob = function(a, b) {
                var d, e = [];
                b === c ? (b = 0, d = a) : (d = b, b = a);
                for (var f = b; d > f; f++) e.push(f);
                return e
            },
            pb = function(a) {
                return a.replace(bb, "")
            },
            qb = function(a) {
                var b, c, d, e = [],
                    f = a.length,
                    g = 0;
                a: for (c = 0; f > c; c++) {
                    for (b = a[c], d = 0; g > d; d++)
                        if (e[d] === b) continue a;
                    e.push(b), g++
                }
                return e
            },
            rb = function(a, b, d) {
                a[b] !== c && (a[d] = a[b])
            },
            sb = /\[.*?\]$/,
            tb = /\(\)$/,
            ub = d("<div>")[0],
            vb = ub.textContent !== c,
            wb = /<.*?>/g;
        Wa = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            }, this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            }, this.api = function(a) {
                return new Ya(a ? Ja(this[Xa.iApiIndex]) : this)
            }, this.fnAddData = function(a, b) {
                var e = this.api(!0),
                    f = d.isArray(a) && (d.isArray(a[0]) || d.isPlainObject(a[0])) ? e.rows.add(a) : e.row.add(a);
                return (b === c || b) && e.draw(), f.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                    d = b.settings()[0],
                    e = d.oScroll;
                a === c || a ? b.draw(!1) : ("" !== e.sX || "" !== e.sY) && qa(d)
            }, this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === c || a) && b.draw()
            }, this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            }, this.fnDeleteRow = function(a, b, d) {
                var e = this.api(!0),
                    f = e.rows(a),
                    g = f.settings()[0],
                    h = g.aoData[f[0][0]];
                return f.remove(), b && b.call(this, g, h), (d === c || d) && e.draw(), h
            }, this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            }, this.fnDraw = function(a) {
                this.api(!0).draw(!a)
            }, this.fnFilter = function(a, b, d, e, f, g) {
                var h = this.api(!0);
                null === b || b === c ? h.search(a, d, e, g) : h.column(b).search(a, d, e, g), h.draw()
            }, this.fnGetData = function(a, b) {
                var d = this.api(!0);
                if (a !== c) {
                    var e = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== c || "td" == e || "th" == e ? d.cell(a, b).data() : d.row(a).data() || null
                }
                return d.data().toArray()
            }, this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== c ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                if ("TR" == c) return b.row(a).index();
                if ("TD" == c || "TH" == c) {
                    var d = b.cell(a).index();
                    return [d.row, d.columnVisible, d.column]
                }
                return null
            }, this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            }, this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            }, this.fnPageChange = function(a, b) {
                var d = this.api(!0).page(a);
                (b === c || b) && d.draw(!1)
            }, this.fnSetColumnVis = function(a, b, d) {
                var e = this.api(!0).column(a).visible(b);
                (d === c || d) && e.columns.adjust().draw()
            }, this.fnSettings = function() {
                return Ja(this[Xa.iApiIndex])
            }, this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            }, this.fnSortListener = function(a, b, c) {
                this.api(!0).order.listener(a, b, c)
            }, this.fnUpdate = function(a, b, d, e, f) {
                var g = this.api(!0);
                return d === c || null === d ? g.row(b).data(a) : g.cell(b, d).data(a), (f === c || f) && g.columns.adjust(), (e === c || e) && g.draw(), 0
            }, this.fnVersionCheck = Xa.fnVersionCheck;
            var b = this,
                e = a === c,
                k = this.length;
            e && (a = {}), this.oApi = this.internal = Xa.internal;
            for (var n in Wa.ext.internal) n && (this[n] = Va(n));
            return this.each(function() {
                var n, o = {},
                    p = k > 1 ? Ma(o, a, !0) : a,
                    q = 0,
                    r = this.getAttribute("id"),
                    s = !1,
                    w = Wa.defaults;
                if ("table" != this.nodeName.toLowerCase()) return void Ka(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                h(w), i(w.column), f(w, w, !0), f(w.column, w.column, !0), f(w, p);
                var x = Wa.settings;
                for (q = 0, n = x.length; n > q; q++) {
                    if (x[q].nTable == this) {
                        var y = p.bRetrieve !== c ? p.bRetrieve : w.bRetrieve,
                            z = p.bDestroy !== c ? p.bDestroy : w.bDestroy;
                        if (e || y) return x[q].oInstance;
                        if (z) {
                            x[q].oInstance.fnDestroy();
                            break
                        }
                        return void Ka(x[q], 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (x[q].sTableId == this.id) {
                        x.splice(q, 1);
                        break
                    }
                }(null === r || "" === r) && (r = "DataTables_Table_" + Wa.ext._unique++, this.id = r);
                var A = d.extend(!0, {}, Wa.models.oSettings, {
                    nTable: this,
                    oApi: b.internal,
                    oInit: p,
                    sDestroyWidth: d(this)[0].style.width,
                    sInstance: r,
                    sTableId: r
                });
                x.push(A), A.oInstance = 1 === b.length ? b : d(this).dataTable(), h(p), p.oLanguage && g(p.oLanguage), p.aLengthMenu && !p.iDisplayLength && (p.iDisplayLength = d.isArray(p.aLengthMenu[0]) ? p.aLengthMenu[0][0] : p.aLengthMenu[0]), p = Ma(d.extend(!0, {}, w), p), La(A.oFeatures, p, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), La(A, p, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                    ["bJQueryUI", "bJUI"]
                ]), La(A.oScroll, p, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"]
                ]), La(A.oLanguage, p, "fnInfoCallback"), Oa(A, "aoDrawCallback", p.fnDrawCallback, "user"), Oa(A, "aoServerParams", p.fnServerParams, "user"), Oa(A, "aoStateSaveParams", p.fnStateSaveParams, "user"), Oa(A, "aoStateLoadParams", p.fnStateLoadParams, "user"), Oa(A, "aoStateLoaded", p.fnStateLoaded, "user"), Oa(A, "aoRowCallback", p.fnRowCallback, "user"), Oa(A, "aoRowCreatedCallback", p.fnCreatedRow, "user"), Oa(A, "aoHeaderCallback", p.fnHeaderCallback, "user"), Oa(A, "aoFooterCallback", p.fnFooterCallback, "user"), Oa(A, "aoInitComplete", p.fnInitComplete, "user"), Oa(A, "aoPreDrawCallback", p.fnPreDrawCallback, "user");
                var B = A.oClasses;
                if (p.bJQueryUI ? (d.extend(B, Wa.ext.oJUIClasses, p.oClasses), p.sDom === w.sDom && "lfrtip" === w.sDom && (A.sDom = '<"H"lfr>t<"F"ip>'), A.renderer ? d.isPlainObject(A.renderer) && !A.renderer.header && (A.renderer.header = "jqueryui") : A.renderer = "jqueryui") : d.extend(B, Wa.ext.classes, p.oClasses), d(this).addClass(B.sTable), ("" !== A.oScroll.sX || "" !== A.oScroll.sY) && (A.oScroll.iBarWidth = za()), A.oScroll.sX === !0 && (A.oScroll.sX = "100%"), A.iInitDisplayStart === c && (A.iInitDisplayStart = p.iDisplayStart, A._iDisplayStart = p.iDisplayStart), null !== p.iDeferLoading) {
                    A.bDeferLoading = !0;
                    var C = d.isArray(p.iDeferLoading);
                    A._iRecordsDisplay = C ? p.iDeferLoading[0] : p.iDeferLoading, A._iRecordsTotal = C ? p.iDeferLoading[1] : p.iDeferLoading
                }
                "" !== p.oLanguage.sUrl ? (A.oLanguage.sUrl = p.oLanguage.sUrl, d.getJSON(A.oLanguage.sUrl, null, function(a) {
                    g(a), f(w.oLanguage, a), d.extend(!0, A.oLanguage, p.oLanguage, a), ha(A)
                }), s = !0) : d.extend(!0, A.oLanguage, p.oLanguage), null === p.asStripeClasses && (A.asStripeClasses = [B.sStripeOdd, B.sStripeEven]);
                var D = A.asStripeClasses,
                    E = d("tbody tr:eq(0)", this); - 1 !== d.inArray(!0, d.map(D, function(a, b) {
                    return E.hasClass(a)
                })) && (d("tbody tr", this).removeClass(D.join(" ")), A.asDestroyStripes = D.slice());
                var F, G = [],
                    I = this.getElementsByTagName("thead");
                if (0 !== I.length && (P(A.aoHeader, I[0]), G = Q(A)), null === p.aoColumns)
                    for (F = [], q = 0, n = G.length; n > q; q++) F.push(null);
                else F = p.aoColumns;
                for (q = 0, n = F.length; n > q; q++) l(A, G ? G[q] : null);
                if (t(A, p.aoColumnDefs, F, function(a, b) {
                        m(A, a, b)
                    }), E.length) {
                    var J = function(a, b) {
                        return a.getAttribute("data-" + b) ? b : null
                    };
                    d.each(H(A, E[0]).cells, function(a, b) {
                        var d = A.aoColumns[a];
                        if (d.mData === a) {
                            var e = J(b, "sort") || J(b, "order"),
                                f = J(b, "filter") || J(b, "search");
                            (null !== e || null !== f) && (d.mData = {
                                _: a + ".display",
                                sort: null !== e ? a + ".@data-" + e : c,
                                type: null !== e ? a + ".@data-" + e : c,
                                filter: null !== f ? a + ".@data-" + f : c
                            }, m(A, a))
                        }
                    })
                }
                var K = A.oFeatures;
                if (p.bStateSave && (K.bStateSave = !0, Ia(A, p), Oa(A, "aoDrawCallback", Ha, "state_save")), p.aaSorting === c) {
                    var L = A.aaSorting;
                    for (q = 0, n = L.length; n > q; q++) L[q][1] = A.aoColumns[q].asSorting[0]
                }
                Fa(A), K.bSort && Oa(A, "aoDrawCallback", function() {
                    if (A.bSorted) {
                        var a = Aa(A),
                            b = {};
                        d.each(a, function(a, c) {
                            b[c.src] = c.dir
                        }), Pa(A, null, "order", [A, a, b]), Ca(A)
                    }
                }), Oa(A, "aoDrawCallback", function() {
                    (A.bSorted || "ssp" === Sa(A) || K.bDeferRender) && Fa(A)
                }, "sc"), j(A);
                var M = d(this).children("caption").each(function() {
                        this._captionSide = d(this).css("caption-side")
                    }),
                    N = d(this).children("thead");
                0 === N.length && (N = d("<thead/>").appendTo(this)), A.nTHead = N[0];
                var O = d(this).children("tbody");
                0 === O.length && (O = d("<tbody/>").appendTo(this)), A.nTBody = O[0];
                var R = d(this).children("tfoot");
                if (0 === R.length && M.length > 0 && ("" !== A.oScroll.sX || "" !== A.oScroll.sY) && (R = d("<tfoot/>").appendTo(this)), 0 === R.length || 0 === R.children().length ? d(this).addClass(B.sNoFooter) : R.length > 0 && (A.nTFoot = R[0], P(A.aoFooter, A.nTFoot)), p.aaData)
                    for (q = 0; q < p.aaData.length; q++) u(A, p.aaData[q]);
                else(A.bDeferLoading || "dom" == Sa(A)) && v(A, d(A.nTBody).children("tr"));
                A.aiDisplay = A.aiDisplayMaster.slice(), A.bInitialised = !0, s === !1 && ha(A)
            }), b = null, this
        };
        var xb = [],
            yb = Array.prototype,
            zb = function(a) {
                var b, c, e = Wa.settings,
                    f = d.map(e, function(a, b) {
                        return a.nTable
                    });
                return a ? a.nTable && a.oApi ? [a] : a.nodeName && "table" === a.nodeName.toLowerCase() ? (b = d.inArray(a, f), -1 !== b ? [e[b]] : null) : a && "function" == typeof a.settings ? a.settings().toArray() : ("string" == typeof a ? c = d(a) : a instanceof d && (c = a), c ? c.map(function(a) {
                    return b = d.inArray(this, f), -1 !== b ? e[b] : null
                }).toArray() : void 0) : []
            };
        Ya = function(a, b) {
            if (!this instanceof Ya) throw "DT API must be constructed as a new object";
            var c = [],
                e = function(a) {
                    var b = zb(a);
                    b && c.push.apply(c, b)
                };
            if (d.isArray(a))
                for (var f = 0, g = a.length; g > f; f++) e(a[f]);
            else e(a);
            this.context = qb(c), b && this.push.apply(this, b.toArray ? b.toArray() : b), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Ya.extend(this, this, xb)
        }, Wa.Api = Ya, Ya.prototype = {
            concat: yb.concat,
            context: [],
            each: function(a) {
                for (var b = 0, c = this.length; c > b; b++) a.call(this, this[b], b, this);
                return this
            },
            eq: function(a) {
                var b = this.context;
                return b.length > a ? new Ya(b[a], this[a]) : null
            },
            filter: function(a) {
                var b = [];
                if (yb.filter) b = yb.filter.call(this, a, this);
                else
                    for (var c = 0, d = this.length; d > c; c++) a.call(this, this[c], c, this) && b.push(this[c]);
                return new Ya(this.context, b)
            },
            flatten: function() {
                var a = [];
                return new Ya(this.context, a.concat.apply(a, this.toArray()))
            },
            join: yb.join,
            indexOf: yb.indexOf || function(a, b) {
                for (var c = b || 0, d = this.length; d > c; c++)
                    if (this[c] === a) return c;
                return -1
            },
            iterator: function(a, b, d) {
                var e, f, g, h, i, j, k, l, m = [],
                    n = this.context,
                    o = this.selector;
                for ("string" == typeof a && (d = b, b = a, a = !1), f = 0, g = n.length; g > f; f++)
                    if ("table" === b) e = d(n[f], f), e !== c && m.push(e);
                    else if ("columns" === b || "rows" === b) e = d(n[f], this[f], f), e !== c && m.push(e);
                    else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b)
                        for (k = this[f], "column-rows" === b && (j = Fb(n[f], o.opts)), h = 0, i = k.length; i > h; h++) l = k[h], e = "cell" === b ? d(n[f], l.row, l.column, f, h) : d(n[f], l, f, h, j), e !== c && m.push(e);
                if (m.length) {
                    var p = new Ya(n, a ? m.concat.apply([], m) : m),
                        q = p.selector;
                    return q.rows = o.rows, q.cols = o.cols, q.opts = o.opts, p
                }
                return this
            },
            lastIndexOf: yb.lastIndexOf || function(a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(a) {
                var b = [];
                if (yb.map) b = yb.map.call(this, a, this);
                else
                    for (var c = 0, d = this.length; d > c; c++) b.push(a.call(this, this[c], c));
                return new Ya(this.context, b)
            },
            pluck: function(a) {
                return this.map(function(b) {
                    return b[a]
                })
            },
            pop: yb.pop,
            push: yb.push,
            reduce: yb.reduce || function(a, b) {
                return k(this, a, b, 0, this.length, 1)
            },
            reduceRight: yb.reduceRight || function(a, b) {
                return k(this, a, b, this.length - 1, -1, -1)
            },
            reverse: yb.reverse,
            selector: null,
            shift: yb.shift,
            sort: yb.sort,
            splice: yb.splice,
            toArray: function() {
                return yb.slice.call(this)
            },
            to$: function() {
                return d(this)
            },
            toJQuery: function() {
                return d(this)
            },
            unique: function() {
                return new Ya(this.context, qb(this))
            },
            unshift: yb.unshift
        }, Ya.extend = function(a, b, c) {
            if (b && (b instanceof Ya || b.__dt_wrapper)) {
                var e, f, g, h = function(a, b, c) {
                    return function() {
                        var d = b.apply(a, arguments);
                        return Ya.extend(d, d, c.methodExt), d
                    }
                };
                for (e = 0, f = c.length; f > e; e++) g = c[e], b[g.name] = "function" == typeof g.val ? h(a, g.val, g) : d.isPlainObject(g.val) ? {} : g.val, b[g.name].__dt_wrapper = !0, Ya.extend(a, b[g.name], g.propExt)
            }
        }, Ya.register = Za = function(a, b) {
            if (d.isArray(a))
                for (var c = 0, e = a.length; e > c; c++) Ya.register(a[c], b);
            else {
                var f, g, h, i, j = a.split("."),
                    k = xb,
                    l = function(a, b) {
                        for (var c = 0, d = a.length; d > c; c++)
                            if (a[c].name === b) return a[c];
                        return null
                    };
                for (f = 0, g = j.length; g > f; f++) {
                    i = -1 !== j[f].indexOf("()"), h = i ? j[f].replace("()", "") : j[f];
                    var m = l(k, h);
                    m || (m = {
                        name: h,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, k.push(m)), f === g - 1 ? m.val = b : k = i ? m.methodExt : m.propExt
                }
            }
        }, Ya.registerPlural = $a = function(a, b, e) {
            Ya.register(a, e), Ya.register(b, function() {
                var a = e.apply(this, arguments);
                return a === this ? this : a instanceof Ya ? a.length ? d.isArray(a[0]) ? new Ya(a.context, a[0]) : a[0] : c : a
            })
        };
        var Ab = function(a, b) {
            if ("number" == typeof a) return [b[a]];
            var c = d.map(b, function(a, b) {
                return a.nTable
            });
            return d(c).filter(a).map(function(a) {
                var e = d.inArray(this, c);
                return b[e]
            }).toArray()
        };
        Za("tables()", function(a) {
            return a ? new Ya(Ab(a, this.context)) : this
        }), Za("table()", function(a) {
            var b = this.tables(a),
                c = b.context;
            return c.length ? new Ya(c[0]) : b
        }), $a("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(a) {
                return a.nTable
            })
        }), $a("tables().body()", "table().body()", function() {
            return this.iterator("table", function(a) {
                return a.nTBody
            })
        }), $a("tables().header()", "table().header()", function() {
            return this.iterator("table", function(a) {
                return a.nTHead
            })
        }), $a("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(a) {
                return a.nTFoot
            })
        }), $a("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(a) {
                return a.nTableWrapper
            })
        }), Za("draw()", function(a) {
            return this.iterator("table", function(b) {
                N(b, a === !1)
            })
        }), Za("page()", function(a) {
            return a === c ? this.page.info().page : this.iterator("table", function(b) {
                ma(b, a)
            })
        }), Za("page.info()", function(a) {
            if (0 === this.context.length) return c;
            var b = this.context[0],
                d = b._iDisplayStart,
                e = b._iDisplayLength,
                f = b.fnRecordsDisplay(),
                g = -1 === e;
            return {
                page: g ? 0 : Math.floor(d / e),
                pages: g ? 1 : Math.ceil(f / e),
                start: d,
                end: b.fnDisplayEnd(),
                length: e,
                recordsTotal: b.fnRecordsTotal(),
                recordsDisplay: f
            }
        }), Za("page.len()", function(a) {
            return a === c ? 0 !== this.context.length ? this.context[0]._iDisplayLength : c : this.iterator("table", function(b) {
                ja(b, a)
            })
        });
        var Bb = function(a, b, c) {
            if ("ssp" == Sa(a) ? N(a, b) : (oa(a, !0), R(a, [], function(c) {
                    E(a);
                    for (var d = V(a, c), e = 0, f = d.length; f > e; e++) u(a, d[e]);
                    N(a, b), oa(a, !1)
                })), c) {
                var d = new Ya(a);
                d.one("draw", function() {
                    c(d.ajax.json())
                })
            }
        };
        Za("ajax.json()", function() {
            var a = this.context;
            return a.length > 0 ? a[0].json : void 0
        }), Za("ajax.params()", function() {
            var a = this.context;
            return a.length > 0 ? a[0].oAjaxData : void 0
        }), Za("ajax.reload()", function(a, b) {
            return this.iterator("table", function(c) {
                Bb(c, b === !1, a)
            })
        }), Za("ajax.url()", function(a) {
            var b = this.context;
            return a === c ? 0 === b.length ? c : (b = b[0], b.ajax ? d.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource) : this.iterator("table", function(b) {
                d.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
            })
        }), Za("ajax.url().load()", function(a, b) {
            return this.iterator("table", function(c) {
                Bb(c, b === !1, a)
            })
        });
        var Cb = function(a, b) {
                var e, f, g, h, i, j, k = [];
                for (a && "string" != typeof a && a.length !== c || (a = [a]), g = 0, h = a.length; h > g; g++)
                    for (f = a[g] && a[g].split ? a[g].split(",") : [a[g]], i = 0, j = f.length; j > i; i++) e = b("string" == typeof f[i] ? d.trim(f[i]) : f[i]), e && e.length && k.push.apply(k, e);
                return k
            },
            Db = function(a) {
                return a || (a = {}), a.filter && !a.search && (a.search = a.filter), {
                    search: a.search || "none",
                    order: a.order || "current",
                    page: a.page || "all"
                }
            },
            Eb = function(a) {
                for (var b = 0, c = a.length; c > b; b++)
                    if (a[b].length > 0) return a[0] = a[b], a.length = 1, a.context = [a.context[b]], a;
                return a.length = 0, a
            },
            Fb = function(a, b) {
                var c, e, f, g = [],
                    h = a.aiDisplay,
                    i = a.aiDisplayMaster,
                    j = b.search,
                    k = b.order,
                    l = b.page;
                if ("ssp" == Sa(a)) return "removed" === j ? [] : ob(0, i.length);
                if ("current" == l)
                    for (c = a._iDisplayStart, e = a.fnDisplayEnd(); e > c; c++) g.push(h[c]);
                else if ("current" == k || "applied" == k) g = "none" == j ? i.slice() : "applied" == j ? h.slice() : d.map(i, function(a, b) {
                    return -1 === d.inArray(a, h) ? a : null
                });
                else if ("index" == k || "original" == k)
                    for (c = 0, e = a.aoData.length; e > c; c++) "none" == j ? g.push(c) : (f = d.inArray(c, h), (-1 === f && "removed" == j || f >= 0 && "applied" == j) && g.push(c));
                return g
            },
            Gb = function(a, b, c) {
                return Cb(b, function(b) {
                    var e = hb(b);
                    if (null !== e && !c) return [e];
                    var f = Fb(a, c);
                    if (null !== e && -1 !== d.inArray(e, f)) return [e];
                    if (!b) return f;
                    for (var g = [], h = 0, i = f.length; i > h; h++) g.push(a.aoData[f[h]].nTr);
                    return b.nodeName && -1 !== d.inArray(b, g) ? [b._DT_RowIndex] : d(g).filter(b).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                })
            };
        Za("rows()", function(a, b) {
            a === c ? a = "" : d.isPlainObject(a) && (b = a, a = ""), b = Db(b);
            var e = this.iterator("table", function(c) {
                return Gb(c, a, b)
            });
            return e.selector.rows = a, e.selector.opts = b, e
        }), Za("rows().nodes()", function() {
            return this.iterator("row", function(a, b) {
                return a.aoData[b].nTr || c
            })
        }), Za("rows().data()", function() {
            return this.iterator(!0, "rows", function(a, b) {
                return nb(a.aoData, b, "_aData")
            })
        }), $a("rows().cache()", "row().cache()", function(a) {
            return this.iterator("row", function(b, c) {
                var d = b.aoData[c];
                return "search" === a ? d._aFilterData : d._aSortData
            })
        }), $a("rows().invalidate()", "row().invalidate()", function(a) {
            return this.iterator("row", function(b, c) {
                G(b, c, a)
            })
        }), $a("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(a, b) {
                return b
            })
        }), $a("rows().remove()", "row().remove()", function() {
            var a = this;
            return this.iterator("row", function(b, c, e) {
                var f = b.aoData;
                f.splice(c, 1);
                for (var g = 0, h = f.length; h > g; g++) null !== f[g].nTr && (f[g].nTr._DT_RowIndex = g);
                d.inArray(c, b.aiDisplay);
                F(b.aiDisplayMaster, c), F(b.aiDisplay, c), F(a[e], c, !1), Qa(b)
            })
        }), Za("rows.add()", function(a) {
            var b = this.iterator("table", function(b) {
                    var c, d, e, f = [];
                    for (d = 0, e = a.length; e > d; d++) c = a[d], c.nodeName && "TR" === c.nodeName.toUpperCase() ? f.push(v(b, c)[0]) : f.push(u(b, c));
                    return f
                }),
                c = this.rows(-1);
            return c.pop(), c.push.apply(c, b.toArray()), c
        }), Za("row()", function(a, b) {
            return Eb(this.rows(a, b))
        }), Za("row().data()", function(a) {
            var b = this.context;
            return a === c ? b.length && this.length ? b[0].aoData[this[0]]._aData : c : (b[0].aoData[this[0]]._aData = a, G(b[0], this[0], "data"), this)
        }), Za("row().node()", function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
        }), Za("row.add()", function(a) {
            a instanceof d && a.length && (a = a[0]);
            var b = this.iterator("table", function(b) {
                return a.nodeName && "TR" === a.nodeName.toUpperCase() ? v(b, a)[0] : u(b, a)
            });
            return this.row(b[0])
        });
        var Hb = function(a, b, c, e) {
                var f = [],
                    g = function(b, c) {
                        if (b.nodeName && "tr" === b.nodeName.toLowerCase()) f.push(b);
                        else {
                            var e = d("<tr><td/></tr>").addClass(c);
                            d("td", e).addClass(c).html(b)[0].colSpan = q(a), f.push(e[0])
                        }
                    };
                if (d.isArray(c) || c instanceof d)
                    for (var h = 0, i = c.length; i > h; h++) g(c[h], e);
                else g(c, e);
                b._details && b._details.remove(), b._details = d(f), b._detailsShow && b._details.insertAfter(b.nTr)
            },
            Ib = function(a) {
                var b = a.context;
                if (b.length && a.length) {
                    var d = b[0].aoData[a[0]];
                    d._details && (d._details.remove(), d._detailsShow = c, d._details = c)
                }
            },
            Jb = function(a, b) {
                var c = a.context;
                if (c.length && a.length) {
                    var d = c[0].aoData[a[0]];
                    d._details && (d._detailsShow = b, b ? d._details.insertAfter(d.nTr) : d._details.detach(), Kb(c[0]))
                }
            },
            Kb = function(a) {
                var b = new Ya(a),
                    c = ".dt.DT_details",
                    d = "draw" + c,
                    e = "column-visibility" + c,
                    f = "destroy" + c,
                    g = a.aoData;
                b.off(d + " " + e + " " + f), mb(g, "_details").length > 0 && (b.on(d, function(c, d) {
                    a === d && b.rows({
                        page: "current"
                    }).eq(0).each(function(a) {
                        var b = g[a];
                        b._detailsShow && b._details.insertAfter(b.nTr)
                    })
                }), b.on(e, function(b, c, d, e) {
                    if (a === c)
                        for (var f, h = q(c), i = 0, j = g.length; j > i; i++) f = g[i], f._details && f._details.children("td[colspan]").attr("colspan", h)
                }), b.on(f, function(b, c) {
                    if (a === c)
                        for (var d = 0, e = g.length; e > d; d++) g[d]._details && Ib(g[d])
                }))
            },
            Lb = "",
            Mb = Lb + "row().child",
            Nb = Mb + "()";
        Za(Nb, function(a, b) {
            var d = this.context;
            return a === c ? d.length && this.length ? d[0].aoData[this[0]]._details : c : (a === !0 ? this.child.show() : a === !1 ? Ib(this) : d.length && this.length && Hb(d[0], d[0].aoData[this[0]], a, b), this)
        }), Za([Mb + ".show()", Nb + ".show()"], function(a) {
            return Jb(this, !0), this
        }), Za([Mb + ".hide()", Nb + ".hide()"], function() {
            return Jb(this, !1), this
        }), Za([Mb + ".remove()", Nb + ".remove()"], function() {
            return Ib(this), this
        }), Za(Mb + ".isShown()", function() {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var Ob = /^(.+):(name|visIdx|visible)$/,
            Pb = function(a, b, c) {
                var e = a.aoColumns,
                    f = mb(e, "sName"),
                    g = mb(e, "nTh");
                return Cb(b, function(b) {
                    var c = hb(b);
                    if ("" === b) return ob(e.length);
                    if (null !== c) return [c >= 0 ? c : e.length + c];
                    var h = "string" == typeof b ? b.match(Ob) : "";
                    if (!h) return d(g).filter(b).map(function() {
                        return d.inArray(this, g)
                    }).toArray();
                    switch (h[2]) {
                        case "visIdx":
                        case "visible":
                            var i = parseInt(h[1], 10);
                            if (0 > i) {
                                var j = d.map(e, function(a, b) {
                                    return a.bVisible ? b : null
                                });
                                return [j[j.length + i]]
                            }
                            return [o(a, i)];
                        case "name":
                            return d.map(f, function(a, b) {
                                return a === h[1] ? b : null
                            })
                    }
                })
            },
            Qb = function(a, b, e, f) {
                var g, h, i, j, k = a.aoColumns,
                    l = k[b],
                    m = a.aoData;
                if (e === c) return l.bVisible;
                if (l.bVisible !== e) {
                    if (e) {
                        var o = d.inArray(!0, mb(k, "bVisible"), b + 1);
                        for (h = 0, i = m.length; i > h; h++) j = m[h].nTr, g = m[h].anCells, j && j.insertBefore(g[b], g[o] || null)
                    } else d(mb(a.aoData, "anCells", b)).detach();
                    l.bVisible = e, L(a, a.aoHeader), L(a, a.aoFooter), (f === c || f) && (n(a), (a.oScroll.sX || a.oScroll.sY) && qa(a)), Pa(a, null, "column-visibility", [a, b, e]), Ha(a)
                }
            };
        Za("columns()", function(a, b) {
            a === c ? a = "" : d.isPlainObject(a) && (b = a, a = ""), b = Db(b);
            var e = this.iterator("table", function(c) {
                return Pb(c, a, b)
            });
            return e.selector.cols = a, e.selector.opts = b, e
        }), $a("columns().header()", "column().header()", function(a, b) {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTh
            })
        }), $a("columns().footer()", "column().footer()", function(a, b) {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTf
            })
        }), $a("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", function(a, b, c, d, e) {
                for (var f = [], g = 0, h = e.length; h > g; g++) f.push(y(a, e[g], b, ""));
                return f
            })
        }), $a("columns().cache()", "column().cache()", function(a) {
            return this.iterator("column-rows", function(b, c, d, e, f) {
                return nb(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
            })
        }), $a("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(a, b, c, d, e) {
                return nb(a.aoData, e, "anCells", b)
            })
        }), $a("columns().visible()", "column().visible()", function(a, b) {
            return this.iterator("column", function(d, e) {
                return a === c ? d.aoColumns[e].bVisible : Qb(d, e, a, b)
            })
        }), $a("columns().indexes()", "column().index()", function(a) {
            return this.iterator("column", function(b, c) {
                return "visible" === a ? p(b, c) : c
            })
        }), Za("columns.adjust()", function() {
            return this.iterator("table", function(a) {
                n(a)
            })
        }), Za("column.index()", function(a, b) {
            if (0 !== this.context.length) {
                var c = this.context[0];
                if ("fromVisible" === a || "toData" === a) return o(c, b);
                if ("fromData" === a || "toVisible" === a) return p(c, b)
            }
        }), Za("column()", function(a, b) {
            return Eb(this.columns(a, b))
        });
        var Rb = function(a, b, e) {
            var f, g, h, i, j, k = a.aoData,
                l = Fb(a, e),
                m = nb(k, l, "anCells"),
                n = d([].concat.apply([], m)),
                o = a.aoColumns.length;
            return Cb(b, function(a) {
                if (null === a || a === c) {
                    for (g = [], h = 0, i = l.length; i > h; h++)
                        for (f = l[h], j = 0; o > j; j++) g.push({
                            row: f,
                            column: j
                        });
                    return g
                }
                return d.isPlainObject(a) ? [a] : n.filter(a).map(function(a, b) {
                    return f = b.parentNode._DT_RowIndex, {
                        row: f,
                        column: d.inArray(b, k[f].anCells)
                    }
                }).toArray()
            })
        };
        Za("cells()", function(a, b, e) {
            if (d.isPlainObject(a) && (typeof a.row !== c ? (e = b, b = null) : (e = a, a = null)), d.isPlainObject(b) && (e = b, b = null), null === b || b === c) return this.iterator("table", function(b) {
                return Rb(b, a, Db(e))
            });
            var f, g, h, i, j, k = this.columns(b, e),
                l = this.rows(a, e),
                m = this.iterator("table", function(a, b) {
                    for (f = [], g = 0, h = l[b].length; h > g; g++)
                        for (i = 0, j = k[b].length; j > i; i++) f.push({
                            row: l[b][g],
                            column: k[b][i]
                        });
                    return f
                });
            return d.extend(m.selector, {
                cols: b,
                rows: a,
                opts: e
            }), m
        }), $a("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(a, b, c) {
                return a.aoData[b].anCells[c]
            })
        }), Za("cells().data()", function() {
            return this.iterator("cell", function(a, b, c) {
                return y(a, b, c)
            })
        }), $a("cells().cache()", "cell().cache()", function(a) {
            return a = "search" === a ? "_aFilterData" : "_aSortData", this.iterator("cell", function(b, c, d) {
                return b.aoData[c][a][d]
            })
        }), $a("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(a, b, c) {
                return {
                    row: b,
                    column: c,
                    columnVisible: p(a, c)
                }
            })
        }), Za(["cells().invalidate()", "cell().invalidate()"], function(a) {
            var b = this.selector;
            return this.rows(b.rows, b.opts).invalidate(a), this
        }), Za("cell()", function(a, b, c) {
            return Eb(this.cells(a, b, c))
        }), Za("cell().data()", function(a) {
            var b = this.context,
                d = this[0];
            return a === c ? b.length && d.length ? y(b[0], d[0].row, d[0].column) : c : (z(b[0], d[0].row, d[0].column, a), G(b[0], d[0].row, "data", d[0].column), this)
        }), Za("order()", function(a, b) {
            var e = this.context;
            return a === c ? 0 !== e.length ? e[0].aaSorting : c : ("number" == typeof a ? a = [
                [a, b]
            ] : d.isArray(a[0]) || (a = Array.prototype.slice.call(arguments)), this.iterator("table", function(b) {
                b.aaSorting = a.slice()
            }))
        }), Za("order.listener()", function(a, b, c) {
            return this.iterator("table", function(d) {
                Ea(d, a, b, c)
            })
        }), Za(["columns().order()", "column().order()"], function(a) {
            var b = this;
            return this.iterator("table", function(c, e) {
                var f = [];
                d.each(b[e], function(b, c) {
                    f.push([c, a])
                }), c.aaSorting = f
            })
        }), Za("search()", function(a, b, e, f) {
            var g = this.context;
            return a === c ? 0 !== g.length ? g[0].oPreviousSearch.sSearch : c : this.iterator("table", function(c) {
                c.oFeatures.bFilter && X(c, d.extend({}, c.oPreviousSearch, {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === e ? !0 : e,
                    bCaseInsensitive: null === f ? !0 : f
                }), 1)
            })
        }), $a("columns().search()", "column().search()", function(a, b, e, f) {
            return this.iterator("column", function(g, h) {
                var i = g.aoPreSearchCols;
                return a === c ? i[h].sSearch : void(g.oFeatures.bFilter && (d.extend(i[h], {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === e ? !0 : e,
                    bCaseInsensitive: null === f ? !0 : f
                }), X(g, g.oPreviousSearch, 1)))
            })
        }), Za("state()", function() {
            return this.context.length ? this.context[0].oSavedState : null
        }), Za("state.clear()", function() {
            return this.iterator("table", function(a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
        }), Za("state.loaded()", function() {
            return this.context.length ? this.context[0].oLoadedState : null
        }), Za("state.save()", function() {
            return this.iterator("table", function(a) {
                Ha(a)
            })
        }), Wa.versionCheck = Wa.fnVersionCheck = function(a) {
            for (var b, c, d = Wa.version.split("."), e = a.split("."), f = 0, g = e.length; g > f; f++)
                if (b = parseInt(d[f], 10) || 0, c = parseInt(e[f], 10) || 0, b !== c) return b > c;
            return !0
        }, Wa.isDataTable = Wa.fnIsDataTable = function(a) {
            var b = d(a).get(0),
                c = !1;
            return d.each(Wa.settings, function(a, d) {
                (d.nTable === b || d.nScrollHead === b || d.nScrollFoot === b) && (c = !0)
            }), c
        }, Wa.tables = Wa.fnTables = function(a) {
            return jQuery.map(Wa.settings, function(b) {
                return !a || a && d(b.nTable).is(":visible") ? b.nTable : void 0
            })
        }, Wa.camelToHungarian = f, Za("$()", function(a, b) {
            var c = this.rows(b).nodes(),
                e = d(c);
            return d([].concat(e.filter(a).toArray(), e.find(a).toArray()))
        }), d.each(["on", "one", "off"], function(a, b) {
            Za(b + "()", function() {
                var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt");
                var c = d(this.tables().nodes());
                return c[b].apply(c, a), this
            })
        }), Za("clear()", function() {
            return this.iterator("table", function(a) {
                E(a)
            })
        }), Za("settings()", function() {
            return new Ya(this.context, this.context)
        }), Za("data()", function() {
            return this.iterator("table", function(a) {
                return mb(a.aoData, "_aData")
            }).flatten()
        }), Za("destroy()", function(b) {
            return b = b || !1, this.iterator("table", function(c) {
                var e, f = c.nTableWrapper.parentNode,
                    g = c.oClasses,
                    h = c.nTable,
                    i = c.nTBody,
                    j = c.nTHead,
                    k = c.nTFoot,
                    l = d(h),
                    m = d(i),
                    n = d(c.nTableWrapper),
                    o = d.map(c.aoData, function(a) {
                        return a.nTr
                    });
                c.bDestroying = !0, Pa(c, "aoDestroyCallback", "destroy", [c]), b || new Ya(c).columns().visible(!0),
                    n.unbind(".DT").find(":not(tbody *)").unbind(".DT"), d(a).unbind(".DT-" + c.sInstance), h != j.parentNode && (l.children("thead").detach(), l.append(j)), k && h != k.parentNode && (l.children("tfoot").detach(), l.append(k)), l.detach(), n.detach(), c.aaSorting = [], c.aaSortingFixed = [], Fa(c), d(o).removeClass(c.asStripeClasses.join(" ")), d("th, td", j).removeClass(g.sSortable + " " + g.sSortableAsc + " " + g.sSortableDesc + " " + g.sSortableNone), c.bJUI && (d("th span." + g.sSortIcon + ", td span." + g.sSortIcon, j).detach(), d("th, td", j).each(function() {
                    var a = d("div." + g.sSortJUIWrapper, this);
                    d(this).append(a.contents()), a.detach()
                })), !b && f && f.insertBefore(h, c.nTableReinsertBefore), m.children().detach(), m.append(o), l.css("width", c.sDestroyWidth).removeClass(g.sTable), e = c.asDestroyStripes.length, e && m.children().each(function(a) {
                    d(this).addClass(c.asDestroyStripes[a % e])
                });
                var p = d.inArray(c, Wa.settings); - 1 !== p && Wa.settings.splice(p, 1)
            })
        }), Wa.version = "1.10.2", Wa.settings = [], Wa.models = {}, Wa.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Wa.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        }, Wa.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Wa.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(a) {
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(a) {
                try {
                    return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
                } catch (b) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(a, b) {
                try {
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
                } catch (c) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: d.extend({}, Wa.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        }, e(Wa.defaults), Wa.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, e(Wa.defaults.column), Wa.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: c,
            oAjaxData: c,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == Sa(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == Sa(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var a = this._iDisplayLength,
                    b = this._iDisplayStart,
                    c = b + a,
                    d = this.aiDisplay.length,
                    e = this.oFeatures,
                    f = e.bPaginate;
                return e.bServerSide ? f === !1 || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        }, Wa.ext = Xa = {
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Wa.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Wa.version
        }, d.extend(Xa, {
            afnFiltering: Xa.search,
            aTypes: Xa.type.detect,
            ofnSearch: Xa.type.search,
            oSort: Xa.type.order,
            afnSortData: Xa.order,
            aoFeatures: Xa.feature,
            oApi: Xa.internal,
            oStdClasses: Xa.classes,
            oPagination: Xa.pager
        }), d.extend(Wa.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }),
            function() {
                var a = "";
                a = "";
                var b = a + "ui-state-default",
                    c = a + "css_right ui-icon ui-icon-",
                    e = a + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
                d.extend(Wa.ext.oJUIClasses, Wa.ext.classes, {
                    sPageButton: "fg-button ui-button " + b,
                    sPageButtonActive: "ui-state-disabled",
                    sPageButtonDisabled: "ui-state-disabled",
                    sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                    sSortAsc: b + " sorting_asc",
                    sSortDesc: b + " sorting_desc",
                    sSortable: b + " sorting",
                    sSortableAsc: b + " sorting_asc_disabled",
                    sSortableDesc: b + " sorting_desc_disabled",
                    sSortableNone: b + " sorting_disabled",
                    sSortJUIAsc: c + "triangle-1-n",
                    sSortJUIDesc: c + "triangle-1-s",
                    sSortJUI: c + "carat-2-n-s",
                    sSortJUIAscAllowed: c + "carat-1-n",
                    sSortJUIDescAllowed: c + "carat-1-s",
                    sSortJUIWrapper: "DataTables_sort_wrapper",
                    sSortIcon: "DataTables_sort_icon",
                    sScrollHead: "dataTables_scrollHead " + b,
                    sScrollFoot: "dataTables_scrollFoot " + b,
                    sHeaderTH: b,
                    sFooterTH: b,
                    sJUIHeader: e + " ui-corner-tl ui-corner-tr",
                    sJUIFooter: e + " ui-corner-bl ui-corner-br"
                })
            }();
        var Sb = Wa.ext.pager;
        d.extend(Sb, {
            simple: function(a, b) {
                return ["previous", "next"]
            },
            full: function(a, b) {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(a, b) {
                return ["previous", Ta(a, b), "next"]
            },
            full_numbers: function(a, b) {
                return ["first", "previous", Ta(a, b), "next", "last"]
            },
            _numbers: Ta,
            numbers_length: 7
        }), d.extend(!0, Wa.ext.renderer, {
            pageButton: {
                _: function(a, c, e, f, g, h) {
                    var i, j, k = a.oClasses,
                        l = a.oLanguage.oPaginate,
                        m = 0,
                        n = function(b, c) {
                            var f, o, p, q, r = function(b) {
                                ma(a, b.data.action, !0)
                            };
                            for (f = 0, o = c.length; o > f; f++)
                                if (q = c[f], d.isArray(q)) {
                                    var s = d("<" + (q.DT_el || "div") + "/>").appendTo(b);
                                    n(s, q)
                                } else {
                                    switch (i = "", j = "", q) {
                                        case "ellipsis":
                                            b.append("<span>&hellip;</span>");
                                            break;
                                        case "first":
                                            i = l.sFirst, j = q + (g > 0 ? "" : " " + k.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            i = l.sPrevious, j = q + (g > 0 ? "" : " " + k.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            i = l.sNext, j = q + (h - 1 > g ? "" : " " + k.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            i = l.sLast, j = q + (h - 1 > g ? "" : " " + k.sPageButtonDisabled);
                                            break;
                                        default:
                                            i = q + 1, j = g === q ? k.sPageButtonActive : ""
                                    }
                                    i && (p = d("<a>", {
                                        "class": k.sPageButton + " " + j,
                                        "aria-controls": a.sTableId,
                                        "data-dt-idx": m,
                                        tabindex: a.iTabIndex,
                                        id: 0 === e && "string" == typeof q ? a.sTableId + "_" + q : null
                                    }).html(i).appendTo(b), Na(p, {
                                        action: q
                                    }, r), m++)
                                }
                        };
                    try {
                        var o = d(b.activeElement).data("dt-idx");
                        n(d(c).empty(), f), null !== o && d(c).find("[data-dt-idx=" + o + "]").focus()
                    } catch (p) {}
                }
            }
        });
        var Tb = function(a, b, c, d) {
            return a && "-" !== a ? (b && (a = ib(a, b)), a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))), 1 * a) : -(1 / 0)
        };
        return d.extend(Xa.type.order, {
            "date-pre": function(a) {
                return Date.parse(a) || 0
            },
            "html-pre": function(a) {
                return gb(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
            },
            "string-pre": function(a) {
                return gb(a) ? "" : "string" == typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
            },
            "string-asc": function(a, b) {
                return b > a ? -1 : a > b ? 1 : 0
            },
            "string-desc": function(a, b) {
                return b > a ? 1 : a > b ? -1 : 0
            }
        }), Ua(""), d.extend(Wa.ext.type.detect, [function(a, b) {
            var c = b.oLanguage.sDecimal;
            return jb(a, c) ? "num" + c : null
        }, function(a, b) {
            if (a && (!cb.test(a) || !db.test(a))) return null;
            var c = Date.parse(a);
            return null !== c && !isNaN(c) || gb(a) ? "date" : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return jb(a, c, !0) ? "num-fmt" + c : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return lb(a, c) ? "html-num" + c : null
        }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return lb(a, c, !0) ? "html-num-fmt" + c : null
        }, function(a, b) {
            return gb(a) || "string" == typeof a && -1 !== a.indexOf("<") ? "html" : null
        }]), d.extend(Wa.ext.type.search, {
            html: function(a) {
                return gb(a) ? a : "string" == typeof a ? a.replace(ab, " ").replace(bb, "") : ""
            },
            string: function(a) {
                return gb(a) ? a : "string" == typeof a ? a.replace(ab, " ") : a
            }
        }), d.extend(!0, Wa.ext.renderer, {
            header: {
                _: function(a, b, c, e) {
                    d(a.nTable).on("order.dt.DT", function(d, f, g, h) {
                        if (a === f) {
                            var i = c.idx;
                            b.removeClass(c.sSortingClass + " " + e.sSortAsc + " " + e.sSortDesc).addClass("asc" == h[i] ? e.sSortAsc : "desc" == h[i] ? e.sSortDesc : c.sSortingClass)
                        }
                    })
                },
                jqueryui: function(a, b, c, e) {
                    var f = c.idx;
                    d("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(d("<span/>").addClass(e.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b), d(a.nTable).on("order.dt.DT", function(d, g, h, i) {
                        a === g && (b.removeClass(e.sSortAsc + " " + e.sSortDesc).addClass("asc" == i[f] ? e.sSortAsc : "desc" == i[f] ? e.sSortDesc : c.sSortingClass), b.find("span." + e.sSortIcon).removeClass(e.sSortJUIAsc + " " + e.sSortJUIDesc + " " + e.sSortJUI + " " + e.sSortJUIAscAllowed + " " + e.sSortJUIDescAllowed).addClass("asc" == i[f] ? e.sSortJUIAsc : "desc" == i[f] ? e.sSortJUIDesc : c.sSortingClassJUI))
                    })
                }
            }
        }), Wa.render = {
            number: function(a, b, c, d) {
                return {
                    display: function(e) {
                        var f = 0 > e ? "-" : "";
                        e = Math.abs(parseFloat(e));
                        var g = parseInt(e, 10),
                            h = c ? b + (e - g).toFixed(c).substring(2) : "";
                        return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + h
                    }
                }
            }
        }, d.extend(Wa.ext.internal, {
            _fnExternApiFunc: Va,
            _fnBuildAjax: R,
            _fnAjaxUpdate: S,
            _fnAjaxParameters: T,
            _fnAjaxUpdateDraw: U,
            _fnAjaxDataSrc: V,
            _fnAddColumn: l,
            _fnColumnOptions: m,
            _fnAdjustColumnSizing: n,
            _fnVisibleToColumnIndex: o,
            _fnColumnIndexToVisible: p,
            _fnVisbleColumns: q,
            _fnGetColumns: r,
            _fnColumnTypes: s,
            _fnApplyColumnDefs: t,
            _fnHungarianMap: e,
            _fnCamelToHungarian: f,
            _fnLanguageCompat: g,
            _fnBrowserDetect: j,
            _fnAddData: u,
            _fnAddTr: v,
            _fnNodeToDataIndex: w,
            _fnNodeToColumnIndex: x,
            _fnGetCellData: y,
            _fnSetCellData: z,
            _fnSplitObjNotation: A,
            _fnGetObjectDataFn: B,
            _fnSetObjectDataFn: C,
            _fnGetDataMaster: D,
            _fnClearTable: E,
            _fnDeleteIndex: F,
            _fnInvalidateRow: G,
            _fnGetRowElements: H,
            _fnCreateTr: I,
            _fnBuildHead: K,
            _fnDrawHead: L,
            _fnDraw: M,
            _fnReDraw: N,
            _fnAddOptionsHtml: O,
            _fnDetectHeader: P,
            _fnGetUniqueThs: Q,
            _fnFeatureHtmlFilter: W,
            _fnFilterComplete: X,
            _fnFilterCustom: Y,
            _fnFilterColumn: Z,
            _fnFilter: $,
            _fnFilterCreateSearch: _,
            _fnEscapeRegex: aa,
            _fnFilterData: ba,
            _fnFeatureHtmlInfo: ea,
            _fnUpdateInfo: fa,
            _fnInfoMacros: ga,
            _fnInitialise: ha,
            _fnInitComplete: ia,
            _fnLengthChange: ja,
            _fnFeatureHtmlLength: ka,
            _fnFeatureHtmlPaginate: la,
            _fnPageChange: ma,
            _fnFeatureHtmlProcessing: na,
            _fnProcessingDisplay: oa,
            _fnFeatureHtmlTable: pa,
            _fnScrollDraw: qa,
            _fnApplyToChildren: ra,
            _fnCalculateColumnWidths: sa,
            _fnThrottle: ta,
            _fnConvertToWidth: ua,
            _fnScrollingWidthAdjust: va,
            _fnGetWidestNode: wa,
            _fnGetMaxLenString: xa,
            _fnStringToCss: ya,
            _fnScrollBarWidth: za,
            _fnSortFlatten: Aa,
            _fnSort: Ba,
            _fnSortAria: Ca,
            _fnSortListener: Da,
            _fnSortAttachListener: Ea,
            _fnSortingClasses: Fa,
            _fnSortData: Ga,
            _fnSaveState: Ha,
            _fnLoadState: Ia,
            _fnSettingsFromNode: Ja,
            _fnLog: Ka,
            _fnMap: La,
            _fnBindAction: Na,
            _fnCallbackReg: Oa,
            _fnCallbackFire: Pa,
            _fnLengthOverflow: Qa,
            _fnRenderer: Ra,
            _fnDataSource: Sa,
            _fnRowAttributes: J,
            _fnCalculateEnd: function() {}
        }), d.fn.dataTable = Wa, d.fn.dataTableSettings = Wa.settings, d.fn.dataTableExt = Wa.ext, d.fn.DataTable = function(a) {
            return d(this).dataTable(a).api()
        }, d.each(Wa, function(a, b) {
            d.fn.DataTable[a] = b
        }), d.fn.dataTable
    })
}(window, document);
$.extend(!0, $.fn.dataTable.defaults, {
    sDom: "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
    oLanguage: {
        sLengthMenu: "_MENU_ records per page",
        sSearch: ""
    }
}), $.extend($.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper form-inline",
    sFilterInput: "form-control",
    sLengthSelect: "form-control"
}), $.fn.dataTable.defaults.sPaginationType = "bootstrap", $.fn.dataTableExt.oApi.fnPagingInfo = function(a) {
    return {
        iStart: a._iDisplayStart,
        iEnd: a.fnDisplayEnd(),
        iLength: a._iDisplayLength,
        iTotal: a.fnRecordsTotal(),
        iFilteredTotal: a.fnRecordsDisplay(),
        iPage: -1 === a._iDisplayLength ? 0 : Math.ceil(a._iDisplayStart / a._iDisplayLength),
        iTotalPages: -1 === a._iDisplayLength ? 0 : Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength)
    }
}, $.extend($.fn.dataTableExt.oPagination, {
    bootstrap: {
        fnInit: function(a, b, c) {
            var d = a.oLanguage.oPaginate,
                e = function(b) {
                    b.preventDefault(), a.oApi._fnPageChange(a, b.data.action) && c(a)
                };
            $(b).append('<ul class="pagination"><li class="previous disabled"><a href="#">' + d.sPrevious + '</a></li><li class="next disabled"><a href="#">' + d.sNext + "</a></li></ul>");
            var f = $("a", b);
            $(f[0]).bind("click.DT", {
                action: "previous"
            }, e), $(f[1]).bind("click.DT", {
                action: "next"
            }, e)
        },
        fnUpdate: function(a, b) {
            var c, d, e, f, g, h, i = 5,
                j = a.oInstance.fnPagingInfo(),
                k = a.aanFeatures.p,
                l = Math.floor(i / 2);
            for (j.iTotalPages < i ? (g = 1, h = j.iTotalPages) : j.iPage <= l ? (g = 1, h = i) : j.iPage >= j.iTotalPages - l ? (g = j.iTotalPages - i + 1, h = j.iTotalPages) : (g = j.iPage - l + 1, h = g + i - 1), c = 0, d = k.length; d > c; c++) {
                for ($("li:gt(0)", k[c]).filter(":not(:last)").remove(), e = g; h >= e; e++) f = e == j.iPage + 1 ? 'class="active"' : "", $("<li " + f + '><a href="#">' + e + "</a></li>").insertBefore($("li:last", k[c])[0]).bind("click", function(c) {
                    c.preventDefault(), a._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * j.iLength, b(a)
                });
                0 === j.iPage ? $("li:first", k[c]).addClass("disabled") : $("li:first", k[c]).removeClass("disabled"), j.iPage === j.iTotalPages - 1 || 0 === j.iTotalPages ? $("li:last", k[c]).addClass("disabled") : $("li:last", k[c]).removeClass("disabled")
            }
        }
    }
}), $.fn.DataTable.TableTools && ($.extend(!0, $.fn.DataTable.TableTools.classes, {
    container: "DTTT btn-group",
    buttons: {
        normal: "btn btn-default",
        disabled: "disabled"
    },
    collection: {
        container: "DTTT_dropdown dropdown-menu",
        buttons: {
            normal: "",
            disabled: "disabled"
        }
    },
    print: {
        info: "DTTT_print_info modal"
    },
    select: {
        row: "active"
    }
}), $.extend(!0, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
    collection: {
        container: "ul",
        button: "li",
        liner: "a"
    }
}));
var TableTools;!function(a,b,c){var d=function(d,e){"use strict";var f={version:"1.0.4-TableTools2",clients:{},moviePath:"",nextId:1,$:function(a){return"string"==typeof a&&(a=b.getElementById(a)),a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a),this.className+=" "+a},a.removeClass=function(a){this.className=this.className.replace(new RegExp("\\s*"+a+"\\s*")," ").replace(/^\s+/,"").replace(/\s+$/,"")},a.hasClass=function(a){return!!this.className.match(new RegExp("\\s*"+a+"\\s*"))}),a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){var d=this.clients[a];d&&d.receiveEvent(b,c)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a){var b={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};for(""!==a.style.width&&(b.width=a.style.width.replace("px","")),""!==a.style.height&&(b.height=a.style.height.replace("px",""));a;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b},Client:function(a){this.handlers={},this.id=f.nextId++,this.movieId="ZeroClipboard_TableToolsMovie_"+this.id,f.register(this.id,this),a&&this.glue(a)}};return f.Client.prototype={id:0,ready:!1,movie:null,clipText:"",fileName:"",action:"copy",handCursorEnabled:!0,cssEffects:!0,handlers:null,sized:!1,glue:function(a,c){this.domElement=f.$(a);var d=99;this.domElement.style.zIndex&&(d=parseInt(this.domElement.style.zIndex,10)+1);var e=f.getDOMObjectPosition(this.domElement);this.div=b.createElement("div");var g=this.div.style;g.position="absolute",g.left="0px",g.top="0px",g.width=e.width+"px",g.height=e.height+"px",g.zIndex=d,"undefined"!=typeof c&&""!==c&&(this.div.title=c),0!==e.width&&0!==e.height&&(this.sized=!0),this.domElement&&(this.domElement.appendChild(this.div),this.div.innerHTML=this.getHTML(e.width,e.height).replace(/&/g,"&amp;"))},positionElement:function(){var a=f.getDOMObjectPosition(this.domElement),b=this.div.style;if(b.position="absolute",b.width=a.width+"px",b.height=a.height+"px",0!==a.width&&0!==a.height){this.sized=!0;var c=this.div.childNodes[0];c.width=a.width,c.height=a.height}},getHTML:function(a,b){var c="",d="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+f.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>'}else c+='<embed id="'+this.movieId+'" src="'+f.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" wmode="transparent" />';return c},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide(),this.div.innerHTML="";var a=b.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(c){}this.domElement=null,this.div=null}},reposition:function(a){if(a&&(this.domElement=f.$(a),this.domElement||this.hide()),this.domElement&&this.div){var b=f.getDOMObjectPosition(this.domElement),c=this.div.style;c.left=""+b.left+"px",c.top=""+b.top+"px"}},clearText:function(){this.clipText="",this.ready&&this.movie.clearText()},appendText:function(a){this.clipText+=a,this.ready&&this.movie.appendText(a)},setText:function(a){this.clipText=a,this.ready&&this.movie.setText(a)},setCharSet:function(a){this.charSet=a,this.ready&&this.movie.setCharSet(a)},setBomInc:function(a){this.incBom=a,this.ready&&this.movie.setBomInc(a)},setFileName:function(a){this.fileName=a,this.ready&&this.movie.setFileName(a)},setAction:function(a){this.action=a,this.ready&&this.movie.setAction(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=[]),this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a,this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(c,d){var e;switch(c=c.toString().toLowerCase().replace(/^on/,"")){case"load":if(this.movie=b.getElementById(this.movieId),!this.movie)return e=this,void setTimeout(function(){e.receiveEvent("load",null)},1);if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/))return e=this,setTimeout(function(){e.receiveEvent("load",null)},100),void(this.ready=!0);this.ready=!0,this.movie.clearText(),this.movie.appendText(this.clipText),this.movie.setFileName(this.fileName),this.movie.setAction(this.action),this.movie.setCharSet(this.charSet),this.movie.setBomInc(this.incBom),this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&this.recoverActive&&this.domElement.addClass("active");break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0));break;case"mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[c])for(var f=0,g=this.handlers[c].length;g>f;f++){var h=this.handlers[c][f];"function"==typeof h?h(this,d):"object"==typeof h&&2==h.length?h[0][h[1]](this,d):"string"==typeof h&&a[h](this,d)}}},a.ZeroClipboard_TableTools=f,function(a,b,d){TableTools=function(b,c){!this instanceof TableTools&&alert("Warning: TableTools must be initialised with the keyword 'new'");var d=a.fn.dataTable.Api?new a.fn.dataTable.Api(b).settings()[0]:b.fnSettings();return this.s={that:this,dt:d,print:{saveStart:-1,saveLength:-1,saveScroll:-1,funcEnd:function(){}},buttonCounter:0,select:{type:"",selected:[],preRowSelect:null,postSelected:null,postDeselected:null,all:!1,selectedClass:""},custom:{},swfPath:"",buttonSet:[],master:!1,tags:{}},this.dom={container:null,table:null,print:{hidden:[],message:null},collection:{collection:null,background:null}},this.classes=a.extend(!0,{},TableTools.classes),this.s.dt.bJUI&&a.extend(!0,this.classes,TableTools.classes_themeroller),this.fnSettings=function(){return this.s},"undefined"==typeof c&&(c={}),TableTools._aInstances.push(this),this._fnConstruct(c),this},TableTools.prototype={fnGetSelected:function(a){var b,c,d=[],e=this.s.dt.aoData,f=this.s.dt.aiDisplay;if(a)for(b=0,c=f.length;c>b;b++)e[f[b]]._DTTT_selected&&d.push(e[f[b]].nTr);else for(b=0,c=e.length;c>b;b++)e[b]._DTTT_selected&&d.push(e[b].nTr);return d},fnGetSelectedData:function(){var a,b,c=[],d=this.s.dt.aoData;for(a=0,b=d.length;b>a;a++)d[a]._DTTT_selected&&c.push(this.s.dt.oInstance.fnGetData(a));return c},fnGetSelectedIndexes:function(a){var b,c,d=[],e=this.s.dt.aoData,f=this.s.dt.aiDisplay;if(a)for(b=0,c=f.length;c>b;b++)e[f[b]]._DTTT_selected&&d.push(f[b]);else for(b=0,c=e.length;c>b;b++)e[b]._DTTT_selected&&d.push(b);return d},fnIsSelected:function(a){var b=this.s.dt.oInstance.fnGetPosition(a);return this.s.dt.aoData[b]._DTTT_selected===!0?!0:!1},fnSelectAll:function(a){this._fnRowSelect(a?this.s.dt.aiDisplay:this.s.dt.aoData)},fnSelectNone:function(a){this._fnRowDeselect(this.fnGetSelectedIndexes(a))},fnSelect:function(a){"single"==this.s.select.type?(this.fnSelectNone(),this._fnRowSelect(a)):this._fnRowSelect(a)},fnDeselect:function(a){this._fnRowDeselect(a)},fnGetTitle:function(a){var b="";if("undefined"!=typeof a.sTitle&&""!==a.sTitle)b=a.sTitle;else{var c=d.getElementsByTagName("title");c.length>0&&(b=c[0].innerHTML)}return"¡".toString().length<4?b.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""):b.replace(/[^a-zA-Z0-9_\.,\-_ !\(\)]/g,"")},fnCalcColRatios:function(a){var b,c,d=this.s.dt.aoColumns,e=this._fnColumnTargets(a.mColumns),f=[],g=0,h=0;for(b=0,c=e.length;c>b;b++)e[b]&&(g=d[b].nTh.offsetWidth,h+=g,f.push(g));for(b=0,c=f.length;c>b;b++)f[b]=f[b]/h;return f.join("	")},fnGetTableData:function(a){return this.s.dt?this._fnGetDataTablesData(a):void 0},fnSetText:function(a,b){this._fnFlashSetText(a,b)},fnResizeButtons:function(){for(var a in f.clients)if(a){var b=f.clients[a];"undefined"!=typeof b.domElement&&b.domElement.parentNode&&b.positionElement()}},fnResizeRequired:function(){for(var a in f.clients)if(a){var b=f.clients[a];if("undefined"!=typeof b.domElement&&b.domElement.parentNode==this.dom.container&&b.sized===!1)return!0}return!1},fnPrint:function(a,b){b===c&&(b={}),a===c||a?this._fnPrintStart(b):this._fnPrintEnd()},fnInfo:function(b,c){var d=a("<div/>").addClass(this.classes.print.info).html(b).appendTo("body");setTimeout(function(){d.fadeOut("normal",function(){d.remove()})},c)},fnContainer:function(){return this.dom.container},_fnConstruct:function(b){var c=this;this._fnCustomiseSettings(b),this.dom.container=d.createElement(this.s.tags.container),this.dom.container.className=this.classes.container,"none"!=this.s.select.type&&this._fnRowSelectConfig(),this._fnButtonDefinations(this.s.buttonSet,this.dom.container),this.s.dt.aoDestroyCallback.push({sName:"TableTools",fn:function(){a(c.s.dt.nTBody).off("click.DTTT_Select","tr"),a(c.dom.container).empty();var b=a.inArray(c,TableTools._aInstances);-1!==b&&TableTools._aInstances.splice(b,1)}})},_fnCustomiseSettings:function(b){"undefined"==typeof this.s.dt._TableToolsInit&&(this.s.master=!0,this.s.dt._TableToolsInit=!0),this.dom.table=this.s.dt.nTable,this.s.custom=a.extend({},TableTools.DEFAULTS,b),this.s.swfPath=this.s.custom.sSwfPath,"undefined"!=typeof f&&(f.moviePath=this.s.swfPath),this.s.select.type=this.s.custom.sRowSelect,this.s.select.preRowSelect=this.s.custom.fnPreRowSelect,this.s.select.postSelected=this.s.custom.fnRowSelected,this.s.select.postDeselected=this.s.custom.fnRowDeselected,this.s.custom.sSelectedClass&&(this.classes.select.row=this.s.custom.sSelectedClass),this.s.tags=this.s.custom.oTags,this.s.buttonSet=this.s.custom.aButtons},_fnButtonDefinations:function(b,c){for(var d,e=0,f=b.length;f>e;e++){if("string"==typeof b[e]){if("undefined"==typeof TableTools.BUTTONS[b[e]]){alert("TableTools: Warning - unknown button type: "+b[e]);continue}d=a.extend({},TableTools.BUTTONS[b[e]],!0)}else{if("undefined"==typeof TableTools.BUTTONS[b[e].sExtends]){alert("TableTools: Warning - unknown button type: "+b[e].sExtends);continue}var g=a.extend({},TableTools.BUTTONS[b[e].sExtends],!0);d=a.extend(g,b[e],!0)}var h=this._fnCreateButton(d,a(c).hasClass(this.classes.collection.container));h&&c.appendChild(h)}},_fnCreateButton:function(b,c){var d=this._fnButtonBase(b,c);if(b.sAction.match(/flash/)){if(!this._fnHasFlash())return!1;this._fnFlashConfig(d,b)}else"text"==b.sAction?this._fnTextConfig(d,b):"div"==b.sAction?this._fnTextConfig(d,b):"collection"==b.sAction&&(this._fnTextConfig(d,b),this._fnCollectionConfig(d,b));return-1!==this.s.dt.iTabIndex&&a(d).attr("tabindex",this.s.dt.iTabIndex).attr("aria-controls",this.s.dt.sTableId).on("keyup.DTTT",function(b){13===b.keyCode&&(b.stopPropagation(),a(this).trigger("click"))}).on("mousedown.DTTT",function(a){b.sAction.match(/flash/)||a.preventDefault()}),d},_fnButtonBase:function(a,b){var c,e,f;b?(c=a.sTag&&"default"!==a.sTag?a.sTag:this.s.tags.collection.button,e=a.sLinerTag&&"default"!==a.sLinerTag?a.sLiner:this.s.tags.collection.liner,f=this.classes.collection.buttons.normal):(c=a.sTag&&"default"!==a.sTag?a.sTag:this.s.tags.button,e=a.sLinerTag&&"default"!==a.sLinerTag?a.sLiner:this.s.tags.liner,f=this.classes.buttons.normal);var g=d.createElement(c),h=d.createElement(e),i=this._fnGetMasterSettings();return g.className=f+" "+a.sButtonClass,g.setAttribute("id","ToolTables_"+this.s.dt.sInstance+"_"+i.buttonCounter),g.appendChild(h),h.innerHTML=a.sButtonText,i.buttonCounter++,g},_fnGetMasterSettings:function(){if(this.s.master)return this.s;for(var a=TableTools._aInstances,b=0,c=a.length;c>b;b++)if(this.dom.table==a[b].s.dt.nTable)return a[b].s},_fnCollectionConfig:function(a,b){var c=d.createElement(this.s.tags.collection.container);c.style.display="none",c.className=this.classes.collection.container,b._collection=c,d.body.appendChild(c),this._fnButtonDefinations(b.aButtons,c)},_fnCollectionShow:function(c,e){var f=this,g=a(c).offset(),h=e._collection,i=g.left,j=g.top+a(c).outerHeight(),k=a(b).height(),l=a(d).height(),m=a(b).width(),n=a(d).width();h.style.position="absolute",h.style.left=i+"px",h.style.top=j+"px",h.style.display="block",a(h).css("opacity",0);var o=d.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",o.style.height=(k>l?k:l)+"px",o.style.width=(m>n?m:n)+"px",o.className=this.classes.collection.background,a(o).css("opacity",0),d.body.appendChild(o),d.body.appendChild(h);var p=a(h).outerWidth(),q=a(h).outerHeight();i+p>n&&(h.style.left=n-p+"px"),j+q>l&&(h.style.top=j-q-a(c).outerHeight()+"px"),this.dom.collection.collection=h,this.dom.collection.background=o,setTimeout(function(){a(h).animate({opacity:1},500),a(o).animate({opacity:.25},500)},10),this.fnResizeButtons(),a(o).click(function(){f._fnCollectionHide.call(f,null,null)})},_fnCollectionHide:function(b,c){(null===c||"collection"!=c.sExtends)&&null!==this.dom.collection.collection&&(a(this.dom.collection.collection).animate({opacity:0},500,function(a){this.style.display="none"}),a(this.dom.collection.background).animate({opacity:0},500,function(a){this.parentNode.removeChild(this)}),this.dom.collection.collection=null,this.dom.collection.background=null)},_fnRowSelectConfig:function(){if(this.s.master){var b=this,c=this.s.dt;this.s.dt.aoOpenRows;a(c.nTable).addClass(this.classes.select.table),"os"===this.s.select.type&&(a(c.nTBody).on("mousedown.DTTT_Select","tr",function(b){b.shiftKey&&a(c.nTBody).css("-moz-user-select","none").one("selectstart.DTTT_Select","tr",function(){return!1})}),a(c.nTBody).on("mouseup.DTTT_Select","tr",function(b){a(c.nTBody).css("-moz-user-select","")})),a(c.nTBody).on("click.DTTT_Select",this.s.custom.sRowSelector,function(d){var e="tr"===this.nodeName.toLowerCase()?this:a(this).parents("tr")[0],f=b.s.select,g=b.s.dt.oInstance.fnGetPosition(e);if(e.parentNode==c.nTBody&&null!==c.oInstance.fnGetData(e)){if("os"==f.type)if(d.ctrlKey||d.metaKey)b.fnIsSelected(e)?b._fnRowDeselect(e,d):b._fnRowSelect(e,d);else if(d.shiftKey){var h=b.s.dt.aiDisplay.slice(),i=a.inArray(f.lastRow,h),j=a.inArray(g,h);if(0===b.fnGetSelected().length||-1===i)h.splice(a.inArray(g,h)+1,h.length);else{if(i>j){var k=j;j=i,i=k}h.splice(j+1,h.length),h.splice(0,i)}b.fnIsSelected(e)?(h.splice(a.inArray(g,h),1),b._fnRowDeselect(h,d)):b._fnRowSelect(h,d)}else b.fnIsSelected(e)&&1===b.fnGetSelected().length?b._fnRowDeselect(e,d):(b.fnSelectNone(),b._fnRowSelect(e,d));else b.fnIsSelected(e)?b._fnRowDeselect(e,d):"single"==f.type?(b.fnSelectNone(),b._fnRowSelect(e,d)):"multi"==f.type&&b._fnRowSelect(e,d);f.lastRow=g}}),c.oApi._fnCallbackReg(c,"aoRowCreatedCallback",function(d,e,f){c.aoData[f]._DTTT_selected&&a(d).addClass(b.classes.select.row)},"TableTools-SelectAll")}},_fnRowSelect:function(b,c){var d,e,f=this,g=this._fnSelectData(b),h=(0===g.length?null:g[0].nTr,[]);for(d=0,e=g.length;e>d;d++)g[d].nTr&&h.push(g[d].nTr);if(null===this.s.select.preRowSelect||this.s.select.preRowSelect.call(this,c,h,!0)){for(d=0,e=g.length;e>d;d++)g[d]._DTTT_selected=!0,g[d].nTr&&a(g[d].nTr).addClass(f.classes.select.row);null!==this.s.select.postSelected&&this.s.select.postSelected.call(this,h),TableTools._fnEventDispatch(this,"select",h,!0)}},_fnRowDeselect:function(b,c){var d,e,f=this,g=this._fnSelectData(b),h=(0===g.length?null:g[0].nTr,[]);for(d=0,e=g.length;e>d;d++)g[d].nTr&&h.push(g[d].nTr);if(null===this.s.select.preRowSelect||this.s.select.preRowSelect.call(this,c,h,!1)){for(d=0,e=g.length;e>d;d++)g[d]._DTTT_selected=!1,g[d].nTr&&a(g[d].nTr).removeClass(f.classes.select.row);null!==this.s.select.postDeselected&&this.s.select.postDeselected.call(this,h),TableTools._fnEventDispatch(this,"select",h,!1)}},_fnSelectData:function(a){var b,c,d,e=[];if(a.nodeName)b=this.s.dt.oInstance.fnGetPosition(a),e.push(this.s.dt.aoData[b]);else{if("undefined"!=typeof a.length){for(c=0,d=a.length;d>c;c++)a[c].nodeName?(b=this.s.dt.oInstance.fnGetPosition(a[c]),e.push(this.s.dt.aoData[b])):"number"==typeof a[c]?e.push(this.s.dt.aoData[a[c]]):e.push(a[c]);return e}e.push(a)}return e},_fnTextConfig:function(b,c){var d=this;null!==c.fnInit&&c.fnInit.call(this,b,c),""!==c.sToolTip&&(b.title=c.sToolTip),a(b).hover(function(){null!==c.fnMouseover&&c.fnMouseover.call(this,b,c,null)},function(){null!==c.fnMouseout&&c.fnMouseout.call(this,b,c,null)}),null!==c.fnSelect&&TableTools._fnEventListen(this,"select",function(a){c.fnSelect.call(d,b,c,a)}),a(b).click(function(a){null!==c.fnClick&&c.fnClick.call(d,b,c,null,a),null!==c.fnComplete&&c.fnComplete.call(d,b,c,null,null),d._fnCollectionHide(b,c)})},_fnHasFlash:function(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]!==c&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return!0}return!1},_fnFlashConfig:function(a,b){var c=this,d=new f.Client;null!==b.fnInit&&b.fnInit.call(this,a,b),d.setHandCursor(!0),"flash_save"==b.sAction?(d.setAction("save"),d.setCharSet("utf16le"==b.sCharSet?"UTF16LE":"UTF8"),d.setBomInc(b.bBomInc),d.setFileName(b.sFileName.replace("*",this.fnGetTitle(b)))):"flash_pdf"==b.sAction?(d.setAction("pdf"),d.setFileName(b.sFileName.replace("*",this.fnGetTitle(b)))):d.setAction("copy"),d.addEventListener("mouseOver",function(e){null!==b.fnMouseover&&b.fnMouseover.call(c,a,b,d)}),d.addEventListener("mouseOut",function(e){null!==b.fnMouseout&&b.fnMouseout.call(c,a,b,d)}),d.addEventListener("mouseDown",function(e){null!==b.fnClick&&b.fnClick.call(c,a,b,d)}),d.addEventListener("complete",function(e,f){null!==b.fnComplete&&b.fnComplete.call(c,a,b,d,f),c._fnCollectionHide(a,b)}),this._fnFlashGlue(d,a,b.sToolTip)},_fnFlashGlue:function(a,b,c){var e=this,f=b.getAttribute("id");d.getElementById(f)?a.glue(b,c):setTimeout(function(){e._fnFlashGlue(a,b,c)},100)},_fnFlashSetText:function(a,b){var c=this._fnChunkData(b,8192);a.clearText();for(var d=0,e=c.length;e>d;d++)a.appendText(c[d])},_fnColumnTargets:function(b){var c,d,e=[],f=this.s.dt,g=f.aoColumns,h=g.length;if("function"==typeof b){var i=b.call(this,f);for(c=0,d=h;d>c;c++)e.push(-1!==a.inArray(c,i)?!0:!1)}else if("object"==typeof b){for(c=0,d=h;d>c;c++)e.push(!1);for(c=0,d=b.length;d>c;c++)e[b[c]]=!0}else if("visible"==b)for(c=0,d=h;d>c;c++)e.push(g[c].bVisible?!0:!1);else if("hidden"==b)for(c=0,d=h;d>c;c++)e.push(g[c].bVisible?!1:!0);else if("sortable"==b)for(c=0,d=h;d>c;c++)e.push(g[c].bSortable?!0:!1);else for(c=0,d=h;d>c;c++)e.push(!0);return e},_fnNewline:function(a){return"auto"==a.sNewLine?navigator.userAgent.match(/Windows/)?"\r\n":"\n":a.sNewLine},_fnGetDataTablesData:function(b){var c,d,f,g,h,i,j,k=[],l="",m=this.s.dt,n=new RegExp(b.sFieldBoundary,"g"),o=this._fnColumnTargets(b.mColumns),p="undefined"!=typeof b.bSelectedOnly?b.bSelectedOnly:!1;if(b.bHeader){for(h=[],c=0,d=m.aoColumns.length;d>c;c++)o[c]&&(l=m.aoColumns[c].sTitle.replace(/\n/g," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,""),l=this._fnHtmlDecode(l),h.push(this._fnBoundData(l,b.sFieldBoundary,n)));k.push(h.join(b.sFieldSeperator))}p=!0;var q,r=this.fnGetSelectedIndexes();for(p="none"!==this.s.select.type&&p&&0!==r.length,q=p?r:e.Api?new e.Api(m).rows(b.oSelectorOpts).indexes().flatten().toArray():m.oInstance.$("tr",b.oSelectorOpts).map(function(a,b){return m.oInstance.fnGetPosition(b)}).get(),f=0,g=q.length;g>f;f++){for(j=m.aoData[q[f]].nTr,h=[],c=0,d=m.aoColumns.length;d>c;c++)if(o[c]){var s=m.oApi._fnGetCellData(m,q[f],c,"display");b.fnCellRender?l=b.fnCellRender(s,c,j,q[f])+"":"string"==typeof s?(l=s.replace(/\n/g," "),l=l.replace(/<img.*?\s+alt\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+)).*?>/gi,"$1$2$3"),l=l.replace(/<.*?>/g,"")):l=s+"",l=l.replace(/^\s+/,"").replace(/\s+$/,""),l=this._fnHtmlDecode(l),h.push(this._fnBoundData(l,b.sFieldBoundary,n))}k.push(h.join(b.sFieldSeperator)),b.bOpenRows&&(i=a.grep(m.aoOpenRows,function(a){return a.nParent===j}),1===i.length&&(l=this._fnBoundData(a("td",i[0].nTr).html(),b.sFieldBoundary,n),k.push(l)))}if(b.bFooter&&null!==m.nTFoot){for(h=[],c=0,d=m.aoColumns.length;d>c;c++)o[c]&&null!==m.aoColumns[c].nTf&&(l=m.aoColumns[c].nTf.innerHTML.replace(/\n/g," ").replace(/<.*?>/g,""),l=this._fnHtmlDecode(l),h.push(this._fnBoundData(l,b.sFieldBoundary,n)));k.push(h.join(b.sFieldSeperator))}var t=k.join(this._fnNewline(b));return t},_fnBoundData:function(a,b,c){return""===b?a:b+a.replace(c,b+b)+b},_fnChunkData:function(a,b){for(var c=[],d=a.length,e=0;d>e;e+=b)d>e+b?c.push(a.substring(e,e+b)):c.push(a.substring(e,d));return c},_fnHtmlDecode:function(a){if(-1===a.indexOf("&"))return a;var b=d.createElement("div");return a.replace(/&([^\s]*?);/g,function(a,c){return"#"===a.substr(1,1)?String.fromCharCode(Number(c.substr(1))):(b.innerHTML=a,b.childNodes[0].nodeValue)})},_fnPrintStart:function(c){var e=this,f=this.s.dt;this._fnPrintHideNodes(f.nTable),this.s.print.saveStart=f._iDisplayStart,this.s.print.saveLength=f._iDisplayLength,c.bShowAll&&(f._iDisplayStart=0,f._iDisplayLength=-1,f.oApi._fnCalculateEnd&&f.oApi._fnCalculateEnd(f),f.oApi._fnDraw(f)),(""!==f.oScroll.sX||""!==f.oScroll.sY)&&(this._fnPrintScrollStart(f),a(this.s.dt.nTable).bind("draw.DTTT_Print",function(){e._fnPrintScrollStart(f)}));var g=f.aanFeatures;for(var h in g)if("i"!=h&&"t"!=h&&1==h.length)for(var i=0,j=g[h].length;j>i;i++)this.dom.print.hidden.push({node:g[h][i],display:"block"}),g[h][i].style.display="none";a(d.body).addClass(this.classes.print.body),""!==c.sInfo&&this.fnInfo(c.sInfo,3e3),c.sMessage&&a("<div/>").addClass(this.classes.print.message).html(c.sMessage).prependTo("body"),this.s.print.saveScroll=a(b).scrollTop(),b.scrollTo(0,0),a(d).bind("keydown.DTTT",function(a){27==a.keyCode&&(a.preventDefault(),e._fnPrintEnd.call(e,a))})},_fnPrintEnd:function(c){var e=this.s.dt,f=this.s.print;this.dom.print;this._fnPrintShowNodes(),(""!==e.oScroll.sX||""!==e.oScroll.sY)&&(a(this.s.dt.nTable).unbind("draw.DTTT_Print"),this._fnPrintScrollEnd()),b.scrollTo(0,f.saveScroll),a("div."+this.classes.print.message).remove(),a(d.body).removeClass("DTTT_Print"),e._iDisplayStart=f.saveStart,e._iDisplayLength=f.saveLength,e.oApi._fnCalculateEnd&&e.oApi._fnCalculateEnd(e),e.oApi._fnDraw(e),a(d).unbind("keydown.DTTT")},_fnPrintScrollStart:function(){var b,c,d=this.s.dt,e=d.nScrollHead.getElementsByTagName("div")[0],f=(e.getElementsByTagName("table")[0],d.nTable.parentNode);b=d.nTable.getElementsByTagName("thead"),b.length>0&&d.nTable.removeChild(b[0]),null!==d.nTFoot&&(c=d.nTable.getElementsByTagName("tfoot"),c.length>0&&d.nTable.removeChild(c[0])),b=d.nTHead.cloneNode(!0),d.nTable.insertBefore(b,d.nTable.childNodes[0]),null!==d.nTFoot&&(c=d.nTFoot.cloneNode(!0),d.nTable.insertBefore(c,d.nTable.childNodes[1])),""!==d.oScroll.sX&&(d.nTable.style.width=a(d.nTable).outerWidth()+"px",f.style.width=a(d.nTable).outerWidth()+"px",f.style.overflow="visible"),""!==d.oScroll.sY&&(f.style.height=a(d.nTable).outerHeight()+"px",f.style.overflow="visible")},_fnPrintScrollEnd:function(){var a=this.s.dt,b=a.nTable.parentNode;""!==a.oScroll.sX&&(b.style.width=a.oApi._fnStringToCss(a.oScroll.sX),b.style.overflow="auto"),""!==a.oScroll.sY&&(b.style.height=a.oApi._fnStringToCss(a.oScroll.sY),b.style.overflow="auto")},_fnPrintShowNodes:function(){for(var a=this.dom.print.hidden,b=0,c=a.length;c>b;b++)a[b].node.style.display=a[b].display;a.splice(0,a.length)},_fnPrintHideNodes:function(b){for(var c=this.dom.print.hidden,d=b.parentNode,e=d.childNodes,f=0,g=e.length;g>f;f++)if(e[f]!=b&&1==e[f].nodeType){var h=a(e[f]).css("display");"none"!=h&&(c.push({node:e[f],display:h}),e[f].style.display="none")}"BODY"!=d.nodeName.toUpperCase()&&this._fnPrintHideNodes(d)}},TableTools._aInstances=[],TableTools._aListeners=[],TableTools.fnGetMasters=function(){for(var a=[],b=0,c=TableTools._aInstances.length;c>b;b++)TableTools._aInstances[b].s.master&&a.push(TableTools._aInstances[b]);return a},TableTools.fnGetInstance=function(a){"object"!=typeof a&&(a=d.getElementById(a));for(var b=0,c=TableTools._aInstances.length;c>b;b++)if(TableTools._aInstances[b].s.master&&TableTools._aInstances[b].dom.table==a)return TableTools._aInstances[b];return null},TableTools._fnEventListen=function(a,b,c){TableTools._aListeners.push({that:a,type:b,fn:c})},TableTools._fnEventDispatch=function(a,b,c,d){for(var e=TableTools._aListeners,f=0,g=e.length;g>f;f++)a.dom.table==e[f].that.dom.table&&e[f].type==b&&e[f].fn(c,d)},TableTools.buttonBase={sAction:"text",sTag:"default",sLinerTag:"default",sButtonClass:"DTTT_button_text",sButtonText:"Button text",sTitle:"",sToolTip:"",sCharSet:"utf8",bBomInc:!1,sFileName:"*.csv",sFieldBoundary:"",sFieldSeperator:"	",sNewLine:"auto",mColumns:"all",bHeader:!0,bFooter:!0,bOpenRows:!1,bSelectedOnly:!1,oSelectorOpts:c,fnMouseover:null,fnMouseout:null,fnClick:null,fnSelect:null,fnComplete:null,fnInit:null,fnCellRender:null},TableTools.BUTTONS={csv:a.extend({},TableTools.buttonBase,{sAction:"flash_save",sButtonClass:"DTTT_button_csv",sButtonText:"CSV",sFieldBoundary:'"',sFieldSeperator:",",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))}}),xls:a.extend({},TableTools.buttonBase,{sAction:"flash_save",sCharSet:"utf16le",bBomInc:!0,sButtonClass:"DTTT_button_xls",sButtonText:"Excel",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))}}),copy:a.extend({},TableTools.buttonBase,{sAction:"flash_copy",sButtonClass:"DTTT_button_copy",sButtonText:"Copy",fnClick:function(a,b,c){this.fnSetText(c,this.fnGetTableData(b))},fnComplete:function(a,b,c,d){var e=d.split("\n").length;b.bHeader&&e--,null!==this.s.dt.nTFoot&&b.bFooter&&e--;var f=1==e?"":"s";this.fnInfo("<h6>Table copied</h6><p>Copied "+e+" row"+f+" to the clipboard.</p>",1500)}}),pdf:a.extend({},TableTools.buttonBase,{sAction:"flash_pdf",sNewLine:"\n",sFileName:"*.pdf",sButtonClass:"DTTT_button_pdf",sButtonText:"PDF",sPdfOrientation:"portrait",sPdfSize:"A4",sPdfMessage:"",fnClick:function(a,b,c){this.fnSetText(c,"title:"+this.fnGetTitle(b)+"\nmessage:"+b.sPdfMessage+"\ncolWidth:"+this.fnCalcColRatios(b)+"\norientation:"+b.sPdfOrientation+"\nsize:"+b.sPdfSize+"\n--/TableToolsOpts--\n"+this.fnGetTableData(b))}}),print:a.extend({},TableTools.buttonBase,{sInfo:"<h6>Print view</h6><p>Please use your browser's print function to print this table. Press escape when finished.</p>",sMessage:null,bShowAll:!0,sToolTip:"View print view",sButtonClass:"DTTT_button_print",sButtonText:"Print",fnClick:function(a,b){this.fnPrint(!0,b)}}),text:a.extend({},TableTools.buttonBase),select:a.extend({},TableTools.buttonBase,{sButtonText:"Select button",fnSelect:function(b,c){0!==this.fnGetSelected().length?a(b).removeClass(this.classes.buttons.disabled):a(b).addClass(this.classes.buttons.disabled)},fnInit:function(b,c){a(b).addClass(this.classes.buttons.disabled)}}),select_single:a.extend({},TableTools.buttonBase,{sButtonText:"Select button",fnSelect:function(b,c){var d=this.fnGetSelected().length;1==d?a(b).removeClass(this.classes.buttons.disabled):a(b).addClass(this.classes.buttons.disabled)},fnInit:function(b,c){a(b).addClass(this.classes.buttons.disabled)}}),select_all:a.extend({},TableTools.buttonBase,{sButtonText:"Select all",fnClick:function(a,b){this.fnSelectAll()},fnSelect:function(b,c){this.fnGetSelected().length==this.s.dt.fnRecordsDisplay()?a(b).addClass(this.classes.buttons.disabled):a(b).removeClass(this.classes.buttons.disabled)}}),select_none:a.extend({},TableTools.buttonBase,{sButtonText:"Deselect all",fnClick:function(a,b){this.fnSelectNone()},fnSelect:function(b,c){0!==this.fnGetSelected().length?a(b).removeClass(this.classes.buttons.disabled):a(b).addClass(this.classes.buttons.disabled)},fnInit:function(b,c){a(b).addClass(this.classes.buttons.disabled)}}),ajax:a.extend({},TableTools.buttonBase,{sAjaxUrl:"/xhr.php",sButtonText:"Ajax button",fnClick:function(b,c){var d=this.fnGetTableData(c);a.ajax({url:c.sAjaxUrl,data:[{name:"tableData",value:d}],success:c.fnAjaxComplete,dataType:"json",type:"POST",cache:!1,error:function(){alert("Error detected when sending table data to server")}})},fnAjaxComplete:function(a){alert("Ajax complete")}}),div:a.extend({},TableTools.buttonBase,{sAction:"div",sTag:"div",sButtonClass:"DTTT_nonbutton",sButtonText:"Text button"}),collection:a.extend({},TableTools.buttonBase,{sAction:"collection",sButtonClass:"DTTT_button_collection",sButtonText:"Collection",fnClick:function(a,b){this._fnCollectionShow(a,b)}})},TableTools.buttons=TableTools.BUTTONS,TableTools.classes={container:"DTTT_container",buttons:{normal:"DTTT_button",disabled:"DTTT_disabled"},collection:{container:"DTTT_collection",background:"DTTT_collection_background",buttons:{normal:"DTTT_button",disabled:"DTTT_disabled"}},select:{table:"DTTT_selectable",row:"DTTT_selected selected"},print:{body:"DTTT_Print",info:"DTTT_print_info",message:"DTTT_PrintMessage"}},TableTools.classes_themeroller={container:"DTTT_container ui-buttonset ui-buttonset-multi",buttons:{normal:"DTTT_button ui-button ui-state-default"},collection:{container:"DTTT_collection ui-buttonset ui-buttonset-multi"}},TableTools.DEFAULTS={sSwfPath:"../swf/copy_csv_xls_pdf.swf",sRowSelect:"none",sRowSelector:"tr",sSelectedClass:null,fnPreRowSelect:null,fnRowSelected:null,fnRowDeselected:null,aButtons:["copy","csv","xls","pdf","print"],oTags:{container:"div",button:"a",liner:"span",collection:{container:"div",button:"a",liner:"span"}}},TableTools.defaults=TableTools.DEFAULTS,TableTools.prototype.CLASS="TableTools",TableTools.version="2.2.3",a.fn.dataTable.Api&&a.fn.dataTable.Api.register("tabletools()",function(){var a=null;return this.context.length>0&&(a=TableTools.fnGetInstance(this.context[0].nTable)),a}),"function"==typeof a.fn.dataTable&&"function"==typeof a.fn.dataTableExt.fnVersionCheck&&a.fn.dataTableExt.fnVersionCheck("1.9.0")?a.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInit,c=b?b.tableTools||b.oTableTools||{}:{};return new TableTools(a.oInstance,c).dom.container},cFeature:"T",sFeature:"TableTools"}):alert("Warning: TableTools requires DataTables 1.9.0 or newer - www.datatables.net/download"),a.fn.DataTable.TableTools=TableTools}(jQuery,a,b),"function"==typeof d.fn.dataTable&&"function"==typeof d.fn.dataTableExt.fnVersionCheck&&d.fn.dataTableExt.fnVersionCheck("1.9.0")?d.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b="undefined"!=typeof a.oInit.oTableTools?a.oInit.oTableTools:{},c=new TableTools(a.oInstance,b);return TableTools._aInstances.push(c),c.dom.container},cFeature:"T",sFeature:"TableTools"}):alert("Warning: TableTools 2 requires DataTables 1.9.0 or newer - www.datatables.net/download"),d.fn.dataTable.TableTools=TableTools,d.fn.DataTable.TableTools=TableTools,TableTools};"function"==typeof define&&define.amd?define(["jquery","datatables"],d):"object"==typeof exports?d(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.TableTools&&d(jQuery,jQuery.fn.dataTable)}(window,document);
+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(arguments.length>1&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c){var d={init:function(b,c){var d=this;d.$elem=a(c),d.options=a.extend({},a.fn.owlCarousel.options,d.$elem.data(),b),d.userOptions=b,d.loadContent()},loadContent:function(){function b(a){var b,c="";if("function"==typeof d.options.jsonSuccess)d.options.jsonSuccess.apply(this,[a]);else{for(b in a.owl)a.owl.hasOwnProperty(b)&&(c+=a.owl[b].item);d.$elem.html(c)}d.logIn()}var c,d=this;"function"==typeof d.options.beforeInit&&d.options.beforeInit.apply(this,[d.$elem]),"string"==typeof d.options.jsonPath?(c=d.options.jsonPath,a.getJSON(c,b)):d.logIn()},logIn:function(){var a=this;a.$elem.data("owl-originalStyles",a.$elem.attr("style")),a.$elem.data("owl-originalClasses",a.$elem.attr("class")),a.$elem.css({opacity:0}),a.orignalItems=a.options.items,a.checkBrowser(),a.wrapperWidth=0,a.checkVisible=null,a.setVars()},setVars:function(){var a=this;return 0===a.$elem.children().length?!1:(a.baseClass(),a.eventTypes(),a.$userItems=a.$elem.children(),a.itemsAmount=a.$userItems.length,a.wrapItems(),a.$owlItems=a.$elem.find(".owl-item"),a.$owlWrapper=a.$elem.find(".owl-wrapper"),a.playDirection="next",a.prevItem=0,a.prevArr=[0],a.currentItem=0,a.customEvents(),void a.onStartup())},onStartup:function(){var a=this;a.updateItems(),a.calculateAll(),a.buildControls(),a.updateControls(),a.response(),a.moveEvents(),a.stopOnHover(),a.owlStatus(),a.options.transitionStyle!==!1&&a.transitionTypes(a.options.transitionStyle),a.options.autoPlay===!0&&(a.options.autoPlay=5e3),a.play(),a.$elem.find(".owl-wrapper").css("display","block"),a.$elem.is(":visible")?a.$elem.css("opacity",1):a.watchVisibility(),a.onstartup=!1,a.eachMoveUpdate(),"function"==typeof a.options.afterInit&&a.options.afterInit.apply(this,[a.$elem])},eachMoveUpdate:function(){var a=this;a.options.lazyLoad===!0&&a.lazyLoad(),a.options.autoHeight===!0&&a.autoHeight(),a.onVisibleItems(),"function"==typeof a.options.afterAction&&a.options.afterAction.apply(this,[a.$elem])},updateVars:function(){var a=this;"function"==typeof a.options.beforeUpdate&&a.options.beforeUpdate.apply(this,[a.$elem]),a.watchVisibility(),a.updateItems(),a.calculateAll(),a.updatePosition(),a.updateControls(),a.eachMoveUpdate(),"function"==typeof a.options.afterUpdate&&a.options.afterUpdate.apply(this,[a.$elem])},reload:function(){var a=this;b.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;return a.$elem.is(":visible")!==!1?!1:(a.$elem.css({opacity:0}),b.clearInterval(a.autoPlayInterval),b.clearInterval(a.checkVisible),void(a.checkVisible=b.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),b.clearInterval(a.checkVisible))},500)))},wrapItems:function(){var a=this;a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),a.wrapperOuter=a.$elem.find(".owl-wrapper-outer"),a.$elem.css("display","block")},baseClass:function(){var a=this,b=a.$elem.hasClass(a.options.baseClass),c=a.$elem.hasClass(a.options.theme);b||a.$elem.addClass(a.options.baseClass),c||a.$elem.addClass(a.options.theme)},updateItems:function(){var b,c,d=this;if(d.options.responsive===!1)return!1;if(d.options.singleItem===!0)return d.options.items=d.orignalItems=1,d.options.itemsCustom=!1,d.options.itemsDesktop=!1,d.options.itemsDesktopSmall=!1,d.options.itemsTablet=!1,d.options.itemsTabletSmall=!1,d.options.itemsMobile=!1,!1;if(b=a(d.options.responsiveBaseWidth).width(),b>(d.options.itemsDesktop[0]||d.orignalItems)&&(d.options.items=d.orignalItems),d.options.itemsCustom!==!1)for(d.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),c=0;c<d.options.itemsCustom.length;c+=1)d.options.itemsCustom[c][0]<=b&&(d.options.items=d.options.itemsCustom[c][1]);else b<=d.options.itemsDesktop[0]&&d.options.itemsDesktop!==!1&&(d.options.items=d.options.itemsDesktop[1]),b<=d.options.itemsDesktopSmall[0]&&d.options.itemsDesktopSmall!==!1&&(d.options.items=d.options.itemsDesktopSmall[1]),b<=d.options.itemsTablet[0]&&d.options.itemsTablet!==!1&&(d.options.items=d.options.itemsTablet[1]),b<=d.options.itemsTabletSmall[0]&&d.options.itemsTabletSmall!==!1&&(d.options.items=d.options.itemsTabletSmall[1]),b<=d.options.itemsMobile[0]&&d.options.itemsMobile!==!1&&(d.options.items=d.options.itemsMobile[1]);d.options.items>d.itemsAmount&&d.options.itemsScaleUp===!0&&(d.options.items=d.itemsAmount)},response:function(){var c,d,e=this;return e.options.responsive!==!0?!1:(d=a(b).width(),e.resizer=function(){a(b).width()!==d&&(e.options.autoPlay!==!1&&b.clearInterval(e.autoPlayInterval),b.clearTimeout(c),c=b.setTimeout(function(){d=a(b).width(),e.updateVars()},e.options.responsiveRefreshRate))},void a(b).resize(e.resizer))},updatePosition:function(){var a=this;a.jumpTo(a.currentItem),a.options.autoPlay!==!1&&a.checkAp()},appendItemsSizes:function(){var b=this,c=0,d=b.itemsAmount-b.options.items;b.$owlItems.each(function(e){var f=a(this);f.css({width:b.itemWidth}).data("owl-item",Number(e)),(e%b.options.items===0||e===d)&&(e>d||(c+=1)),f.data("owl-roundPages",c)})},appendWrapperSizes:function(){var a=this,b=a.$owlItems.length*a.itemWidth;a.$owlWrapper.css({width:2*b,left:0}),a.appendItemsSizes()},calculateAll:function(){var a=this;a.calculateWidth(),a.appendWrapperSizes(),a.loops(),a.max()},calculateWidth:function(){var a=this;a.itemWidth=Math.round(a.$elem.width()/a.options.items)},max:function(){var a=this,b=-1*(a.itemsAmount*a.itemWidth-a.options.items*a.itemWidth);return a.options.items>a.itemsAmount?(a.maximumItem=0,b=0,a.maximumPixels=0):(a.maximumItem=a.itemsAmount-a.options.items,a.maximumPixels=b),b},min:function(){return 0},loops:function(){var b,c,d,e=this,f=0,g=0;for(e.positionsInArray=[0],e.pagesInArray=[],b=0;b<e.itemsAmount;b+=1)g+=e.itemWidth,e.positionsInArray.push(-g),e.options.scrollPerPage===!0&&(c=a(e.$owlItems[b]),d=c.data("owl-roundPages"),d!==f&&(e.pagesInArray[f]=e.positionsInArray[b],f=d))},buildControls:function(){var b=this;(b.options.navigation===!0||b.options.pagination===!0)&&(b.owlControls=a('<div class="owl-controls"/>').toggleClass("clickable",!b.browser.isTouch).appendTo(b.$elem)),b.options.pagination===!0&&b.buildPagination(),b.options.navigation===!0&&b.buildButtons()},buildButtons:function(){var b=this,c=a('<div class="owl-buttons"/>');b.owlControls.append(c),b.buttonPrev=a("<div/>",{"class":"owl-prev",html:b.options.navigationText[0]||""}),b.buttonNext=a("<div/>",{"class":"owl-next",html:b.options.navigationText[1]||""}),c.append(b.buttonPrev).append(b.buttonNext),c.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()}),c.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(c){c.preventDefault(),a(this).hasClass("owl-next")?b.next():b.prev()})},buildPagination:function(){var b=this;b.paginationWrapper=a('<div class="owl-pagination"/>'),b.owlControls.append(b.paginationWrapper),b.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(c){c.preventDefault(),Number(a(this).data("owl-page"))!==b.currentItem&&b.goTo(Number(a(this).data("owl-page")),!0)})},updatePagination:function(){var b,c,d,e,f,g,h=this;if(h.options.pagination===!1)return!1;for(h.paginationWrapper.html(""),b=0,c=h.itemsAmount-h.itemsAmount%h.options.items,e=0;e<h.itemsAmount;e+=1)e%h.options.items===0&&(b+=1,c===e&&(d=h.itemsAmount-h.options.items),f=a("<div/>",{"class":"owl-page"}),g=a("<span></span>",{text:h.options.paginationNumbers===!0?b:"","class":h.options.paginationNumbers===!0?"owl-numbers":""}),f.append(g),f.data("owl-page",c===e?d:e),f.data("owl-roundPages",b),h.paginationWrapper.append(f));h.checkPagination()},checkPagination:function(){var b=this;return b.options.pagination===!1?!1:void b.paginationWrapper.find(".owl-page").each(function(){a(this).data("owl-roundPages")===a(b.$owlItems[b.currentItem]).data("owl-roundPages")&&(b.paginationWrapper.find(".owl-page").removeClass("active"),a(this).addClass("active"))})},checkNavigation:function(){var a=this;return a.options.navigation===!1?!1:void(a.options.rewindNav===!1&&(0===a.currentItem&&0===a.maximumItem?(a.buttonPrev.addClass("disabled"),a.buttonNext.addClass("disabled")):0===a.currentItem&&0!==a.maximumItem?(a.buttonPrev.addClass("disabled"),a.buttonNext.removeClass("disabled")):a.currentItem===a.maximumItem?(a.buttonPrev.removeClass("disabled"),a.buttonNext.addClass("disabled")):0!==a.currentItem&&a.currentItem!==a.maximumItem&&(a.buttonPrev.removeClass("disabled"),a.buttonNext.removeClass("disabled"))))},updateControls:function(){var a=this;a.updatePagination(),a.checkNavigation(),a.owlControls&&(a.options.items>=a.itemsAmount?a.owlControls.hide():a.owlControls.show())},destroyControls:function(){var a=this;a.owlControls&&a.owlControls.remove()},next:function(a){var b=this;if(b.isTransition)return!1;if(b.currentItem+=b.options.scrollPerPage===!0?b.options.items:1,b.currentItem>b.maximumItem+(b.options.scrollPerPage===!0?b.options.items-1:0)){if(b.options.rewindNav!==!0)return b.currentItem=b.maximumItem,!1;b.currentItem=0,a="rewind"}b.goTo(b.currentItem,a)},prev:function(a){var b=this;if(b.isTransition)return!1;if(b.options.scrollPerPage===!0&&b.currentItem>0&&b.currentItem<b.options.items?b.currentItem=0:b.currentItem-=b.options.scrollPerPage===!0?b.options.items:1,b.currentItem<0){if(b.options.rewindNav!==!0)return b.currentItem=0,!1;b.currentItem=b.maximumItem,a="rewind"}b.goTo(b.currentItem,a)},goTo:function(a,c,d){var e,f=this;return f.isTransition?!1:("function"==typeof f.options.beforeMove&&f.options.beforeMove.apply(this,[f.$elem]),a>=f.maximumItem?a=f.maximumItem:0>=a&&(a=0),f.currentItem=f.owl.currentItem=a,f.options.transitionStyle!==!1&&"drag"!==d&&1===f.options.items&&f.browser.support3d===!0?(f.swapSpeed(0),f.browser.support3d===!0?f.transition3d(f.positionsInArray[a]):f.css2slide(f.positionsInArray[a],1),f.afterGo(),f.singleItemTransition(),!1):(e=f.positionsInArray[a],f.browser.support3d===!0?(f.isCss3Finish=!1,c===!0?(f.swapSpeed("paginationSpeed"),b.setTimeout(function(){f.isCss3Finish=!0},f.options.paginationSpeed)):"rewind"===c?(f.swapSpeed(f.options.rewindSpeed),b.setTimeout(function(){f.isCss3Finish=!0},f.options.rewindSpeed)):(f.swapSpeed("slideSpeed"),b.setTimeout(function(){f.isCss3Finish=!0},f.options.slideSpeed)),f.transition3d(e)):c===!0?f.css2slide(e,f.options.paginationSpeed):"rewind"===c?f.css2slide(e,f.options.rewindSpeed):f.css2slide(e,f.options.slideSpeed),void f.afterGo()))},jumpTo:function(a){var b=this;"function"==typeof b.options.beforeMove&&b.options.beforeMove.apply(this,[b.$elem]),a>=b.maximumItem||-1===a?a=b.maximumItem:0>=a&&(a=0),b.swapSpeed(0),b.browser.support3d===!0?b.transition3d(b.positionsInArray[a]):b.css2slide(b.positionsInArray[a],1),b.currentItem=b.owl.currentItem=a,b.afterGo()},afterGo:function(){var a=this;a.prevArr.push(a.currentItem),a.prevItem=a.owl.prevItem=a.prevArr[a.prevArr.length-2],a.prevArr.shift(0),a.prevItem!==a.currentItem&&(a.checkPagination(),a.checkNavigation(),a.eachMoveUpdate(),a.options.autoPlay!==!1&&a.checkAp()),"function"==typeof a.options.afterMove&&a.prevItem!==a.currentItem&&a.options.afterMove.apply(this,[a.$elem])},stop:function(){var a=this;a.apStatus="stop",b.clearInterval(a.autoPlayInterval)},checkAp:function(){var a=this;"stop"!==a.apStatus&&a.play()},play:function(){var a=this;return a.apStatus="play",a.options.autoPlay===!1?!1:(b.clearInterval(a.autoPlayInterval),void(a.autoPlayInterval=b.setInterval(function(){a.next(!0)},a.options.autoPlay)))},swapSpeed:function(a){var b=this;"slideSpeed"===a?b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)):"paginationSpeed"===a?b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)):"string"!=typeof a&&b.$owlWrapper.css(b.addCssSpeed(a))},addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){var b=this;b.$owlWrapper.css(b.doTranslate(a))},css2move:function(a){var b=this;b.$owlWrapper.css({left:a})},css2slide:function(a,b){var c=this;c.isCssFinish=!1,c.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||c.options.slideSpeed,complete:function(){c.isCssFinish=!0}})},checkBrowser:function(){var a,d,e,f,g=this,h="translate3d(0px, 0px, 0px)",i=c.createElement("div");i.style.cssText="  -moz-transform:"+h+"; -ms-transform:"+h+"; -o-transform:"+h+"; -webkit-transform:"+h+"; transform:"+h,a=/translate3d\(0px, 0px, 0px\)/g,d=i.style.cssText.match(a),e=null!==d&&1===d.length,f="ontouchstart"in b||b.navigator.msMaxTouchPoints,g.browser={support3d:e,isTouch:f}},moveEvents:function(){var a=this;(a.options.mouseDrag!==!1||a.options.touchDrag!==!1)&&(a.gestures(),a.disabledEvents())},eventTypes:function(){var a=this,b=["s","e","x"];a.ev_types={},a.options.mouseDrag===!0&&a.options.touchDrag===!0?b=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:a.options.mouseDrag===!1&&a.options.touchDrag===!0?b=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:a.options.mouseDrag===!0&&a.options.touchDrag===!1&&(b=["mousedown.owl","mousemove.owl","mouseup.owl"]),a.ev_types.start=b[0],a.ev_types.move=b[1],a.ev_types.end=b[2]},disabledEvents:function(){var b=this;b.$elem.on("dragstart.owl",function(a){a.preventDefault()}),b.$elem.on("mousedown.disableTextSelect",function(b){return a(b.target).is("input, textarea, select, option")})},gestures:function(){function d(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function e(b){"on"===b?(a(c).on(i.ev_types.move,g),a(c).on(i.ev_types.end,h)):"off"===b&&(a(c).off(i.ev_types.move),a(c).off(i.ev_types.end))}function f(c){var f,g=c.originalEvent||c||b.event;if(3===g.which)return!1;if(!(i.itemsAmount<=i.options.items)){if(i.isCssFinish===!1&&!i.options.dragBeforeAnimFinish)return!1;if(i.isCss3Finish===!1&&!i.options.dragBeforeAnimFinish)return!1;i.options.autoPlay!==!1&&b.clearInterval(i.autoPlayInterval),i.browser.isTouch===!0||i.$owlWrapper.hasClass("grabbing")||i.$owlWrapper.addClass("grabbing"),i.newPosX=0,i.newRelativeX=0,a(this).css(i.removeTransition()),f=a(this).position(),j.relativePos=f.left,j.offsetX=d(g).x-f.left,j.offsetY=d(g).y-f.top,e("on"),j.sliding=!1,j.targetElement=g.target||g.srcElement}}function g(e){var f,g,h=e.originalEvent||e||b.event;i.newPosX=d(h).x-j.offsetX,i.newPosY=d(h).y-j.offsetY,i.newRelativeX=i.newPosX-j.relativePos,"function"==typeof i.options.startDragging&&j.dragging!==!0&&0!==i.newRelativeX&&(j.dragging=!0,i.options.startDragging.apply(i,[i.$elem])),(i.newRelativeX>8||i.newRelativeX<-8)&&i.browser.isTouch===!0&&(void 0!==h.preventDefault?h.preventDefault():h.returnValue=!1,j.sliding=!0),(i.newPosY>10||i.newPosY<-10)&&j.sliding===!1&&a(c).off("touchmove.owl"),f=function(){return i.newRelativeX/5},g=function(){return i.maximumPixels+i.newRelativeX/5},i.newPosX=Math.max(Math.min(i.newPosX,f()),g()),i.browser.support3d===!0?i.transition3d(i.newPosX):i.css2move(i.newPosX)}function h(c){var d,f,g,h=c.originalEvent||c||b.event;h.target=h.target||h.srcElement,j.dragging=!1,i.browser.isTouch!==!0&&i.$owlWrapper.removeClass("grabbing"),i.newRelativeX<0?i.dragDirection=i.owl.dragDirection="left":i.dragDirection=i.owl.dragDirection="right",0!==i.newRelativeX&&(d=i.getNewPosition(),i.goTo(d,!1,"drag"),j.targetElement===h.target&&i.browser.isTouch!==!0&&(a(h.target).on("click.disable",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.disable")}),f=a._data(h.target,"events").click,g=f.pop(),f.splice(0,0,g))),e("off")}var i=this,j={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};i.isCssFinish=!0,i.$elem.on(i.ev_types.start,".owl-wrapper",f)},getNewPosition:function(){var a=this,b=a.closestItem();return b>a.maximumItem?(a.currentItem=a.maximumItem,b=a.maximumItem):a.newPosX>=0&&(b=0,a.currentItem=0),b},closestItem:function(){var b=this,c=b.options.scrollPerPage===!0?b.pagesInArray:b.positionsInArray,d=b.newPosX,e=null;return a.each(c,function(f,g){d-b.itemWidth/20>c[f+1]&&d-b.itemWidth/20<g&&"left"===b.moveDirection()?(e=g,b.options.scrollPerPage===!0?b.currentItem=a.inArray(e,b.positionsInArray):b.currentItem=f):d+b.itemWidth/20<g&&d+b.itemWidth/20>(c[f+1]||c[f]-b.itemWidth)&&"right"===b.moveDirection()&&(b.options.scrollPerPage===!0?(e=c[f+1]||c[c.length-1],b.currentItem=a.inArray(e,b.positionsInArray)):(e=c[f+1],b.currentItem=f+1))}),b.currentItem},moveDirection:function(){var a,b=this;return b.newRelativeX<0?(a="right",b.playDirection="next"):(a="left",b.playDirection="prev"),a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()}),a.$elem.on("owl.prev",function(){a.prev()}),a.$elem.on("owl.play",function(b,c){a.options.autoPlay=c,a.play(),a.hoverStatus="play"}),a.$elem.on("owl.stop",function(){a.stop(),a.hoverStatus="stop"}),a.$elem.on("owl.goTo",function(b,c){a.goTo(c)}),a.$elem.on("owl.jumpTo",function(b,c){a.jumpTo(c)})},stopOnHover:function(){var a=this;a.options.stopOnHover===!0&&a.browser.isTouch!==!0&&a.options.autoPlay!==!1&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var b,c,d,e,f,g=this;if(g.options.lazyLoad===!1)return!1;for(b=0;b<g.itemsAmount;b+=1)c=a(g.$owlItems[b]),"loaded"!==c.data("owl-loaded")&&(d=c.data("owl-item"),e=c.find(".lazyOwl"),"string"==typeof e.data("src")?(void 0===c.data("owl-loaded")&&(e.hide(),c.addClass("loading").data("owl-loaded","checked")),f=g.options.lazyFollow===!0?d>=g.currentItem:!0,f&&d<g.currentItem+g.options.items&&e.length&&g.lazyPreload(c,e)):c.data("owl-loaded","loaded"))},lazyPreload:function(a,c){function d(){a.data("owl-loaded","loaded").removeClass("loading"),c.removeAttr("data-src"),"fade"===g.options.lazyEffect?c.fadeIn(400):c.show(),"function"==typeof g.options.afterLazyLoad&&g.options.afterLazyLoad.apply(this,[g.$elem])}function e(){h+=1,g.completeImg(c.get(0))||f===!0?d():100>=h?b.setTimeout(e,100):d()}var f,g=this,h=0;"DIV"===c.prop("tagName")?(c.css("background-image","url("+c.data("src")+")"),f=!0):c[0].src=c.data("src"),e()},autoHeight:function(){function c(){var c=a(f.$owlItems[f.currentItem]).height();f.wrapperOuter.css("height",c+"px"),f.wrapperOuter.hasClass("autoHeight")||b.setTimeout(function(){f.wrapperOuter.addClass("autoHeight")},0)}function d(){e+=1,f.completeImg(g.get(0))?c():100>=e?b.setTimeout(d,100):f.wrapperOuter.css("height","")}var e,f=this,g=a(f.$owlItems[f.currentItem]).find("img");void 0!==g.get(0)?(e=0,d()):c()},completeImg:function(a){var b;return a.complete?(b=typeof a.naturalWidth,"undefined"!==b&&0===a.naturalWidth?!1:!0):!1},onVisibleItems:function(){var b,c=this;for(c.options.addClassActive===!0&&c.$owlItems.removeClass("active"),c.visibleItems=[],b=c.currentItem;b<c.currentItem+c.options.items;b+=1)c.visibleItems.push(b),c.options.addClassActive===!0&&a(c.$owlItems[b]).addClass("active");c.owl.visibleItems=c.visibleItems},transitionTypes:function(a){var b=this;b.outClass="owl-"+a+"-out",b.inClass="owl-"+a+"-in"},singleItemTransition:function(){function a(a){return{position:"relative",left:a+"px"}}var b=this,c=b.outClass,d=b.inClass,e=b.$owlItems.eq(b.currentItem),f=b.$owlItems.eq(b.prevItem),g=Math.abs(b.positionsInArray[b.currentItem])+b.positionsInArray[b.prevItem],h=Math.abs(b.positionsInArray[b.currentItem])+b.itemWidth/2,i="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";b.isTransition=!0,b.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":h+"px","-moz-perspective-origin":h+"px","perspective-origin":h+"px"}),f.css(a(g,10)).addClass(c).on(i,function(){b.endPrev=!0,f.off(i),b.clearTransStyle(f,c)}),e.addClass(d).on(i,function(){b.endCurrent=!0,e.off(i),b.clearTransStyle(e,d)})},clearTransStyle:function(a,b){var c=this;a.css({position:"",left:""}).removeClass(b),c.endPrev&&c.endCurrent&&(c.$owlWrapper.removeClass("owl-origin"),c.endPrev=!1,c.endCurrent=!1,c.isTransition=!1)},owlStatus:function(){var a=this;a.owl={userOptions:a.userOptions,baseElement:a.$elem,userItems:a.$userItems,owlItems:a.$owlItems,currentItem:a.currentItem,prevItem:a.prevItem,visibleItems:a.visibleItems,isTouch:a.browser.isTouch,browser:a.browser,dragDirection:a.dragDirection}},clearEvents:function(){var d=this;d.$elem.off(".owl owl mousedown.disableTextSelect"),a(c).off(".owl owl"),a(b).off("resize",d.resizer)},unWrap:function(){var a=this;0!==a.$elem.children().length&&(a.$owlWrapper.unwrap(),a.$userItems.unwrap().unwrap(),a.owlControls&&a.owlControls.remove()),a.clearEvents(),a.$elem.attr("style",a.$elem.data("owl-originalStyles")||"").attr("class",a.$elem.data("owl-originalClasses"))},destroy:function(){var a=this;a.stop(),b.clearInterval(a.checkVisible),a.unWrap(),a.$elem.removeData()},reinit:function(b){var c=this,d=a.extend({},c.userOptions,b);c.unWrap(),c.init(d,c.$elem)},addItem:function(a,b){var c,d=this;return a?0===d.$elem.children().length?(d.$elem.append(a),d.setVars(),!1):(d.unWrap(),c=void 0===b||-1===b?-1:b,c>=d.$userItems.length||-1===c?d.$userItems.eq(-1).after(a):d.$userItems.eq(c).before(a),void d.setVars()):!1},removeItem:function(a){var b,c=this;return 0===c.$elem.children().length?!1:(b=void 0===a||-1===a?-1:a,c.unWrap(),c.$userItems.eq(b).remove(),void c.setVars())}};a.fn.owlCarousel=function(b){return this.each(function(){if(a(this).data("owl-init")===!0)return!1;a(this).data("owl-init",!0);var c=Object.create(d);c.init(b,this),a.data(this,"owlCarousel",c)})},a.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);
$(document).ready(function(){$(".owl-carousel-1").owlCarousel({lazyLoad:!0,items:4,navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"]}),$(".owl-carousel-2").owlCarousel({lazyLoad:!0,itemsCustom:[[0,2],[450,4],[600,7],[700,9],[1e3,10],[1200,12],[1400,13],[1600,15]],navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"]}),$(".owl-carousel-3").owlCarousel({lazyLoad:!0,autoPlay:3e3,items:2,stopOnHover:!0,navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"],paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!1,autoHeight:!0,transitionStyle:"goDown"}),$(".owl-carousel-4").owlCarousel({lazyLoad:!0,autoPlay:3e3,items:2,stopOnHover:!0,navigation:!1,paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!1,autoHeight:!0,pagination:!1,transitionStyle:"goDown"}),$(".owl-carousel-5").owlCarousel({lazyLoad:!0,autoPlay:3e3,items:3,stopOnHover:!0,navigation:!1,paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!1,autoHeight:!0,pagination:!1,transitionStyle:"goDown"}),$(".next").click(function(){owl.trigger("owl.next")}),$(".prev").click(function(){owl.trigger("owl.prev")}),$(".owl-slider-1").owlCarousel({lazyLoad:!0,autoPlay:3e3,stopOnHover:!0,navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"],paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!0,transitionStyle:"goDown"}),$(".owl-slider-2").owlCarousel({lazyLoad:!0,autoPlay:3e3,stopOnHover:!0,navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"],paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!0,transitionStyle:"fade"}),$(".owl-slider-3").owlCarousel({lazyLoad:!0,autoPlay:3e3,stopOnHover:!0,navigation:!1,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"],paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!1}),$(".owl-slider-4").owlCarousel({lazyLoad:!0,autoPlay:3e3,stopOnHover:!0,navigation:!0,navigationText:["<i class='glyph-icon icon-angle-left'></i>","<i class='glyph-icon icon-angle-right'></i>"],paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!1}),$(".owl-slider-5").owlCarousel({lazyLoad:!0,autoPlay:3e3,stopOnHover:!0,navigation:!1,paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!0,transitionStyle:"goDown"})});
function progress(a,b){var c=a*b.width()/100;b.find(".progressbar-value").animate({width:c},1200)}$(document).on("ready",function(){$(".progressbar").each(function(){var a=$(this),b=$(this).attr("data-value");progress(b,a)})}),$(function(){$("#header-right, .updateEasyPieChart, .complete-user-profile, #progress-dropdown, .progress-box").hover(function(){$(".progressbar").each(function(){var a=$(this),b=$(this).attr("data-value");progress(b,a)})})});
+ function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", "focus" == b.type)
    })
}(jQuery);
!function(a){a.fn.simpleCheckbox=function(b){var c={newElementClass:"switch-toggle",activeElementClass:"switch-on"},b=a.extend(c,b);this.each(function(){var c=a(this),d=a("<div/>",{id:"#"+c.attr("id"),"class":b.newElementClass,style:"display: block;"}).insertAfter(this);if(c.is(":checked")&&d.addClass(b.activeElementClass),c.hide(),a("[for="+c.attr("id")+"]").length){var e=a("[for="+c.attr("id")+"]");e.click(function(){return d.trigger("click"),!1})}d.click(function(){var c=a(this);return c.hasClass(b.activeElementClass)?(c.removeClass(b.activeElementClass),a(c.attr("id")).attr("checked",!1)):(c.addClass(b.activeElementClass),a(c.attr("id")).attr("checked",!0)),!1})})}}(jQuery);
!function(a){a.easyPieChart=function(b,c){var d,e,f,g,h,i,j,k,l=this;return this.el=b,this.$el=a(b),this.$el.data("easyPieChart",this),this.init=function(){var b,d;return l.options=a.extend({},a.easyPieChart.defaultOptions,c),b=parseInt(l.$el.data("percent"),10),l.percentage=0,l.canvas=a("<canvas width='"+l.options.size+"' height='"+l.options.size+"'></canvas>").get(0),l.$el.append(l.canvas),"undefined"!=typeof G_vmlCanvasManager&&null!==G_vmlCanvasManager&&G_vmlCanvasManager.initElement(l.canvas),l.ctx=l.canvas.getContext("2d"),window.devicePixelRatio>1&&(d=window.devicePixelRatio,a(l.canvas).css({width:l.options.size,height:l.options.size}),l.canvas.width*=d,l.canvas.height*=d,l.ctx.scale(d,d)),l.ctx.translate(l.options.size/2,l.options.size/2),l.ctx.rotate(l.options.rotate*Math.PI/180),l.$el.addClass("easyPieChart"),l.$el.css({width:l.options.size,height:l.options.size,lineHeight:""+l.options.size+"px"}),l.update(b),l},this.update=function(a){return a=parseFloat(a)||0,l.options.animate===!1?f(a):e(l.percentage,a),l},j=function(){var a,b,c;for(l.ctx.fillStyle=l.options.scaleColor,l.ctx.lineWidth=1,c=[],a=b=0;24>=b;a=++b)c.push(d(a));return c},d=function(a){var b;b=a%6===0?0:.017*l.options.size,l.ctx.save(),l.ctx.rotate(a*Math.PI/12),l.ctx.fillRect(l.options.size/2-b,0,.05*-l.options.size+b,1),l.ctx.restore()},k=function(){var a;a=l.options.size/2-l.options.lineWidth/2,l.options.scaleColor!==!1&&(a-=.08*l.options.size),l.ctx.beginPath(),l.ctx.arc(0,0,a,0,2*Math.PI,!0),l.ctx.closePath(),l.ctx.strokeStyle=l.options.trackColor,l.ctx.lineWidth=l.options.lineWidth,l.ctx.stroke()},i=function(){l.options.scaleColor!==!1&&j(),l.options.trackColor!==!1&&k()},f=function(b){var c;i(),l.ctx.strokeStyle=a.isFunction(l.options.barColor)?l.options.barColor(b):l.options.barColor,l.ctx.lineCap=l.options.lineCap,l.ctx.lineWidth=l.options.lineWidth,c=l.options.size/2-l.options.lineWidth/2,l.options.scaleColor!==!1&&(c-=.08*l.options.size),l.ctx.save(),l.ctx.rotate(-Math.PI/2),l.ctx.beginPath(),l.ctx.arc(0,0,c,0,2*Math.PI*b/100,!1),l.ctx.stroke(),l.ctx.restore()},h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}(),e=function(a,b){var c,d;l.options.onStart.call(l),l.percentage=b,d=Date.now(),c=function(){var e,j;return j=Date.now()-d,j<l.options.animate&&h(c),l.ctx.clearRect(-l.options.size/2,-l.options.size/2,l.options.size,l.options.size),i.call(l),e=[g(j,a,b-a,l.options.animate)],l.options.onStep.call(l,e),f.call(l,e),j>=l.options.animate?l.options.onStop.call(l):void 0},h(c)},g=function(a,b,c,d){var e,f;return e=function(a){return Math.pow(a,2)},f=function(a){return 1>a?e(a):2-e(a/2*-2+2)},a/=d/2,c/2*f(a)+b},this.init()},a.easyPieChart.defaultOptions={barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:"#dfe0e0",lineCap:"round",rotate:0,size:110,lineWidth:3,animate:!1,onStart:a.noop,onStop:a.noop,onStep:a.noop},a.fn.easyPieChart=function(b){return a.each(this,function(c,d){var e,f;return e=a(d),e.data("easyPieChart")?void 0:(f=a.extend({},b,e.data()),e.data("easyPieChart",new a.easyPieChart(d,f)))})}}(jQuery);
var initPieChart=function(){$(".chart").easyPieChart({barColor:function(a){return a/=100,"rgb("+Math.round(254*(1-a))+", "+Math.round(255*a)+", 0)"},animate:1e3,scaleColor:"#ccc",lineWidth:3,size:100,lineCap:"cap",onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-home").easyPieChart({barColor:"rgba(255,255,255,0.5)",trackColor:"rgba(255,255,255,0.1)",animate:1e3,scaleColor:"rgba(255,255,255,0.3)",lineWidth:3,size:100,lineCap:"cap",onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-alt").easyPieChart({barColor:function(a){return a/=100,"rgb("+Math.round(255*(1-a))+", "+Math.round(255*a)+", 0)"},trackColor:"#333",scaleColor:!1,lineCap:"butt",rotate:-90,lineWidth:20,animate:1500,onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-alt-1").easyPieChart({barColor:function(a){return a/=100,"rgb("+Math.round(255*(1-a))+", "+Math.round(255*a)+", 0)"},trackColor:"#e1ecf1",scaleColor:"#c4d7e0",lineCap:"cap",rotate:-90,lineWidth:10,size:80,animate:2500,onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-alt-2").easyPieChart({barColor:function(a){return a/=100,"rgb("+Math.round(255*(1-a))+", "+Math.round(255*a)+", 0)"},trackColor:"#fff",scaleColor:!1,lineCap:"butt",rotate:-90,lineWidth:4,size:50,animate:1500,onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-alt-3").easyPieChart({barColor:function(a){return a/=100,"rgb("+Math.round(255*(1-a))+", "+Math.round(255*a)+", 0)"},trackColor:"#333",scaleColor:!0,lineCap:"butt",rotate:-90,lineWidth:4,size:50,animate:1500,onStep:function(a){this.$el.find("span").text(~~a)}}),$(".chart-alt-10").easyPieChart({barColor:"rgba(255,255,255,255.4)",trackColor:"rgba(255,255,255,0.1)",scaleColor:"transparent",lineCap:"round",rotate:-90,lineWidth:4,size:100,animate:2500,onStep:function(a){this.$el.find("span").text(~~a)}}),$(".updateEasyPieChart").on("click",function(a){a.preventDefault(),$(".chart-home, .chart, .chart-alt, .chart-alt-1, .chart-alt-2, .chart-alt-3, .chart-alt-10").each(function(){$(this).data("easyPieChart").update(Math.round(100*Math.random()))})})};$(document).ready(function(){initPieChart()});
!function(){"use strict";var a="undefined"!=typeof module&&module.exports,b="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,c=function(){for(var a,b,c=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],d=0,e=c.length,f={};e>d;d++)if(a=c[d],a&&a[1]in document){for(d=0,b=a.length;b>d;d++)f[c[0][d]]=a[d];return f}return!1}(),d={request:function(a){var d=c.requestFullscreen;a=a||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[d]():a[d](b&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[c.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){},onerror:function(){},raw:c};return c?(Object.defineProperties(d,{isFullscreen:{get:function(){return!!document[c.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[c.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[c.fullscreenEnabled]}}}),document.addEventListener(c.fullscreenchange,function(a){d.onchange.call(d,a)}),document.addEventListener(c.fullscreenerror,function(a){d.onerror.call(d,a)}),void(a?module.exports=d:window.screenfull=d)):void(a?module.exports=!1:window.screenfull=!1)}();
! function(a) {
    function b(a) {
        return "undefined" == typeof a.which ? !0 : "number" == typeof a.which && a.which > 0 ? !a.ctrlKey && !a.metaKey && !a.altKey && 8 != a.which && 9 != a.which : !1
    }
    a.expr[":"].notmdproc = function(b) {
        return a(b).data("mdproc") ? !1 : !0
    }, a.material = {
        options: {
            input: !1,
            ripples: !0,
            checkbox: !1,
            togglebutton: !1,
            radio: !1,
            arrive: !1,
            autofill: !1,
            withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple"].join(","),
            inputElements: "input.form-control, textarea.form-control, select.form-control",
            checkboxElements: ".checkbox > label > input[type=checkbox]",
            togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
            radioElements: ".radio > label > input[type=radio]"
        },
        checkbox: function(b) {
            a(b ? b : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class=ripple></span><span class=check></span>")
        },
        togglebutton: function(b) {
            a(b ? b : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class=toggle></span>")
        },
        radio: function(b) {
            a(b ? b : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class=circle></span><span class=check></span>")
        },
        input: function(c) {
            a(c ? c : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                var b = a(this);
                if (a(this).attr("data-hint") || b.hasClass("floating-label")) {
                    if (b.wrap("<div class=form-control-wrapper></div>"), b.after("<span class=material-input></span>"), b.hasClass("floating-label")) {
                        var c = b.attr("placeholder");
                        b.attr("placeholder", null).removeClass("floating-label"), b.after("<div class=floating-label>" + c + "</div>")
                    }
                    if (b.attr("data-hint") && b.after("<div class=hint>" + b.attr("data-hint") + "</div>"), (null === b.val() || "undefined" == b.val() || "" === b.val()) && b.addClass("empty"), b.parent().next().is("[type=file]")) {
                        b.parent().addClass("fileinput");
                        var d = b.parent().next().detach();
                        b.after(d)
                    }
                }
            }), a(document).on("change", ".checkbox input[type=checkbox]", function() {
                a(this).blur()
            }).on("keydown paste", ".form-control", function(c) {
                b(c) && a(this).removeClass("empty")
            }).on("keyup change", ".form-control", function() {
                var b = a(this);
                "" === b.val() && b[0].checkValidity() ? b.addClass("empty") : b.removeClass("empty")
            }).on("focus", ".form-control-wrapper.fileinput", function() {
                a(this).find("input").addClass("focus")
            }).on("blur", ".form-control-wrapper.fileinput", function() {
                a(this).find("input").removeClass("focus")
            }).on("change", ".form-control-wrapper.fileinput [type=file]", function() {
                var b = "";
                a.each(a(this)[0].files, function(a, c) {
                    b += c.name + ", "
                }), b = b.substring(0, b.length - 2), b ? a(this).prev().removeClass("empty") : a(this).prev().addClass("empty"), a(this).prev().val(b)
            })
        },
        ripples: function(b) {
            a(b ? b : this.options.withRipples).ripples()
        },
        autofill: function() {
            var b = setInterval(function() {
                a("input[type!=checkbox]").each(function() {
                    a(this).val() && a(this).val() !== a(this).attr("value") && a(this).trigger("change")
                })
            }, 100);
            setTimeout(function() {
                clearInterval(b)
            }, 1e4);
            var c;
            a(document).on("focus", "input", function() {
                var b = a(this).parents("form").find("input").not("[type=file]");
                c = setInterval(function() {
                    b.each(function() {
                        a(this).val() !== a(this).attr("value") && a(this).trigger("change")
                    })
                }, 100)
            }).on("blur", "input", function() {
                clearInterval(c)
            })
        },
        init: function() {
            a.fn.ripples && this.options.ripples && this.ripples(), this.options.input && this.input(), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && this.autofill(), document.arrive && this.options.arrive && (a.fn.ripples && this.options.ripples && a(document).arrive(this.options.withRipples, function() {
                a.material.ripples(a(this))
            }), this.options.input && a(document).arrive(this.options.inputElements, function() {
                a.material.input(a(this))
            }), this.options.checkbox && a(document).arrive(this.options.checkboxElements, function() {
                a.material.checkbox(a(this))
            }), this.options.radio && a(document).arrive(this.options.radioElements, function() {
                a.material.radio(a(this))
            }), this.options.togglebutton && a(document).arrive(this.options.togglebuttonElements, function() {
                a.material.togglebutton(a(this))
            }))
        }
    }
}(jQuery);
! function(a, b, c, d) {
    "use strict";

    function e(b, c) {
        g = this, this.element = a(b), this.options = a.extend({}, h, c), this._defaults = h, this._name = f, this.init()
    }
    var f = "ripples",
        g = null,
        h = {};
    e.prototype.init = function() {
        var c = this.element;
        c.on("mousedown touchstart", function(d) {
            if (g.isTouch() && "mousedown" === d.type) return !1;
            c.find(".ripple-wrapper").length || c.append('<div class="ripple-wrapper"></div>');
            var e = c.children(".ripple-wrapper"),
                f = g.getRelY(e, d),
                h = g.getRelX(e, d);
            if (f || h) {
                var i = g.getRipplesColor(c),
                    j = a("<div></div>");
                j.addClass("ripple").css({
                    left: h,
                    top: f,
                    "background-color": i
                }), e.append(j),
                    function() {
                        return b.getComputedStyle(j[0]).opacity
                    }(), g.rippleOn(c, j), setTimeout(function() {
                    g.rippleEnd(j)
                }, 500), c.on("mouseup mouseleave touchend", function() {
                    j.data("mousedown", "off"), "off" === j.data("animating") && g.rippleOut(j)
                })
            }
        })
    }, e.prototype.getNewSize = function(a, b) {
        return Math.max(a.outerWidth(), a.outerHeight()) / b.outerWidth() * 2.5
    }, e.prototype.getRelX = function(a, b) {
        var c = a.offset();
        return g.isTouch() ? (b = b.originalEvent, 1 !== b.touches.length ? b.touches[0].pageX - c.left : !1) : b.pageX - c.left
    }, e.prototype.getRelY = function(a, b) {
        var c = a.offset();
        return g.isTouch() ? (b = b.originalEvent, 1 !== b.touches.length ? b.touches[0].pageY - c.top : !1) : b.pageY - c.top
    }, e.prototype.getRipplesColor = function(a) {
        var c = a.data("ripple-color") ? a.data("ripple-color") : b.getComputedStyle(a[0]).color;
        return c
    }, e.prototype.hasTransitionSupport = function() {
        var a = c.body || c.documentElement,
            b = a.style,
            e = b.transition !== d || b.WebkitTransition !== d || b.MozTransition !== d || b.MsTransition !== d || b.OTransition !== d;
        return e
    }, e.prototype.isTouch = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, e.prototype.rippleEnd = function(a) {
        a.data("animating", "off"), "off" === a.data("mousedown") && g.rippleOut(a)
    }, e.prototype.rippleOut = function(a) {
        a.off(), g.hasTransitionSupport() ? a.addClass("ripple-out") : a.animate({
            opacity: 0
        }, 100, function() {
            a.trigger("transitionend")
        }), a.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            a.remove()
        })
    }, e.prototype.rippleOn = function(a, b) {
        var c = g.getNewSize(a, b);
        g.hasTransitionSupport() ? b.css({
            "-ms-transform": "scale(" + c + ")",
            "-moz-transform": "scale(" + c + ")",
            "-webkit-transform": "scale(" + c + ")",
            transform: "scale(" + c + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : b.animate({
            width: 2 * Math.max(a.outerWidth(), a.outerHeight()),
            height: 2 * Math.max(a.outerWidth(), a.outerHeight()),
            "margin-left": -1 * Math.max(a.outerWidth(), a.outerHeight()),
            "margin-top": -1 * Math.max(a.outerWidth(), a.outerHeight()),
            opacity: .2
        }, 500, function() {
            b.trigger("transitionend")
        })
    }, a.fn.ripples = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        })
    }
}(jQuery, window, document);
$(document).ready(function() {
    $(".overlay-button").click(function() {
        var a = $(this).attr("data-theme"),
            b = $(this).attr("data-opacity"),
            c = $(this).attr("data-style"),
            d = '<div id="loader-overlay" class="ui-front loader ui-widget-overlay ' + a + " opacity-" + b + '"><img src="../../assets/images/spinner/loader-' + c + '.gif" alt="" /></div>';
        $("#loader-overlay").length && $("#loader-overlay").remove(), $("body").append(d), $("#loader-overlay").fadeIn("fast"), setTimeout(function() {
            $("#loader-overlay").fadeOut("fast")
        }, 3e3)
    }), $(".refresh-button").click(function(a) {
        $(".glyph-icon", this).addClass("icon-spin"), a.preventDefault();
        var b = $(this).parents(".content-box"),
            c = $(this).attr("data-theme"),
            d = $(this).attr("data-opacity"),
            e = $(this).attr("data-style"),
            f = '<div id="refresh-overlay" class="ui-front loader ui-widget-overlay ' + c + " opacity-" + d + '"><img src="../../assets/images/spinner/loader-' + e + '.gif" alt="" /></div>';
        $("#refresh-overlay").length && $("#refresh-overlay").remove(), $(b).append(f), $("#refresh-overlay").fadeIn("fast"), setTimeout(function() {
            $("#refresh-overlay").fadeOut("fast"), $(".glyph-icon", this).removeClass("icon-spin")
        }, 1500)
    })
});
/*!
 * bootstrap-fileinput v4.4.7
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
(function (factory) {
    "use strict";
    //noinspection JSUnresolvedVariable
    if (typeof define === 'function' && define.amd) { // jshint ignore:line
        // AMD. Register as an anonymous module.
        define(['jquery'], factory); // jshint ignore:line
    } else { // noinspection JSUnresolvedVariable
        if (typeof module === 'object' && module.exports) { // jshint ignore:line
            // Node/CommonJS
            // noinspection JSUnresolvedVariable
            module.exports = factory(require('jquery')); // jshint ignore:line
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }
}(function ($) {
    "use strict";

    $.fn.fileinputLocales = {};
    $.fn.fileinputThemes = {};

    String.prototype.setTokens = function (replacePairs) {
        var str = this.toString(), key, re;
        for (key in replacePairs) {
            if (replacePairs.hasOwnProperty(key)) {
                re = new RegExp("\{" + key + "\}", "g");
                str = str.replace(re, replacePairs[key]);
            }
        }
        return str;
    };

    var $h, FileInput;

    // fileinput helper object for all global variables and internal helper methods
    //noinspection JSUnresolvedVariable
    $h = {
        FRAMES: '.kv-preview-thumb',
        SORT_CSS: 'file-sortable',
        OBJECT_PARAMS: '<param name="controller" value="true" />\n' +
        '<param name="allowFullScreen" value="true" />\n' +
        '<param name="allowScriptAccess" value="always" />\n' +
        '<param name="autoPlay" value="false" />\n' +
        '<param name="autoStart" value="false" />\n' +
        '<param name="quality" value="high" />\n',
        DEFAULT_PREVIEW: '<div class="file-preview-other">\n' +
        '<span class="{previewFileIconClass}">{previewFileIcon}</span>\n' +
        '</div>',
        MODAL_ID: 'kvFileinputModal',
        MODAL_EVENTS: ['show', 'shown', 'hide', 'hidden', 'loaded'],
        objUrl: window.URL || window.webkitURL,
        compare: function (input, str, exact) {
            return input !== undefined && (exact ? input === str : input.match(str));
        },
        isIE: function (ver) {
            // check for IE versions < 11
            if (navigator.appName !== 'Microsoft Internet Explorer') {
                return false;
            }
            if (ver === 10) {
                return new RegExp('msie\\s' + ver, 'i').test(navigator.userAgent);
            }
            var div = document.createElement("div"), status;
            div.innerHTML = "<!--[if IE " + ver + "]> <i></i> <![endif]-->";
            status = div.getElementsByTagName("i").length;
            document.body.appendChild(div);
            div.parentNode.removeChild(div);
            return status;
        },
        initModal: function ($modal) {
            var $body = $('body');
            if ($body.length) {
                $modal.appendTo($body);
            }
        },
        isEmpty: function (value, trim) {
            return value === undefined || value === null || value.length === 0 || (trim && $.trim(value) === '');
        },
        isArray: function (a) {
            return Array.isArray(a) || Object.prototype.toString.call(a) === '[object Array]';
        },
        ifSet: function (needle, haystack, def) {
            def = def || '';
            return (haystack && typeof haystack === 'object' && needle in haystack) ? haystack[needle] : def;
        },
        cleanArray: function (arr) {
            if (!(arr instanceof Array)) {
                arr = [];
            }
            return arr.filter(function (e) {
                return (e !== undefined && e !== null);
            });
        },
        spliceArray: function (arr, index) {
            var i, j = 0, out = [];
            if (!(arr instanceof Array)) {
                return [];
            }
            for (i = 0; i < arr.length; i++) {
                if (i !== index) {
                    out[j] = arr[i];
                    j++;
                }
            }
            return out;
        },
        getNum: function (num, def) {
            def = def || 0;
            if (typeof num === "number") {
                return num;
            }
            if (typeof num === "string") {
                num = parseFloat(num);
            }
            return isNaN(num) ? def : num;
        },
        hasFileAPISupport: function () {
            return !!(window.File && window.FileReader);
        },
        hasDragDropSupport: function () {
            var div = document.createElement('div');
            /** @namespace div.draggable */
            /** @namespace div.ondragstart */
            /** @namespace div.ondrop */
            return !$h.isIE(9) &&
                (div.draggable !== undefined || (div.ondragstart !== undefined && div.ondrop !== undefined));
        },
        hasFileUploadSupport: function () {
            return $h.hasFileAPISupport() && window.FormData;
        },
        hasBlobSupport: function () {
            try {
                return !!window.Blob && Boolean(new Blob());
            } catch (e) {
                return false;
            }
        },
        hasArrayBufferViewSupport: function () {
            try {
                return new Blob([new Uint8Array(100)]).size === 100;
            } catch (e) {
                return false;
            }
        },
        dataURI2Blob: function (dataURI) {
            //noinspection JSUnresolvedVariable
            var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder ||
                window.MSBlobBuilder, canBlob = $h.hasBlobSupport(), byteStr, arrayBuffer, intArray, i, mimeStr, bb,
                canProceed = (canBlob || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array;
            if (!canProceed) {
                return null;
            }
            if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                byteStr = atob(dataURI.split(',')[1]);
            } else {
                byteStr = decodeURIComponent(dataURI.split(',')[1]);
            }
            arrayBuffer = new ArrayBuffer(byteStr.length);
            intArray = new Uint8Array(arrayBuffer);
            for (i = 0; i < byteStr.length; i += 1) {
                intArray[i] = byteStr.charCodeAt(i);
            }
            mimeStr = dataURI.split(',')[0].split(':')[1].split(';')[0];
            if (canBlob) {
                return new Blob([$h.hasArrayBufferViewSupport() ? intArray : arrayBuffer], {type: mimeStr});
            }
            bb = new BlobBuilder();
            bb.append(arrayBuffer);
            return bb.getBlob(mimeStr);
        },
        arrayBuffer2String: function (buffer) {
            //noinspection JSUnresolvedVariable
            if (window.TextDecoder) {
                // noinspection JSUnresolvedFunction
                return new TextDecoder("utf-8").decode(buffer);
            }
            var array = Array.prototype.slice.apply(new Uint8Array(buffer)), out = '', i = 0, len, c, char2, char3;
            len = array.length;
            while (i < len) {
                c = array[i++];
                switch (c >> 4) { // jshint ignore:line
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxxxxxx
                        out += String.fromCharCode(c);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx   10xx xxxx
                        char2 = array[i++];
                        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F)); // jshint ignore:line
                        break;
                    case 14:
                        // 1110 xxxx  10xx xxxx  10xx xxxx
                        char2 = array[i++];
                        char3 = array[i++];
                        out += String.fromCharCode(((c & 0x0F) << 12) | // jshint ignore:line
                            ((char2 & 0x3F) << 6) |  // jshint ignore:line
                            ((char3 & 0x3F) << 0)); // jshint ignore:line
                        break;
                }
            }
            return out;
        },
        isHtml: function (str) {
            var a = document.createElement('div');
            a.innerHTML = str;
            for (var c = a.childNodes, i = c.length; i--;) {
                if (c[i].nodeType === 1) {
                    return true;
                }
            }
            return false;
        },
        isSvg: function (str) {
            return str.match(/^\s*<\?xml/i) && (str.match(/<!DOCTYPE svg/i) || str.match(/<svg/i));
        },
        getMimeType: function (signature, contents, type) {
            switch (signature) {
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                    return 'image/jpeg';
                case '89504E47':
                    return 'image/png';
                case '47494638':
                    return 'image/gif';
                case '49492a00':
                    return 'image/tiff';
                case '52494646':
                    return 'image/webp';
                case '66747970':
                    return 'video/3gp';
                case '4f676753':
                    return 'video/ogg';
                case '1a45dfa3':
                    return 'video/mkv';
                case '000001ba':
                case '000001b3':
                    return 'video/mpeg';
                case '3026b275':
                    return 'video/wmv';
                case '25504446':
                    return 'application/pdf';
                case '25215053':
                    return 'application/ps';
                case '504b0304':
                case '504b0506':
                case '504b0508':
                    return 'application/zip';
                case '377abcaf':
                    return 'application/7z';
                case '75737461':
                    return 'application/tar';
                case '7801730d':
                    return 'application/dmg';
                default:
                    switch (signature.substring(0, 6)) {
                        case '435753':
                            return 'application/x-shockwave-flash';
                        case '494433':
                            return 'audio/mp3';
                        case '425a68':
                            return 'application/bzip';
                        default:
                            switch (signature.substring(0, 4)) {
                                case '424d':
                                    return 'image/bmp';
                                case 'fffb':
                                    return 'audio/mp3';
                                case '4d5a':
                                    return 'application/exe';
                                case '1f9d':
                                case '1fa0':
                                    return 'application/zip';
                                case '1f8b':
                                    return 'application/gzip';
                                default:
                                    return contents && !contents.match(/[^\u0000-\u007f]/) ? 'application/text-plain' : type;
                            }
                    }
            }
        },
        addCss: function ($el, css) {
            $el.removeClass(css).addClass(css);
        },
        getElement: function (options, param, value) {
            return ($h.isEmpty(options) || $h.isEmpty(options[param])) ? value : $(options[param]);
        },
        uniqId: function () {
            return Math.round(new Date().getTime()) + '_' + Math.round(Math.random() * 100);
        },
        htmlEncode: function (str) {
            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        },
        replaceTags: function (str, tags) {
            var out = str;
            if (!tags) {
                return out;
            }
            $.each(tags, function (key, value) {
                if (typeof value === "function") {
                    value = value();
                }
                out = out.split(key).join(value);
            });
            return out;
        },
        cleanMemory: function ($thumb) {
            var data = $thumb.is('img') ? $thumb.attr('src') : $thumb.find('source').attr('src');
            /** @namespace $h.objUrl.revokeObjectURL */
            $h.objUrl.revokeObjectURL(data);
        },
        findFileName: function (filePath) {
            var sepIndex = filePath.lastIndexOf('/');
            if (sepIndex === -1) {
                sepIndex = filePath.lastIndexOf('\\');
            }
            return filePath.split(filePath.substring(sepIndex, sepIndex + 1)).pop();
        },
        checkFullScreen: function () {
            //noinspection JSUnresolvedVariable
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ||
                document.msFullscreenElement;
        },
        toggleFullScreen: function (maximize) {
            var doc = document, de = doc.documentElement;
            if (de && maximize && !$h.checkFullScreen()) {
                /** @namespace document.requestFullscreen */
                /** @namespace document.msRequestFullscreen */
                /** @namespace document.mozRequestFullScreen */
                /** @namespace document.webkitRequestFullscreen */
                /** @namespace Element.ALLOW_KEYBOARD_INPUT */
                if (de.requestFullscreen) {
                    de.requestFullscreen();
                } else if (de.msRequestFullscreen) {
                    de.msRequestFullscreen();
                } else if (de.mozRequestFullScreen) {
                    de.mozRequestFullScreen();
                } else if (de.webkitRequestFullscreen) {
                    de.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                /** @namespace document.exitFullscreen */
                /** @namespace document.msExitFullscreen */
                /** @namespace document.mozCancelFullScreen */
                /** @namespace document.webkitExitFullscreen */
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        },
        moveArray: function (arr, oldIndex, newIndex) {
            if (newIndex >= arr.length) {
                var k = newIndex - arr.length;
                while ((k--) + 1) {
                    arr.push(undefined);
                }
            }
            arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
            return arr;
        },
        cleanZoomCache: function ($el) {
            var $cache = $el.closest('.kv-zoom-cache-theme');
            if (!$cache.length) {
                $cache = $el.closest('.kv-zoom-cache');
            }
            $cache.remove();
        },
        setOrientation: function (buffer, callback) {
            var scanner = new DataView(buffer), idx = 0, value = 1, // Non-rotated is the default
                maxBytes, uInt16, exifLength;
            if (scanner.getUint16(idx) !== 0xFFD8 || buffer.length < 2) { // not a proper JPEG
                if (callback) {
                    callback();
                }
                return;
            }
            idx += 2;
            maxBytes = scanner.byteLength;
            while (idx < maxBytes - 2) {
                uInt16 = scanner.getUint16(idx);
                idx += 2;
                switch (uInt16) {
                    case 0xFFE1: // Start of EXIF
                        exifLength = scanner.getUint16(idx);
                        maxBytes = exifLength - idx;
                        idx += 2;
                        break;
                    case 0x0112: // Orientation tag
                        value = scanner.getUint16(idx + 6, false);
                        maxBytes = 0; // Stop scanning
                        break;
                }
            }
            if (callback) {
                callback(value);
            }
        },
        validateOrientation: function (file, callback) {
            if (!window.FileReader || !window.DataView) {
                return; // skip orientation if pre-requisite libraries not supported by browser
            }
            var reader = new FileReader(), buffer;
            reader.onloadend = function () {
                buffer = reader.result;
                $h.setOrientation(buffer, callback);
            };
            reader.readAsArrayBuffer(file);
        },
        adjustOrientedImage: function ($img, isZoom) {
            var offsetContTop, offsetTop, newTop;
            if (!$img.hasClass('is-portrait-gt4')) {
                return;
            }
            if (isZoom) {
                $img.css({width: $img.parent().height()});
                return;
            } else {
                $img.css({height: 'auto', width: $img.height()});
            }
            offsetContTop = $img.parent().offset().top;
            offsetTop = $img.offset().top;
            newTop = offsetContTop - offsetTop;
            $img.css('margin-top', newTop);
        },
        closeButton: function (css) {
            css = css ? 'close ' + css : 'close';
            return '<button type="button" class="' + css + '" aria-label="Close">\n' +
                '  <span aria-hidden="true">&times;</span>\n' +
                '</button>';
        }
    };
    FileInput = function (element, options) {
        var self = this;
        self.$element = $(element);
        self.$parent = self.$element.parent();
        if (!self._validate()) {
            return;
        }
        self.isPreviewable = $h.hasFileAPISupport();
        self.isIE9 = $h.isIE(9);
        self.isIE10 = $h.isIE(10);
        if (self.isPreviewable || self.isIE9) {
            self._init(options);
            self._listen();
        }
        self.$element.removeClass('file-loading');
    };
    //noinspection JSUnusedGlobalSymbols
    FileInput.prototype = {
        constructor: FileInput,
        _cleanup: function () {
            var self = this;
            self.reader = null;
            self.formdata = {};
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.uploadAsyncCount = 0;
            self.loadedImages = [];
            self.totalImagesCount = 0;
            self.ajaxRequests = [];
            self.clearStack();
            self.fileInputCleared = false;
            self.fileBatchCompleted = true;
            if (!self.isPreviewable) {
                self.showPreview = false;
            }
            self.isError = false;
            self.ajaxAborted = false;
            self.cancelling = false;
        },
        _init: function (options, refreshMode) {
            var self = this, f, $el = self.$element, $cont, t, tmp;
            self.options = options;
            $.each(options, function (key, value) {
                switch (key) {
                    case 'minFileCount':
                    case 'maxFileCount':
                    case 'minFileSize':
                    case 'maxFileSize':
                    case 'maxFilePreviewSize':
                    case 'resizeImageQuality':
                    case 'resizeIfSizeMoreThan':
                    case 'progressUploadThreshold':
                    case 'initialPreviewCount':
                    case 'zoomModalHeight':
                    case 'minImageHeight':
                    case 'maxImageHeight':
                    case 'minImageWidth':
                    case 'maxImageWidth':
                        self[key] = $h.getNum(value);
                        break;
                    default:
                        self[key] = value;
                        break;
                }
            });
            if (self.rtl) { // swap buttons for rtl
                tmp = self.previewZoomButtonIcons.prev;
                self.previewZoomButtonIcons.prev = self.previewZoomButtonIcons.next;
                self.previewZoomButtonIcons.next = tmp;
            }
            if (!refreshMode) {
                self._cleanup();
            }
            self.$form = $el.closest('form');
            self._initTemplateDefaults();
            self.uploadFileAttr = !$h.isEmpty($el.attr('name')) ? $el.attr('name') : 'file_data';
            t = self._getLayoutTemplate('progress');
            self.progressTemplate = t.replace('{class}', self.progressClass);
            self.progressCompleteTemplate = t.replace('{class}', self.progressCompleteClass);
            self.progressErrorTemplate = t.replace('{class}', self.progressErrorClass);
            self.dropZoneEnabled = $h.hasDragDropSupport() && self.dropZoneEnabled;
            self.isDisabled = $el.attr('disabled') || $el.attr('readonly');
            if (self.isDisabled) {
                $el.attr('disabled', true);
            }
            self.isAjaxUpload = $h.hasFileUploadSupport() && !$h.isEmpty(self.uploadUrl);
            self.isClickable = self.browseOnZoneClick && self.showPreview &&
                (self.isAjaxUpload && self.dropZoneEnabled || !$h.isEmpty(self.defaultPreviewContent));
            self.slug = typeof options.slugCallback === "function" ? options.slugCallback : self._slugDefault;
            self.mainTemplate = self.showCaption ? self._getLayoutTemplate('main1') : self._getLayoutTemplate('main2');
            self.captionTemplate = self._getLayoutTemplate('caption');
            self.previewGenericTemplate = self._getPreviewTemplate('generic');
            if (!self.imageCanvas && self.resizeImage && (self.maxImageWidth || self.maxImageHeight)) {
                self.imageCanvas = document.createElement('canvas');
                self.imageCanvasContext = self.imageCanvas.getContext('2d');
            }
            if ($h.isEmpty($el.attr('id'))) {
                $el.attr('id', $h.uniqId());
            }
            self.namespace = '.fileinput_' + $el.attr('id').replace(/-/g, '_');
            if (self.$container === undefined) {
                self.$container = self._createContainer();
            } else {
                self._refreshContainer();
            }
            $cont = self.$container;
            self.$dropZone = $cont.find('.file-drop-zone');
            self.$progress = $cont.find('.kv-upload-progress');
            self.$btnUpload = $cont.find('.fileinput-upload');
            self.$captionContainer = $h.getElement(options, 'elCaptionContainer', $cont.find('.file-caption'));
            self.$caption = $h.getElement(options, 'elCaptionText', $cont.find('.file-caption-name'));
            if (!$h.isEmpty(self.msgPlaceholder)) {
                f = $el.attr('multiple') ? self.filePlural : self.fileSingle;
                self.$caption.attr('placeholder', self.msgPlaceholder.replace('{files}', f));
            }
            self.$captionIcon = self.$captionContainer.find('.file-caption-icon');
            if (self.mainClass.indexOf('input-group-lg') > -1) {
                $h.addCss(self.$captionIcon, 'icon-lg');
            } else {
                self.$captionIcon.removeClass('icon-lg');
            }
            self.$previewContainer = $h.getElement(options, 'elPreviewContainer', $cont.find('.file-preview'));
            self.$preview = $h.getElement(options, 'elPreviewImage', $cont.find('.file-preview-thumbnails'));
            self.$previewStatus = $h.getElement(options, 'elPreviewStatus', $cont.find('.file-preview-status'));
            self.$errorContainer = $h.getElement(options, 'elErrorContainer', self.$previewContainer.find('.kv-fileinput-error'));
            self._validateDisabled();
            if (!$h.isEmpty(self.msgErrorClass)) {
                $h.addCss(self.$errorContainer, self.msgErrorClass);
            }
            if (!refreshMode) {
                self.$errorContainer.hide();
                self.previewInitId = "preview-" + $h.uniqId();
                self._initPreviewCache();
                self._initPreview(true);
                self._initPreviewActions();
                self._setFileDropZoneTitle();
                if (self.$parent.hasClass('file-loading')) {
                    self.$container.insertBefore(self.$parent);
                    self.$parent.remove();
                }
            }
            if ($el.attr('disabled')) {
                self.disable();
            }
            self._initZoom();
            if (self.hideThumbnailContent) {
                $h.addCss(self.$preview, 'hide-content');
            }
        },
        _initTemplateDefaults: function () {
            var self = this, tMain1, tMain2, tPreview, tFileIcon, tClose, tCaption, tBtnDefault, tBtnLink, tBtnBrowse,
                tModalMain, tModal, tProgress, tSize, tFooter, tActions, tActionDelete, tActionUpload, tActionDownload,
                tActionZoom, tActionDrag, tIndicator, tTagBef, tTagBef1, tTagBef2, tTagAft, tGeneric, tHtml, tImage,
                tText, tOffice, tVideo, tAudio, tFlash, tObject, tPdf, tOther, tZoomCache, vDefaultDim;
            tMain1 = '{preview}\n' +
                '<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n' +
                '<div class="input-group {class}">\n' +
                '  {caption}\n' +
                '<div class="input-group-btn">\n' +
                '      {remove}\n' +
                '      {cancel}\n' +
                '      {upload}\n' +
                '      {browse}\n' +
                '    </div>\n' +
                '</div>';
            tMain2 = '{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n';
            tPreview = '<div class="file-preview {class}">\n' +
                '    {close}' +
                '    <div class="{dropClass}">\n' +
                '    <div class="file-preview-thumbnails">\n' +
                '    </div>\n' +
                '    <div class="clearfix"></div>' +
                '    <div class="file-preview-status text-center text-success"></div>\n' +
                '    <div class="kv-fileinput-error"></div>\n' +
                '    </div>\n' +
                '</div>';
            tClose = $h.closeButton('fileinput-remove');
            tFileIcon = '<i class="glyphicon glyphicon-file"></i>';
            tCaption = '<div class="file-caption form-control {class}" tabindex="500">\n' +
                '  <span class="file-caption-icon"></span>\n' +
                '  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n' +
                '</div>';
            //noinspection HtmlUnknownAttribute
            tBtnDefault = '<button type="{type}" tabindex="500" title="{title}" class="{css}" ' +
                '{status}>{icon} {label}</button>';
            //noinspection HtmlUnknownAttribute
            tBtnLink = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>';
            //noinspection HtmlUnknownAttribute
            tBtnBrowse = '<div tabindex="500" class="{css}" {status}>{icon} {label}</div>';
            tModalMain = '<div id="' + $h.MODAL_ID + '" class="file-zoom-dialog modal fade" ' +
                'tabindex="-1" aria-labelledby="' + $h.MODAL_ID + 'Label"></div>';
            tModal = '<div class="modal-dialog modal-lg{rtl}" role="document">\n' +
                '  <div class="modal-content">\n' +
                '    <div class="modal-header">\n' +
                '      <h5 class="modal-title">{heading}</h5>\n' +
                '      <span class="kv-zoom-title"></span>\n' +
                '      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
                '    </div>\n' +
                '    <div class="modal-body">\n' +
                '      <div class="floating-buttons"></div>\n' +
                '      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n' + '{prev} {next}\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>\n';
            tProgress = '<div class="progress">\n' +
                '    <div class="{class}" role="progressbar"' +
                ' aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n' +
                '        {status}\n' +
                '     </div>\n' +
                '</div>';
            tSize = ' <samp>({sizeText})</samp>';
            tFooter = '<div class="file-thumbnail-footer">\n' +
                '    <div class="file-footer-caption" title="{caption}">\n' +
                '        <div class="file-caption-info">{caption}</div>\n' +
                '        <div class="file-size-info">{size}</div>\n' +
                '    </div>\n' +
                '    {progress}\n{indicator}\n{actions}\n' +
                '</div>';
            tActions = '<div class="file-actions">\n' +
                '    <div class="file-footer-buttons">\n' +
                '        {download} {upload} {delete} {zoom} {other}' +
                '    </div>\n' +
                '</div>\n' +
                '{drag}\n' +
                '<div class="clearfix"></div>';
            //noinspection HtmlUnknownAttribute
            tActionDelete = '<button type="button" class="kv-file-remove {removeClass}" ' +
                'title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n';
            tActionUpload = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">' +
                '{uploadIcon}</button>';
            tActionDownload = '<button type="button" class="kv-file-download {downloadClass}" title="{downloadTitle}" ' +
                'data-url="{downloadUrl}" data-caption="{caption}">{downloadIcon}</button>';
            tActionZoom = '<button type="button" class="kv-file-zoom {zoomClass}" ' +
                'title="{zoomTitle}">{zoomIcon}</button>';
            tActionDrag = '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>';
            tIndicator = '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>';
            tTagBef = '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}"' +
                ' data-template="{template}"';
            tTagBef1 = tTagBef + '><div class="kv-file-content">\n';
            tTagBef2 = tTagBef + ' title="{caption}"><div class="kv-file-content">\n';
            tTagAft = '</div>{footer}\n</div>\n';
            tGeneric = '{content}\n';
            tHtml = '<div class="kv-preview-data file-preview-html" title="{caption}" {style}>{data}</div>\n';
            tImage = '<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" ' +
                'alt="{caption}" {style}>\n';
            tText = '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly {style}>' +
                '{data}</textarea>\n';
            tOffice = '<iframe class="kv-preview-data file-preview-office" ' +
                'src="https://docs.google.com/gview?url={data}&embedded=true" {style}></iframe>';
            tVideo = '<video class="kv-preview-data file-preview-video" controls {style}>\n' +
                '<source src="{data}" type="{type}">\n' + $h.DEFAULT_PREVIEW + '\n</video>\n';
            tAudio = '<audio class="kv-preview-data file-preview-audio" controls {style}>\n<source src="{data}" ' +
                'type="{type}">\n' + $h.DEFAULT_PREVIEW + '\n</audio>\n';
            tFlash = '<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash" {style}>\n';
            tPdf = '<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf" {style}>\n';
            tObject = '<object class="kv-preview-data file-preview-object file-object {typeCss}" ' +
                'data="{data}" type="{type}" {style}>\n' + '<param name="movie" value="{caption}" />\n' +
                $h.OBJECT_PARAMS + ' ' + $h.DEFAULT_PREVIEW + '\n</object>\n';
            tOther = '<div class="kv-preview-data file-preview-other-frame" {style}>\n' + $h.DEFAULT_PREVIEW + '\n</div>\n';
            tZoomCache = '<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>';
            vDefaultDim = {width: "100%", height: "100%", 'min-height': "480px"};
            self.defaults = {
                layoutTemplates: {
                    main1: tMain1,
                    main2: tMain2,
                    preview: tPreview,
                    close: tClose,
                    fileIcon: tFileIcon,
                    caption: tCaption,
                    modalMain: tModalMain,
                    modal: tModal,
                    progress: tProgress,
                    size: tSize,
                    footer: tFooter,
                    indicator: tIndicator,
                    actions: tActions,
                    actionDelete: tActionDelete,
                    actionUpload: tActionUpload,
                    actionDownload: tActionDownload,
                    actionZoom: tActionZoom,
                    actionDrag: tActionDrag,
                    btnDefault: tBtnDefault,
                    btnLink: tBtnLink,
                    btnBrowse: tBtnBrowse,
                    zoomCache: tZoomCache
                },
                previewMarkupTags: {
                    tagBefore1: tTagBef1,
                    tagBefore2: tTagBef2,
                    tagAfter: tTagAft
                },
                previewContentTemplates: {
                    generic: tGeneric,
                    html: tHtml,
                    image: tImage,
                    text: tText,
                    office: tOffice,
                    video: tVideo,
                    audio: tAudio,
                    flash: tFlash,
                    object: tObject,
                    pdf: tPdf,
                    other: tOther
                },
                allowedPreviewTypes: ['image', 'html', 'text', 'video', 'audio', 'flash', 'pdf', 'object'],
                previewTemplates: {},
                previewSettings: {
                    image: {width: "auto", height: "auto", 'max-width': "100%", 'max-height': "100%"},
                    html: {width: "213px", height: "160px"},
                    text: {width: "213px", height: "160px"},
                    office: {width: "213px", height: "160px"},
                    video: {width: "213px", height: "160px"},
                    audio: {width: "100%", height: "30px"},
                    flash: {width: "213px", height: "160px"},
                    object: {width: "213px", height: "160px"},
                    pdf: {width: "213px", height: "160px"},
                    other: {width: "213px", height: "160px"}
                },
                previewSettingsSmall: {
                    image: {width: "auto", height: "auto", 'max-width': "100%", 'max-height': "100%"},
                    html: {width: "100%", height: "160px"},
                    text: {width: "100%", height: "160px"},
                    office: {width: "100%", height: "160px"},
                    video: {width: "100%", height: "auto"},
                    audio: {width: "100%", height: "30px"},
                    flash: {width: "100%", height: "auto"},
                    object: {width: "100%", height: "auto"},
                    pdf: {width: "100%", height: "160px"},
                    other: {width: "100%", height: "160px"}
                },
                previewZoomSettings: {
                    image: {width: "auto", height: "auto", 'max-width': "100%", 'max-height': "100%"},
                    html: vDefaultDim,
                    text: vDefaultDim,
                    office: {width: "100%", height: "100%", 'max-width': "100%", 'min-height': "480px"},
                    video: {width: "auto", height: "100%", 'max-width': "100%"},
                    audio: {width: "100%", height: "30px"},
                    flash: {width: "auto", height: "480px"},
                    object: {width: "auto", height: "100%", 'max-width': "100%", 'min-height': "480px"},
                    pdf: vDefaultDim,
                    other: {width: "auto", height: "100%", 'min-height': "480px"}
                },
                fileTypeSettings: {
                    image: function (vType, vName) {
                        return ($h.compare(vType, 'image.*') && !$h.compare(vType, /(tiff?|wmf)$/i) ||
                            $h.compare(vName, /\.(gif|png|jpe?g)$/i));
                    },
                    html: function (vType, vName) {
                        return $h.compare(vType, 'text/html') || $h.compare(vName, /\.(htm|html)$/i);
                    },
                    office: function (vType, vName) {
                        return $h.compare(vType, /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i) ||
                            $h.compare(vName, /\.(rtf|docx?|xlsx?|pptx?|pps|potx?|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i);
                    },
                    text: function (vType, vName) {
                        return $h.compare(vType, 'text.*') || $h.compare(vName, /\.(xml|javascript)$/i) ||
                            $h.compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
                    },
                    video: function (vType, vName) {
                        return $h.compare(vType, 'video.*') && ($h.compare(vType, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
                            $h.compare(vName, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i));
                    },
                    audio: function (vType, vName) {
                        return $h.compare(vType, 'audio.*') && ($h.compare(vName, /(ogg|mp3|mp?g|wav)$/i) ||
                            $h.compare(vName, /\.(og?|mp3|mp?g|wav)$/i));
                    },
                    flash: function (vType, vName) {
                        return $h.compare(vType, 'application/x-shockwave-flash', true) || $h.compare(vName, /\.(swf)$/i);
                    },
                    pdf: function (vType, vName) {
                        return $h.compare(vType, 'application/pdf', true) || $h.compare(vName, /\.(pdf)$/i);
                    },
                    object: function () {
                        return true;
                    },
                    other: function () {
                        return true;
                    }
                },
                fileActionSettings: {
                    showRemove: true,
                    showUpload: true,
                    showDownload: true,
                    showZoom: true,
                    showDrag: true,
                    removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
                    removeClass: 'btn btn-kv btn-default btn-outline-secondary',
                    removeErrorClass: 'btn btn-kv btn-danger',
                    removeTitle: 'Remove file',
                    uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
                    uploadClass: 'btn btn-kv btn-default btn-outline-secondary',
                    uploadTitle: 'Upload file',
                    uploadRetryIcon: '<i class="glyphicon glyphicon-repeat"></i>',
                    uploadRetryTitle: 'Retry upload',
                    downloadIcon: '<i class="glyphicon glyphicon-download"></i>',
                    downloadClass: 'btn btn-kv btn-default btn-outline-secondary',
                    downloadTitle: 'Download file',
                    zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>',
                    zoomClass: 'btn btn-kv btn-default btn-outline-secondary',
                    zoomTitle: 'View Details',
                    dragIcon: '<i class="glyphicon glyphicon-move"></i>',
                    dragClass: 'text-info',
                    dragTitle: 'Move / Rearrange',
                    dragSettings: {},
                    indicatorNew: '<i class="glyphicon glyphicon-plus-sign text-warning"></i>',
                    indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
                    indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
                    indicatorLoading: '<i class="glyphicon glyphicon-hourglass text-muted"></i>',
                    indicatorNewTitle: 'Not uploaded yet',
                    indicatorSuccessTitle: 'Uploaded',
                    indicatorErrorTitle: 'Upload Error',
                    indicatorLoadingTitle: 'Uploading ...'
                }
            };
            $.each(self.defaults, function (key, setting) {
                if (key === 'allowedPreviewTypes') {
                    if (self.allowedPreviewTypes === undefined) {
                        self.allowedPreviewTypes = setting;
                    }
                    return;
                }
                self[key] = $.extend(true, {}, setting, self[key]);
            });
            self._initPreviewTemplates();
        },
        _initPreviewTemplates: function () {
            var self = this, cfg = self.defaults, tags = self.previewMarkupTags, tagBef, tagAft = tags.tagAfter;
            $.each(cfg.previewContentTemplates, function (key, value) {
                if ($h.isEmpty(self.previewTemplates[key])) {
                    tagBef = tags.tagBefore2;
                    if (key === 'generic' || key === 'image' || key === 'html' || key === 'text') {
                        tagBef = tags.tagBefore1;
                    }
                    self.previewTemplates[key] = tagBef + value + tagAft;
                }
            });
        },
        _initPreviewCache: function () {
            var self = this;
            self.previewCache = {
                data: {},
                init: function () {
                    var content = self.initialPreview;
                    if (content.length > 0 && !$h.isArray(content)) {
                        content = content.split(self.initialPreviewDelimiter);
                    }
                    self.previewCache.data = {
                        content: content,
                        config: self.initialPreviewConfig,
                        tags: self.initialPreviewThumbTags
                    };
                },
                count: function () {
                    return !!self.previewCache.data && !!self.previewCache.data.content ?
                        self.previewCache.data.content.length : 0;
                },
                get: function (i, isDisabled) {
                    var ind = 'init_' + i, data = self.previewCache.data, config = data.config[i],
                        content = data.content[i], previewId = self.previewInitId + '-' + ind, out, $tmp, cat, ftr,
                        fname, ftype, frameClass, asData = $h.ifSet('previewAsData', config, self.initialPreviewAsData),
                        parseTemplate = function (cat, dat, fn, ft, id, ftr, ind, fc, t) {
                            fc = ' file-preview-initial ' + $h.SORT_CSS + (fc ? ' ' + fc : '');
                            return self._generatePreviewTemplate(cat, dat, fn, ft, id, false, null, fc, ftr, ind, t);
                        };
                    if (!content) {
                        return '';
                    }
                    isDisabled = isDisabled === undefined ? true : isDisabled;
                    cat = $h.ifSet('type', config, self.initialPreviewFileType || 'generic');
                    fname = $h.ifSet('filename', config, $h.ifSet('caption', config));
                    ftype = $h.ifSet('filetype', config, cat);
                    ftr = self.previewCache.footer(i, isDisabled, (config && config.size || null));
                    frameClass = $h.ifSet('frameClass', config);
                    if (asData) {
                        out = parseTemplate(cat, content, fname, ftype, previewId, ftr, ind, frameClass);
                    } else {
                        out = parseTemplate('generic', content, fname, ftype, previewId, ftr, ind, frameClass, cat)
                            .setTokens({'content': data.content[i]});
                    }
                    if (data.tags.length && data.tags[i]) {
                        out = $h.replaceTags(out, data.tags[i]);
                    }
                    /** @namespace config.frameAttr */
                    if (!$h.isEmpty(config) && !$h.isEmpty(config.frameAttr)) {
                        $tmp = $(document.createElement('div')).html(out);
                        $tmp.find('.file-preview-initial').attr(config.frameAttr);
                        out = $tmp.html();
                        $tmp.remove();
                    }
                    return out;
                },
                add: function (content, config, tags, append) {
                    var data = self.previewCache.data, index;
                    if (!$h.isArray(content)) {
                        content = content.split(self.initialPreviewDelimiter);
                    }
                    if (append) {
                        index = data.content.push(content) - 1;
                        data.config[index] = config;
                        data.tags[index] = tags;
                    } else {
                        index = content.length - 1;
                        data.content = content;
                        data.config = config;
                        data.tags = tags;
                    }
                    self.previewCache.data = data;
                    return index;
                },
                set: function (content, config, tags, append) {
                    var data = self.previewCache.data, i, chk;
                    if (!content || !content.length) {
                        return;
                    }
                    if (!$h.isArray(content)) {
                        content = content.split(self.initialPreviewDelimiter);
                    }
                    chk = content.filter(function (n) {
                        return n !== null;
                    });
                    if (!chk.length) {
                        return;
                    }
                    if (data.content === undefined) {
                        data.content = [];
                    }
                    if (data.config === undefined) {
                        data.config = [];
                    }
                    if (data.tags === undefined) {
                        data.tags = [];
                    }
                    if (append) {
                        for (i = 0; i < content.length; i++) {
                            if (content[i]) {
                                data.content.push(content[i]);
                            }
                        }
                        for (i = 0; i < config.length; i++) {
                            if (config[i]) {
                                data.config.push(config[i]);
                            }
                        }
                        for (i = 0; i < tags.length; i++) {
                            if (tags[i]) {
                                data.tags.push(tags[i]);
                            }
                        }
                    } else {
                        data.content = content;
                        data.config = config;
                        data.tags = tags;
                    }
                    self.previewCache.data = data;
                },
                unset: function (index) {
                    var chk = self.previewCache.count();
                    if (!chk) {
                        return;
                    }
                    if (chk === 1) {
                        self.previewCache.data.content = [];
                        self.previewCache.data.config = [];
                        self.previewCache.data.tags = [];
                        self.initialPreview = [];
                        self.initialPreviewConfig = [];
                        self.initialPreviewThumbTags = [];
                        return;
                    }
                    self.previewCache.data.content.splice(index, 1);
                    self.previewCache.data.config.splice(index, 1);
                    self.previewCache.data.tags.splice(index, 1);
                },
                out: function () {
                    var html = '', caption, len = self.previewCache.count(), i;
                    if (len === 0) {
                        return {content: '', caption: ''};
                    }
                    for (i = 0; i < len; i++) {
                        html += self.previewCache.get(i);
                    }
                    caption = self._getMsgSelected(len);
                    return {content: html, caption: caption};
                },
                footer: function (i, isDisabled, size) {
                    var data = self.previewCache.data || {};
                    if ($h.isEmpty(data.content)) {
                        return '';
                    }
                    if ($h.isEmpty(data.config) || $h.isEmpty(data.config[i])) {
                        data.config[i] = {};
                    }
                    isDisabled = isDisabled === undefined ? true : isDisabled;
                    var config = data.config[i], caption = $h.ifSet('caption', config), a,
                        width = $h.ifSet('width', config, 'auto'), url = $h.ifSet('url', config, false),
                        key = $h.ifSet('key', config, null), fs = self.fileActionSettings,
                        initPreviewShowDel = self.initialPreviewShowDelete || false,
                        dUrl = config.downloadUrl || self.initialPreviewDownloadUrl || '',
                        dFil = config.filename || config.caption || '',
                        initPreviewShowDwl = !!(dUrl),
                        sDel = $h.ifSet('showDelete', config, $h.ifSet('showDelete', fs, initPreviewShowDel)),
                        sDwl = $h.ifSet('showDownload', config, $h.ifSet('showDownload', fs, initPreviewShowDwl)),
                        sZm = $h.ifSet('showZoom', config, $h.ifSet('showZoom', fs, true)),
                        sDrg = $h.ifSet('showDrag', config, $h.ifSet('showDrag', fs, true)),
                        dis = (url === false) && isDisabled;
                    sDwl = sDwl && config.downloadUrl !== false && !!dUrl;
                    a = self._renderFileActions(false, sDwl, sDel, sZm, sDrg, dis, url, key, true, dUrl, dFil);
                    return self._getLayoutTemplate('footer').setTokens({
                        'progress': self._renderThumbProgress(),
                        'actions': a,
                        'caption': caption,
                        'size': self._getSize(size),
                        'width': width,
                        'indicator': ''
                    });
                }
            };
            self.previewCache.init();
        },
        _handler: function ($el, event, callback) {
            var self = this, ns = self.namespace, ev = event.split(' ').join(ns + ' ') + ns;
            if (!$el || !$el.length) {
                return;
            }
            $el.off(ev).on(ev, callback);
        },
        _log: function (msg) {
            var self = this, id = self.$element.attr('id');
            if (id) {
                msg = '"' + id + '": ' + msg;
            }
            if (typeof window.console.log !== "undefined") {
                window.console.log(msg);
            } else {
                window.alert(msg);
            }
        },
        _validate: function () {
            var self = this, status = self.$element.attr('type') === 'file';
            if (!status) {
                self._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.');
            }
            return status;
        },
        _errorsExist: function () {
            var self = this, $err, $errList = self.$errorContainer.find('li');
            if ($errList.length) {
                return true;
            }
            $err = $(document.createElement('div')).html(self.$errorContainer.html());
            $err.find('.kv-error-close').remove();
            $err.find('ul').remove();
            return !!$.trim($err.text()).length;
        },
        _errorHandler: function (evt, caption) {
            var self = this, err = evt.target.error, showError = function (msg) {
                self._showError(msg.replace('{name}', caption));
            };
            /** @namespace err.NOT_FOUND_ERR */
            /** @namespace err.SECURITY_ERR */
            /** @namespace err.NOT_READABLE_ERR */
            if (err.code === err.NOT_FOUND_ERR) {
                showError(self.msgFileNotFound);
            } else if (err.code === err.SECURITY_ERR) {
                showError(self.msgFileSecured);
            } else if (err.code === err.NOT_READABLE_ERR) {
                showError(self.msgFileNotReadable);
            } else if (err.code === err.ABORT_ERR) {
                showError(self.msgFilePreviewAborted);
            } else {
                showError(self.msgFilePreviewError);
            }
        },
        _addError: function (msg) {
            var self = this, $error = self.$errorContainer;
            if (msg && $error.length) {
                $error.html(self.errorCloseButton + msg);
                self._handler($error.find('.kv-error-close'), 'click', function () {
                    setTimeout(function() {
                        if (self.showPreview && !self.getFrames().length) {
                            self.clear();
                        }
                        $error.fadeOut('slow');                    
                    }, 10);
                });
            }
        },
        _setValidationError: function (css) {
            var self = this;
            css = (css ? css + ' ' : '') + 'has-error';
            self.$container.removeClass(css).addClass('has-error');
            $h.addCss(self.$captionContainer, 'is-invalid');
        },
        _resetErrors: function (fade) {
            var self = this, $error = self.$errorContainer;
            self.isError = false;
            self.$container.removeClass('has-error');
            self.$captionContainer.removeClass('is-invalid');
            $error.html('');
            if (fade) {
                $error.fadeOut('slow');
            } else {
                $error.hide();
            }
        },
        _showFolderError: function (folders) {
            var self = this, $error = self.$errorContainer, msg;
            if (!folders) {
                return;
            }
            msg = self.msgFoldersNotAllowed.replace('{n}', folders);
            self._addError(msg);
            self._setValidationError();
            $error.fadeIn(800);
            self._raise('filefoldererror', [folders, msg]);
        },
        _showUploadError: function (msg, params, event) {
            var self = this, $error = self.$errorContainer, ev = event || 'fileuploaderror', e = params && params.id ?
                '<li data-file-id="' + params.id + '">' + msg + '</li>' : '<li>' + msg + '</li>';
            if ($error.find('ul').length === 0) {
                self._addError('<ul>' + e + '</ul>');
            } else {
                $error.find('ul').append(e);
            }
            $error.fadeIn(800);
            self._raise(ev, [params, msg]);
            self._setValidationError('file-input-new');
            return true;
        },
        _showError: function (msg, params, event) {
            var self = this, $error = self.$errorContainer, ev = event || 'fileerror';
            params = params || {};
            params.reader = self.reader;
            self._addError(msg);
            $error.fadeIn(800);
            self._raise(ev, [params, msg]);
            if (!self.isAjaxUpload) {
                self._clearFileInput();
            }
            self._setValidationError('file-input-new');
            self.$btnUpload.attr('disabled', true);
            return true;
        },
        _noFilesError: function (params) {
            var self = this, label = self.minFileCount > 1 ? self.filePlural : self.fileSingle,
                msg = self.msgFilesTooLess.replace('{n}', self.minFileCount).replace('{files}', label),
                $error = self.$errorContainer;
            self._addError(msg);
            self.isError = true;
            self._updateFileDetails(0);
            $error.fadeIn(800);
            self._raise('fileerror', [params, msg]);
            self._clearFileInput();
            self._setValidationError();
        },
        _parseError: function (operation, jqXHR, errorThrown, fileName) {
            /** @namespace jqXHR.responseJSON */
            var self = this, errMsg = $.trim(errorThrown + ''), textPre,
                text = jqXHR.responseJSON !== undefined && jqXHR.responseJSON.error !== undefined ?
                    jqXHR.responseJSON.error : jqXHR.responseText;
            if (self.cancelling && self.msgUploadAborted) {
                errMsg = self.msgUploadAborted;
            }
            if (self.showAjaxErrorDetails && text) {
                text = $.trim(text.replace(/\n\s*\n/g, '\n'));
                textPre = text.length ? '<pre>' + text + '</pre>' : '';
                errMsg += errMsg ? textPre : text;
            }
            if (!errMsg) {
                errMsg = self.msgAjaxError.replace('{operation}', operation);
            }
            self.cancelling = false;
            return fileName ? '<b>' + fileName + ': </b>' + errMsg : errMsg;
        },
        _parseFileType: function (type, name) {
            var self = this, isValid, vType, cat, i, types = self.allowedPreviewTypes || [];
            if (type === 'application/text-plain') {
                return 'text';
            }
            for (i = 0; i < types.length; i++) {
                cat = types[i];
                isValid = self.fileTypeSettings[cat];
                vType = isValid(type, name) ? cat : '';
                if (!$h.isEmpty(vType)) {
                    return vType;
                }
            }
            return 'other';
        },
        _getPreviewIcon: function (fname) {
            var self = this, ext, out = null;
            if (fname && fname.indexOf('.') > -1) {
                ext = fname.split('.').pop();
                if (self.previewFileIconSettings) {
                    out = self.previewFileIconSettings[ext] || self.previewFileIconSettings[ext.toLowerCase()] || null;
                }
                if (self.previewFileExtSettings) {
                    $.each(self.previewFileExtSettings, function (key, func) {
                        if (self.previewFileIconSettings[key] && func(ext)) {
                            out = self.previewFileIconSettings[key];
                            //noinspection UnnecessaryReturnStatementJS
                            return;
                        }
                    });
                }
            }
            return out;
        },
        _parseFilePreviewIcon: function (content, fname) {
            var self = this, icn = self._getPreviewIcon(fname) || self.previewFileIcon, out = content;
            if (out.indexOf('{previewFileIcon}') > -1) {
                out = out.setTokens({'previewFileIconClass': self.previewFileIconClass, 'previewFileIcon': icn});
            }
            return out;
        },
        _raise: function (event, params) {
            var self = this, e = $.Event(event);
            if (params !== undefined) {
                self.$element.trigger(e, params);
            } else {
                self.$element.trigger(e);
            }
            if (e.isDefaultPrevented() || e.result === false) {
                return false;
            }
            switch (event) {
                // ignore these events
                case 'filebatchuploadcomplete':
                case 'filebatchuploadsuccess':
                case 'fileuploaded':
                case 'fileclear':
                case 'filecleared':
                case 'filereset':
                case 'fileerror':
                case 'filefoldererror':
                case 'fileuploaderror':
                case 'filebatchuploaderror':
                case 'filedeleteerror':
                case 'filecustomerror':
                case 'filesuccessremove':
                    break;
                // receive data response via `filecustomerror` event`
                default:
                    if (!self.ajaxAborted) {
                        self.ajaxAborted = e.result;
                    }
                    break;
            }
            return true;
        },
        _listenFullScreen: function (isFullScreen) {
            var self = this, $modal = self.$modal, $btnFull, $btnBord;
            if (!$modal || !$modal.length) {
                return;
            }
            $btnFull = $modal && $modal.find('.btn-fullscreen');
            $btnBord = $modal && $modal.find('.btn-borderless');
            if (!$btnFull.length || !$btnBord.length) {
                return;
            }
            $btnFull.removeClass('active').attr('aria-pressed', 'false');
            $btnBord.removeClass('active').attr('aria-pressed', 'false');
            if (isFullScreen) {
                $btnFull.addClass('active').attr('aria-pressed', 'true');
            } else {
                $btnBord.addClass('active').attr('aria-pressed', 'true');
            }
            if ($modal.hasClass('file-zoom-fullscreen')) {
                self._maximizeZoomDialog();
            } else {
                if (isFullScreen) {
                    self._maximizeZoomDialog();
                } else {
                    $btnBord.removeClass('active').attr('aria-pressed', 'false');
                }
            }
        },
        _listen: function () {
            var self = this, $el = self.$element, $form = self.$form, $cont = self.$container, fullScreenEvents;
            self._handler($el, 'change', $.proxy(self._change, self));
            if (self.showBrowse) {
                self._handler(self.$btnFile, 'click', $.proxy(self._browse, self));
            }
            self._handler($cont.find('.fileinput-remove:not([disabled])'), 'click', $.proxy(self.clear, self));
            self._handler($cont.find('.fileinput-cancel'), 'click', $.proxy(self.cancel, self));
            self._initDragDrop();
            self._handler($form, 'reset', $.proxy(self.clear, self));
            if (!self.isAjaxUpload) {
                self._handler($form, 'submit', $.proxy(self._submitForm, self));
            }
            self._handler(self.$container.find('.fileinput-upload'), 'click', $.proxy(self._uploadClick, self));
            self._handler($(window), 'resize', function () {
                self._listenFullScreen(screen.width === window.innerWidth && screen.height === window.innerHeight);
            });
            fullScreenEvents = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange';
            self._handler($(document), fullScreenEvents, function () {
                self._listenFullScreen($h.checkFullScreen());
            });
            self._autoFitContent();
            self._initClickable();
        },
        _autoFitContent: function () {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                self = this, config = width < 400 ? (self.previewSettingsSmall || self.defaults.previewSettingsSmall) :
                (self.previewSettings || self.defaults.previewSettings), sel;
            $.each(config, function (cat, settings) {
                sel = '.file-preview-frame .file-preview-' + cat;
                self.$preview.find(sel + '.kv-preview-data,' + sel + ' .kv-preview-data').css(settings);
            });
        },
        _initClickable: function () {
            var self = this, $zone;
            if (!self.isClickable) {
                return;
            }
            $zone = self.isAjaxUpload ? self.$dropZone : self.$preview.find('.file-default-preview');
            $h.addCss($zone, 'clickable');
            $zone.attr('tabindex', -1);
            self._handler($zone, 'click', function (e) {
                var $tar = $(e.target);
                if (!$zone.find('.kv-fileinput-error:visible').length && 
                    (!$tar.parents('.file-preview-thumbnails').length || $tar.parents('.file-default-preview').length)) {
                    self.$element.trigger('click');
                    $zone.blur();
                }
            });
        },
        _initDragDrop: function () {
            var self = this, $zone = self.$dropZone;
            if (self.isAjaxUpload && self.dropZoneEnabled && self.showPreview) {
                self._handler($zone, 'dragenter dragover', $.proxy(self._zoneDragEnter, self));
                self._handler($zone, 'dragleave', $.proxy(self._zoneDragLeave, self));
                self._handler($zone, 'drop', $.proxy(self._zoneDrop, self));
                self._handler($(document), 'dragenter dragover drop', self._zoneDragDropInit);
            }
        },
        _zoneDragDropInit: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        _zoneDragEnter: function (e) {
            var self = this, hasFiles = $.inArray('Files', e.originalEvent.dataTransfer.types) > -1;
            self._zoneDragDropInit(e);
            if (self.isDisabled || !hasFiles) {
                e.originalEvent.dataTransfer.effectAllowed = 'none';
                e.originalEvent.dataTransfer.dropEffect = 'none';
                return;
            }
            $h.addCss(self.$dropZone, 'file-highlighted');
        },
        _zoneDragLeave: function (e) {
            var self = this;
            self._zoneDragDropInit(e);
            if (self.isDisabled) {
                return;
            }
            self.$dropZone.removeClass('file-highlighted');
        },
        _zoneDrop: function (e) {
            var self = this;
            e.preventDefault();
            /** @namespace e.originalEvent.dataTransfer */
            if (self.isDisabled || $h.isEmpty(e.originalEvent.dataTransfer.files)) {
                return;
            }
            self._change(e, 'dragdrop');
            self.$dropZone.removeClass('file-highlighted');
        },
        _uploadClick: function (e) {
            var self = this, $btn = self.$container.find('.fileinput-upload'), $form,
                isEnabled = !$btn.hasClass('disabled') && $h.isEmpty($btn.attr('disabled'));
            if (e && e.isDefaultPrevented()) {
                return;
            }
            if (!self.isAjaxUpload) {
                if (isEnabled && $btn.attr('type') !== 'submit') {
                    $form = $btn.closest('form');
                    // downgrade to normal form submit if possible
                    if ($form.length) {
                        $form.trigger('submit');
                    }
                    e.preventDefault();
                }
                return;
            }
            e.preventDefault();
            if (isEnabled) {
                self.upload();
            }
        },
        _submitForm: function () {
            var self = this;
            return self._isFileSelectionValid() && !self._abort({});
        },
        _clearPreview: function () {
            var self = this, $p = self.$preview,
                $thumbs = self.showUploadedThumbs ? self.getFrames(':not(.file-preview-success)') : self.getFrames();
            $thumbs.each(function () {
                var $thumb = $(this);
                $thumb.remove();
                $h.cleanZoomCache($p.find('#zoom-' + $thumb.attr('id')));
            });
            if (!self.getFrames().length || !self.showPreview) {
                self._resetUpload();
            }
            self._validateDefaultPreview();
        },
        _initSortable: function () {
            var self = this, $el = self.$preview, settings, selector = '.' + $h.SORT_CSS;
            if (!window.KvSortable || $el.find(selector).length === 0) {
                return;
            }
            //noinspection JSUnusedGlobalSymbols
            settings = {
                handle: '.drag-handle-init',
                dataIdAttr: 'data-preview-id',
                scroll: false,
                draggable: selector,
                onSort: function (e) {
                    var oldIndex = e.oldIndex, newIndex = e.newIndex, $frame, $dragEl;
                    self.initialPreview = $h.moveArray(self.initialPreview, oldIndex, newIndex);
                    self.initialPreviewConfig = $h.moveArray(self.initialPreviewConfig, oldIndex, newIndex);
                    self.previewCache.init();
                    for (var i = 0; i < self.initialPreviewConfig.length; i++) {
                        if (self.initialPreviewConfig[i] !== null) {
                            $dragEl = $(e.item);
                            $frame = $dragEl.closest($h.FRAMES);
                            $frame.attr('data-fileindex', 'init_' + i).attr('data-fileindex', 'init_' + i);
                        }
                    }
                    self._raise('filesorted', {
                        previewId: $(e.item).attr('id'),
                        'oldIndex': oldIndex,
                        'newIndex': newIndex,
                        stack: self.initialPreviewConfig
                    });
                }
            };
            if ($el.data('kvsortable')) {
                $el.kvsortable('destroy');
            }
            $.extend(true, settings, self.fileActionSettings.dragSettings);
            $el.kvsortable(settings);
        },
        _setPreviewContent: function (content) {
            var self = this;
            self.$preview.html(content);
            self._autoFitContent();
        },
        _initPreview: function (isInit) {
            var self = this, cap = self.initialCaption || '', out;
            if (!self.previewCache.count()) {
                self._clearPreview();
                if (isInit) {
                    self._setCaption(cap);
                } else {
                    self._initCaption();
                }
                return;
            }
            out = self.previewCache.out();
            cap = isInit && self.initialCaption ? self.initialCaption : out.caption;
            self._setPreviewContent(out.content);
            self._setInitThumbAttr();
            self._setCaption(cap);
            self._initSortable();
            if (!$h.isEmpty(out.content)) {
                self.$container.removeClass('file-input-new');
            }
        },
        _getZoomButton: function (type) {
            var self = this, label = self.previewZoomButtonIcons[type], css = self.previewZoomButtonClasses[type],
                title = ' title="' + (self.previewZoomButtonTitles[type] || '') + '" ',
                params = title + (type === 'close' ? ' data-dismiss="modal" aria-hidden="true"' : '');
            if (type === 'fullscreen' || type === 'borderless' || type === 'toggleheader') {
                params += ' data-toggle="button" aria-pressed="false" autocomplete="off"';
            }
            return '<button type="button" class="' + css + ' btn-' + type + '"' + params + '>' + label + '</button>';
        },
        _getModalContent: function () {
            var self = this;
            return self._getLayoutTemplate('modal').setTokens({
                'rtl': self.rtl ? ' kv-rtl' : '',
                'zoomFrameClass': self.frameClass,
                'heading': self.msgZoomModalHeading,
                'prev': self._getZoomButton('prev'),
                'next': self._getZoomButton('next'),
                'toggleheader': self._getZoomButton('toggleheader'),
                'fullscreen': self._getZoomButton('fullscreen'),
                'borderless': self._getZoomButton('borderless'),
                'close': self._getZoomButton('close')
            });
        },
        _listenModalEvent: function (event) {
            var self = this, $modal = self.$modal, getParams = function (e) {
                return {
                    sourceEvent: e,
                    previewId: $modal.data('previewId'),
                    modal: $modal
                };
            };
            $modal.on(event + '.bs.modal', function (e) {
                var $btnFull = $modal.find('.btn-fullscreen'), $btnBord = $modal.find('.btn-borderless');
                self._raise('filezoom' + event, getParams(e));
                if (event === 'shown') {
                    $btnBord.removeClass('active').attr('aria-pressed', 'false');
                    $btnFull.removeClass('active').attr('aria-pressed', 'false');
                    if ($modal.hasClass('file-zoom-fullscreen')) {
                        self._maximizeZoomDialog();
                        if ($h.checkFullScreen()) {
                            $btnFull.addClass('active').attr('aria-pressed', 'true');
                        } else {
                            $btnBord.addClass('active').attr('aria-pressed', 'true');
                        }
                    }
                }
            });
        },
        _initZoom: function () {
            var self = this, $dialog, modalMain = self._getLayoutTemplate('modalMain'), modalId = '#' + $h.MODAL_ID;
            if (!self.showPreview) {
                return;
            }
            self.$modal = $(modalId);
            if (!self.$modal || !self.$modal.length) {
                $dialog = $(document.createElement('div')).html(modalMain).insertAfter(self.$container);
                self.$modal = $(modalId).insertBefore($dialog);
                $dialog.remove();
            }
            $h.initModal(self.$modal);
            self.$modal.html(self._getModalContent());
            $.each($h.MODAL_EVENTS, function (key, event) {
                self._listenModalEvent(event);
            });
        },
        _initZoomButtons: function () {
            var self = this, previewId = self.$modal.data('previewId') || '', $first, $last,
                thumbs = self.getFrames().toArray(), len = thumbs.length, $prev = self.$modal.find('.btn-prev'),
                $next = self.$modal.find('.btn-next');
            if (thumbs.length < 2) {
                $prev.hide();
                $next.hide();
                return;
            } else {
                $prev.show();
                $next.show();
            }
            if (!len) {
                return;
            }
            $first = $(thumbs[0]);
            $last = $(thumbs[len - 1]);
            $prev.removeAttr('disabled');
            $next.removeAttr('disabled');
            if ($first.length && $first.attr('id') === previewId) {
                $prev.attr('disabled', true);
            }
            if ($last.length && $last.attr('id') === previewId) {
                $next.attr('disabled', true);
            }
        },
        _maximizeZoomDialog: function () {
            var self = this, $modal = self.$modal, $head = $modal.find('.modal-header:visible'),
                $foot = $modal.find('.modal-footer:visible'), $body = $modal.find('.modal-body'),
                h = $(window).height(), diff = 0;
            $modal.addClass('file-zoom-fullscreen');
            if ($head && $head.length) {
                h -= $head.outerHeight(true);
            }
            if ($foot && $foot.length) {
                h -= $foot.outerHeight(true);
            }
            if ($body && $body.length) {
                diff = $body.outerHeight(true) - $body.height();
                h -= diff;
            }
            $modal.find('.kv-zoom-body').height(h);
        },
        _resizeZoomDialog: function (fullScreen) {
            var self = this, $modal = self.$modal, $btnFull = $modal.find('.btn-fullscreen'),
                $btnBord = $modal.find('.btn-borderless');
            if ($modal.hasClass('file-zoom-fullscreen')) {
                $h.toggleFullScreen(false);
                if (!fullScreen) {
                    if (!$btnFull.hasClass('active')) {
                        $modal.removeClass('file-zoom-fullscreen');
                        self.$modal.find('.kv-zoom-body').css('height', self.zoomModalHeight);
                    } else {
                        $btnFull.removeClass('active').attr('aria-pressed', 'false');
                    }
                } else {
                    if (!$btnFull.hasClass('active')) {
                        $modal.removeClass('file-zoom-fullscreen');
                        self._resizeZoomDialog(true);
                        if ($btnBord.hasClass('active')) {
                            $btnBord.removeClass('active').attr('aria-pressed', 'false');
                        }
                    }
                }
            } else {
                if (!fullScreen) {
                    self._maximizeZoomDialog();
                    return;
                }
                $h.toggleFullScreen(true);
            }
            $modal.focus();
        },
        _setZoomContent: function ($frame, animate) {
            var self = this, $content, tmplt, body, title, $body, $dataEl, config, pid = $frame.attr('id'),
                $modal = self.$modal, $prev = $modal.find('.btn-prev'), $next = $modal.find('.btn-next'), $tmp,
                $btnFull = $modal.find('.btn-fullscreen'), $btnBord = $modal.find('.btn-borderless'), cap, size,
                $btnTogh = $modal.find('.btn-toggleheader'), $zoomPreview = self.$preview.find('#zoom-' + pid);
            tmplt = $zoomPreview.attr('data-template') || 'generic';
            $content = $zoomPreview.find('.kv-file-content');
            body = $content.length ? $content.html() : '';
            cap = $frame.data('caption') || '';
            size = $frame.data('size') || '';
            title = cap + ' ' + size;
            $modal.find('.kv-zoom-title').attr('title', $('<div/>').html(title).text()).html(title);
            $body = $modal.find('.kv-zoom-body');
            $modal.removeClass('kv-single-content');
            if (animate) {
                $tmp = $body.addClass('file-thumb-loading').clone().insertAfter($body);
                $body.html(body).hide();
                $tmp.fadeOut('fast', function () {
                    $body.fadeIn('fast', function () {
                        $body.removeClass('file-thumb-loading');
                    });
                    $tmp.remove();
                });
            } else {
                $body.html(body);
            }
            config = self.previewZoomSettings[tmplt];
            if (config) {
                $dataEl = $body.find('.kv-preview-data');
                $h.addCss($dataEl, 'file-zoom-detail');
                $.each(config, function (key, value) {
                    $dataEl.css(key, value);
                    if (($dataEl.attr('width') && key === 'width') || ($dataEl.attr('height') && key === 'height')) {
                        $dataEl.removeAttr(key);
                    }
                });
            }
            $modal.data('previewId', pid);
            var $img = $body.find('img');
            if ($img.length) {
                $h.adjustOrientedImage($img, true);
            }
            self._handler($prev, 'click', function () {
                self._zoomSlideShow('prev', pid);
            });
            self._handler($next, 'click', function () {
                self._zoomSlideShow('next', pid);
            });
            self._handler($btnFull, 'click', function () {
                self._resizeZoomDialog(true);
            });
            self._handler($btnBord, 'click', function () {
                self._resizeZoomDialog(false);
            });
            self._handler($btnTogh, 'click', function () {
                var $header = $modal.find('.modal-header'), $floatBar = $modal.find('.modal-body .floating-buttons'),
                    ht, $actions = $header.find('.kv-zoom-actions'), resize = function (height) {
                        var $body = self.$modal.find('.kv-zoom-body'), h = self.zoomModalHeight;
                        if ($modal.hasClass('file-zoom-fullscreen')) {
                            h = $body.outerHeight(true);
                            if (!height) {
                                h = h - $header.outerHeight(true);
                            }
                        }
                        $body.css('height', height ? h + height : h);
                    };
                if ($header.is(':visible')) {
                    ht = $header.outerHeight(true);
                    $header.slideUp('slow', function () {
                        $actions.find('.btn').appendTo($floatBar);
                        resize(ht);
                    });
                } else {
                    $floatBar.find('.btn').appendTo($actions);
                    $header.slideDown('slow', function () {
                        resize();
                    });
                }
                $modal.focus();
            });
            self._handler($modal, 'keydown', function (e) {
                var key = e.which || e.keyCode;
                if (key === 37 && !$prev.attr('disabled')) {
                    self._zoomSlideShow('prev', pid);
                }
                if (key === 39 && !$next.attr('disabled')) {
                    self._zoomSlideShow('next', pid);
                }
            });
        },
        _zoomPreview: function ($btn) {
            var self = this, $frame, $modal = self.$modal;
            if (!$btn.length) {
                throw 'Cannot zoom to detailed preview!';
            }
            $h.initModal($modal);
            $modal.html(self._getModalContent());
            $frame = $btn.closest($h.FRAMES);
            self._setZoomContent($frame);
            $modal.modal('show');
            self._initZoomButtons();
        },
        _zoomSlideShow: function (dir, previewId) {
            var self = this, $btn = self.$modal.find('.kv-zoom-actions .btn-' + dir), $targFrame, i,
                thumbs = self.getFrames().toArray(), len = thumbs.length, out;
            if ($btn.attr('disabled')) {
                return;
            }
            for (i = 0; i < len; i++) {
                if ($(thumbs[i]).attr('id') === previewId) {
                    out = dir === 'prev' ? i - 1 : i + 1;
                    break;
                }
            }
            if (out < 0 || out >= len || !thumbs[out]) {
                return;
            }
            $targFrame = $(thumbs[out]);
            if ($targFrame.length) {
                self._setZoomContent($targFrame, true);
            }
            self._initZoomButtons();
            self._raise('filezoom' + dir, {'previewId': previewId, modal: self.$modal});
        },
        _initZoomButton: function () {
            var self = this;
            self.$preview.find('.kv-file-zoom').each(function () {
                var $el = $(this);
                self._handler($el, 'click', function () {
                    self._zoomPreview($el);
                });
            });
        },
        _clearObjects: function ($el) {
            $el.find('video audio').each(function () {
                this.pause();
                $(this).remove();
            });
            $el.find('img object div').each(function () {
                $(this).remove();
            });
        },
        _clearFileInput: function () {
            var self = this, $el = self.$element, $srcFrm, $tmpFrm, $tmpEl;
            self.fileInputCleared = true;
            if ($h.isEmpty($el.val())) {
                return;
            }
            // Fix for IE ver < 11, that does not clear file inputs. Requires a sequence of steps to prevent IE
            // crashing but still allow clearing of the file input.
            if (self.isIE9 || self.isIE10) {
                $srcFrm = $el.closest('form');
                $tmpFrm = $(document.createElement('form'));
                $tmpEl = $(document.createElement('div'));
                $el.before($tmpEl);
                if ($srcFrm.length) {
                    $srcFrm.after($tmpFrm);
                } else {
                    $tmpEl.after($tmpFrm);
                }
                $tmpFrm.append($el).trigger('reset');
                $tmpEl.before($el).remove();
                $tmpFrm.remove();
            } else { // normal input clear behavior for other sane browsers
                $el.val('');
            }
        },
        _resetUpload: function () {
            var self = this;
            self.uploadCache = {content: [], config: [], tags: [], append: true};
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.uploadAsyncCount = 0;
            self.loadedImages = [];
            self.totalImagesCount = 0;
            self.$btnUpload.removeAttr('disabled');
            self._setProgress(0);
            self.$progress.hide();
            self._resetErrors(false);
            self.ajaxAborted = false;
            self.ajaxRequests = [];
            self._resetCanvas();
            self.cacheInitialPreview = {};
            if (self.overwriteInitial) {
                self.initialPreview = [];
                self.initialPreviewConfig = [];
                self.initialPreviewThumbTags = [];
                self.previewCache.data = {
                    content: [],
                    config: [],
                    tags: []
                };
            }
        },
        _resetCanvas: function () {
            var self = this;
            if (self.canvas && self.imageCanvasContext) {
                self.imageCanvasContext.clearRect(0, 0, self.canvas.width, self.canvas.height);
            }
        },
        _hasInitialPreview: function () {
            var self = this;
            return !self.overwriteInitial && self.previewCache.count();
        },
        _resetPreview: function () {
            var self = this, out, cap;
            if (self.previewCache.count()) {
                out = self.previewCache.out();
                self._setPreviewContent(out.content);
                self._setInitThumbAttr();
                cap = self.initialCaption ? self.initialCaption : out.caption;
                self._setCaption(cap);
            } else {
                self._clearPreview();
                self._initCaption();
            }
            if (self.showPreview) {
                self._initZoom();
                self._initSortable();
            }
        },
        _clearDefaultPreview: function () {
            var self = this;
            self.$preview.find('.file-default-preview').remove();
        },
        _validateDefaultPreview: function () {
            var self = this;
            if (!self.showPreview || $h.isEmpty(self.defaultPreviewContent)) {
                return;
            }
            self._setPreviewContent('<div class="file-default-preview">' + self.defaultPreviewContent + '</div>');
            self.$container.removeClass('file-input-new');
            self._initClickable();
        },
        _resetPreviewThumbs: function (isAjax) {
            var self = this, out;
            if (isAjax) {
                self._clearPreview();
                self.clearStack();
                return;
            }
            if (self._hasInitialPreview()) {
                out = self.previewCache.out();
                self._setPreviewContent(out.content);
                self._setInitThumbAttr();
                self._setCaption(out.caption);
                self._initPreviewActions();
            } else {
                self._clearPreview();
            }
        },
        _getLayoutTemplate: function (t) {
            var self = this, template = self.layoutTemplates[t];
            if ($h.isEmpty(self.customLayoutTags)) {
                return template;
            }
            return $h.replaceTags(template, self.customLayoutTags);
        },
        _getPreviewTemplate: function (t) {
            var self = this, template = self.previewTemplates[t];
            if ($h.isEmpty(self.customPreviewTags)) {
                return template;
            }
            return $h.replaceTags(template, self.customPreviewTags);
        },
        _getOutData: function (jqXHR, responseData, filesData) {
            var self = this;
            jqXHR = jqXHR || {};
            responseData = responseData || {};
            filesData = filesData || self.filestack.slice(0) || {};
            return {
                form: self.formdata,
                files: filesData,
                filenames: self.filenames,
                filescount: self.getFilesCount(),
                extra: self._getExtraData(),
                response: responseData,
                reader: self.reader,
                jqXHR: jqXHR
            };
        },
        _getMsgSelected: function (n) {
            var self = this, strFiles = n === 1 ? self.fileSingle : self.filePlural;
            return n > 0 ? self.msgSelected.replace('{n}', n).replace('{files}', strFiles) : self.msgNoFilesSelected;
        },
        _getFrame: function (id) {
            var self = this, $frame = $('#' + id);
            if (!$frame.length) {
                self._log('Invalid thumb frame with id: "' + id + '".');
                return null;
            }
            return $frame;
        },
        _getThumbs: function (css) {
            css = css || '';
            return this.getFrames(':not(.file-preview-initial)' + css);
        },
        _getExtraData: function (previewId, index) {
            var self = this, data = self.uploadExtraData;
            if (typeof self.uploadExtraData === "function") {
                data = self.uploadExtraData(previewId, index);
            }
            return data;
        },
        _initXhr: function (xhrobj, previewId, fileCount) {
            var self = this;
            if (xhrobj.upload) {
                xhrobj.upload.addEventListener('progress', function (event) {
                    var pct = 0, total = event.total, position = event.loaded || event.position;
                    /** @namespace event.lengthComputable */
                    if (event.lengthComputable) {
                        pct = Math.floor(position / total * 100);
                    }
                    if (previewId) {
                        self._setAsyncUploadStatus(previewId, pct, fileCount);
                    } else {
                        self._setProgress(pct);
                    }
                }, false);
            }
            return xhrobj;
        },
        _mergeAjaxCallback: function (funcName, srcFunc, type) {
            var self = this, settings = self.ajaxSettings, flag = self.mergeAjaxCallbacks, targFunc;
            if (type === 'delete') {
                settings = self.ajaxDeleteSettings;
                flag = self.mergeAjaxDeleteCallbacks;
            }
            targFunc = settings[funcName];
            if (flag && typeof targFunc === "function") {
                if (flag === 'before') {
                    settings[funcName] = function () {
                        targFunc.apply(this, arguments);
                        srcFunc.apply(this, arguments);
                    };
                } else {
                    settings[funcName] = function () {
                        srcFunc.apply(this, arguments);
                        targFunc.apply(this, arguments);
                    };
                }
            } else {
                settings[funcName] = srcFunc;
            }
            if (type === 'delete') {
                self.ajaxDeleteSettings = settings;
            } else {
                self.ajaxSettings = settings;
            }
        },
        _ajaxSubmit: function (fnBefore, fnSuccess, fnComplete, fnError, previewId, index) {
            var self = this, settings;
            if (!self._raise('filepreajax', [previewId, index])) {
                return;
            }
            self._uploadExtra(previewId, index);
            self._mergeAjaxCallback('beforeSend', fnBefore);
            self._mergeAjaxCallback('success', fnSuccess);
            self._mergeAjaxCallback('complete', fnComplete);
            self._mergeAjaxCallback('error', fnError);
            settings = $.extend(true, {}, {
                xhr: function () {
                    var xhrobj = $.ajaxSettings.xhr();
                    return self._initXhr(xhrobj, previewId, self.getFileStack().length);
                },
                url: index && self.uploadUrlThumb ? self.uploadUrlThumb : self.uploadUrl,
                type: 'POST',
                dataType: 'json',
                data: self.formdata,
                cache: false,
                processData: false,
                contentType: false
            }, self.ajaxSettings);
            self.ajaxRequests.push($.ajax(settings));
        },
        _mergeArray: function (prop, content) {
            var self = this, arr1 = $h.cleanArray(self[prop]), arr2 = $h.cleanArray(content);
            self[prop] = arr1.concat(arr2);
        },
        _initUploadSuccess: function (out, $thumb, allFiles) {
            var self = this, append, data, index, $div, $newCache, content, config, tags, i;
            if (!self.showPreview || typeof out !== 'object' || $.isEmptyObject(out)) {
                return;
            }
            if (out.initialPreview !== undefined && out.initialPreview.length > 0) {
                self.hasInitData = true;
                content = out.initialPreview || [];
                config = out.initialPreviewConfig || [];
                tags = out.initialPreviewThumbTags || [];
                append = out.append === undefined || out.append;
                if (content.length > 0 && !$h.isArray(content)) {
                    content = content.split(self.initialPreviewDelimiter);
                }
                self._mergeArray('initialPreview', content);
                self._mergeArray('initialPreviewConfig', config);
                self._mergeArray('initialPreviewThumbTags', tags);
                if ($thumb !== undefined) {
                    if (!allFiles) {
                        index = self.previewCache.add(content, config[0], tags[0], append);
                        data = self.previewCache.get(index, false);
                        $div = $(document.createElement('div')).html(data).hide().insertAfter($thumb);
                        $newCache = $div.find('.kv-zoom-cache');
                        if ($newCache && $newCache.length) {
                            $newCache.insertAfter($thumb);
                        }
                        $thumb.fadeOut('slow', function () {
                            var $newThumb = $div.find('.file-preview-frame');
                            if ($newThumb && $newThumb.length) {
                                $newThumb.insertBefore($thumb).fadeIn('slow').css('display:inline-block');
                            }
                            self._initPreviewActions();
                            self._clearFileInput();
                            $h.cleanZoomCache(self.$preview.find('#zoom-' + $thumb.attr('id')));
                            $thumb.remove();
                            $div.remove();
                            self._initSortable();
                        });
                    } else {
                        i = $thumb.attr('data-fileindex');
                        self.uploadCache.content[i] = content[0];
                        self.uploadCache.config[i] = config[0] || [];
                        self.uploadCache.tags[i] = tags[0] || [];
                        self.uploadCache.append = append;
                    }
                } else {
                    self.previewCache.set(content, config, tags, append);
                    self._initPreview();
                    self._initPreviewActions();
                }
            }
        },
        _initSuccessThumbs: function () {
            var self = this;
            if (!self.showPreview) {
                return;
            }
            self._getThumbs($h.FRAMES + '.file-preview-success').each(function () {
                var $thumb = $(this), $preview = self.$preview, $remove = $thumb.find('.kv-file-remove');
                $remove.removeAttr('disabled');
                self._handler($remove, 'click', function () {
                    var id = $thumb.attr('id'),
                        out = self._raise('filesuccessremove', [id, $thumb.attr('data-fileindex')]);
                    $h.cleanMemory($thumb);
                    if (out === false) {
                        return;
                    }
                    $thumb.fadeOut('slow', function () {
                        $h.cleanZoomCache($preview.find('#zoom-' + id));
                        $thumb.remove();
                        if (!self.getFrames().length) {
                            self.reset();
                        }
                    });
                });
            });
        },
        _checkAsyncComplete: function () {
            var self = this, previewId, i;
            for (i = 0; i < self.filestack.length; i++) {
                if (self.filestack[i]) {
                    previewId = self.previewInitId + "-" + i;
                    if ($.inArray(previewId, self.uploadLog) === -1) {
                        return false;
                    }
                }
            }
            return (self.uploadAsyncCount === self.uploadLog.length);
        },
        _uploadExtra: function (previewId, index) {
            var self = this, data = self._getExtraData(previewId, index);
            if (data.length === 0) {
                return;
            }
            $.each(data, function (key, value) {
                self.formdata.append(key, value);
            });
        },
        _uploadSingle: function (i, isBatch) {
            var self = this, total = self.getFileStack().length, formdata = new FormData(), outData,
                previewId = self.previewInitId + "-" + i, $thumb, chkComplete, $btnUpload, $btnDelete,
                hasPostData = self.filestack.length > 0 || !$.isEmptyObject(self.uploadExtraData), uploadFailed,
                $prog = $('#' + previewId).find('.file-thumb-progress'), fnBefore, fnSuccess, fnComplete, fnError,
                updateUploadLog, params = {id: previewId, index: i};
            self.formdata = formdata;
            if (self.showPreview) {
                $thumb = $('#' + previewId + ':not(.file-preview-initial)');
                $btnUpload = $thumb.find('.kv-file-upload');
                $btnDelete = $thumb.find('.kv-file-remove');
                $prog.show();
            }
            if (total === 0 || !hasPostData || ($btnUpload && $btnUpload.hasClass('disabled')) || self._abort(params)) {
                return;
            }
            updateUploadLog = function (i, previewId) {
                if (!uploadFailed) {
                    self.updateStack(i, undefined);
                }
                self.uploadLog.push(previewId);
                if (self._checkAsyncComplete()) {
                    self.fileBatchCompleted = true;
                }
            };
            chkComplete = function () {
                var u = self.uploadCache, $initThumbs, i, j, len = 0, data = self.cacheInitialPreview;
                if (!self.fileBatchCompleted) {
                    return;
                }
                if (data && data.content) {
                    len = data.content.length;
                }
                setTimeout(function () {
                    var triggerReset = self.getFileStack(true).length === 0;
                    if (self.showPreview) {
                        self.previewCache.set(u.content, u.config, u.tags, u.append);
                        if (len) {
                            for (i = 0; i < u.content.length; i++) {
                                j = i + len;
                                data.content[j] = u.content[i];
                                //noinspection JSUnresolvedVariable
                                if (data.config.length) {
                                    data.config[j] = u.config[i];
                                }
                                if (data.tags.length) {
                                    data.tags[j] = u.tags[i];
                                }
                            }
                            self.initialPreview = $h.cleanArray(data.content);
                            self.initialPreviewConfig = $h.cleanArray(data.config);
                            self.initialPreviewThumbTags = $h.cleanArray(data.tags);
                        } else {
                            self.initialPreview = u.content;
                            self.initialPreviewConfig = u.config;
                            self.initialPreviewThumbTags = u.tags;
                        }
                        self.cacheInitialPreview = {};
                        if (self.hasInitData) {
                            self._initPreview();
                            self._initPreviewActions();
                        }
                    }
                    self.unlock(triggerReset);
                    if (triggerReset) {
                        self._clearFileInput();
                    }
                    $initThumbs = self.$preview.find('.file-preview-initial');
                    if (self.uploadAsync && $initThumbs.length) {
                        $h.addCss($initThumbs, $h.SORT_CSS);
                        self._initSortable();
                    }
                    self._raise('filebatchuploadcomplete', [self.filestack, self._getExtraData()]);
                    self.uploadCount = 0;
                    self.uploadStatus = {};
                    self.uploadLog = [];
                    self._setProgress(101);
                    self.ajaxAborted = false;
                }, 100);
            };
            fnBefore = function (jqXHR) {
                outData = self._getOutData(jqXHR);
                self.fileBatchCompleted = false;
                if (!isBatch) {
                    self.ajaxAborted = false;
                }
                if (self.showPreview) {
                    if (!$thumb.hasClass('file-preview-success')) {
                        self._setThumbStatus($thumb, 'Loading');
                        $h.addCss($thumb, 'file-uploading');
                    }
                    $btnUpload.attr('disabled', true);
                    $btnDelete.attr('disabled', true);
                }
                if (!isBatch) {
                    self.lock();
                }
                self._raise('filepreupload', [outData, previewId, i]);
                $.extend(true, params, outData);
                if (self._abort(params)) {
                    jqXHR.abort();
                    if (!isBatch) {
                        self._setThumbStatus($thumb, 'New');
                        $thumb.removeClass('file-uploading');
                        $btnUpload.removeAttr('disabled');
                        $btnDelete.removeAttr('disabled');
                        self.unlock();
                    }
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function (data, textStatus, jqXHR) {
                var pid = self.showPreview && $thumb.attr('id') ? $thumb.attr('id') : previewId;
                outData = self._getOutData(jqXHR, data);
                $.extend(true, params, outData);
                setTimeout(function () {
                    if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
                        if (self.showPreview) {
                            self._setThumbStatus($thumb, 'Success');
                            $btnUpload.hide();
                            self._initUploadSuccess(data, $thumb, isBatch);
                            self._setProgress(101, $prog);
                        }
                        self._raise('fileuploaded', [outData, pid, i]);
                        if (!isBatch) {
                            self.updateStack(i, undefined);
                        } else {
                            updateUploadLog(i, pid);
                        }
                    } else {
                        uploadFailed = true;
                        self._showUploadError(data.error, params);
                        self._setPreviewError($thumb, i, self.filestack[i], self.retryErrorUploads);
                        if (!self.retryErrorUploads) {
                            $btnUpload.hide();
                        }
                        if (isBatch) {
                            updateUploadLog(i, pid);
                        }
                        self._setProgress(101, $('#' + pid).find('.file-thumb-progress'), self.msgUploadError);
                    }
                }, 100);
            };
            fnComplete = function () {
                setTimeout(function () {
                    if (self.showPreview) {
                        $btnUpload.removeAttr('disabled');
                        $btnDelete.removeAttr('disabled');
                        $thumb.removeClass('file-uploading');
                    }
                    if (!isBatch) {
                        self.unlock(false);
                        self._clearFileInput();
                    } else {
                        chkComplete();
                    }
                    self._initSuccessThumbs();
                }, 100);
            };
            fnError = function (jqXHR, textStatus, errorThrown) {
                var op = self.ajaxOperations.uploadThumb,
                    errMsg = self._parseError(op, jqXHR, errorThrown, (isBatch && self.filestack[i].name ? self.filestack[i].name : null));
                uploadFailed = true;
                setTimeout(function () {
                    if (isBatch) {
                        updateUploadLog(i, previewId);
                    }
                    self.uploadStatus[previewId] = 100;
                    self._setPreviewError($thumb, i, self.filestack[i], self.retryErrorUploads);
                    if (!self.retryErrorUploads) {
                        $btnUpload.hide();
                    }
                    $.extend(true, params, self._getOutData(jqXHR));
                    self._setProgress(101, $prog, self.msgAjaxProgressError.replace('{operation}', op));
                    self._setProgress(101, $('#' + previewId).find('.file-thumb-progress'), self.msgUploadError);
                    self._showUploadError(errMsg, params);
                }, 100);
            };
            formdata.append(self.uploadFileAttr, self.filestack[i], self.filenames[i]);
            formdata.append('file_id', i);
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError, previewId, i);
        },
        _uploadBatch: function () {
            var self = this, files = self.filestack, total = files.length, params = {}, fnBefore, fnSuccess, fnError,
                fnComplete, hasPostData = self.filestack.length > 0 || !$.isEmptyObject(self.uploadExtraData),
                setAllUploaded;
            self.formdata = new FormData();
            if (total === 0 || !hasPostData || self._abort(params)) {
                return;
            }
            setAllUploaded = function () {
                $.each(files, function (key) {
                    self.updateStack(key, undefined);
                });
                self._clearFileInput();
            };
            fnBefore = function (jqXHR) {
                self.lock();
                var outData = self._getOutData(jqXHR);
                self.ajaxAborted = false;
                if (self.showPreview) {
                    self._getThumbs().each(function () {
                        var $thumb = $(this), $btnUpload = $thumb.find('.kv-file-upload'),
                            $btnDelete = $thumb.find('.kv-file-remove');
                        if (!$thumb.hasClass('file-preview-success')) {
                            self._setThumbStatus($thumb, 'Loading');
                            $h.addCss($thumb, 'file-uploading');
                        }
                        $btnUpload.attr('disabled', true);
                        $btnDelete.attr('disabled', true);
                    });
                }
                self._raise('filebatchpreupload', [outData]);
                if (self._abort(outData)) {
                    jqXHR.abort();
                    self._getThumbs().each(function () {
                        var $thumb = $(this), $btnUpload = $thumb.find('.kv-file-upload'),
                            $btnDelete = $thumb.find('.kv-file-remove');
                        if ($thumb.hasClass('file-preview-loading')) {
                            self._setThumbStatus($thumb, 'New');
                            $thumb.removeClass('file-uploading');
                        }
                        $btnUpload.removeAttr('disabled');
                        $btnDelete.removeAttr('disabled');
                    });
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function (data, textStatus, jqXHR) {
                /** @namespace data.errorkeys */
                var outData = self._getOutData(jqXHR, data), key = 0,
                    $thumbs = self._getThumbs(':not(.file-preview-success)'),
                    keys = $h.isEmpty(data) || $h.isEmpty(data.errorkeys) ? [] : data.errorkeys;

                if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
                    self._raise('filebatchuploadsuccess', [outData]);
                    setAllUploaded();
                    if (self.showPreview) {
                        $thumbs.each(function () {
                            var $thumb = $(this);
                            self._setThumbStatus($thumb, 'Success');
                            $thumb.removeClass('file-uploading');
                            $thumb.find('.kv-file-upload').hide().removeAttr('disabled');
                        });
                        self._initUploadSuccess(data);
                    } else {
                        self.reset();
                    }
                    self._setProgress(101);
                } else {
                    if (self.showPreview) {
                        $thumbs.each(function () {
                            var $thumb = $(this), i = $thumb.attr('data-fileindex');
                            $thumb.removeClass('file-uploading');
                            $thumb.find('.kv-file-upload').removeAttr('disabled');
                            $thumb.find('.kv-file-remove').removeAttr('disabled');
                            if (keys.length === 0 || $.inArray(key, keys) !== -1) {
                                self._setPreviewError($thumb, i, self.filestack[i], self.retryErrorUploads);
                                if (!self.retryErrorUploads) {
                                    $thumb.find('.kv-file-upload').hide();
                                    self.updateStack(i, undefined);
                                }
                            } else {
                                $thumb.find('.kv-file-upload').hide();
                                self._setThumbStatus($thumb, 'Success');
                                self.updateStack(i, undefined);
                            }
                            if (!$thumb.hasClass('file-preview-error') || self.retryErrorUploads) {
                                key++;
                            }
                        });
                        self._initUploadSuccess(data);
                    }
                    self._showUploadError(data.error, outData, 'filebatchuploaderror');
                    self._setProgress(101, self.$progress, self.msgUploadError);
                }
            };
            fnComplete = function () {
                self.unlock();
                self._initSuccessThumbs();
                self._clearFileInput();
                self._raise('filebatchuploadcomplete', [self.filestack, self._getExtraData()]);
            };
            fnError = function (jqXHR, textStatus, errorThrown) {
                var outData = self._getOutData(jqXHR), op = self.ajaxOperations.uploadBatch,
                    errMsg = self._parseError(op, jqXHR, errorThrown);
                self._showUploadError(errMsg, outData, 'filebatchuploaderror');
                self.uploadFileCount = total - 1;
                if (!self.showPreview) {
                    return;
                }
                self._getThumbs().each(function () {
                    var $thumb = $(this), key = $thumb.attr('data-fileindex');
                    $thumb.removeClass('file-uploading');
                    if (self.filestack[key] !== undefined) {
                        self._setPreviewError($thumb);
                    }
                });
                self._getThumbs().removeClass('file-uploading');
                self._getThumbs(' .kv-file-upload').removeAttr('disabled');
                self._getThumbs(' .kv-file-delete').removeAttr('disabled');
                self._setProgress(101, self.$progress, self.msgAjaxProgressError.replace('{operation}', op));
            };
            $.each(files, function (key, data) {
                if (!$h.isEmpty(files[key])) {
                    self.formdata.append(self.uploadFileAttr, data, self.filenames[key]);
                }
            });
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError);
        },
        _uploadExtraOnly: function () {
            var self = this, params = {}, fnBefore, fnSuccess, fnComplete, fnError;
            self.formdata = new FormData();
            if (self._abort(params)) {
                return;
            }
            fnBefore = function (jqXHR) {
                self.lock();
                var outData = self._getOutData(jqXHR);
                self._raise('filebatchpreupload', [outData]);
                self._setProgress(50);
                params.data = outData;
                params.xhr = jqXHR;
                if (self._abort(params)) {
                    jqXHR.abort();
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function (data, textStatus, jqXHR) {
                var outData = self._getOutData(jqXHR, data);
                if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
                    self._raise('filebatchuploadsuccess', [outData]);
                    self._clearFileInput();
                    self._initUploadSuccess(data);
                    self._setProgress(101);
                } else {
                    self._showUploadError(data.error, outData, 'filebatchuploaderror');
                }
            };
            fnComplete = function () {
                self.unlock();
                self._clearFileInput();
                self._raise('filebatchuploadcomplete', [self.filestack, self._getExtraData()]);
            };
            fnError = function (jqXHR, textStatus, errorThrown) {
                var outData = self._getOutData(jqXHR), op = self.ajaxOperations.uploadExtra,
                    errMsg = self._parseError(op, jqXHR, errorThrown);
                params.data = outData;
                self._showUploadError(errMsg, outData, 'filebatchuploaderror');
                self._setProgress(101, self.$progress, self.msgAjaxProgressError.replace('{operation}', op));
            };
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError);
        },
        _deleteFileIndex: function ($frame) {
            var self = this, ind = $frame.attr('data-fileindex');
            if (ind.substring(0, 5) === 'init_') {
                ind = parseInt(ind.replace('init_', ''));
                self.initialPreview = $h.spliceArray(self.initialPreview, ind);
                self.initialPreviewConfig = $h.spliceArray(self.initialPreviewConfig, ind);
                self.initialPreviewThumbTags = $h.spliceArray(self.initialPreviewThumbTags, ind);
                self.getFrames().each(function () {
                    var $nFrame = $(this), nInd = $nFrame.attr('data-fileindex');
                    if (nInd.substring(0, 5) === 'init_') {
                        nInd = parseInt(nInd.replace('init_', ''));
                        if (nInd > ind) {
                            nInd--;
                            $nFrame.attr('data-fileindex', 'init_' + nInd);
                        }
                    }
                });
                if (self.uploadAsync) {
                    self.cacheInitialPreview = self.getPreview();
                }
            }
        },
        _initFileActions: function () {
            var self = this, $preview = self.$preview;
            if (!self.showPreview) {
                return;
            }
            self._initZoomButton();
            self.getFrames(' .kv-file-remove').each(function () {
                var $el = $(this), $frame = $el.closest($h.FRAMES), hasError, id = $frame.attr('id'),
                    ind = $frame.attr('data-fileindex'), n, cap, status;
                self._handler($el, 'click', function () {
                    status = self._raise('filepreremove', [id, ind]);
                    if (status === false || !self._validateMinCount()) {
                        return false;
                    }
                    hasError = $frame.hasClass('file-preview-error');
                    $h.cleanMemory($frame);
                    $frame.fadeOut('slow', function () {
                        $h.cleanZoomCache($preview.find('#zoom-' + id));
                        self.updateStack(ind, undefined);
                        self._clearObjects($frame);
                        $frame.remove();
                        if (id && hasError) {
                            self.$errorContainer.find('li[data-file-id="' + id + '"]').fadeOut('fast', function () {
                                $(this).remove();
                                if (!self._errorsExist()) {
                                    self._resetErrors();
                                }
                            });
                        }
                        self._clearFileInput();
                        var filestack = self.getFileStack(true), chk = self.previewCache.count(),
                            len = filestack.length, hasThumb = self.showPreview && self.getFrames().length;
                        if (len === 0 && chk === 0 && !hasThumb) {
                            self.reset();
                        } else {
                            n = chk + len;
                            cap = n > 1 ? self._getMsgSelected(n) : (filestack[0] ? self._getFileNames()[0] : '');
                            self._setCaption(cap);
                        }
                        self._raise('fileremoved', [id, ind]);
                    });
                });
            });
            self.getFrames(' .kv-file-upload').each(function () {
                var $el = $(this);
                self._handler($el, 'click', function () {
                    var $frame = $el.closest($h.FRAMES), ind = $frame.attr('data-fileindex');
                    self.$progress.hide();
                    if ($frame.hasClass('file-preview-error') && !self.retryErrorUploads) {
                        return;
                    }
                    self._uploadSingle(ind, false);
                });
            });
        },
        _initPreviewActions: function () {
            var self = this, $preview = self.$preview, deleteExtraData = self.deleteExtraData || {},
                btnRemove = $h.FRAMES + ' .kv-file-remove', settings = self.fileActionSettings,
                origClass = settings.removeClass, errClass = settings.removeErrorClass,
                resetProgress = function () {
                    var hasFiles = self.isAjaxUpload ? self.previewCache.count() : self.$element.get(0).files.length;
                    if (!$preview.find($h.FRAMES).length && !hasFiles) {
                        self._setCaption('');
                        self.reset();
                        self.initialCaption = '';
                    }
                };
            self._initZoomButton();
            $preview.find(btnRemove).each(function () {
                var $el = $(this), vUrl = $el.data('url') || self.deleteUrl, vKey = $el.data('key'),
                    fnBefore, fnSuccess, fnError;
                if ($h.isEmpty(vUrl) || vKey === undefined) {
                    return;
                }
                var $frame = $el.closest($h.FRAMES), cache = self.previewCache.data,
                    settings, params, index = $frame.attr('data-fileindex'), config, extraData;
                index = parseInt(index.replace('init_', ''));
                config = $h.isEmpty(cache.config) && $h.isEmpty(cache.config[index]) ? null : cache.config[index];
                extraData = $h.isEmpty(config) || $h.isEmpty(config.extra) ? deleteExtraData : config.extra;
                if (typeof extraData === "function") {
                    extraData = extraData();
                }
                params = {id: $el.attr('id'), key: vKey, extra: extraData};
                fnBefore = function (jqXHR) {
                    self.ajaxAborted = false;
                    self._raise('filepredelete', [vKey, jqXHR, extraData]);
                    if (self._abort()) {
                        jqXHR.abort();
                    } else {
                        $el.removeClass(errClass);
                        $h.addCss($frame, 'file-uploading');
                        $h.addCss($el, 'disabled ' + origClass);
                    }
                };
                fnSuccess = function (data, textStatus, jqXHR) {
                    var n, cap;
                    if (!$h.isEmpty(data) && !$h.isEmpty(data.error)) {
                        params.jqXHR = jqXHR;
                        params.response = data;
                        self._showError(data.error, params, 'filedeleteerror');
                        $frame.removeClass('file-uploading');
                        $el.removeClass('disabled ' + origClass).addClass(errClass);
                        resetProgress();
                        return;
                    }
                    $frame.removeClass('file-uploading').addClass('file-deleted');
                    $frame.fadeOut('slow', function () {
                        index = parseInt(($frame.attr('data-fileindex')).replace('init_', ''));
                        self.previewCache.unset(index);
                        n = self.previewCache.count();
                        cap = n > 0 ? self._getMsgSelected(n) : '';
                        self._deleteFileIndex($frame);
                        self._setCaption(cap);
                        self._raise('filedeleted', [vKey, jqXHR, extraData]);
                        $h.cleanZoomCache($preview.find('#zoom-' + $frame.attr('id')));
                        self._clearObjects($frame);
                        $frame.remove();
                        resetProgress();
                    });
                };
                fnError = function (jqXHR, textStatus, errorThrown) {
                    var op = self.ajaxOperations.deleteThumb, errMsg = self._parseError(op, jqXHR, errorThrown);
                    params.jqXHR = jqXHR;
                    params.response = {};
                    self._showError(errMsg, params, 'filedeleteerror');
                    $frame.removeClass('file-uploading');
                    $el.removeClass('disabled ' + origClass).addClass(errClass);
                    resetProgress();
                };
                self._mergeAjaxCallback('beforeSend', fnBefore, 'delete');
                self._mergeAjaxCallback('success', fnSuccess, 'delete');
                self._mergeAjaxCallback('error', fnError, 'delete');
                settings = $.extend(true, {}, {
                    url: vUrl,
                    type: 'POST',
                    dataType: 'json',
                    data: $.extend(true, {}, {key: vKey}, extraData)
                }, self.ajaxDeleteSettings);
                self._handler($el, 'click', function () {
                    if (!self._validateMinCount()) {
                        return false;
                    }
                    self.ajaxAborted = false;
                    self._raise('filebeforedelete', [vKey, extraData]);
                    //noinspection JSUnresolvedVariable,JSHint
                    if (self.ajaxAborted instanceof Promise) {
                        self.ajaxAborted.then(function (result) {
                            if (!result) {
                                $.ajax(settings);
                            }
                        });
                    } else {
                        if (!self.ajaxAborted) {
                            $.ajax(settings);
                        }
                    }
                });
            });
            self.getFrames(' .kv-file-download').each(function () {
                var $el = $(this);
                self._handler($el, 'click', function () {
                    var a = document.createElement('a');
                    a.href = $el.attr('data-url');
                    a.download = $el.attr('data-caption');
                    a.target = '_blank';
                    a.click();
                });
            });
        },
        _hideFileIcon: function () {
            var self = this;
            if (self.overwriteInitial) {
                self.$captionContainer.removeClass('icon-visible');
            }
        },
        _showFileIcon: function () {
            var self = this;
            $h.addCss(self.$captionContainer, 'icon-visible');
        },
        _getSize: function (bytes) {
            var self = this, size = parseFloat(bytes), i, func = self.fileSizeGetter, sizes, out;
            if (!$.isNumeric(bytes) || !$.isNumeric(size)) {
                return '';
            }
            if (typeof func === 'function') {
                out = func(size);
            } else {
                if (size === 0) {
                    out = '0.00 B';
                } else {
                    i = Math.floor(Math.log(size) / Math.log(1024));
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                    out = (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
                }
            }
            return self._getLayoutTemplate('size').replace('{sizeText}', out);
        },
        _generatePreviewTemplate: function (cat, data, fname, ftype, previewId, isError, size, frameClass, foot, ind, templ) {
            var self = this, caption = self.slug(fname), prevContent, zoomContent = '', styleAttribs = '',
                screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                config = screenW < 400 ? (self.previewSettingsSmall[cat] || self.defaults.previewSettingsSmall[cat]) :
                    (self.previewSettings[cat] || self.defaults.previewSettings[cat]),
                footer = foot || self._renderFileFooter(caption, size, 'auto', isError),
                hasIconSetting = self._getPreviewIcon(fname), typeCss = 'type-default',
                forcePrevIcon = hasIconSetting && self.preferIconicPreview,
                forceZoomIcon = hasIconSetting && self.preferIconicZoomPreview, getContent;
            if (config) {
                $.each(config, function (key, val) {
                    styleAttribs += key + ':' + val + ';';
                });
            }
            getContent = function (c, d, zoom, frameCss) {
                var id = zoom ? 'zoom-' + previewId : previewId, tmplt = self._getPreviewTemplate(c),
                    css = (frameClass || '') + ' ' + frameCss;
                if (self.frameClass) {
                    css = self.frameClass + ' ' + css;
                }
                if (zoom) {
                    css = css.replace(' ' + $h.SORT_CSS, '');
                }
                tmplt = self._parseFilePreviewIcon(tmplt, fname);
                if (c === 'text') {
                    d = $h.htmlEncode(d);
                }
                if (cat === 'object' && !ftype) {
                    $.each(self.defaults.fileTypeSettings, function (key, func) {
                        if (key === 'object' || key === 'other') {
                            return;
                        }
                        if (func(fname, ftype)) {
                            typeCss = 'type-' + key;
                        }
                    });
                }
                return tmplt.setTokens({
                    'previewId': id,
                    'caption': caption,
                    'frameClass': css,
                    'type': ftype,
                    'fileindex': ind,
                    'typeCss': typeCss,
                    'footer': footer,
                    'data': d,
                    'template': templ || cat,
                    'style': styleAttribs ? 'style="' + styleAttribs + '"' : ''
                });
            };
            ind = ind || previewId.slice(previewId.lastIndexOf('-') + 1);
            if (self.fileActionSettings.showZoom) {
                zoomContent = getContent((forceZoomIcon ? 'other' : cat), data, true, 'kv-zoom-thumb');
            }
            zoomContent = '\n' + self._getLayoutTemplate('zoomCache').replace('{zoomContent}', zoomContent);
            prevContent = getContent((forcePrevIcon ? 'other' : cat), data, false, 'kv-preview-thumb');
            return prevContent + zoomContent;
        },
        _previewDefault: function (file, previewId, isDisabled) {
            var self = this, $preview = self.$preview;
            if (!self.showPreview) {
                return;
            }
            var fname = file ? file.name : '', ftype = file ? file.type : '', content, size = file.size || 0,
                caption = self.slug(fname), isError = isDisabled === true && !self.isAjaxUpload,
                data = $h.objUrl.createObjectURL(file);
            self._clearDefaultPreview();
            content = self._generatePreviewTemplate('other', data, fname, ftype, previewId, isError, size);
            $preview.append("\n" + content);
            self._setThumbAttr(previewId, caption, size);
            if (isDisabled === true && self.isAjaxUpload) {
                self._setThumbStatus($('#' + previewId), 'Error');
            }
        },
        _previewFile: function (i, file, theFile, previewId, data, fileInfo) {
            if (!this.showPreview) {
                return;
            }
            var self = this, fname = file ? file.name : '', ftype = fileInfo.type, caption = fileInfo.name,
                cat = self._parseFileType(ftype, fname), types = self.allowedPreviewTypes, content,
                mimes = self.allowedPreviewMimeTypes, $preview = self.$preview, fsize = file.size || 0,
                chkTypes = types && types.indexOf(cat) >= 0, chkMimes = mimes && mimes.indexOf(ftype) !== -1,
                iData = (cat === 'text' || cat === 'html' || cat === 'image') ? theFile.target.result : data;
            /** @namespace window.DOMPurify */
            if (cat === 'html' && self.purifyHtml && window.DOMPurify) {
                iData = window.DOMPurify.sanitize(iData);
            }
            if (chkTypes || chkMimes) {
                content = self._generatePreviewTemplate(cat, iData, fname, ftype, previewId, false, fsize);
                self._clearDefaultPreview();
                $preview.append("\n" + content);
                var $img = $preview.find('#' + previewId + ' img');
                if ($img.length && self.autoOrientImage) {
                    $h.validateOrientation(file, function (value) {
                        if (!value) {
                            self._validateImage(previewId, caption, ftype, fsize, iData);
                            return;
                        }
                        var $zoomImg = $preview.find('#zoom-' + previewId + ' img'), css = 'rotate-' + value;
                        if (value > 4) {
                            css += ($img.width() > $img.height() ? ' is-portrait-gt4' : ' is-landscape-gt4');
                        }
                        $h.addCss($img, css);
                        $h.addCss($zoomImg, css);
                        self._raise('fileimageoriented', {'$img': $img, 'file': file});
                        self._validateImage(previewId, caption, ftype, fsize, iData);
                        $h.adjustOrientedImage($img);
                    });
                } else {
                    self._validateImage(previewId, caption, ftype, fsize, iData);
                }
            } else {
                self._previewDefault(file, previewId);
            }
            self._setThumbAttr(previewId, caption, fsize);
            self._initSortable();
        },
        _setThumbAttr: function (id, caption, size) {
            var self = this, $frame = $('#' + id);
            if ($frame.length) {
                size = size && size > 0 ? self._getSize(size) : '';
                $frame.data({'caption': caption, 'size': size});
            }
        },
        _setInitThumbAttr: function () {
            var self = this, data = self.previewCache.data, len = self.previewCache.count(), config,
                caption, size, previewId;
            if (len === 0) {
                return;
            }
            for (var i = 0; i < len; i++) {
                config = data.config[i];
                previewId = self.previewInitId + '-' + 'init_' + i;
                caption = $h.ifSet('caption', config, $h.ifSet('filename', config));
                size = $h.ifSet('size', config);
                self._setThumbAttr(previewId, caption, size);
            }
        },
        _slugDefault: function (text) {
            return $h.isEmpty(text) ? '' : String(text).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, '_');
        },
        _updateFileDetails: function (numFiles) {
            var self = this, $el = self.$element, fileStack = self.getFileStack(),
                name = ($h.isIE(9) && $h.findFileName($el.val())) ||
                    ($el[0].files[0] && $el[0].files[0].name) || (fileStack.length && fileStack[0].name) || '',
                label = self.slug(name), n = self.isAjaxUpload ? fileStack.length : numFiles,
                nFiles = self.previewCache.count() + n, log = n === 1 ? label : self._getMsgSelected(nFiles);
            if (self.isError) {
                self.$previewContainer.removeClass('file-thumb-loading');
                self.$previewStatus.html('');
                self.$captionContainer.removeClass('icon-visible');
            } else {
                self._showFileIcon();
            }
            self._setCaption(log, self.isError);
            self.$container.removeClass('file-input-new file-input-ajax-new');
            if (arguments.length === 1) {
                self._raise('fileselect', [numFiles, label]);
            }
            if (self.previewCache.count()) {
                self._initPreviewActions();
            }
        },
        _setThumbStatus: function ($thumb, status) {
            var self = this;
            if (!self.showPreview) {
                return;
            }
            var icon = 'indicator' + status, msg = icon + 'Title',
                css = 'file-preview-' + status.toLowerCase(),
                $indicator = $thumb.find('.file-upload-indicator'),
                config = self.fileActionSettings;
            $thumb.removeClass('file-preview-success file-preview-error file-preview-loading');
            if (status === 'Success') {
                $thumb.find('.file-drag-handle').remove();
            }
            $indicator.html(config[icon]);
            $indicator.attr('title', config[msg]);
            $thumb.addClass(css);
            if (status === 'Error' && !self.retryErrorUploads) {
                $thumb.find('.kv-file-upload').attr('disabled', true);
            }
        },
        _setProgressCancelled: function () {
            var self = this;
            self._setProgress(101, self.$progress, self.msgCancelled);
        },
        _setProgress: function (p, $el, error) {
            var self = this, pct = Math.min(p, 100), out, pctLimit = self.progressUploadThreshold,
                t = p <= 100 ? self.progressTemplate : self.progressCompleteTemplate,
                template = pct < 100 ? self.progressTemplate : (error ? self.progressErrorTemplate : t);
            $el = $el || self.$progress;
            if (!$h.isEmpty(template)) {
                if (pctLimit && pct > pctLimit && p <= 100) {
                    out = template.setTokens({'percent': pctLimit, 'status': self.msgUploadThreshold});
                } else {
                    out = template.setTokens({'percent': pct, 'status': (p > 100 ? self.msgUploadEnd : pct + '%')});
                }
                $el.html(out);
                if (error) {
                    $el.find('[role="progressbar"]').html(error);
                }
            }
        },
        _setFileDropZoneTitle: function () {
            var self = this, $zone = self.$container.find('.file-drop-zone'), title = self.dropZoneTitle, strFiles;
            if (self.isClickable) {
                strFiles = $h.isEmpty(self.$element.attr('multiple')) ? self.fileSingle : self.filePlural;
                title += self.dropZoneClickTitle.replace('{files}', strFiles);
            }
            $zone.find('.' + self.dropZoneTitleClass).remove();
            if (!self.isAjaxUpload || !self.showPreview || $zone.length === 0 || self.getFileStack().length > 0 || !self.dropZoneEnabled) {
                return;
            }
            if ($zone.find($h.FRAMES).length === 0 && $h.isEmpty(self.defaultPreviewContent)) {
                $zone.prepend('<div class="' + self.dropZoneTitleClass + '">' + title + '</div>');
            }
            self.$container.removeClass('file-input-new');
            $h.addCss(self.$container, 'file-input-ajax-new');
        },
        _setAsyncUploadStatus: function (previewId, pct, total) {
            var self = this, sum = 0;
            self._setProgress(pct, $('#' + previewId).find('.file-thumb-progress'));
            self.uploadStatus[previewId] = pct;
            $.each(self.uploadStatus, function (key, value) {
                sum += value;
            });
            self._setProgress(Math.floor(sum / total));
        },
        _validateMinCount: function () {
            var self = this, len = self.isAjaxUpload ? self.getFileStack().length : self.$element.get(0).files.length;
            if (self.validateInitialCount && self.minFileCount > 0 && self._getFileCount(len - 1) < self.minFileCount) {
                self._noFilesError({});
                return false;
            }
            return true;
        },
        _getFileCount: function (fileCount) {
            var self = this, addCount = 0;
            if (self.validateInitialCount && !self.overwriteInitial) {
                addCount = self.previewCache.count();
                fileCount += addCount;
            }
            return fileCount;
        },
        _getFileId: function (file) {
            var self = this, custom = self.generateFileId, relativePath;
            if (typeof custom === 'function') {
                return custom(file, event);
            }
            if (!file) {
                return null;
            }
            /** @namespace file.webkitRelativePath */
            relativePath = String(file.webkitRelativePath || file.fileName || file.name || null);
            if (!relativePath) {
                return null;
            }
            return (file.size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, ''));
        },
        _getFileName: function (file) {
            return file && file.name ? this.slug(file.name) : undefined;
        },
        _getFileIds: function (skipNull) {
            var self = this;
            return self.fileids.filter(function (n) {
                return (skipNull ? n !== undefined : n !== undefined && n !== null);
            });
        },
        _getFileNames: function (skipNull) {
            var self = this;
            return self.filenames.filter(function (n) {
                return (skipNull ? n !== undefined : n !== undefined && n !== null);
            });
        },
        _setPreviewError: function ($thumb, i, val, repeat) {
            var self = this;
            if (i !== undefined) {
                self.updateStack(i, val);
            }
            if (!self.showPreview) {
                return;
            }
            if (self.removeFromPreviewOnError && !repeat) {
                $thumb.remove();
                return;
            } else {
                self._setThumbStatus($thumb, 'Error');
            }
            self._refreshUploadButton($thumb, repeat);
        },
        _refreshUploadButton: function ($thumb, repeat) {
            var self = this, $btn = $thumb.find('.kv-file-upload'), cfg = self.fileActionSettings,
                icon = cfg.uploadIcon, title = cfg.uploadTitle;
            if (!$btn.length) {
                return;
            }
            if (repeat) {
                icon = cfg.uploadRetryIcon;
                title = cfg.uploadRetryTitle;
            }
            $btn.attr('title', title).html(icon);
        },
        _checkDimensions: function (i, chk, $img, $thumb, fname, type, params) {
            var self = this, msg, dim, tag = chk === 'Small' ? 'min' : 'max', limit = self[tag + 'Image' + type],
                $imgEl, isValid;
            if ($h.isEmpty(limit) || !$img.length) {
                return;
            }
            $imgEl = $img[0];
            dim = (type === 'Width') ? $imgEl.naturalWidth || $imgEl.width : $imgEl.naturalHeight || $imgEl.height;
            isValid = chk === 'Small' ? dim >= limit : dim <= limit;
            if (isValid) {
                return;
            }
            msg = self['msgImage' + type + chk].setTokens({'name': fname, 'size': limit});
            self._showUploadError(msg, params);
            self._setPreviewError($thumb, i, null);
        },
        _validateImage: function (previewId, fname, ftype, fsize, iData) {
            var self = this, $preview = self.$preview, params, w1, w2, $thumb = $preview.find("#" + previewId),
                i = $thumb.attr('data-fileindex'), $img = $thumb.find('img'), exifObject;
            fname = fname || 'Untitled';
            $img.one('load', function () {
                w1 = $thumb.width();
                w2 = $preview.width();
                if (w1 > w2) {
                    $img.css('width', '100%');
                }
                params = {ind: i, id: previewId};
                self._checkDimensions(i, 'Small', $img, $thumb, fname, 'Width', params);
                self._checkDimensions(i, 'Small', $img, $thumb, fname, 'Height', params);
                if (!self.resizeImage) {
                    self._checkDimensions(i, 'Large', $img, $thumb, fname, 'Width', params);
                    self._checkDimensions(i, 'Large', $img, $thumb, fname, 'Height', params);
                }
                self._raise('fileimageloaded', [previewId]);
                try {
                    exifObject = window.piexif ? window.piexif.load(iData) : null;
                } catch (err) {
                    exifObject = null;
                }
                self.loadedImages.push({
                    ind: i,
                    img: $img,
                    thumb: $thumb,
                    pid: previewId,
                    typ: ftype,
                    siz: fsize,
                    validated: false,
                    imgData: iData,
                    exifObj: exifObject
                });
                $thumb.data('exif', exifObject);
                self._validateAllImages();
            }).one('error', function () {
                self._raise('fileimageloaderror', [previewId]);
            }).each(function () {
                if (this.complete) {
                    $(this).trigger('load');
                } else {
                    if (this.error) {
                        $(this).trigger('error');
                    }
                }
            });
        },
        _validateAllImages: function () {
            var self = this, i, counter = {val: 0}, numImgs = self.loadedImages.length, config,
                fsize, minSize = self.resizeIfSizeMoreThan;
            if (numImgs !== self.totalImagesCount) {
                return;
            }
            self._raise('fileimagesloaded');
            if (!self.resizeImage) {
                return;
            }
            for (i = 0; i < self.loadedImages.length; i++) {
                config = self.loadedImages[i];
                if (config.validated) {
                    continue;
                }
                fsize = config.siz;
                if (fsize && fsize > minSize * 1000) {
                    self._getResizedImage(config, counter, numImgs);
                }
                self.loadedImages[i].validated = true;
            }
        },
        _getResizedImage: function (config, counter, numImgs) {
            var self = this, img = $(config.img)[0], width = img.naturalWidth, height = img.naturalHeight, blob,
                ratio = 1, maxWidth = self.maxImageWidth || width, maxHeight = self.maxImageHeight || height,
                isValidImage = !!(width && height), chkWidth, chkHeight, canvas = self.imageCanvas, dataURI,
                context = self.imageCanvasContext, type = config.typ, pid = config.pid, ind = config.ind,
                $thumb = config.thumb, throwError, msg, exifObj = config.exifObj, exifStr;
            throwError = function (msg, params, ev) {
                if (self.isAjaxUpload) {
                    self._showUploadError(msg, params, ev);
                } else {
                    self._showError(msg, params, ev);
                }
                self._setPreviewError($thumb, ind);
            };
            if (!self.filestack[ind] || !isValidImage || (width <= maxWidth && height <= maxHeight)) {
                if (isValidImage && self.filestack[ind]) {
                    self._raise('fileimageresized', [pid, ind]);
                }
                counter.val++;
                if (counter.val === numImgs) {
                    self._raise('fileimagesresized');
                }
                if (!isValidImage) {
                    throwError(self.msgImageResizeError, {id: pid, 'index': ind}, 'fileimageresizeerror');
                    return;
                }
            }
            type = type || self.resizeDefaultImageType;
            chkWidth = width > maxWidth;
            chkHeight = height > maxHeight;
            if (self.resizePreference === 'width') {
                ratio = chkWidth ? maxWidth / width : (chkHeight ? maxHeight / height : 1);
            } else {
                ratio = chkHeight ? maxHeight / height : (chkWidth ? maxWidth / width : 1);
            }
            self._resetCanvas();
            width *= ratio;
            height *= ratio;
            canvas.width = width;
            canvas.height = height;
            try {
                context.drawImage(img, 0, 0, width, height);
                dataURI = canvas.toDataURL(type, self.resizeQuality);
                if (exifObj) {
                    exifStr = window.piexif.dump(exifObj);
                    dataURI = window.piexif.insert(exifStr, dataURI);
                }
                blob = $h.dataURI2Blob(dataURI);
                self.filestack[ind] = blob;
                self._raise('fileimageresized', [pid, ind]);
                counter.val++;
                if (counter.val === numImgs) {
                    self._raise('fileimagesresized', [undefined, undefined]);
                }
                if (!(blob instanceof Blob)) {
                    throwError(self.msgImageResizeError, {id: pid, 'index': ind}, 'fileimageresizeerror');
                }
            }
            catch (err) {
                counter.val++;
                if (counter.val === numImgs) {
                    self._raise('fileimagesresized', [undefined, undefined]);
                }
                msg = self.msgImageResizeException.replace('{errors}', err.message);
                throwError(msg, {id: pid, 'index': ind}, 'fileimageresizeexception');
            }
        },
        _initBrowse: function ($container) {
            var self = this;
            if (self.showBrowse) {
                self.$btnFile = $container.find('.btn-file');
                self.$btnFile.append(self.$element);
            } else {
                self.$element.hide();
            }
        },
        _initCaption: function () {
            var self = this, cap = self.initialCaption || '';
            if (self.overwriteInitial || $h.isEmpty(cap)) {
                self.$caption.val('');
                return false;
            }
            self._setCaption(cap);
            return true;
        },
        _setCaption: function (content, isError) {
            var self = this, title, out, icon, n, cap, stack = self.getFileStack();
            if (!self.$caption.length) {
                return;
            }
            self.$captionContainer.removeClass('icon-visible');
            if (isError) {
                title = $('<div>' + self.msgValidationError + '</div>').text();
                n = stack.length;
                if (n) {
                    cap = n === 1 && stack[0] ? self._getFileNames()[0] : self._getMsgSelected(n);
                } else {
                    cap = self._getMsgSelected(self.msgNo);
                }
                out = $h.isEmpty(content) ? cap : content;
                icon = '<span class="' + self.msgValidationErrorClass + '">' + self.msgValidationErrorIcon + '</span>';
            } else {
                if ($h.isEmpty(content)) {
                    return;
                }
                title = $('<div>' + content + '</div>').text();
                out = title;
                icon = self._getLayoutTemplate('fileIcon');
            }
            self.$captionContainer.addClass('icon-visible');
            self.$caption.attr('title', title).val(out);
            self.$captionIcon.html(icon);
        },
        _createContainer: function () {
            var self = this, attribs = {"class": 'file-input file-input-new' + (self.rtl ? ' kv-rtl' : '')},
                $container = $(document.createElement("div")).attr(attribs).html(self._renderMain());
            self.$element.before($container);
            self._initBrowse($container);
            if (self.theme) {
                $container.addClass('theme-' + self.theme);
            }
            return $container;
        },
        _refreshContainer: function () {
            var self = this, $container = self.$container;
            $container.before(self.$element);
            $container.html(self._renderMain());
            self._initBrowse($container);
            self._validateDisabled();
        },
        _validateDisabled: function () {
            var self = this;
            self.$caption.attr({readonly: self.isDisabled});
        },
        _renderMain: function () {
            var self = this,
                dropCss = (self.isAjaxUpload && self.dropZoneEnabled) ? ' file-drop-zone' : 'file-drop-disabled',
                close = !self.showClose ? '' : self._getLayoutTemplate('close'),
                preview = !self.showPreview ? '' : self._getLayoutTemplate('preview')
                    .setTokens({'class': self.previewClass, 'dropClass': dropCss}),
                css = self.isDisabled ? self.captionClass + ' file-caption-disabled' : self.captionClass,
                caption = self.captionTemplate.setTokens({'class': css + ' kv-fileinput-caption'});
            return self.mainTemplate.setTokens({
                'class': self.mainClass + (!self.showBrowse && self.showCaption ? ' no-browse' : ''),
                'preview': preview,
                'close': close,
                'caption': caption,
                'upload': self._renderButton('upload'),
                'remove': self._renderButton('remove'),
                'cancel': self._renderButton('cancel'),
                'browse': self._renderButton('browse')
            });

        },
        _renderButton: function (type) {
            var self = this, tmplt = self._getLayoutTemplate('btnDefault'), css = self[type + 'Class'],
                title = self[type + 'Title'], icon = self[type + 'Icon'], label = self[type + 'Label'],
                status = self.isDisabled ? ' disabled' : '', btnType = 'button';
            switch (type) {
                case 'remove':
                    if (!self.showRemove) {
                        return '';
                    }
                    break;
                case 'cancel':
                    if (!self.showCancel) {
                        return '';
                    }
                    css += ' kv-hidden';
                    break;
                case 'upload':
                    if (!self.showUpload) {
                        return '';
                    }
                    if (self.isAjaxUpload && !self.isDisabled) {
                        tmplt = self._getLayoutTemplate('btnLink').replace('{href}', self.uploadUrl);
                    } else {
                        btnType = 'submit';
                    }
                    break;
                case 'browse':
                    if (!self.showBrowse) {
                        return '';
                    }
                    tmplt = self._getLayoutTemplate('btnBrowse');
                    break;
                default:
                    return '';
            }

            css += type === 'browse' ? ' btn-file' : ' fileinput-' + type + ' fileinput-' + type + '-button';
            if (!$h.isEmpty(label)) {
                label = ' <span class="' + self.buttonLabelClass + '">' + label + '</span>';
            }
            return tmplt.setTokens({
                'type': btnType, 'css': css, 'title': title, 'status': status, 'icon': icon, 'label': label
            });
        },
        _renderThumbProgress: function () {
            var self = this;
            return '<div class="file-thumb-progress kv-hidden">' +
                self.progressTemplate.setTokens({'percent': '0', 'status': self.msgUploadBegin}) +
                '</div>';
        },
        _renderFileFooter: function (caption, size, width, isError) {
            var self = this, config = self.fileActionSettings, rem = config.showRemove, drg = config.showDrag,
                upl = config.showUpload, zoom = config.showZoom, out,
                template = self._getLayoutTemplate('footer'), tInd = self._getLayoutTemplate('indicator'),
                ind = isError ? config.indicatorError : config.indicatorNew,
                title = isError ? config.indicatorErrorTitle : config.indicatorNewTitle,
                indicator = tInd.setTokens({'indicator': ind, 'indicatorTitle': title});
            size = self._getSize(size);
            if (self.isAjaxUpload) {
                out = template.setTokens({
                    'actions': self._renderFileActions(upl, false, rem, zoom, drg, false, false, false),
                    'caption': caption,
                    'size': size,
                    'width': width,
                    'progress': self._renderThumbProgress(),
                    'indicator': indicator
                });
            } else {
                out = template.setTokens({
                    'actions': self._renderFileActions(false, false, false, zoom, drg, false, false, false),
                    'caption': caption,
                    'size': size,
                    'width': width,
                    'progress': '',
                    'indicator': indicator
                });
            }
            out = $h.replaceTags(out, self.previewThumbTags);
            return out;
        },
        _renderFileActions: function (showUpl, showDwn, showDel, showZoom, showDrag, disabled, url, key, isInit, dUrl, dFile) {
            if (!showUpl && !showDwn && !showDel && !showZoom && !showDrag) {
                return '';
            }
            var self = this, vUrl = url === false ? '' : ' data-url="' + url + '"',
                vKey = key === false ? '' : ' data-key="' + key + '"', btnDelete = '', btnUpload = '', btnDownload = '',
                btnZoom = '', btnDrag = '', css, template = self._getLayoutTemplate('actions'),
                config = self.fileActionSettings,
                otherButtons = self.otherActionButtons.setTokens({'dataKey': vKey, 'key': key}),
                removeClass = disabled ? config.removeClass + ' disabled' : config.removeClass;
            if (showDel) {
                btnDelete = self._getLayoutTemplate('actionDelete').setTokens({
                    'removeClass': removeClass,
                    'removeIcon': config.removeIcon,
                    'removeTitle': config.removeTitle,
                    'dataUrl': vUrl,
                    'dataKey': vKey,
                    'key': key
                });
            }
            if (showUpl) {
                btnUpload = self._getLayoutTemplate('actionUpload').setTokens({
                    'uploadClass': config.uploadClass,
                    'uploadIcon': config.uploadIcon,
                    'uploadTitle': config.uploadTitle
                });
            }
            if (showDwn) {
                btnDownload = self._getLayoutTemplate('actionDownload').setTokens({
                    'downloadClass': config.downloadClass,
                    'downloadIcon': config.downloadIcon,
                    'downloadTitle': config.downloadTitle,
                    'downloadUrl': dUrl || self.initialPreviewDownloadUrl
                });
                btnDownload = btnDownload.setTokens({'filename': dFile, 'key': key});
            }
            if (showZoom) {
                btnZoom = self._getLayoutTemplate('actionZoom').setTokens({
                    'zoomClass': config.zoomClass,
                    'zoomIcon': config.zoomIcon,
                    'zoomTitle': config.zoomTitle
                });
            }
            if (showDrag && isInit) {
                css = 'drag-handle-init ' + config.dragClass;
                btnDrag = self._getLayoutTemplate('actionDrag').setTokens({
                    'dragClass': css,
                    'dragTitle': config.dragTitle,
                    'dragIcon': config.dragIcon
                });
            }
            return template.setTokens({
                'delete': btnDelete,
                'upload': btnUpload,
                'download': btnDownload,
                'zoom': btnZoom,
                'drag': btnDrag,
                'other': otherButtons
            });
        },
        _browse: function (e) {
            var self = this;
            self._raise('filebrowse');
            if (e && e.isDefaultPrevented()) {
                return;
            }
            if (self.isError && !self.isAjaxUpload) {
                self.clear();
            }
            self.$captionContainer.focus();
        },
        _filterDuplicate: function (file, files, fileIds) {
            var self = this, fileId = self._getFileId(file);
            if (fileId && fileIds && fileIds.indexOf(fileId) > -1) {
                return;
            }
            if (!fileIds) {
                fileIds = [];
            }
            files.push(file);
            fileIds.push(fileId);
        },
        _change: function (e) {
            var self = this, $el = self.$element;
            if (!self.isAjaxUpload && $h.isEmpty($el.val()) && self.fileInputCleared) { // IE 11 fix
                self.fileInputCleared = false;
                return;
            }
            self.fileInputCleared = false;
            var tfiles = [], msg, total, isDragDrop = arguments.length > 1, isAjaxUpload = self.isAjaxUpload, n, len,
                files = isDragDrop ? e.originalEvent.dataTransfer.files : $el.get(0).files, ctr = self.filestack.length,
                isSingleUpload = $h.isEmpty($el.attr('multiple')), flagSingle = (isSingleUpload && ctr > 0),
                folders = 0, fileIds = self._getFileIds(), throwError = function (mesg, file, previewId, index) {
                    var p1 = $.extend(true, {}, self._getOutData({}, {}, files), {id: previewId, index: index}),
                        p2 = {id: previewId, index: index, file: file, files: files};
                    return self.isAjaxUpload ? self._showUploadError(mesg, p1) : self._showError(mesg, p2);
                };
            self.reader = null;
            self._resetUpload();
            self._hideFileIcon();
            if (self.isAjaxUpload) {
                self.$container.find('.file-drop-zone .' + self.dropZoneTitleClass).remove();
            }
            if (isDragDrop) {
                $.each(files, function (i, f) {
                    if (f && !f.type && f.size !== undefined && f.size % 4096 === 0) {
                        folders++;
                    } else {
                        self._filterDuplicate(f, tfiles, fileIds);
                    }
                });
            } else {
                if (e.target && e.target.files === undefined) {
                    files = e.target.value ? [{name: e.target.value.replace(/^.+\\/, '')}] : [];
                } else {
                    files = e.target.files || {};
                }
                if (isAjaxUpload) {
                    $.each(files, function (i, f) {
                        self._filterDuplicate(f, tfiles, fileIds);
                    });
                } else {
                    tfiles = files;
                }
            }
            if ($h.isEmpty(tfiles) || tfiles.length === 0) {
                if (!isAjaxUpload) {
                    self.clear();
                }
                self._showFolderError(folders);
                self._raise('fileselectnone');
                return;
            }
            self._resetErrors();
            len = tfiles.length;
            total = self._getFileCount(self.isAjaxUpload ? (self.getFileStack().length + len) : len);
            if (self.maxFileCount > 0 && total > self.maxFileCount) {
                if (!self.autoReplace || len > self.maxFileCount) {
                    n = (self.autoReplace && len > self.maxFileCount) ? len : total;
                    msg = self.msgFilesTooMany.replace('{m}', self.maxFileCount).replace('{n}', n);
                    self.isError = throwError(msg, null, null, null);
                    self.$captionContainer.removeClass('icon-visible');
                    self._setCaption('', true);
                    self.$container.removeClass('file-input-new file-input-ajax-new');
                    return;
                }
                if (total > self.maxFileCount) {
                    self._resetPreviewThumbs(isAjaxUpload);
                }
            } else {
                if (!isAjaxUpload || flagSingle) {
                    self._resetPreviewThumbs(false);
                    if (flagSingle) {
                        self.clearStack();
                    }
                } else {
                    if (isAjaxUpload && ctr === 0 && (!self.previewCache.count() || self.overwriteInitial)) {
                        self._resetPreviewThumbs(true);
                    }
                }
            }
            if (self.isPreviewable) {
                self.readFiles(tfiles);
            } else {
                self._updateFileDetails(1);
            }
            self._showFolderError(folders);
        },
        _abort: function (params) {
            var self = this, data;
            if (self.ajaxAborted && typeof self.ajaxAborted === "object" && self.ajaxAborted.message !== undefined) {
                data = $.extend(true, {}, self._getOutData(), params);
                data.abortData = self.ajaxAborted.data || {};
                data.abortMessage = self.ajaxAborted.message;
                self._setProgress(101, self.$progress, self.msgCancelled);
                self._showUploadError(self.ajaxAborted.message, data, 'filecustomerror');
                self.cancel();
                return true;
            }
            return !!self.ajaxAborted;
        },
        _resetFileStack: function () {
            var self = this, i = 0, newstack = [], newnames = [], newids = [];
            self._getThumbs().each(function () {
                var $thumb = $(this), ind = $thumb.attr('data-fileindex'), file = self.filestack[ind],
                    pid = $thumb.attr('id'), newId;
                if (ind === '-1' || ind === -1) {
                    return;
                }
                if (file !== undefined) {
                    newstack[i] = file;
                    newnames[i] = self._getFileName(file);
                    newids[i] = self._getFileId(file);
                    $thumb.attr({'id': self.previewInitId + '-' + i, 'data-fileindex': i});
                    i++;
                } else {
                    newId = 'uploaded-' + $h.uniqId();
                    $thumb.attr({'id': newId, 'data-fileindex': '-1'});
                    self.$preview.find('#zoom-' + pid).attr('id', 'zoom-' + newId);
                }
            });
            self.filestack = newstack;
            self.filenames = newnames;
            self.fileids = newids;
        },
        _isFileSelectionValid: function (cnt) {
            var self = this;
            cnt = cnt || 0;
            if (self.required && !self.getFilesCount()) {
                self.$errorContainer.html('');
                self._showUploadError(self.msgFileRequired);
                return false;
            }
            if (self.minFileCount > 0 && self._getFileCount(cnt) < self.minFileCount) {
                self._noFilesError({});
                return false;
            }
            return true;
        },
        clearStack: function () {
            var self = this;
            self.filestack = [];
            self.filenames = [];
            self.fileids = [];
            return self.$element;
        },
        updateStack: function (i, file) {
            var self = this;
            self.filestack[i] = file;
            self.filenames[i] = self._getFileName(file);
            self.fileids[i] = file && self._getFileId(file) || null;
            return self.$element;
        },
        addToStack: function (file) {
            var self = this;
            self.filestack.push(file);
            self.filenames.push(self._getFileName(file));
            self.fileids.push(self._getFileId(file));
            return self.$element;
        },
        getFileStack: function (skipNull) {
            var self = this;
            return self.filestack.filter(function (n) {
                return (skipNull ? n !== undefined : n !== undefined && n !== null);
            });
        },
        getFilesCount: function () {
            var self = this, len = self.isAjaxUpload ? self.getFileStack().length : self.$element.get(0).files.length;
            return self._getFileCount(len);
        },
        readFiles: function (files) {
            this.reader = new FileReader();
            var self = this, $el = self.$element, $preview = self.$preview, reader = self.reader,
                $container = self.$previewContainer, $status = self.$previewStatus, msgLoading = self.msgLoading,
                msgProgress = self.msgProgress, previewInitId = self.previewInitId, numFiles = files.length,
                settings = self.fileTypeSettings, ctr = self.filestack.length, readFile,
                fileTypes = self.allowedFileTypes, typLen = fileTypes ? fileTypes.length : 0,
                fileExt = self.allowedFileExtensions, strExt = $h.isEmpty(fileExt) ? '' : fileExt.join(', '),
                maxPreviewSize = self.maxFilePreviewSize && parseFloat(self.maxFilePreviewSize),
                canPreview = $preview.length && (!maxPreviewSize || isNaN(maxPreviewSize)),
                throwError = function (msg, file, previewId, index) {
                    var p1 = $.extend(true, {}, self._getOutData({}, {}, files), {id: previewId, index: index}),
                        p2 = {id: previewId, index: index, file: file, files: files}, $thumb;
                    self._previewDefault(file, previewId, true);
                    if (self.isAjaxUpload) {
                        self.addToStack(undefined);
                        setTimeout(function () {
                            readFile(index + 1);
                        }, 100);
                    } else {
                        numFiles = 0;
                    }
                    self._initFileActions();
                    $thumb = $('#' + previewId);
                    $thumb.find('.kv-file-upload').hide();
                    if (self.removeFromPreviewOnError) {
                        $thumb.remove();
                    }
                    self.isError = self.isAjaxUpload ? self._showUploadError(msg, p1) : self._showError(msg, p2);
                    self._updateFileDetails(numFiles);
                };

            self.loadedImages = [];
            self.totalImagesCount = 0;

            $.each(files, function (key, file) {
                var func = self.fileTypeSettings.image;
                if (func && func(file.type)) {
                    self.totalImagesCount++;
                }
            });
            readFile = function (i) {
                if ($h.isEmpty($el.attr('multiple'))) {
                    numFiles = 1;
                }
                if (i >= numFiles) {
                    if (self.isAjaxUpload && self.filestack.length > 0) {
                        self._raise('filebatchselected', [self.getFileStack()]);
                    } else {
                        self._raise('filebatchselected', [files]);
                    }
                    $container.removeClass('file-thumb-loading');
                    $status.html('');
                    return;
                }
                var node = ctr + i, previewId = previewInitId + "-" + node, file = files[i], fSizeKB, j, msg,
                    fnText = settings.text, fnImage = settings.image, fnHtml = settings.html, typ, chk, typ1, typ2,
                    caption = file.name ? self.slug(file.name) : '', fileSize = (file.size || 0) / 1000,
                    fileExtExpr = '', previewData = $h.objUrl.createObjectURL(file), fileCount = 0, strTypes = '',
                    func, knownTypes = 0, isText, isHtml, isImage, txtFlag, processFileLoaded = function () {
                        var msg = msgProgress.setTokens({
                            'index': i + 1,
                            'files': numFiles,
                            'percent': 50,
                            'name': caption
                        });
                        setTimeout(function () {
                            $status.html(msg);
                            self._updateFileDetails(numFiles);
                            readFile(i + 1);
                        }, 100);
                        self._raise('fileloaded', [file, previewId, i, reader]);
                    };
                if (typLen > 0) {
                    for (j = 0; j < typLen; j++) {
                        typ1 = fileTypes[j];
                        typ2 = self.msgFileTypes[typ1] || typ1;
                        strTypes += j === 0 ? typ2 : ', ' + typ2;
                    }
                }
                if (caption === false) {
                    readFile(i + 1);
                    return;
                }
                if (caption.length === 0) {
                    msg = self.msgInvalidFileName.replace('{name}', $h.htmlEncode(file.name));
                    throwError(msg, file, previewId, i);
                    return;
                }
                if (!$h.isEmpty(fileExt)) {
                    fileExtExpr = new RegExp('\\.(' + fileExt.join('|') + ')$', 'i');
                }
                fSizeKB = fileSize.toFixed(2);
                if (self.maxFileSize > 0 && fileSize > self.maxFileSize) {
                    msg = self.msgSizeTooLarge.setTokens({
                        'name': caption,
                        'size': fSizeKB,
                        'maxSize': self.maxFileSize
                    });
                    throwError(msg, file, previewId, i);
                    return;
                }
                if (self.minFileSize !== null && fileSize <= $h.getNum(self.minFileSize)) {
                    msg = self.msgSizeTooSmall.setTokens({
                        'name': caption,
                        'size': fSizeKB,
                        'minSize': self.minFileSize
                    });
                    throwError(msg, file, previewId, i);
                    return;
                }
                if (!$h.isEmpty(fileTypes) && $h.isArray(fileTypes)) {
                    for (j = 0; j < fileTypes.length; j += 1) {
                        typ = fileTypes[j];
                        func = settings[typ];
                        fileCount += !func || (typeof func !== 'function') ? 0 : (func(file.type, file.name) ? 1 : 0);
                    }
                    if (fileCount === 0) {
                        msg = self.msgInvalidFileType.setTokens({'name': caption, 'types': strTypes});
                        throwError(msg, file, previewId, i);
                        return;
                    }
                }
                if (fileCount === 0 && !$h.isEmpty(fileExt) && $h.isArray(fileExt) && !$h.isEmpty(fileExtExpr)) {
                    chk = $h.compare(caption, fileExtExpr);
                    fileCount += $h.isEmpty(chk) ? 0 : chk.length;
                    if (fileCount === 0) {
                        msg = self.msgInvalidFileExtension.setTokens({'name': caption, 'extensions': strExt});
                        throwError(msg, file, previewId, i);
                        return;
                    }
                }
                if (!self.showPreview) {
                    if (self.isAjaxUpload) {
                        self.addToStack(file);
                    }
                    setTimeout(function () {
                        readFile(i + 1);
                        self._updateFileDetails(numFiles);
                    }, 100);
                    self._raise('fileloaded', [file, previewId, i, reader]);
                    return;
                }
                if (!canPreview && fileSize > maxPreviewSize) {
                    self.addToStack(file);
                    $container.addClass('file-thumb-loading');
                    self._previewDefault(file, previewId);
                    self._initFileActions();
                    self._updateFileDetails(numFiles);
                    readFile(i + 1);
                    return;
                }
                if ($preview.length && FileReader !== undefined) {
                    isText = fnText(file.type, caption);
                    isHtml = fnHtml(file.type, caption);
                    isImage = fnImage(file.type, caption);
                    $status.html(msgLoading.replace('{index}', i + 1).replace('{files}', numFiles));
                    $container.addClass('file-thumb-loading');
                    reader.onerror = function (evt) {
                        self._errorHandler(evt, caption);
                    };
                    reader.onload = function (theFile) {
                        var hex, fileInfo, uint, byte, bytes = [], contents, mime, readTextImage = function (textFlag) {
                            var newReader = new FileReader();
                            newReader.onerror = function (theFileNew) {
                                self._errorHandler(theFileNew, caption);
                            };
                            newReader.onload = function (theFileNew) {
                                self._previewFile(i, file, theFileNew, previewId, previewData, fileInfo);
                                self._initFileActions();
                                processFileLoaded();
                            };
                            if (textFlag) {
                                newReader.readAsText(file, self.textEncoding);
                            } else {
                                newReader.readAsDataURL(file);
                            }
                        };
                        fileInfo = {'name': caption, 'type': file.type};
                        $.each(settings, function (key, func) {
                            if (key !== 'object' && key !== 'other' && func(file.type, caption)) {
                                knownTypes++;
                            }
                        });
                        if (knownTypes === 0) {// auto detect mime types from content if no known file types detected
                            uint = new Uint8Array(theFile.target.result);
                            for (j = 0; j < uint.length; j++) {
                                byte = uint[j].toString(16);
                                bytes.push(byte);
                            }
                            hex = bytes.join('').toLowerCase().substring(0, 8);
                            mime = $h.getMimeType(hex, '', '');
                            if ($h.isEmpty(mime)) { // look for ascii text content
                                contents = $h.arrayBuffer2String(reader.result);
                                mime = $h.isSvg(contents) ? 'image/svg+xml' : $h.getMimeType(hex, contents, file.type);
                            }
                            fileInfo = {'name': caption, 'type': mime};
                            isText = fnText(mime, '');
                            isHtml = fnHtml(mime, '');
                            isImage = fnImage(mime, '');
                            txtFlag = isText || isHtml;
                            if (txtFlag || isImage) {
                                readTextImage(txtFlag);
                                return;
                            }
                        }
                        self._previewFile(i, file, theFile, previewId, previewData, fileInfo);
                        self._initFileActions();
                        processFileLoaded();
                    };
                    reader.onprogress = function (data) {
                        if (data.lengthComputable) {
                            var fact = (data.loaded / data.total) * 100, progress = Math.ceil(fact);
                            msg = msgProgress.setTokens({
                                'index': i + 1,
                                'files': numFiles,
                                'percent': progress,
                                'name': caption
                            });
                            setTimeout(function () {
                                $status.html(msg);
                            }, 100);
                        }
                    };

                    if (isText || isHtml) {
                        reader.readAsText(file, self.textEncoding);
                    } else {
                        if (isImage) {
                            reader.readAsDataURL(file);
                        } else {
                            reader.readAsArrayBuffer(file);
                        }
                    }
                } else {
                    self._previewDefault(file, previewId);
                    setTimeout(function () {
                        readFile(i + 1);
                        self._updateFileDetails(numFiles);
                    }, 100);
                    self._raise('fileloaded', [file, previewId, i, reader]);
                }
                self.addToStack(file);
            };

            readFile(0);
            self._updateFileDetails(numFiles, false);
        },
        lock: function () {
            var self = this;
            self._resetErrors();
            self.disable();
            if (self.showRemove) {
                self.$container.find('.fileinput-remove').hide();
            }
            if (self.showCancel) {
                self.$container.find('.fileinput-cancel').show();
            }
            self._raise('filelock', [self.filestack, self._getExtraData()]);
            return self.$element;
        },
        unlock: function (reset) {
            var self = this;
            if (reset === undefined) {
                reset = true;
            }
            self.enable();
            if (self.showCancel) {
                self.$container.find('.fileinput-cancel').hide();
            }
            if (self.showRemove) {
                self.$container.find('.fileinput-remove').show();
            }
            if (reset) {
                self._resetFileStack();
            }
            self._raise('fileunlock', [self.filestack, self._getExtraData()]);
            return self.$element;
        },
        cancel: function () {
            var self = this, xhr = self.ajaxRequests, len = xhr.length, i;
            if (len > 0) {
                for (i = 0; i < len; i += 1) {
                    self.cancelling = true;
                    xhr[i].abort();
                }
            }
            self._setProgressCancelled();
            self._getThumbs().each(function () {
                var $thumb = $(this), ind = $thumb.attr('data-fileindex');
                $thumb.removeClass('file-uploading');
                if (self.filestack[ind] !== undefined) {
                    $thumb.find('.kv-file-upload').removeClass('disabled').removeAttr('disabled');
                    $thumb.find('.kv-file-remove').removeClass('disabled').removeAttr('disabled');
                }
                self.unlock();
            });
            return self.$element;
        },
        clear: function () {
            var self = this, cap;
            if (!self._raise('fileclear')) {
                return;
            }
            self.$btnUpload.removeAttr('disabled');
            self._getThumbs().find('video,audio,img').each(function () {
                $h.cleanMemory($(this));
            });
            self._resetUpload();
            self.clearStack();
            self._clearFileInput();
            self._resetErrors(true);
            if (self._hasInitialPreview()) {
                self._showFileIcon();
                self._resetPreview();
                self._initPreviewActions();
                self.$container.removeClass('file-input-new');
            } else {
                self._getThumbs().each(function () {
                    self._clearObjects($(this));
                });
                if (self.isAjaxUpload) {
                    self.previewCache.data = {};
                }
                self.$preview.html('');
                cap = (!self.overwriteInitial && self.initialCaption.length > 0) ? self.initialCaption : '';
                self.$caption.attr('title', '').val(cap);
                $h.addCss(self.$container, 'file-input-new');
                self._validateDefaultPreview();
            }
            if (self.$container.find($h.FRAMES).length === 0) {
                if (!self._initCaption()) {
                    self.$captionContainer.removeClass('icon-visible');
                }
            }
            self._hideFileIcon();
            self._raise('filecleared');
            self.$captionContainer.focus();
            self._setFileDropZoneTitle();
            return self.$element;
        },
        reset: function () {
            var self = this;
            if (!self._raise('filereset')) {
                return;
            }
            self._resetPreview();
            self.$container.find('.fileinput-filename').text('');
            $h.addCss(self.$container, 'file-input-new');
            if (self.getFrames().length || self.isAjaxUpload && self.dropZoneEnabled) {
                self.$container.removeClass('file-input-new');
            }
            self.clearStack();
            self.formdata = {};
            self._setFileDropZoneTitle();
            return self.$element;
        },
        disable: function () {
            var self = this;
            self.isDisabled = true;
            self._raise('filedisabled');
            self.$element.attr('disabled', 'disabled');
            self.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled");
            self.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button")
                .attr("disabled", true);
            $h.addCss(self.$container.find('.btn-file'), 'disabled');
            self._initDragDrop();
            return self.$element;
        },
        enable: function () {
            var self = this;
            self.isDisabled = false;
            self._raise('fileenabled');
            self.$element.removeAttr('disabled');
            self.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled");
            self.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button")
                .removeAttr("disabled");
            self.$container.find('.btn-file').removeClass('disabled');
            self._initDragDrop();
            return self.$element;
        },
        upload: function () {
            var self = this, totLen = self.getFileStack().length, i, outData, len,
                hasExtraData = !$.isEmptyObject(self._getExtraData());
            if (!self.isAjaxUpload || self.isDisabled || !self._isFileSelectionValid(totLen)) {
                return;
            }
            self._resetUpload();
            if (totLen === 0 && !hasExtraData) {
                self._showUploadError(self.msgUploadEmpty);
                return;
            }
            self.$progress.show();
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.lock();
            self._setProgress(2);
            if (totLen === 0 && hasExtraData) {
                self._uploadExtraOnly();
                return;
            }
            len = self.filestack.length;
            self.hasInitData = false;
            if (self.uploadAsync) {
                outData = self._getOutData();
                self._raise('filebatchpreupload', [outData]);
                self.fileBatchCompleted = false;
                self.uploadCache = {content: [], config: [], tags: [], append: true};
                self.uploadAsyncCount = self.getFileStack().length;
                for (i = 0; i < len; i++) {
                    self.uploadCache.content[i] = null;
                    self.uploadCache.config[i] = null;
                    self.uploadCache.tags[i] = null;
                }
                self.$preview.find('.file-preview-initial').removeClass($h.SORT_CSS);
                self._initSortable();
                self.cacheInitialPreview = self.getPreview();

                for (i = 0; i < len; i++) {
                    if (self.filestack[i]) {
                        self._uploadSingle(i, true);
                    }
                }
                return;
            }
            self._uploadBatch();
            return self.$element;
        },
        destroy: function () {
            var self = this, $form = self.$form, $cont = self.$container, $el = self.$element, ns = self.namespace;
            $(document).off(ns);
            $(window).off(ns);
            if ($form && $form.length) {
                $form.off(ns);
            }
            if (self.isAjaxUpload) {
                self._clearFileInput();
            }
            self._cleanup();
            self._initPreviewCache();
            $el.insertBefore($cont).off(ns).removeData();
            $cont.off().remove();
            return $el;
        },
        refresh: function (options, triggerChange) {
            var self = this, $el = self.$element;
            if (typeof options !== 'object' || $h.isEmpty(options)) {
                options = self.options;
            } else {
                options = $.extend(true, {}, self.options, options);
            }
            self._init(options, true);
            self._listen();
            if (triggerChange) {
                $el.trigger('change' + self.namespace);
            }
            return $el;
        },
        zoom: function (frameId) {
            var self = this, $frame = self._getFrame(frameId), $modal = self.$modal;
            if (!$frame) {
                return;
            }
            $h.initModal($modal);
            $modal.html(self._getModalContent());
            self._setZoomContent($frame);
            $modal.modal('show');
            self._initZoomButtons();
        },
        getExif: function (frameId) {
            var self = this, $frame = self._getFrame(frameId);
            return $frame && $frame.data('exif') || null;
        },
        getFrames: function (cssFilter) {
            var self = this;
            cssFilter = cssFilter || '';
            return self.$preview.find($h.FRAMES + cssFilter);
        },
        getPreview: function () {
            var self = this;
            return {
                content: self.initialPreview,
                config: self.initialPreviewConfig,
                tags: self.initialPreviewThumbTags
            };
        }
    };

    $.fn.fileinput = function (option) {
        if (!$h.hasFileAPISupport() && !$h.isIE(9)) {
            return;
        }
        var args = Array.apply(null, arguments), retvals = [];
        args.shift();
        this.each(function () {
            var self = $(this), data = self.data('fileinput'), options = typeof option === 'object' && option,
                theme = options.theme || self.data('theme'), l = {}, t = {},
                lang = options.language || self.data('language') || $.fn.fileinput.defaults.language || 'en', opt;
            if (!data) {
                if (theme) {
                    t = $.fn.fileinputThemes[theme] || {};
                }
                if (lang !== 'en' && !$h.isEmpty($.fn.fileinputLocales[lang])) {
                    l = $.fn.fileinputLocales[lang] || {};
                }
                opt = $.extend(true, {}, $.fn.fileinput.defaults, t, $.fn.fileinputLocales.en, l, options, self.data());
                data = new FileInput(this, opt);
                self.data('fileinput', data);
            }

            if (typeof option === 'string') {
                retvals.push(data[option].apply(data, args));
            }
        });
        switch (retvals.length) {
            case 0:
                return this;
            case 1:
                return retvals[0];
            default:
                return retvals;
        }
    };

    $.fn.fileinput.defaults = {
        language: 'en',
        showCaption: true,
        showBrowse: true,
        showPreview: true,
        showRemove: true,
        showUpload: true,
        showCancel: true,
        showClose: true,
        showUploadedThumbs: true,
        browseOnZoneClick: false,
        autoReplace: false,
        autoOrientImage: true, // for JPEG images based on EXIF orientation tag
        required: false,
        rtl: false,
        hideThumbnailContent: false,
        generateFileId: null,
        previewClass: '',
        captionClass: '',
        frameClass: 'krajee-default',
        mainClass: 'file-caption-main',
        mainTemplate: null,
        purifyHtml: true,
        fileSizeGetter: null,
        initialCaption: '',
        initialPreview: [],
        initialPreviewDelimiter: '*$$*',
        initialPreviewAsData: false,
        initialPreviewFileType: 'image',
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: true,
        initialPreviewDownloadUrl: '',
        removeFromPreviewOnError: false,
        deleteUrl: '',
        deleteExtraData: {},
        overwriteInitial: true,
        previewZoomButtonIcons: {
            prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
            next: '<i class="glyphicon glyphicon-triangle-right"></i>',
            toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
            fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
            borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
            close: '<i class="glyphicon glyphicon-remove"></i>'
        },
        previewZoomButtonClasses: {
            prev: 'btn btn-navigate',
            next: 'btn btn-navigate',
            toggleheader: 'btn btn-kv btn-default btn-outline-secondary',
            fullscreen: 'btn btn-kv btn-default btn-outline-secondary',
            borderless: 'btn btn-kv btn-default btn-outline-secondary',
            close: 'btn btn-kv btn-default btn-outline-secondary'
        },
        preferIconicPreview: false,
        preferIconicZoomPreview: false,
        allowedPreviewTypes: undefined,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: 'file-other-icon',
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: 'hidden-xs',
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
        browseClass: 'btn btn-primary',
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: 'btn btn-default btn-secondary',
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: 'btn btn-default btn-secondary',
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: 'btn btn-default btn-secondary',
        uploadUrl: null,
        uploadUrlThumb: null,
        uploadAsync: true,
        uploadExtraData: {},
        zoomModalHeight: 480,
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: false,
        resizePreference: 'width',
        resizeQuality: 0.92,
        resizeDefaultImageType: 'image/jpeg',
        resizeIfSizeMoreThan: 0, // in KB
        minFileSize: 0,
        maxFileSize: 0,
        maxFilePreviewSize: 25600, // 25 MB
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: false,
        msgValidationErrorClass: 'text-danger',
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: 'file-error-message',
        progressThumbClass: "progress-bar bg-success progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar bg-success progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar bg-success progress-bar-success",
        progressErrorClass: "progress-bar bg-danger progress-bar-danger",
        progressUploadThreshold: 99,
        previewFileType: 'image',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: $h.closeButton('kv-error-close'),
        slugCallback: null,
        dropZoneEnabled: true,
        dropZoneTitleClass: 'file-drop-zone-title',
        fileActionSettings: {},
        otherActionButtons: '',
        textEncoding: 'UTF-8',
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: true,
        mergeAjaxCallbacks: false,
        mergeAjaxDeleteCallbacks: false,
        retryErrorUploads: true
    };

    $.fn.fileinputLocales.en = {
        fileSingle: 'file',
        filePlural: 'files',
        browseLabel: 'Browse &hellip;',
        removeLabel: 'Remove',
        removeTitle: 'Clear selected files',
        cancelLabel: 'Cancel',
        cancelTitle: 'Abort ongoing upload',
        uploadLabel: 'Upload',
        uploadTitle: 'Upload selected files',
        msgNo: 'No',
        msgNoFilesSelected: 'No files selected',
        msgCancelled: 'Cancelled',
        msgPlaceholder: 'Select {files}...',
        msgZoomModalHeading: 'Detailed Preview',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'You must select at least <b>{n}</b> {files} to upload.',
        msgFilesTooMany: 'Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.',
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'The file upload was aborted',
        msgUploadThreshold: 'Processing...',
        msgUploadBegin: 'Initializing...',
        msgUploadEnd: 'Done',
        msgUploadEmpty: 'No valid data available for upload.',
        msgUploadError: 'Error',
        msgValidationError: 'Validation Error',
        msgLoading: 'Loading file {index} of {files} &hellip;',
        msgProgress: 'Loading file {index} of {files} - {name} - {percent}% completed.',
        msgSelected: '{n} {files} selected',
        msgFoldersNotAllowed: 'Drag & drop files only! {n} folder(s) dropped were skipped.',
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: 'Could not get the image dimensions to resize.',
        msgImageResizeException: 'Error while resizing the image.<pre>{errors}</pre>',
        msgAjaxError: 'Something went wrong with the {operation} operation. Please try again later!',
        msgAjaxProgressError: '{operation} failed',
        ajaxOperations: {
            deleteThumb: 'file delete',
            uploadThumb: 'file upload',
            uploadBatch: 'batch file upload',
            uploadExtra: 'form data upload'
        },
        dropZoneTitle: 'Drag & drop files here &hellip;',
        dropZoneClickTitle: '<br>(or click to select {files})',
        previewZoomButtonTitles: {
            prev: 'View previous file',
            next: 'View next file',
            toggleheader: 'Toggle header',
            fullscreen: 'Toggle full screen',
            borderless: 'Toggle borderless mode',
            close: 'Close detailed preview'
        }
    };

    $.fn.fileinput.Constructor = FileInput;

    /**
     * Convert automatically file inputs with class 'file' into a bootstrap fileinput control.
     */
    $(document).ready(function () {
        var $input = $('input.file[type=file]');
        if ($input.length) {
            $input.fileinput();
        }
    });
}));
/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {

							// Insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null || element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				if ( obj[ i ] ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.hasAttribute( "contenteditable" ) ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			// If a normalizer is defined for this element, then
			// call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( typeof rules.normalizer === "function" ) {
				val = rules.normalizer.call( element, val );

				if ( typeof val !== "string" ) {
					throw new TypeError( "The normalizer should return a string value." );
				}

				// Delete the normalizer from rules to avoid treating
				// it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
/* ----------------------------------------------------------------------------- 

  jQuery DateTimePicker - Responsive flat design jQuery DateTime Picker plugin for Web & Mobile
  Version 0.1.37
  Copyright (c)2016 Curious Solutions LLP and Neha Kadam
  http://curioussolutions.github.io/DateTimePicker
  https://github.com/CuriousSolutions/DateTimePicker

 ----------------------------------------------------------------------------- */

/* Support Object.keys in IE8 */
if(!Object.keys) 
{
    Object.keys = function(obj) 
    {
        var keys = [];

        for (var i in obj) 
        {
            if (obj.hasOwnProperty(i)) 
            {
                keys.push(i);
            }
        }

        return keys;
    };
}

$.DateTimePicker = $.DateTimePicker || {

	name: "DateTimePicker",

	i18n: {}, // Internationalization Objects

	defaults:  //Plugin Defaults
	{
		mode: "date",
		defaultDate: null,
	
		dateSeparator: "-",
		timeSeparator: ":",
		timeMeridiemSeparator: " ",
		dateTimeSeparator: " ",
		monthYearSeparator: " ",
	
		dateTimeFormat: "dd-MM-yyyy HH:mm",
		dateFormat: "dd-MM-yyyy",
		timeFormat: "HH:mm",
	
		maxDate: null,
		minDate:  null,
	
		maxTime: null,
		minTime: null,
	
		maxDateTime: null,
		minDateTime: null,
	
		shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		fullDayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		fullMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		labels: null, /*{"year": "Year", "month": "Month", "day": "Day", "hour": "Hour", "minutes": "Minutes", "seconds": "Seconds", "meridiem": "Meridiem"}*/

		minuteInterval: 1,
		roundOffMinutes: true,

		secondsInterval: 1,
		roundOffSeconds: true,
	
		showHeader: true,
		titleContentDate: "Set Date",
		titleContentTime: "Set Time",
		titleContentDateTime: "Set Date & Time",
	
		buttonsToDisplay: ["HeaderCloseButton", "SetButton", "ClearButton"],
		setButtonContent: "Set",
		clearButtonContent: "Clear",
    	incrementButtonContent: "+",
    	decrementButtonContent: "-",
		setValueInTextboxOnEveryClick: false,
		readonlyInputs: false,
	
		animationDuration: 400,

		touchHoldInterval: 300, // in Milliseconds
		captureTouchHold: false, // capture Touch Hold Event

		mouseHoldInterval: 50, // in Milliseconds
		captureMouseHold: false, // capture Mouse Hold Event
	
		isPopup: true,
		parentElement: "body",

		isInline: false,
		inputElement: null,

		language: "",
	
		init: null, // init(oDateTimePicker)
		addEventHandlers: null,  // addEventHandlers(oDateTimePicker)
		beforeShow: null,  // beforeShow(oInputElement)
		afterShow: null,  // afterShow(oInputElement)
		beforeHide: null,  // beforeHide(oInputElement)
		afterHide: null,  // afterHide(oInputElement)
		buttonClicked: null,  // buttonClicked(sButtonType, oInputElement) where sButtonType = "SET"|"CLEAR"|"CANCEL"|"TAB"
		settingValueOfElement: null, // settingValueOfElement(sValue, dDateTime, oInputElement)
		formatHumanDate: null,  // formatHumanDate(oDateTime, sMode, sFormat)
	
		parseDateTimeString: null, // parseDateTimeString(sDateTime, sMode, sFormat, oInputField)
		formatDateTimeString: null // formatDateTimeString(oDateTime, sMode, sFormat, oInputField)
	},

	dataObject: // Temporary Variables For Calculation Specific to DateTimePicker Instance
	{
	
		dCurrentDate: new Date(),
		iCurrentDay: 0,
		iCurrentMonth: 0,
		iCurrentYear: 0,
		iCurrentHour: 0,
		iCurrentMinutes: 0,
		iCurrentSeconds: 0,
		sCurrentMeridiem: "",
		iMaxNumberOfDays: 0,
	
		sDateFormat: "",
		sTimeFormat: "",
		sDateTimeFormat: "",
	
		dMinValue: null,
		dMaxValue: null,
	
		sArrInputDateFormats: [],
		sArrInputTimeFormats: [],
		sArrInputDateTimeFormats: [],

		bArrMatchFormat: [],
		bDateMode: false,
		bTimeMode: false,
		bDateTimeMode: false,
	
		oInputElement: null,

		iTabIndex: 0,
		bElemFocused: false,
	
		bIs12Hour: false,

		sTouchButton: null,
		iTouchStart: null,
		oTimeInterval: null,
		bIsTouchDevice: "ontouchstart" in document.documentElement
	}

};

$.cf = {

	_isValid: function(sValue)
	{
		return (sValue !== undefined && sValue !== null && sValue !== "");
	},

	_compare: function(sString1, sString2)
	{
		var bString1 = (sString1 !== undefined && sString1 !== null),
		bString2 = (sString2 !== undefined && sString2 !== null);
		if(bString1 && bString2)
		{
			if(sString1.toLowerCase() === sString2.toLowerCase())
				return true;
			else
				return false;
		}
		else
			return false;			
	}

};

(function (factory) 
{
    if(typeof define === "function" && define.amd) 
    {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    }
    else if(typeof exports === "object") 
    {
        // Node/CommonJS
        module.exports = factory(require("jquery"));
    }
    else 
    {
        // Browser globals
        factory(jQuery);
    }
}(function ($) 
{
	"use strict";

	function DateTimePicker(element, options)
	{
		this.element = element;

		var sLanguage = "";
		sLanguage = ($.cf._isValid(options) && $.cf._isValid(options.language)) ? options.language : $.DateTimePicker.defaults.language;
		this.settings = $.extend({}, $.DateTimePicker.defaults, $.DateTimePicker.i18n[sLanguage], options);
		this.options = options;

		this.oData = $.extend({}, $.DateTimePicker.dataObject);
		this._defaults = $.DateTimePicker.defaults;
		this._name = $.DateTimePicker.name;

		this.init();
	}

	$.fn.DateTimePicker = function (options)
	{
		var oDTP = $(this).data(),
		sArrDataKeys = oDTP ? Object.keys(oDTP) : [],
		iKey, sKey;

		if(typeof options === "string")
		{			
			if($.cf._isValid(oDTP))
			{
				if(options === "destroy")
				{
					if(sArrDataKeys.length > 0)
					{
						for(iKey in sArrDataKeys)
						{
							sKey = sArrDataKeys[iKey];
							if(sKey.search("plugin_DateTimePicker") !== -1)
							{
								$(document).unbind("click.DateTimePicker keydown.DateTimePicker keyup.DateTimePicker");
							
								$(this).children().remove();
								$(this).removeData();
								$(this).unbind();
								$(this).removeClass("dtpicker-overlay dtpicker-mobile dtpicker-inline");

								oDTP = oDTP[sKey];
							
								console.log("Destroyed DateTimePicker Object");
								console.log(oDTP);
							
								break;
							}
						}
					}
					else
					{
						console.log("No DateTimePicker Object Defined For This Element");
					}
				}
				else if(options === "object")
				{
					if(sArrDataKeys.length > 0)
					{
						for(iKey in sArrDataKeys)
						{
							sKey = sArrDataKeys[iKey];
							if(sKey.search("plugin_DateTimePicker") !== -1)
							{
								return oDTP[sKey];
							}
						}
					}
					else
					{
						console.log("No DateTimePicker Object Defined For This Element");
					}
				}
			}
		}
		else
		{
			return this.each(function() 
			{
				$.removeData(this, "plugin_DateTimePicker");
				if(!$.data(this, "plugin_DateTimePicker"))
					$.data(this, "plugin_DateTimePicker", new DateTimePicker(this, options));
			});
		}
	};

	DateTimePicker.prototype = {
	
		// Public Method
		init: function () 
		{
			var oDTP = this;					
		
			oDTP._setDateFormatArray(); // Set DateFormatArray
			oDTP._setTimeFormatArray(); // Set TimeFormatArray
			oDTP._setDateTimeFormatArray(); // Set DateTimeFormatArray

			console.log($(oDTP.element).data('parentelement') + " " + $(oDTP.element).attr('data-parentelement'));
			if($(oDTP.element).data('parentelement') !== undefined)
	        {
	           	oDTP.settings.parentElement = $(oDTP.element).data('parentelement');
	        }
		
			if(oDTP.settings.isPopup && !oDTP.settings.isInline)
			{
				oDTP._createPicker();
				$(oDTP.element).addClass("dtpicker-mobile");
			}

			if(oDTP.settings.isInline)
			{
				oDTP._createPicker();
				oDTP._showPicker(oDTP.settings.inputElement);
			}

			if(oDTP.settings.init)
				oDTP.settings.init.call(oDTP);

			oDTP._addEventHandlersForInput();
		},
	
		_setDateFormatArray: function()
		{
			var oDTP = this;
		
			oDTP.oData.sArrInputDateFormats = [];		
			var sDate = "";
		
			//  0 - "dd-MM-yyyy"
			sDate = "dd" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);
		
			//  1 - "MM-dd-yyyy"
			sDate = "MM" + oDTP.settings.dateSeparator + "dd" + oDTP.settings.dateSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);
		
			//  2 - "yyyy-MM-dd"
			sDate = "yyyy" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "dd";
			oDTP.oData.sArrInputDateFormats.push(sDate);
		
			//  3 - "dd-MMM-yyyy"
			sDate = "dd" + oDTP.settings.dateSeparator + "MMM" + oDTP.settings.dateSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);

			//  4 - "MM yyyy"
			sDate = "MM" + oDTP.settings.monthYearSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);

			//  5 - "MMM yyyy"
			sDate = "MMM" + oDTP.settings.monthYearSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);

			//  6 - "MMM yyyy"
			sDate = "MMMM" + oDTP.settings.monthYearSeparator + "yyyy";
			oDTP.oData.sArrInputDateFormats.push(sDate);

			//  7 - "yyyy MM"
			sDate = "yyyy" + oDTP.settings.monthYearSeparator + "MM";
			oDTP.oData.sArrInputDateFormats.push(sDate);
		},
	
		_setTimeFormatArray: function()
		{
			var oDTP = this;
		
			oDTP.oData.sArrInputTimeFormats = [];
			var sTime = "";

			//  0 - "hh:mm:ss AA"
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss" + oDTP.settings.timeMeridiemSeparator + "AA";
			oDTP.oData.sArrInputTimeFormats.push(sTime);
		
			//  1 - "HH:mm:ss"
			sTime = "HH" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss";
			oDTP.oData.sArrInputTimeFormats.push(sTime);
		
			//  2 - "hh:mm AA"
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeMeridiemSeparator + "AA";
			oDTP.oData.sArrInputTimeFormats.push(sTime);
		
			//  3 - "HH:mm"
			sTime = "HH" + oDTP.settings.timeSeparator + "mm";
			oDTP.oData.sArrInputTimeFormats.push(sTime);
		},
	
		_setDateTimeFormatArray: function()
		{
			var oDTP = this;
		
			oDTP.oData.sArrInputDateTimeFormats = [];
			var sDate = "", sTime = "", sDateTime = "";

			//  0 - "dd-MM-yyyy HH:mm:ss"
			sDate = "dd" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  1 - "dd-MM-yyyy hh:mm:ss AA"
			sDate = "dd" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  2 - "MM-dd-yyyy HH:mm:ss"
			sDate = "MM" + oDTP.settings.dateSeparator + "dd" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  3 - "MM-dd-yyyy hh:mm:ss AA"
			sDate = "MM" + oDTP.settings.dateSeparator + "dd" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  4 - "yyyy-MM-dd HH:mm:ss"
			sDate = "yyyy" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "dd";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  5 - "yyyy-MM-dd hh:mm:ss AA"
			sDate = "yyyy" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "dd";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
			
			//  6 - "dd-MMM-yyyy hh:mm:ss"
			sDate = "dd" + oDTP.settings.dateSeparator + "MMM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
			
			//  7 - "dd-MMM-yyyy hh:mm:ss AA"
			sDate = "dd" + oDTP.settings.dateSeparator + "MMM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeSeparator + "ss" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);

			//--------------
		
			//  8 - "dd-MM-yyyy HH:mm"
			sDate = "dd" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  9 - "dd-MM-yyyy hh:mm AA"
			sDate = "dd" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  10 - "MM-dd-yyyy HH:mm"
			sDate = "MM" + oDTP.settings.dateSeparator + "dd" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  11 - "MM-dd-yyyy hh:mm AA"
			sDate = "MM" + oDTP.settings.dateSeparator + "dd" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  12 - "yyyy-MM-dd HH:mm"
			sDate = "yyyy" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "dd";
			sTime = "HH" + oDTP.settings.timeSeparator + "mm";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		
			//  13 - "yyyy-MM-dd hh:mm AA"
			sDate = "yyyy" + oDTP.settings.dateSeparator + "MM" + oDTP.settings.dateSeparator + "dd";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
			
			//  14 - "dd-MMM-yyyy hh:mm"
			sDate = "dd" + oDTP.settings.dateSeparator + "MMM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
			
			//  15 - "dd-MMM-yyyy hh:mm AA"
			sDate = "dd" + oDTP.settings.dateSeparator + "MMM" + oDTP.settings.dateSeparator + "yyyy";
			sTime = "hh" + oDTP.settings.timeSeparator + "mm" + oDTP.settings.timeMeridiemSeparator + "AA";
			sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
			oDTP.oData.sArrInputDateTimeFormats.push(sDateTime);
		},

		_matchFormat: function(sMode, sFormat)
		{
			var oDTP = this;

			oDTP.oData.bArrMatchFormat = [];
			oDTP.oData.bDateMode = false;
			oDTP.oData.bTimeMode = false;
			oDTP.oData.bDateTimeMode = false;
			var oArrInput = [], iTempIndex;

			sMode = $.cf._isValid(sMode) ? sMode : oDTP.settings.mode;
			if($.cf._compare(sMode, "date"))
			{
				sFormat = $.cf._isValid(sFormat) ? sFormat : oDTP.oData.sDateFormat;
				oDTP.oData.bDateMode = true;
				oArrInput = oDTP.oData.sArrInputDateFormats;
			}
			else if($.cf._compare(sMode, "time"))
			{
				sFormat = $.cf._isValid(sFormat) ? sFormat : oDTP.oData.sTimeFormat;
				oDTP.oData.bTimeMode = true;
				oArrInput = oDTP.oData.sArrInputTimeFormats;
			}
			else if($.cf._compare(sMode, "datetime"))
			{
				sFormat = $.cf._isValid(sFormat) ? sFormat : oDTP.oData.sDateTimeFormat;
				oDTP.oData.bDateTimeMode = true;
				oArrInput = oDTP.oData.sArrInputDateTimeFormats;
			}

			for(iTempIndex = 0; iTempIndex < oArrInput.length; iTempIndex++)
			{
				oDTP.oData.bArrMatchFormat.push(
					$.cf._compare(sFormat, oArrInput[iTempIndex])
				);
			}
		},
	
		_setMatchFormat: function(iArgsLength, sMode, sFormat)
		{
			var oDTP = this;

			if(iArgsLength > 0)
				oDTP._matchFormat(sMode, sFormat);
		},

		_createPicker: function()
		{
			var oDTP = this;
		
			if(oDTP.settings.isInline)
			{
				$(oDTP.element).addClass("dtpicker-inline");
			}
			else
			{
				$(oDTP.element).addClass("dtpicker-overlay");
				$(".dtpicker-overlay").click(function(e)
				{
					oDTP._hidePicker("");
				});
			}
		
			var sTempStr = "";	
			sTempStr += "<div class='dtpicker-bg'>";
			sTempStr += "<div class='dtpicker-cont'>";
			sTempStr += "<div class='dtpicker-content'>";
			sTempStr += "<div class='dtpicker-subcontent'>";
			sTempStr += "</div>";
			sTempStr += "</div>";
			sTempStr += "</div>";
			sTempStr += "</div>";
			$(oDTP.element).html(sTempStr);
		},
	
		_addEventHandlersForInput: function()
		{
			var oDTP = this;
		
			if(!oDTP.settings.isInline)
			{
				oDTP.oData.oInputElement = null;

				$(oDTP.settings.parentElement).find("input[type='date'], input[type='time'], input[type='datetime']").each(function()
				{
					$(this).attr("data-field", $(this).attr("type"));
					$(this).attr("type", "text");
				});	
	        
				var sel = "[data-field='date'], [data-field='time'], [data-field='datetime']";
				$(oDTP.settings.parentElement).off("focus", sel, oDTP._inputFieldFocus)
											  .on ("focus", sel, {"obj": oDTP}, oDTP._inputFieldFocus)
											  
				$(oDTP.settings.parentElement).off("click", sel, oDTP._inputFieldClick)
											  .on ("click", sel, {"obj": oDTP}, oDTP._inputFieldClick);
			}

			if(oDTP.settings.addEventHandlers)
				oDTP.settings.addEventHandlers.call(oDTP);
		},
	
		_inputFieldFocus: function(e)
		{
			var oDTP = e.data.obj;
			oDTP.showDateTimePicker(this);
			oDTP.oData.bMouseDown = false;
		},

		_inputFieldClick: function(e)
		{
          	var oDTP = e.data.obj;
			if(!$.cf._compare($(this).prop("tagName"), "input"))
			{
				oDTP.showDateTimePicker(this);
			}
			e.stopPropagation();
		},

		// Public Method
		getDateObjectForInputField: function(oInputField)
		{
			var oDTP = this;

			if($.cf._isValid(oInputField))
			{
				var sDateTime = oDTP._getValueOfElement(oInputField),
				sMode = $(oInputField).data("field"),
				sFormat = "",
				dInput;

				if(!$.cf._isValid(sMode))
		    		sMode = oDTP.settings.mode;
		    	if(! oDTP.settings.formatDateTimeString)
		    	{
		    		sFormat = $(oInputField).data("format");
			    	if(!$.cf._isValid(sFormat))
			    	{
				    	if($.cf._compare(sMode, "date"))
				    		sFormat = oDTP.settings.dateFormat;
				    	else if($.cf._compare(sMode, "time"))
				        	sFormat = oDTP.settings.timeFormat;
				        else if($.cf._compare(sMode, "datetime"))
				        	sFormat = oDTP.settings.dateTimeFormat;
				    }

				    oDTP._matchFormat(sMode, sFormat);

			    	if($.cf._compare(sMode, "date"))
			    		dInput = oDTP._parseDate(sDateTime);
			    	else if($.cf._compare(sMode, "time"))
			        	dInput = oDTP._parseTime(sDateTime);
			        else if($.cf._compare(sMode, "datetime"))
			        	dInput = oDTP._parseDateTime(sDateTime);

				}
				else
				{
					dInput = oDTP.settings.parseDateTimeString.call(oDTP, sDateTime, sMode, sFormat, $(oInputField));
				}

		        return dInput;
			}
		},

		// Public Method
		setDateTimeStringInInputField: function(oInputField, dInput)
		{
			var oDTP = this;

			dInput = dInput || oDTP.oData.dCurrentDate;
		
			var oArrElements;
			if($.cf._isValid(oInputField))
			{
				oArrElements = [];
				if(typeof oInputField === "string")
					oArrElements.push(oInputField);
				else if(typeof oInputField === "object")
					oArrElements = oInputField;
			}
			else
			{
				if($.cf._isValid(oDTP.settings.parentElement))
				{
					oArrElements = $(oDTP.settings.parentElement).find("[data-field='date'], [data-field='time'], [data-field='datetime']");
				}
				else
				{
					oArrElements = $("[data-field='date'], [data-field='time'], [data-field='datetime']");
				}
			}
		
			oArrElements.each(function()
			{
				var oElement = this,
				sMode, sFormat, bIs12Hour, sOutput;
			
		        sMode = $(oElement).data("field");
		        if(!$.cf._isValid(sMode))
		    		sMode = oDTP.settings.mode;
		    
		    	sFormat = "Custom";
		    	bIs12Hour = false;
		    	if(! oDTP.settings.formatDateTimeString)
		    	{
			    	sFormat = $(oElement).data("format");
			    	if(!$.cf._isValid(sFormat))
			    	{
				    	if($.cf._compare(sMode, "date"))
				    		sFormat = oDTP.settings.dateFormat;
				    	else if($.cf._compare(sMode, "time"))
				        	sFormat = oDTP.settings.timeFormat;
				        else if($.cf._compare(sMode, "datetime"))
				        	sFormat = oDTP.settings.dateTimeFormat;
				    }

				    bIs12Hour = oDTP.getIs12Hour(sMode, sFormat);
				}

				sOutput = oDTP._setOutput(sMode, sFormat, bIs12Hour, dInput, oElement);
				oDTP._setValueOfElement(sOutput, $(oElement));
			});
		},

		// Public Method
		getDateTimeStringInFormat: function(sMode, sFormat, dInput)
		{
			var oDTP = this;
			return oDTP._setOutput(sMode, sFormat, oDTP.getIs12Hour(sMode, sFormat), dInput);
		},
	
		// Public Method
		showDateTimePicker: function(oElement)
		{
			var oDTP = this;
			
			if(oDTP.oData.oInputElement !== null)
			{
				if(!oDTP.settings.isInline)
					oDTP._hidePicker(0, oElement);
			}
			else
				oDTP._showPicker(oElement);
		},
	
		_setButtonAction: function(bFromTab)
		{
			var oDTP = this;
		
			if(oDTP.oData.oInputElement !== null)
			{
				oDTP._setValueOfElement(oDTP._setOutput());
				
				if(bFromTab)
				{
					if(oDTP.settings.buttonClicked)
						oDTP.settings.buttonClicked.call(oDTP, "TAB", oDTP.oData.oInputElement);
					if(!oDTP.settings.isInline)
						oDTP._hidePicker(0);
				}
				else
				{
					if(!oDTP.settings.isInline)
						oDTP._hidePicker("");
				}
			}
		},

		_setOutput: function(sMode, sFormat, bIs12Hour, dCurrentDate, oElement)
		{
			var oDTP = this;
		
			dCurrentDate = $.cf._isValid(dCurrentDate) ? dCurrentDate : oDTP.oData.dCurrentDate;
			bIs12Hour = bIs12Hour || oDTP.oData.bIs12Hour;
		
			var oDTV = oDTP._setVariablesForDate(dCurrentDate, true, true);
		
			var sOutput = "",
			oFDate = oDTP._formatDate(oDTV),
			oFTime = oDTP._formatTime(oDTV),
			oFDT = $.extend({}, oFDate, oFTime),
		
			sDateStr = "", sTimeStr = "",
			iArgsLength = Function.length,
			bAddSeconds;

			if(oDTP.settings.formatDateTimeString)
			{
				sOutput = oDTP.settings.formatDateTimeString.call(oDTP, oFDT, sMode, sFormat, oElement);
			}
			else
			{
				// Set bDate, bTime, bDateTime & bArrMatchFormat based on arguments of this function 
				oDTP._setMatchFormat(iArgsLength, sMode, sFormat);

				if(oDTP.oData.bDateMode)
				{
					if(oDTP.oData.bArrMatchFormat[0])
					{
						sOutput = oFDT.dd + oDTP.settings.dateSeparator + oFDT.MM + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[1])
					{
						sOutput = oFDT.MM + oDTP.settings.dateSeparator + oFDT.dd + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[2])
					{
						sOutput = oFDT.yyyy + oDTP.settings.dateSeparator + oFDT.MM + oDTP.settings.dateSeparator + oFDT.dd;
					}
					else if(oDTP.oData.bArrMatchFormat[3])
					{
						sOutput = oFDT.dd + oDTP.settings.dateSeparator + oFDT.monthShort + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[4])
					{
						sOutput = oFDT.MM + oDTP.settings.monthYearSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[5])
					{
						sOutput = oFDT.monthShort + oDTP.settings.monthYearSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[6])
					{
						sOutput = oFDT.month + oDTP.settings.monthYearSeparator + oFDT.yyyy;
					}
					else if(oDTP.oData.bArrMatchFormat[7])
					{
						sOutput = oFDT.yyyy + oDTP.settings.monthYearSeparator + oFDT.MM;
					}
				}
				else if(oDTP.oData.bTimeMode)
				{
					if(oDTP.oData.bArrMatchFormat[0])
					{
						sOutput = oFDT.hh + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeSeparator + oFDT.ss + oDTP.settings.timeMeridiemSeparator + oFDT.ME;
					}
					else if(oDTP.oData.bArrMatchFormat[1])
					{
						sOutput = oFDT.HH + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeSeparator + oFDT.ss;
					}
					else if(oDTP.oData.bArrMatchFormat[2])
					{
						sOutput = oFDT.hh + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeMeridiemSeparator + oFDT.ME;
					}
					else if(oDTP.oData.bArrMatchFormat[3])
					{
						sOutput = oFDT.HH + oDTP.settings.timeSeparator + oFDT.mm;
					}
				}
				else if(oDTP.oData.bDateTimeMode) 
				{
					// Date Part - "dd-MM-yyyy"
					if(oDTP.oData.bArrMatchFormat[0] || 
						oDTP.oData.bArrMatchFormat[1] ||
						oDTP.oData.bArrMatchFormat[8] || 
						oDTP.oData.bArrMatchFormat[9])
					{
						sDateStr = oFDT.dd + oDTP.settings.dateSeparator + oFDT.MM + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
					// Date Part - "MM-dd-yyyy"
					else if(oDTP.oData.bArrMatchFormat[2] || 
							oDTP.oData.bArrMatchFormat[3] ||
							oDTP.oData.bArrMatchFormat[10] || 
							oDTP.oData.bArrMatchFormat[11])
					{
						sDateStr = oFDT.MM + oDTP.settings.dateSeparator + oFDT.dd + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
					// Date Part - "yyyy-MM-dd"
					else if(oDTP.oData.bArrMatchFormat[4] || 
							oDTP.oData.bArrMatchFormat[5] ||
							oDTP.oData.bArrMatchFormat[12] || 
							oDTP.oData.bArrMatchFormat[13])
					{
						sDateStr = oFDT.yyyy + oDTP.settings.dateSeparator + oFDT.MM + oDTP.settings.dateSeparator + oFDT.dd;
					}
					// Date Part - "dd-MMM-yyyy"
					else if(oDTP.oData.bArrMatchFormat[6] || 
							oDTP.oData.bArrMatchFormat[7] ||
							oDTP.oData.bArrMatchFormat[14] || 
							oDTP.oData.bArrMatchFormat[15])
					{
						sDateStr = oFDT.dd + oDTP.settings.dateSeparator + oFDT.monthShort + oDTP.settings.dateSeparator + oFDT.yyyy;
					}
				
					bAddSeconds = oDTP.oData.bArrMatchFormat[0] || 
							oDTP.oData.bArrMatchFormat[1] ||
							oDTP.oData.bArrMatchFormat[2] || 
							oDTP.oData.bArrMatchFormat[3] ||
							oDTP.oData.bArrMatchFormat[4] || 
							oDTP.oData.bArrMatchFormat[5] ||
							oDTP.oData.bArrMatchFormat[6] || 
							oDTP.oData.bArrMatchFormat[7];
					if(bIs12Hour)
					{
						if(bAddSeconds)
						{
							sTimeStr = oFDT.hh + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeSeparator + oFDT.ss + oDTP.settings.timeMeridiemSeparator + oFDT.ME;
						}
						else
						{
							sTimeStr = oFDT.hh + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeMeridiemSeparator + oFDT.ME;
						}
					}
					else
					{
						if(bAddSeconds)
						{
							sTimeStr = oFDT.HH + oDTP.settings.timeSeparator + oFDT.mm + oDTP.settings.timeSeparator + oFDT.ss;
						}
						else
						{
							sTimeStr = oFDT.HH + oDTP.settings.timeSeparator + oFDT.mm;
						}
					}
				
					if(sDateStr !== "" && sTimeStr !== "")
						sOutput = sDateStr + oDTP.settings.dateTimeSeparator + sTimeStr;
				}
			
				// Reset bDate, bTime, bDateTime & bArrMatchFormat to original values
				oDTP._setMatchFormat(iArgsLength);
			}

			return sOutput;
		},
	
		_clearButtonAction: function()
		{
			var oDTP = this;
		
			if(oDTP.oData.oInputElement !== null)
			{
				oDTP._setValueOfElement("");
			}
			if(!oDTP.settings.isInline)
				oDTP._hidePicker("");
		},
	
		_setOutputOnIncrementOrDecrement: function()
		{
			var oDTP = this;
		
			if($.cf._isValid(oDTP.oData.oInputElement) && oDTP.settings.setValueInTextboxOnEveryClick)
			{
				oDTP._setValueOfElement(oDTP._setOutput());
			}
		},
	
		_showPicker: function(oElement)
		{
			var oDTP = this;

			if(oDTP.oData.oInputElement === null)
			{
				oDTP.oData.oInputElement = oElement;
				oDTP.oData.iTabIndex = parseInt($(oElement).attr("tabIndex"));
			
				var sMode = $(oElement).data("field") || "",
				sMinValue = $(oElement).data("min") || "",
				sMaxValue = $(oElement).data("max") || "",
				sFormat = $(oElement).data("format") || "",
				sView = $(oElement).data("view") || "",
				sStartEnd = $(oElement).data("startend") || "",
				sStartEndElem = $(oElement).data("startendelem") || "",
				sCurrent = oDTP._getValueOfElement(oElement) || "";
			
				if(sView !== "")
				{
					if($.cf._compare(sView, "Popup"))
						oDTP.setIsPopup(true);
					else 
						oDTP.setIsPopup(false);
				}
			
				if(!oDTP.settings.isPopup && !oDTP.settings.isInline)
				{
					oDTP._createPicker();
				
					var iElemTop = $(oDTP.oData.oInputElement).offset().top + $(oDTP.oData.oInputElement).outerHeight(),
					iElemLeft = $(oDTP.oData.oInputElement).offset().left,
					iElemWidth =  $(oDTP.oData.oInputElement).outerWidth();
				
					$(oDTP.element).css({position: "absolute", top: iElemTop, left: iElemLeft, width: iElemWidth, height: "auto"});
				}

				if(oDTP.settings.beforeShow)
					oDTP.settings.beforeShow.call(oDTP, oElement);
			
				sMode = $.cf._isValid(sMode) ? sMode : oDTP.settings.mode;
				oDTP.settings.mode = sMode;
				if(!$.cf._isValid(sFormat))
				{
					if($.cf._compare(sMode, "date"))
						sFormat = oDTP.settings.dateFormat;
					else if($.cf._compare(sMode, "time"))
						sFormat = oDTP.settings.timeFormat;
					else if($.cf._compare(sMode, "datetime"))
						sFormat = oDTP.settings.dateTimeFormat;
				}

				oDTP._matchFormat(sMode, sFormat);
			
				oDTP.oData.dMinValue = null;
				oDTP.oData.dMaxValue = null;
				oDTP.oData.bIs12Hour = false;

				var sMin, sMax,
				sTempDate, dTempDate,
				sTempTime, dTempTime,
				sTempDateTime, dTempDateTime;
			
				if(oDTP.oData.bDateMode)
				{
					sMin = sMinValue || oDTP.settings.minDate;
					sMax = sMaxValue || oDTP.settings.maxDate;
				
					oDTP.oData.sDateFormat = sFormat;
				
					if($.cf._isValid(sMin))
						oDTP.oData.dMinValue = oDTP._parseDate(sMin);
					if($.cf._isValid(sMax))
						oDTP.oData.dMaxValue = oDTP._parseDate(sMax);
				
					if(sStartEnd !== "" && ($.cf._compare(sStartEnd, "start") || $.cf._compare(sStartEnd, "end")) && sStartEndElem !== "")
					{
						if($(sStartEndElem).length >= 1)
						{
							sTempDate = oDTP._getValueOfElement($(sStartEndElem));
							if(sTempDate !== "")
							{
								if(oDTP.settings.parseDateTimeString)
									dTempDate = oDTP.settings.parseDateTimeString.call(oDTP, sTempDate, sMode, sFormat, $(sStartEndElem));
								else
									dTempDate = oDTP._parseDate(sTempDate);

								if($.cf._compare(sStartEnd, "start"))
								{
									if($.cf._isValid(sMax))
									{
										if(oDTP._compareDates(dTempDate, oDTP.oData.dMaxValue) < 0)
											oDTP.oData.dMaxValue = new Date(dTempDate);
									}
									else
										oDTP.oData.dMaxValue = new Date(dTempDate);
								}
								else if($.cf._compare(sStartEnd, "end"))
								{
									if($.cf._isValid(sMin))
									{
										if(oDTP._compareDates(dTempDate, oDTP.oData.dMinValue) > 0)
											oDTP.oData.dMinValue = new Date(dTempDate);
									}
									else
										oDTP.oData.dMinValue = new Date(dTempDate);
								}
							}
						}
					}
				
					if(oDTP.settings.parseDateTimeString)
						oDTP.oData.dCurrentDate = oDTP.settings.parseDateTimeString.call(oDTP, sCurrent, sMode, sFormat, $(oElement));
					else
						oDTP.oData.dCurrentDate = oDTP._parseDate(sCurrent);

					oDTP.oData.dCurrentDate.setHours(0);
					oDTP.oData.dCurrentDate.setMinutes(0);
					oDTP.oData.dCurrentDate.setSeconds(0);
				}
				else if(oDTP.oData.bTimeMode)
				{
					sMin = sMinValue || oDTP.settings.minTime;
					sMax = sMaxValue || oDTP.settings.maxTime;
				
					oDTP.oData.sTimeFormat = sFormat;
					oDTP.oData.bIs12Hour = oDTP.getIs12Hour();
				
					if($.cf._isValid(sMin))
					{
						oDTP.oData.dMinValue = oDTP._parseTime(sMin);

						if(!$.cf._isValid(sMax))
						{
							if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[0])
								sMax = "11:59:59 PM";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[1])
								sMax = "23:59:59";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[2])
								sMax = "11:59 PM";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[3])
								sMax = "23:59";

							oDTP.oData.dMaxValue = oDTP._parseTime(sMax);
						}
					}
					if($.cf._isValid(sMax))
					{
						oDTP.oData.dMaxValue = oDTP._parseTime(sMax);

						if(!$.cf._isValid(sMin))
						{
							if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[0])
								sMin = "12:00:00 AM";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[1])
								sMin = "00:00:00";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[2])
								sMin = "12:00 AM";
							else if(oDTP.oData.sTimeFormat === oDTP.oData.sArrInputTimeFormats[3])
								sMin = "00:00";

							oDTP.oData.dMinValue = oDTP._parseTime(sMin);
						}
					}

					if(sStartEnd !== "" && ($.cf._compare(sStartEnd, "start") || $.cf._compare(sStartEnd, "end")) && sStartEndElem !== "")
					{
						if($(sStartEndElem).length >= 1)
						{
							sTempTime = oDTP._getValueOfElement($(sStartEndElem));
							if(sTempTime !== "")
							{
								if(oDTP.settings.parseDateTimeString)
									dTempDate = oDTP.settings.parseDateTimeString.call(oDTP, sTempTime, sMode, sFormat, $(sStartEndElem));
								else
									dTempTime = oDTP._parseTime(sTempTime);

								if($.cf._compare(sStartEnd, "start"))
								{
									dTempTime.setMinutes(dTempTime.getMinutes() - 1);
									if($.cf._isValid(sMax))
									{
										if(oDTP._compareTime(dTempTime, oDTP.oData.dMaxValue) === 2)
											oDTP.oData.dMaxValue = new Date(dTempTime);
									}
									else
										oDTP.oData.dMaxValue = new Date(dTempTime);
								}
								else if($.cf._compare(sStartEnd, "end"))
								{
									dTempTime.setMinutes(dTempTime.getMinutes() + 1);
									if($.cf._isValid(sMin))
									{
										if(oDTP._compareTime(dTempTime, oDTP.oData.dMinValue) === 3)
											oDTP.oData.dMinValue = new Date(dTempTime);
									}
									else
										oDTP.oData.dMinValue = new Date(dTempTime);
								}
							}
						}
					}
				
					if(oDTP.settings.parseDateTimeString)
						oDTP.oData.dCurrentDate = oDTP.settings.parseDateTimeString.call(oDTP, sCurrent, sMode, sFormat, $(oElement));
					else
						oDTP.oData.dCurrentDate = oDTP._parseTime(sCurrent);
				}
				else if(oDTP.oData.bDateTimeMode)
				{
					sMin = sMinValue || oDTP.settings.minDateTime;
					sMax = sMaxValue || oDTP.settings.maxDateTime;
				
					oDTP.oData.sDateTimeFormat = sFormat;
					oDTP.oData.bIs12Hour = oDTP.getIs12Hour();
				
					if($.cf._isValid(sMin))
						oDTP.oData.dMinValue = oDTP._parseDateTime(sMin);
					if($.cf._isValid(sMax))
						oDTP.oData.dMaxValue = oDTP._parseDateTime(sMax);
								
					if(sStartEnd !== "" && ($.cf._compare(sStartEnd, "start") || $.cf._compare(sStartEnd, "end")) && sStartEndElem !== "")
					{
						if($(sStartEndElem).length >= 1)
						{
							sTempDateTime = oDTP._getValueOfElement($(sStartEndElem));
							if(sTempDateTime !== "")
							{
								if(oDTP.settings.parseDateTimeString)
									dTempDateTime = oDTP.settings.parseDateTimeString.call(oDTP, sTempDateTime, sMode, sFormat, $(sStartEndElem));
								else
									dTempDateTime = oDTP._parseDateTime(sTempDateTime);
								
								if($.cf._compare(sStartEnd, "start"))
								{
									if($.cf._isValid(sMax))
									{
										if(oDTP._compareDateTime(dTempDateTime, oDTP.oData.dMaxValue) < 0)
											oDTP.oData.dMaxValue = new Date(dTempDateTime);
									}
									else
										oDTP.oData.dMaxValue = new Date(dTempDateTime);
								}
								else if($.cf._compare(sStartEnd, "end"))
								{
									if($.cf._isValid(sMin))
									{
										if(oDTP._compareDateTime(dTempDateTime, oDTP.oData.dMinValue) > 0)
											oDTP.oData.dMinValue = new Date(dTempDateTime);
									}
									else
										oDTP.oData.dMinValue = new Date(dTempDateTime);
								}
							}
						}
					}
				
					if(oDTP.settings.parseDateTimeString)
						oDTP.oData.dCurrentDate = oDTP.settings.parseDateTimeString.call(oDTP, sCurrent, sMode, sFormat, $(oElement));
					else
						oDTP.oData.dCurrentDate = oDTP._parseDateTime(sCurrent);
				}
			
				oDTP._setVariablesForDate();
				oDTP._modifyPicker();
				$(oDTP.element).fadeIn(oDTP.settings.animationDuration);

				if(oDTP.settings.afterShow)
				{
					setTimeout(function()
					{
						oDTP.settings.afterShow.call(oDTP, oElement);
					}, oDTP.settings.animationDuration);	
				}
			}
		},
	
		_hidePicker: function(iDuration, oElementToShow)
		{
			var oDTP = this;
			
			var oElement = oDTP.oData.oInputElement;
			
			if(oDTP.settings.beforeHide)
				oDTP.settings.beforeHide.call(oDTP, oElement);

			if(!$.cf._isValid(iDuration))
				iDuration = oDTP.settings.animationDuration;
		
			if($.cf._isValid(oDTP.oData.oInputElement))
			{
				$(oDTP.oData.oInputElement).blur();
				oDTP.oData.oInputElement = null;
			}
		
			$(oDTP.element).fadeOut(iDuration);
			if(iDuration === 0)
			{
				$(oDTP.element).find(".dtpicker-subcontent").html("");
			}
			else
			{
				setTimeout(function()
				{
					$(oDTP.element).find(".dtpicker-subcontent").html("");
				}, iDuration);
			}

			$(document).unbind("click.DateTimePicker keydown.DateTimePicker keyup.DateTimePicker");

			if(oDTP.settings.afterHide)
			{
				if(iDuration === 0)
				{
					oDTP.settings.afterHide.call(oDTP, oElement);
				}
				else
				{
					setTimeout(function()
					{
						oDTP.settings.afterHide.call(oDTP, oElement);
					}, iDuration);
				}
			}

			if($.cf._isValid(oElementToShow))
				oDTP._showPicker(oElementToShow);
		},
	
		_modifyPicker: function()
		{
			var oDTP = this;

			var sTitleContent, iNumberOfColumns;
			var sArrFields = [];
			if(oDTP.oData.bDateMode)
			{
				sTitleContent = oDTP.settings.titleContentDate;
				iNumberOfColumns = 3;
			
				if(oDTP.oData.bArrMatchFormat[0])  // "dd-MM-yyyy"
				{
					sArrFields = ["day", "month", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[1])  // "MM-dd-yyyy"
				{
					sArrFields = ["month", "day", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[2])  // "yyyy-MM-dd"
				{
					sArrFields = ["year", "month", "day"];
				}
				else if(oDTP.oData.bArrMatchFormat[3])  // "dd-MMM-yyyy"
				{
					sArrFields = ["day", "month", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[4])  // "MM-yyyy"
				{
					iNumberOfColumns = 2;
					sArrFields = ["month", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[5])  // "MMM yyyy"
				{
					iNumberOfColumns = 2;
					sArrFields = ["month", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[6])  // "MMMM yyyy"
				{
					iNumberOfColumns = 2;
					sArrFields = ["month", "year"];
				}
				else if(oDTP.oData.bArrMatchFormat[7])  // "yyyy-MM"
				{
					iNumberOfColumns = 2;
					sArrFields = ["year", "month"];
				}
			}
			else if(oDTP.oData.bTimeMode)
			{
				sTitleContent = oDTP.settings.titleContentTime;
				if(oDTP.oData.bArrMatchFormat[0]) // hh:mm:ss AA
				{
					iNumberOfColumns = 4;
					sArrFields = ["hour", "minutes", "seconds", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[1]) // HH:mm:ss
				{
					iNumberOfColumns = 3;
					sArrFields = ["hour", "minutes", "seconds"];
				}
				else if(oDTP.oData.bArrMatchFormat[2]) // hh:mm AA
				{
					iNumberOfColumns = 3;
					sArrFields = ["hour", "minutes", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[3]) // HH:mm
				{
					iNumberOfColumns = 2;
					sArrFields = ["hour", "minutes"];
				}
			}
			else if(oDTP.oData.bDateTimeMode)
			{
				sTitleContent = oDTP.settings.titleContentDateTime;
			
				if(oDTP.oData.bArrMatchFormat[0])
				{
					iNumberOfColumns = 6;
					sArrFields = ["day", "month", "year", "hour", "minutes", "seconds"];
				}
				else if(oDTP.oData.bArrMatchFormat[1])
				{
					iNumberOfColumns = 7;
					sArrFields = ["day", "month", "year", "hour", "minutes", "seconds", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[2])
				{
					iNumberOfColumns = 6;
					sArrFields = ["month", "day", "year", "hour", "minutes", "seconds"];
				}
				else if(oDTP.oData.bArrMatchFormat[3])
				{
					iNumberOfColumns = 7;
					sArrFields = ["month", "day", "year", "hour", "minutes", "seconds", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[4])
				{
					iNumberOfColumns = 6;
					sArrFields = ["year", "month", "day", "hour", "minutes", "seconds"];
				}
				else if(oDTP.oData.bArrMatchFormat[5])
				{
					iNumberOfColumns = 7;
					sArrFields = ["year", "month", "day", "hour", "minutes", "seconds", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[6])
				{
					iNumberOfColumns = 6;
					sArrFields = ["day", "month", "year", "hour", "minutes", "seconds"];
				}
				else if(oDTP.oData.bArrMatchFormat[7])
				{
					iNumberOfColumns = 7;
					sArrFields = ["day", "month", "year", "hour", "minutes", "seconds", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[8])
				{
					iNumberOfColumns = 5;
					sArrFields = ["day", "month", "year", "hour", "minutes"];
				}
				else if(oDTP.oData.bArrMatchFormat[9])
				{
					iNumberOfColumns = 6;
					sArrFields = ["day", "month", "year", "hour", "minutes", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[10])
				{
					iNumberOfColumns = 5;
					sArrFields = ["month", "day", "year", "hour", "minutes"];
				}
				else if(oDTP.oData.bArrMatchFormat[11])
				{
					iNumberOfColumns = 6;
					sArrFields = ["month", "day", "year", "hour", "minutes", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[12])
				{
					iNumberOfColumns = 5;
					sArrFields = ["year", "month", "day", "hour", "minutes"];
				}
				else if(oDTP.oData.bArrMatchFormat[13])
				{
					iNumberOfColumns = 6;
					sArrFields = ["year", "month", "day", "hour", "minutes", "meridiem"];
				}
				else if(oDTP.oData.bArrMatchFormat[14])
				{
					iNumberOfColumns = 5;
					sArrFields = ["day", "month", "year", "hour", "minutes"];
				}
				else if(oDTP.oData.bArrMatchFormat[15])
				{
					iNumberOfColumns = 6;
					sArrFields = ["day", "month", "year", "hour", "minutes", "meridiem"];
				}
			}
			
		
			//--------------------------------------------------------------------
			var sColumnClass = "dtpicker-comp" + iNumberOfColumns,
			bDisplayHeaderCloseButton = false,
			bDisplaySetButton = false,
			bDisplayClearButton = false,
			iTempIndex;
			
			for(iTempIndex = 0; iTempIndex < oDTP.settings.buttonsToDisplay.length; iTempIndex++)
			{
				if($.cf._compare(oDTP.settings.buttonsToDisplay[iTempIndex], "HeaderCloseButton"))
					bDisplayHeaderCloseButton = true;
				else if($.cf._compare(oDTP.settings.buttonsToDisplay[iTempIndex], "SetButton"))
					bDisplaySetButton = true;
				else if($.cf._compare(oDTP.settings.buttonsToDisplay[iTempIndex], "ClearButton"))
					bDisplayClearButton = true;
			}
		
			var sHeader = "";
			if(oDTP.settings.showHeader)
			{
				sHeader += "<div class='dtpicker-header'>";
				sHeader += "<div class='dtpicker-title'>" + sTitleContent + "</div>";
				if(bDisplayHeaderCloseButton)
					sHeader += "<a class='dtpicker-close'>&times;</a>";
				sHeader += "<div class='dtpicker-value'></div>";
				sHeader += "</div>";
			}
		
			//--------------------------------------------------------------------
		
			var sDTPickerComp = "";
			sDTPickerComp += "<div class='dtpicker-components'>";

			for(iTempIndex = 0; iTempIndex < iNumberOfColumns; iTempIndex++)
			{
				var sFieldName = sArrFields[iTempIndex];

				sDTPickerComp += "<div class='dtpicker-compOutline " + sColumnClass + "'>";
				sDTPickerComp += "<div class='dtpicker-comp " + sFieldName + "'>";
				sDTPickerComp += "<a class='dtpicker-compButton increment'>" + oDTP.settings.incrementButtonContent + "</a>";
				if(oDTP.settings.readonlyInputs)
					sDTPickerComp += "<input type='text' class='dtpicker-compValue' readonly>";
				else
					sDTPickerComp += "<input type='text' class='dtpicker-compValue'>";
				sDTPickerComp += "<a class='dtpicker-compButton decrement'>" + oDTP.settings.decrementButtonContent + "</a>";
				if(oDTP.settings.labels)
					sDTPickerComp += "<div class='dtpicker-label'>" + oDTP.settings.labels[sFieldName] + "</div>";
				sDTPickerComp += "</div>";
				sDTPickerComp += "</div>";
			}
		
			sDTPickerComp += "</div>";
		
			//--------------------------------------------------------------------
		
			var sButtonContClass = "";
			if(bDisplaySetButton && bDisplayClearButton)
				sButtonContClass = " dtpicker-twoButtons";
			else
				sButtonContClass = " dtpicker-singleButton";
		
			var sDTPickerButtons = "";
			sDTPickerButtons += "<div class='dtpicker-buttonCont" + sButtonContClass + "'>";
			if(bDisplaySetButton)
				sDTPickerButtons += "<a class='dtpicker-button dtpicker-buttonSet'>" + oDTP.settings.setButtonContent + "</a>";
			if(bDisplayClearButton)
				sDTPickerButtons += "<a class='dtpicker-button dtpicker-buttonClear'>" + oDTP.settings.clearButtonContent + "</a>";
			sDTPickerButtons += "</div>";
		
			//--------------------------------------------------------------------
		
			var sTempStr = sHeader + sDTPickerComp + sDTPickerButtons;
		
			$(oDTP.element).find(".dtpicker-subcontent").html(sTempStr);
		
			oDTP._setCurrentDate();
			oDTP._addEventHandlersForPicker();
		},
	
		_addEventHandlersForPicker: function()
		{
			var oDTP = this;
			var classType, keyCode, $nextElem;
		
			if(!oDTP.settings.isInline)
			{
				$(document).on("click.DateTimePicker", function(e)
				{
					oDTP._hidePicker("");
				});
			}
		
			$(document).on("keydown.DateTimePicker", function(e)
			{
				keyCode = parseInt(e.keyCode ? e.keyCode : e.which);
				if(! $(".dtpicker-compValue").is(":focus") && keyCode === 9) // TAB
				{
					oDTP._setButtonAction(true);
					$("[tabIndex=" + (oDTP.oData.iTabIndex + 1) + "]").focus();
					return false;
				}
				else if($(".dtpicker-compValue").is(":focus"))
				{
					/*if(keyCode === 37) // Left Arrow
					{
						oDTP._setButtonAction(true);
						$nextElem = $(".dtpicker-compValue:focus").parent().prev().children(".dtpicker-compValue");
						$nextElem.focus();
						console.log('Left Arrow ');
						console.log($nextElem);
						return false;
					}
					else if(keyCode === 39) // Right Arrow
					{
						oDTP._setButtonAction(true);
						var compVal = $(".dtpicker-compValue:focus");
						$nextElem = $(".dtpicker-compValue:focus").parent(".dtpicker-comp").next().children(".dtpicker-compValue");
						$nextElem.focus();
						console.log('Right Arrow ');
						console.log($nextElem);
						return false;
					}
					else*/
					if(keyCode === 38) // Up Arrow
					{
						classType = $(".dtpicker-compValue:focus").parent().attr("class");
						oDTP._incrementDecrementActionsUsingArrowAndMouse(classType, "inc");
						return false;
					}
					else if(keyCode === 40) // Down Arrow
					{
						classType = $(".dtpicker-compValue:focus").parent().attr("class");
						oDTP._incrementDecrementActionsUsingArrowAndMouse(classType, "dec");
						return false;
					}
				}
			});

			if(!oDTP.settings.isInline)
			{
				$(document).on("keydown.DateTimePicker", function(e)
				{
					keyCode = parseInt(e.keyCode ? e.keyCode : e.which);
					// console.log("keydown " + keyCode);
					if(! $(".dtpicker-compValue").is(":focus") && keyCode !== 9)
					{
						//if(keyCode !== 37 && keyCode !== 39)
							oDTP._hidePicker("");
					}
				});
			}

			$(".dtpicker-cont *").click(function(e)
			{
				e.stopPropagation();
			});
		
			if(!oDTP.settings.readonlyInputs)
			{
				$(".dtpicker-compValue").not(".month .dtpicker-compValue, .meridiem .dtpicker-compValue").keyup(function() 
				{ 
					this.value = this.value.replace(/[^0-9\.]/g,"");
				});

				$(".dtpicker-compValue").focus(function()
				{
					oDTP.oData.bElemFocused = true;
					$(this).select();
				});
			
				$(".dtpicker-compValue").blur(function()
				{
					oDTP._getValuesFromInputBoxes();
					oDTP._setCurrentDate();
				
					oDTP.oData.bElemFocused = false;
					var $oParentElem = $(this).parent().parent();
					setTimeout(function()
					{
						if($oParentElem.is(":last-child") && !oDTP.oData.bElemFocused)
						{
							oDTP._setButtonAction(false);
						}
					}, 50);			
				});
			
				$(".dtpicker-compValue").keyup(function(e)
				{
					var $oTextField = $(this),
				
					sTextBoxVal = $oTextField.val(),
					iLength = sTextBoxVal.length,
					sNewTextBoxVal;
				
					if($oTextField.parent().hasClass("day") || $oTextField.parent().hasClass("hour") || $oTextField.parent().hasClass("minutes") || $oTextField.parent().hasClass("meridiem"))
					{
						if(iLength > 2)
						{
							sNewTextBoxVal = sTextBoxVal.slice(0, 2);
							$oTextField.val(sNewTextBoxVal);
						}
					}
					else if($oTextField.parent().hasClass("month"))
					{
						if(iLength > 3)
						{
							sNewTextBoxVal = sTextBoxVal.slice(0, 3);
							$oTextField.val(sNewTextBoxVal);
						}
					}
					else if($oTextField.parent().hasClass("year"))
					{
						if(iLength > 4)
						{
							sNewTextBoxVal = sTextBoxVal.slice(0, 4);
							$oTextField.val(sNewTextBoxVal);
						}
					}
					
					if(parseInt(e.keyCode ? e.keyCode : e.which) === 9)
						$(this).select();
				});
			}

			$(oDTP.element).find(".dtpicker-compValue").on("mousewheel DOMMouseScroll onmousewheel", function(e)
			{
				if($(".dtpicker-compValue").is(":focus"))
				{
					var delta = Math.max(-1, Math.min(1, e.originalEvent.wheelDelta));

					if(delta > 0)
					{
						classType = $(".dtpicker-compValue:focus").parent().attr("class");
						oDTP._incrementDecrementActionsUsingArrowAndMouse(classType, "inc");
					}
					else
					{
						classType = $(".dtpicker-compValue:focus").parent().attr("class");
						oDTP._incrementDecrementActionsUsingArrowAndMouse(classType, "dec");
					}
					return false;
				}
			});

			//-----------------------------------------------------------------------
		
			$(oDTP.element).find(".dtpicker-close").click(function(e)
			{
				if(oDTP.settings.buttonClicked)
					oDTP.settings.buttonClicked.call(oDTP, "CLOSE", oDTP.oData.oInputElement);
				if(!oDTP.settings.isInline)
					oDTP._hidePicker("");
			});
		
			$(oDTP.element).find(".dtpicker-buttonSet").click(function(e)
			{
				if(oDTP.settings.buttonClicked)
					oDTP.settings.buttonClicked.call(oDTP, "SET", oDTP.oData.oInputElement);
				oDTP._setButtonAction(false);
			});
		
			$(oDTP.element).find(".dtpicker-buttonClear").click(function(e)
			{
				if(oDTP.settings.buttonClicked)
					oDTP.settings.buttonClicked.call(oDTP, "CLEAR", oDTP.oData.oInputElement);
				oDTP._clearButtonAction();
			});
		
			// ----------------------------------------------------------------------------
		
			//console.log((oDTP.settings.captureTouchHold || oDTP.settings.captureMouseHold));
			if(oDTP.settings.captureTouchHold || oDTP.settings.captureMouseHold)
			{
				var sHoldEvents = "";
				if(oDTP.settings.captureTouchHold && oDTP.oData.bIsTouchDevice)
					sHoldEvents += "touchstart touchmove touchend ";
				if(oDTP.settings.captureMouseHold)
					sHoldEvents += "mousedown mouseup";
 
				$(".dtpicker-cont *").on(sHoldEvents, function(e)
				{
					oDTP._clearIntervalForTouchEvents();
				});

				oDTP._bindTouchEvents("day");
				oDTP._bindTouchEvents("month");
				oDTP._bindTouchEvents("year");
				oDTP._bindTouchEvents("hour");
				oDTP._bindTouchEvents("minutes");
				oDTP._bindTouchEvents("seconds");
			}
			else
			{
				$(oDTP.element).find(".day .increment, .day .increment *").click(function(e)
				{
					oDTP.oData.iCurrentDay++;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".day .decrement, .day .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentDay--;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".month .increment, .month .increment *").click(function(e)
				{
					oDTP.oData.iCurrentMonth++;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".month .decrement, .month .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentMonth--;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".year .increment, .year .increment *").click(function(e)
				{
					oDTP.oData.iCurrentYear++;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".year .decrement, .year .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentYear--;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".hour .increment, .hour .increment *").click(function(e)
				{
					oDTP.oData.iCurrentHour++;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".hour .decrement, .hour .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentHour--;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".minutes .increment, .minutes .increment *").click(function(e)
				{
					oDTP.oData.iCurrentMinutes += oDTP.settings.minuteInterval;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".minutes .decrement, .minutes .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentMinutes -= oDTP.settings.minuteInterval;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});

				$(oDTP.element).find(".seconds .increment, .seconds .increment *").click(function(e)
				{
					oDTP.oData.iCurrentSeconds += oDTP.settings.secondsInterval;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			
				$(oDTP.element).find(".seconds .decrement, .seconds .decrement *").click(function(e)
				{
					oDTP.oData.iCurrentSeconds -= oDTP.settings.secondsInterval;
					oDTP._setCurrentDate();
					oDTP._setOutputOnIncrementOrDecrement();
				});
			}
		
			$(oDTP.element).find(".meridiem .dtpicker-compButton, .meridiem .dtpicker-compButton *").click(function(e)
			{
				if($.cf._compare(oDTP.oData.sCurrentMeridiem, "AM"))
				{
					oDTP.oData.sCurrentMeridiem = "PM";
					oDTP.oData.iCurrentHour += 12;
				}
				else if($.cf._compare(oDTP.oData.sCurrentMeridiem, "PM"))
				{
					oDTP.oData.sCurrentMeridiem = "AM";
					oDTP.oData.iCurrentHour -= 12;
				}
				oDTP._setCurrentDate();
				oDTP._setOutputOnIncrementOrDecrement();
			});
		},

		_adjustMinutes: function(iMinutes) 
		{
			var oDTP = this;
			if(oDTP.settings.roundOffMinutes && oDTP.settings.minuteInterval !== 1)
			{
				iMinutes = (iMinutes % oDTP.settings.minuteInterval) ? (iMinutes - (iMinutes % oDTP.settings.minuteInterval) + oDTP.settings.minuteInterval) : iMinutes;
			}
			return iMinutes;
		},

		_adjustSeconds: function(iSeconds) 
		{
			var oDTP = this;
			if(oDTP.settings.roundOffSeconds && oDTP.settings.secondsInterval !== 1)
			{
				iSeconds = (iSeconds % oDTP.settings.secondsInterval) ? (iSeconds - (iSeconds % oDTP.settings.secondsInterval) + oDTP.settings.secondsInterval) : iSeconds;
			}
			return iSeconds;
		},
	
		_getValueOfElement: function(oElem)
		{
			var oDTP = this;
			var sElemValue = "";
		
			if($.cf._compare($(oElem).prop("tagName"), "INPUT"))
				sElemValue = $(oElem).val();
			else
				sElemValue = $(oElem).html();
		
			return sElemValue;
		},
	
		_setValueOfElement: function(sElemValue, $oElem)
		{
			var oDTP = this;
		
			if(!$.cf._isValid($oElem))
				$oElem = $(oDTP.oData.oInputElement);
		
			if($.cf._compare($oElem.prop("tagName"), "INPUT"))
				$oElem.val(sElemValue);
			else
				$oElem.html(sElemValue);

			var dElemValue = oDTP.getDateObjectForInputField($oElem);

			if(oDTP.settings.settingValueOfElement)
				oDTP.settings.settingValueOfElement.call(oDTP, sElemValue, dElemValue, $oElem);
		
			$oElem.change();		
		
			return sElemValue;
		},

		_bindTouchEvents: function(type)
		{
			var oDTP = this;

			$(oDTP.element).find("." + type + " .increment, ." + type + " .increment *").on("touchstart mousedown", function(e)
			{
				e.stopPropagation();
				if(!$.cf._isValid(oDTP.oData.sTouchButton))
				{
					oDTP.oData.iTouchStart = (new Date()).getTime();
					oDTP.oData.sTouchButton = type + "-inc";

					oDTP._setIntervalForTouchEvents();
				}
			});

			$(oDTP.element).find("." + type + " .increment, ." + type + " .increment *").on("touchend mouseup", function(e)
			{
				e.stopPropagation();
				oDTP._clearIntervalForTouchEvents();
			});

			$(oDTP.element).find("." + type + " .decrement, ." + type + " .decrement *").on("touchstart mousedown", function(e)
			{
				e.stopPropagation();
				if(!$.cf._isValid(oDTP.oData.sTouchButton))
				{
					oDTP.oData.iTouchStart = (new Date()).getTime();
					oDTP.oData.sTouchButton = type + "-dec";

					oDTP._setIntervalForTouchEvents();
				}
			});

			$(oDTP.element).find("." + type + " .decrement, ." + type + " .decrement *").on("touchend mouseup", function(e)
			{
				e.stopPropagation();
				oDTP._clearIntervalForTouchEvents();
			});
		},

		_setIntervalForTouchEvents: function()
		{
			var oDTP = this;

			var iInterval = oDTP.oData.bIsTouchDevice ? oDTP.settings.touchHoldInterval : oDTP.settings.mouseHoldInterval;
			if(!$.cf._isValid(oDTP.oData.oTimeInterval))
			{
				var iDiff;

				oDTP.oData.oTimeInterval = setInterval(function()
				{
					iDiff = ((new Date()).getTime() - oDTP.oData.iTouchStart);
					if(iDiff > iInterval && $.cf._isValid(oDTP.oData.sTouchButton))
					{
						if(oDTP.oData.sTouchButton === "day-inc")
						{
							oDTP.oData.iCurrentDay++;
						}
						else if(oDTP.oData.sTouchButton === "day-dec")
						{
							oDTP.oData.iCurrentDay--;
						}
						else if(oDTP.oData.sTouchButton === "month-inc")
						{
							oDTP.oData.iCurrentMonth++;
						}
						else if(oDTP.oData.sTouchButton === "month-dec")
						{
							oDTP.oData.iCurrentMonth--;
						}
						else if(oDTP.oData.sTouchButton === "year-inc")
						{
							oDTP.oData.iCurrentYear++;
						}
						else if(oDTP.oData.sTouchButton === "year-dec")
						{
							oDTP.oData.iCurrentYear--;
						}
						else if(oDTP.oData.sTouchButton === "hour-inc")
						{
							oDTP.oData.iCurrentHour++;
						}
						else if(oDTP.oData.sTouchButton === "hour-dec")
						{
							oDTP.oData.iCurrentHour--;
						}
						else if(oDTP.oData.sTouchButton === "minute-inc")
						{
							oDTP.oData.iCurrentMinutes += oDTP.settings.minuteInterval;
						}
						else if(oDTP.oData.sTouchButton === "minute-dec")
						{
							oDTP.oData.iCurrentMinutes -= oDTP.settings.minuteInterval;
						}
						else if(oDTP.oData.sTouchButton === "second-inc")
						{
							oDTP.oData.iCurrentSeconds += oDTP.settings.secondsInterval;
						}
						else if(oDTP.oData.sTouchButton === "second-dec")
						{
							oDTP.oData.iCurrentSeconds -= oDTP.settings.secondsInterval;
						}

						oDTP._setCurrentDate();
						oDTP._setOutputOnIncrementOrDecrement();

						oDTP.oData.iTouchStart = (new Date()).getTime();
					}
				}, iInterval);
			}
		},

		_clearIntervalForTouchEvents: function()
		{
			var oDTP = this;

			clearInterval(oDTP.oData.oTimeInterval);
			if($.cf._isValid(oDTP.oData.sTouchButton))
			{
				oDTP.oData.sTouchButton = null;
				oDTP.oData.iTouchStart = 0;
			}
			oDTP.oData.oTimeInterval = null;
		},

		_incrementDecrementActionsUsingArrowAndMouse: function(type, action)
		{
			var oDTP = this;

			if(type.includes("day"))
			{
				if (action === "inc") oDTP.oData.iCurrentDay++;
				else if (action === "dec") oDTP.oData.iCurrentDay--;
			}
			else if(type.includes("month"))
			{
				if (action === "inc") oDTP.oData.iCurrentMonth++;
				else if (action === "dec") oDTP.oData.iCurrentMonth--;
			}
			else if(type.includes("year"))
			{
				if (action === "inc") oDTP.oData.iCurrentYear++;
				else if (action === "dec") oDTP.oData.iCurrentYear--;
			}
			else if(type.includes("hour"))
			{
				if (action === "inc") oDTP.oData.iCurrentHour++;
				else if (action === "dec") oDTP.oData.iCurrentHour--;
			}
			else if(type.includes("minutes"))
			{
				if (action === "inc") oDTP.oData.iCurrentMinutes += oDTP.settings.minuteInterval;
				else if (action === "dec") oDTP.oData.iCurrentMinutes -= oDTP.settings.minuteInterval;
			}
			else if(type.includes("seconds"))
			{
				if (action === "inc") oDTP.oData.iCurrentSeconds += oDTP.settings.secondsInterval;
				else if (action === "dec") oDTP.oData.iCurrentSeconds -= oDTP.settings.secondsInterval;
			}

			oDTP._setCurrentDate();
			oDTP._setOutputOnIncrementOrDecrement();
		},
	
		//-----------------------------------------------------------------
	
		_parseDate: function(sDate)
		{
			var oDTP = this;

			var dTempDate = (oDTP.settings.defaultDate ? new Date(oDTP.settings.defaultDate) : new Date()),
			iDate = dTempDate.getDate(),
			iMonth = dTempDate.getMonth(),
			iYear = dTempDate.getFullYear();
		
			if($.cf._isValid(sDate))
			{
				if(typeof sDate === "string")
				{
					var sArrDate;
					if(oDTP.oData.bArrMatchFormat[4] || oDTP.oData.bArrMatchFormat[5] || oDTP.oData.bArrMatchFormat[6])
						sArrDate = sDate.split(oDTP.settings.monthYearSeparator);
					else
						sArrDate = sDate.split(oDTP.settings.dateSeparator);
				
					if(oDTP.oData.bArrMatchFormat[0])  // "dd-MM-yyyy"
					{
						iDate = parseInt(sArrDate[0]);
						iMonth = parseInt(sArrDate[1] - 1);
						iYear = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[1])  // "MM-dd-yyyy"
					{
						iMonth = parseInt(sArrDate[0] - 1);
						iDate = parseInt(sArrDate[1]);
						iYear = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[2])  // "yyyy-MM-dd"
					{
						iYear = parseInt(sArrDate[0]);
						iMonth = parseInt(sArrDate[1] - 1);
						iDate = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[3])  // "dd-MMM-yyyy"
					{
						iDate = parseInt(sArrDate[0]);
						iMonth = oDTP._getShortMonthIndex(sArrDate[1]);
						iYear = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[4])  // "MM-yyyy"
					{
						iDate = 1;
						iMonth = parseInt(sArrDate[0]) - 1;
						iYear = parseInt(sArrDate[1]);
					}
					else if(oDTP.oData.bArrMatchFormat[5])  // "MMM yyyy"
					{
						iDate = 1;
						iMonth = oDTP._getShortMonthIndex(sArrDate[0]);
						iYear = parseInt(sArrDate[1]);
					}
					else if(oDTP.oData.bArrMatchFormat[6])  // "MMMM yyyy"
					{
						iDate = 1;
						iMonth = oDTP._getFullMonthIndex(sArrDate[0]);
						iYear = parseInt(sArrDate[1]);
					}
					else if(oDTP.oData.bArrMatchFormat[7])  // "yyyy MM"
					{
						iDate = 1;
						iMonth = parseInt(sArrDate[1]) - 1;
						iYear = parseInt(sArrDate[0]);
					}
				}
				else
				{
					iDate = sDate.getDate();
					iMonth = sDate.getMonth();
					iYear = sDate.getFullYear();
				}
			}

			dTempDate = new Date(iYear, iMonth, iDate, 0, 0, 0, 0);
			return dTempDate;
		},
	
		_parseTime: function(sTime)
		{
			var oDTP = this;
		
			var dTempDate = (oDTP.settings.defaultDate ? new Date(oDTP.settings.defaultDate) : new Date()),
			iDate = dTempDate.getDate(),
			iMonth = dTempDate.getMonth(),
			iYear = dTempDate.getFullYear(),
			iHour = dTempDate.getHours(),
			iMinutes = dTempDate.getMinutes(),
			iSeconds = dTempDate.getSeconds(),
			sArrTime, sMeridiem, sArrTimeComp,
			bShowSeconds = oDTP.oData.bArrMatchFormat[0] ||
							oDTP.oData.bArrMatchFormat[1];

			iSeconds = bShowSeconds ? oDTP._adjustSeconds(iSeconds) : 0;
		
			if($.cf._isValid(sTime))
			{
				if(typeof sTime === "string")
				{
					if(oDTP.oData.bIs12Hour)
					{
						sArrTime = sTime.split(oDTP.settings.timeMeridiemSeparator);
						sTime = sArrTime[0];
						sMeridiem = sArrTime[1];

						if(!($.cf._compare(sMeridiem, "AM") || $.cf._compare(sMeridiem, "PM")))
							sMeridiem = "";
					}

					sArrTimeComp = sTime.split(oDTP.settings.timeSeparator);
					iHour = parseInt(sArrTimeComp[0]);
					iMinutes = parseInt(sArrTimeComp[1]);

					if(bShowSeconds)
					{
						iSeconds = parseInt(sArrTimeComp[2]);
						iSeconds = oDTP._adjustSeconds(iSeconds);
					}

					if(iHour === 12 && $.cf._compare(sMeridiem, "AM"))
						iHour = 0;
					else if(iHour < 12 && $.cf._compare(sMeridiem, "PM"))
						iHour += 12;
				}
				else
				{
					iHour = sTime.getHours();
					iMinutes = sTime.getMinutes();

					if(bShowSeconds)
					{
						iSeconds = sTime.getSeconds();
						iSeconds = oDTP._adjustSeconds(iSeconds);
					}
				}
			}
			iMinutes = oDTP._adjustMinutes(iMinutes);
		
			dTempDate = new Date(iYear, iMonth, iDate, iHour, iMinutes, iSeconds, 0);
		
			return dTempDate;
		},
	
		_parseDateTime: function(sDateTime)
		{
			var oDTP = this;
		
			var dTempDate = (oDTP.settings.defaultDate ? new Date(oDTP.settings.defaultDate) : new Date()),
			iDate = dTempDate.getDate(),
			iMonth = dTempDate.getMonth(),
			iYear = dTempDate.getFullYear(),
			iHour = dTempDate.getHours(),
			iMinutes = dTempDate.getMinutes(),
			iSeconds = dTempDate.getSeconds(),
			sMeridiem = "",
			sArrDateTime, sArrDate, sTime, sArrTimeComp, sArrTime,
			bShowSeconds = oDTP.oData.bArrMatchFormat[0] || // "dd-MM-yyyy HH:mm:ss"
							oDTP.oData.bArrMatchFormat[1] || // ""dd-MM-yyyy hh:mm:ss AA"
							oDTP.oData.bArrMatchFormat[2] || // "MM-dd-yyyy HH:mm:ss"
							oDTP.oData.bArrMatchFormat[3] || // "MM-dd-yyyy hh:mm:ss AA"
							oDTP.oData.bArrMatchFormat[4] || // "yyyy-MM-dd HH:mm:ss"
							oDTP.oData.bArrMatchFormat[5] || // "yyyy-MM-dd hh:mm:ss AA"
							oDTP.oData.bArrMatchFormat[6] || // "dd-MMM-yyyy HH:mm:ss"
							oDTP.oData.bArrMatchFormat[7]; // "dd-MMM-yyyy hh:mm:ss AA"

			iSeconds = bShowSeconds ? oDTP._adjustSeconds(iSeconds) : 0;
		
			if($.cf._isValid(sDateTime))
			{
				if(typeof sDateTime === "string")
				{
					sArrDateTime = sDateTime.split(oDTP.settings.dateTimeSeparator);
					sArrDate = sArrDateTime[0].split(oDTP.settings.dateSeparator);
				
					if(oDTP.oData.bArrMatchFormat[0] || // "dd-MM-yyyy HH:mm:ss"
						oDTP.oData.bArrMatchFormat[1] || // ""dd-MM-yyyy hh:mm:ss AA"
						oDTP.oData.bArrMatchFormat[8] || // "dd-MM-yyyy HH:mm"
						oDTP.oData.bArrMatchFormat[9]) // "dd-MM-yyyy hh:mm AA"
					{
						iDate = parseInt(sArrDate[0]);
						iMonth = parseInt(sArrDate[1] - 1);
						iYear = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[2] ||  // "MM-dd-yyyy HH:mm:ss"
						oDTP.oData.bArrMatchFormat[3] || // "MM-dd-yyyy hh:mm:ss AA"
						oDTP.oData.bArrMatchFormat[10] ||  // "MM-dd-yyyy HH:mm"
						oDTP.oData.bArrMatchFormat[11]) // "MM-dd-yyyy hh:mm AA"
					{
						iMonth = parseInt(sArrDate[0] - 1);
						iDate = parseInt(sArrDate[1]);
						iYear = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[4] ||  // "yyyy-MM-dd HH:mm:ss"
						oDTP.oData.bArrMatchFormat[5] || // "yyyy-MM-dd hh:mm:ss AA"
						oDTP.oData.bArrMatchFormat[12] ||  // "yyyy-MM-dd HH:mm"
						oDTP.oData.bArrMatchFormat[13]) // "yyyy-MM-dd hh:mm AA"
					{
						iYear = parseInt(sArrDate[0]);
						iMonth = parseInt(sArrDate[1] - 1);
						iDate = parseInt(sArrDate[2]);
					}
					else if(oDTP.oData.bArrMatchFormat[6] || // "dd-MMM-yyyy HH:mm:ss"
						oDTP.oData.bArrMatchFormat[7] || // "dd-MMM-yyyy hh:mm:ss AA"
						oDTP.oData.bArrMatchFormat[14] || // "dd-MMM-yyyy HH:mm:ss"
						oDTP.oData.bArrMatchFormat[15]) // "dd-MMM-yyyy hh:mm:ss AA"
					{
						iDate = parseInt(sArrDate[0]);
						iMonth = oDTP._getShortMonthIndex(sArrDate[1]);
						iYear = parseInt(sArrDate[2]);
					}
				
					sTime = sArrDateTime[1];
					if($.cf._isValid(sTime))
					{
						if(oDTP.oData.bIs12Hour)
						{
							if($.cf._compare(oDTP.settings.dateTimeSeparator, oDTP.settings.timeMeridiemSeparator) && (sArrDateTime.length === 3))
								sMeridiem = sArrDateTime[2];
							else
							{
								sArrTimeComp = sTime.split(oDTP.settings.timeMeridiemSeparator);
								sTime = sArrTimeComp[0];
								sMeridiem = sArrTimeComp[1];
							}
						
							if(!($.cf._compare(sMeridiem, "AM") || $.cf._compare(sMeridiem, "PM")))
								sMeridiem = "";
						}
						
						sArrTime = sTime.split(oDTP.settings.timeSeparator);

						iHour = parseInt(sArrTime[0]);
						iMinutes = parseInt(sArrTime[1]);
						if(bShowSeconds)
						{
							iSeconds = parseInt(sArrTime[2]);
						}

						if(iHour === 12 && $.cf._compare(sMeridiem, "AM"))
							iHour = 0;
						else if(iHour < 12 && $.cf._compare(sMeridiem, "PM"))
							iHour += 12;
					}
				}
				else
				{
					iDate = sDateTime.getDate();
					iMonth = sDateTime.getMonth();
					iYear = sDateTime.getFullYear();

					iHour = sDateTime.getHours();
					iMinutes = sDateTime.getMinutes();

					if(bShowSeconds)
					{
						iSeconds = sDateTime.getSeconds();
						iSeconds = oDTP._adjustSeconds(iSeconds);
					}
				}
			}
			iMinutes = oDTP._adjustMinutes(iMinutes);
    	
			dTempDate = new Date(iYear, iMonth, iDate, iHour, iMinutes, iSeconds, 0);
			return dTempDate;
		},
	
		_getShortMonthIndex: function(sMonthName)
		{
			var oDTP = this;

			for(var iTempIndex = 0; iTempIndex < oDTP.settings.shortMonthNames.length; iTempIndex++)
			{
				if($.cf._compare(sMonthName, oDTP.settings.shortMonthNames[iTempIndex]))
					return iTempIndex;
			}
		},

		_getFullMonthIndex: function(sMonthName)
		{
			var oDTP = this;

			for(var iTempIndex = 0; iTempIndex < oDTP.settings.fullMonthNames.length; iTempIndex++)
			{
				if($.cf._compare(sMonthName, oDTP.settings.fullMonthNames[iTempIndex]))
					return iTempIndex;
			}
		},

		// Public Method
		getIs12Hour: function(sMode, sFormat)
		{
			var oDTP = this;

			var bIs12Hour = false, 
			iArgsLength = Function.length;

			oDTP._setMatchFormat(iArgsLength, sMode, sFormat);

			if(oDTP.oData.bTimeMode)
	        {
	        	bIs12Hour = oDTP.oData.bArrMatchFormat[0] || 
	        				oDTP.oData.bArrMatchFormat[2];
	        }
	        else if(oDTP.oData.bDateTimeMode)
	        {
	        	bIs12Hour = oDTP.oData.bArrMatchFormat[1] ||
							oDTP.oData.bArrMatchFormat[3] ||
							oDTP.oData.bArrMatchFormat[5] ||
							oDTP.oData.bArrMatchFormat[7] ||
							oDTP.oData.bArrMatchFormat[9] ||
							oDTP.oData.bArrMatchFormat[11] ||
							oDTP.oData.bArrMatchFormat[13] ||
							oDTP.oData.bArrMatchFormat[15];
			}

			oDTP._setMatchFormat(iArgsLength);

			return bIs12Hour;
		},
	
		//-----------------------------------------------------------------
	
		_setVariablesForDate: function(dInput, bIncludeTime, bSetMeridiem)
		{
			var oDTP = this;
		
			var dTemp, oDTV = {},
			bValidInput = $.cf._isValid(dInput);
			if(bValidInput)
			{
				dTemp = new Date(dInput);
				if(!$.cf._isValid(bIncludeTime))
					bIncludeTime = true;
				if(!$.cf._isValid(bSetMeridiem))
					bSetMeridiem = true;
			}
			else
			{
				if (Object.prototype.toString.call(oDTP.oData.dCurrentDate) === "[object Date]" && isFinite(oDTP.oData.dCurrentDate))
    		  			dTemp = new Date(oDTP.oData.dCurrentDate);
  				else 
    					dTemp = new Date();
    					
				if(!$.cf._isValid(bIncludeTime))
					bIncludeTime = (oDTP.oData.bTimeMode || oDTP.oData.bDateTimeMode);
				if(!$.cf._isValid(bSetMeridiem))
					bSetMeridiem = oDTP.oData.bIs12Hour;
			}

			oDTV.iCurrentDay = dTemp.getDate();
			oDTV.iCurrentMonth = dTemp.getMonth();
			oDTV.iCurrentYear = dTemp.getFullYear();
			oDTV.iCurrentWeekday = dTemp.getDay();
		
			if(bIncludeTime)
			{
				oDTV.iCurrentHour = dTemp.getHours();
				oDTV.iCurrentMinutes = dTemp.getMinutes();
				oDTV.iCurrentSeconds = dTemp.getSeconds();
			
				if(bSetMeridiem)
				{
					oDTV.sCurrentMeridiem = oDTP._determineMeridiemFromHourAndMinutes(oDTV.iCurrentHour, oDTV.iCurrentMinutes);
				}
			}

			if(bValidInput)
				return oDTV;
			else
				oDTP.oData = $.extend(oDTP.oData, oDTV);
		},
	
		_getValuesFromInputBoxes: function()
		{
			var oDTP = this;
		
			if(oDTP.oData.bDateMode || oDTP.oData.bDateTimeMode)
			{
				var sMonth, iMonth;

				sMonth = $(oDTP.element).find(".month .dtpicker-compValue").val();
				if(sMonth.length > 1)
					sMonth = sMonth.charAt(0).toUpperCase() + sMonth.slice(1);
				iMonth = oDTP.settings.shortMonthNames.indexOf(sMonth);
				if(iMonth !== -1)
				{
					oDTP.oData.iCurrentMonth = parseInt(iMonth);
				}
				else
				{
					if(sMonth.match("^[+|-]?[0-9]+$"))
					{
						oDTP.oData.iCurrentMonth = parseInt(sMonth - 1);
					}
				}
			
				oDTP.oData.iCurrentDay = parseInt($(oDTP.element).find(".day .dtpicker-compValue").val()) || oDTP.oData.iCurrentDay;					
				oDTP.oData.iCurrentYear = parseInt($(oDTP.element).find(".year .dtpicker-compValue").val()) || oDTP.oData.iCurrentYear;
			}
		
			if(oDTP.oData.bTimeMode || oDTP.oData.bDateTimeMode)
			{
				var iTempHour, iTempMinutes, iTempSeconds, sMeridiem;

				iTempHour = parseInt($(oDTP.element).find(".hour .dtpicker-compValue").val());
				iTempMinutes = oDTP._adjustMinutes(parseInt($(oDTP.element).find(".minutes .dtpicker-compValue").val()));
				iTempSeconds = oDTP._adjustMinutes(parseInt($(oDTP.element).find(".seconds .dtpicker-compValue").val()));

				oDTP.oData.iCurrentHour = isNaN(iTempHour) ? oDTP.oData.iCurrentHour : iTempHour;
				oDTP.oData.iCurrentMinutes = isNaN(iTempMinutes) ? oDTP.oData.iCurrentMinutes : iTempMinutes;
				oDTP.oData.iCurrentSeconds = isNaN(iTempSeconds) ? oDTP.oData.iCurrentSeconds : iTempSeconds;
			
				if(oDTP.oData.iCurrentSeconds > 59)
				{
					oDTP.oData.iCurrentMinutes += oDTP.oData.iCurrentSeconds / 60;
					oDTP.oData.iCurrentSeconds = oDTP.oData.iCurrentSeconds % 60;
				}
				if(oDTP.oData.iCurrentMinutes > 59)
				{
					oDTP.oData.iCurrentHour += oDTP.oData.iCurrentMinutes / 60;
					oDTP.oData.iCurrentMinutes = oDTP.oData.iCurrentMinutes % 60;
				}

				if(oDTP.oData.bIs12Hour)
				{
					if(oDTP.oData.iCurrentHour > 12)
						oDTP.oData.iCurrentHour = (oDTP.oData.iCurrentHour % 12);
				}
				else
				{
					if(oDTP.oData.iCurrentHour > 23)
						oDTP.oData.iCurrentHour = (oDTP.oData.iCurrentHour % 23);
				}
			
				if(oDTP.oData.bIs12Hour)
				{
					sMeridiem = $(oDTP.element).find(".meridiem .dtpicker-compValue").val();
					if($.cf._compare(sMeridiem, "AM") || $.cf._compare(sMeridiem, "PM"))
						oDTP.oData.sCurrentMeridiem = sMeridiem;
				
					if($.cf._compare(oDTP.oData.sCurrentMeridiem, "PM"))
					{
						if(oDTP.oData.iCurrentHour !== 12 && oDTP.oData.iCurrentHour < 13)
							oDTP.oData.iCurrentHour += 12;
					}
					if($.cf._compare(oDTP.oData.sCurrentMeridiem, "AM") && oDTP.oData.iCurrentHour === 12)
						oDTP.oData.iCurrentHour = 0;
				}
			}
		},

		_setCurrentDate: function()
		{
			var oDTP = this;
		
			if(oDTP.oData.bTimeMode || oDTP.oData.bDateTimeMode)
			{
				if(oDTP.oData.iCurrentSeconds > 59)
				{
					oDTP.oData.iCurrentMinutes += oDTP.oData.iCurrentSeconds / 60;
					oDTP.oData.iCurrentSeconds = oDTP.oData.iCurrentSeconds % 60;
				}
				else if(oDTP.oData.iCurrentSeconds < 0)
				{
					oDTP.oData.iCurrentMinutes -= oDTP.settings.minuteInterval;
					oDTP.oData.iCurrentSeconds += 60;
				}
				oDTP.oData.iCurrentMinutes = oDTP._adjustMinutes(oDTP.oData.iCurrentMinutes);
				oDTP.oData.iCurrentSeconds = oDTP._adjustSeconds(oDTP.oData.iCurrentSeconds);
			}
		
			var dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0),
			bGTMaxDate = false, bLTMinDate = false,
			sFormat, oDate, oFormattedDate, oFormattedTime,
			sDate, sTime, sDateTime;
		
			if(oDTP.oData.dMaxValue !== null)
				bGTMaxDate = (dTempDate.getTime() > oDTP.oData.dMaxValue.getTime());
			if(oDTP.oData.dMinValue !== null)
				bLTMinDate = (dTempDate.getTime() < oDTP.oData.dMinValue.getTime());
		
			if(bGTMaxDate || bLTMinDate)
			{
				var bCDGTMaxDate = false, bCDLTMinDate = false; 
				if(oDTP.oData.dMaxValue !== null)
					bCDGTMaxDate = (oDTP.oData.dCurrentDate.getTime() > oDTP.oData.dMaxValue.getTime());
				if(oDTP.oData.dMinValue !== null)
					bCDLTMinDate = (oDTP.oData.dCurrentDate.getTime() < oDTP.oData.dMinValue.getTime());
			
				if(!(bCDGTMaxDate || bCDLTMinDate))
					dTempDate = new Date(oDTP.oData.dCurrentDate);
				else
				{
					if(bCDGTMaxDate)
					{
						dTempDate = new Date(oDTP.oData.dMaxValue);
						console.log("Info : Date/Time/DateTime you entered is later than Maximum value, so DateTimePicker is showing Maximum value in Input Field.");
					}
					if(bCDLTMinDate)
					{
						dTempDate = new Date(oDTP.oData.dMinValue);
						console.log("Info : Date/Time/DateTime you entered is earlier than Minimum value, so DateTimePicker is showing Minimum value in Input Field.");
					}
					console.log("Please enter proper Date/Time/DateTime values.");
				}
			}
		
			oDTP.oData.dCurrentDate = new Date(dTempDate);
			oDTP._setVariablesForDate();
		
			oDate = {}; sDate = ""; sTime = ""; sDateTime = "";

			if(oDTP.oData.bDateMode || oDTP.oData.bDateTimeMode)
			{
				if(oDTP.oData.bDateMode && (oDTP.oData.bArrMatchFormat[4] || oDTP.oData.bArrMatchFormat[5] || oDTP.oData.bArrMatchFormat[6]))
					oDTP.oData.iCurrentDay = 1;
			
				oFormattedDate = oDTP._formatDate();

				$(oDTP.element).find(".day .dtpicker-compValue").val(oFormattedDate.dd);
			
				if(oDTP.oData.bDateMode)
				{
					if(oDTP.oData.bArrMatchFormat[4] || oDTP.oData.bArrMatchFormat[7])  // "MM-yyyy"
						$(oDTP.element).find(".month .dtpicker-compValue").val(oFormattedDate.MM);
					else if(oDTP.oData.bArrMatchFormat[6])  // "MMMM yyyy"
						$(oDTP.element).find(".month .dtpicker-compValue").val(oFormattedDate.month);
					else
						$(oDTP.element).find(".month .dtpicker-compValue").val(oFormattedDate.monthShort);
				}
				else
					$(oDTP.element).find(".month .dtpicker-compValue").val(oFormattedDate.monthShort);
			
				$(oDTP.element).find(".year .dtpicker-compValue").val(oFormattedDate.yyyy);
			
				if(oDTP.settings.formatHumanDate)
				{
					oDate = $.extend(oDate, oFormattedDate);
				}
				else
				{
					if(oDTP.oData.bDateMode && (oDTP.oData.bArrMatchFormat[4] || oDTP.oData.bArrMatchFormat[5] || oDTP.oData.bArrMatchFormat[6] || oDTP.oData.bArrMatchFormat[7]))
					{
						if(oDTP.oData.bArrMatchFormat[4])
							sDate = oFormattedDate.MM + oDTP.settings.monthYearSeparator + oFormattedDate.yyyy;
						else if(oDTP.oData.bArrMatchFormat[5])
							sDate = oFormattedDate.monthShort + oDTP.settings.monthYearSeparator + oFormattedDate.yyyy;
						else if(oDTP.oData.bArrMatchFormat[6])
							sDate = oFormattedDate.month + oDTP.settings.monthYearSeparator + oFormattedDate.yyyy;
						else if(oDTP.oData.bArrMatchFormat[7])
							sDate = oFormattedDate.yyyy + oDTP.settings.monthYearSeparator + oFormattedDate.MM;
					}
					else
						sDate = oFormattedDate.dayShort + ", " + oFormattedDate.month + " " + oFormattedDate.dd + ", " + oFormattedDate.yyyy;
				}
			}
			if(oDTP.oData.bTimeMode || oDTP.oData.bDateTimeMode)
			{
				oFormattedTime = oDTP._formatTime();
			
				if(oDTP.oData.bIs12Hour)
					$(oDTP.element).find(".meridiem .dtpicker-compValue").val(oDTP.oData.sCurrentMeridiem);
				$(oDTP.element).find(".hour .dtpicker-compValue").val(oFormattedTime.hour);
				$(oDTP.element).find(".minutes .dtpicker-compValue").val(oFormattedTime.mm);
				$(oDTP.element).find(".seconds .dtpicker-compValue").val(oFormattedTime.ss);
			
				if(oDTP.settings.formatHumanDate)
				{
					oDate = $.extend(oDate, oFormattedTime);
				}
				else
				{
					var bShowSecondsTime = (oDTP.oData.bTimeMode && (
						oDTP.oData.bArrMatchFormat[0] ||
						oDTP.oData.bArrMatchFormat[1])),

					bShowSecondsDateTime = (oDTP.oData.bDateTimeMode && 
							(oDTP.oData.bArrMatchFormat[0] || 
							oDTP.oData.bArrMatchFormat[1] ||
							oDTP.oData.bArrMatchFormat[2] || 
							oDTP.oData.bArrMatchFormat[3] ||
							oDTP.oData.bArrMatchFormat[4] || 
							oDTP.oData.bArrMatchFormat[5] ||
							oDTP.oData.bArrMatchFormat[6] || 
							oDTP.oData.bArrMatchFormat[7]));

					if(bShowSecondsTime || bShowSecondsDateTime)
						sTime = oFormattedTime.hour + oDTP.settings.timeSeparator + oFormattedTime.mm + oDTP.settings.timeSeparator + oFormattedTime.ss;
					else
						sTime = oFormattedTime.hour + oDTP.settings.timeSeparator + oFormattedTime.mm;

					if(oDTP.oData.bIs12Hour)
						sTime += oDTP.settings.timeMeridiemSeparator + oDTP.oData.sCurrentMeridiem;
				}
			}
		
			if(oDTP.settings.formatHumanDate)
			{
				if(oDTP.oData.bDateTimeMode)
					sFormat = oDTP.oData.sDateFormat;
				else if(oDTP.oData.bDateMode)
					sFormat = oDTP.oData.sTimeFormat;
				else if(oDTP.oData.bTimeMode)
					sFormat = oDTP.oData.sDateTimeFormat;

				sDateTime = oDTP.settings.formatHumanDate.call(oDTP, oDate, oDTP.settings.mode, sFormat);
			}
			else		
			{
				if(oDTP.oData.bDateTimeMode)
					sDateTime = sDate + oDTP.settings.dateTimeSeparator + sTime;
				else if(oDTP.oData.bDateMode)
					sDateTime = sDate;
				else if(oDTP.oData.bTimeMode)
					sDateTime = sTime;
			}

			$(oDTP.element).find(".dtpicker-value").html(sDateTime);

			oDTP._setButtons();
		},

		_formatDate: function(oDTVP)
		{
			var oDTP = this;
			var oDTV = {},
			sDay, sYear, 
			iMonth, sMonth, sMonthShort, sMonthFull, 
			iDayOfTheWeek, sDayOfTheWeek, sDayOfTheWeekFull;

			if($.cf._isValid(oDTVP))
				oDTV = $.extend({}, oDTVP);
			else
			{
				oDTV.iCurrentDay = oDTP.oData.iCurrentDay;
				oDTV.iCurrentMonth = oDTP.oData.iCurrentMonth;
				oDTV.iCurrentYear = oDTP.oData.iCurrentYear;
				oDTV.iCurrentWeekday = oDTP.oData.iCurrentWeekday;
			}

			sDay = oDTV.iCurrentDay;
			sDay = (sDay < 10) ? ("0" + sDay) : sDay;
			iMonth = oDTV.iCurrentMonth;
			sMonth = oDTV.iCurrentMonth + 1;
			sMonth = (sMonth < 10) ? ("0" + sMonth) : sMonth;
			sMonthShort = oDTP.settings.shortMonthNames[iMonth];
			sMonthFull = oDTP.settings.fullMonthNames[iMonth];
			sYear = oDTV.iCurrentYear;
			iDayOfTheWeek = oDTV.iCurrentWeekday;
			sDayOfTheWeek = oDTP.settings.shortDayNames[iDayOfTheWeek];
			sDayOfTheWeekFull = oDTP.settings.fullDayNames[iDayOfTheWeek];
		
			return {
				"dd": sDay,
				"MM": sMonth,
				"monthShort": sMonthShort,
				"month": sMonthFull,
				"yyyy": sYear,
				"dayShort": sDayOfTheWeek,
				"day": sDayOfTheWeekFull
			};
		},

		_formatTime: function(oDTVP)
		{
			var oDTP = this;
			var oDTV = {},
			iHour24, sHour24, iHour12, sHour12, sHour,
			sMinutes, sSeconds;

			if($.cf._isValid(oDTVP))
				oDTV = $.extend({}, oDTVP);
			else
			{
				oDTV.iCurrentHour = oDTP.oData.iCurrentHour;
				oDTV.iCurrentMinutes = oDTP.oData.iCurrentMinutes;
				oDTV.iCurrentSeconds = oDTP.oData.iCurrentSeconds;
				oDTV.sCurrentMeridiem = oDTP.oData.sCurrentMeridiem;
			}

			iHour24 = oDTV.iCurrentHour;
			sHour24 = (iHour24 < 10) ? ("0" + iHour24) : iHour24;
			sHour = sHour24;

			iHour12 = oDTV.iCurrentHour;
			if(iHour12 > 12)
				iHour12 -= 12;
			if(sHour === "00")
				iHour12 = 12;
			sHour12 = (iHour12 < 10) ? ("0" + iHour12) : iHour12;
			if(oDTP.oData.bIs12Hour)
				sHour = sHour12;
		
			sMinutes = oDTV.iCurrentMinutes;
			sMinutes = (sMinutes < 10) ? ("0" + sMinutes) : sMinutes;
			sSeconds = oDTV.iCurrentSeconds;
			sSeconds = (sSeconds < 10) ? ("0" + sSeconds) : sSeconds;
		
			return {
				"H": iHour24,
				"HH": sHour24,
				"h": iHour12,
				"hh": sHour12,
				"hour": sHour,
				"m": oDTV.iCurrentMinutes,
				"mm": sMinutes,
				"s": oDTV.iCurrentSeconds,
				"ss": sSeconds,
				"ME": oDTV.sCurrentMeridiem
			};
		},
	
		_setButtons: function()
		{
			var oDTP = this;
			$(oDTP.element).find(".dtpicker-compButton").removeClass("dtpicker-compButtonDisable").addClass("dtpicker-compButtonEnable");
		
			var dTempDate;
			if(oDTP.oData.dMaxValue !== null)
			{
				if(oDTP.oData.bTimeMode)
				{
					// Decrement Hour
					if((oDTP.oData.iCurrentHour + 1) > oDTP.oData.dMaxValue.getHours() || ((oDTP.oData.iCurrentHour + 1) === oDTP.oData.dMaxValue.getHours() && oDTP.oData.iCurrentMinutes > oDTP.oData.dMaxValue.getMinutes()))
						$(oDTP.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Minutes
					if(oDTP.oData.iCurrentHour >= oDTP.oData.dMaxValue.getHours() && (oDTP.oData.iCurrentMinutes + 1) > oDTP.oData.dMaxValue.getMinutes())
						$(oDTP.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				}
				else
				{
					// Increment Day
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, (oDTP.oData.iCurrentDay + 1), oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".day .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Increment Month
					dTempDate = new Date(oDTP.oData.iCurrentYear, (oDTP.oData.iCurrentMonth + 1), oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".month .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Increment Year
					dTempDate = new Date((oDTP.oData.iCurrentYear + 1), oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".year .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Increment Hour
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, (oDTP.oData.iCurrentHour + 1), oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Increment Minutes
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, (oDTP.oData.iCurrentMinutes + 1), oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");

					// Increment Seconds
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, (oDTP.oData.iCurrentSeconds + 1), 0);
					if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
						$(oDTP.element).find(".seconds .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				}
			}
		
			if(oDTP.oData.dMinValue !== null)
			{
				if(oDTP.oData.bTimeMode)
				{
					// Decrement Hour
					if((oDTP.oData.iCurrentHour - 1) < oDTP.oData.dMinValue.getHours() || ((oDTP.oData.iCurrentHour - 1) === oDTP.oData.dMinValue.getHours() && oDTP.oData.iCurrentMinutes < oDTP.oData.dMinValue.getMinutes()))
						$(oDTP.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Minutes
					if(oDTP.oData.iCurrentHour <= oDTP.oData.dMinValue.getHours() && (oDTP.oData.iCurrentMinutes - 1) < oDTP.oData.dMinValue.getMinutes())
						$(oDTP.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				}
				else
				{
					// Decrement Day 
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, (oDTP.oData.iCurrentDay - 1), oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".day .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Month 
					dTempDate = new Date(oDTP.oData.iCurrentYear, (oDTP.oData.iCurrentMonth - 1), oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".month .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Year 
					dTempDate = new Date((oDTP.oData.iCurrentYear - 1), oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".year .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Hour
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, (oDTP.oData.iCurrentHour - 1), oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				
					// Decrement Minutes
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, (oDTP.oData.iCurrentMinutes - 1), oDTP.oData.iCurrentSeconds, 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");

					// Decrement Seconds
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, oDTP.oData.iCurrentHour, oDTP.oData.iCurrentMinutes, (oDTP.oData.iCurrentSeconds - 1), 0);
					if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
						$(oDTP.element).find(".seconds .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
				}
			}
			
			if(oDTP.oData.bIs12Hour)
			{
				var iTempHour, iTempMinutes;
				if(oDTP.oData.dMaxValue !== null || oDTP.oData.dMinValue !== null)
				{
					iTempHour = oDTP.oData.iCurrentHour;
					if($.cf._compare(oDTP.oData.sCurrentMeridiem, "AM"))
						iTempHour += 12;
					else if($.cf._compare(oDTP.oData.sCurrentMeridiem, "PM"))
						iTempHour -= 12;
				
					dTempDate = new Date(oDTP.oData.iCurrentYear, oDTP.oData.iCurrentMonth, oDTP.oData.iCurrentDay, iTempHour, oDTP.oData.iCurrentMinutes, oDTP.oData.iCurrentSeconds, 0);
				
					if(oDTP.oData.dMaxValue !== null)
					{
						if(oDTP.oData.bTimeMode)
						{
							iTempMinutes = oDTP.oData.iCurrentMinutes;
							if(iTempHour > oDTP.oData.dMaxValue.getHours() || (iTempHour === oDTP.oData.dMaxValue.getHours() && iTempMinutes > oDTP.oData.dMaxValue.getMinutes()))
								$(oDTP.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
						}
						else
						{
							if(dTempDate.getTime() > oDTP.oData.dMaxValue.getTime())
								$(oDTP.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
						}
					}
				
					if(oDTP.oData.dMinValue !== null)
					{
						if(oDTP.oData.bTimeMode)
						{
							iTempMinutes = oDTP.oData.iCurrentMinutes;
							if(iTempHour < oDTP.oData.dMinValue.getHours() || (iTempHour === oDTP.oData.dMinValue.getHours() && iTempMinutes < oDTP.oData.dMinValue.getMinutes()))
								$(oDTP.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
						}
						else
						{
							if(dTempDate.getTime() < oDTP.oData.dMinValue.getTime())
								$(oDTP.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
						}
					}
				}
			}
		},
	
		// Public Method
		setIsPopup: function(bIsPopup)
		{
			var oDTP = this;
		
			if(!oDTP.settings.isInline)
			{
				oDTP.settings.isPopup = bIsPopup;

				if($(oDTP.element).css("display") !== "none")
					oDTP._hidePicker(0);
			
				if(oDTP.settings.isPopup)
				{
					$(oDTP.element).addClass("dtpicker-mobile");
					
					$(oDTP.element).css({position: "fixed", top: 0, left: 0, width: "100%", height: "100%"});
				}
				else
				{
					$(oDTP.element).removeClass("dtpicker-mobile");
					
					if(oDTP.oData.oInputElement !== null)
					{
						var iElemTop = $(oDTP.oData.oInputElement).offset().top + $(oDTP.oData.oInputElement).outerHeight(),
						iElemLeft = $(oDTP.oData.oInputElement).offset().left,
						iElemWidth =  $(oDTP.oData.oInputElement).outerWidth();
					
						$(oDTP.element).css({position: "absolute", top: iElemTop, left: iElemLeft, width: iElemWidth, height: "auto"});
					}
				}
			}
		},
	
		_compareDates: function(dDate1, dDate2)
		{
			dDate1 = new Date(dDate1.getDate(), dDate1.getMonth(), dDate1.getFullYear(), 0, 0, 0, 0);
			var iDateDiff = (dDate1.getTime() - dDate2.getTime()) / 864E5;
			return (iDateDiff === 0) ? iDateDiff: (iDateDiff/Math.abs(iDateDiff));
		},
	
		_compareTime: function(dTime1, dTime2)
		{
			var iTimeMatch = 0;
			if((dTime1.getHours() === dTime2.getHours()) && (dTime1.getMinutes() === dTime2.getMinutes()))
				iTimeMatch = 1;  	// 1 = Exact Match
			else
			{
				if(dTime1.getHours() < dTime2.getHours())
					iTimeMatch = 2;	 // time1 < time2
				else if(dTime1.getHours() > dTime2.getHours())
					iTimeMatch = 3; 	// time1 > time2
				else if(dTime1.getHours() === dTime2.getHours())
				{
					if(dTime1.getMinutes() < dTime2.getMinutes())
						iTimeMatch = 2;	 // time1 < time2
					else if(dTime1.getMinutes() > dTime2.getMinutes())
						iTimeMatch = 3; 	// time1 > time2
				}
			}
			return iTimeMatch;
		},
	
		_compareDateTime: function(dDate1, dDate2)
		{
			var iDateTimeDiff = (dDate1.getTime() - dDate2.getTime()) / 6E4;
			return (iDateTimeDiff === 0) ? iDateTimeDiff: (iDateTimeDiff/Math.abs(iDateTimeDiff));
		},

		_determineMeridiemFromHourAndMinutes: function(iHour, iMinutes)
		{
			if(iHour > 12 || (iHour === 12 && iMinutes >= 0)) 
			{
				return "PM";
			}
			else 
			{
				return "AM";
			}
		},

		// Public Method
		setLanguage: function(sLanguage)
		{
			var oDTP = this;

			oDTP.settings = $.extend({}, $.DateTimePicker.defaults, $.DateTimePicker.i18n[sLanguage], oDTP.options);
			oDTP.settings.language = sLanguage;

			oDTP._setDateFormatArray(); // Set DateFormatArray
			oDTP._setTimeFormatArray(); // Set TimeFormatArray
			oDTP._setDateTimeFormatArray(); // Set DateTimeFormatArray
		
			return oDTP;
		}

	};
	
}));


/**
 * Created by mrashid on 12/15/2017.
 */

/**
 * goTo | This function is used to go to the specific url
 * @param url
 */
function goTo(url) {
    window.location.href = url;
}

//# sourceMappingURL=backend-app.js.map
