/* Use of this pixel is subject to the Amazon ad specs and policies at http://www.amazon.com/b/?&node=7253015011 */
!function(){"use strict";var e={nameLength:256,valueLength:1e3,eventNameLengthWarning:"Event name is longer than 256 characters.",parameterNameLengthWarning:"Length of parameter name exceeds 256 characters.",parameterValueLengthWarning:"Length of parameter value exceeds 1000 characters.",parameterKeyLengthWarning:"Length of parameter key exceeds 256 characters."};function t(e){this.endpoints=e,this.region="NA",this.stage="PROD",this.tags={},this.tcfv2={}}t.prototype.addTag=function(e,t){var n=null==t?e:t;this.tags[n]=e},t.prototype.getTagIds=function(e){var t=this.tags;return e.map((function(e){return t[e]||e}))},t.prototype.trackEvent=function(e,t,n){this.trackEventWithTags(e,t,n,Object.keys(this.tags))},t.prototype.trackEventWithTags=function(t,n,o,a){var r=this.getPixelEndpoint(this.region,this.stage),i=this.tcfv2;n=n||{},console.log("Event: ",t),console.log("Pixel Endpoint: ",r),t?r?(o&&(n.ts=o),this.getTagIds(a).forEach((function(o){!function(t,n,o,a,r){var i=document.createElement("iframe"),s=t+"?pid="+n+"&event="+o,c=["gdpr","gdpr_pd","gdpr_consent"],h=[];if(o.length>e.nameLength&&h.push(`${e.eventNameLengthWarning}, ${o}`),Array.isArray(a)?(a.length>e.parameterCount&&h.push(`${e.parameterCountWarning}, ${a.length}`),a.forEach((function(t){Object.keys(t)[0].length>e.nameLength&&h.push(`${e.parameterNameLengthWarning}, ${Object.keys(t)[0]}`),t[Object.keys(t)[0]].length>e.valueLength&&h.push(`${e.parameterValueLengthWarning}, ${t[Object.keys(t)[0]]}`)})),s+="&items="+encodeURI(JSON.stringify(a))):a&&Object.keys(a)&&Object.keys(a).filter((function(e){return!c.includes(e)})).forEach((function(t){var n;t.length>e.nameLength&&h.push(`${e.parameterNameLengthWarning}, ${t}`),(n=a[t])?(n.length>e.valueLength?h.push(`${e.parameterValueLengthWarning}, ${n}`):Object.keys(n)&&Object.keys(n)[0]&&Object.keys(n).forEach((function(t){t.length>e.nameLength&&h.push(`${e.parameterKeyLengthWarning}, ${t}`),n[t].length>e.valueLength&&h.push(`${e.parameterValueLengthWarning}, ${n[t]}`)})),"object"==typeof n&&(n=encodeURI(JSON.stringify(n))),s+="&"+t+"="+n):h.push("Key "+t+" has no value")})),h.length>0)return console.warn(`Event has ${h.length} validation errors.`),void console.warn(h);if(r&&c.forEach((function(e){r[e]&&(s+="&"+e+"="+r[e])})),document.cookie.indexOf("amznToken")>=0){const e=document.cookie.split(";").find(e=>e.trim().startsWith("amznToken="));if(void 0!==e){const t=e.substring(e.indexOf("=")+1);s+="&amznToken="+t}}i.style.display="none",i.setAttribute("src",s),i.setAttribute("id","tag_fire_"+n+"_"+o),document.body.appendChild(i)}(r,o,t,n,i[o])}))):console.warn("No valid endpoint."):console.warn("No event specified.")},t.prototype.trackPixel=function(e,t,n){var o=this,a={};((t=(t=t||"").split("?")).length>1?t[1]:t[0]).split("&").forEach((function(e){var t,n,r=e.split("=");r.length<=1||("ex-fargs"===r[0]?(t=o.parsePixelArgs(r[1],"&"),a.fargs_id=t.id,a.fargs_type=t.type):"ex-hargs"===r[0]&&(n=o.parsePixelArgs(r[1],";"),a.hargs_c=n.c,a.hargs_p=n.p))})),this.validatePixelData(a),Object.keys(a).forEach((function(e){a[e]||delete a[e]})),this.trackEvent(e,a,n)},t.prototype.addTcfv2=function(e){this.addTcfv2WithTags(e,Object.keys(this.tags))},t.prototype.addTcfv2WithTags=function(e,t){var n=this.tcfv2;this.getTagIds(t).forEach((function(t){n[t]=e}))},t.prototype.getPixelEndpoint=function(e,t){var n,o=this.endpoints[e];return""===o||null==o?(console.warn("Endpoint does not exist, please check your region configuration!"),null):""===(n=o[t])||null==n?(console.warn("Endpoint does not exist, please check your stage configuration!"),null):n},t.prototype.parsePixelArgs=function(e,t){var n=decodeURIComponent(e),o={};return(n=n.replace(/\?/g,"")).split(t).forEach((function(e){(e=e.split("=")).length>1&&(o[e[0]]=e[1])})),o},t.prototype.validatePixelData=function(e){var t=e.hargs_c&&e.hargs_p,n=e.fargs_id&&e.fargs_type;t||n||console.warn("Invalid arguments for a trackPixel event, please check your implementation!")},t.prototype.setRegion=function(e){this.region=e},t.prototype.setStage=function(e){this.stage=e};var n=t,o=["AddToShoppingCart","Application","Checkout","Contact","Lead","Off-AmazonPurchases","Search","Signup","Subscribe"];function a(e){this.AD_TAG_HTML_PREFIX="amzn-ad-tag-",this.AD_TAG_EVENT_NAMES=o,this.eventTracker=e}a.prototype.init=function(){var e=this.eventTracker;this.AD_TAG_EVENT_NAMES.forEach((function(t){var n="amzn-ad-tag-"+t;document.getElementById(n)&&document.getElementById(n).addEventListener("click",(function(){e.trackEvent(t,{},(new Date).getTime())}))}))},a.prototype.addEventName=function(e){-1===o.indexOf(e)&&o.push(e)},a.prototype.overrideEventPrefix=function(e){this.AD_TAG_HTML_PREFIX=e},a.prototype.overrideEventName=function(e,t){var n=o.indexOf(e);-1!==n&&(o[n]=t)};var r=a;function i(e,t,n){this.eventTracker=e,this.eventListener=t,this.setUserDataHandler=n}i.prototype.proccessCommandQueue=function(e){var t=this;(e||[]).forEach((function(e){t.proccessCommand(e[0],e[1])}))},i.prototype.proccessCommand=function(e,t){var n=Array.prototype.slice.call(e),o=e[0];switch(t=t||(new Date).getTime(),o.toUpperCase()){case"TRACKEVENT":this.trackEvent(n,t);break;case"TRACKPIXEL":this.trackPixel(n,t);break;case"PIXEL":case"WITHTAG":this.withTag(n,t);break;case"ADDPIXEL":case"ADDTAG":this.addTag(n);break;case"ADDTCFV2":this.addTcfv2(n);break;case"SETREGION":this.setRegion(n);break;case"SETSTAGE":this.setStage(n);break;case"LISTEN":this.listen();break;case"OVERRIDE_EVENT_NAME":this.overrideEventname(n);break;case"OVERRIDE_EVENT_PREFIX":this.overrideEventPrefix(n);break;case"ADD_CUSTOM_EVENT":this.addCustomEvent(n);break;case"SETUSERDATA":this.setUserData(n);break;default:console.warn('Unsupported tag command "'+o+'"')}},i.prototype.setUserData=async function(e){this.setUserDataHandler.setUserData(e)},i.prototype.addCustomEvent=function(e){var t=e[1];this.eventListener.addEventName(t)},i.prototype.overrideEventPrefix=function(e){var t=e[1];this.eventListener.overrideEventPrefix(t)},i.prototype.overrideEventname=function(e){var t=e[1],n=e[2];this.eventListener.overrideEventName(t,n)},i.prototype.trackEvent=function(e,t,n){var o=e[1],a=e[2];void 0!==n?this.eventTracker.trackEventWithTags(o,a,t,[n]):this.eventTracker.trackEvent(o,a,t)},i.prototype.trackPixel=function(e,t){this.eventTracker.trackPixel("__pixel__",e[1],t)},i.prototype.withTag=function(e,t){var n=e[1],o=e[2]||"";switch(o.toUpperCase()){case"TRACKEVENT":this.trackEvent(e.slice(2),t,n);break;case"ADDTCFV2":this.addTcfv2(e.slice(2),n);break;default:console.warn('Unsupported command "'+o+'" used after "withTag" command')}},i.prototype.addTag=function(e){var t=e[2],n=e[1];this.eventTracker.addTag(n,t)},i.prototype.addTcfv2=function(e,t){var n=e[1];void 0!==t?this.eventTracker.addTcfv2WithTags(n,[t]):this.eventTracker.addTcfv2(n)},i.prototype.setRegion=function(e){var t=e[1].toUpperCase();this.eventTracker.setRegion(t)},i.prototype.setStage=function(e){var t=e[1].toUpperCase();this.eventTracker.setStage(t)},i.prototype.listen=function(){this.eventListener.init()};var s=i;const c={method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer-when-downgrade"};function h(){}h.prototype.formatRequestBody=function(e){const t={};if(null!==e.gdpr&&(t.gdpr=e.gdpr.enabled?1:0,null!==e.gdpr.consent&&(t.gdprConsent=e.gdpr.consent)),null===e.hashedRecords)throw Error("hashedRecords array is null");if(0===e.hashedRecords.length)throw Error("hashedRecords array is empty");return t.hashedRecords=e.hashedRecords,null!==e.ttl&&(t.ttl=e.ttl),t},h.prototype.requestToken=async function(e){const t={...c,body:JSON.stringify(e)},n=await fetch("https://tk.amazon-adsystem.com/envelope",t);if(n.ok){return await n.json()}const o=await n.text();throw Error(o)},h.prototype.isCookiePresent=function(e){return void 0!==document.cookie.split(";").find(t=>t.trim().startsWith(e+"="))},h.prototype.writeCookie=function(e,t,n){const o=new Date(n).toUTCString();document.cookie=`${e}=${t}; expires=${o}; SameSite=Strict; secure=true;`},h.prototype.renewToken=async function(e){if(!this.isCookiePresent("amznToken")&&!this.isCookiePresent("AMZN-NoCookieConsent"))try{const t=this.formatRequestBody(e),n=await this.requestToken(t);""===n.AIPToken?this.writeCookie("AMZN-NoCookieConsent",n.AIPToken,n.cookieExpiry):this.writeCookie("amznToken",n.AIPToken,n.cookieExpiry)}catch(e){console.error(e)}},h.prototype.deleteToken=async function(){this.isCookiePresent("amznToken")&&this.writeCookie("amznToken","0",1),this.isCookiePresent("AMZN-NoCookieConsent")&&this.writeCookie("AMZN-NoCookieConsent","0",1)},h.prototype.updateToken=async function(e){await this.deleteToken(),await this.renewToken(e)};var p=h;function d(e){this.tokenHandler=e}p.TOKEN_COOKIE_NAME="amznToken",p.NO_CONSENT_COOKIE_NAME="AMZN-NoCookieConsent",d.prototype.setUserData=async function(e){const t={gdpr:{enabled:!1,consent:""},hashedRecords:[{type:"email",record:""}],ttl:9600};var n=e[1];n.gdpr&&(t.gdpr=n.gdpr),n.ttl&&(t.ttl=n.ttl);const o=new RegExp("\\b[A-Fa-f0-9]{64}\\b");null!==n.email&&(n.email=n.email.trim().toLowerCase(),o.test(n.email)?t.hashedRecords[0].record=n.email:await async function(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}(n.email).then(e=>{t.hashedRecords[0].record=e})),this.tokenHandler.updateToken(t)};var u,g,l,f,m,v=d;u=new n({NA:{TEST:"https://s.amazon-adsystem.com/iu3",BETA:"https://s-beta.amazon-adsystem.com/iu3",GAMMA:"https://s-preprod.amazon-adsystem.com/iu3",PROD:"https://s.amazon-adsystem.com/iu3"},EU:{BETA:"",GAMMA:"",PROD:"https://aax-eu.amazon-adsystem.com/s/iu3"},FE:{BETA:"",GAMMA:"",PROD:"https://aax-fe.amazon-adsystem.com/s/iu3"}}),g=new p,l=new v(g),f=new r(u,l),m=new s(u,f,l),window.amzn&&window.amzn.q&&m.proccessCommandQueue(window.amzn.q),window.amzn=function(){m.proccessCommand(arguments)},window.renewToken=function(e){g.renewToken(e)},window.updateToken=function(e){g.updateToken(e)},window.deleteToken=function(){g.deleteToken()}}();