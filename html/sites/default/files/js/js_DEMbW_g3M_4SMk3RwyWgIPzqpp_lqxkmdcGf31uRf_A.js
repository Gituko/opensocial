/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/**
 * For jQuery versions less than 3.4.0, this replaces the jQuery.extend
 * function with the one from jQuery 3.4.0, slightly modified (documented
 * below) to be compatible with older jQuery versions.
 *
 * This provides the Object.prototype pollution vulnerability fix to Drupal
 * installations running older jQuery versions, including the version (3.2.1)
 * shipped with Drupal core.
 *
 * @see https://github.com/jquery/jquery/pull/4333
 */

(function (jQuery) {

// Do not override jQuery.extend() if the jQuery version is already >=3.4.0.
var versionParts = jQuery.fn.jquery.split('.');
var majorVersion = parseInt(versionParts[0]);
var minorVersion = parseInt(versionParts[1]);
var patchVersion = parseInt(versionParts[2]);
var isPreReleaseVersion = (patchVersion.toString() !== versionParts[2]);
if (
  (majorVersion > 3) ||
  (majorVersion === 3 && minorVersion > 4) ||
  (majorVersion === 3 && minorVersion === 4 && patchVersion > 0) ||
  (majorVersion === 3 && minorVersion === 4 && patchVersion === 0 && !isPreReleaseVersion)
) {
  return;
}

/**
 * This is almost verbatim copied from jQuery 3.4.0.
 *
 * Only one minor change has been made:
 * - The call to isFunction() is changed to jQuery.isFunction().
 *
 * The above change ensures compatibility with older jQuery versions,
 * including 3.2.1 which is shipped with Drupal core.
 */
jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;

    // Skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {

    // Only deal with non-null/undefined values
    if ( ( options = arguments[ i ] ) != null ) {

      // Extend the base object
      for ( name in options ) {
        copy = options[ name ];

        // Prevent Object.prototype pollution
        // Prevent never-ending loop
        if ( name === "__proto__" || target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
          ( copyIsArray = Array.isArray( copy ) ) ) ) {
          src = target[ name ];

          // Ensure proper type for the source value
          if ( copyIsArray && !Array.isArray( src ) ) {
            clone = [];
          } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

          // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

})(jQuery);
;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/* ========================================================================
 * Bootstrap: tooltip.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml)
    }

    // IE 8 and below don't support createHTMLDocument
    if (!document.implementation || !document.implementation.createHTMLDocument) {
      return unsafeHtml
    }

    var createdDocument = document.implementation.createHTMLDocument('sanitization')
    createdDocument.body.innerHTML = unsafeHtml

    var whitelistKeys = $.map(whiteList, function (el, i) { return i })
    var elements = $(createdDocument.body).find('*')

    for (var i = 0, len = elements.length; i < len; i++) {
      var el = elements[i]
      var elName = el.nodeName.toLowerCase()

      if ($.inArray(elName, whitelistKeys) === -1) {
        el.parentNode.removeChild(el)

        continue
      }

      var attributeList = $.map(el.attributes, function (el) { return el })
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])

      for (var j = 0, len2 = attributeList.length; j < len2; j++) {
        if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
          el.removeAttribute(attributeList[j].nodeName)
        }
      }
    }

    return createdDocument.body.innerHTML
  }

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    },
    sanitize : true,
    sanitizeFn : null,
    whiteList : DefaultWhitelist
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    var dataAttributes = this.$element.data()

    for (var dataAttr in dataAttributes) {
      if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
        delete dataAttributes[dataAttr]
      }
    }

    options = $.extend({}, this.getDefaults(), dataAttributes, options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    if (options.sanitize) {
      options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn)
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    if (this.options.html) {
      if (this.options.sanitize) {
        title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn)
      }

      $tip.find('.tooltip-inner').html(title)
    } else {
      $tip.find('.tooltip-inner').text(title)
    }

    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

  Tooltip.prototype.sanitizeHtml = function (unsafeHtml) {
    return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn)
  }

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
;
/* ========================================================================
 * Bootstrap: popover.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.4.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    if (this.options.html) {
      var typeContent = typeof content

      if (this.options.sanitize) {
        title = this.sanitizeHtml(title)

        if (typeContent === 'string') {
          content = this.sanitizeHtml(content)
        }
      }

      $tip.find('.popover-title').html(title)
      $tip.find('.popover-content').children().detach().end()[
        typeContent === 'string' ? 'html' : 'append'
      ](content)
    } else {
      $tip.find('.popover-title').text(title)
      $tip.find('.popover-content').children().detach().end().text(content)
    }

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
        o.content.call($e[0]) :
        o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
;
/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.4.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    selector    = selector === '#' ? [] : selector
    var $parent = $(document).find(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
;
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return t.Waves=e.call(t),t.Waves}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";function t(t){return null!==t&&t===t.window}function e(e){return t(e)?e:9===e.nodeType&&e.defaultView}function n(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function o(t){return n(t)&&t.nodeType>0}function a(t){var e=f.call(t);return"[object String]"===e?d(t):n(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e)&&t.hasOwnProperty("length")?t:o(t)?[t]:[]}function i(t){var n,o,a={top:0,left:0},i=t&&t.ownerDocument;return n=i.documentElement,void 0!==t.getBoundingClientRect&&(a=t.getBoundingClientRect()),o=e(i),{top:a.top+o.pageYOffset-n.clientTop,left:a.left+o.pageXOffset-n.clientLeft}}function r(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function s(t,e,n){if(n){n.classList.remove("waves-rippling");var o=n.getAttribute("data-x"),a=n.getAttribute("data-y"),i=n.getAttribute("data-scale"),s=n.getAttribute("data-translate"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),"mousemove"===t.type&&(u=150);var c="mousemove"===t.type?2500:v.duration;setTimeout(function(){var t={top:a+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":i+" "+s,"-moz-transform":i+" "+s,"-ms-transform":i+" "+s,"-o-transform":i+" "+s,transform:i+" "+s};n.setAttribute("style",r(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c)},u)}}function u(t){if(!1===h.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function c(t){var e=u(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(h.registerEvent(t),"touchstart"===t.type&&v.delay){var n=!1,o=setTimeout(function(){o=null,v.show(t,e)},v.delay),a=function(a){o&&(clearTimeout(o),o=null,v.show(t,e)),n||(n=!0,v.hide(a,e)),r()},i=function(t){o&&(clearTimeout(o),o=null),a(t),r()};e.addEventListener("touchmove",i,!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1);var r=function(){e.removeEventListener("touchmove",i),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)}}else v.show(t,e),m&&(e.addEventListener("touchend",v.hide,!1),e.addEventListener("touchcancel",v.hide,!1)),e.addEventListener("mouseup",v.hide,!1),e.addEventListener("mouseleave",v.hide,!1)}}var l=l||{},d=document.querySelectorAll.bind(document),f=Object.prototype.toString,m="ontouchstart"in window,v={duration:750,delay:200,show:function(t,e,n){if(2===t.button)return!1;e=e||this;var o=document.createElement("div");o.className="waves-ripple waves-rippling",e.appendChild(o);var a=i(e),s=0,u=0;"touches"in t&&t.touches.length?(s=t.touches[0].pageY-a.top,u=t.touches[0].pageX-a.left):(s=t.pageY-a.top,u=t.pageX-a.left),u=u>=0?u:0,s=s>=0?s:0;var c="scale("+e.clientWidth/100*3+")",l="translate(0,0)";n&&(l="translate("+n.x+"px, "+n.y+"px)"),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-x",u),o.setAttribute("data-y",s),o.setAttribute("data-scale",c),o.setAttribute("data-translate",l);var d={top:s+"px",left:u+"px"};o.classList.add("waves-notransition"),o.setAttribute("style",r(d)),o.classList.remove("waves-notransition"),d["-webkit-transform"]=c+" "+l,d["-moz-transform"]=c+" "+l,d["-ms-transform"]=c+" "+l,d["-o-transform"]=c+" "+l,d.transform=c+" "+l,d.opacity="1";var f="mousemove"===t.type?2500:v.duration;d["-webkit-transition-duration"]=f+"ms",d["-moz-transition-duration"]=f+"ms",d["-o-transition-duration"]=f+"ms",d["transition-duration"]=f+"ms",o.setAttribute("style",r(d))},hide:function(t,e){for(var n=(e=e||this).getElementsByClassName("waves-rippling"),o=0,a=n.length;o<a;o++)s(t,e,n[o]);m&&(e.removeEventListener("touchend",v.hide),e.removeEventListener("touchcancel",v.hide)),e.removeEventListener("mouseup",v.hide),e.removeEventListener("mouseleave",v.hide)}},p={input:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");n.className=t.className+" waves-input-wrapper",t.className="waves-button-input",e.replaceChild(n,t),n.appendChild(t);var o=window.getComputedStyle(t,null),a=o.color,i=o.backgroundColor;n.setAttribute("style","color:"+a+";background:"+i),t.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");e.replaceChild(n,t),n.appendChild(t)}}},h={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&h.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?h.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){h.touches&&(h.touches-=1)},500)}};return l.init=function(t){var e=document.body;"duration"in(t=t||{})&&(v.duration=t.duration),"delay"in t&&(v.delay=t.delay),m&&(e.addEventListener("touchstart",c,!1),e.addEventListener("touchcancel",h.registerEvent,!1),e.addEventListener("touchend",h.registerEvent,!1)),e.addEventListener("mousedown",c,!1)},l.attach=function(t,e){t=a(t),"[object Array]"===f.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var n,o,i=0,r=t.length;i<r;i++)o=(n=t[i]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(p[o](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},l.ripple=function(t,e){var n=(t=a(t)).length;if(e=e||{},e.wait=e.wait||0,e.position=e.position||null,n)for(var o,r,s,u={},c=0,l={type:"mousedown",button:1};c<n;c++)if(o=t[c],r=e.position||{x:o.clientWidth/2,y:o.clientHeight/2},s=i(o),u.x=s.left+r.x,u.y=s.top+r.y,l.pageX=u.x,l.pageY=u.y,v.show(l,o),e.wait>=0&&null!==e.wait){var d={type:"mouseup",button:1};setTimeout(function(t,e){return function(){v.hide(t,e)}}(d,o),e.wait)}},l.calm=function(t){for(var e={type:"mouseup",button:1},n=0,o=(t=a(t)).length;n<o;n++)v.hide(e,t[n])},l.displayEffect=function(t){l.init(t)},l});

jQuery,Drupal.behaviors.initWaves={attach:function(t,a){"undefined"!=typeof Waves&&(Waves.attach(".btn-default:not(.btn-icon):not(.btn-float)",["waves-btn"]),Waves.attach(".btn-flat:not(.btn-icon):not(.btn-float)",["waves-btn"]),Waves.attach(".btn-primary:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-secondary:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-accent:not(.btn-icon):not(.btn-float)",["waves-btn","waves-light"]),Waves.attach(".btn-icon-toggle, .btn-float",["waves-circle"]),Waves.init({duration:750,delay:200}))}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @param {underscore} _
 * @param {jQuery} $
 * @param {Drupal} Drupal
 * @param {drupalSettings} drupalSettings
 */
(function (_, $, Drupal, drupalSettings) {
  'use strict';

  /**
   * @typedef Drupal.bootstrap
   */
  var Bootstrap = {
    processedOnce: {},
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Creates a jQuery plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.createPlugin = function (id, plugin, noConflict) {
    // Immediately return if plugin doesn't exist.
    if ($.fn[id] !== void 0) {
      return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.', {'@id': id});
    }

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin', {'@id': id, '@plugin':  plugin});
    }

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Diff object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of the first passed object that are not present
   *   in all other passed objects.
   */
  Bootstrap.diffObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.difference.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Extends a jQuery Plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A constructor function used to initialize the for the jQuery plugin.
   *
   * @return {Function|Boolean}
   *   The jQuery plugin constructor or FALSE if the plugin does not exist.
   */
  Bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback', {'@id': id, '@callback':  callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);
    if (!$.isPlainObject(plugin)) {
      return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj', {'@obj':  plugin});
    }

    this.wrapPluginConstructor(constructor, plugin, true);

    return $.fn[id];
  };

  Bootstrap.superWrapper = function (parent, fn) {
    return function () {
      var previousSuper = this.super;
      this.super = parent;
      var ret = fn.apply(this, arguments);
      if (previousSuper) {
        this.super = previousSuper;
      }
      else {
        delete this.super;
      }
      return ret;
    };
  };

  /**
   * Provide a helper method for displaying when something is went wrong.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   An arguments to use in message.
   *
   * @return {Boolean}
   *   Always returns FALSE.
   */
  Bootstrap.fatal = function (message, args) {
    if (this.settings.dev && console.warn) {
      for (var name in args) {
        if (args.hasOwnProperty(name) && typeof args[name] === 'object') {
          args[name] = JSON.stringify(args[name]);
        }
      }
      Drupal.throwError(new Error(Drupal.formatString(message, args)));
    }
    return false;
  };

  /**
   * Intersects object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of first passed object that intersects with all
   *   other passed objects.
   */
  Bootstrap.intersectObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.intersection.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Normalizes an object's values.
   *
   * @param {Object} obj
   *   The object to normalize.
   *
   * @return {Object}
   *   The normalized object.
   */
  Bootstrap.normalizeObject = function (obj) {
    if (!$.isPlainObject(obj)) {
      return obj;
    }

    for (var k in obj) {
      if (typeof obj[k] === 'string') {
        if (obj[k] === 'true') {
          obj[k] = true;
        }
        else if (obj[k] === 'false') {
          obj[k] = false;
        }
        else if (obj[k].match(/^[\d-.]$/)) {
          obj[k] = parseFloat(obj[k]);
        }
      }
      else if ($.isPlainObject(obj[k])) {
        obj[k] = Bootstrap.normalizeObject(obj[k]);
      }
    }

    return obj;
  };

  /**
   * An object based once plugin (similar to jquery.once, but without the DOM).
   *
   * @param {String} id
   *   A unique identifier.
   * @param {Function} callback
   *   The callback to invoke if the identifier has not yet been seen.
   *
   * @return {Bootstrap}
   */
  Bootstrap.once = function (id, callback) {
    // Immediately return if identifier has already been processed.
    if (this.processedOnce[id]) {
      return this;
    }
    callback.call(this, this.settings);
    this.processedOnce[id] = true;
    return this;
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   */
  Bootstrap.option = function (key, value) {
    var options = $.isPlainObject(key) ? $.extend({}, key) : {};

    // Get all options (clone so it doesn't reference the internal object).
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Get/set single option.
    if (typeof key === "string") {
      // Handle nested keys in dot notation.
      // e.g., "foo.bar" => { foo: { bar: true } }
      var parts = key.split('.');
      key = parts.shift();
      var obj = options;
      if (parts.length) {
        for (var i = 0; i < parts.length - 1; i++) {
          obj[parts[i]] = obj[parts[i]] || {};
          obj = obj[parts[i]];
        }
        key = parts.pop();
      }

      // Get.
      if (arguments.length === 1) {
        return obj[key] === void 0 ? null : obj[key];
      }

      // Set.
      obj[key] = value;
    }

    // Set multiple options.
    $.extend(true, this.options, options);
  };

  /**
   * Adds a ".noConflict()" helper method if needed.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.pluginNoConflict = function (id, plugin, noConflict) {
    if (plugin.noConflict === void 0 && (noConflict === void 0 || noConflict)) {
      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
    }
  };

  /**
   * Creates a handler that relays to another event name.
   *
   * @param {HTMLElement|jQuery} target
   *   A target element.
   * @param {String} name
   *   The name of the event to trigger.
   * @param {Boolean} [stopPropagation=true]
   *   Flag indicating whether to stop the propagation of the event, defaults
   *   to true.
   *
   * @return {Function}
   *   An even handler callback function.
   */
  Bootstrap.relayEvent = function (target, name, stopPropagation) {
    return function (e) {
      if (stopPropagation === void 0 || stopPropagation) {
        e.stopPropagation();
      }
      var $target = $(target);
      var parts = name.split('.').filter(Boolean);
      var type = parts.shift();
      e.target = $target[0];
      e.currentTarget = $target[0];
      e.namespace = parts.join('.');
      e.type = type;
      $target.trigger(e);
    };
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A callback function that is immediately invoked and must return a
   *   function that will be used as the plugin constructor.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.replacePlugin = function (id, callback, noConflict) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback', {'@callback': callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin', {'@id': id, '@plugin': plugin});
    }

    this.wrapPluginConstructor(constructor, plugin);

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a fairly complete modern implementation. If things aren't
   * working quite the way you intend (in older browsers), you may wish to use
   * the jQuery.simulate plugin. If it's available, this method will defer to
   * that plugin.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement|jQuery} element
   *   A DOM element to dispatch event on. Note: this may be a jQuery object,
   *   however be aware that this will trigger the same event for each element
   *   inside the jQuery collection; use with caution.
   * @param {String|String[]} type
   *   The type(s) of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   *
   * @return {Boolean}
   *   The return value is false if event is cancelable and at least one of the
   *   event handlers which handled this event called Event.preventDefault().
   *   Otherwise it returns true.
   */
  Bootstrap.simulate = function (element, type, options) {
    // Handle jQuery object wrappers so it triggers on each element.
    var ret = true;
    if (element instanceof $) {
      element.each(function () {
        if (!Bootstrap.simulate(this, type, options)) {
          ret = false;
        }
      });
      return ret;
    }

    if (!(element instanceof HTMLElement)) {
      this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.', {
        '@type': typeof element,
      });
    }

    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return true;
    }

    var event;
    var ctor;
    var types = [].concat(type);
    for (var i = 0, l = types.length; i < l; i++) {
      type = types[i];
      for (var name in this.eventMap) {
        if (this.eventMap[name].test(type)) {
          ctor = name;
          break;
        }
      }
      if (!ctor) {
        throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
      }
      var opts = {bubbles: true, cancelable: true};
      if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
        $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
      }
      if (ctor === 'MouseEvent') {
        $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
      }
      if (options) {
        $.extend(opts, options);
      }
      if (typeof window[ctor] === 'function') {
        event = new window[ctor](type, opts);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (document.createEvent) {
        event = document.createEvent(ctor);
        event.initEvent(type, opts.bubbles, opts.cancelable);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (typeof element.fireEvent === 'function') {
        event = $.extend(document.createEventObject(), opts);
        if (!element.fireEvent('on' + type, event)) {
          ret = false;
        }
      }
      else if (typeof element[type]) {
        element[type]();
      }
    }
    return ret;
  };

  /**
   * Strips HTML and returns just text.
   *
   * @param {String|Element|jQuery} html
   *   A string of HTML content, an Element DOM object or a jQuery object.
   *
   * @return {String}
   *   The text without HTML tags.
   *
   * @todo Replace with http://locutus.io/php/strings/strip_tags/
   */
  Bootstrap.stripHtml = function (html) {
    if (html instanceof $) {
      html = html.html();
    }
    else if (html instanceof Element) {
      html = html.innerHTML;
    }
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/^[\s\n\t]*|[\s\n\t]*$/, '');
  };

  /**
   * Provide a helper method for displaying when something is unsupported.
   *
   * @param {String} type
   *   The type of unsupported object, e.g. method or option.
   * @param {String} name
   *   The name of the unsupported object.
   * @param {*} [value]
   *   The value of the unsupported object.
   */
  Bootstrap.unsupported = function (type, name, value) {
    Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value', {
      '@type': type,
      '@name': name,
      '@value': typeof value === 'object' ? JSON.stringify(value) : value
    });
  };

  /**
   * Provide a helper method to display a warning.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   Arguments to use as replacements in Drupal.formatString.
   */
  Bootstrap.warn = function (message, args) {
    if (this.settings.dev && console.warn) {
      console.warn(Drupal.formatString(message, args));
    }
  };

  /**
   * Wraps a plugin with common functionality.
   *
   * @param {Function} constructor
   *   A plugin constructor being wrapped.
   * @param {Object|Function} plugin
   *   The plugin being wrapped.
   * @param {Boolean} [extend = false]
   *   Whether to add super extensibility.
   */
  Bootstrap.wrapPluginConstructor = function (constructor, plugin, extend) {
    var proto = constructor.prototype;

    // Add a jQuery UI like option getter/setter method.
    var option = this.option;
    if (proto.option === void(0)) {
      proto.option = function () {
        return option.apply(this, arguments);
      };
    }

    if (extend) {
      // Handle prototype properties separately.
      if (plugin.prototype !== void 0) {
        for (var key in plugin.prototype) {
          if (!plugin.prototype.hasOwnProperty(key)) continue;
          var value = plugin.prototype[key];
          if (typeof value === 'function') {
            proto[key] = this.superWrapper(proto[key] || function () {}, value);
          }
          else {
            proto[key] = $.isPlainObject(value) ? $.extend(true, {}, proto[key], value) : value;
          }
        }
      }
      delete plugin.prototype;

      // Handle static properties.
      for (key in plugin) {
        if (!plugin.hasOwnProperty(key)) continue;
        value = plugin[key];
        if (typeof value === 'function') {
          constructor[key] = this.superWrapper(constructor[key] || function () {}, value);
        }
        else {
          constructor[key] = $.isPlainObject(value) ? $.extend(true, {}, constructor[key], value) : value;
        }
      }
    }
  };

  // Add Bootstrap to the global Drupal object.
  Drupal.bootstrap = Drupal.bootstrap || Bootstrap;

})(window._, window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * @class Attributes
   *
   * Modifies attributes.
   *
   * @param {Object|Attributes} attributes
   *   An object to initialize attributes with.
   */
  var Attributes = function (attributes) {
    this.data = {};
    this.data['class'] = [];
    this.merge(attributes);
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @return {String}
   *   A rendered string suitable for inclusion in HTML markup.
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Renders the Attributes object as a plain object.
   *
   * @return {Object}
   *   A plain object suitable for inclusion in DOM elements.
   */
  Attributes.prototype.toPlainObject = function () {
    var object = {};
    var name, value;
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      object[name] = value;
    }
    return object;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var args = Array.prototype.slice.call(arguments);
    this.data['class'] = this.sanitizeClasses(this.data['class'].concat(args));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @return {Object}
   */
  Attributes.prototype.getData = function () {
    return _.extend({}, this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    return this.get('class', []);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} className
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (className) {
    className = this.sanitizeClasses(Array.prototype.slice.call(arguments));
    var classes = this.getClasses();
    for (var i = 0, l = className.length; i < l; i++) {
      // If one of the classes fails, immediately return false.
      if (_.indexOf(classes, className[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {Attributes|Node|jQuery|Object} object
   *   An Attributes object with existing data, a Node DOM element, a jQuery
   *   instance or a plain object where the key is the attribute name and the
   *   value is the attribute value.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (object, recursive) {
    // Immediately return if there is nothing to merge.
    if (!object) {
      return this;
    }

    // Get attributes from a jQuery element.
    if (object instanceof $) {
      object = object[0];
    }

    // Get attributes from a DOM element.
    if (object instanceof Node) {
      object = Array.prototype.slice.call(object.attributes).reduce(function (attributes, attribute) {
        attributes[attribute.name] = attribute.value;
        return attributes;
      }, {});
    }
    // Get attributes from an Attributes instance.
    else if (object instanceof Attributes) {
      object = object.getData();
    }
    // Otherwise, clone the object.
    else {
      object = _.extend({}, object);
    }

    // By this point, there should be a valid plain object.
    if (!$.isPlainObject(object)) {
      setTimeout(function () {
        throw new Error('Passed object is not supported: ' + object);
      });
      return this;
    }

    // Handle classes separately.
    if (object && object['class'] !== void 0) {
      this.addClass(object['class']);
      delete object['class'];
    }

    if (recursive === void 0 || recursive) {
      this.data = $.extend(true, {}, this.data, object);
    }
    else {
      this.data = $.extend({}, this.data, object);
    }

    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {...string|Array} className
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (className) {
    var remove = this.sanitizeClasses(Array.prototype.slice.apply(arguments));
    this.data['class'] = _.without(this.getClasses(), remove);
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(this.sanitizeClasses(oldValue), classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Ensures classes are flattened into a single is an array and sanitized.
   *
   * @param {...String|Array} classes
   *   The class or classes to sanitize.
   *
   * @return {Array}
   *   A sanitized array of classes.
   */
  Attributes.prototype.sanitizeClasses = function (classes) {
    return _.chain(Array.prototype.slice.call(arguments))
      // Flatten in case there's a mix of strings and arrays.
      .flatten()

      // Split classes that may have been added with a space as a separator.
      .map(function (string) {
        return string.split(' ');
      })

      // Flatten again since it was just split into arrays.
      .flatten()

      // Filter out empty items.
      .filter()

      // Clean the class to ensure it's a valid class name.
      .map(function (value) {
        return Attributes.cleanClass(value);
      })

      // Ensure classes are unique.
      .uniq()

      // Retrieve the final value.
      .value();
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    var obj = $.isPlainObject(name) ? name : {};
    if (typeof name === 'string') {
      obj[name] = value;
    }
    return this.merge(obj);
  };

  /**
   * Prepares a string for use as a CSS identifier (element, class, or ID name).
   *
   * Note: this is essentially a direct copy from
   * \Drupal\Component\Utility\Html::cleanCssIdentifier
   *
   * @param {string} identifier
   *   The identifier to clean.
   * @param {Object} [filter]
   *   An object of string replacements to use on the identifier.
   *
   * @return {string}
   *   The cleaned identifier.
   */
  Attributes.cleanClass = function (identifier, filter) {
    filter = filter || {
      ' ': '-',
      '_': '-',
      '/': '-',
      '[': '-',
      ']': ''
    };

    identifier = identifier.toLowerCase();

    if (filter['__'] === void 0) {
      identifier = identifier.replace('__', '#DOUBLE_UNDERSCORE#');
    }

    identifier = identifier.replace(Object.keys(filter), Object.keys(filter).map(function(key) { return filter[key]; }));

    if (filter['__'] === void 0) {
      identifier = identifier.replace('#DOUBLE_UNDERSCORE#', '__');
    }

    identifier = identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g, '');
    identifier = identifier.replace(['/^[0-9]/', '/^(-[0-9])|^(--)/'], ['_', '__']);

    return identifier;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} [attributes]
   *   An object to initialize attributes with.
   *
   * @return {Attributes}
   *   An Attributes instance.
   *
   * @constructor
   */
  Attributes.create = function (attributes) {
    return new Attributes(attributes);
  };

  window.Attributes = Attributes;

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap, Attributes) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes.create(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme('bootstrapIcon', 'refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes.create(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }

      // Attempt to, intelligently, provide a default button "type".
      if (!attributes.exists('type')) {
        attributes.set('type', attributes.hasClass('form-submit') ? 'submit' : 'button');
      }

      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
 * @file
 * Extends methods from core/misc/form.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Behavior for "forms_has_error_value_toggle" theme setting.
   */
  Drupal.behaviors.bootstrapForm = {
    attach: function (context) {
      if (drupalSettings.bootstrap && drupalSettings.bootstrap.forms_has_error_value_toggle) {
        var $context = $(context);
        $context.find('.form-item.has-error:not(.form-type-password.has-feedback)').once('error').each(function () {
          var $formItem = $(this);
          var $input = $formItem.find(':input');
          $input.on('keyup focus blur', function () {
            if (this.defaultValue !== void 0) {
              $formItem[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('has-error');
              $input[this.defaultValue !== this.value ? 'removeClass' : 'addClass']('error');
            }
          });
        });
      }
    }
  };


})(jQuery, this, Drupal, drupalSettings);
;
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.autosize=n.exports}}(this,function(e,t){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return-1<n.indexOf(e)},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);-1<t&&(n.splice(t,1),o.splice(t,1))}}),c=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){c=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!p.has(r)){var e,n=null,o=null,i=null,d=function(){r.clientWidth!==o&&a()},l=function(t){window.removeEventListener("resize",d,!1),r.removeEventListener("input",a,!1),r.removeEventListener("keyup",a,!1),r.removeEventListener("autosize:destroy",l,!1),r.removeEventListener("autosize:update",a,!1),Object.keys(t).forEach(function(e){r.style[e]=t[e]}),p.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",l,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",a,!1),window.addEventListener("resize",d,!1),r.addEventListener("input",a,!1),r.addEventListener("autosize:update",a,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",p.set(r,{destroy:l,update:a}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),n="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(n)&&(n=0),a()}function s(e){var t=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=t,r.style.overflowY=e}function u(){if(0!==r.scrollHeight){var e=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(r),t=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+n+"px",o=r.clientWidth,e.forEach(function(e){e.node.scrollTop=e.scrollTop}),t&&(document.documentElement.scrollTop=t)}}function a(){u();var e=Math.round(parseFloat(r.style.height)),t=window.getComputedStyle(r,null),n="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):r.offsetHeight;if(n<e?"hidden"===t.overflowY&&(s("scroll"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):"hidden"!==t.overflowY&&(s("hidden"),u(),n="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),i!==n){i=n;var o=c("autosize:resized");try{r.dispatchEvent(o)}catch(e){}}}}function i(e){var t=p.get(e);t&&t.destroy()}function d(e){var t=p.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return r(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default});;
!function(a){Drupal.behaviors.textareaAutogrow={attach:function(o,t){a(".form-control--autogrow",o).once("textareaAutogrow").each(function(){autosize.destroy(a(".form-control--autogrow")),autosize(a(".form-control--autogrow")),autosize.update(a(".form-control--autogrow"))})}},Drupal.behaviors.textareaFocus={attach:function(o,t){a("textarea:last").focusin(function(){a(this).parents(".main-container").toggleClass("open-keyboard")}),a("textarea:last").focusout(function(){a(this).parents(".main-container").toggleClass("open-keyboard")})}}}(jQuery);;
/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
;
!function(a){Drupal.behaviors.navbarCollapse={attach:function(n,o){a(".dropdown-toggle, #content").on("click",function(){a(".navbar-collapse").collapse("hide")})}}}(jQuery);;
!function(e){Drupal.behaviors.navbarProfileDropdown={attach:function(n,o){function a(){900<=window.innerWidth?e(".dropdown-menu",".dropdown.profile.not-logged-in").removeClass().addClass("menu nav navbar-nav"):e(".menu.nav.navbar-nav",".dropdown.profile.not-logged-in").removeClass().addClass("dropdown-menu")}a(),e(window).resize(_.debounce(function(){a()},500))}}}(jQuery);;
!function(a){Drupal.behaviors.initNavbarSearch={attach:function(e,o){a(".navbar__open-search-block").on("click",function(e){e.preventDefault(),a("body").addClass("mode-search"),a(".search-take-over .form-text").focus()}),a(".btn--close-search-take-over").on("click",function(){a("body").removeClass("mode-search"),a(".search-take-over .form-text").blur()}),a("body").keydown(function(e){27==e.keyCode&&(a("body").removeClass("mode-search"),a(".search-take-over .form-text").blur())})}}}(jQuery);;
!function(n,l){function i(){}window.likeAndDislikeService=(i.vote=function(t,a,i){n.ajax({type:"GET",url:drupalSettings.path.baseUrl+"like_and_dislike/"+a+"/"+i+"/"+t,success:function(i){n("#like-container-"+a+"-"+t+" a").get(0).className=i.operation.like,n("#dislike-container-"+a+"-"+t+" a").get(0).className=i.operation.dislike;var e=l.formatPlural(i.likes,"@count like","@count likes");n("#like-container-"+a+"-"+t).nextAll(".vote__count").find("a").html(e).attr("data-dialog-options",'{"title":"'+e+'", "width":"auto"}')}})},i)}(jQuery,Drupal);;
/**
 * @file
 * Bootstrap Popovers.
 */

var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
  "use strict";

  var $document = $(document);

  /**
   * Extend the Bootstrap Popover plugin constructor class.
   */
  Bootstrap.extendPlugin('popover', function (settings) {
    return {
      DEFAULTS: {
        animation: !!settings.popover_animation,
        autoClose: !!settings.popover_auto_close,
        enabled: settings.popover_enabled,
        html: !!settings.popover_html,
        placement: settings.popover_placement,
        selector: settings.popover_selector,
        trigger: settings.popover_trigger,
        title: settings.popover_title,
        content: settings.popover_content,
        delay: parseInt(settings.popover_delay, 10),
        container: settings.popover_container
      }
    };
  });

  /**
   * Bootstrap Popovers.
   *
   * @todo This should really be properly delegated if selector option is set.
   */
  Drupal.behaviors.bootstrapPopovers = {
    $activePopover: null,
    attach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      var _this = this;

      $document
        .on('show.bs.popover', '[data-toggle=popover]', function () {
          var $trigger = $(this);
          var popover = $trigger.data('bs.popover');

          // Only keep track of clicked triggers that we're manually handling.
          if (popover.options.originalTrigger === 'click') {
            if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($trigger)) {
              _this.$activePopover.popover('hide');
            }
            _this.$activePopover = $trigger;
          }
        })
        // Unfortunately, :focusable is only made available when using jQuery
        // UI. While this would be the most semantic pseudo selector to use
        // here, jQuery UI may not always be loaded. Instead, just use :visible
        // here as this just needs some sort of selector here. This activates
        // delegate binding to elements in jQuery so it can work it's bubbling
        // focus magic since elements don't really propagate their focus events.
        // @see https://www.drupal.org/project/bootstrap/issues/3013236
        .on('focus.bs.popover', ':visible', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !_this.$activePopover.is($target) && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('click.bs.popover', function (e) {
          var $target = $(e.target);
          if (_this.$activePopover && _this.getOption('autoClose') && !$target.is('[data-toggle=popover]') && !$target.closest('.popover.in')[0]) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
        .on('keyup.bs.popover', function (e) {
          if (_this.$activePopover && _this.getOption('autoClose') && e.which === 27) {
            _this.$activePopover.popover('hide');
            _this.$activePopover = null;
          }
        })
      ;

      var elements = $(context).find('[data-toggle=popover]').toArray();
      for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        var options = $.extend({}, $.fn.popover.Constructor.DEFAULTS, $element.data());

        // Store the original trigger.
        options.originalTrigger = options.trigger;

        // If the trigger is "click", then we'll handle it manually here.
        if (options.trigger === 'click') {
          options.trigger = 'manual';
        }

        // Retrieve content from a target element.
        var target = options.target || $element.is('a[href^="#"]') && $element.attr('href');
        var $target = $document.find(target).clone();
        if (!options.content && $target[0]) {
          $target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');
          options.content = $target.wrap('<div/>').parent()[options.html ? 'html' : 'text']() || '';
        }

        // Initialize the popover.
        $element.popover(options);

        // Handle clicks manually.
        if (options.originalTrigger === 'click') {
          // To ensure the element is bound multiple times, remove any
          // previously set event handler before adding another one.
          $element
            .off('click.drupal.bootstrap.popover')
            .on('click.drupal.bootstrap.popover', function (e) {
              $(this).popover('toggle');
              e.preventDefault();
              e.stopPropagation();
            })
          ;
        }
      }
    },
    detach: function (context) {
      // Immediately return if popovers are not available.
      if (!$.fn.popover || !$.fn.popover.Constructor.DEFAULTS.enabled) {
        return;
      }

      // Destroy all popovers.
      $(context).find('[data-toggle="popover"]')
        .off('click.drupal.bootstrap.popover')
        .popover('destroy')
      ;
    },
    getOption: function(name, defaultValue, element) {
      var $element = element ? $(element) : this.$activePopover;
      var options = $.extend(true, {}, $.fn.popover.Constructor.DEFAULTS, ($element && $element.data('bs.popover') || {}).options);
      if (options[name] !== void 0) {
        return options[name];
      }
      return defaultValue !== void 0 ? defaultValue : void 0;
    }
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);
;
/** @license React v16.10.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';(function(v,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m():"function"===typeof define&&define.amd?define(m):v.React=m()})(this,function(){function v(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
return a}function m(a,b,c){this.props=a;this.context=b;this.refs=da;this.updater=c||ea}function fa(){}function M(a,b,c){this.props=a;this.context=b;this.refs=da;this.updater=c||ea}function ha(a,b,c){var d,e={},p=null,f=null;if(null!=b)for(d in void 0!==b.ref&&(f=b.ref),void 0!==b.key&&(p=""+b.key),b)ia.call(b,d)&&!ja.hasOwnProperty(d)&&(e[d]=b[d]);var g=arguments.length-2;if(1===g)e.children=c;else if(1<g){for(var k=Array(g),h=0;h<g;h++)k[h]=arguments[h+2];e.children=k}if(a&&a.defaultProps)for(d in g=
a.defaultProps,g)void 0===e[d]&&(e[d]=g[d]);return{$$typeof:z,type:a,key:p,ref:f,props:e,_owner:N.current}}function wa(a,b){return{$$typeof:z,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===z}function xa(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ka(a,b,c,d){if(D.length){var e=D.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=d;e.count=0;return e}return{result:a,keyPrefix:b,
func:c,context:d,count:0}}function la(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>D.length&&D.push(a)}function P(a,b,c,d){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var p=!1;if(null===a)p=!0;else switch(e){case "string":case "number":p=!0;break;case "object":switch(a.$$typeof){case z:case ya:p=!0}}if(p)return c(d,a,""===b?"."+Q(a,0):b),1;p=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){e=a[f];var g=b+Q(e,f);p+=P(e,g,c,d)}else if(null===
a||"object"!==typeof a?g=null:(g=ma&&a[ma]||a["@@iterator"],g="function"===typeof g?g:null),"function"===typeof g)for(a=g.call(a),f=0;!(e=a.next()).done;)e=e.value,g=b+Q(e,f++),p+=P(e,g,c,d);else if("object"===e)throw c=""+a,v(Error(31),"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,"");return p}function R(a,b,c){return null==a?0:P(a,"",b,c)}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?xa(a.key):b.toString(36)}function za(a,b,c){a.func.call(a.context,
b,a.count++)}function Aa(a,b,c){var d=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?S(a,d,c,function(a){return a}):null!=a&&(O(a)&&(a=wa(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(na,"$&/")+"/")+c)),d.push(a))}function S(a,b,c,d,e){var f="";null!=c&&(f=(""+c).replace(na,"$&/")+"/");b=ka(b,f,d,e);R(a,Aa,b);la(b)}function t(){var a=oa.current;if(null===a)throw v(Error(321));return a}function T(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),
e=a[d];if(void 0!==e&&0<E(e,b))a[d]=b,a[c]=e,c=d;else break a}}function n(a){a=a[0];return void 0===a?null:a}function F(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var f=2*(d+1)-1,h=a[f],g=f+1,k=a[g];if(void 0!==h&&0>E(h,c))void 0!==k&&0>E(k,h)?(a[d]=k,a[g]=c,d=g):(a[d]=h,a[f]=c,d=f);else if(void 0!==k&&0>E(k,c))a[d]=k,a[g]=c,d=g;else break a}}return b}return null}function E(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function G(a){for(var b=
n(u);null!==b;){if(null===b.callback)F(u);else if(b.startTime<=a)F(u),b.sortIndex=b.expirationTime,T(q,b);else break;b=n(u)}}function U(a){A=!1;G(a);if(!w)if(null!==n(q))w=!0,B(V);else{var b=n(u);null!==b&&H(U,b.startTime-a)}}function V(a,b){w=!1;A&&(A=!1,W());I=!0;var c=h;try{G(b);for(l=n(q);null!==l&&(!(l.expirationTime>b)||a&&!X());){var d=l.callback;if(null!==d){l.callback=null;h=l.priorityLevel;var e=d(l.expirationTime<=b);b=r();"function"===typeof e?l.callback=e:l===n(q)&&F(q);G(b)}else F(q);
l=n(q)}if(null!==l)var f=!0;else{var m=n(u);null!==m&&H(U,m.startTime-b);f=!1}return f}finally{l=null,h=c,I=!1}}function pa(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var f="function"===typeof Symbol&&Symbol.for,z=f?Symbol.for("react.element"):60103,ya=f?Symbol.for("react.portal"):60106,x=f?Symbol.for("react.fragment"):60107,Y=f?Symbol.for("react.strict_mode"):60108,Ba=f?Symbol.for("react.profiler"):60114,Ca=f?Symbol.for("react.provider"):
60109,Da=f?Symbol.for("react.context"):60110,Ea=f?Symbol.for("react.forward_ref"):60112,Fa=f?Symbol.for("react.suspense"):60113,Ga=f?Symbol.for("react.suspense_list"):60120,Ha=f?Symbol.for("react.memo"):60115,Ia=f?Symbol.for("react.lazy"):60116;f&&Symbol.for("react.fundamental");f&&Symbol.for("react.responder");f&&Symbol.for("react.scope");var ma="function"===typeof Symbol&&Symbol.iterator,qa=Object.getOwnPropertySymbols,Ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,
J=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(d){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===
a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var d,e=1;e<arguments.length;e++){var f=Object(arguments[e]);for(var h in f)Ja.call(f,h)&&(c[h]=f[h]);if(qa){d=qa(f);for(var g=0;g<d.length;g++)Ka.call(f,d[g])&&(c[d[g]]=f[d[g]])}}return c},ea={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,b,c,d){}},da={};m.prototype.isReactComponent={};m.prototype.setState=function(a,
b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw v(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};m.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};fa.prototype=m.prototype;f=M.prototype=new fa;f.constructor=M;J(f,m.prototype);f.isPureReactComponent=!0;var oa={current:null},N={current:null},ia=Object.prototype.hasOwnProperty,ja={key:!0,ref:!0,__self:!0,__source:!0},na=/\/+/g,D=[],Z;if("undefined"===typeof window||"function"!==
typeof MessageChannel){var C=null,ra=null,sa=function(){if(null!==C)try{var a=r();C(!0,a);C=null}catch(b){throw setTimeout(sa,0),b;}},La=Date.now();var r=function(){return Date.now()-La};var B=function(a){null!==C?setTimeout(B,0,a):(C=a,setTimeout(sa,0))};var H=function(a,b){ra=setTimeout(a,b)};var W=function(){clearTimeout(ra)};var X=function(){return!1};f=Z=function(){}}else{var aa=window.performance,ta=window.Date,Ma=window.setTimeout,Na=window.clearTimeout;f=window.requestAnimationFrame;var y=
window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof f&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof aa&&"function"===typeof aa.now)r=function(){return aa.now()};else{var Oa=
ta.now();r=function(){return ta.now()-Oa}}var K=!1,L=null,ba=-1,ua=5,va=0;X=function(){return r()>=va};f=function(){};Z=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):ua=0<a?Math.floor(1E3/a):33.33};y=new MessageChannel;var ca=y.port2;y.port1.onmessage=function(){if(null!==L){var a=r();va=a+ua;try{L(!0,a)?ca.postMessage(null):(K=!1,L=null)}catch(b){throw ca.postMessage(null),b;}}else K=!1};B=
function(a){L=a;K||(K=!0,ca.postMessage(null))};H=function(a,b){ba=Ma(function(){a(r())},b)};W=function(){Na(ba);ba=-1}}var q=[],u=[],Pa=1,l=null,h=3,I=!1,w=!1,A=!1,Qa=0;y={ReactCurrentDispatcher:oa,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:J};J(y,{Scheduler:{unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;
default:a=3}var c=h;h=a;try{return b()}finally{h=c}},unstable_next:function(a){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var c=h;h=b;try{return a()}finally{h=c}},unstable_scheduleCallback:function(a,b,c){var d=r();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:pa(a)}else c=pa(a),e=d;c=e+c;a={id:Pa++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,T(u,a),null===n(q)&&a===
n(u)&&(A?W():A=!0,H(U,e-d))):(a.sortIndex=c,T(q,a),w||I||(w=!0,B(V)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=h;return function(){var c=h;h=b;try{return a.apply(this,arguments)}finally{h=c}}},unstable_getCurrentPriorityLevel:function(){return h},unstable_shouldYield:function(){var a=r();G(a);var b=n(q);return b!==l&&null!==l&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<l.expirationTime||X()},unstable_requestPaint:f,unstable_continueExecution:function(){w||
I||(w=!0,B(V))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return n(q)},get unstable_now(){return r},get unstable_forceFrameRate(){return Z},unstable_Profiling:null},SchedulerTracing:{get __interactionsRef(){return null},get __subscriberRef(){return null},unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Qa},unstable_trace:function(a,b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},
unstable_unsubscribe:function(a){}}});x={Children:{map:function(a,b,c){if(null==a)return a;var d=[];S(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ka(null,null,b,c);R(a,za,b);la(b)},count:function(a){return R(a,function(){return null},null)},toArray:function(a){var b=[];S(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw v(Error(143));return a}},createRef:function(){return{current:null}},Component:m,PureComponent:M,createContext:function(a,b){void 0===
b&&(b=null);a={$$typeof:Da,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Ca,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Ea,render:a}},lazy:function(a){return{$$typeof:Ia,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Ha,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return t().useCallback(a,b)},useContext:function(a,b){return t().useContext(a,b)},useEffect:function(a,
b){return t().useEffect(a,b)},useImperativeHandle:function(a,b,c){return t().useImperativeHandle(a,b,c)},useDebugValue:function(a,b){},useLayoutEffect:function(a,b){return t().useLayoutEffect(a,b)},useMemo:function(a,b){return t().useMemo(a,b)},useReducer:function(a,b,c){return t().useReducer(a,b,c)},useRef:function(a){return t().useRef(a)},useState:function(a){return t().useState(a)},Fragment:x,Profiler:Ba,StrictMode:Y,Suspense:Fa,unstable_SuspenseList:Ga,createElement:ha,cloneElement:function(a,
b,c){if(null===a||void 0===a)throw v(Error(267),a);var d=J({},a.props),e=a.key,f=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,h=N.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(k in b)ia.call(b,k)&&!ja.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==g?g[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){g=Array(k);for(var l=0;l<k;l++)g[l]=arguments[l+2];d.children=g}return{$$typeof:z,type:a.type,key:e,ref:f,props:d,_owner:h}},
createFactory:function(a){var b=ha.bind(null,a);b.type=a;return b},isValidElement:O,version:"16.10.2",unstable_withSuspenseConfig:function(a,b){a()},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:y};x=(Y={default:x},x)||Y;return x.default||x});
;
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(ka,m){"object"===typeof exports&&"undefined"!==typeof module?module.exports=m(require("react")):"function"===typeof define&&define.amd?define(["react"],m):ka.ReactDOM=m(ka.React)})(this,function(ka){function m(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
return a}function Ze(){if(jc)for(var a in Xa){var b=Xa[a],c=jc.indexOf(a);if(!(-1<c))throw m(Error(96),a);if(!kc[c]){if(!b.extractEvents)throw m(Error(97),a);kc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(kd.hasOwnProperty(h))throw m(Error(99),h);kd[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&$e(k[e],g,h);e=!0}else f.registrationName?($e(f.registrationName,g,h),e=!0):e=!1;if(!e)throw m(Error(98),d,a);}}}}function $e(a,b,c){if(Ya[a])throw m(Error(100),
a);Ya[a]=b;ld[a]=b.eventTypes[c].dependencies}function Uh(a,b,c,d,e,f,g,h,k){ub=!1;lc=null;Vh.apply(Wh,arguments)}function Xh(a,b,c,d,e,f,g,h,k){Uh.apply(this,arguments);if(ub){if(ub){var l=lc;ub=!1;lc=null}else throw m(Error(198));mc||(mc=!0,md=l)}}function af(a,b,c){var d=a.type||"unknown-event";a.currentTarget=bf(c);Xh(d,b,void 0,a);a.currentTarget=null}function Za(a,b){if(null==b)throw m(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);
return a}return Array.isArray(b)?[a].concat(b):[a,b]}function nd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function nc(a){null!==a&&(vb=Za(vb,a));a=vb;vb=null;if(a){nd(a,Yh);if(vb)throw m(Error(95));if(mc)throw a=md,mc=!1,md=null,a;}}function cf(a,b){var c=a.stateNode;if(!c)return null;var d=od(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw m(Error(231),b,typeof c);return c}function oc(a){if(a[la])return a[la];for(;!a[la];)if(a.parentNode)a=a.parentNode;else return null;a=a[la];return 5===a.tag||6===a.tag?a:null}function df(a){a=a[la];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw m(Error(33));}function pd(a){return a[pc]||
null}function ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function ef(a,b,c){if(b=cf(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Za(c._dispatchListeners,b),c._dispatchInstances=Za(c._dispatchInstances,a)}function Zh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=ma(b);for(b=c.length;0<b--;)ef(c[b],"captured",a);for(b=0;b<c.length;b++)ef(c[b],"bubbled",a)}}function qd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&
(b=cf(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Za(c._dispatchListeners,b),c._dispatchInstances=Za(c._dispatchInstances,a))}function $h(a){a&&a.dispatchConfig.registrationName&&qd(a._targetInst,null,a)}function $a(a){nd(a,Zh)}function qc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function rc(a){if(rd[a])return rd[a];if(!ab[a])return a;var b=ab[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ff)return rd[a]=b[c];return a}function gf(){if(sc)return sc;
var a,b=sd,c=b.length,d,e="value"in va?va.value:va.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return sc=e.slice(a,1<d?1-d:void 0)}function tc(){return!0}function uc(){return!1}function Q(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:
!1===c.returnValue)?tc:uc;this.isPropagationStopped=uc;return this}function ai(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function bi(a){if(!(a instanceof this))throw m(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function hf(a){a.eventPool=[];a.getPooled=ai;a.release=bi}function jf(a,b){switch(a){case "keyup":return-1!==ci.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;
default:return!1}}function kf(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}function di(a,b){switch(a){case "compositionend":return kf(b);case "keypress":if(32!==b.which)return null;lf=!0;return mf;case "textInput":return a=b.data,a===mf&&lf?null:a;default:return null}}function ei(a,b){if(bb)return"compositionend"===a||!td&&jf(a,b)?(a=gf(),sc=sd=va=null,bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&
1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return nf&&"ko"!==b.locale?null:b.data;default:return null}}function of(a){if(a=pf(a)){if("function"!==typeof ud)throw m(Error(280));var b=od(a.stateNode);ud(a.stateNode,a.type,b)}}function qf(a){cb?db?db.push(a):db=[a]:cb=a}function rf(){if(cb){var a=cb,b=db;db=cb=null;of(a);if(b)for(a=0;a<b.length;a++)of(b[a])}}function vd(){if(null!==cb||null!==db)wd(),rf()}function sf(a){var b=a&&a.nodeName&&
a.nodeName.toLowerCase();return"input"===b?!!fi[a.type]:"textarea"===b?!0:!1}function xd(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tf(a){if(!wa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function uf(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function gi(a){var b=
uf(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;
delete a[b]}}}}function vc(a){a._valueTracker||(a._valueTracker=gi(a))}function vf(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=uf(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function wb(a){if(null===a||"object"!==typeof a)return null;a=wf&&a[wf]||a["@@iterator"];return"function"===typeof a?a:null}function xa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;
switch(a){case ya:return"Fragment";case eb:return"Portal";case wc:return"Profiler";case xf:return"StrictMode";case xc:return"Suspense";case yd:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case yf:return"Context.Consumer";case zf:return"Context.Provider";case zd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Ad:return xa(a.type);case Af:if(a=1===a._status?a._result:null)return xa(a)}return null}function Bd(a){var b=
"";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=xa(a.type);c=null;d&&(c=xa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(hi,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}function ii(a){if(Bf.call(Cf,a))return!0;if(Bf.call(Df,a))return!1;if(ji.test(a))return Cf[a]=!0;Df[a]=!0;return!1}function ki(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;
case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function li(a,b,c,d){if(null===b||"undefined"===typeof b||ki(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=
a;this.type=b;this.sanitizeURL=f}function Cd(a,b,c,d){var e=H.hasOwnProperty(b)?H[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(li(b,c,e,d)&&(c=null),d||null===e?ii(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,
c))))}function za(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Dd(a,b){var c=b.checked;return K({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Ef(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=za(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===
b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Ff(a,b){b=b.checked;null!=b&&Cd(a,"checked",b,!1)}function Ed(a,b){Ff(a,b);var c=za(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fd(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fd(a,b.type,za(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=
!!b.defaultChecked)}function Gf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function Fd(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:
a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hf(a,b,c){a=Q.getPooled(If.change,a,b,c);a.type="change";qf(c);$a(a);return a}function mi(a){nc(a)}function yc(a){var b=Ja(a);if(vf(b))return a}function ni(a,b){if("change"===a)return b}function Jf(){xb&&(xb.detachEvent("onpropertychange",Kf),yb=xb=null)}function Kf(a){if("value"===a.propertyName&&yc(yb))if(a=Hf(yb,a,xd(a)),Z)nc(a);else{Z=!0;try{Gd(mi,a)}finally{Z=!1,vd()}}}function oi(a,b,c){"focus"===a?(Jf(),xb=b,yb=c,xb.attachEvent("onpropertychange",
Kf)):"blur"===a&&Jf()}function pi(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return yc(yb)}function qi(a,b){if("click"===a)return yc(b)}function ri(a,b){if("input"===a||"change"===a)return yc(b)}function si(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ti[a])?!!b[a]:!1}function Hd(a){return si}function Ka(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function zb(a,b){if(Ka(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===
b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!ui.call(b,c[d])||!Ka(a[c[d]],b[c[d]]))return!1;return!0}function Lf(a,b){return{responder:a,props:b}}function Ab(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Mf(a){if(2!==Ab(a))throw m(Error(188));}function vi(a){var b=a.alternate;if(!b){b=Ab(a);if(3===b)throw m(Error(188));
return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Mf(e),a;if(f===d)return Mf(e),b;f=f.sibling}throw m(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw m(Error(189));
}}if(c.alternate!==d)throw m(Error(190));}if(3!==c.tag)throw m(Error(188));return c.stateNode.current===c?a:b}function Nf(a){a=vi(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function zc(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:
0}function Of(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=oc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=xd(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<kc.length;h++){var k=kc[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Za(g,k))}nc(g)}}function v(a,b){Bb(b,a,!1)}function Bb(a,b,c){switch(wi(b)){case 0:var d=xi.bind(null,b,1);
break;case 1:d=yi.bind(null,b,1);break;default:d=Ac.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function xi(a,b,c){Z||wd();var d=Ac,e=Z;Z=!0;try{Pf(d,a,b,c)}finally{(Z=e)||vd()}}function yi(a,b,c){Ac(a,b,c)}function Ac(a,b,c){if(Bc){b=xd(c);b=oc(b);null===b||"number"!==typeof b.tag||2===Ab(b)||(b=null);if(Cc.length){var d=Cc.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Z)Of(c,void 0);
else{Z=!0;try{Qf(Of,c,void 0)}finally{Z=!1,vd()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Cc.length&&Cc.push(a)}}}function Rf(a){var b=Sf.get(a);void 0===b&&(b=new Set,Sf.set(a,b));return b}function Id(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Tf(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Uf(a,b){var c=Tf(a);a=0;for(var d;c;){if(3===
c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Tf(c)}}function Vf(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Vf(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Wf(){for(var a=window,b=Id();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=
!1}if(c)a=b.contentWindow;else break;b=Id(a.document)}return b}function Jd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Kd||null==fb||fb!==Id(c))return null;c=fb;"selectionStart"in c&&Jd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&
c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Cb&&zb(Cb,c)?null:(Cb=c,a=Q.getPooled(Yf.select,Ld,a,b),a.type="select",a.target=fb,$a(a),a)}function zi(a){var b="";ka.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Md(a,b){a=K({children:void 0},b);if(b=zi(b.children))a.children=b;return a}function gb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+
c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+za(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Nd(a,b){if(null!=b.dangerouslySetInnerHTML)throw m(Error(91));return K({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Zf(a,b){var c=
b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw m(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw m(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:za(c)}}function $f(a,b){var c=za(b.value),d=za(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ag(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}}function Od(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ag(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function bg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Db.hasOwnProperty(a)&&Db[a]?(""+b).trim():b+"px"}function cg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=bg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,
e):a[c]=e}}function Pd(a,b){if(b){if(Ai[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw m(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw m(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw m(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw m(Error(62),"");}}function Qd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function na(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Rf(a);b=ld[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Bb(a,"scroll",!0);break;case "focus":case "blur":Bb(a,"focus",!0);Bb(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":tf(e)&&Bb(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Eb.indexOf(e)&&v(e,a)}c.add(e)}}}function Dc(){}function dg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Rd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Fb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function w(a,b){0>hb||(a.current=Sd[hb],Sd[hb]=null,hb--)}function D(a,b,c){hb++;Sd[hb]=a.current;a.current=b}function ib(a,b){var c=a.type.contextTypes;if(!c)return Aa;
var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function G(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ec(a){w(M,a);w(I,a)}function Td(a){w(M,a);w(I,a)}function eg(a,b,c){if(I.current!==Aa)throw m(Error(168));D(I,b,a);D(M,c,a)}function fg(a,b,c){var d=
a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw m(Error(108),xa(b)||"Unknown",e);return K({},c,d)}function Fc(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Aa;La=I.current;D(I,b,a);D(M,M.current,a);return!0}function gg(a,b,c){var d=a.stateNode;if(!d)throw m(Error(169));c?(b=fg(a,b,La),d.__reactInternalMemoizedMergedChildContext=b,w(M,a),w(I,a),D(I,b,a)):w(M,a);D(M,c,a)}function Ud(){switch(Bi()){case Gc:return 99;
case hg:return 98;case ig:return 97;case jg:return 96;case kg:return 95;default:throw m(Error(332));}}function lg(a){switch(a){case 99:return Gc;case 98:return hg;case 97:return ig;case 96:return jg;case 95:return kg;default:throw m(Error(332));}}function Ma(a,b){a=lg(a);return Ci(a,b)}function Vd(a,b,c){a=lg(a);return Wd(a,b,c)}function Hc(a){null===oa?(oa=[a],Xd=Wd(Gc,mg)):oa.push(a);return ng}function V(){null!==Xd&&og(Xd);mg()}function mg(){if(!Yd&&null!==oa){Yd=!0;var a=0;try{var b=oa;Ma(99,
function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});oa=null}catch(c){throw null!==oa&&(oa=oa.slice(a+1)),Wd(Gc,V),c;}finally{Yd=!1}}}function Zd(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function X(a,b){if(a&&a.defaultProps){b=K({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function Di(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;
default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}function $d(){Ic=jb=Jc=null}function pg(a,b){var c=a.type._context;D(ae,c._currentValue,a);c._currentValue=b}function be(a){var b=ae.current;w(ae,a);a.type._context._currentValue=b}function qg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<
b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function kb(a,b){Jc=a;Ic=jb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(pa=!0),a.firstContext=null)}function aa(a,b){if(Ic!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ic=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===jb){if(null===Jc)throw m(Error(308));jb=b;
Jc.dependencies={expirationTime:0,firstContext:b,responders:null}}else jb=jb.next=b}return a._currentValue}function Kc(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function ce(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,
lastCapturedEffect:null}}function Ba(a,b){return{expirationTime:a,suspenseConfig:b,tag:rg,payload:null,callback:null,next:null,nextEffect:null}}function Lc(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}function Ca(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Kc(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Kc(a.memoizedState),e=c.updateQueue=Kc(c.memoizedState)):
d=a.updateQueue=ce(e):null===e&&(e=c.updateQueue=ce(d));null===e||d===e?Lc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Lc(d,b),Lc(e,b)):(Lc(d,b),e.lastUpdate=b)}function sg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Kc(a.memoizedState):tg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function tg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ce(b));return b}function ug(a,b,c,d,e,f){switch(c.tag){case 1:return a=
c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case rg:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return K({},d,e);case Mc:Da=!0}return d}function Gb(a,b,c,d,e){Da=!1;b=tg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(wg(m,k.suspenseConfig),l=ug(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=
b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var n=k.expirationTime;n<e?(null===m&&(m=k,null===g&&(f=l)),h<n&&(h=n)):(l=ug(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===
m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}function xg(a,b,c,d){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);yg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;yg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function yg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;
var d=b;if("function"!==typeof c)throw m(Error(191),c);c.call(d)}a=a.nextEffect}}function Nc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:K({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}function zg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!zb(c,d)||!zb(e,f):!0}function Ag(a,b,c,d){var e=!1;d=Aa;var f=b.contextType;"object"===
typeof f&&null!==f?f=aa(f):(d=G(b)?La:I.current,e=b.contextTypes,f=(e=null!==e&&void 0!==e)?ib(a,d):Aa);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Oc;a.stateNode=b;b._reactInternalFiber=a;e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Bg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Oc.enqueueReplaceState(b,b.state,null)}function de(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Cg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=aa(f):(f=G(b)?La:I.current,e.context=ib(a,f));f=a.updateQueue;null!==f&&(Gb(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Nc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||
"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Oc.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Gb(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}function Hb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=
c._owner;var d=void 0;if(c){if(1!==c.tag)throw m(Error(309));d=c.stateNode}if(!d)throw m(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Cg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw m(Error(284));if(!c._owner)throw m(Error(290),a);}return a}function Pc(a,b){if("textarea"!==a.type)throw m(Error(31),"[object Object]"===Object.prototype.toString.call(b)?
"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}function Dg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Na(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;
d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ee(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Hb(a,b,c),d.return=a,d;d=Rc(c.type,c.key,c.props,null,a.mode,d);d.ref=Hb(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==
c.containerInfo||b.stateNode.implementation!==c.implementation)return b=fe(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ea(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function q(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ee(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Sc:return c=Rc(b.type,b.key,b.props,null,a.mode,c),c.ref=Hb(a,null,b),c.return=a,c;
case eb:return b=fe(b,a.mode,c),b.return=a,b}if(Tc(b)||wb(b))return b=Ea(b,a.mode,c,null),b.return=a,b;Pc(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Sc:return c.key===e?c.type===ya?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case eb:return c.key===e?l(a,b,c,d):null}if(Tc(c)||wb(c))return null!==e?null:n(a,b,c,d,null);Pc(a,c)}return null}function u(a,
b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Sc:return a=a.get(null===d.key?c:d.key)||null,d.type===ya?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case eb:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Tc(d)||wb(d))return a=a.get(c)||null,n(b,a,d,e,null);Pc(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,n=g,r=g=0,y=null;null!==n&&r<h.length;r++){n.index>r?(y=n,n=null):y=n.sibling;
var p=x(e,n,h[r],k);if(null===p){null===n&&(n=y);break}a&&n&&null===p.alternate&&b(e,n);g=f(p,g,r);null===m?l=p:m.sibling=p;m=p;n=y}if(r===h.length)return c(e,n),l;if(null===n){for(;r<h.length;r++)n=q(e,h[r],k),null!==n&&(g=f(n,g,r),null===m?l=n:m.sibling=n,m=n);return l}for(n=d(e,n);r<h.length;r++)y=u(n,e,r,h[r],k),null!==y&&(a&&null!==y.alternate&&n.delete(null===y.key?r:y.key),g=f(y,g,r),null===m?l=y:m.sibling=y,m=y);a&&n.forEach(function(a){return b(e,a)});return l}function z(e,g,h,k){var l=wb(h);
if("function"!==typeof l)throw m(Error(150));h=l.call(h);if(null==h)throw m(Error(151));for(var n=l=null,r=g,y=g=0,Qc=null,p=h.next();null!==r&&!p.done;y++,p=h.next()){r.index>y?(Qc=r,r=null):Qc=r.sibling;var t=x(e,r,p.value,k);if(null===t){null===r&&(r=Qc);break}a&&r&&null===t.alternate&&b(e,r);g=f(t,g,y);null===n?l=t:n.sibling=t;n=t;r=Qc}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;y++,p=h.next())p=q(e,p.value,k),null!==p&&(g=f(p,g,y),null===n?l=p:n.sibling=p,n=p);return l}for(r=d(e,r);!p.done;y++,
p=h.next())p=u(r,e,y,p.value,k),null!==p&&(a&&null!==p.alternate&&r.delete(null===p.key?y:p.key),g=f(p,g,y),null===n?l=p:n.sibling=p,n=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ya&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Sc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ya:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ya?f.props.children:
f.props,h);d.ref=Hb(a,k,f);d.return=a;a=d;break a}c(a,k);break}else b(a,k);k=k.sibling}f.type===ya?(d=Ea(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rc(f.type,f.key,f.props,null,a.mode,h),h.ref=Hb(a,d,f),h.return=a,a=h)}return g(a);case eb:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=fe(f,a.mode,
h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=ee(f,a.mode,h),d.return=a,a=d),g(a);if(Tc(f))return v(a,d,f,h);if(wb(f))return z(a,d,f,h);l&&Pc(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,m(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}function Oa(a){if(a===Ib)throw m(Error(174));return a}function ge(a,b){D(Jb,b,a);D(Kb,a,a);D(ba,Ib,a);
var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Od(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Od(b,c)}w(ba,a);D(ba,b,a)}function lb(a){w(ba,a);w(Kb,a);w(Jb,a)}function Fg(a){Oa(Jb.current);var b=Oa(ba.current);var c=Od(b,a.type);b!==c&&(D(Kb,a,a),D(ba,c,a))}function he(a){Kb.current===a&&(w(ba,a),w(Kb,a))}function Uc(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==
(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function S(){throw m(Error(321));}function ie(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ka(a[c],b[c]))return!1;return!0}function je(a,b,c,d,e,f){Lb=f;Fa=b;ca=null!==a?a.memoizedState:null;Vc.current=null===ca?Ei:Gg;b=c(d,e);if(Mb){do Mb=!1,Nb+=
1,ca=null!==a?a.memoizedState:null,mb=nb,da=R=F=null,Vc.current=Gg,b=c(d,e);while(Mb);qa=null;Nb=0}Vc.current=Wc;a=Fa;a.memoizedState=nb;a.expirationTime=Ob;a.updateQueue=da;a.effectTag|=Pb;a=null!==F&&null!==F.next;Lb=0;mb=R=nb=ca=F=Fa=null;Ob=0;da=null;Pb=0;if(a)throw m(Error(300));return b}function Hg(){Vc.current=Wc;Lb=0;mb=R=nb=ca=F=Fa=null;Ob=0;da=null;Pb=0;Mb=!1;qa=null;Nb=0}function ob(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?nb=R=a:R=R.next=
a;return R}function Qb(){if(null!==mb)R=mb,mb=R.next,F=ca,ca=null!==F?F.next:null;else{if(null===ca)throw m(Error(310));F=ca;var a={memoizedState:F.memoizedState,baseState:F.baseState,queue:F.queue,baseUpdate:F.baseUpdate,next:null};R=null===R?nb=a:R.next=a;ca=F.next}return R}function Ig(a,b){return"function"===typeof b?b(a):b}function Jg(a,b,c){b=Qb();c=b.queue;if(null===c)throw m(Error(311));c.lastRenderedReducer=a;if(0<Nb){var d=c.dispatch;if(null!==qa){var e=qa.get(c);if(void 0!==e){qa.delete(c);
var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);Ka(f,b.memoizedState)||(pa=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Lb?(l||(l=!0,h=g,e=f),n>Ob&&(Ob=n)):(wg(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=
k.next}while(null!==k&&k!==d);l||(h=g,e=f);Ka(f,b.memoizedState)||(pa=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}function ke(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===da?(da={lastEffect:null},da.lastEffect=a.next=a):(b=da.lastEffect,null===b?da.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,da.lastEffect=a));return a}function le(a,b,c,d){var e=ob();Pb|=a;e.memoizedState=ke(b,c,void 0,void 0===d?null:d)}function me(a,
b,c,d){var e=Qb();d=void 0===d?null:d;var f=void 0;if(null!==F){var g=F.memoizedState;f=g.destroy;if(null!==d&&ie(d,g.deps)){ke(pb,c,f,d);return}}Pb|=a;e.memoizedState=ke(b,c,f,d)}function Kg(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Lg(a,b){}function Mg(a,b,c){if(!(25>Nb))throw m(Error(301));var d=a.alternate;if(a===Fa||null!==d&&d===Fa)if(Mb=!0,a={expirationTime:Lb,suspenseConfig:null,
action:c,eagerReducer:null,eagerState:null,next:null},null===qa&&(qa=new Map),c=qa.get(b),void 0===c)qa.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=ea(),f=Rb.suspense;e=qb(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,
l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(Ka(l,k))return}catch(vg){}finally{}Sb(a,e)}}function Ng(a,b){var c=fa(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Og(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?
null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function Pg(a){if(Pa){var b=rb;if(b){var c=b;if(!Og(a,b)){b=Fb(c.nextSibling);if(!b||!Og(a,b)){a.effectTag|=2;Pa=!1;ra=a;return}Ng(ra,c)}ra=a;rb=Fb(b.firstChild)}else a.effectTag|=2,Pa=!1,ra=a}}function Qg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;ra=a}function Xc(a){if(a!==ra)return!1;if(!Pa)return Qg(a),Pa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Rd(b,a.memoizedProps))for(b=rb;b;)Ng(a,
b),b=Fb(b.nextSibling);Qg(a);rb=ra?Fb(a.stateNode.nextSibling):null;return!0}function ne(){rb=ra=null;Pa=!1}function T(a,b,c,d){b.child=null===a?oe(b,null,c,d):sb(b,a.child,c,d)}function Rg(a,b,c,d,e){c=c.render;var f=b.ref;kb(b,e);d=je(a,b,c,d,f,e);if(null!==a&&!pa)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,d,e);return b.child}function Sg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!pe(g)&&void 0===
g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Tg(a,b,g,d,e,f);a=Rc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:zb,c(e,d)&&a.ref===b.ref))return sa(a,b,f);b.effectTag|=1;a=Na(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}function Tg(a,b,c,d,e,f){return null!==a&&zb(a.memoizedProps,d)&&a.ref===b.ref&&(pa=!1,e<f)?sa(a,b,f):qe(a,b,c,d,f)}function Ug(a,b){var c=b.ref;if(null===a&&
null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function qe(a,b,c,d,e){var f=G(c)?La:I.current;f=ib(b,f);kb(b,e);c=je(a,b,c,d,f,e);if(null!==a&&!pa)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,c,e);return b.child}function Vg(a,b,c,d,e){if(G(c)){var f=!0;Fc(b)}else f=!1;kb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ag(b,c,d,e),de(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,
h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=aa(l):(l=G(c)?La:I.current,l=ib(b,l));var m=c.getDerivedStateFromProps,n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l);Da=!1;var q=b.memoizedState;k=g.state=q;var u=b.updateQueue;null!==u&&(Gb(b,u,d,g,e),k=b.memoizedState);h!==d||q!==k||M.current||Da?
("function"===typeof m&&(Nc(b,c,m,d),k=b.memoizedState),(h=Da||zg(b,c,h,d,q,k,l))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=
l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:X(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=aa(l):(l=G(c)?La:I.current,l=ib(b,l)),m=c.getDerivedStateFromProps,(n="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l),Da=!1,k=b.memoizedState,
q=g.state=k,u=b.updateQueue,null!==u&&(Gb(b,u,d,g,e),q=b.memoizedState),h!==d||k!==q||M.current||Da?("function"===typeof m&&(Nc(b,c,m,d),q=b.memoizedState),(m=Da||zg(b,c,h,d,k,q,l))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,q,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===
typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=q,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&
k===a.memoizedState||(b.effectTag|=256),d=!1);return re(a,b,c,d,f,e)}function re(a,b,c,d,e,f){Ug(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&gg(b,c,!1),sa(a,b,f);d=b.stateNode;Fi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=sb(b,a.child,null,f),b.child=sb(b,null,h,f)):T(a,b,h,f);b.memoizedState=d.state;e&&gg(b,c,!0);return b.child}function Wg(a){var b=a.stateNode;b.pendingContext?eg(a,b.pendingContext,b.pendingContext!==
b.context):b.context&&eg(a,b.context,!1);ge(a,b.containerInfo)}function Xg(a,b,c){var d=b.mode,e=b.pendingProps,f=z.current,g=null,h=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Tb)&&(null===a||null!==a.memoizedState));k?(g=Gi,h=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=se);f&=Ga;D(z,f,b);if(null===a)if(h){e=e.fallback;a=Ea(null,d,0,null);a.return=b;if(0===(b.mode&2))for(h=null!==b.memoizedState?b.child.child:b.child,a.child=h;null!==
h;)h.return=a,h=h.sibling;c=Ea(e,d,c,null);c.return=b;a.sibling=c;d=a}else d=c=oe(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,h){e=e.fallback;c=Na(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(h=null!==b.memoizedState?b.child.child:b.child,h!==f.child))for(c.child=h;null!==h;)h.return=c,h=h.sibling;e=Na(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=sb(b,f.child,e.children,c);else if(f=a.child,h){h=e.fallback;e=Ea(null,d,
0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=Ea(h,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=sb(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=g;b.child=d;return c}function te(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=
null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}function Yg(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;T(a,b,d.children,c);d=z.current;if(0!==(d&Tb))d=d&Ga|Tb,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var g=a.alternate;null!==g&&g.expirationTime<c&&(g.expirationTime=c);qg(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;
for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Ga}D(z,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Uc(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);te(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Uc(d)){b.child=e;break}d=e.sibling;
e.sibling=c;c=e;e=d}te(b,!0,c,null,f);break;case "together":te(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function sa(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw m(Error(153));if(null!==b.child){a=b.child;c=Na(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Na(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Ub(a){a.effectTag|=4}function Yc(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function Hi(a,b){switch(a.tag){case 1:return G(a.type)&&Ec(a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 3:lb(a);Td(a);b=a.effectTag;
if(0!==(b&64))throw m(Error(285));a.effectTag=b&-2049|64;return a;case 5:return he(a),null;case 13:return w(z,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return w(z,a),null;case 4:return lb(a),null;case 10:return be(a),null;default:return null}}function ue(a,b){return{value:a,source:b,stack:Bd(b)}}function ve(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bd(c));null!==c&&xa(c.type);b=b.value;null!==a&&1===a.tag&&xa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;
})}}function Ii(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Qa(a,c)}}function Zg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Qa(a,c)}else b.current=null}function Vb(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==pb){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==pb&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}function $g(a,b){"function"===typeof we&&we(a);
switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;Ma(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var g=a;try{c()}catch(h){Qa(g,h)}}b=b.next}while(b!==d)})}break;case 1:Zg(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&Ii(a,b);break;case 5:Zg(a);break;case 4:ah(a,b)}}function bh(a,b){for(var c=a;;)if($g(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===
c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function ch(a){return 5===a.tag||3===a.tag||4===a.tag}function dh(a){a:{for(var b=a.return;null!==b;){if(ch(b)){var c=b;break a}b=b.return}throw m(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw m(Error(161));}c.effectTag&16&&(Wb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ch(c.return)){c=
null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,
f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=Dc)):b.appendChild(g)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}function ah(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw m(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;
case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(bh(c,b),f){var g=e,h=c.stateNode;8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)}else e.removeChild(c.stateNode);else if(20===c.tag)h=c.stateNode.instance,bh(c,b),f?(g=e,8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(h);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if($g(c,b),
null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}function eh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Vb(Xb,Ji,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[pc]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Ff(c,d);
Qd(a,e);b=Qd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?cg(c,h):"dangerouslySetInnerHTML"===g?fh(c,h):"children"===g?Wb(c,h):Cd(c,g,h,b)}switch(a){case "input":Ed(c,d);break;case "textarea":$f(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?gb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?gb(c,!!d.multiple,d.defaultValue,!0):gb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw m(Error(162));
b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,xe=Y());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=bg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===
a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}gh(b);break;case 19:gh(b);break;case 17:break;case 20:break;default:throw m(Error(163));}}function gh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ki);b.forEach(function(b){var d=Li.bind(null,
a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function hh(a,b,c){c=Ba(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Zc||(Zc=!0,ye=d);ve(a,b)};return c}function ih(a,b,c){c=Ba(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){ve(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ha?Ha=new Set([this]):Ha.add(this),ve(a,b));
var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ea(){return(q&(ha|ia))!==J?1073741821-(Y()/10|0):0!==$c?$c:$c=1073741821-(Y()/10|0)}function qb(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Ud();if(0===(b&4))return 99===d?1073741823:1073741822;if((q&ha)!==J)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;
case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw m(Error(326));}null!==Ra&&a===W&&--a;return a}function ad(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===
d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=b);return e}function Sa(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==ng&&og(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=Hc(ze.bind(null,a,O.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-Y()}),a.callbackNode=Vd(b,ze.bind(null,a,O.bind(null,a,c)),d))}}function ze(a,b,c){var d=a.callbackNode,e=null;
try{return e=b(c),null!==e?ze.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}function Ae(){(q&(1|ha|ia))===J&&(Mi(),Yb())}function Ni(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(Vd(97,function(){c._onComplete();return null}),!0):!1}function Mi(){if(null!==Ta){var a=Ta;Ta=null;a.forEach(function(a,c){Hc(O.bind(null,c,a))});V()}}function jh(a,b){var c=q;q|=1;try{return a(b)}finally{q=c,q===J&&V()}}function Be(a,
b,c,d){var e=q;q|=4;try{return Ma(98,a.bind(null,b,c,d))}finally{q=e,q===J&&V()}}function kh(a,b){var c=q;q&=-2;q|=Ce;try{return a(b)}finally{q=c,q===J&&V()}}function Ua(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Oi(c));if(null!==u)for(c=u.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ec(d);break;case 3:lb(d);Td(d);break;case 5:he(d);break;case 4:lb(d);break;case 13:w(z,d);break;case 19:w(z,
d);break;case 10:be(d)}c=c.return}Ra=a;u=Na(a.current,null,b);W=b;P=Va;Zb=ta=1073741823;bd=null;$b=!1}function O(a,b,c){if((q&(ha|ia))!==J)throw m(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return Ia.bind(null,a);Yb();if(a!==Ra||b!==W)Ua(a,b);else if(P===cd)if($b)Ua(a,b);else{var d=a.lastPendingTime;if(d<b)return O.bind(null,a,d)}if(null!==u){d=q;q|=ha;var e=dd.current;null===e&&(e=Wc);dd.current=Wc;if(c){if(1073741823!==b){var f=ea();if(f<b)return q=d,$d(),
dd.current=e,O.bind(null,a,f)}}else $c=0;do try{if(c)for(;null!==u;)u=lh(u);else for(;null!==u&&!Pi();)u=lh(u);break}catch(Eg){$d();Hg();f=u;if(null===f||null===f.return)throw Ua(a,b),q=d,Eg;a:{var g=a,h=f.return,k=f,l=Eg,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var v=l,x=0!==(z.current&se);l=h;do{var w;if(w=13===l.tag)null!==l.memoizedState?w=!1:(w=l.memoizedProps,w=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?
!0:x?!1:!0);if(w){h=l.updateQueue;null===h?(h=new Set,h.add(v),l.updateQueue=h):h.add(v);if(0===(l.mode&2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Ba(1073741823,null),n.tag=Mc,Ca(k,n)));k.expirationTime=1073741823;break a}k=g;g=n;x=k.pingCache;null===x?(x=k.pingCache=new Qi,h=new Set,x.set(v,h)):(h=x.get(v),void 0===h&&(h=new Set,x.set(v,h)));h.has(g)||(h.add(g),k=Ri.bind(null,k,v,g),v.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==
l);l=Error((xa(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Bd(k))}P!==De&&(P=mh);l=ue(l,k);k=h;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=hh(k,l,n);sg(k,n);break a;case 1:if(v=l,g=k.type,h=k.stateNode,0===(k.effectTag&64)&&("function"===typeof g.getDerivedStateFromError||null!==h&&"function"===typeof h.componentDidCatch&&
(null===Ha||!Ha.has(h)))){k.effectTag|=2048;k.expirationTime=n;n=ih(k,v,n);sg(k,n);break a}}k=k.return}while(null!==k)}u=nh(f)}while(1);q=d;$d();dd.current=e;if(null!==u)return O.bind(null,a,b)}a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;if(Ni(a,b))return null;Ra=null;switch(P){case Va:throw m(Error(328));case mh:return d=a.lastPendingTime,d<b?O.bind(null,a,d):c?Ia.bind(null,a):(Ua(a,b),Hc(O.bind(null,a,b)),null);case ed:if(1073741823===ta&&!c&&(c=xe+oh-Y(),10<c)){if($b)return Ua(a,
b),O.bind(null,a,b);d=a.lastPendingTime;if(d<b)return O.bind(null,a,d);a.timeoutHandle=Ee(Ia.bind(null,a),c);return null}return Ia.bind(null,a);case cd:if(!c){if($b)return Ua(a,b),O.bind(null,a,b);c=a.lastPendingTime;if(c<b)return O.bind(null,a,c);1073741823!==Zb?c=10*(1073741821-Zb)-Y():1073741823===ta?c=0:(c=10*(1073741821-ta)-5E3,d=Y(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*Si(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=
Ee(Ia.bind(null,a),c),null}return Ia.bind(null,a);case De:return!c&&1073741823!==ta&&null!==bd&&(d=ta,e=bd,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=Y()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=Ee(Ia.bind(null,a),b),null):Ia.bind(null,a);default:throw m(Error(329));}}function wg(a,b){a<ta&&1<a&&(ta=a);null!==b&&a<Zb&&1<a&&(Zb=a,bd=b)}function lh(a){var b=ph(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=nh(a));qh.current=null;return b}
function nh(a){u=a;do{var b=u.alternate;a=u.return;if(0===(u.effectTag&1024)){a:{var c=b;b=u;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:G(b.type)&&Ec(b);break;case 3:lb(b);Td(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);if(null===c||null===c.child)Xc(b),b.effectTag&=-3;Fe(b);break;case 5:he(b);var f=Oa(Jb.current);d=b.type;if(null!==c&&null!=b.stateNode)rh(c,b,d,e,f),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
Oa(ba.current);if(Xc(b)){d=void 0;e=b.stateNode;c=b.type;g=b.memoizedProps;e[la]=b;e[pc]=g;switch(c){case "iframe":case "object":case "embed":v("load",e);break;case "video":case "audio":for(var h=0;h<Eb.length;h++)v(Eb[h],e);break;case "source":v("error",e);break;case "img":case "image":case "link":v("error",e);v("load",e);break;case "form":v("reset",e);v("submit",e);break;case "details":v("toggle",e);break;case "input":Ef(e,g);v("invalid",e);na(f,"onChange");break;case "select":e._wrapperState={wasMultiple:!!g.multiple};
v("invalid",e);na(f,"onChange");break;case "textarea":Zf(e,g),v("invalid",e),na(f,"onChange")}Pd(c,g);h=null;for(d in g)if(g.hasOwnProperty(d)){var k=g[d];"children"===d?"string"===typeof k?e.textContent!==k&&(h=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(h=["children",""+k]):Ya.hasOwnProperty(d)&&null!=k&&na(f,d)}switch(c){case "input":vc(e);Gf(e,g,!0);break;case "textarea":vc(e);d=e.textContent;d===e._wrapperState.initialValue&&(e.value=d);break;case "select":case "option":break;
default:"function"===typeof g.onClick&&(e.onclick=Dc)}e=h;b.updateQueue=e;(e=null!==e?!0:!1)&&Ub(b)}else{c=9===f.nodeType?f:f.ownerDocument;"http://www.w3.org/1999/xhtml"===g&&(g=ag(d));"http://www.w3.org/1999/xhtml"===g?"script"===d?(c=c.createElement("div"),c.innerHTML="<script>\x3c/script>",c=c.removeChild(c.firstChild)):"string"===typeof e.is?c=c.createElement(d,{is:e.is}):(c=c.createElement(d),"select"===d&&(g=c,e.multiple?g.multiple=!0:e.size&&(g.size=e.size))):c=c.createElementNS(g,d);c[la]=
b;c[pc]=e;sh(c,b,!1,!1);var l=Qd(d,e);switch(d){case "iframe":case "object":case "embed":v("load",c);g=e;break;case "video":case "audio":for(g=0;g<Eb.length;g++)v(Eb[g],c);g=e;break;case "source":v("error",c);g=e;break;case "img":case "image":case "link":v("error",c);v("load",c);g=e;break;case "form":v("reset",c);v("submit",c);g=e;break;case "details":v("toggle",c);g=e;break;case "input":Ef(c,e);g=Dd(c,e);v("invalid",c);na(f,"onChange");break;case "option":g=Md(c,e);break;case "select":c._wrapperState=
{wasMultiple:!!e.multiple};g=K({},e,{value:void 0});v("invalid",c);na(f,"onChange");break;case "textarea":Zf(c,e);g=Nd(c,e);v("invalid",c);na(f,"onChange");break;default:g=e}Pd(d,g);h=void 0;k=d;var n=c,q=g;for(h in q)if(q.hasOwnProperty(h)){var x=q[h];"style"===h?cg(n,x):"dangerouslySetInnerHTML"===h?(x=x?x.__html:void 0,null!=x&&fh(n,x)):"children"===h?"string"===typeof x?("textarea"!==k||""!==x)&&Wb(n,x):"number"===typeof x&&Wb(n,""+x):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==
h&&"autoFocus"!==h&&(Ya.hasOwnProperty(h)?null!=x&&na(f,h):null!=x&&Cd(n,h,x,l))}switch(d){case "input":vc(c);Gf(c,e,!1);break;case "textarea":vc(c);f=c.textContent;f===c._wrapperState.initialValue&&(c.value=f);break;case "option":null!=e.value&&c.setAttribute("value",""+za(e.value));break;case "select":f=c;g=e;f.multiple=!!g.multiple;h=g.value;null!=h?gb(f,!!g.multiple,h,!1):null!=g.defaultValue&&gb(f,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof g.onClick&&(c.onclick=Dc)}(e=
dg(d,e))&&Ub(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw m(Error(166));break;case 6:if(c&&null!=b.stateNode)th(c,b,c.memoizedProps,e);else{if("string"!==typeof e&&null===b.stateNode)throw m(Error(166));d=Oa(Jb.current);Oa(ba.current);Xc(b)?(e=b.stateNode,d=b.memoizedProps,e[la]=b,e.nodeValue!==d&&Ub(b)):(e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[la]=b,b.stateNode=e)}break;case 11:break;case 13:w(z,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=
d;break a}e=null!==e;d=!1;null===c?Xc(b):(f=c.memoizedState,d=null!==f,e||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(e&&!d&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(z.current&se))P===Va&&(P=ed);else if(P===Va||P===ed)P=cd;if(e||d)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:lb(b);Fe(b);break;case 10:be(b);break;
case 9:break;case 14:break;case 17:G(b.type)&&Ec(b);break;case 18:break;case 19:w(z,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;if(null===g)if(f)Yc(e,!1);else{if(P!==Va||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Uc(c);if(null!==g){b.effectTag|=64;Yc(e,!1);e=g.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);b.firstEffect=b.lastEffect=null;e=d;for(d=b.child;null!==d;)f=d,c=e,f.effectTag&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,
g=f.alternate,null===g?(f.childExpirationTime=0,f.expirationTime=c,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null):(f.childExpirationTime=g.childExpirationTime,f.expirationTime=g.expirationTime,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,c=g.dependencies,f.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),d=d.sibling;D(z,z.current&
Ga|Tb,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Uc(g),null!==c){if(b.effectTag|=64,f=!0,Yc(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else Y()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Yc(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&
(e.tailExpiration=Y()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;e=z.current;e=f?e&Ga|Tb:e&Ga;D(z,e,b);b=d;break a}break;case 20:break;default:throw m(Error(156));}b=null}e=u;if(1===W||1!==e.childExpirationTime){d=0;for(f=e.child;null!==f;)c=f.expirationTime,g=f.childExpirationTime,c>d&&(d=c),g>d&&(d=g),f=f.sibling;e.childExpirationTime=d}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=u.firstEffect),null!==u.lastEffect&&
(null!==a.lastEffect&&(a.lastEffect.nextEffect=u.firstEffect),a.lastEffect=u.lastEffect),1<u.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=u:a.firstEffect=u,a.lastEffect=u))}else{b=Hi(u,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=u.sibling;if(null!==b)return b;u=a}while(null!==u);P===Va&&(P=De);return null}function Ia(a){var b=Ud();Ma(99,Ti.bind(null,a,b));null!==ac&&Vd(97,function(){Yb();return null});return null}function Ti(a,
b){Yb();if((q&(ha|ia))!==J)throw m(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw m(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ra&&(u=Ra=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==
e){f=q;q|=ia;qh.current=null;Ge=Bc;var g=Wf();if(Jd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,v=k.focusNode;k=k.focusOffset;try{h.nodeType,v.nodeType}catch(tb){h=null;break a}var w=0,x=-1,z=-1,D=0,H=0,r=g,y=null;b:for(;;){for(var F;;){r!==h||0!==l&&3!==r.nodeType||(x=w+l);r!==v||0!==k&&3!==r.nodeType||(z=w+k);3===
r.nodeType&&(w+=r.nodeValue.length);if(null===(F=r.firstChild))break;y=r;r=F}for(;;){if(r===g)break b;y===h&&++D===l&&(x=w);y===v&&++H===k&&(z=w);if(null!==(F=r.nextSibling))break;r=y;y=r.parentNode}r=F}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=null;He={focusedElem:g,selectionRange:h};Bc=!1;n=e;do try{for(;null!==n;){if(0!==(n.effectTag&256)){var L=n.alternate;g=n;switch(g.tag){case 0:case 11:case 15:Vb(Ui,pb,g);break;case 1:if(g.effectTag&256&&null!==L){var E=
L.memoizedProps,B=L.memoizedState,K=g.stateNode,P=K.getSnapshotBeforeUpdate(g.elementType===g.type?E:X(g.type,E),B);K.__reactInternalSnapshotBeforeUpdate=P}break;case 3:case 5:case 6:case 4:case 17:break;default:throw m(Error(163));}}n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);n=e;do try{for(L=b;null!==n;){var A=n.effectTag;A&16&&Wb(n.stateNode,"");if(A&128){var p=n.alternate;if(null!==p){var t=p.ref;null!==t&&("function"===typeof t?t(null):t.current=
null)}}switch(A&14){case 2:dh(n);n.effectTag&=-3;break;case 6:dh(n);n.effectTag&=-3;eh(n.alternate,n);break;case 4:eh(n.alternate,n);break;case 8:E=n;ah(E,L);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var N=E.alternate;null!==N&&(N.return=null,N.child=null,N.memoizedState=null,N.updateQueue=null,N.dependencies=null)}n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);t=He;p=Wf();A=t.focusedElem;L=t.selectionRange;
if(p!==A&&A&&A.ownerDocument&&Vf(A.ownerDocument.documentElement,A)){null!==L&&Jd(A)&&(p=L.start,t=L.end,void 0===t&&(t=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(t,A.value.length)):(t=(p=A.ownerDocument||document)&&p.defaultView||window,t.getSelection&&(t=t.getSelection(),E=A.textContent.length,N=Math.min(L.start,E),L=void 0===L.end?N:Math.min(L.end,E),!t.extend&&N>L&&(E=L,L=N,N=E),E=Uf(A,N),B=Uf(A,L),E&&B&&(1!==t.rangeCount||t.anchorNode!==E.node||t.anchorOffset!==E.offset||
t.focusNode!==B.node||t.focusOffset!==B.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),t.removeAllRanges(),N>L?(t.addRange(p),t.extend(B.node,B.offset)):(p.setEnd(B.node,B.offset),t.addRange(p))))));p=[];for(t=A;t=t.parentNode;)1===t.nodeType&&p.push({element:t,left:t.scrollLeft,top:t.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)t=p[A],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}He=null;Bc=!!Ge;Ge=null;a.current=c;n=e;do try{for(A=d;null!==n;){var C=
n.effectTag;if(C&36){var G=n.alternate;p=n;t=A;switch(p.tag){case 0:case 11:case 15:Vb(Vi,bc,p);break;case 1:var I=p.stateNode;if(p.effectTag&4)if(null===G)I.componentDidMount();else{var R=p.elementType===p.type?G.memoizedProps:X(p.type,G.memoizedProps);I.componentDidUpdate(R,G.memoizedState,I.__reactInternalSnapshotBeforeUpdate)}var O=p.updateQueue;null!==O&&xg(p,O,I,t);break;case 3:var Q=p.updateQueue;if(null!==Q){N=null;if(null!==p.child)switch(p.child.tag){case 5:N=p.child.stateNode;break;case 1:N=
p.child.stateNode}xg(p,Q,N,t)}break;case 5:var T=p.stateNode;null===G&&p.effectTag&4&&(t=T,dg(p.type,p.memoizedProps)&&t.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw m(Error(163));}}if(C&128){var M=n.ref;if(null!==M){var U=n.stateNode;switch(n.tag){case 5:var S=U;break;default:S=U}"function"===typeof M?M(S):M.current=S}}C&512&&(Ie=!0);n=n.nextEffect}}catch(tb){if(null===n)throw m(Error(330));Qa(n,tb);n=n.nextEffect}while(null!==n);n=null;
Wi();q=f}else a.current=c;if(Ie)Ie=!1,ac=a,Je=d,Ke=b;else for(n=e;null!==n;)b=n.nextEffect,n.nextEffect=null,n=b;b=a.firstPendingTime;0!==b?(C=ea(),C=Zd(C,b),Sa(a,C,b)):Ha=null;"function"===typeof Le&&Le(c.stateNode,d);1073741823===b?a===Me?cc++:(cc=0,Me=a):cc=0;if(Zc)throw Zc=!1,a=ye,ye=null,a;if((q&Ce)!==J)return null;V();return null}function Yb(){if(null===ac)return!1;var a=ac,b=Je,c=Ke;ac=null;Je=0;Ke=90;return Ma(97<c?97:c,Xi.bind(null,a,b))}function Xi(a,b){if((q&(ha|ia))!==J)throw m(Error(331));
b=q;q|=ia;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Vb(Ne,pb,c),Vb(pb,Oe,c)}}catch(d){if(null===a)throw m(Error(330));Qa(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}q=b;V();return!0}function uh(a,b,c){b=ue(c,b);b=hh(a,b,1073741823);Ca(a,b);a=ad(a,1073741823);null!==a&&Sa(a,99,1073741823)}function Qa(a,b){if(3===a.tag)uh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){uh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===
typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ha||!Ha.has(d))){a=ue(b,a);a=ih(c,a,1073741823);Ca(c,a);c=ad(c,1073741823);null!==c&&Sa(c,99,1073741823);break}}c=c.return}}function Ri(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ra===a&&W===c?P===cd||P===ed&&1073741823===ta&&Y()-xe<oh?Ua(a,W):$b=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=ea(),b=Zd(b,c),Sa(a,
b,c)))}function Li(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=ea();b=qb(c,a,null);c=Zd(c,b);a=ad(a,b);null!==a&&Sa(a,c,b)}function Yi(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Le=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(f){}};we=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}function Zi(a,b,c,d){this.tag=
a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function pe(a){a=a.prototype;return!(!a||!a.isReactComponent)}function $i(a){if("function"===typeof a)return pe(a)?1:0;if(void 0!==
a&&null!==a){a=a.$$typeof;if(a===zd)return 11;if(a===Ad)return 14}return 2}function Na(a,b,c){c=a.alternate;null===c?(c=fa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;
b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Rc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)pe(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ea(c.children,e,f,b);case aj:g=8;e|=7;break;case xf:g=8;e|=1;break;case wc:return a=fa(12,c,b,e|8),a.elementType=wc,a.type=wc,a.expirationTime=f,a;case xc:return a=fa(13,c,b,
e),a.type=xc,a.elementType=xc,a.expirationTime=f,a;case yd:return a=fa(19,c,b,e),a.elementType=yd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case zf:g=10;break a;case yf:g=9;break a;case zd:g=11;break a;case Ad:g=14;break a;case Af:g=16;d=null;break a}throw m(Error(130),null==a?a:typeof a,"");}b=fa(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ea(a,b,c,d){a=fa(7,a,d,b);a.expirationTime=c;return a}function ee(a,b,c){a=fa(6,a,null,b);a.expirationTime=
c;return a}function fe(a,b,c){b=fa(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function bj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=
this.firstPendingTime=this.callbackExpirationTime=0}function vh(a,b,c){a=new bj(a,b,c);b=fa(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}function wh(a,b,c,d,e,f){var g=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==Ab(c)||1!==c.tag)throw m(Error(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(G(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw m(Error(171));}if(1===c.tag){var k=c.type;if(G(k)){c=
fg(c,k,h);break a}}c=h}else c=Aa;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Ba(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);Ca(g,e);Sb(g,d);return d}function fd(a,b,c,d){var e=b.current,f=ea(),g=Rb.suspense;e=qb(f,e,g);return wh(a,b,c,e,g,d)}function Pe(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function cj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;
return{$$typeof:eb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function dc(a){var b=1073741821-25*(((1073741821-ea()+500)/25|0)+1);b<=xh&&--b;this._expirationTime=xh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}function ec(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}function gd(a,b,c){this._internalRoot=vh(a,b,c)}function hd(a,b){this._internalRoot=vh(a,2,b)}function Wa(a){return!(!a||
1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function dj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new gd(a,0,b)}function id(a,b,c,d,e){var f=c._reactRootContainer,g=void 0;if(f){g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=Pe(g);h.call(a)}}fd(b,g,a,e)}else{f=c._reactRootContainer=
dj(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=Pe(g);k.call(a)}}kh(function(){fd(b,g,a,e)})}return Pe(g)}function yh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Wa(b))throw m(Error(200));return cj(a,b,null,c)}if(!ka)throw m(Error(227));var jc=null,Xa={},kc=[],kd={},Ya={},ld={},Vh=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(vg){this.onError(vg)}},ub=!1,lc=null,mc=!1,md=null,Wh={onError:function(a){ub=
!0;lc=a}},od=null,pf=null,bf=null,vb=null,Yh=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)af(a,b[d],c[d]);else b&&af(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},Qe={injectEventPluginOrder:function(a){if(jc)throw m(Error(101));jc=Array.prototype.slice.call(a);Ze()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=
a[c];if(!Xa.hasOwnProperty(c)||Xa[c]!==d){if(Xa[c])throw m(Error(102),c);Xa[c]=d;b=!0}}b&&Ze()}},zh=Math.random().toString(36).slice(2),la="__reactInternalInstance$"+zh,pc="__reactEventHandlers$"+zh,wa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ab={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition",
"TransitionEnd")},rd={},ff={};wa&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ab.animationend.animation,delete ab.animationiteration.animation,delete ab.animationstart.animation),"TransitionEvent"in window||delete ab.transitionend.transition);var Ah=rc("animationend"),Bh=rc("animationiteration"),Ch=rc("animationstart"),Dh=rc("transitionend"),Eb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
va=null,sd=null,sc=null,K=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign;K(Q.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){this.isPersistent=
tc},isPersistent:uc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=uc;this._dispatchInstances=this._dispatchListeners=null}});Q.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};Q.extend=function(a){function b(){return c.apply(this,
arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;K(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=K({},c.Interface,a);b.extend=c.extend;hf(b);return b};hf(Q);var ej=Q.extend({data:null}),fj=Q.extend({data:null}),ci=[9,13,27,32],td=wa&&"CompositionEvent"in window,fc=null;wa&&"documentMode"in document&&(fc=document.documentMode);var gj=wa&&"TextEvent"in window&&!fc,nf=wa&&(!td||fc&&8<fc&&11>=fc),mf=String.fromCharCode(32),ua={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",
captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",
captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},lf=!1,bb=!1,hj={eventTypes:ua,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(td)b:{switch(a){case "compositionstart":e=ua.compositionStart;break b;case "compositionend":e=ua.compositionEnd;break b;case "compositionupdate":e=ua.compositionUpdate;break b}e=void 0}else bb?jf(a,c)&&(e=ua.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ua.compositionStart);e?(nf&&
"ko"!==c.locale&&(bb||e!==ua.compositionStart?e===ua.compositionEnd&&bb&&(f=gf()):(va=d,sd="value"in va?va.value:va.textContent,bb=!0)),e=ej.getPooled(e,b,c,d),f?e.data=f:(f=kf(c),null!==f&&(e.data=f)),$a(e),f=e):f=null;(a=gj?di(a,c):ei(a,c))?(b=fj.getPooled(ua.beforeInput,b,c,d),b.data=a,$a(b)):b=null;return null===f?b:null===b?f:[f,b]}},ud=null,cb=null,db=null,Gd=function(a,b){return a(b)},Pf=function(a,b,c,d){return a(b,c,d)},wd=function(){},Qf=Gd,Z=!1,fi={color:!0,date:!0,datetime:!0,"datetime-local":!0,
email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},ja=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ja.hasOwnProperty("ReactCurrentDispatcher")||(ja.ReactCurrentDispatcher={current:null});ja.hasOwnProperty("ReactCurrentBatchConfig")||(ja.ReactCurrentBatchConfig={suspense:null});var hi=/^(.*)[\\\/]/,C="function"===typeof Symbol&&Symbol.for,Sc=C?Symbol.for("react.element"):60103,eb=C?Symbol.for("react.portal"):60106,ya=C?Symbol.for("react.fragment"):
60107,xf=C?Symbol.for("react.strict_mode"):60108,wc=C?Symbol.for("react.profiler"):60114,zf=C?Symbol.for("react.provider"):60109,yf=C?Symbol.for("react.context"):60110,aj=C?Symbol.for("react.concurrent_mode"):60111,zd=C?Symbol.for("react.forward_ref"):60112,xc=C?Symbol.for("react.suspense"):60113,yd=C?Symbol.for("react.suspense_list"):60120,Ad=C?Symbol.for("react.memo"):60115,Af=C?Symbol.for("react.lazy"):60116;C&&Symbol.for("react.fundamental");C&&Symbol.for("react.responder");var wf="function"===
typeof Symbol&&Symbol.iterator,ji=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf=Object.prototype.hasOwnProperty,Df={},Cf={},H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){H[a]=
new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];H[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){H[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){H[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){H[a]=
new B(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){H[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){H[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){H[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){H[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var Re=/[\-:]([a-z])/g,Se=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Re,Se);H[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Re,Se);H[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Re,Se);H[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){H[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});H.xlinkHref=new B("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){H[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});var If={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},xb=null,yb=null,Te=!1;wa&&(Te=tf("input")&&(!document.documentMode||9<document.documentMode));var ij={eventTypes:If,_isInputEventSupported:Te,extractEvents:function(a,b,c,d){var e=
b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=ni:sf(e)?Te?f=ri:(f=pi,g=oi):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=qi);if(f&&(f=f(a,b)))return Hf(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fd(e,"number",e.value)}},gc=Q.extend({view:null,detail:null}),ti={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Eh=0,Fh=0,Gh=!1,Hh=!1,
hc=gc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Eh;Eh=a.screenX;return Gh?"mousemove"===a.type?a.screenX-b:0:(Gh=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=Fh;Fh=
a.screenY;return Hh?"mousemove"===a.type?a.screenY-b:0:(Hh=!0,0)}}),Ih=hc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ic={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},jj={eventTypes:ic,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?oc(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=hc,h=ic.mouseLeave,k=ic.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ih,h=ic.pointerLeave,k=ic.pointerEnter,l="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=ma(g))l++;g=0;for(k=e;k;k=ma(k))g++;for(;0<l-g;)b=ma(b),l--;for(;0<g-l;)e=ma(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=ma(b);e=ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=ma(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=ma(d)}for(d=0;d<b.length;d++)qd(b[d],"bubbled",a);for(d=f.length;0<d--;)qd(f[d],"captured",c);return[a,c]}},ui=Object.prototype.hasOwnProperty,U=ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,kj=U.unstable_cancelCallback,Ue=U.unstable_now,lj=U.unstable_scheduleCallback,mj=U.unstable_shouldYield,Jh=U.unstable_requestPaint,nj=U.unstable_runWithPriority,oj=U.unstable_getCurrentPriorityLevel,
pj=U.unstable_ImmediatePriority,qj=U.unstable_UserBlockingPriority,rj=U.unstable_NormalPriority,sj=U.unstable_LowPriority,tj=U.unstable_IdlePriority;new Map;new Map;new Set;new Map;var uj=Q.extend({animationName:null,elapsedTime:null,pseudoElement:null}),vj=Q.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),wj=gc.extend({relatedTarget:null}),xj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",
Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},
zj=gc.extend({key:function(a){if(a.key){var b=xj[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=zc(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?yj[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Hd,charCode:function(a){return"keypress"===a.type?zc(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?zc(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Aj=hc.extend({dataTransfer:null}),Bj=gc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Hd}),Cj=Q.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Dj=hc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?
-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Kh=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",
0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove",
"mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Ah,"animationEnd",2],[Bh,"animationIteration",2],[Ch,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],
["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[Dh,"transitionEnd",2],["waiting","waiting",2]],Lh={},Ve={},We=0;for(;We<Kh.length;We++){var Xe=Kh[We],Mh=
Xe[0],Ye=Xe[1],Ej=Xe[2],Nh="on"+(Ye[0].toUpperCase()+Ye.slice(1)),Oh={phasedRegistrationNames:{bubbled:Nh,captured:Nh+"Capture"},dependencies:[Mh],eventPriority:Ej};Lh[Ye]=Oh;Ve[Mh]=Oh}var Ph={eventTypes:Lh,getEventPriority:function(a){a=Ve[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ve[a];if(!e)return null;switch(a){case "keypress":if(0===zc(c))return null;case "keydown":case "keyup":a=zj;break;case "blur":case "focus":a=wj;break;case "click":if(2===c.button)return null;
case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=hc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=Aj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Bj;break;case Ah:case Bh:case Ch:a=uj;break;case Dh:a=Cj;break;case "scroll":a=gc;break;case "wheel":a=Dj;break;case "copy":case "cut":case "paste":a=vj;
break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ih;break;default:a=Q}b=a.getPooled(e,b,c,d);$a(b);return b}},wi=Ph.getEventPriority,Cc=[],Bc=!0,Sf=new ("function"===typeof WeakMap?WeakMap:Map),Fj=wa&&"documentMode"in document&&11>=document.documentMode,Yf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},
fb=null,Ld=null,Cb=null,Kd=!1,Gj={eventTypes:Yf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Rf(e);f=ld.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(sf(e)||"true"===e.contentEditable)fb=e,Ld=b,Cb=null;break;case "blur":Cb=Ld=fb=null;break;case "mousedown":Kd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Kd=!1,Xf(c,d);case "selectionchange":if(Fj)break;
case "keydown":case "keyup":return Xf(c,d)}return null}};Qe.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){od=a;pf=b;bf=c})(pd,df,Ja);Qe.injectEventPluginsByName({SimpleEventPlugin:Ph,EnterLeaveEventPlugin:jj,ChangeEventPlugin:ij,SelectEventPlugin:Gj,BeforeInputEventPlugin:hj});var jd=void 0,fh=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,
c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{jd=jd||document.createElement("div");jd.innerHTML="<svg>"+b+"</svg>";for(b=jd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Wb=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},Db={animationIterationCount:!0,
borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,
strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hj=["Webkit","ms","Moz","O"];Object.keys(Db).forEach(function(a){Hj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Db[b]=Db[a]})});var Ai=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),Ge=null,He=null,Ee="function"===typeof setTimeout?setTimeout:void 0,Oi="function"===typeof clearTimeout?clearTimeout:
void 0;new Set;var Sd=[],hb=-1,Aa={},I={current:Aa},M={current:!1},La=Aa,Ci=nj,Wd=lj,og=kj,Bi=oj,Gc=pj,hg=qj,ig=rj,jg=sj,kg=tj,ng={},Pi=mj,Wi=void 0!==Jh?Jh:function(){},oa=null,Xd=null,Yd=!1,Qh=Ue(),Y=1E4>Qh?Ue:function(){return Ue()-Qh},ae={current:null},Jc=null,jb=null,Ic=null,rg=0,Mc=2,Da=!1,Rb=ja.ReactCurrentBatchConfig,Cg=(new ka.Component).refs,Oc={isMounted:function(a){return(a=a._reactInternalFiber)?2===Ab(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ea(),e=Rb.suspense;
d=qb(d,a,e);e=Ba(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ca(a,e);Sb(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ea(),e=Rb.suspense;d=qb(d,a,e);e=Ba(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Ca(a,e);Sb(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ea(),d=Rb.suspense;c=qb(c,a,d);d=Ba(c,d);d.tag=Mc;void 0!==b&&null!==b&&(d.callback=b);Ca(a,d);Sb(a,c)}},Tc=Array.isArray,sb=Dg(!0),oe=Dg(!1),Ib={},ba={current:Ib},Kb={current:Ib},
Jb={current:Ib},Ga=1,se=1,Tb=2,z={current:0},pb=0,Ui=2,Xb=4,Ji=8,Vi=16,bc=32,Oe=64,Ne=128,Vc=ja.ReactCurrentDispatcher,Lb=0,Fa=null,F=null,ca=null,nb=null,R=null,mb=null,Ob=0,da=null,Pb=0,Mb=!1,qa=null,Nb=0,Wc={readContext:aa,useCallback:S,useContext:S,useEffect:S,useImperativeHandle:S,useLayoutEffect:S,useMemo:S,useReducer:S,useRef:S,useState:S,useDebugValue:S,useResponder:S},Ei={readContext:aa,useCallback:function(a,b){ob().memoizedState=[a,void 0===b?null:b];return a},useContext:aa,useEffect:function(a,
b){return le(516,Ne|Oe,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return le(4,Xb|bc,Kg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return le(4,Xb|bc,a,b)},useMemo:function(a,b){var c=ob();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ob();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Mg.bind(null,Fa,a);return[d.memoizedState,
a]},useRef:function(a){var b=ob();a={current:a};return b.memoizedState=a},useState:function(a){var b=ob();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ig,lastRenderedState:a};a=a.dispatch=Mg.bind(null,Fa,a);return[b.memoizedState,a]},useDebugValue:Lg,useResponder:Lf},Gg={readContext:aa,useCallback:function(a,b){var c=Qb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ie(b,d[1]))return d[0];c.memoizedState=[a,
b];return a},useContext:aa,useEffect:function(a,b){return me(516,Ne|Oe,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return me(4,Xb|bc,Kg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return me(4,Xb|bc,a,b)},useMemo:function(a,b){var c=Qb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ie(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Jg,useRef:function(a){return Qb().memoizedState},useState:function(a){return Jg(Ig,
a)},useDebugValue:Lg,useResponder:Lf},ra=null,rb=null,Pa=!1,Fi=ja.ReactCurrentOwner,pa=!1,Gi={},sh=void 0,Fe=void 0,rh=void 0,th=void 0;sh=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Fe=function(a){};
rh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Oa(ba.current);a=null;switch(c){case "input":f=Dd(g,f);d=Dd(g,d);a=[];break;case "option":f=Md(g,f);d=Md(g,d);a=[];break;case "select":f=K({},f,{value:void 0});d=K({},d,{value:void 0});a=[];break;case "textarea":f=Nd(g,f);d=Nd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=Dc)}Pd(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(Ya.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(Ya.hasOwnProperty(c)?(null!=l&&na(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Ub(b)}};th=function(a,b,c,d){c!==d&&Ub(b)};var Ki=
"function"===typeof WeakSet?WeakSet:Set,Qi="function"===typeof WeakMap?WeakMap:Map,Si=Math.ceil,dd=ja.ReactCurrentDispatcher,qh=ja.ReactCurrentOwner,J=0,Ce=8,ha=16,ia=32,Va=0,mh=1,ed=2,cd=3,De=4,q=J,Ra=null,u=null,W=0,P=Va,ta=1073741823,Zb=1073741823,bd=null,$b=!1,xe=0,oh=500,n=null,Zc=!1,ye=null,Ha=null,Ie=!1,ac=null,Ke=90,Je=0,Ta=null,cc=0,Me=null,$c=0,xh=0,Sb=function(a,b){if(50<cc)throw cc=0,Me=null,m(Error(185));a=ad(a,b);if(null!==a){a.pingTime=0;var c=Ud();if(1073741823===b)if((q&Ce)!==J&&
(q&(ha|ia))===J)for(var d=O(a,1073741823,!0);null!==d;)d=d(!0);else Sa(a,99,1073741823),q===J&&V();else Sa(a,c,b);(q&4)===J||98!==c&&99!==c||(null===Ta?Ta=new Map([[a,b]]):(c=Ta.get(a),(void 0===c||c>b)&&Ta.set(a,b)))}},ph=void 0;ph=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)pa=!0;else if(d<c){pa=!1;switch(b.tag){case 3:Wg(b);ne();break;case 5:Fg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;
case 1:G(b.type)&&Fc(b);break;case 4:ge(b,b.stateNode.containerInfo);break;case 10:pg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Xg(a,b,c);D(z,z.current&Ga,b);b=sa(a,b,c);return null!==b?b.sibling:null}D(z,z.current&Ga,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Yg(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);D(z,z.current,b);if(!d)return null}return sa(a,
b,c)}}else pa=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=ib(b,I.current);kb(b,c);e=je(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Hg();if(G(d)){var f=!0;Fc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Nc(b,d,g,a);e.updater=Oc;b.stateNode=e;e._reactInternalFiber=
b;de(b,d,a,c);b=re(null,b,d,!0,f,c)}else b.tag=0,T(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Di(e);b.type=e;f=b.tag=$i(e);a=X(e,a);switch(f){case 0:b=qe(null,b,e,a,c);break;case 1:b=Vg(null,b,e,a,c);break;case 11:b=Rg(null,b,e,a,c);break;case 14:b=Sg(null,b,e,X(e.type,a),d,c);break;default:throw m(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),qe(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),Vg(a,b,d,e,c);case 3:Wg(b);d=b.updateQueue;if(null===d)throw m(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Gb(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ne(),b=sa(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)rb=Fb(b.stateNode.containerInfo.firstChild),ra=b,e=Pa=!0;e?(b.effectTag|=2,b.child=oe(b,null,d,c)):(T(a,b,d,c),ne());b=b.child}return b;case 5:return Fg(b),null===a&&Pg(b),
d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Rd(d,e)?g=null:null!==f&&Rd(d,f)&&(b.effectTag|=16),Ug(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(T(a,b,g,c),b=b.child),b;case 6:return null===a&&Pg(b),null;case 13:return Xg(a,b,c);case 4:return ge(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=sb(b,null,d,c):T(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),Rg(a,b,d,e,c);case 7:return T(a,
b,b.pendingProps,c),b.child;case 8:return T(a,b,b.pendingProps.children,c),b.child;case 12:return T(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;pg(b,f);if(null!==g){var h=g.value;f=Ka(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!M.current){b=sa(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ba(c,null),l.tag=Mc,Ca(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);qg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}}T(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,kb(b,c),e=aa(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,T(a,b,d,c),b.child;case 14:return e=b.type,f=X(e,b.pendingProps),f=X(e.type,f),Sg(a,b,e,f,d,c);case 15:return Tg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:X(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,G(d)?(a=!0,Fc(b)):a=!1,kb(b,c),Ag(b,d,e,c),de(b,d,e,c),re(null,
b,d,!0,a,c);case 19:return Yg(a,b,c)}throw m(Error(156));};var Le=null,we=null,fa=function(a,b,c,d){return new Zi(a,b,c,d)};ud=function(a,b,c){switch(b){case "input":Ed(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=pd(d);if(!e)throw m(Error(90));vf(d);Ed(d,e)}}}break;case "textarea":$f(a,c);break;case "select":b=c.value,null!=
b&&gb(a,!!c.multiple,b,!1)}};dc.prototype.render=function(a){if(!this._defer)throw m(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new ec;wh(a,b,null,c,null,d._onCommit);return d};dc.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};dc.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw m(Error(251));if(this._hasChildren){var c=
this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw m(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((q&(ha|ia))!==J)throw m(Error(253));Hc(O.bind(null,a,b));V();b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};dc.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=
!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};ec.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};ec.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw m(Error(191),c);c()}}};hd.prototype.render=gd.prototype.render=function(a,b){var c=this._internalRoot,d=new ec;b=void 0===
b?null:b;null!==b&&d.then(b);fd(a,c,null,d._onCommit);return d};hd.prototype.unmount=gd.prototype.unmount=function(a){var b=this._internalRoot,c=new ec;a=void 0===a?null:a;null!==a&&c.then(a);fd(null,b,null,c._onCommit);return c};hd.prototype.createBatch=function(){var a=new dc(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};(function(a,b,c,
d){Gd=a;Pf=b;wd=c;Qf=d})(jh,Be,Ae,function(a,b){var c=q;q|=2;try{return a(b)}finally{q=c,q===J&&V()}});var Rh={createPortal:yh,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw m(Error(188));throw m(Error(268),Object.keys(a));}a=Nf(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Wa(b))throw m(Error(200));return id(null,a,b,!0,c)},render:function(a,b,c){if(!Wa(b))throw m(Error(200));
return id(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Wa(c))throw m(Error(200));if(null==a||void 0===a._reactInternalFiber)throw m(Error(38));return id(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Wa(a))throw m(Error(40));return a._reactRootContainer?(kh(function(){id(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return yh.apply(void 0,arguments)},unstable_batchedUpdates:jh,unstable_interactiveUpdates:function(a,
b,c,d){Ae();return Be(a,b,c,d)},unstable_discreteUpdates:Be,unstable_flushDiscreteUpdates:Ae,flushSync:function(a,b){if((q&(ha|ia))!==J)throw m(Error(187));var c=q;q|=1;try{return Ma(99,a.bind(null,b))}finally{q=c,V()}},unstable_createRoot:function(a,b){if(!Wa(a))throw m(Error(299),"unstable_createRoot");return new hd(a,null!=b&&!0===b.hydrate)},unstable_createSyncRoot:function(a,b){if(!Wa(a))throw m(Error(299),"unstable_createRoot");return new gd(a,1,null!=b&&!0===b.hydrate)},unstable_flushControlled:function(a){var b=
q;q|=1;try{Ma(99,a)}finally{q=b,q===J&&V()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[df,Ja,pd,Qe.injectEventPluginsByName,kd,$a,function(a){nd(a,$h)},qf,rf,Ac,nc,Yb,{current:!1}]}};(function(a){var b=a.findFiberByHostInstance;return Yi(K({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ja.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Nf(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?
b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:oc,bundleType:0,version:"16.9.0",rendererPackageName:"react-dom"});var Sh={default:Rh},Th=Sh&&Rh||Sh;return Th.default||Th});
;
!function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){e.exports=r(3)()},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var s=r(4);function a(){}e.exports=function(){function e(e,t,r,a,n,o){if(o!==s){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=a,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),n=r(2),o=r.n(n),i=r(1),c=r.n(i),l="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/Suggestion.jsx";function u(e){var t=e.query,r=e.type,s=e.label,n=e.url,o=e.tags,i=function(e,t){var r,s=(r=e.trim(),r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).replace(/\s/,"|"),n=new RegExp("(".concat(s,")"),"gi"),o=t.split(n),i=[];for(var c in o)n.test(o[c])?i.push(a.a.createElement("b",{key:c,__source:{fileName:l,lineNumber:42},__self:this},o[c])):i.push(o[c]);return i}(t,s),c=[];for(var u in o)c.push(a.a.createElement("span",{key:u,className:"search-suggestion__tag badge badge-default badge--pill",__source:{fileName:l,lineNumber:61},__self:this},o[u]));return a.a.createElement("a",{className:"search-suggestion",href:n,tabIndex:"0",__source:{fileName:l,lineNumber:71},__self:this},a.a.createElement("div",{className:"search-suggestion__type",__source:{fileName:l,lineNumber:72},__self:this},r),a.a.createElement("div",{className:"search-suggestion__body",__source:{fileName:l,lineNumber:73},__self:this},a.a.createElement("div",{className:"search-suggestion__label",__source:{fileName:l,lineNumber:74},__self:this},i),o.length?a.a.createElement("div",{className:"search-suggestion__tags",__source:{fileName:l,lineNumber:76},__self:this},c):null))}u.propTypes={query:c.a.string.isRequired,type:c.a.string.isRequired,label:c.a.string.isRequired,url:c.a.string.isRequired,tags:c.a.arrayOf(c.a.string)},u.defaultProps={tags:[]};var f=u,_="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/SearchSuggestions.jsx";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function m(e){var t=e.searchBase,r=e.query,s=e.suggestions;if(!r.length||!s.length)return null;var n=[];for(var o in s)n.push(a.a.createElement(f,p({key:o,query:r},s[o],{__source:{fileName:_,lineNumber:16},__self:this})));var i="".concat(t,"/").concat(encodeURIComponent(r));return a.a.createElement(a.a.Fragment,{__source:{fileName:_,lineNumber:22},__self:this},a.a.createElement("div",{className:"search-suggestions",__source:{fileName:_,lineNumber:23},__self:this},n),a.a.createElement("div",{className:"search-suggestions__all",__source:{fileName:_,lineNumber:24},__self:this},a.a.createElement("a",{href:i,className:"btn btn-default btn-raised",__source:{fileName:_,lineNumber:25},__self:this},"See all results")))}m.propTypes={searchBase:c.a.string.isRequired,query:c.a.string,suggestions:c.a.arrayOf(c.a.shape({type:c.a.string.isRequired,label:c.a.string.isRequired,url:c.a.string.isRequired,tags:c.a.arrayOf(c.a.string)}))},m.defaultProps={query:"",suggestions:[]};var g=m,h="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/components/Spinner.jsx";function d(){return a.a.createElement("div",{className:"spinner",__source:{fileName:h,lineNumber:5},__self:this},a.a.createElement("div",{className:"bounce1",__source:{fileName:h,lineNumber:6},__self:this}),a.a.createElement("div",{className:"bounce2",__source:{fileName:h,lineNumber:7},__self:this}),a.a.createElement("div",{className:"bounce3",__source:{fileName:h,lineNumber:8},__self:this}))}var b="/Users/alexander/Projects/drupal_social/html/profiles/contrib/social/modules/social_features/social_search/modules/social_search_autocomplete/js/src/index.jsx";!function(e,t){function r(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)}).replace(/&amp;/g,"&")}var s="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):"");t.behaviors.initSocialSearchAutocomplete={attach:function(t,n){var i=e(".social-search-suggestions",t);if(i.length){var c,l,u,f=(c=s+n.socialSearchAutocomplete.basePath,l=n.socialSearchAutocomplete.searchApiUrl,u=null,function(t,s){null!==u&&(4!==u.readyState&&u.abort(),u=null),t.length?u=e.get({url:"".concat(l,"/").concat(encodeURIComponent(t)),headers:{Accept:"application/json","Content-Type":"application/hal+json"},success:function(e){var a=e.map(function(e){return{type:r(e.type),label:r(e.label),url:c+e.path}});s(t,a)}}):s(t,[])});i.each(function(t,r){var s,i=function(t){var r=e(t).attr("data-search-suggestions-for");if(!r)throw new Error("Search suggestion element does not have an associated search field (".concat(t,")."));var s=e("#".concat(r));if(!s.length)throw new Error("Could not find search element with id '".concat(r,"'"));return s.first()}(r),c=(s=null,function(e,t){s&&(clearTimeout(s),s=null),s=setTimeout(function(){s=null,e()},t)}),l=function(e,t){o.a.render(a.a.createElement(g,{searchBase:n.socialSearchAutocomplete.searchPath,query:e,suggestions:t,__source:{fileName:b,lineNumber:176},__self:this}),r)},u=null,_=i.parent();i.on("keyup",function(e){var t=e.target.value;t!==u&&(c(function(){o.a.render(a.a.createElement(d,{__source:{fileName:b,lineNumber:199},__self:this}),r),f(t,l)},200),u=t),38===e.keyCode?_.find(".search-suggestions .search-suggestion").get(-1).focus():40===e.keyCode&&_.find(".search-suggestions .search-suggestion").get(0).focus()}),_.find(".social-search-suggestions").on("keyup",function(t){if(38===t.keyCode){var r=e(t.target).prev();r.length||(r=e(t.target).parent().is(".search-suggestions__all")?e(".search-suggestions .search-suggestion").last():i),r.focus()}else if(40===t.keyCode){var s=e(t.target).next();s.length||(s=e(t.target).parent().is(".search-suggestions__all")?i:e(".search-suggestions__all a").first()),s.focus()}}),l("",[])})}}}}(jQuery,Drupal)}]);
