(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ip_query-index~pages-oil-index~pages-phone_local-index~pages-recipe-index~pages-scenic-index~p~b584c0ae"],{"07dd":function(t,e,r){"use strict";r.r(e);var n=r("2324"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2324:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("49bf")),i={props:{value:String,placeholder:{type:String,default:"请搜索"}},data:function(){return{img:o.default,searchStr:""}},mounted:function(){this.searchStr=this.value},methods:{clean:function(){this.$emit("clean"),this.searchStr=""}}};e.default=i},"2ba9":function(t,e,r){var n=r("cfac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("b8a9b9a4",n,!0,{sourceMap:!1,shadowMode:!1})},"484f":function(t,e,r){"use strict";r.r(e);var n=r("7f0a"),o=r("07dd");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("69d7");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"29044769",null,!1,n["a"],a);e["default"]=u.exports},"49bf":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="http://file.kvker.com",o={searchIcon:"/380cd34fdd6a53444068/god_utils_search.png",homeHeader:"/f46958c978de7292f540/god_utils_header.png",vLineUrl:"/4575142956cc21460df2/god_utils_v_line.png",knowledge:"/b75d3713731bfe4029e4/god_utils_rubbish_test.png",check:"/0fdb91d831e62aeb8064/god_utils_rubbish_img.png",local:"/7ee4ba69622fa5cba9f6/local_blue.png",arrowDown:"/dc3ca034e9fccd2cdd3e/arrow_down_blue.png","yin.png":"/4536d80bc9573b12b758/yin.png","xue.png":"/673301fcbedd81bddfdb/xue.png","qing.png":"/988f35ce5ab8096f665d/qing.png","yu.png":"/c09bead3e5c2f8b02518/yu.png","shachen.png":"/1a00fe86c390880e010f/shachen.png","wu.png":"/aaedbd0de647fc254dfd/wu.png","yun.png":"/18906b1bcacccf0c67ad/yun.png","lei.png":"/0b4ac27cf71384f7c2f3/lei.png","bingbao.png":"/fe79385fde2c8bd2c65d/bingbao.png",oilSubBg:"/db516815067d33674d58/oil_sub_bg.png"};for(var i in o)o.hasOwnProperty(i)&&(o[i]=n+o[i]);var a=o;e.default=a},5075:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[],searchStr:"",result:"请搜索",resultList:["请搜索"],placeholder:"请搜索"}},onLoad:function(t){t.placeholder&&(this.placeholder=t.placeholder)},methods:{inputSearch:function(t){this.searchStr||(this.resultList=["请搜索"],this.result="请搜索"),this.searchStr=t.detail.value},search:function(){this.result="获取中...",this.resultList=["获取中..."],this.searchResult()}}};e.default=n},"69d7":function(t,e,r){"use strict";var n=r("2ba9"),o=r.n(n);o.a},"7f0a":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"search-box"},[r("v-uni-image",{staticClass:"icon",attrs:{placeholder:t.placeholder,src:t.img.searchIcon,mode:"aspectFit"}}),r("v-uni-input",{staticClass:"search-input",attrs:{placeholder:t.placeholder,"confirm-type":"search"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("input",e)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("confirm",e)}},model:{value:t.searchStr,callback:function(e){t.searchStr=e},expression:"searchStr"}}),r("v-uni-text",{staticClass:"clean",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clean.apply(void 0,arguments)}}},[t._v("X")])],1)},i=[]},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(N([])));b&&b!==n&&o.call(b,a)&&(g=b);var m=E.prototype=_.prototype=Object.create(g);L.prototype=m.constructor=E,E.constructor=L,E[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},S(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=k(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function E(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function k(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return $()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},cfac:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".search-box[data-v-29044769]{position:relative;width:%?690?%;height:%?88?%;border:%?4?% solid #000;border-radius:%?6?%;background:#fff;margin:0 auto}.search-box .icon[data-v-29044769],\n.search-box .clean[data-v-29044769]{position:absolute;top:%?22?%;width:%?50?%;height:%?40?%}.search-box .icon[data-v-29044769]{left:%?26?%}.search-box .search-input[data-v-29044769]{width:100%;height:100%;font-size:%?38?%;font-family:PingFangSC-Regular;padding:0 %?16?% 0 %?80?%;color:#000}.search-box .clean[data-v-29044769]{right:%?26?%;text-align:right;z-index:2}",""]),t.exports=e}}]);