!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=461)}({145:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},146:function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),f=function(t,e){return e?e.querySelector(t):document.querySelector(t)},a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=f.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,p=[],l=n(158);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],e))}else{var f=[];for(s=0;s<r.parts.length;s++)f.push(v(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:f}}}}function _(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],f={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}function b(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),p.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=p.indexOf(t);e>=0&&p.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),b(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function v(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=u++;n=c||(c=m(e)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),b(t,e),e}(e),r=O.bind(null,n,e),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=j.bind(null,n),i=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=_(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(f=o[s.id]).refs--,r.push(f)}t&&d(_(t,e),e);for(i=0;i<r.length;i++){var f;if(0===(f=r[i]).refs){for(var a=0;a<f.parts.length;a++)f.parts[a]();delete o[f.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function j(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function O(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=l(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),f=t.href;t.href=URL.createObjectURL(s),f&&URL.revokeObjectURL(f)}},158:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},461:function(t,e,n){t.exports=n(462)},462:function(t,e,n){"use strict";n.r(e);var r;n(463);jQuery(document).ready(((r=jQuery)(".ff_show_payments").on("click",(function(t){t.preventDefault(),r(".ff_sub_cancel_confirmation").hide();var e=r(this),n=e.data("subscription_id"),i=e.closest(".ff_subscription").find(".ff_subscription_payments");if(e.attr("data-got_payments"))return e.attr("data-got_payments",""),void i.removeClass("ff_has_payments").html("");i.html("Fetching Payments..."),function(t,e,n){e.addClass("ff_payments_fetching").prop("disabled",!0),jQuery.get(window.ff_transactions_vars.ajax_url,{subscription_id:t,action:"fluentform_user_payment_endpoints",route:"get_subscription_transactions",_nonce:window.ff_transactions_vars.nonce}).then((function(t){n(t.data.html,"success")})).catch((function(t){t.responseJSON?t.responseJSON.data?n(t.responseJSON.data.message):n("Could not fetch the payments. Please try again"):n(t.responseText)})).always((function(){e.removeClass("ff_payments_fetching").prop("disabled",!1)}))}(n,e,(function(t,n){n?e.attr("data-got_payments","yes"):e.attr("data-got_payments",""),i.addClass("ff_has_payments").html(t)}))})),r(".ff_cancel_subscription").on("click",(function(t){t.preventDefault(),r(".ff_subscription_payments").html("").removeClass("ff_has_payments");var e=r(this),n=e.data("subscription_id"),i=e.closest(".ff_subscription").find(".ff_sub_cancel_confirmation");i.find(".ff_confirm_subscription_cancel").attr("data-subscription_id",n),i.show()})),r(".ff_confirm_subscription_cancel").on("click",(function(){var t=r(this),e=t.data("subscription_id");t.prop("disabled",!0);var n=t.closest(".ff_sub_cancel_confirmation").find(".ff_sub_message_notices");n.html("Sending Request Please wait..."),jQuery.post(window.ff_transactions_vars.ajax_url,{subscription_id:e,action:"fluentform_user_payment_endpoints",route:"cancel_transaction",_nonce:window.ff_transactions_vars.nonce}).then((function(t){n.html(t.message),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(t){var e="Request failed. Please try again";t.responseJSON?t.responseJSON.data&&(e=t.responseJSON.data.message):e=t.responseText,n.html(e)})).always((function(){t.prop("disabled",!1)}))})),void r(".ff_cancel_close").on("click",(function(){r(".ff_sub_cancel_confirmation").hide()}))))},463:function(t,e,n){var r=n(464);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(146)(r,i);r.locals&&(t.exports=r.locals)},464:function(t,e,n){(t.exports=n(145)(!1)).push([t.i,".ff_subscriptions .ff_subscription{background-color:#fff;border:2px solid #e3e8ee;padding:15px 20px;color:#3a4f66}.ff_subscriptions .ff_subscription button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:0;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:6px 15px;font-size:14px;border-radius:4px}.ff_subscriptions .ff_subscription .ff_subscription_header{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}@media only screen and (max-width:768px){.ff_subscriptions .ff_subscription .ff_subscription_header{flex-direction:column}.ff_subscriptions .ff_subscription .ff_subscription_header>div{display:flex;flex-direction:column;flex-basis:100%;flex:1}.ff_subscriptions .ff_subscription .ff_subscription_header>div.ff_plan_info{text-align:left}}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_form_name{font-size:110%;font-weight:500}.ff_subscriptions .ff_subscription .ff_subscription_header>div{display:flex;flex-direction:column;flex-basis:100%;flex:1}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_plan_info{text-align:right}.ff_subscriptions .ff_subscription .ff_subscription_header .pay_amount{font-size:20px;line-height:28px}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_sub_name{color:#393c40;padding-bottom:10px;display:block;overflow:hidden;position:relative}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge{background-color:#d6ecff;border-radius:20px;padding:2px 8px;color:#3d4eac;font-weight:500;font-size:90%;text-transform:capitalize}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge.ff_pay_status_cancelled{background:#ff623e;color:#fff}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_pay_status_badge.ff_pay_status_active{background:#67c23a;color:#fff}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_dates,.ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_text{margin:0;padding:0 0 10px}.ff_subscriptions .ff_subscription .ff_subscription_header .ff_billing_text{margin-top:5px}.ff_subscriptions .ff_subscription .ff_subscription_payments.ff_has_payments{margin:0 -20px -15px;padding:20px;background:#fafdff;border-top:1px solid #e3e8ed}.ff_subscriptions .ff_subscription span.ff_sub_id{font-style:italic;font-size:80%;opacity:.5}.ff_subscriptions .ff_sub_cancel_confirmation{margin:10px -20px -20px;padding:20px;text-align:center;background:#fff7f5;overflow:hidden;position:relative}.ff_subscriptions .ff_sub_cancel_confirmation button.ff_confirm_subscription_cancel{background:#cf3917;color:#fff}",""])}});