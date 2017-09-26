!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=ea.type(a);return"function"===c||ea.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(ea.isFunction(b))return ea.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return ea.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ma.test(b))return ea.filter(b,a,c);b=ea.filter(b,a)}return ea.grep(a,function(a){return ea.inArray(a,b)>=0!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function f(a){var b=ua[a]={};return ea.each(a.match(ta)||[],function(a,c){b[c]=!0}),b}function g(){oa.addEventListener?(oa.removeEventListener("DOMContentLoaded",h,!1),a.removeEventListener("load",h,!1)):(oa.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}function h(){(oa.addEventListener||"load"===event.type||"complete"===oa.readyState)&&(g(),ea.ready())}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(za,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:ya.test(c)?ea.parseJSON(c):c}catch(e){}ea.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!ea.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(ea.acceptData(a)){var e,f,g=ea.expando,h=a.nodeType,i=h?ea.cache:a,j=h?a[g]:a[g]&&g;if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=W.pop()||ea.guid++:g),i[j]||(i[j]=h?{}:{toJSON:ea.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[j]=ea.extend(i[j],b):i[j].data=ea.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[ea.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[ea.camelCase(b)])):e=f,e}}function l(a,b,c){if(ea.acceptData(a)){var d,e,f=a.nodeType,g=f?ea.cache:a,h=f?a[ea.expando]:ea.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){ea.isArray(b)?b=b.concat(ea.map(b,ea.camelCase)):b in d?b=[b]:(b=ea.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!j(d):!ea.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?ea.cleanData([a],!0):ca.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}function m(){return!0}function n(){return!1}function o(){try{return oa.activeElement}catch(a){}}function p(a){var b=Ka.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function q(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==xa?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==xa?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||ea.nodeName(d,b)?f.push(d):ea.merge(f,q(d,b));return void 0===b||b&&ea.nodeName(a,b)?ea.merge([a],f):f}function r(a){Ea.test(a.type)&&(a.defaultChecked=a.checked)}function s(a,b){return ea.nodeName(a,"table")&&ea.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function t(a){return a.type=(null!==ea.find.attr(a,"type"))+"/"+a.type,a}function u(a){var b=Va.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function v(a,b){for(var c,d=0;null!=(c=a[d]);d++)ea._data(c,"globalEval",!b||ea._data(b[d],"globalEval"))}function w(a,b){if(1===b.nodeType&&ea.hasData(a)){var c,d,e,f=ea._data(a),g=ea._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)ea.event.add(b,c,h[c][d])}g.data&&(g.data=ea.extend({},g.data))}}function x(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!ca.noCloneEvent&&b[ea.expando]){e=ea._data(b);for(d in e.events)ea.removeEvent(b,d,e.handle);b.removeAttribute(ea.expando)}"script"===c&&b.text!==a.text?(t(b).text=a.text,u(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),ca.html5Clone&&a.innerHTML&&!ea.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Ea.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function y(b,c){var d,e=ea(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:ea.css(e[0],"display");return e.detach(),f}function z(a){var b=oa,c=_a[a];return c||(c=y(a,b),"none"!==c&&c||($a=($a||ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=($a[0].contentWindow||$a[0].contentDocument).document,b.write(),b.close(),c=y(a,b),$a.detach()),_a[a]=c),c}function A(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}function B(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=mb.length;e--;)if(b=mb[e]+c,b in a)return b;return d}function C(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ea._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Ca(d)&&(f[g]=ea._data(d,"olddisplay",z(d.nodeName)))):(e=Ca(d),(c&&"none"!==c||!e)&&ea._data(d,"olddisplay",e?c:ea.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function D(a,b,c){var d=ib.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=ea.css(a,c+Ba[f],!0,e)),d?("content"===c&&(g-=ea.css(a,"padding"+Ba[f],!0,e)),"margin"!==c&&(g-=ea.css(a,"border"+Ba[f]+"Width",!0,e))):(g+=ea.css(a,"padding"+Ba[f],!0,e),"padding"!==c&&(g+=ea.css(a,"border"+Ba[f]+"Width",!0,e)));return g}function F(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ab(a),g=ca.boxSizing&&"border-box"===ea.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=bb(a,b,f),(0>e||null==e)&&(e=a.style[b]),db.test(e))return e;d=g&&(ca.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+E(a,b,c||(g?"border":"content"),d,f)+"px"}function G(a,b,c,d,e){return new G.prototype.init(a,b,c,d,e)}function H(){return setTimeout(function(){nb=void 0}),nb=ea.now()}function I(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=Ba[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function J(a,b,c){for(var d,e=(tb[b]||[]).concat(tb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function K(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ca(a),p=ea._data(a,"fxshow");c.queue||(h=ea._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,ea.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=ea.css(a,"display"),k="none"===j?ea._data(a,"olddisplay")||z(a.nodeName):j,"inline"===k&&"none"===ea.css(a,"float")&&(ca.inlineBlockNeedsLayout&&"inline"!==z(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",ca.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],pb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||ea.style(a,d)}else j=void 0;if(ea.isEmptyObject(m))"inline"===("none"===j?z(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=ea._data(a,"fxshow",{}),f&&(p.hidden=!o),o?ea(a).show():l.done(function(){ea(a).hide()}),l.done(function(){var b;ea._removeData(a,"fxshow");for(b in m)ea.style(a,b,m[b])});for(d in m)g=J(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function L(a,b){var c,d,e,f,g;for(c in a)if(d=ea.camelCase(c),e=b[d],f=a[c],ea.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=ea.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function M(a,b,c){var d,e,f=0,g=sb.length,h=ea.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=nb||H(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ea.extend({},b),opts:ea.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:nb||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ea.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(L(k,j.opts.specialEasing);g>f;f++)if(d=sb[f].call(j,a,k,j.opts))return d;return ea.map(k,J,j),ea.isFunction(j.opts.start)&&j.opts.start.call(a,j),ea.fx.timer(ea.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function N(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(ta)||[];if(ea.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function O(a,b,c,d){function e(h){var i;return f[h]=!0,ea.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Rb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function P(a,b){var c,d,e=ea.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&ea.extend(!0,a,c),a}function Q(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function R(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function S(a,b,c,d){var e;if(ea.isArray(b))ea.each(b,function(b,e){c||Vb.test(a)?d(a,e):S(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ea.type(b))d(a,b);else for(e in b)S(a+"["+e+"]",b[e],c,d)}function T(){try{return new a.XMLHttpRequest}catch(b){}}function U(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function V(a){return ea.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var W=[],X=W.slice,Y=W.concat,Z=W.push,$=W.indexOf,_={},aa=_.toString,ba=_.hasOwnProperty,ca={},da="1.11.1",ea=function(a,b){return new ea.fn.init(a,b)},fa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ga=/^-ms-/,ha=/-([\da-z])/gi,ia=function(a,b){return b.toUpperCase()};ea.fn=ea.prototype={jquery:da,constructor:ea,selector:"",length:0,toArray:function(){return X.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:X.call(this)},pushStack:function(a){var b=ea.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return ea.each(this,a,b)},map:function(a){return this.pushStack(ea.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:W.sort,splice:W.splice},ea.extend=ea.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||ea.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(ea.isPlainObject(c)||(b=ea.isArray(c)))?(b?(b=!1,f=a&&ea.isArray(a)?a:[]):f=a&&ea.isPlainObject(a)?a:{},g[d]=ea.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},ea.extend({expando:"jQuery"+(da+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===ea.type(a)},isArray:Array.isArray||function(a){return"array"===ea.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!ea.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==ea.type(a)||a.nodeType||ea.isWindow(a))return!1;try{if(a.constructor&&!ba.call(a,"constructor")&&!ba.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(ca.ownLast)for(b in a)return ba.call(a,b);for(b in a);return void 0===b||ba.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?_[aa.call(a)]||"object":typeof a},globalEval:function(b){b&&ea.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(ga,"ms-").replace(ha,ia)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(fa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ea.merge(d,"string"==typeof a?[a]:a):Z.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if($)return $.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return Y.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(e=a[b],b=a,a=e),ea.isFunction(a)?(c=X.call(arguments,2),d=function(){return a.apply(b||this,c.concat(X.call(arguments)))},d.guid=a.guid=a.guid||ea.guid++,d):void 0},now:function(){return+new Date},support:ca}),ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){_["[object "+b+"]"]=b.toLowerCase()});var ja=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sa.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ua,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=ta.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ia,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ba.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return ba.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,aa=Y.slice,ba=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},ca="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",da="[\\x20\\t\\r\\n\\f]",ea="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fa=ea.replace("w","w#"),ga="\\["+da+"*("+ea+")(?:"+da+"*([*^$|!~]?=)"+da+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fa+"))|)"+da+"*\\]",ha=":("+ea+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ga+")*)|.*)\\)|)",ia=new RegExp("^"+da+"+|((?:^|[^\\\\])(?:\\\\.)*)"+da+"+$","g"),ja=new RegExp("^"+da+"*,"+da+"*"),ka=new RegExp("^"+da+"*([>+~]|"+da+")"+da+"*"),la=new RegExp("="+da+"*([^\\]'\"]*?)"+da+"*\\]","g"),ma=new RegExp(ha),na=new RegExp("^"+fa+"$"),oa={ID:new RegExp("^#("+ea+")"),CLASS:new RegExp("^\\.("+ea+")"),TAG:new RegExp("^("+ea.replace("w","w*")+")"),ATTR:new RegExp("^"+ga),PSEUDO:new RegExp("^"+ha),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+da+"*(even|odd|(([+-]|)(\\d*)n|)"+da+"*(?:([+-]|)"+da+"*(\\d+)|))"+da+"*\\)|)","i"),bool:new RegExp("^(?:"+ca+")$","i"),needsContext:new RegExp("^"+da+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+da+"*((?:-\\d)?\\d*)"+da+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,va=new RegExp("\\\\([\\da-f]{1,6}"+da+"?|("+da+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=aa.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xa){_={apply:Y.length?function(a,b){$.apply(a,aa.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=ra.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=ra.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+da+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+da+"*(?:value|"+ca+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+da+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=ra.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",ha)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?ba.call(D,a)-ba.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?ba.call(D,a)-ba.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(la,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+da+")"+a+"("+da+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=ba.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=ja.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ia," ")}),h=h.slice(d.length));for(g in w.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e
}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ca,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ea.find=ja,ea.expr=ja.selectors,ea.expr[":"]=ea.expr.pseudos,ea.unique=ja.uniqueSort,ea.text=ja.getText,ea.isXMLDoc=ja.isXML,ea.contains=ja.contains;var ka=ea.expr.match.needsContext,la=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ma=/^.[^:#\[\.,]*$/;ea.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ea.find.matchesSelector(d,a)?[d]:[]:ea.find.matches(a,ea.grep(b,function(a){return 1===a.nodeType}))},ea.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(ea(a).filter(function(){for(b=0;e>b;b++)if(ea.contains(d[b],this))return!0}));for(b=0;e>b;b++)ea.find(a,d[b],c);return c=this.pushStack(e>1?ea.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&ka.test(a)?ea(a):a||[],!1).length}});var na,oa=a.document,pa=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,qa=ea.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:pa.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||na).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof ea?b[0]:b,ea.merge(this,ea.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:oa,!0)),la.test(c[1])&&ea.isPlainObject(b))for(c in b)ea.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=oa.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return na.find(a);this.length=1,this[0]=d}return this.context=oa,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):ea.isFunction(a)?"undefined"!=typeof na.ready?na.ready(a):a(ea):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),ea.makeArray(a,this))};qa.prototype=ea.fn,na=ea(oa);var ra=/^(?:parents|prev(?:Until|All))/,sa={children:!0,contents:!0,next:!0,prev:!0};ea.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!ea(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),ea.fn.extend({has:function(a){var b,c=ea(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(ea.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=ka.test(a)||"string"!=typeof a?ea(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&ea.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ea.unique(f):f)},index:function(a){return a?"string"==typeof a?ea.inArray(this[0],ea(a)):ea.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ea.unique(ea.merge(this.get(),ea(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ea.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ea.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ea.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ea.dir(a,"nextSibling")},prevAll:function(a){return ea.dir(a,"previousSibling")},nextUntil:function(a,b,c){return ea.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ea.dir(a,"previousSibling",c)},siblings:function(a){return ea.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ea.sibling(a.firstChild)},contents:function(a){return ea.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ea.merge([],a.childNodes)}},function(a,b){ea.fn[a]=function(c,d){var e=ea.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ea.filter(d,e)),this.length>1&&(sa[a]||(e=ea.unique(e)),ra.test(a)&&(e=e.reverse())),this.pushStack(e)}});var ta=/\S+/g,ua={};ea.Callbacks=function(a){a="string"==typeof a?ua[a]||f(a):ea.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(c=a.memory&&f,d=!0,g=h||0,h=0,e=i.length,b=!0;i&&e>g;g++)if(i[g].apply(f[0],f[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var d=i.length;!function f(b){ea.each(b,function(b,c){var d=ea.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=i.length:c&&(h=d,k(c))}return this},remove:function(){return i&&ea.each(arguments,function(a,c){for(var d;(d=ea.inArray(c,i,d))>-1;)i.splice(d,1),b&&(e>=d&&e--,g>=d&&g--)}),this},has:function(a){return a?ea.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],e=0,this},disable:function(){return i=j=c=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,c){return!i||d&&!j||(c=c||[],c=[a,c.slice?c.slice():c],b?j.push(c):k(c)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},ea.extend({Deferred:function(a){var b=[["resolve","done",ea.Callbacks("once memory"),"resolved"],["reject","fail",ea.Callbacks("once memory"),"rejected"],["notify","progress",ea.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ea.Deferred(function(c){ea.each(b,function(b,f){var g=ea.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&ea.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?ea.extend(a,d):d}},e={};return d.pipe=d.then,ea.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=X.call(arguments),g=f.length,h=1!==g||a&&ea.isFunction(a.promise)?g:0,i=1===h?a:ea.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?X.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&ea.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var va;ea.fn.ready=function(a){return ea.ready.promise().done(a),this},ea.extend({isReady:!1,readyWait:1,holdReady:function(a){a?ea.readyWait++:ea.ready(!0)},ready:function(a){if(a===!0?!--ea.readyWait:!ea.isReady){if(!oa.body)return setTimeout(ea.ready);ea.isReady=!0,a!==!0&&--ea.readyWait>0||(va.resolveWith(oa,[ea]),ea.fn.triggerHandler&&(ea(oa).triggerHandler("ready"),ea(oa).off("ready")))}}}),ea.ready.promise=function(b){if(!va)if(va=ea.Deferred(),"complete"===oa.readyState)setTimeout(ea.ready);else if(oa.addEventListener)oa.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1);else{oa.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&oa.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!ea.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}g(),ea.ready()}}()}return va.promise(b)};var wa,xa="undefined";for(wa in ea(ca))break;ca.ownLast="0"!==wa,ca.inlineBlockNeedsLayout=!1,ea(function(){var a,b,c,d;c=oa.getElementsByTagName("body")[0],c&&c.style&&(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xa&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ca.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=oa.createElement("div");if(null==ca.deleteExpando){ca.deleteExpando=!0;try{delete a.test}catch(b){ca.deleteExpando=!1}}a=null}(),ea.acceptData=function(a){var b=ea.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var ya=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,za=/([A-Z])/g;ea.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?ea.cache[a[ea.expando]]:a[ea.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),ea.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=ea.data(f),1===f.nodeType&&!ea._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=ea.camelCase(d.slice(5)),i(f,d,e[d])));ea._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){ea.data(this,a)}):arguments.length>1?this.each(function(){ea.data(this,a,b)}):f?i(f,a,ea.data(f,a)):void 0},removeData:function(a){return this.each(function(){ea.removeData(this,a)})}}),ea.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=ea._data(a,b),c&&(!d||ea.isArray(c)?d=ea._data(a,b,ea.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=ea.queue(a,b),d=c.length,e=c.shift(),f=ea._queueHooks(a,b),g=function(){ea.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ea._data(a,c)||ea._data(a,c,{empty:ea.Callbacks("once memory").add(function(){ea._removeData(a,b+"queue"),ea._removeData(a,c)})})}}),ea.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ea.queue(this[0],a):void 0===b?this:this.each(function(){var c=ea.queue(this,a,b);ea._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ea.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ea.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=ea.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=ea._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ba=["Top","Right","Bottom","Left"],Ca=function(a,b){return a=b||a,"none"===ea.css(a,"display")||!ea.contains(a.ownerDocument,a)},Da=ea.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===ea.type(c)){e=!0;for(h in c)ea.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,ea.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(ea(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Ea=/^(?:checkbox|radio)$/i;!function(){var a=oa.createElement("input"),b=oa.createElement("div"),c=oa.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ca.leadingWhitespace=3===b.firstChild.nodeType,ca.tbody=!b.getElementsByTagName("tbody").length,ca.htmlSerialize=!!b.getElementsByTagName("link").length,ca.html5Clone="<:nav></:nav>"!==oa.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),ca.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",ca.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",ca.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,ca.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){ca.noCloneEvent=!1}),b.cloneNode(!0).click()),null==ca.deleteExpando){ca.deleteExpando=!0;try{delete b.test}catch(d){ca.deleteExpando=!1}}}(),function(){var b,c,d=oa.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(ca[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),ca[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Fa=/^(?:input|select|textarea)$/i,Ga=/^key/,Ha=/^(?:mouse|pointer|contextmenu)|click/,Ia=/^(?:focusinfocus|focusoutblur)$/,Ja=/^([^.]*)(?:\.(.+)|)$/;ea.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=ea.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return typeof ea===xa||a&&ea.event.triggered===a.type?void 0:ea.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(ta)||[""],h=b.length;h--;)f=Ja.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=ea.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=ea.event.special[n]||{},l=ea.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ea.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),ea.event.global[n]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ea.hasData(a)&&ea._data(a);if(q&&(k=q.events)){for(b=(b||"").match(ta)||[""],j=b.length;j--;)if(h=Ja.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ea.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ea.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)ea.event.remove(a,n+b[j],c,d,!0);ea.isEmptyObject(k)&&(delete q.handle,ea._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||oa],n=ba.call(b,"type")?b.type:b,o=ba.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||oa,3!==d.nodeType&&8!==d.nodeType&&!Ia.test(n+ea.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[ea.expando]?b:new ea.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:ea.makeArray(c,[b]),j=ea.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!ea.isWindow(d)){for(i=j.delegateType||n,Ia.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||oa)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(ea._data(h,"events")||{})[b.type]&&ea._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&ea.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&ea.acceptData(d)&&g&&d[n]&&!ea.isWindow(d)){k=d[g],k&&(d[g]=null),ea.event.triggered=n;try{d[n]()}catch(p){}ea.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=ea.event.fix(a);var b,c,d,e,f,g=[],h=X.call(arguments),i=(ea._data(this,"events")||{})[a.type]||[],j=ea.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=ea.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(d.namespace))&&(a.handleObj=d,a.data=d.data,c=((ea.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?ea(c,this).index(i)>=0:ea.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[ea.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ha.test(e)?this.mouseHooks:Ga.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ea.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||oa),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||oa,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==o()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===o()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ea.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return ea.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=ea.extend(new ea.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ea.event.trigger(e,null,b):ea.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ea.removeEvent=oa.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===xa&&(a[d]=null),a.detachEvent(d,c))},ea.Event=function(a,b){return this instanceof ea.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?m:n):this.type=a,b&&ea.extend(this,b),this.timeStamp=a&&a.timeStamp||ea.now(),void(this[ea.expando]=!0)):new ea.Event(a,b)},ea.Event.prototype={isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=m,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=m,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=m,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},ea.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){ea.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!ea.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),ca.submitBubbles||(ea.event.special.submit={setup:function(){return ea.nodeName(this,"form")?!1:void ea.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=ea.nodeName(b,"input")||ea.nodeName(b,"button")?b.form:void 0;c&&!ea._data(c,"submitBubbles")&&(ea.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),ea._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&ea.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return ea.nodeName(this,"form")?!1:void ea.event.remove(this,"._submit")}}),ca.changeBubbles||(ea.event.special.change={setup:function(){return Fa.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ea.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),ea.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),ea.event.simulate("change",this,a,!0)})),!1):void ea.event.add(this,"beforeactivate._change",function(a){var b=a.target;Fa.test(b.nodeName)&&!ea._data(b,"changeBubbles")&&(ea.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||ea.event.simulate("change",this.parentNode,a,!0)}),ea._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ea.event.remove(this,"._change"),!Fa.test(this.nodeName)}}),ca.focusinBubbles||ea.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){ea.event.simulate(b,a.target,ea.event.fix(a),!0)};ea.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ea._data(d,b);e||d.addEventListener(a,c,!0),ea._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ea._data(d,b)-1;e?ea._data(d,b,e):(d.removeEventListener(a,c,!0),ea._removeData(d,b))}}}),ea.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=n;else if(!d)return this;return 1===e&&(g=d,d=function(a){return ea().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=ea.guid++)),this.each(function(){ea.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,ea(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=n),this.each(function(){ea.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){ea.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?ea.event.trigger(a,b,c,!0):void 0}});var Ka="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",La=/ jQuery\d+="(?:null|\d+)"/g,Ma=new RegExp("<(?:"+Ka+")[\\s/>]","i"),Na=/^\s+/,Oa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pa=/<([\w:]+)/,Qa=/<tbody/i,Ra=/<|&#?\w+;/,Sa=/<(?:script|style|link)/i,Ta=/checked\s*(?:[^=]|=\s*.checked.)/i,Ua=/^$|\/(?:java|ecma)script/i,Va=/^true\/(.*)/,Wa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xa={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ca.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ya=p(oa),Za=Ya.appendChild(oa.createElement("div"));Xa.optgroup=Xa.option,Xa.tbody=Xa.tfoot=Xa.colgroup=Xa.caption=Xa.thead,Xa.th=Xa.td,ea.extend({clone:function(a,b,c){var d,e,f,g,h,i=ea.contains(a.ownerDocument,a);if(ca.html5Clone||ea.isXMLDoc(a)||!Ma.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Za.innerHTML=a.outerHTML,Za.removeChild(f=Za.firstChild)),!(ca.noCloneEvent&&ca.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ea.isXMLDoc(a)))for(d=q(f),h=q(a),g=0;null!=(e=h[g]);++g)d[g]&&x(e,d[g]);if(b)if(c)for(h=h||q(a),d=d||q(f),g=0;null!=(e=h[g]);g++)w(e,d[g]);else w(a,f);return d=q(f,"script"),d.length>0&&v(d,!i&&q(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,m=p(b),n=[],o=0;l>o;o++)if(f=a[o],f||0===f)if("object"===ea.type(f))ea.merge(n,f.nodeType?[f]:f);else if(Ra.test(f)){for(h=h||m.appendChild(b.createElement("div")),i=(Pa.exec(f)||["",""])[1].toLowerCase(),k=Xa[i]||Xa._default,h.innerHTML=k[1]+f.replace(Oa,"<$1></$2>")+k[2],e=k[0];e--;)h=h.lastChild;if(!ca.leadingWhitespace&&Na.test(f)&&n.push(b.createTextNode(Na.exec(f)[0])),!ca.tbody)for(f="table"!==i||Qa.test(f)?"<table>"!==k[1]||Qa.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)ea.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);for(ea.merge(n,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);h=m.lastChild}else n.push(b.createTextNode(f));for(h&&m.removeChild(h),ca.appendChecked||ea.grep(q(n,"input"),r),o=0;f=n[o++];)if((!d||-1===ea.inArray(f,d))&&(g=ea.contains(f.ownerDocument,f),h=q(m.appendChild(f),"script"),g&&v(h),c))for(e=0;f=h[e++];)Ua.test(f.type||"")&&c.push(f);return h=null,m},cleanData:function(a,b){for(var c,d,e,f,g=0,h=ea.expando,i=ea.cache,j=ca.deleteExpando,k=ea.event.special;null!=(c=a[g]);g++)if((b||ea.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?ea.event.remove(c,d):ea.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j?delete c[h]:typeof c.removeAttribute!==xa?c.removeAttribute(h):c[h]=null,W.push(e))}}}),ea.fn.extend({text:function(a){return Da(this,function(a){return void 0===a?ea.text(this):this.empty().append((this[0]&&this[0].ownerDocument||oa).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?ea.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||ea.cleanData(q(c)),c.parentNode&&(b&&ea.contains(c.ownerDocument,c)&&v(q(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&ea.cleanData(q(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&ea.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return ea.clone(this,a,b)})},html:function(a){return Da(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(La,""):void 0;if(!("string"!=typeof a||Sa.test(a)||!ca.htmlSerialize&&Ma.test(a)||!ca.leadingWhitespace&&Na.test(a)||Xa[(Pa.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Oa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(ea.cleanData(q(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,ea.cleanData(q(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=Y.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],n=ea.isFunction(m);if(n||j>1&&"string"==typeof m&&!ca.checkClone&&Ta.test(m))return this.each(function(c){var d=k.eq(c);n&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(h=ea.buildFragment(a,this[0].ownerDocument,!1,this),c=h.firstChild,1===h.childNodes.length&&(h=c),c)){for(f=ea.map(q(h,"script"),t),e=f.length;j>i;i++)d=h,i!==l&&(d=ea.clone(d,!0,!0),e&&ea.merge(f,q(d,"script"))),b.call(this[i],d,i);if(e)for(g=f[f.length-1].ownerDocument,ea.map(f,u),i=0;e>i;i++)d=f[i],Ua.test(d.type||"")&&!ea._data(d,"globalEval")&&ea.contains(g,d)&&(d.src?ea._evalUrl&&ea._evalUrl(d.src):ea.globalEval((d.text||d.textContent||d.innerHTML||"").replace(Wa,"")));h=c=null}return this}}),ea.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ea.fn[a]=function(a){for(var c,d=0,e=[],f=ea(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),ea(f[d])[b](c),Z.apply(e,c.get());return this.pushStack(e)}});var $a,_a={};!function(){var a;ca.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=oa.getElementsByTagName("body")[0],c&&c.style?(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xa&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(oa.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var ab,bb,cb=/^margin/,db=new RegExp("^("+Aa+")(?!px)[a-z%]+$","i"),eb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ab=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},bb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ab(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||ea.contains(a.ownerDocument,a)||(g=ea.style(a,b)),db.test(g)&&cb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),
void 0===g?g:g+""}):oa.documentElement.currentStyle&&(ab=function(a){return a.currentStyle},bb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ab(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),db.test(g)&&!eb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"}),function(){function b(){var b,c,d,e;c=oa.getElementsByTagName("body")[0],c&&c.style&&(b=oa.createElement("div"),d=oa.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f=g=!1,i=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(b,null)||{}).top,g="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,e=b.appendChild(oa.createElement("div")),e.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",b.style.width="1px",i=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=b.getElementsByTagName("td"),e[0].style.cssText="margin:0;border:0;padding:0;display:none",h=0===e[0].offsetHeight,h&&(e[0].style.display="",e[1].style.display="none",h=0===e[0].offsetHeight),c.removeChild(d))}var c,d,e,f,g,h,i;c=oa.createElement("div"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=c.getElementsByTagName("a")[0],d=e&&e.style,d&&(d.cssText="float:left;opacity:.5",ca.opacity="0.5"===d.opacity,ca.cssFloat=!!d.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",ca.clearCloneStyle="content-box"===c.style.backgroundClip,ca.boxSizing=""===d.boxSizing||""===d.MozBoxSizing||""===d.WebkitBoxSizing,ea.extend(ca,{reliableHiddenOffsets:function(){return null==h&&b(),h},boxSizingReliable:function(){return null==g&&b(),g},pixelPosition:function(){return null==f&&b(),f},reliableMarginRight:function(){return null==i&&b(),i}}))}(),ea.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var fb=/alpha\([^)]*\)/i,gb=/opacity\s*=\s*([^)]*)/,hb=/^(none|table(?!-c[ea]).+)/,ib=new RegExp("^("+Aa+")(.*)$","i"),jb=new RegExp("^([+-])=("+Aa+")","i"),kb={position:"absolute",visibility:"hidden",display:"block"},lb={letterSpacing:"0",fontWeight:"400"},mb=["Webkit","O","Moz","ms"];ea.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ca.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=ea.camelCase(b),i=a.style;if(b=ea.cssProps[h]||(ea.cssProps[h]=B(i,h)),g=ea.cssHooks[b]||ea.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=jb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(ea.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||ea.cssNumber[h]||(c+="px"),ca.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=ea.camelCase(b);return b=ea.cssProps[h]||(ea.cssProps[h]=B(a.style,h)),g=ea.cssHooks[b]||ea.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=bb(a,b,d)),"normal"===f&&b in lb&&(f=lb[b]),""===c||c?(e=parseFloat(f),c===!0||ea.isNumeric(e)?e||0:f):f}}),ea.each(["height","width"],function(a,b){ea.cssHooks[b]={get:function(a,c,d){return c?hb.test(ea.css(a,"display"))&&0===a.offsetWidth?ea.swap(a,kb,function(){return F(a,b,d)}):F(a,b,d):void 0},set:function(a,c,d){var e=d&&ab(a);return D(a,c,d?E(a,b,d,ca.boxSizing&&"border-box"===ea.css(a,"boxSizing",!1,e),e):0)}}}),ca.opacity||(ea.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=ea.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===ea.trim(f.replace(fb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=fb.test(f)?f.replace(fb,e):f+" "+e)}}),ea.cssHooks.marginRight=A(ca.reliableMarginRight,function(a,b){return b?ea.swap(a,{display:"inline-block"},bb,[a,"marginRight"]):void 0}),ea.each({margin:"",padding:"",border:"Width"},function(a,b){ea.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+Ba[d]+b]=f[d]||f[d-2]||f[0];return e}},cb.test(a)||(ea.cssHooks[a+b].set=D)}),ea.fn.extend({css:function(a,b){return Da(this,function(a,b,c){var d,e,f={},g=0;if(ea.isArray(b)){for(d=ab(a),e=b.length;e>g;g++)f[b[g]]=ea.css(a,b[g],!1,d);return f}return void 0!==c?ea.style(a,b,c):ea.css(a,b)},a,b,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ca(this)?ea(this).show():ea(this).hide()})}}),ea.Tween=G,G.prototype={constructor:G,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ea.cssNumber[c]?"":"px")},cur:function(){var a=G.propHooks[this.prop];return a&&a.get?a.get(this):G.propHooks._default.get(this)},run:function(a){var b,c=G.propHooks[this.prop];return this.pos=b=this.options.duration?ea.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):G.propHooks._default.set(this),this}},G.prototype.init.prototype=G.prototype,G.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ea.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){ea.fx.step[a.prop]?ea.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ea.cssProps[a.prop]]||ea.cssHooks[a.prop])?ea.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ea.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ea.fx=G.prototype.init,ea.fx.step={};var nb,ob,pb=/^(?:toggle|show|hide)$/,qb=new RegExp("^(?:([+-])=|)("+Aa+")([a-z%]*)$","i"),rb=/queueHooks$/,sb=[K],tb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=qb.exec(b),f=e&&e[3]||(ea.cssNumber[a]?"":"px"),g=(ea.cssNumber[a]||"px"!==f&&+d)&&qb.exec(ea.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,ea.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};ea.Animation=ea.extend(M,{tweener:function(a,b){ea.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],tb[c]=tb[c]||[],tb[c].unshift(b)},prefilter:function(a,b){b?sb.unshift(a):sb.push(a)}}),ea.speed=function(a,b,c){var d=a&&"object"==typeof a?ea.extend({},a):{complete:c||!c&&b||ea.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ea.isFunction(b)&&b};return d.duration=ea.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ea.fx.speeds?ea.fx.speeds[d.duration]:ea.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){ea.isFunction(d.old)&&d.old.call(this),d.queue&&ea.dequeue(this,d.queue)},d},ea.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ea.isEmptyObject(a),f=ea.speed(b,c,d),g=function(){var b=M(this,ea.extend({},a),f);(e||ea._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ea.timers,g=ea._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&rb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&ea.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ea._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ea.timers,g=d?d.length:0;for(c.finish=!0,ea.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),ea.each(["toggle","show","hide"],function(a,b){var c=ea.fn[b];ea.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(I(b,!0),a,d,e)}}),ea.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ea.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ea.timers=[],ea.fx.tick=function(){var a,b=ea.timers,c=0;for(nb=ea.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||ea.fx.stop(),nb=void 0},ea.fx.timer=function(a){ea.timers.push(a),a()?ea.fx.start():ea.timers.pop()},ea.fx.interval=13,ea.fx.start=function(){ob||(ob=setInterval(ea.fx.tick,ea.fx.interval))},ea.fx.stop=function(){clearInterval(ob),ob=null},ea.fx.speeds={slow:600,fast:200,_default:400},ea.fn.delay=function(a,b){return a=ea.fx?ea.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=oa.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=oa.createElement("select"),e=c.appendChild(oa.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",ca.getSetAttribute="t"!==b.className,ca.style=/top/.test(d.getAttribute("style")),ca.hrefNormalized="/a"===d.getAttribute("href"),ca.checkOn=!!a.value,ca.optSelected=e.selected,ca.enctype=!!oa.createElement("form").enctype,c.disabled=!0,ca.optDisabled=!e.disabled,a=oa.createElement("input"),a.setAttribute("value",""),ca.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),ca.radioValue="t"===a.value}();var ub=/\r/g;ea.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ea.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ea(this).val()):a,null==e?e="":"number"==typeof e?e+="":ea.isArray(e)&&(e=ea.map(e,function(a){return null==a?"":a+""})),b=ea.valHooks[this.type]||ea.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=ea.valHooks[e.type]||ea.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ub,""):null==c?"":c)}}}),ea.extend({valHooks:{option:{get:function(a){var b=ea.find.attr(a,"value");return null!=b?b:ea.trim(ea.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(ca.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&ea.nodeName(c.parentNode,"optgroup"))){if(b=ea(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ea.makeArray(b),g=e.length;g--;)if(d=e[g],ea.inArray(ea.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),ea.each(["radio","checkbox"],function(){ea.valHooks[this]={set:function(a,b){return ea.isArray(b)?a.checked=ea.inArray(ea(a).val(),b)>=0:void 0}},ca.checkOn||(ea.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var vb,wb,xb=ea.expr.attrHandle,yb=/^(?:checked|selected)$/i,zb=ca.getSetAttribute,Ab=ca.input;ea.fn.extend({attr:function(a,b){return Da(this,ea.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ea.removeAttr(this,a)})}}),ea.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===xa?ea.prop(a,b,c):(1===f&&ea.isXMLDoc(a)||(b=b.toLowerCase(),d=ea.attrHooks[b]||(ea.expr.match.bool.test(b)?wb:vb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=ea.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void ea.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(ta);if(f&&1===a.nodeType)for(;c=f[e++];)d=ea.propFix[c]||c,ea.expr.match.bool.test(c)?Ab&&zb||!yb.test(c)?a[d]=!1:a[ea.camelCase("default-"+c)]=a[d]=!1:ea.attr(a,c,""),a.removeAttribute(zb?c:d)},attrHooks:{type:{set:function(a,b){if(!ca.radioValue&&"radio"===b&&ea.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),wb={set:function(a,b,c){return b===!1?ea.removeAttr(a,c):Ab&&zb||!yb.test(c)?a.setAttribute(!zb&&ea.propFix[c]||c,c):a[ea.camelCase("default-"+c)]=a[c]=!0,c}},ea.each(ea.expr.match.bool.source.match(/\w+/g),function(a,b){var c=xb[b]||ea.find.attr;xb[b]=Ab&&zb||!yb.test(b)?function(a,b,d){var e,f;return d||(f=xb[b],xb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,xb[b]=f),e}:function(a,b,c){return c?void 0:a[ea.camelCase("default-"+b)]?b.toLowerCase():null}}),Ab&&zb||(ea.attrHooks.value={set:function(a,b,c){return ea.nodeName(a,"input")?void(a.defaultValue=b):vb&&vb.set(a,b,c)}}),zb||(vb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},xb.id=xb.name=xb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},ea.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:vb.set},ea.attrHooks.contenteditable={set:function(a,b,c){vb.set(a,""===b?!1:b,c)}},ea.each(["width","height"],function(a,b){ea.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),ca.style||(ea.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Bb=/^(?:input|select|textarea|button|object)$/i,Cb=/^(?:a|area)$/i;ea.fn.extend({prop:function(a,b){return Da(this,ea.prop,a,b,arguments.length>1)},removeProp:function(a){return a=ea.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),ea.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!ea.isXMLDoc(a),f&&(b=ea.propFix[b]||b,e=ea.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=ea.find.attr(a,"tabindex");return b?parseInt(b,10):Bb.test(a.nodeName)||Cb.test(a.nodeName)&&a.href?0:-1}}}}),ca.hrefNormalized||ea.each(["href","src"],function(a,b){ea.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),ca.optSelected||(ea.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),ea.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ea.propFix[this.toLowerCase()]=this}),ca.enctype||(ea.propFix.enctype="encoding");var Db=/[\t\r\n\f]/g;ea.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(ta)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Db," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=ea.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(ea.isFunction(a))return this.each(function(b){ea(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(ta)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Db," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?ea.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(ea.isFunction(a)?function(c){ea(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=ea(this),f=a.match(ta)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===xa||"boolean"===c)&&(this.className&&ea._data(this,"__className__",this.className),this.className=this.className||a===!1?"":ea._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Db," ").indexOf(b)>=0)return!0;return!1}}),ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){ea.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ea.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var Eb=ea.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ea.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=ea.trim(b+"");return e&&!ea.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():ea.error("Invalid JSON: "+b)},ea.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||ea.error("Invalid XML: "+b),c};var Hb,Ib,Jb=/#.*$/,Kb=/([?&])_=[^&]*/,Lb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nb=/^(?:GET|HEAD)$/,Ob=/^\/\//,Pb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Qb={},Rb={},Sb="*/".concat("*");try{Ib=location.href}catch(Tb){Ib=oa.createElement("a"),Ib.href="",Ib=Ib.href}Hb=Pb.exec(Ib.toLowerCase())||[],ea.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ib,type:"GET",isLocal:Mb.test(Hb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ea.parseJSON,"text xml":ea.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?P(P(a,ea.ajaxSettings),b):P(ea.ajaxSettings,a)},ajaxPrefilter:N(Qb),ajaxTransport:N(Rb),ajax:function(a,b){function c(a,b,c,d){var e,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),j=void 0,g=d||"",v.readyState=a>0?4:0,e=a>=200&&300>a||304===a,c&&(s=Q(l,v,c)),s=R(l,s,v,e),e?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(ea.lastModified[f]=u),u=v.getResponseHeader("etag"),u&&(ea.etag[f]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,e=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",e?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,i&&n.trigger(e?"ajaxSuccess":"ajaxError",[v,l,e?k:r]),p.fireWith(m,[v,w]),i&&(n.trigger("ajaxComplete",[v,l]),--ea.active||ea.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=ea.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?ea(m):ea.event,o=ea.Deferred(),p=ea.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!k)for(k={};b=Lb.exec(g);)k[b[1].toLowerCase()]=b[2];b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return j&&j.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||Ib)+"").replace(Jb,"").replace(Ob,Hb[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=ea.trim(l.dataType||"*").toLowerCase().match(ta)||[""],null==l.crossDomain&&(d=Pb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Hb[1]&&d[2]===Hb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Hb[3]||("http:"===Hb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=ea.param(l.data,l.traditional)),O(Qb,l,b,v),2===t)return v;i=l.global,i&&0===ea.active++&&ea.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Nb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Kb.test(f)?f.replace(Kb,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(ea.lastModified[f]&&v.setRequestHeader("If-Modified-Since",ea.lastModified[f]),ea.etag[f]&&v.setRequestHeader("If-None-Match",ea.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Sb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)v.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(e in{success:1,error:1,complete:1})v[e](l[e]);if(j=O(Rb,l,b,v)){v.readyState=1,i&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,j.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return ea.get(a,b,c,"json")},getScript:function(a,b){return ea.get(a,void 0,b,"script")}}),ea.each(["get","post"],function(a,b){ea[b]=function(a,c,d,e){return ea.isFunction(c)&&(e=e||d,d=c,c=void 0),ea.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),ea.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ea.fn[b]=function(a){return this.on(b,a)}}),ea._evalUrl=function(a){return ea.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ea.fn.extend({wrapAll:function(a){if(ea.isFunction(a))return this.each(function(b){ea(this).wrapAll(a.call(this,b))});if(this[0]){var b=ea(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(ea.isFunction(a)?function(b){ea(this).wrapInner(a.call(this,b))}:function(){var b=ea(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ea.isFunction(a);return this.each(function(c){ea(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ea.nodeName(this,"body")||ea(this).replaceWith(this.childNodes)}).end()}}),ea.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!ca.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||ea.css(a,"display"))},ea.expr.filters.visible=function(a){return!ea.expr.filters.hidden(a)};var Ub=/%20/g,Vb=/\[\]$/,Wb=/\r?\n/g,Xb=/^(?:submit|button|image|reset|file)$/i,Yb=/^(?:input|select|textarea|keygen)/i;ea.param=function(a,b){var c,d=[],e=function(a,b){b=ea.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=ea.ajaxSettings&&ea.ajaxSettings.traditional),ea.isArray(a)||a.jquery&&!ea.isPlainObject(a))ea.each(a,function(){e(this.name,this.value)});else for(c in a)S(c,a[c],b,e);return d.join("&").replace(Ub,"+")},ea.fn.extend({serialize:function(){return ea.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=ea.prop(this,"elements");return a?ea.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!ea(this).is(":disabled")&&Yb.test(this.nodeName)&&!Xb.test(a)&&(this.checked||!Ea.test(a))}).map(function(a,b){var c=ea(this).val();return null==c?null:ea.isArray(c)?ea.map(c,function(a){return{name:b.name,value:a.replace(Wb,"\r\n")}}):{name:b.name,value:c.replace(Wb,"\r\n")}}).get()}}),ea.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&T()||U()}:T;var Zb=0,$b={},_b=ea.ajaxSettings.xhr();a.ActiveXObject&&ea(a).on("unload",function(){for(var a in $b)$b[a](void 0,!0)}),ca.cors=!!_b&&"withCredentials"in _b,_b=ca.ajax=!!_b,_b&&ea.ajaxTransport(function(a){if(!a.crossDomain||ca.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Zb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete $b[g],b=void 0,f.onreadystatechange=ea.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=$b[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}}),ea.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ea.globalEval(a),a}}}),ea.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),ea.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=oa.head||ea("head")[0]||oa.documentElement;return{send:function(d,e){b=oa.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ac=[],bc=/(=)\?(?=&|$)|\?\?/;ea.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ac.pop()||ea.expando+"_"+Eb++;return this[a]=!0,a}}),ea.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=ea.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ea.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ac.push(e)),g&&ea.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),ea.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||oa;var d=la.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=ea.buildFragment([a],b,e),e&&e.length&&ea(e).remove(),ea.merge([],d.childNodes))};var cc=ea.fn.load;ea.fn.load=function(a,b,c){if("string"!=typeof a&&cc)return cc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=ea.trim(a.slice(h,a.length)),a=a.slice(0,h)),ea.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&ea.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?ea("<div>").append(ea.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},ea.expr.filters.animated=function(a){return ea.grep(ea.timers,function(b){return a===b.elem}).length};var dc=a.document.documentElement;ea.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ea.css(a,"position"),l=ea(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=ea.css(a,"top"),i=ea.css(a,"left"),j=("absolute"===k||"fixed"===k)&&ea.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ea.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ea.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){ea.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,ea.contains(b,e)?(typeof e.getBoundingClientRect!==xa&&(d=e.getBoundingClientRect()),c=V(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===ea.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ea.nodeName(a[0],"html")||(c=a.offset()),c.top+=ea.css(a[0],"borderTopWidth",!0),c.left+=ea.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-ea.css(d,"marginTop",!0),left:b.left-c.left-ea.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||dc;a&&!ea.nodeName(a,"html")&&"static"===ea.css(a,"position");)a=a.offsetParent;return a||dc})}}),ea.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);ea.fn[a]=function(d){return Da(this,function(a,d,e){var f=V(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?ea(f).scrollLeft():e,c?e:ea(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),ea.each(["top","left"],function(a,b){ea.cssHooks[b]=A(ca.pixelPosition,function(a,c){return c?(c=bb(a,b),db.test(c)?ea(a).position()[b]+"px":c):void 0})}),ea.each({Height:"height",Width:"width"},function(a,b){ea.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){ea.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Da(this,function(b,c,d){var e;return ea.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?ea.css(b,c,g):ea.style(b,c,d,g);

},b,f?d:void 0,f,null)}})}),ea.fn.size=function(){return this.length},ea.fn.andSelf=ea.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ea});var ec=a.jQuery,fc=a.$;return ea.noConflict=function(b){return a.$===ea&&(a.$=fc),b&&a.jQuery===ea&&(a.jQuery=ec),ea},typeof b===xa&&(a.jQuery=a.$=ea),ea});
/*! jQuery UI - v1.11.2 - 2014-12-09
* http://jqueryui.com
* Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return a=!o&&r.length?e.widget.extend.apply(null,[a].concat(r)):a,o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});
/**
 * @author  zhangyang
 * 时间插件datepicker用到的js文件
 */




/*!
 * jQuery UI Datepicker 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.10.4" } });

var PROP_NAME = "datepicker",
	instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[""] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: ["January","February","March","April","May","June",
			"July","August","September","October","November","December"], // Names of months for drop-down and formatting
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
		dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional[""]);
	this.dpDiv = bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function(target, settings) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = (nodeName === "div" || nodeName === "span");
		if (!target.id) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {});
		if (nodeName === "input") {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp);
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var showOn, buttonText, buttonImage,
			appendText = this._get(inst, "appendText"),
			isRTL = this._get(inst, "isRTL");

		if (inst.append) {
			inst.append.remove();
		}
		if (appendText) {
			inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
			input[isRTL ? "before" : "after"](inst.append);
		}

		input.unbind("focus", this._showDatepicker);

		if (inst.trigger) {
			inst.trigger.remove();
		}

		showOn = this._get(inst, "showOn");
		if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		}
		if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
			buttonText = this._get(inst, "buttonText");
			buttonImage = this._get(inst, "buttonImage");
			inst.trigger = $(this._get(inst, "buttonImageOnly") ?
				$("<img/>").addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$("<button type='button'></button>").addClass(this._triggerClass).
					html(!buttonImage ? buttonText : $("<img/>").attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? "before" : "after"](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
					$.datepicker._hideDatepicker();
				} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker(input[0]);
				} else {
					$.datepicker._showDatepicker(input[0]);
				}
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, "autoSize") && !inst.inline) {
			var findMax, max, maxI, i,
				date = new Date(2009, 12 - 1, 20), // Ensure double digits
				dateFormat = this._get(inst, "dateFormat");

			if (dateFormat.match(/[DM]/)) {
				findMax = function(names) {
					max = 0;
					maxI = 0;
					for (i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					"monthNames" : "monthNamesShort"))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
			}
			inst.input.attr("size", this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName)) {
			return;
		}
		divSpan.addClass(this.markerClassName).append(inst.dpDiv);
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if (!inst) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $("<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>");
			this._dialogInput.keydown(this._doKeyDown);
			$("body").append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI) {
			$.blockUI(this.dpDiv);
		}
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function(target) {
		var nodeName,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName === "input") {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind("focus", this._showDatepicker).
				unbind("keydown", this._doKeyDown).
				unbind("keypress", this._doKeyPress).
				unbind("keyup", this._doKeyUp);
		} else if (nodeName === "div" || nodeName === "span") {
			$target.removeClass(this.markerClassName).empty();
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = false;
			inst.trigger.filter("button").
				each(function() { this.disabled = false; }).end().
				filter("img").css({opacity: "1.0", cursor: ""});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().removeClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", false);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, PROP_NAME);

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = true;
			inst.trigger.filter("button").
				each(function() { this.disabled = true; }).end().
				filter("img").css({opacity: "0.5", cursor: "default"});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().addClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", true);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] === target) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function(target, name, value) {
		var settings, date, minDate, maxDate,
			inst = this._getInst(target);

		if (arguments.length === 2 && typeof name === "string") {
			return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name === "all" ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}

		settings = name || {};
		if (typeof name === "string") {
			settings = {};
			settings[name] = value;
		}

		if (inst) {
			if (this._curInst === inst) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker(target, true);
			minDate = this._getMinMaxDate(inst, "min");
			maxDate = this._getMinMaxDate(inst, "max");
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
				inst.settings.minDate = this._formatDate(inst, minDate);
			}
			if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker(target);
				} else {
					this._enableDatepicker(target);
				}
			}
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline) {
			this._setDateFromField(inst, noDefault);
		}
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst(event.target),
			handled = true,
			isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing) {
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// trigger custom callback
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, "stepBigMonths") :
							-$.datepicker._get(inst, "stepMonths")), "M");
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, "stepBigMonths") :
							+$.datepicker._get(inst, "stepMonths")), "M");
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		} else {
			handled = false;
		}

		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var chars, chr,
			inst = $.datepicker._getInst(event.target);

		if ($.datepicker._get(inst, "constrainInput")) {
			chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
			chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var date,
			inst = $.datepicker._getInst(event.target);

		if (inst.input.val() !== inst.lastVal) {
			try {
				date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));

				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
			input = $("input", input.parentNode)[0];
		}

		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}

		beforeShow = $.datepicker._get(inst, "beforeShow");
		beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
			return;
		}
		extendRemove(inst.settings, beforeShowSettings);

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);

		if ($.datepicker._inDialog) { // hide cursor
			input.value = "";
		}
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css("position") === "fixed";
			return !isFixed;
		});

		offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			"static" : (isFixed ? "fixed" : "absolute")), display: "none",
			left: offset.left + "px", top: offset.top + "px"});

		if (!inst.inline) {
			showAnim = $.datepicker._get(inst, "showAnim");
			duration = $.datepicker._get(inst, "duration");
			inst.dpDiv.zIndex($(input).zIndex()+1);
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
			} else {
				inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);
		inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();

		var origyearshtml,
			numMonths = this._getNumberOfMonths(inst),
			cols = numMonths[1],
			width = 17;

		inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
		if (cols > 1) {
			inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
		}
		inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
			"Class"]("ui-datepicker-multi");
		inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
			"Class"]("ui-datepicker-rtl");

		if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.focus();
		}

		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
			viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var position,
			inst = this._getInst(obj),
			isRTL = this._get(inst, "isRTL");

		while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
			obj = obj[isRTL ? "previousSibling" : "nextSibling"];
		}

		position = $(obj).offset();
		return [position.left, position.top];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function(input) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if (!inst || (input && inst !== $.data(input, PROP_NAME))) {
			return;
		}

		if (this._datepickerShowing) {
			showAnim = this._get(inst, "showAnim");
			duration = this._get(inst, "duration");
			postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
			} else {
				inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
					(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
			}

			if (!showAnim) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get(inst, "onClose");
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
			}

			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
				if ($.blockUI) {
					$.unblockUI();
					$("body").append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst) {
			return;
		}

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
				$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var date,
			target = $(id),
			inst = this._getInst(target[0]);

		if (this._get(inst, "gotoCurrent") && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		inst["selected" + (period === "M" ? "Month" : "Year")] =
		inst["draw" + (period === "M" ? "Month" : "Year")] =
			parseInt(select.options[select.selectedIndex].value,10);

		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var inst,
			target = $(id);

		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}

		inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $("a", td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		this._selectDate(target, "");
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var onSelect,
			target = $(id),
			inst = this._getInst(target[0]);

		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input) {
			inst.input.val(dateStr);
		}
		this._updateAlternate(inst);

		onSelect = this._get(inst, "onSelect");
		if (onSelect) {
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		} else if (inst.input) {
			inst.input.trigger("change"); // fire the change event
		}

		if (inst.inline){
			this._updateDatepicker(inst);
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) !== "object") {
				inst.input.focus(); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altFormat, date, dateStr,
			altField = this._get(inst, "altField");

		if (altField) { // update alternate field too
			altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
			date = this._getDate(inst);
			dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ""];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function(date) {
		var time,
			checkDate = new Date(date.getTime());

		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

		time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function (format, value, settings) {
		if (format == null || value == null) {
			throw "Invalid arguments";
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if (value === "") {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Extract a number from the string value
			getNumber = function(match) {
				var isDoubled = lookAhead(match),
					size = (match === "@" ? 14 : (match === "!" ? 20 :
					(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
					digits = new RegExp("^\\d{1," + size + "}"),
					num = value.substring(iValue).match(digits);
				if (!num) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			},
			// Extract a name from the string value and convert to an index
			getName = function(match, shortNames, longNames) {
				var index = -1,
					names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
						return [ [k, v] ];
					}).sort(function (a, b) {
						return -(a[1].length - b[1].length);
					});

				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index !== -1) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},
			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")){
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if (iValue < value.length){
			extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function (format, date, settings) {
		if (!date) {
			return "";
		}

		var iFormat,
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Format a number, with leading zero if necessary
			formatNumber = function(match, value, len) {
				var num = "" + value;
				if (lookAhead(match)) {
					while (num.length < len) {
						num = "0" + num;
					}
				}
				return num;
			},
			// Format a name, short or long as requested
			formatName = function(match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			},
			output = "",
			literal = false;

		if (date) {
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o",
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var iFormat,
			chars = "",
			literal = false,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					chars += format.charAt(iFormat);
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if (lookAhead("'")) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt(iFormat);
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() === inst.lastVal) {
			return;
		}

		var dateFormat = this._get(inst, "dateFormat"),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate(inst),
			date = defaultDate,
			settings = this._getFormatConfig(inst);

		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			dates = (noDefault ? "" : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			},
			offsetString = function(offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}

				var date = (offset.toLowerCase().match(/^c/) ?
					$.datepicker._getDate(inst) : null) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec(offset);

				while (matches) {
					switch (matches[2] || "d") {
						case "d" : case "D" :
							day += parseInt(matches[1],10); break;
						case "w" : case "W" :
							day += parseInt(matches[1],10) * 7; break;
						case "m" : case "M" :
							month += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y": case "Y" :
							year += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			},
			newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
				(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

		newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function(date) {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
			this._notifyChange(inst);
		}
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? "" : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, "stepMonths"),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find("[data-handler]").map(function () {
			var handler = {
				prev: function () {
					$.datepicker._adjustDate(id, -stepMonths, "M");
				},
				next: function () {
					$.datepicker._adjustDate(id, +stepMonths, "M");
				},
				hide: function () {
					$.datepicker._hideDatepicker();
				},
				today: function () {
					$.datepicker._gotoToday(id);
				},
				selectDay: function () {
					$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
					return false;
				},
				selectMonth: function () {
					$.datepicker._selectMonthYear(id, this, "M");
					return false;
				},
				selectYear: function () {
					$.datepicker._selectMonthYear(id, this, "Y");
					return false;
				}
			};
			$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
		});
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
			isRTL = this._get(inst, "isRTL"),
			showButtonPanel = this._get(inst, "showButtonPanel"),
			hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
			navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
			numMonths = this._getNumberOfMonths(inst),
			showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
			stepMonths = this._get(inst, "stepMonths"),
			isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
			currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
				new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get(inst, "prevText");
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));

		prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

		nextText = this._get(inst, "nextText");
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));

		next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

		currentText = this._get(inst, "currentText");
		gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

		controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get(inst, "closeText") + "</button>" : "");

		buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
			(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

		firstDay = parseInt(this._get(inst, "firstDay"),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);

		showWeek = this._get(inst, "showWeek");
		dayNames = this._get(inst, "dayNames");
		dayNamesMin = this._get(inst, "dayNamesMin");
		monthNames = this._get(inst, "monthNames");
		monthNamesShort = this._get(inst, "monthNamesShort");
		beforeShowDay = this._get(inst, "beforeShowDay");
		showOtherMonths = this._get(inst, "showOtherMonths");
		selectOtherMonths = this._get(inst, "selectOtherMonths");
		defaultDate = this._getDefaultDate(inst);
		html = "";
		dow;
		for (row = 0; row < numMonths[0]; row++) {
			group = "";
			this.maxRows = 4;
			for (col = 0; col < numMonths[1]; col++) {
				selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				cornerClass = " ui-corner-all";
				calender = "";
				if (isMultiMonth) {
					calender += "<div class='ui-datepicker-group";
					if (numMonths[1] > 1) {
						switch (col) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
							case numMonths[1]-1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
					(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
				for (dow = 0; dow < 7; dow++) { // days of the week
					day = (dow + firstDay) % 7;
					thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
						"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				}
				leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += "<tr>";
					tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get(inst, "calculateWeek")(printDate) + "</td>");
					for (dow = 0; dow < 7; dow++) { // create date picker days
						daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
						otherMonth = (printDate.getMonth() !== drawMonth);
						unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += "<td class='" +
							((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
							(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
							((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "") + // highlight selected day
							(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
							(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
							(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
							(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
							(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
							(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
							(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
							((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get(inst, "changeMonth"),
			changeYear = this._get(inst, "changeYear"),
			showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// month selection
		if (secondary || !changeMonth) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
		} else {
			inMinYear = (minDate && minDate.getFullYear() === drawYear);
			inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
					monthHtml += "<option value='" + month + "'" +
						(month === drawMonth ? " selected='selected'" : "") +
						">" + monthNamesShort[month] + "</option>";
				}
			}
			monthHtml += "</select>";
			monthHtml += this._get(inst, "monthSuffix");	// add month suffix
		}

		if (!showMonthAfterYear) {
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
		}

		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if (secondary || !changeYear) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {
				// determine range of years to display
				years = this._get(inst, "yearRange").split(":");
				thisYear = new Date().getFullYear();
				determineYear = function(value) {
					var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				year = determineYear(years[0]);
				endYear = Math.max(year, determineYear(years[1] || ""));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for (; year <= endYear; year++) {
					inst.yearshtml += "<option value='" + year + "'" +
						(year === drawYear ? " selected='selected'" : "") +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get(inst, "yearSuffix");
		if (showMonthAfterYear) {
			html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period === "Y" ? offset : 0),
			month = inst.drawMonth + (period === "M" ? offset : 0),
			day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
			date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period === "M" || period === "Y") {
			this._notifyChange(inst);
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			newDate = (minDate && date < minDate ? minDate : date);
		return (maxDate && newDate > maxDate ? maxDate : newDate);
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, "onChangeMonthYear");
		if (onChange) {
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, "numberOfMonths");
		return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst),
			date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

		if (offset < 0) {
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		}
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			minYear = null,
			maxYear = null,
			years = this._get(inst, "yearRange");
			if (years){
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if ( yearSplit[0].match(/[+\-].*/) ) {
					minYear += currentYear;
				}
				if ( yearSplit[1].match(/[+\-].*/) ) {
					maxYear += currentYear;
				}
			}

		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()) &&
			(!minYear || date.getFullYear() >= minYear) &&
			(!maxYear || date.getFullYear() <= maxYear));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, "shortYearCutoff");
		shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
			monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day === "object" ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function bindHover(dpDiv) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		})
		.delegate(selector, "mouseover", function(){
			if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
				$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				$(this).addClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).addClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).addClass("ui-datepicker-next-hover");
				}
			}
		});
}

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = props[name];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick);
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ($("#"+$.datepicker._mainDivId).length === 0) {
		$("body").append($.datepicker.dpDiv);
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		typeof options === "string" ?
			$.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.10.4";

})(jQuery);

/*!
 * jQuery Validation Plugin v1.12.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 J枚rn Zaefferer
 * Released under the MIT license
 */
(function($) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[0], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[0] );
		$.data( this[0], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(event.target).hasClass("cancel") ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $(event.target).attr("formnovalidate") !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
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
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator;

		if ( $(this[0]).is("form")) {
			valid = this.validate().form();
		} else {
			valid = true;
			validator = $(this[0].form).validate();
			this.each(function() {
				valid = validator.element(this) && valid;
			});
		}
		return valid;
	},
	// attributes: space separated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function( index, value ) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[0],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data(element.form, "validator").settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules(element);
			switch (command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[element.name] = existingRules;
				if ( argument.messages ) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[element.name];
					return existingRules;
				}
				filtered = {};
				$.each(argument.split(/\s/), function( index, method ) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
					if ( method === "required" ) {
						$(element).removeAttr("aria-required");
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.dataRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend({ required: param }, data );
			$(element).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) { return !$.trim("" + $(a).val()); },
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) { return !!$.trim("" + $(a).val()); },
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function( i, n ) {
		source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
			return n;
		});
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $([]),
		errorLabelContainer: $([]),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue(element) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element(element.parentNode);
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
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
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {}),
				rules;
			$.each(this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split(/\s/);
				}
				$.each(value, function( index, name ) {
					groups[name] = key;
				});
			});
			rules = this.settings.rules;
			$.each(rules, function( key, value ) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, ""),
					settings = validator.settings;
				if ( settings[eventType] && !this.is( settings.ignore ) ) {
					settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if ( !this.valid() ) {
				$(this.currentForm).triggerHandler("invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if (result) {
					delete this.invalid[checkElement.name];
				} else {
					this.invalid[checkElement.name] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !(element.name in errors);
				});
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
				$(this.currentForm).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements()
					.removeClass( this.settings.errorClass )
					.removeData( "previousValue" )
					.removeAttr( "aria-invalid" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
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
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $(selector)[0];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split(" ").join(".");
			return $(this.settings.errorElement + "." + errorClass, this.errorContext);
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var val,
				$element = $(element),
				type = $element.attr("type");

			if ( type === "radio" || type === "checkbox" ) {
				return $("input[name='" + $element.attr("name") + "']:checked").val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules(),
				rulesCount = $.map( rules, function(n, i) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue(element),
				result, method, rule;

			for (method in rules ) {
				rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.substring( 0, 1 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data("msg");
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for (var i = 0; i < arguments.length; i++) {
				if ( arguments[i] !== undefined ) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[i]; i++ ) {
				error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + ">")
					.attr("for", this.idOrName(element))
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
						label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function( element ) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr("for") === name;
			});
		},

		idOrName: function( element ) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function( element ) {
			// if radio/checkbox, validate first element in group instead
			if ( this.checkable(element) ) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find("[name='" + name + "']");
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $("option:selected", element).length;
			case "input":
				if ( this.checkable( element) ) {
					return this.findByName(element.name).filter(":checked").length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$(param, element.form).length;
			},
			"function": function( param, element ) {
				return param(element);
			}
		},

		optional: function( element ) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[element.name] ) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
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
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $(element).attr("class");

		if ( classes ) {
			$.each(classes.split(" "), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $(element),
			type = element.getAttribute("type"),
			method, value;

		for (method in $.validator.methods) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number(value);
			}

			if ( value || value === 0 ) {
				rules[method] = value;
			} else if ( type === method && type !== "range" ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $( element );
		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.substring( 0, 1 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			if ( value !== undefined ) {
				rules[ method ] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data(element.form, "validator");

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each(rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[prop];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch (typeof val.depends) {
				case "string":
					keepRule = !!$(val.depends, element.form).length;
					break;
				case "function":
					keepRule = val.depends.call(element, element);
					break;
				}
				if ( keepRule ) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function( rule, parameter ) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[this] ) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[this] ) {
				if ( $.isArray(rules[this]) ) {
					rules[this] = [ Number(rules[this][0]), Number(rules[this][1]) ];
				} else if ( typeof rules[this] === "string" ) {
					parts = rules[this].split(/[\s,]+/);
					rules[this] = [ Number(parts[0]), Number(parts[1]) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min && rules.max ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength && rules.maxlength ) {
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
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if ( method.length < 3 ) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn/
		creditcard: function( value, element ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace(/\D/g, "");

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if ( this.settings.onfocusout ) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element),
				validator, data;

			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest(element);
			data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[element.name].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		}

	}

});

$.format = function deprecated() {
	throw "$.format has been deprecated. Please use $.validator.format instead.";
};

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {},
		ajax;
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ) {
			var port = settings.port;
			if ( settings.mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		ajax = $.ajax;
		$.ajax = function( settings ) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if ( mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

(function($w){if(typeof $w.RSAUtils==="undefined")var RSAUtils=$w.RSAUtils={};var biRadixBase=2;var biRadixBits=16;var bitsPerDigit=biRadixBits;var biRadix=1<<16;var biHalfRadix=biRadix>>>1;var biRadixSquared=biRadix*biRadix;var maxDigitVal=biRadix-1;var maxInteger=9999999999999998;var maxDigits;var ZERO_ARRAY;var bigZero,bigOne;var BigInt=$w.BigInt=function(flag){if(typeof flag=="boolean"&&flag==true){this.digits=null}else{this.digits=ZERO_ARRAY.slice(0)}this.isNeg=false};RSAUtils.setMaxDigits=function(value){maxDigits=value;ZERO_ARRAY=new Array(maxDigits);for(var iza=0;iza<ZERO_ARRAY.length;iza++)ZERO_ARRAY[iza]=0;bigZero=new BigInt;bigOne=new BigInt;bigOne.digits[0]=1};RSAUtils.setMaxDigits(20);var dpl10=15;RSAUtils.biFromNumber=function(i){var result=new BigInt;result.isNeg=i<0;i=Math.abs(i);var j=0;while(i>0){result.digits[j++]=i&maxDigitVal;i=Math.floor(i/biRadix)}return result};var lr10=RSAUtils.biFromNumber(1e15);RSAUtils.biFromDecimal=function(s){var isNeg=s.charAt(0)=="-";var i=isNeg?1:0;var result;while(i<s.length&&s.charAt(i)=="0")++i;if(i==s.length){result=new BigInt}else{var digitCount=s.length-i;var fgl=digitCount%dpl10;if(fgl==0)fgl=dpl10;result=RSAUtils.biFromNumber(Number(s.substr(i,fgl)));i+=fgl;while(i<s.length){result=RSAUtils.biAdd(RSAUtils.biMultiply(result,lr10),RSAUtils.biFromNumber(Number(s.substr(i,dpl10))));i+=dpl10}result.isNeg=isNeg}return result};RSAUtils.biCopy=function(bi){var result=new BigInt(true);result.digits=bi.digits.slice(0);result.isNeg=bi.isNeg;return result};RSAUtils.reverseStr=function(s){var result="";for(var i=s.length-1;i>-1;--i){result+=s.charAt(i)}return result};var hexatrigesimalToChar=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];RSAUtils.biToString=function(x,radix){var b=new BigInt;b.digits[0]=radix;var qr=RSAUtils.biDivideModulo(x,b);var result=hexatrigesimalToChar[qr[1].digits[0]];while(RSAUtils.biCompare(qr[0],bigZero)==1){qr=RSAUtils.biDivideModulo(qr[0],b);digit=qr[1].digits[0];result+=hexatrigesimalToChar[qr[1].digits[0]]}return(x.isNeg?"-":"")+RSAUtils.reverseStr(result)};RSAUtils.biToDecimal=function(x){var b=new BigInt;b.digits[0]=10;var qr=RSAUtils.biDivideModulo(x,b);var result=String(qr[1].digits[0]);while(RSAUtils.biCompare(qr[0],bigZero)==1){qr=RSAUtils.biDivideModulo(qr[0],b);result+=String(qr[1].digits[0])}return(x.isNeg?"-":"")+RSAUtils.reverseStr(result)};var hexToChar=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];RSAUtils.digitToHex=function(n){var mask=15;var result="";for(i=0;i<4;++i){result+=hexToChar[n&mask];n>>>=4}return RSAUtils.reverseStr(result)};RSAUtils.biToHex=function(x){var result="";var n=RSAUtils.biHighIndex(x);for(var i=RSAUtils.biHighIndex(x);i>-1;--i){result+=RSAUtils.digitToHex(x.digits[i])}return result};RSAUtils.charToHex=function(c){var ZERO=48;var NINE=ZERO+9;var littleA=97;var littleZ=littleA+25;var bigA=65;var bigZ=65+25;var result;if(c>=ZERO&&c<=NINE){result=c-ZERO}else if(c>=bigA&&c<=bigZ){result=10+c-bigA}else if(c>=littleA&&c<=littleZ){result=10+c-littleA}else{result=0}return result};RSAUtils.hexToDigit=function(s){var result=0;var sl=Math.min(s.length,4);for(var i=0;i<sl;++i){result<<=4;result|=RSAUtils.charToHex(s.charCodeAt(i))}return result};RSAUtils.biFromHex=function(s){var result=new BigInt;var sl=s.length;for(var i=sl,j=0;i>0;i-=4,++j){result.digits[j]=RSAUtils.hexToDigit(s.substr(Math.max(i-4,0),Math.min(i,4)))}return result};RSAUtils.biFromString=function(s,radix){var isNeg=s.charAt(0)=="-";var istop=isNeg?1:0;var result=new BigInt;var place=new BigInt;place.digits[0]=1;for(var i=s.length-1;i>=istop;i--){var c=s.charCodeAt(i);var digit=RSAUtils.charToHex(c);var biDigit=RSAUtils.biMultiplyDigit(place,digit);result=RSAUtils.biAdd(result,biDigit);place=RSAUtils.biMultiplyDigit(place,radix)}result.isNeg=isNeg;return result};RSAUtils.biDump=function(b){return(b.isNeg?"-":"")+b.digits.join(" ")};RSAUtils.biAdd=function(x,y){var result;if(x.isNeg!=y.isNeg){y.isNeg=!y.isNeg;result=RSAUtils.biSubtract(x,y);y.isNeg=!y.isNeg}else{result=new BigInt;var c=0;var n;for(var i=0;i<x.digits.length;++i){n=x.digits[i]+y.digits[i]+c;result.digits[i]=n%biRadix;c=Number(n>=biRadix)}result.isNeg=x.isNeg}return result};RSAUtils.biSubtract=function(x,y){var result;if(x.isNeg!=y.isNeg){y.isNeg=!y.isNeg;result=RSAUtils.biAdd(x,y);y.isNeg=!y.isNeg}else{result=new BigInt;var n,c;c=0;for(var i=0;i<x.digits.length;++i){n=x.digits[i]-y.digits[i]+c;result.digits[i]=n%biRadix;if(result.digits[i]<0)result.digits[i]+=biRadix;c=0-Number(n<0)}if(c==-1){c=0;for(var i=0;i<x.digits.length;++i){n=0-result.digits[i]+c;result.digits[i]=n%biRadix;if(result.digits[i]<0)result.digits[i]+=biRadix;c=0-Number(n<0)}result.isNeg=!x.isNeg}else{result.isNeg=x.isNeg}}return result};RSAUtils.biHighIndex=function(x){var result=x.digits.length-1;while(result>0&&x.digits[result]==0)--result;return result};RSAUtils.biNumBits=function(x){var n=RSAUtils.biHighIndex(x);var d=x.digits[n];var m=(n+1)*bitsPerDigit;var result;for(result=m;result>m-bitsPerDigit;--result){if((d&32768)!=0)break;d<<=1}return result};RSAUtils.biMultiply=function(x,y){var result=new BigInt;var c;var n=RSAUtils.biHighIndex(x);var t=RSAUtils.biHighIndex(y);var u,uv,k;for(var i=0;i<=t;++i){c=0;k=i;for(j=0;j<=n;++j,++k){uv=result.digits[k]+x.digits[j]*y.digits[i]+c;result.digits[k]=uv&maxDigitVal;c=uv>>>biRadixBits}result.digits[i+n+1]=c}result.isNeg=x.isNeg!=y.isNeg;return result};RSAUtils.biMultiplyDigit=function(x,y){var n,c,uv;result=new BigInt;n=RSAUtils.biHighIndex(x);c=0;for(var j=0;j<=n;++j){uv=result.digits[j]+x.digits[j]*y+c;result.digits[j]=uv&maxDigitVal;c=uv>>>biRadixBits}result.digits[1+n]=c;return result};RSAUtils.arrayCopy=function(src,srcStart,dest,destStart,n){var m=Math.min(srcStart+n,src.length);for(var i=srcStart,j=destStart;i<m;++i,++j){dest[j]=src[i]}};var highBitMasks=[0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535];RSAUtils.biShiftLeft=function(x,n){var digitCount=Math.floor(n/bitsPerDigit);var result=new BigInt;RSAUtils.arrayCopy(x.digits,0,result.digits,digitCount,result.digits.length-digitCount);var bits=n%bitsPerDigit;var rightBits=bitsPerDigit-bits;for(var i=result.digits.length-1,i1=i-1;i>0;--i,--i1){result.digits[i]=result.digits[i]<<bits&maxDigitVal|(result.digits[i1]&highBitMasks[bits])>>>rightBits}result.digits[0]=result.digits[i]<<bits&maxDigitVal;result.isNeg=x.isNeg;return result};var lowBitMasks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];RSAUtils.biShiftRight=function(x,n){var digitCount=Math.floor(n/bitsPerDigit);var result=new BigInt;RSAUtils.arrayCopy(x.digits,digitCount,result.digits,0,x.digits.length-digitCount);var bits=n%bitsPerDigit;var leftBits=bitsPerDigit-bits;for(var i=0,i1=i+1;i<result.digits.length-1;++i,++i1){result.digits[i]=result.digits[i]>>>bits|(result.digits[i1]&lowBitMasks[bits])<<leftBits}result.digits[result.digits.length-1]>>>=bits;result.isNeg=x.isNeg;return result};RSAUtils.biMultiplyByRadixPower=function(x,n){var result=new BigInt;RSAUtils.arrayCopy(x.digits,0,result.digits,n,result.digits.length-n);return result};RSAUtils.biDivideByRadixPower=function(x,n){var result=new BigInt;RSAUtils.arrayCopy(x.digits,n,result.digits,0,result.digits.length-n);return result};RSAUtils.biModuloByRadixPower=function(x,n){var result=new BigInt;RSAUtils.arrayCopy(x.digits,0,result.digits,0,n);return result};RSAUtils.biCompare=function(x,y){if(x.isNeg!=y.isNeg){return 1-2*Number(x.isNeg)}for(var i=x.digits.length-1;i>=0;--i){if(x.digits[i]!=y.digits[i]){if(x.isNeg){return 1-2*Number(x.digits[i]>y.digits[i])}else{return 1-2*Number(x.digits[i]<y.digits[i])}}}return 0};RSAUtils.biDivideModulo=function(x,y){var nb=RSAUtils.biNumBits(x);var tb=RSAUtils.biNumBits(y);var origYIsNeg=y.isNeg;var q,r;if(nb<tb){if(x.isNeg){q=RSAUtils.biCopy(bigOne);q.isNeg=!y.isNeg;x.isNeg=false;y.isNeg=false;r=biSubtract(y,x);x.isNeg=true;y.isNeg=origYIsNeg}else{q=new BigInt;r=RSAUtils.biCopy(x)}return[q,r]}q=new BigInt;r=x;var t=Math.ceil(tb/bitsPerDigit)-1;var lambda=0;while(y.digits[t]<biHalfRadix){y=RSAUtils.biShiftLeft(y,1);++lambda;++tb;t=Math.ceil(tb/bitsPerDigit)-1}r=RSAUtils.biShiftLeft(r,lambda);nb+=lambda;var n=Math.ceil(nb/bitsPerDigit)-1;var b=RSAUtils.biMultiplyByRadixPower(y,n-t);while(RSAUtils.biCompare(r,b)!=-1){++q.digits[n-t];r=RSAUtils.biSubtract(r,b)}for(var i=n;i>t;--i){var ri=i>=r.digits.length?0:r.digits[i];var ri1=i-1>=r.digits.length?0:r.digits[i-1];var ri2=i-2>=r.digits.length?0:r.digits[i-2];var yt=t>=y.digits.length?0:y.digits[t];var yt1=t-1>=y.digits.length?0:y.digits[t-1];if(ri==yt){q.digits[i-t-1]=maxDigitVal}else{q.digits[i-t-1]=Math.floor((ri*biRadix+ri1)/yt)}var c1=q.digits[i-t-1]*(yt*biRadix+yt1);var c2=ri*biRadixSquared+(ri1*biRadix+ri2);while(c1>c2){--q.digits[i-t-1];c1=q.digits[i-t-1]*(yt*biRadix|yt1);c2=ri*biRadix*biRadix+(ri1*biRadix+ri2)}b=RSAUtils.biMultiplyByRadixPower(y,i-t-1);r=RSAUtils.biSubtract(r,RSAUtils.biMultiplyDigit(b,q.digits[i-t-1]));if(r.isNeg){r=RSAUtils.biAdd(r,b);--q.digits[i-t-1]}}r=RSAUtils.biShiftRight(r,lambda);q.isNeg=x.isNeg!=origYIsNeg;if(x.isNeg){if(origYIsNeg){q=RSAUtils.biAdd(q,bigOne)}else{q=RSAUtils.biSubtract(q,bigOne)}y=RSAUtils.biShiftRight(y,lambda);r=RSAUtils.biSubtract(y,r)}if(r.digits[0]==0&&RSAUtils.biHighIndex(r)==0)r.isNeg=false;return[q,r]};RSAUtils.biDivide=function(x,y){return RSAUtils.biDivideModulo(x,y)[0]};RSAUtils.biModulo=function(x,y){return RSAUtils.biDivideModulo(x,y)[1]};RSAUtils.biMultiplyMod=function(x,y,m){return RSAUtils.biModulo(RSAUtils.biMultiply(x,y),m)};RSAUtils.biPow=function(x,y){var result=bigOne;var a=x;while(true){if((y&1)!=0)result=RSAUtils.biMultiply(result,a);y>>=1;if(y==0)break;a=RSAUtils.biMultiply(a,a)}return result};RSAUtils.biPowMod=function(x,y,m){var result=bigOne;var a=x;var k=y;while(true){if((k.digits[0]&1)!=0)result=RSAUtils.biMultiplyMod(result,a,m);k=RSAUtils.biShiftRight(k,1);if(k.digits[0]==0&&RSAUtils.biHighIndex(k)==0)break;a=RSAUtils.biMultiplyMod(a,a,m)}return result};$w.BarrettMu=function(m){this.modulus=RSAUtils.biCopy(m);this.k=RSAUtils.biHighIndex(this.modulus)+1;var b2k=new BigInt;b2k.digits[2*this.k]=1;this.mu=RSAUtils.biDivide(b2k,this.modulus);this.bkplus1=new BigInt;this.bkplus1.digits[this.k+1]=1;this.modulo=BarrettMu_modulo;this.multiplyMod=BarrettMu_multiplyMod;this.powMod=BarrettMu_powMod};function BarrettMu_modulo(x){var $dmath=RSAUtils;var q1=$dmath.biDivideByRadixPower(x,this.k-1);var q2=$dmath.biMultiply(q1,this.mu);var q3=$dmath.biDivideByRadixPower(q2,this.k+1);var r1=$dmath.biModuloByRadixPower(x,this.k+1);var r2term=$dmath.biMultiply(q3,this.modulus);var r2=$dmath.biModuloByRadixPower(r2term,this.k+1);var r=$dmath.biSubtract(r1,r2);if(r.isNeg){r=$dmath.biAdd(r,this.bkplus1)}var rgtem=$dmath.biCompare(r,this.modulus)>=0;while(rgtem){r=$dmath.biSubtract(r,this.modulus);rgtem=$dmath.biCompare(r,this.modulus)>=0}return r}function BarrettMu_multiplyMod(x,y){var xy=RSAUtils.biMultiply(x,y);return this.modulo(xy)}function BarrettMu_powMod(x,y){var result=new BigInt;result.digits[0]=1;var a=x;var k=y;while(true){if((k.digits[0]&1)!=0)result=this.multiplyMod(result,a);k=RSAUtils.biShiftRight(k,1);if(k.digits[0]==0&&RSAUtils.biHighIndex(k)==0)break;a=this.multiplyMod(a,a)}return result}var RSAKeyPair=function(encryptionExponent,decryptionExponent,modulus){var $dmath=RSAUtils;this.e=$dmath.biFromHex(encryptionExponent);this.d=$dmath.biFromHex(decryptionExponent);this.m=$dmath.biFromHex(modulus);this.chunkSize=2*$dmath.biHighIndex(this.m);this.radix=16;this.barrett=new $w.BarrettMu(this.m)};RSAUtils.getKeyPair=function(encryptionExponent,decryptionExponent,modulus){return new RSAKeyPair(encryptionExponent,decryptionExponent,modulus)};if(typeof $w.twoDigit==="undefined"){$w.twoDigit=function(n){return(n<10?"0":"")+String(n)}}RSAUtils.encryptedString=function(key,s){var a=[];var sl=s.length;var i=0;while(i<sl){a[i]=s.charCodeAt(i);i++}while(a.length%key.chunkSize!=0){a[i++]=0}var al=a.length;var result="";var j,k,block;for(i=0;i<al;i+=key.chunkSize){block=new BigInt;j=0;for(k=i;k<i+key.chunkSize;++j){block.digits[j]=a[k++];block.digits[j]+=a[k++]<<8}var crypt=key.barrett.powMod(block,key.e);var text=key.radix==16?RSAUtils.biToHex(crypt):RSAUtils.biToString(crypt,key.radix);result+=text+" "}return result.substring(0,result.length-1)};RSAUtils.decryptedString=function(key,s){var blocks=s.split(" ");var result="";var i,j,block;for(i=0;i<blocks.length;++i){var bi;if(key.radix==16){bi=RSAUtils.biFromHex(blocks[i])}else{bi=RSAUtils.biFromString(blocks[i],key.radix)}block=key.barrett.powMod(bi,key.d);for(j=0;j<=RSAUtils.biHighIndex(block);++j){result+=String.fromCharCode(block.digits[j]&255,block.digits[j]>>8)}}if(result.charCodeAt(result.length-1)==0){result=result.substring(0,result.length-1)}return result};RSAUtils.setMaxDigits(130)})(window);
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(window||this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")};c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=b(p).match(c._ISURL);if(F){B=q("pattern");var G=q("image");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[a]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=c.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[a]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper);this.paper;return this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});
$(function() {
	var Accordion = function(el, multiple) {
		
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.menu');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
	
		var $el = e.data.el;
			
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().addClass('open').siblings().removeClass("open");

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.user-account-nav'), false);
	new Accordion($('.aboutUs-nav'), false);
	
	$(".emailBill").on('click',function(){
		var thisLink=$(this).data("link");
		window.open(thisLink,'_blank')

	})
});

