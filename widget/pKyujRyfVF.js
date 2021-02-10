!function(){"use strict";function e(e){if(e)return e.src;try{throw new Error("Get script URL")}catch(e){var t=e.stack;if(t){var i=n(t),a=o(t),d=r(t);return i?i[0]:a?a[0]:d?d[0]:null}}}function t(){return document.currentScript?document.currentScript:document.querySelector("script[jv-id]")||document.querySelector("script[data-jv-id]")}function n(e){return e&&e.match(/https?:\/\/(\S+\.com)\/(widget\.js|widget\/[A-Za-z0-9]+)/)}function o(e){return e&&e.match(/https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)}function r(e){return e&&e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)}function i(){let e=window.location&&window.location.protocol;return-1===["http","https"].indexOf(e||"")&&(e="https:"),e}function a(){const n=window.jivo_config&&window.jivo_config.base_url,o=n||e(t());return o?-1!==o.indexOf("jvs")?"jvs":-1!==o.indexOf("ru1")?"ru1":-1!==o.indexOf("ya")?"ya":"main":null}const d="loader_loaded",s="no_widget_id_or_confighost",l="error_code_1015",c="widget_deleted",u="ie_loading_blocked";window.__jivoOnError=function(e){if(-1===navigator.userAgent.search(/google/gi)&&-1===navigator.userAgent.search(/\+http:\/\/yandex\.com\/bots/gi))try{var t=a(),n=i()+"//err.jivosite.com/widget",o="POST",r={widget:"true",widget_version:window.jivo_version,level:2,url:window.location.href,user_agent:navigator.userAgent,lineNumber:e&&e.lineNumber,fileName:e&&e.fileName,column:e&&e.columnNumber,full_message:e&&e.stack,short_message:e&&e.message,shard:t},d=new XMLHttpRequest;"withCredentials"in d?d.open(o,n,!0):"undefined"!=typeof XDomainRequest&&(d=new XDomainRequest).open(o,n),d.setRequestHeader("Content-Type","application/json"),d.send(JSON.stringify(r))}catch(e){}},function(){var g=.1;window.__hasStorage=!1;try{localStorage.setItem("testLocalStorage","ok"),localStorage.removeItem("testLocalStorage"),window.__hasStorage=!0}catch(e){}function f(g,f,m,v){var p=g.console;if(p||(p={log:function(){},error:function(){}}),g.WebSocket){if(void 0===g.jivo_magic_var){g.jivo_magic_var=!0;var h,w,_,b,y,S,j,C,I,T,E,L={hasStorage:g.__hasStorage,jivoLoaderVersion:m,loadScript:function(e,t){var n=t||f,o=n.getElementsByTagName("script")[0],r=n.createElement("script");ce(r),o.parentNode.insertBefore(r,o).src=e},currentLoaderVersionCache:v},N=navigator.userAgent.toLowerCase(),O=/iPhone|iPad|iPod|Android|Windows Phone/i.test(N),A=f.createElement("iframe"),x=f.createElement("div"),k=0,H=0,B=0,W=[],R=!1,M=!1,q=Q(),U=JSON.parse('["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]')||null,D=JSON.parse('["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]')||null;ve("Initialization"),g.__jivoBundleOnLoad=function(e){clearTimeout(y),S=e;var t=((new Date).getTime()-j)/1e3;t>6&&ee("loadTime",t);ee("bundleLoaded",!0),ee("buildNumber",h.build_number),ve("Bundle is loaded"),function(){b=f.body.lastChild,x.style&&(x.style.opacity="0",x.style.visibility="hidden");x.setAttribute("id","jivo-iframe-container"),x.appendChild(A),b?b.parentNode.insertBefore(x,b.nextSibling):f.body.appendChild(x);K()}()},g.__jivoBundleInit=function(e){e.loaderContext=L,function(){S=null;var e=function(e){if(e){var t=e.querySelectorAll&&e.querySelectorAll(".js-jivo-bundle");return t&&t.length>0?t:e.getElementsByClassName("js-jivo-bundle")}}(pe());if(!e)throw p.error("Cannot get bundle script element"),new Error("Cannot get bundle script element");for(var t=0;t<e.length;t++)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);e=null}()},g.jivo_init=function(){k=0;var e=f.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),g.dispatchEvent(e),$()},g.jivo_destroy=function(){k=0;var e=f.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),g.dispatchEvent(e),delete g.jivo_magic_var,setTimeout((function(){x.parentNode.removeChild(x)}),10)},L.getHostURL=fe,L.loadConfig=z,L.store=q,L.setInStore=ee;var J,X=!1,P=function(e){try{e.blockedURI&&-1!==e.blockedURI.indexOf("jivosite")&&(X=!0,f.removeEventListener("securitypolicyviolation",P))}catch(e){}}.bind(this);try{me(f,"securitypolicyviolation",P)}catch(e){}F(d,5),re(),!(!(J=I)||!/^\d+$/.test(J)&&10!=J.length)||(I=null,C=null,p.error("Widget id is not valid.")),function(){(q=Q()).geoWidgetInfo.widgetId&&(I=q.geoWidgetInfo.widgetId,q=Q(),C=q.configHost);ee("isNewCode",M),L.store=q}();var G=null;T&&(E=T.getAttribute("nonce"))&&(g.jivo_cspNonce=E),I&&C?(ve("widgetId:",I,"configHost:",C),z(oe())):I&&C||(F(s,5),p.error("Failed to evaluate the widgetId or configHost"))}}else p.log("Not supported browser");function z(e,t){if(W.push(e),++B>4){ve("Config load limit is exceeded"),L.hasStorage&&localStorage.removeItem("jv_loader_info_"+I);var n=new Error("Config load limit is exceeded"),o="Config urls: "+W.join(";\r\n");try{n.stack=o}catch(e){n=new Error("Config load limit is exceeded. "+o)}g.__jivoOnError(n)}else if(ve("Loading config from",e),q.deletedInfo.widgetId&&q.deletedInfo.widgetId===I&&q.deletedInfo.resolveTime&&parseInt(q.deletedInfo.resolveTime)>=(new Date).getTime())p.error("This widget is permanently removed");else{var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){var e=be(ue(r));e?(ve("Config is loaded",e),e.isDeleted?de():t?(e.chat_mode=t.chat_mode,e.options=t.options,e.botmode=t.botmode,e.geoip=t.geoip,e.maintenance=!!t.maintenance,Z(e,null)):function(e,t){var n=new XMLHttpRequest;function o(){return!1}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var o=be(ue(n));if(!o)throw new Error("Load widget status error");var r=n.getResponseHeader("X-BotMode"),i=n.getResponseHeader("X-GeoIP"),a=o.agents&&o.agents.length;ve("Status is loaded",o,r,i,a),e.botmode="yes"===r?"yes":null,e.geoip=i||";;;",e.chat_mode=a?"online":"offline",e.options=o.premium?888:0,o.bots&&o.bots.length&&(e.bots=o.bots),e.maintenance=!!o.maintenance,t(o.config_updated_ts)}else if(0!==n.status)throw e.botmode=null,e.geoip=";;;",e.chat_mode="offline",e.options=0,t(null),480==n.status&&ve("Site is under maintenance, try again later."),new Error("Load widget status error: "+n.status)};var r="/configs/development/status.json",a=o()?r:i()+"//"+e.comet.host+"/widget/status/"+e.site_id+"/"+e.widget_id+"?rnd="+Math.random();n.open("GET",a,!0),n.send(null)}(e,(function(t){Z(e,t)}))):se()}else 0!==r.status&&se()},r.open("GET",e,!0),r.send(null)}}function V(e){var t={event:e,widget_id:I,t:(new Date).getTime(),param1:"25.7.0",shard:a()};if(-1===navigator.userAgent.search(/google/gi)&&-1===navigator.userAgent.search(/\+http:\/\/yandex\.com\/bots/gi))try{var n=i()+"//telemetry.jivosite.com/w?cb=loader";for(var o in t)n+="&"+o+"="+encodeURIComponent(t[o]);var r=new XMLHttpRequest;"withCredentials"in r?r.open("GET",n,!0):"undefined"!=typeof XDomainRequest&&(r=new XDomainRequest).open("GET",n),r.send()}catch(e){}}function F(e,t){Math.random()<=.01*t&&V(e)}function Z(e,t){if(ve("checkConfig",e.config_updated_ts,t),e.isDeleted)de();else if(function(){let e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")}()&&e.disable_widget_on_ie11)V(u);else{if(t&&e.config_updated_ts&&e.config_updated_ts!==t)return ve("update configUpdatedTs in store",t),q.configUpdatedTs=t,z(oe(),e);if(e.regions&&!q.isChatStarted){var n=function(e){var t,n,o=e.regions,r=ae(e.geoip);if(o){for(var i=Object.keys(o),a=0;a<i.length;a++)for(var d=o[i[a]],s=0;s<d.length;s++)if(1!=d.length||"default"!==d[s]){var l=ae(d[s]);if(r.country===l.country){if(r.region===l.region)return ie(i[a],d[s],e.geoip);n||l.region||(n=ie(i[a],d[s],e.geoip))}}else t=i[a];if(n)return n;if(t)return ie(t,"default",e.geoip)}}(e);if(n.widgetId!==I)return ve("Wrong geo-widget widgetId",I),ee("geoWidgetInfo",n),I=n.widgetId,void z(oe())}if((G=e.ab_segment)&&G.name&&G.host&&G.staticHost&&1!==e.site_id)if(ve("AB-testing segmentation is enabled in config"),function(e,t){var n=q.abTesting,o=!1;o=n&&n.name===e.name?n.match:function(e,t){if(ve('Check for criteria match of test "'+e.name+'"'),e.device){if(!function(e){if("desktop"===e)return we()&&!_e();if("mobile"===e)return _e();if("all"===e)return we()||_e();return!1}(e.device))return ve('Segment "'+e.name+'" is NOT matched. Criteria: device'),!1}if(e.locale){if(!(e.locale===t.locale))return ve('Segment "'+e.name+'" is NOT matched. Criteria: locale'),!1}if(e.percentage){if(!(n=e.percentage,Math.random()<=.01*n))return ve('Segment "'+e.name+'" is NOT matched. Criteria: percentage'),!1}var n;return ve('Segment "'+e.name+'" is matched!'),!0}(e,t);return ee("abTesting",{name:e.name,match:o}),o}(G,e)){ve("Ab-testing segment match! Segment:",G.name);var o="//"+G.host;ve('Setting new base_url. Was: "'+e.base_url+'". New: "'+o+'".'),e.base_url=o,ve('Setting new static_host. Was: "'+e.static_host+'". New: "'+G.staticHost+'".'),e.static_host=G.staticHost}else ve("Ab-testing segment is NOT matched");else ee("abTesting",null),ve("AB-testing segmentation is NOT enabled in config"),ee("configHost",C);!function(e){if(ee("log",!!e.logs),g.jivo_config=h=e,function(){if(h.host_blacklist)for(var e=h.host_blacklist.split(","),t=0;t<e.length;t++)if(g.location.host.indexOf(e[t].replace(" ",""))>=0)return!0;return!1}())throw ve("Host is blacklisted",g.location.host),new Error("Placing widget is forbidden on "+g.top.location.host);if(t=h.geoip.split(";")[0],U.indexOf(t)>=0)return p.log("[Jivo]: Service unavailable for country");if(!e.disable_stop_words&&function(){var e=!1,t=(d=D,d.map((function(e){return e.split("-").map((function(e){return String.fromCharCode(parseInt(e,32)-20)})).join("")}))),n=f.querySelector('meta[name="description"]'),o=f.querySelector('meta[name="keywords"]'),r=f.title,i=n&&n.content?n.content:"",a=o&&o.content?o.content:"";var d;(ge(r,t)||ge(i,t)||ge(a,t))&&(e=!0);return e}())return V(l),void ve("Init error, code 1015.");if(O&&h.disable_mobile)return void ve("Mobile widget is disabled");var t;0;h.static_host&&(~h.static_host.search(/\/\/cdn(-\w+)?.jivosite.com(\/\w)?/)||~h.static_host.search(/\/\/code(-\w+)?.jivosite.com(\/\w)?/))&&(R=!0);ve("isCdnProvider: ",R),"complete"==f.readyState?Y():q.bundleLoaded&&q.buildNumber==h.build_number?"interactive"==f.readyState?Y():me(g,"DOMContentLoaded",Y):(ee("bundleLoaded",!1),me(g,"load",Y))}(e)}}function Y(){ve("Widget initialization"),function(){ve("Iframe initialization"),A.src="javascript:void(0)",A.role="presentation",A.allow="autoplay",A.title="Jivochat",A.setAttribute("name","jivo_container"),A.setAttribute("id","jivo_container"),A.setAttribute("frameborder","no"),E&&A.setAttribute("nonce",E);g.atob&&"complete"!==f.readyState?me(g,"load",$):$();me(g,"message",(function(e){if(e&&e.data&&"object"==typeof e.data){var t=e.data;"in_node_webkit"==t.name&&(g.jivo_cobrowse={source:e.source,origin:e.origin}),"iframe_url_changed"!=t.name&&"iframe_url_changed"!=t||K()}else h&&1===h.logs&&p&&p.log&&p.log("Error receive postMessage, window message event is empty.")}))}()}function $(){var e=fe();ve("startLoadBundle",e),function(e){ve("Insertion of bundle code from",e);var t=pe(),n=f.createElement("script"),o=function(e){var t=h.bundle_folder?h.bundle_folder:"";return e+t+"/js/bundle_"+h.locale+".js?rand="+h.build_number}(e);j=(new Date).getTime(),ce(n),n.className="js-jivo-bundle",n.src=i()+o,L.bundleSrc=o,n.onerror=function(){ve("loadBundle errorBundle",e),f.getElementById("jcont")&&function(e,t,n){if(clearTimeout(y),++H>=5){if(ve("Bundle load retries count is exceeded"),ve("Bad csp is: "+X),X)return void p.error("Widget not loaded due CSP security policy.");var o=new Error("Bundle NOT loaded. Type: "+e+(t?". Host: "+t:"")+(n?". Status code: "+n:""));return void g.__jivoOnError(o)}$()}("errorBundle",e)},t.appendChild(n)}(e)}function K(){if(!(k++>3)){if(!S)return k--,$();try{_=A.contentWindow.document}catch(e){w=f.domain,A.src="javascript:var d=document.open();d.domain='"+w+"';void(0);",_=A.contentWindow.document}var e='<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',t=(h&&!h.disable_error_reporting?"window.onerror = function (message, url, lineNumber, columnNumber, error) {\n                    if (error && error.error) {\n                        error = error.error;\n                    }\n                \n                    if (!error || !(error instanceof Error)) {\n                        error = {};\n                    }\n                \n                    error.stack = error.stack || 'empty';\n                    error.message = 'Bundle init error: ' + message + ' error.message: ' + error.message;\n                    error.columnNumber = columnNumber;\n                    error.lineNumber = lineNumber;\n                    error.url = url;\n                \n                    window.parent.__jivoOnError(error);\n                };":"")+S;if(!(navigator.userAgent.toLowerCase().indexOf("firefox")>-1)&&_.head&&_.body){_.body.class="notranslate",_.head.innerHTML=e;var n=f.createElement("script");n.type="text/javascript",E&&n.setAttribute("nonce",E),n.innerHTML=t,_.head.appendChild(n)}else{var o='<body class="notranslate"></body>',r='<script type="text/javascript"'+(E?'nonce="'+E+'"':"")+">"+t+"<\/script>",i="<head>"+e+r+"</head>";_.write("<!doctype HTML>"+i+o),r=null,o=null,i=null}_.close(),t=null}}function Q(){var e={isChatStarted:null,geoWidgetInfo:{widgetId:null,clientLocation:null,region:null},configHost:null,deletedInfo:{widgetId:null,resolveTime:null},abTesting:null,buildNumber:null,bundleLoaded:null,isNewCode:null,loadTime:null,log:null,configUpdatedTs:null};if(L.hasStorage&&(localStorage.removeItem("jv_loader_info"),I)){var t=be(localStorage.getItem("jv_loader_info_"+I));t&&te(t,e)}return e}function ee(e,t){if(q[e]=t,L.hasStorage&&I){var n={};te(q,n),localStorage.setItem("jv_loader_info_"+I,(o=n,g.MooTools&&void 0===JSON.stringify?JSON.encode(o):JSON.stringify(o)))}var o}function te(e,t){Object.keys(e).forEach((function(n){(function(e){if(ne(e))return!0;if("object"==typeof e){for(var t=Object.keys(e),n=0;n<t.length;n++)if(!ne(e[t[n]]))return!1;return!0}})(e[n])||(t[n]=e[n])}))}function ne(e){return null===e&&"object"==typeof e}function oe(){var e="";return ve("getConfigUrl",q.configUpdatedTs),q.configUpdatedTs&&(e="?v="+q.configUpdatedTs),i()+C+"/script/widget/config/"+I+e}function re(){var i,a=e(T=t()),d=n(a),s=o(a),l=r(a);C||(d?(C="//"+d[1],M=!0):s?C="//"+s[1]:l&&(C="//"+l[1])),I||(s&&s[2]?(I=s[2],M=!1):l&&l[2]?(I=l[2],M=!1):(M=!0,T&&(I=T.getAttribute("jv-id")||T.getAttribute("data-jv-id")),I||(i=a.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/),I=i?i[1]:null))),ve("getWidgetIdAndConfigHost",I)}function ie(e,t,n){return{widgetId:e,region:t,clientLocation:n}}function ae(e){if("string"==typeof e&&""!==e){var t=e.split(";");return{country:t[0],region:t[1],city:t[2]}}}function de(){ve("Widget was removed",I),ee("configHost",null),q.geoWidgetInfo.widgetId||q.isChatStarted?(ee("geoWidgetInfo",ie(null,null,null)),ee("isChatStarted",null),le()):(ee("deletedInfo",{widgetId:I,resolveTime:((new Date).getTime()+6048e5).toString()}),p.error("Widget "+I+" is permanently removed. Host: "+C),V(c))}function se(){ve("Config loading error"),ee("geoWidgetInfo",ie(null,null,null)),ee("isChatStarted",null),ee("configHost",null),le()}function le(){I=null,C=null,re(),z(oe())}function ce(e){if(e)return e.type="text/javascript",e.async=!0,e.charset="UTF-8",E&&e.setAttribute("nonce",E),e}function ue(e){return e.responseType&&"text"!==e.responseType?"document"===e.responseType?e.responseXML:e.response:e.responseText}function ge(e,t){for(var n=!1,o=0;o<t.length;o++){var r=t[o].toLowerCase(),i=new RegExp("([, .]|^)"+r+"([, .]|$)","gi");if(e.toLowerCase().search(i)>-1){n=!0;break}}return n}function fe(){return R?h.static_host:h.base_url}function me(e,t,n){var o;e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e.attachEvent("on"+t,(o=e,function(){n.call(o,g.event)})),e=null)}function ve(){if(q.log){var e=Array.prototype.slice.call(arguments||[]);e.unshift("Loader:"),p.log.apply(p,e)}}function pe(){var e=f.head||f.getElementsByTagName("head")[0];if(!e)throw p.error("Cannot get document head element"),new Error("Cannot get document head element");return e}function he(e){return-1!==N.indexOf(e)}function we(){return he("chrome")&&!he("opr/")&&"Google Inc."===g.navigator.vendor}function _e(){return!he("windows")&&he("android")}function be(e){try{return g.MooTools&&void 0===JSON.parse?JSON.decode(e):JSON.parse(e)}catch(e){return null}}}var m=f,v=null;if(window.__hasStorage){try{v=JSON.parse(localStorage.getItem("__jivoLoader"))}catch(e){e.message="Loader parse error",window.__jivoOnError(e)}v&&v.version>g&&(m=new Function("window","document","broswerCacheLoaderVersion","currentLoaderVersionCache","("+v.code+")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))}try{m(window,document,g,v?v.version:g)}catch(e){e.message=e.message?"Loader error. "+e.message:"Loader error",window.__jivoOnError(e),delete window.jivo_magic_var,(m=f)(window,document,g,g)}}()}();