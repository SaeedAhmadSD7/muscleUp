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
