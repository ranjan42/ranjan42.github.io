function qc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xa={exports:{}},pl={},ka={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Yc=Symbol.for("react.portal"),bc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.memo"),ld=Symbol.for("react.lazy"),ns=Symbol.iterator;function id(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var Sa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_a=Object.assign,Ea={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Sa}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ca(){}Ca.prototype=pn.prototype;function lo(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||Sa}var io=lo.prototype=new Ca;io.constructor=lo;_a(io,pn.prototype);io.isPureReactComponent=!0;var rs=Array.isArray,Ra=Object.prototype.hasOwnProperty,oo={current:null},Na={key:!0,ref:!0,__self:!0,__source:!0};function Pa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ra.call(t,r)&&!Na.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:oo.current}}function od(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function so(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ls=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sd(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Yc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Dl(o,0):r,rs(l)?(n="",e!=null&&(n=e.replace(ls,"$&/")+"/"),Lr(l,t,n,"",function(u){return u})):l!=null&&(so(l)&&(l=od(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ls,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Dl(i,s);o+=Lr(i,t,n,a,l)}else if(a=id(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Dl(i,s++),o+=Lr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},jr={transition:null},ud={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:jr,ReactCurrentOwner:oo};function Ta(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!so(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=pn;O.Fragment=bc;O.Profiler=Zc;O.PureComponent=lo;O.StrictMode=Xc;O.Suspense=nd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ud;O.act=Ta;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_a({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=oo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ra.call(t,a)&&!Na.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};O.createElement=Pa;O.createFactory=function(e){var t=Pa.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:td,render:e}};O.isValidElement=so;O.lazy=function(e){return{$$typeof:ld,_payload:{_status:-1,_result:e},_init:ad}};O.memo=function(e,t){return{$$typeof:rd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};O.unstable_act=Ta;O.useCallback=function(e,t){return ue.current.useCallback(e,t)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,t){return ue.current.useEffect(e,t)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ue.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";ka.exports=O;var S=ka.exports;const La=Gc(S),cd=qc({__proto__:null,default:La},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=S,fd=Symbol.for("react.element"),pd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,hd=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gd={key:!0,ref:!0,__self:!0,__source:!0};function ja(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)md.call(t,r)&&!gd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:fd,type:e,key:i,ref:o,props:l,_owner:hd.current}}pl.Fragment=pd;pl.jsx=ja;pl.jsxs=ja;xa.exports=pl;var g=xa.exports,ai={},Oa={exports:{}},xe={},Ia={exports:{}},za={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var j=R.length;R.push(L);e:for(;0<j;){var Q=j-1>>>1,X=R[Q];if(0<l(X,L))R[Q]=L,R[j]=X,j=Q;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],j=R.pop();if(j!==L){R[0]=j;e:for(var Q=0,X=R.length,dr=X>>>1;Q<dr;){var St=2*(Q+1)-1,zl=R[St],_t=St+1,fr=R[_t];if(0>l(zl,j))_t<X&&0>l(fr,zl)?(R[Q]=fr,R[_t]=j,Q=_t):(R[Q]=zl,R[St]=j,Q=St);else if(_t<X&&0>l(fr,j))R[Q]=fr,R[_t]=j,Q=_t;else break e}}return L}function l(R,L){var j=R.sortIndex-L.sortIndex;return j!==0?j:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],m=1,p=null,h=3,y=!1,w=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function v(R){if(x=!1,f(R),!w)if(n(a)!==null)w=!0,Ol(_);else{var L=n(u);L!==null&&Il(v,L.startTime-R)}}function _(R,L){w=!1,x&&(x=!1,d(T),T=-1),y=!0;var j=h;try{for(f(L),p=n(a);p!==null&&(!(p.expirationTime>L)||R&&!Te());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,h=p.priorityLevel;var X=Q(p.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(a)&&r(a),f(L)}else r(a);p=n(a)}if(p!==null)var dr=!0;else{var St=n(u);St!==null&&Il(v,St.startTime-L),dr=!1}return dr}finally{p=null,h=j,y=!1}}var N=!1,P=null,T=-1,$=5,I=-1;function Te(){return!(e.unstable_now()-I<$)}function gn(){if(P!==null){var R=e.unstable_now();I=R;var L=!0;try{L=P(!0,R)}finally{L?vn():(N=!1,P=null)}}else N=!1}var vn;if(typeof c=="function")vn=function(){c(gn)};else if(typeof MessageChannel<"u"){var ts=new MessageChannel,Kc=ts.port2;ts.port1.onmessage=gn,vn=function(){Kc.postMessage(null)}}else vn=function(){E(gn,0)};function Ol(R){P=R,N||(N=!0,vn())}function Il(R,L){T=E(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Ol(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var j=h;h=L;try{return R()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=h;h=R;try{return L()}finally{h=j}},e.unstable_scheduleCallback=function(R,L,j){var Q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=j+X,R={id:m++,callback:L,priorityLevel:R,startTime:j,expirationTime:X,sortIndex:-1},j>Q?(R.sortIndex=j,t(u,R),n(a)===null&&R===n(u)&&(x?(d(T),T=-1):x=!0,Il(v,j-Q))):(R.sortIndex=X,t(a,R),w||y||(w=!0,Ol(_))),R},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(R){var L=h;return function(){var j=h;h=L;try{return R.apply(this,arguments)}finally{h=j}}}})(za);Ia.exports=za;var vd=Ia.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=S,we=vd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Da=new Set,Un={};function Mt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Un[e]=t,e=0;e<t.length;e++)Da.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},os={};function xd(e){return ui.call(os,e)?!0:ui.call(is,e)?!1:wd.test(e)?os[e]=!0:(is[e]=!0,!1)}function kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sd(e,t,n,r){if(t===null||typeof t>"u"||kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function co(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sd(t,n,l,r)&&(n=null),r||l===null?xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),Ma=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),po=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Aa=Symbol.for("react.offscreen"),ss=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ml;function Rn(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Fl=!1;function Al(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function _d(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case ci:return"Profiler";case fo:return"StrictMode";case di:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fa:return(e.displayName||"Context")+".Consumer";case Ma:return(e._context.displayName||"Context")+".Provider";case po:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function Ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ba(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cd(e){var t=Ba(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Cd(e))}function Ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ba(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function as(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wa(e,t){t=t.checked,t!=null&&co(e,"checked",t,!1)}function hi(e,t){Wa(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Nn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Ha(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Va(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,$a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Qa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Nd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wi(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,en=null,tn=null;function fs(e){if(e=ar(e)){if(typeof Si!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yl(t),Si(e.stateNode,e.type,t))}}function qa(e){en?tn?tn.push(e):tn=[e]:en=e}function Ga(){if(en){var e=en,t=tn;if(tn=en=null,fs(e),t)for(e=0;e<t.length;e++)fs(t[e])}}function Ya(e,t){return e(t)}function ba(){}var Bl=!1;function Xa(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Ya(e,t,n)}finally{Bl=!1,(en!==null||tn!==null)&&(ba(),Ga())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var _i=!1;if(qe)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){_i=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{_i=!1}function Pd(e,t,n,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var On=!1,Vr=null,$r=!1,Ei=null,Td={onError:function(e){On=!0,Vr=e}};function Ld(e,t,n,r,l,i,o,s,a){On=!1,Vr=null,Pd.apply(Td,arguments)}function jd(e,t,n,r,l,i,o,s,a){if(Ld.apply(this,arguments),On){if(On){var u=Vr;On=!1,Vr=null}else throw Error(k(198));$r||($r=!0,Ei=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ps(e){if(Ft(e)!==e)throw Error(k(188))}function Od(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ps(l),e;if(i===r)return ps(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ja(e){return e=Od(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=we.unstable_scheduleCallback,ms=we.unstable_cancelCallback,Id=we.unstable_shouldYield,zd=we.unstable_requestPaint,K=we.unstable_now,Dd=we.unstable_getCurrentPriorityLevel,go=we.unstable_ImmediatePriority,nu=we.unstable_UserBlockingPriority,Qr=we.unstable_NormalPriority,Md=we.unstable_LowPriority,ru=we.unstable_IdlePriority,ml=null,Ue=null;function Fd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Ud,Ad=Math.log,Bd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Ad(e)/Bd|0)|0}var vr=64,yr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Pn(s):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),l=1<<n,r|=e[n],t&=~l;return r}function Wd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ze(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=Wd(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ze(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,yo,su,au,uu,Ri=!1,wr=[],st=null,at=null,ut=null,Vn=new Map,$n=new Map,nt=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function xn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ar(t),t!==null&&yo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qd(e,t,n,r,l){switch(t){case"focusin":return st=xn(st,e,t,n,r,l),!0;case"dragenter":return at=xn(at,e,t,n,r,l),!0;case"mouseover":return ut=xn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Vn.set(i,xn(Vn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,xn($n.get(i)||null,e,t,n,r,l)),!0}return!1}function cu(e){var t=Rt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Za(n),t!==null){e.blockedOn=t,uu(e.priority,function(){su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ki=r,n.target.dispatchEvent(r),ki=null}else return t=ar(n),t!==null&&yo(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){Or(e)&&n.delete(t)}function Kd(){Ri=!1,st!==null&&Or(st)&&(st=null),at!==null&&Or(at)&&(at=null),ut!==null&&Or(ut)&&(ut=null),Vn.forEach(gs),$n.forEach(gs)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Kd)))}function Qn(e){function t(l){return kn(l,e)}if(0<wr.length){kn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&kn(st,e),at!==null&&kn(at,e),ut!==null&&kn(ut,e),Vn.forEach(t),$n.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)cu(n),n.blockedOn===null&&nt.shift()}var nn=Xe.ReactCurrentBatchConfig,qr=!0;function qd(e,t,n,r){var l=D,i=nn.transition;nn.transition=null;try{D=1,wo(e,t,n,r)}finally{D=l,nn.transition=i}}function Gd(e,t,n,r){var l=D,i=nn.transition;nn.transition=null;try{D=4,wo(e,t,n,r)}finally{D=l,nn.transition=i}}function wo(e,t,n,r){if(qr){var l=Ni(e,t,n,r);if(l===null)bl(e,t,r,Gr,n),hs(e,r);else if(Qd(l,e,t,n,r))r.stopPropagation();else if(hs(e,r),t&4&&-1<$d.indexOf(e)){for(;l!==null;){var i=ar(l);if(i!==null&&ou(i),i=Ni(e,t,n,r),i===null&&bl(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Gr=null;function Ni(e,t,n,r){if(Gr=null,e=ho(r),e=Rt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dd()){case go:return 1;case nu:return 4;case Qr:case Md:return 16;case ru:return 536870912;default:return 16}default:return 16}}var lt=null,xo=null,Ir=null;function fu(){if(Ir)return Ir;var e,t=xo,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function vs(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:vs,this.isPropagationStopped=vs,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=ke(mn),sr=H({},mn,{view:0,detail:0}),Yd=ke(sr),Wl,Hl,Sn,hl=H({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Wl=e.screenX-Sn.screenX,Hl=e.screenY-Sn.screenY):Hl=Wl=0,Sn=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),ys=ke(hl),bd=H({},hl,{dataTransfer:0}),Xd=ke(bd),Zd=H({},sr,{relatedTarget:0}),Vl=ke(Zd),Jd=H({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),ef=ke(Jd),tf=H({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=ke(tf),rf=H({},mn,{data:0}),ws=ke(rf),lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function So(){return af}var uf=H({},sr,{key:function(e){if(e.key){var t=lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=ke(uf),df=H({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=ke(df),ff=H({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),pf=ke(ff),mf=H({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=ke(mf),gf=H({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vf=ke(gf),yf=[9,13,27,32],_o=qe&&"CompositionEvent"in window,In=null;qe&&"documentMode"in document&&(In=document.documentMode);var wf=qe&&"TextEvent"in window&&!In,pu=qe&&(!_o||In&&8<In&&11>=In),ks=" ",Ss=!1;function mu(e,t){switch(e){case"keyup":return yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function xf(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(Ss=!0,ks);case"textInput":return e=t.data,e===ks&&Ss?null:e;default:return null}}function kf(e,t){if(Vt)return e==="compositionend"||!_o&&mu(e,t)?(e=fu(),Ir=xo=lt=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function gu(e,t,n,r){qa(r),t=Yr(t,"onChange"),0<t.length&&(n=new ko("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,Kn=null;function _f(e){Nu(e,0)}function gl(e){var t=Kt(e);if(Ua(t))return e}function Ef(e,t){if(e==="change")return t}var vu=!1;if(qe){var $l;if(qe){var Ql="oninput"in document;if(!Ql){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),Ql=typeof Es.oninput=="function"}$l=Ql}else $l=!1;vu=$l&&(!document.documentMode||9<document.documentMode)}function Cs(){zn&&(zn.detachEvent("onpropertychange",yu),Kn=zn=null)}function yu(e){if(e.propertyName==="value"&&gl(Kn)){var t=[];gu(t,Kn,e,ho(e)),Xa(_f,t)}}function Cf(e,t,n){e==="focusin"?(Cs(),zn=t,Kn=n,zn.attachEvent("onpropertychange",yu)):e==="focusout"&&Cs()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Kn)}function Nf(e,t){if(e==="click")return gl(t)}function Pf(e,t){if(e==="input"||e==="change")return gl(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Tf;function qn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ui.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ns(n,i);var o=Ns(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=qe&&"documentMode"in document&&11>=document.documentMode,$t=null,Pi=null,Dn=null,Ti=!1;function Ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ti||$t==null||$t!==Hr(r)||(r=$t,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&qn(Dn,r)||(Dn=r,r=Yr(Pi,"onSelect"),0<r.length&&(t=new ko("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Kl={},ku={};qe&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function vl(e){if(Kl[e])return Kl[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return Kl[e]=t[n];return e}var Su=vl("animationend"),_u=vl("animationiteration"),Eu=vl("animationstart"),Cu=vl("transitionend"),Ru=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Ru.set(e,t),Mt(t,[e])}for(var ql=0;ql<Ts.length;ql++){var Gl=Ts[ql],Of=Gl.toLowerCase(),If=Gl[0].toUpperCase()+Gl.slice(1);wt(Of,"on"+If)}wt(Su,"onAnimationEnd");wt(_u,"onAnimationIteration");wt(Eu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Cu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jd(r,t,void 0,e),e.currentTarget=null}function Nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Ls(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Ls(l,s,u),i=a}}}if($r)throw e=Ei,$r=!1,Ei=null,e}function F(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(Pu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Pu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Sr]){e[Sr]=!0,Da.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Yl("selectionchange",!1,t))}}function Pu(e,t,n,r){switch(du(t)){case 1:var l=qd;break;case 4:l=Gd;break;default:l=wo}n=l.bind(null,t,n,e),l=void 0,!_i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Rt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Xa(function(){var u=i,m=ho(n),p=[];e:{var h=Ru.get(e);if(h!==void 0){var y=ko,w=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":y=cf;break;case"focusin":w="focus",y=Vl;break;case"focusout":w="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pf;break;case Su:case _u:case Eu:y=ef;break;case Cu:y=hf;break;case"scroll":y=Yd;break;case"wheel":y=vf;break;case"copy":case"cut":case"paste":y=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xs}var x=(t&4)!==0,E=!x&&e==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Hn(c,d),v!=null&&x.push(Yn(c,v,f)))),E)break;c=c.return}0<x.length&&(h=new y(h,w,null,n,m),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ki&&(w=n.relatedTarget||n.fromElement)&&(Rt(w)||w[Ge]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Rt(w):null,w!==null&&(E=Ft(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(x=ys,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=xs,v="onPointerLeave",d="onPointerEnter",c="pointer"),E=y==null?h:Kt(y),f=w==null?h:Kt(w),h=new x(v,c+"leave",y,n,m),h.target=E,h.relatedTarget=f,v=null,Rt(m)===u&&(x=new x(d,c+"enter",w,n,m),x.target=f,x.relatedTarget=E,v=x),E=v,y&&w)t:{for(x=y,d=w,c=0,f=x;f;f=Ut(f))c++;for(f=0,v=d;v;v=Ut(v))f++;for(;0<c-f;)x=Ut(x),c--;for(;0<f-c;)d=Ut(d),f--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ut(x),d=Ut(d)}x=null}else x=null;y!==null&&js(p,h,y,x,!1),w!==null&&E!==null&&js(p,E,w,x,!0)}}e:{if(h=u?Kt(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var _=Ef;else if(_s(h))if(vu)_=Pf;else{_=Rf;var N=Cf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Nf);if(_&&(_=_(e,u))){gu(p,_,n,m);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&gi(h,"number",h.value)}switch(N=u?Kt(u):window,e){case"focusin":(_s(N)||N.contentEditable==="true")&&($t=N,Pi=u,Dn=null);break;case"focusout":Dn=Pi=$t=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Ps(p,n,m);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":Ps(p,n,m)}var P;if(_o)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vt?mu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(pu&&n.locale!=="ko"&&(Vt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vt&&(P=fu()):(lt=m,xo="value"in lt?lt.value:lt.textContent,Vt=!0)),N=Yr(u,T),0<N.length&&(T=new ws(T,e,null,n,m),p.push({event:T,listeners:N}),P?T.data=P:(P=hu(n),P!==null&&(T.data=P)))),(P=wf?xf(e,n):kf(e,n))&&(u=Yr(u,"onBeforeInput"),0<u.length&&(m=new ws("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=P))}Nu(p,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(Yn(e,i,l)),i=Hn(e,t),i!=null&&r.push(Yn(e,i,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function js(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Hn(n,i),a!=null&&o.unshift(Yn(n,a,s))):l||(a=Hn(n,i),a!=null&&o.push(Yn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Df=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(Df,`
`).replace(Mf,"")}function _r(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(k(425))}function br(){}var Li=null,ji=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ii=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,Af=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(Bf)}:Ii;function Bf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Be="__reactFiber$"+hn,bn="__reactProps$"+hn,Ge="__reactContainer$"+hn,zi="__reactEvents$"+hn,Uf="__reactListeners$"+hn,Wf="__reactHandles$"+hn;function Rt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zs(e);e!==null;){if(n=e[Be])return n;e=zs(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Be]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yl(e){return e[bn]||null}var Di=[],qt=-1;function xt(e){return{current:e}}function A(e){0>qt||(e.current=Di[qt],Di[qt]=null,qt--)}function M(e,t){qt++,Di[qt]=e.current,e.current=t}var yt={},oe=xt(yt),pe=xt(!1),jt=yt;function sn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Xr(){A(pe),A(oe)}function Ds(e,t,n){if(oe.current!==yt)throw Error(k(168));M(oe,t),M(pe,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Ed(e)||"Unknown",l));return H({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,jt=oe.current,M(oe,e),M(pe,pe.current),!0}function Ms(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Tu(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,A(pe),A(oe),M(oe,e)):A(pe),M(pe,n)}var Ve=null,wl=!1,Zl=!1;function Lu(e){Ve===null?Ve=[e]:Ve.push(e)}function Hf(e){wl=!0,Lu(e)}function kt(){if(!Zl&&Ve!==null){Zl=!0;var e=0,t=D;try{var n=Ve;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,wl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),tu(go,kt),l}finally{D=t,Zl=!1}}return null}var Gt=[],Yt=0,Jr=null,el=0,_e=[],Ee=0,Ot=null,$e=1,Qe="";function Et(e,t){Gt[Yt++]=el,Gt[Yt++]=Jr,Jr=e,el=t}function ju(e,t,n){_e[Ee++]=$e,_e[Ee++]=Qe,_e[Ee++]=Ot,Ot=e;var r=$e;e=Qe;var l=32-ze(r)-1;r&=~(1<<l),n+=1;var i=32-ze(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,$e=1<<32-ze(t)+l|n<<l|r,Qe=i+e}else $e=1<<i|n<<l|r,Qe=e}function Co(e){e.return!==null&&(Et(e,1),ju(e,1,0))}function Ro(e){for(;e===Jr;)Jr=Gt[--Yt],Gt[Yt]=null,el=Gt[--Yt],Gt[Yt]=null;for(;e===Ot;)Ot=_e[--Ee],_e[Ee]=null,Qe=_e[--Ee],_e[Ee]=null,$e=_e[--Ee],_e[Ee]=null}var ye=null,ve=null,B=!1,Ie=null;function Ou(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:$e,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(B){var t=ve;if(t){var n=t;if(!Fs(e,t)){if(Mi(e))throw Error(k(418));t=ct(n.nextSibling);var r=ye;t&&Fs(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(Mi(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Er(e){if(e!==ye)return!1;if(!B)return As(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=ve)){if(Mi(e))throw Iu(),Error(k(418));for(;t;)Ou(e,t),t=ct(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ct(e.stateNode.nextSibling):null;return!0}function Iu(){for(var e=ve;e;)e=ct(e.nextSibling)}function an(){ve=ye=null,B=!1}function No(e){Ie===null?Ie=[e]:Ie.push(e)}var Vf=Xe.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function zu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=mt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,v){return c===null||c.tag!==6?(c=ii(f,d.mode,v),c.return=d,c):(c=l(c,f),c.return=d,c)}function a(d,c,f,v){var _=f.type;return _===Ht?m(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===et&&Bs(_)===c.type)?(v=l(c,f.props),v.ref=_n(d,c,f),v.return=d,v):(v=Wr(f.type,f.key,f.props,null,d.mode,v),v.ref=_n(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=oi(f,d.mode,v),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function m(d,c,f,v,_){return c===null||c.tag!==7?(c=Lt(f,d.mode,v,_),c.return=d,c):(c=l(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ii(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return f=Wr(c.type,c.key,c.props,null,d.mode,f),f.ref=_n(d,null,c),f.return=d,f;case Wt:return c=oi(c,d.mode,f),c.return=d,c;case et:var v=c._init;return p(d,v(c._payload),f)}if(Nn(c)||yn(c))return c=Lt(c,d.mode,f,null),c.return=d,c;Cr(d,c)}return null}function h(d,c,f,v){var _=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:s(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===_?a(d,c,f,v):null;case Wt:return f.key===_?u(d,c,f,v):null;case et:return _=f._init,h(d,c,_(f._payload),v)}if(Nn(f)||yn(f))return _!==null?null:m(d,c,f,v,null);Cr(d,f)}return null}function y(d,c,f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(c,d,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mr:return d=d.get(v.key===null?f:v.key)||null,a(c,d,v,_);case Wt:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,_);case et:var N=v._init;return y(d,c,f,N(v._payload),_)}if(Nn(v)||yn(v))return d=d.get(f)||null,m(c,d,v,_,null);Cr(c,v)}return null}function w(d,c,f,v){for(var _=null,N=null,P=c,T=c=0,$=null;P!==null&&T<f.length;T++){P.index>T?($=P,P=null):$=P.sibling;var I=h(d,P,f[T],v);if(I===null){P===null&&(P=$);break}e&&P&&I.alternate===null&&t(d,P),c=i(I,c,T),N===null?_=I:N.sibling=I,N=I,P=$}if(T===f.length)return n(d,P),B&&Et(d,T),_;if(P===null){for(;T<f.length;T++)P=p(d,f[T],v),P!==null&&(c=i(P,c,T),N===null?_=P:N.sibling=P,N=P);return B&&Et(d,T),_}for(P=r(d,P);T<f.length;T++)$=y(P,d,T,f[T],v),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?T:$.key),c=i($,c,T),N===null?_=$:N.sibling=$,N=$);return e&&P.forEach(function(Te){return t(d,Te)}),B&&Et(d,T),_}function x(d,c,f,v){var _=yn(f);if(typeof _!="function")throw Error(k(150));if(f=_.call(f),f==null)throw Error(k(151));for(var N=_=null,P=c,T=c=0,$=null,I=f.next();P!==null&&!I.done;T++,I=f.next()){P.index>T?($=P,P=null):$=P.sibling;var Te=h(d,P,I.value,v);if(Te===null){P===null&&(P=$);break}e&&P&&Te.alternate===null&&t(d,P),c=i(Te,c,T),N===null?_=Te:N.sibling=Te,N=Te,P=$}if(I.done)return n(d,P),B&&Et(d,T),_;if(P===null){for(;!I.done;T++,I=f.next())I=p(d,I.value,v),I!==null&&(c=i(I,c,T),N===null?_=I:N.sibling=I,N=I);return B&&Et(d,T),_}for(P=r(d,P);!I.done;T++,I=f.next())I=y(P,d,T,I.value,v),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?T:I.key),c=i(I,c,T),N===null?_=I:N.sibling=I,N=I);return e&&P.forEach(function(gn){return t(d,gn)}),B&&Et(d,T),_}function E(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Ht&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var _=f.key,N=c;N!==null;){if(N.key===_){if(_=f.type,_===Ht){if(N.tag===7){n(d,N.sibling),c=l(N,f.props.children),c.return=d,d=c;break e}}else if(N.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===et&&Bs(_)===N.type){n(d,N.sibling),c=l(N,f.props),c.ref=_n(d,N,f),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Ht?(c=Lt(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=Wr(f.type,f.key,f.props,null,d.mode,v),v.ref=_n(d,c,f),v.return=d,d=v)}return o(d);case Wt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=l(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=oi(f,d.mode,v),c.return=d,d=c}return o(d);case et:return N=f._init,E(d,c,N(f._payload),v)}if(Nn(f))return w(d,c,f,v);if(yn(f))return x(d,c,f,v);Cr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,f),c.return=d,d=c):(n(d,c),c=ii(f,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return E}var un=zu(!0),Du=zu(!1),tl=xt(null),nl=null,bt=null,Po=null;function To(){Po=bt=nl=null}function Lo(e){var t=tl.current;A(tl),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){nl=e,Po=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},bt===null){if(nl===null)throw Error(k(308));bt=e,nl.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return t}var Nt=null;function jo(e){Nt===null?Nt=[e]:Nt.push(e)}function Mu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,jo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,jo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(i!==null){var p=l.baseState;o=0,m=u=a=null,s=i;do{var h=s.lane,y=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(h=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){p=w.call(y,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(y,p,h):w,h==null)break e;p=H({},p,h);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=y,a=p):m=m.next=y,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=p}}function Ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var ur={},We=xt(ur),Xn=xt(ur),Zn=xt(ur);function Pt(e){if(e===ur)throw Error(k(174));return e}function Io(e,t){switch(M(Zn,t),M(Xn,e),M(We,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yi(t,e)}A(We),M(We,t)}function cn(){A(We),A(Xn),A(Zn)}function Au(e){Pt(Zn.current);var t=Pt(We.current),n=yi(t,e.type);t!==n&&(M(Xn,e),M(We,n))}function zo(e){Xn.current===e&&(A(We),A(Xn))}var U=xt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Do(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Mr=Xe.ReactCurrentDispatcher,ei=Xe.ReactCurrentBatchConfig,It=0,W=null,Y=null,Z=null,il=!1,Mn=!1,Jn=0,$f=0;function re(){throw Error(k(321))}function Mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,l,i){if(It=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Gf:Yf,e=n(r,l),Mn){i=0;do{if(Mn=!1,Jn=0,25<=i)throw Error(k(301));i+=1,Z=Y=null,t.updateQueue=null,Mr.current=bf,e=n(r,l)}while(Mn)}if(Mr.current=ol,t=Y!==null&&Y.next!==null,It=0,Z=Y=W=null,il=!1,t)throw Error(k(300));return e}function Ao(){var e=Jn!==0;return Jn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?W.memoizedState=Z=e:Z=Z.next=e,Z}function Pe(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?W.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(k(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?W.memoizedState=Z=e:Z=Z.next=e}return Z}function er(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var m=u.lane;if((It&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,W.lanes|=m,zt|=m}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,Me(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,zt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ni(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bu(){}function Uu(e,t){var n=W,r=Pe(),l=t(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Bo(Vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,tr(9,Hu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(k(349));It&30||Wu(n,t,l)}return l}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Qu(e)}function Vu(e,t,n){return n(function(){$u(t)&&Qu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function Qu(e){var t=Ye(e,1);t!==null&&De(t,e,1,-1)}function Hs(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=qf.bind(null,W,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ku(){return Pe().memoizedState}function Fr(e,t,n,r){var l=Ae();W.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Mo(r,o.deps)){l.memoizedState=tr(t,n,i,r);return}}W.flags|=e,l.memoizedState=tr(1|t,n,i,r)}function Vs(e,t){return Fr(8390656,8,e,t)}function Bo(e,t){return xl(2048,8,e,t)}function qu(e,t){return xl(4,2,e,t)}function Gu(e,t){return xl(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Yu.bind(null,t,e),n)}function Uo(){}function Xu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return It&21?(Me(n,t)||(n=lu(),W.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Qf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),t()}finally{D=n,ei.transition=r}}function ec(){return Pe().memoizedState}function Kf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))nc(t,n);else if(n=Mu(e,t,n,r),n!==null){var l=ae();De(n,e,r,l),rc(n,t,r)}}function qf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))nc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Me(s,o)){var a=t.interleaved;a===null?(l.next=l,jo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Mu(e,t,l,r),n!==null&&(l=ae(),De(n,e,r,l),rc(n,t,r))}}function tc(e){var t=e.alternate;return e===W||t!==null&&t===W}function nc(e,t){Mn=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}var ol={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Gf={readContext:Ne,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kf.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:Hs,useDebugValue:Uo,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Hs(!1),t=e[0];return e=Qf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Ae();if(B){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),J===null)throw Error(k(349));It&30||Wu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Vs(Vu.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,Hu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=J.identifierPrefix;if(B){var n=Qe,r=$e;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yf={readContext:Ne,useCallback:Xu,useContext:Ne,useEffect:Bo,useImperativeHandle:bu,useInsertionEffect:qu,useLayoutEffect:Gu,useMemo:Zu,useReducer:ti,useRef:Ku,useState:function(){return ti(er)},useDebugValue:Uo,useDeferredValue:function(e){var t=Pe();return Ju(t,Y.memoizedState,e)},useTransition:function(){var e=ti(er)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Uu,useId:ec,unstable_isNewReconciler:!1},bf={readContext:Ne,useCallback:Xu,useContext:Ne,useEffect:Bo,useImperativeHandle:bu,useInsertionEffect:qu,useLayoutEffect:Gu,useMemo:Zu,useReducer:ni,useRef:Ku,useState:function(){return ni(er)},useDebugValue:Uo,useDeferredValue:function(e){var t=Pe();return Y===null?t.memoizedState=e:Ju(t,Y.memoizedState,e)},useTransition:function(){var e=ni(er)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Uu,useId:ec,unstable_isNewReconciler:!1};function je(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=Ke(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(De(t,e,l,r),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=Ke(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(De(t,e,l,r),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(De(t,e,r,n),Dr(t,e,r))}};function $s(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,i):!0}function lc(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=me(t)?jt:oe.current,r=t.contextTypes,i=(r=r!=null)?sn(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Oo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=me(t)?jt:oe.current,l.context=sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=_d(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Xi=r),Wi(e,t)},n}function oc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Wi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=dp.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Zf=Xe.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?Du(t,null,n,r):un(t,e.child,n,r)}function Ys(e,t,n,r,l){n=n.render;var i=t.ref;return rn(t,l),r=Fo(e,t,n,r,i,l),n=Ao(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):(B&&n&&Co(t),t.flags|=1,se(e,t,r,l),t.child)}function bs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Go(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sc(e,t,i,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return be(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,be(e,t,l)}return Hi(e,t,n,r,l)}function ac(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Zt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Zt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M(Zt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M(Zt,ge),ge|=r;return se(e,t,l,n),t.child}function uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,r,l){var i=me(n)?jt:oe.current;return i=sn(t,i),rn(t,l),n=Fo(e,t,n,r,i,l),r=Ao(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,be(e,t,l)):(B&&r&&Co(t),t.flags|=1,se(e,t,n,l),t.child)}function Xs(e,t,n,r,l){if(me(n)){var i=!0;Zr(t)}else i=!1;if(rn(t,l),t.stateNode===null)Ar(e,t),lc(t,n,r),Ui(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=me(n)?jt:oe.current,u=sn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Qs(t,o,r,u),tt=!1;var h=t.memoizedState;o.state=h,rl(t,r,o,l),a=t.memoizedState,s!==r||h!==a||pe.current||tt?(typeof m=="function"&&(Bi(t,n,m,r),a=t.memoizedState),(s=tt||$s(t,n,s,r,h,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:je(t.type,s),o.props=u,p=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=me(n)?jt:oe.current,a=sn(t,a));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==a)&&Qs(t,o,r,a),tt=!1,h=t.memoizedState,o.state=h,rl(t,r,o,l);var w=t.memoizedState;s!==p||h!==w||pe.current||tt?(typeof y=="function"&&(Bi(t,n,y,r),w=t.memoizedState),(u=tt||$s(t,n,u,r,h,w,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Vi(e,t,n,r,i,l)}function Vi(e,t,n,r,l,i){uc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ms(t,n,!1),be(e,t,i);r=t.stateNode,Zf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,i),t.child=un(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&Ms(t,n,!0),t.child}function cc(e){var t=e.stateNode;t.pendingContext?Ds(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ds(e,t.context,!1),Io(e,t.containerInfo)}function Zs(e,t,n,r,l){return an(),No(l),t.flags|=256,se(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function dc(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(U,l&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=El(o,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qi(n),t.memoizedState=$i,e):Wo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Jf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=mt(s,i):(i=Lt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Qi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&No(r),un(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(k(422))),Rr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=El({mode:"visible",children:r.children},l,0,null),i=Lt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=Qi(o),t.memoizedState=$i,i);if(!(t.mode&1))return Rr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=ri(i,r,void 0),Rr(e,t,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),De(r,e,l,-1))}return qo(),r=ri(Error(k(421))),Rr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=fp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=ct(l.nextSibling),ye=t,B=!0,Ie=null,e!==null&&(_e[Ee++]=$e,_e[Ee++]=Qe,_e[Ee++]=Ot,$e=e.id,Qe=e.overflow,Ot=t),t=Wo(t,r.children),t.flags|=4096,t)}function Js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function li(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function fc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),li(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function be(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ep(e,t,n){switch(t.tag){case 3:cc(t),an();break;case 5:Au(t);break;case 1:me(t.type)&&Zr(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?dc(e,t,n):(M(U,U.current&1),e=be(e,t,n),e!==null?e.sibling:null);M(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return be(e,t,n)}var pc,Ki,mc,hc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ki=function(){};mc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(We.current);var i=null;switch(n){case"input":l=mi(e,l),r=mi(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=vi(e,l),r=vi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=br)}wi(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Un.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Un.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&F("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tp(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Xr(),le(t),null;case 3:return r=t.stateNode,cn(),A(pe),A(oe),Do(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(eo(Ie),Ie=null))),Ki(e,t),le(t),null;case 5:zo(t);var l=Pt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)mc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Pt(We.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[bn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":as(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":cs(r,i),F("invalid",r)}wi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",""+s]):Un.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":hr(r),us(r,i,!0);break;case"textarea":hr(r),ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Va(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[bn]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(o=xi(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":as(e,r),l=mi(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":cs(e,r),l=vi(e,r),F("invalid",e);break;default:l=r}wi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ka(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$a(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wn(e,a):typeof a=="number"&&Wn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?a!=null&&i==="onScroll"&&F("scroll",e):a!=null&&co(e,i,a,o))}switch(n){case"input":hr(e),us(e,r,!1);break;case"textarea":hr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Pt(Zn.current),Pt(We.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return le(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&t.mode&1&&!(t.flags&128))Iu(),an(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Be]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Ie!==null&&(eo(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?b===0&&(b=3):qo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return cn(),Ki(e,t),e===null&&Gn(t.stateNode.containerInfo),le(t),null;case 10:return Lo(t.type._context),le(t),null;case 17:return me(t.type)&&Xr(),le(t),null;case 19:if(A(U),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)En(i,!1);else{if(b!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,En(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>fn&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return le(t),null}else 2*K()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=U.current,M(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function np(e,t){switch(Ro(t),t.tag){case 1:return me(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),A(pe),A(oe),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zo(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return cn(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return Ko(),null;case 24:return null;default:return null}}var Nr=!1,ie=!1,rp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function qi(e,t,n){try{n()}catch(r){V(e,t,r)}}var ea=!1;function lp(e,t){if(Li=qr,e=xu(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,m=0,p=e,h=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===l&&(s=o),h===i&&++m===r&&(a=o),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ji={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,E=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:je(t.type,x),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=ea,ea=!1,w}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&qi(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[bn],delete t[zi],delete t[Uf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vc(e){return e.tag===5||e.tag===3||e.tag===4}function ta(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=br));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}var ee=null,Oe=!1;function Je(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ie||Xt(n,t);case 6:var r=ee,l=Oe;ee=null,Je(e,t,n),ee=r,Oe=l,ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Qn(e)):Xl(ee,n.stateNode));break;case 4:r=ee,l=Oe,ee=n.stateNode.containerInfo,Oe=!0,Je(e,t,n),ee=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&qi(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ie&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function na(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rp),t.forEach(function(r){var l=pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Oe=!1;break e;case 3:ee=s.stateNode.containerInfo,Oe=!0;break e;case 4:ee=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ee===null)throw Error(k(160));yc(i,o,l),ee=null,Oe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){V(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Fe(e),r&4){try{Fn(3,e,e.return),Sl(3,e)}catch(x){V(e,e.return,x)}try{Fn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:Le(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Le(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(x){V(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Wa(l,i),xi(s,o);var u=xi(s,i);for(o=0;o<a.length;o+=2){var m=a[o],p=a[o+1];m==="style"?Ka(l,p):m==="dangerouslySetInnerHTML"?$a(l,p):m==="children"?Wn(l,p):co(l,m,p,u)}switch(s){case"input":hi(l,i);break;case"textarea":Ha(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Jt(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[bn]=i}catch(x){V(e,e.return,x)}}break;case 6:if(Le(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(Le(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:Le(t,e),Fe(e);break;case 13:Le(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||($o=K())),r&4&&na(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||m,Le(t,e),ie=u):Le(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(h=C,y=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Xt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Xt(h,h.return);break;case 22:if(h.memoizedState!==null){la(p);continue}}y!==null?(y.return=h,C=y):la(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qa("display",o))}catch(x){V(e,e.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){V(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),Fe(e),r&4&&na(e);break;case 21:break;default:Le(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var i=ta(e);bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ta(e);Yi(e,s,o);break;default:throw Error(k(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e,t,n){C=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Nr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ie;s=Nr;var u=ie;if(Nr=o,(ie=a)&&!u)for(C=l;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?ia(l):a!==null?(a.return=o,C=a):ia(l);for(;i!==null;)C=i,xc(i),i=i.sibling;C=l,Nr=s,ie=u}ra(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ra(e)}}function ra(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ws(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ws(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Qn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||t.flags&512&&Gi(t)}catch(h){V(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function la(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ia(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){V(t,l,a)}}var i=t.return;try{Gi(t)}catch(a){V(t,i,a)}break;case 5:var o=t.return;try{Gi(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var op=Math.ceil,sl=Xe.ReactCurrentDispatcher,Ho=Xe.ReactCurrentOwner,Re=Xe.ReactCurrentBatchConfig,z=0,J=null,q=null,te=0,ge=0,Zt=xt(0),b=0,nr=null,zt=0,_l=0,Vo=0,An=null,de=null,$o=0,fn=1/0,He=null,al=!1,Xi=null,ft=null,Pr=!1,it=null,ul=0,Bn=0,Zi=null,Br=-1,Ur=0;function ae(){return z&6?K():Br!==-1?Br:Br=K()}function pt(e){return e.mode&1?z&2&&te!==0?te&-te:Vf.transition!==null?(Ur===0&&(Ur=lu()),Ur):(e=D,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function De(e,t,n,r){if(50<Bn)throw Bn=0,Zi=null,Error(k(185));or(e,n,r),(!(z&2)||e!==J)&&(e===J&&(!(z&2)&&(_l|=n),b===4&&rt(e,te)),he(e,r),n===1&&z===0&&!(t.mode&1)&&(fn=K()+500,wl&&kt()))}function he(e,t){var n=e.callbackNode;Hd(e,t);var r=Kr(e,e===J?te:0);if(r===0)n!==null&&ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ms(n),t===1)e.tag===0?Hf(oa.bind(null,e)):Lu(oa.bind(null,e)),Af(function(){!(z&6)&&kt()}),n=null;else{switch(iu(r)){case 1:n=go;break;case 4:n=nu;break;case 16:n=Qr;break;case 536870912:n=ru;break;default:n=Qr}n=Pc(n,kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kc(e,t){if(Br=-1,Ur=0,z&6)throw Error(k(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Kr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=z;z|=2;var i=_c();(J!==e||te!==t)&&(He=null,fn=K()+500,Tt(e,t));do try{up();break}catch(s){Sc(e,s)}while(!0);To(),sl.current=i,z=l,q!==null?t=0:(J=null,te=0,t=b)}if(t!==0){if(t===2&&(l=Ci(e),l!==0&&(r=l,t=Ji(e,l))),t===1)throw n=nr,Tt(e,0),rt(e,r),he(e,K()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!sp(l)&&(t=cl(e,r),t===2&&(i=Ci(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=nr,Tt(e,0),rt(e,r),he(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ct(e,de,He);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=$o+500-K(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ii(Ct.bind(null,e,de,He),t);break}Ct(e,de,He);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ze(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*op(r/1960))-r,10<r){e.timeoutHandle=Ii(Ct.bind(null,e,de,He),r);break}Ct(e,de,He);break;case 5:Ct(e,de,He);break;default:throw Error(k(329))}}}return he(e,K()),e.callbackNode===n?kc.bind(null,e):null}function Ji(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=de,de=n,t!==null&&eo(t)),e}function eo(e){de===null?de=e:de.push.apply(de,e)}function sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Vo,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function oa(e){if(z&6)throw Error(k(327));ln();var t=Kr(e,0);if(!(t&1))return he(e,K()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=Ci(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=nr,Tt(e,0),rt(e,t),he(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,de,He),he(e,K()),null}function Qo(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(fn=K()+500,wl&&kt())}}function Dt(e){it!==null&&it.tag===0&&!(z&6)&&ln();var t=z;z|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,z=t,!(z&6)&&kt()}}function Ko(){ge=Zt.current,A(Zt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ff(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:cn(),A(pe),A(oe),Do();break;case 5:zo(r);break;case 4:cn();break;case 13:A(U);break;case 19:A(U);break;case 10:Lo(r.type._context);break;case 22:case 23:Ko()}n=n.return}if(J=e,q=e=mt(e.current,null),te=ge=t,b=0,nr=null,Vo=_l=zt=0,de=An=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Nt=null}return e}function Sc(e,t){do{var n=q;try{if(To(),Mr.current=ol,il){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(It=0,Z=Y=W=null,Mn=!1,Jn=0,Ho.current=null,n===null||n.return===null){b=1,nr=t,q=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=qs(o);if(y!==null){y.flags&=-257,Gs(y,o,s,i,t),y.mode&1&&Ks(i,u,t),t=y,a=u;var w=t.updateQueue;if(w===null){var x=new Set;x.add(a),t.updateQueue=x}else w.add(a);break e}else{if(!(t&1)){Ks(i,u,t),qo();break e}a=Error(k(426))}}else if(B&&s.mode&1){var E=qs(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Gs(E,o,s,i,t),No(dn(a,s));break e}}i=a=dn(a,s),b!==4&&(b=2),An===null?An=[i]:An.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=ic(i,a,t);Us(i,d);break e;case 1:s=a;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=oc(i,s,t);Us(i,v);break e}}i=i.return}while(i!==null)}Cc(n)}catch(_){t=_,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function _c(){var e=sl.current;return sl.current=ol,e===null?ol:e}function qo(){(b===0||b===3||b===2)&&(b=4),J===null||!(zt&268435455)&&!(_l&268435455)||rt(J,te)}function cl(e,t){var n=z;z|=2;var r=_c();(J!==e||te!==t)&&(He=null,Tt(e,t));do try{ap();break}catch(l){Sc(e,l)}while(!0);if(To(),z=n,sl.current=r,q!==null)throw Error(k(261));return J=null,te=0,b}function ap(){for(;q!==null;)Ec(q)}function up(){for(;q!==null&&!Id();)Ec(q)}function Ec(e){var t=Nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Cc(e):q=t,Ho.current=null}function Cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=np(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{b=6,q=null;return}}else if(n=tp(n,t,ge),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);b===0&&(b=5)}function Ct(e,t,n){var r=D,l=Re.transition;try{Re.transition=null,D=1,cp(e,t,n,r)}finally{Re.transition=l,D=r}return null}function cp(e,t,n,r){do ln();while(it!==null);if(z&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Vd(e,i),e===J&&(q=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Pc(Qr,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var o=D;D=1;var s=z;z|=4,Ho.current=null,lp(e,n),wc(n,e),Lf(ji),qr=!!Li,ji=Li=null,e.current=n,ip(n),zd(),z=s,D=o,Re.transition=i}else e.current=n;if(Pr&&(Pr=!1,it=e,ul=l),i=e.pendingLanes,i===0&&(ft=null),Fd(n.stateNode),he(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xi,Xi=null,e;return ul&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===Zi?Bn++:(Bn=0,Zi=e):Bn=0,kt(),null}function ln(){if(it!==null){var e=iu(ul),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ul=0,z&6)throw Error(k(331));var l=z;for(z|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Fn(8,m,i)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var h=m.sibling,y=m.return;if(gc(m),m===u){C=null;break}if(h!==null){h.return=y,C=h;break}C=y}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(_){V(s,s.return,_)}if(s===o){C=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,C=v;break e}C=s.return}}if(z=l,kt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function sa(e,t,n){t=dn(n,t),t=ic(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(or(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)sa(e,e,n);else for(;t!==null;){if(t.tag===3){sa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=oc(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(or(t,1,e),he(t,e));break}}t=t.return}}function dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(b===4||b===3&&(te&130023424)===te&&500>K()-$o?Tt(e,0):Vo|=n),he(e,t)}function Rc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(or(e,t,n),he(e,n))}function fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rc(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rc(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,ep(e,t,n);fe=!!(e.flags&131072)}else fe=!1,B&&t.flags&1048576&&ju(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=sn(t,oe.current);rn(t,n),l=Fo(null,t,r,e,l,n);var i=Ao();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Zr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Oo(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Ui(t,r,e,n),t=Vi(null,t,r,!0,i,n)):(t.tag=0,B&&i&&Co(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=hp(r),e=je(r,e),l){case 0:t=Hi(null,t,r,e,n);break e;case 1:t=Xs(null,t,r,e,n);break e;case 11:t=Ys(null,t,r,e,n);break e;case 14:t=bs(null,t,r,je(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Hi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Xs(e,t,r,l,n);case 3:e:{if(cc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Fu(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dn(Error(k(423)),t),t=Zs(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(k(424)),t),t=Zs(e,t,r,n,l);break e}else for(ve=ct(t.stateNode.containerInfo.firstChild),ye=t,B=!0,Ie=null,n=Du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===l){t=be(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Au(t),e===null&&Fi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Oi(r,l)?o=null:i!==null&&Oi(r,i)&&(t.flags|=32),uc(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return dc(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Ys(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,M(tl,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!pe.current){t=be(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ke(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ai(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ai(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=Ne(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=je(r,t.pendingProps),l=je(r.type,l),bs(e,t,r,l,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Ar(e,t),t.tag=1,me(r)?(e=!0,Zr(t)):e=!1,rn(t,n),lc(t,r,l),Ui(t,r,l,n),Vi(null,t,r,!0,e,n);case 19:return fc(e,t,n);case 22:return ac(e,t,n)}throw Error(k(156,t.tag))};function Pc(e,t){return tu(e,t)}function mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new mp(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===po)return 11;if(e===mo)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return Lt(n.children,l,i,t);case fo:o=8,l|=8;break;case ci:return e=Ce(12,n,t,l|2),e.elementType=ci,e.lanes=i,e;case di:return e=Ce(13,n,t,l),e.elementType=di,e.lanes=i,e;case fi:return e=Ce(19,n,t,l),e.elementType=fi,e.lanes=i,e;case Aa:return El(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ma:o=10;break e;case Fa:o=9;break e;case po:o=11;break e;case mo:o=14;break e;case et:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Aa,e.lanes=n,e.stateNode={isHidden:!1},e}function ii(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Yo(e,t,n,r,l,i,o,s,a){return e=new gp(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(i),e}function vp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return yt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(me(n))return Tu(e,n,t)}return t}function Lc(e,t,n,r,l,i,o,s,a){return e=Yo(n,r,!0,e,l,i,o,s,a),e.context=Tc(null),n=e.current,r=ae(),l=pt(n),i=Ke(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,or(e,l,r),he(e,r),e}function Cl(e,t,n,r){var l=t.current,i=ae(),o=pt(l);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,o),e!==null&&(De(e,l,o,i),Dr(e,l,o)),o}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bo(e,t){aa(e,t),(e=e.alternate)&&aa(e,t)}function yp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Rl.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Cl(e,t,null,null)};Rl.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Cl(null,e,null,null)}),t[Ge]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&cu(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ua(){}function wp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=dl(o);i.call(u)}}var o=Lc(t,r,e,0,null,!1,!1,"",ua);return e._reactRootContainer=o,e[Ge]=o.current,Gn(e.nodeType===8?e.parentNode:e),Dt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=dl(a);s.call(u)}}var a=Yo(e,0,!1,null,null,!1,!1,"",ua);return e._reactRootContainer=a,e[Ge]=a.current,Gn(e.nodeType===8?e.parentNode:e),Dt(function(){Cl(t,a,n,r)}),a}function Pl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=dl(o);s.call(a)}}Cl(t,o,e,l)}else o=wp(n,t,e,l,r);return dl(o)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(vo(t,n|1),he(t,K()),!(z&6)&&(fn=K()+500,kt()))}break;case 13:Dt(function(){var r=Ye(e,1);if(r!==null){var l=ae();De(r,e,1,l)}}),bo(e,1)}};yo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();De(t,e,134217728,n)}bo(e,134217728)}};su=function(e){if(e.tag===13){var t=pt(e),n=Ye(e,t);if(n!==null){var r=ae();De(n,e,t,r)}bo(e,t)}};au=function(){return D};uu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Si=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(k(90));Ua(r),hi(r,l)}}}break;case"textarea":Ha(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ya=Qo;ba=Dt;var xp={usingClientEntryPoint:!1,Events:[ar,Kt,yl,qa,Ga,Qo]},Cn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{ml=Tr.inject(kp),Ue=Tr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(k(200));return vp(e,t,null,n)};xe.createRoot=function(e,t){if(!Zo(e))throw Error(k(299));var n=!1,r="",l=jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Yo(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Xo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Dt(e)};xe.hydrate=function(e,t,n){if(!Nl(t))throw Error(k(200));return Pl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=jc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Rl(t)};xe.render=function(e,t,n){if(!Nl(t))throw Error(k(200));return Pl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(k(40));return e._reactRootContainer?(Dt(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};xe.unstable_batchedUpdates=Qo;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Nl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Pl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),Oa.exports=xe;var Sp=Oa.exports,ca=Sp;ai.createRoot=ca.createRoot,ai.hydrateRoot=ca.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const da="popstate";function _p(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:s="",hash:a=""}=At(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),to("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:fl(i))}function r(l,i){Tl(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Cp(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ep(){return Math.random().toString(36).substr(2,8)}function fa(e,t){return{usr:e.state,key:e.key,idx:t}}function to(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?At(t):t,{state:n,key:t&&t.key||r||Ep()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function At(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Cp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=ot.Pop,a=null,u=m();u==null&&(u=0,o.replaceState(rr({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=ot.Pop;let E=m(),d=E==null?null:E-u;u=E,a&&a({action:s,location:x.location,delta:d})}function h(E,d){s=ot.Push;let c=to(x.location,E,d);n&&n(c,E),u=m()+1;let f=fa(c,u),v=x.createHref(c);try{o.pushState(f,"",v)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(v)}i&&a&&a({action:s,location:x.location,delta:1})}function y(E,d){s=ot.Replace;let c=to(x.location,E,d);n&&n(c,E),u=m();let f=fa(c,u),v=x.createHref(c);o.replaceState(f,"",v),i&&a&&a({action:s,location:x.location,delta:0})}function w(E){let d=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof E=="string"?E:fl(E);return c=c.replace(/ $/,"%20"),G(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let x={get action(){return s},get location(){return e(l,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(da,p),a=E,()=>{l.removeEventListener(da,p),a=null}},createHref(E){return t(l,E)},createURL:w,encodeLocation(E){let d=w(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:y,go(E){return o.go(E)}};return x}var pa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pa||(pa={}));function Rp(e,t,n){return n===void 0&&(n="/"),Np(e,t,n)}function Np(e,t,n,r){let l=typeof t=="string"?At(t):t,i=Jo(l.pathname||"/",n);if(i==null)return null;let o=Ic(e);Pp(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=Up(i);s=Fp(o[a],u)}return s}function Ic(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ht([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ic(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Dp(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of zc(i.path))l(i,o,a)}),t}function zc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=zc(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Pp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tp=/^:[\w-]+$/,Lp=3,jp=2,Op=1,Ip=10,zp=-2,ma=e=>e==="*";function Dp(e,t){let n=e.split("/"),r=n.length;return n.some(ma)&&(r+=zp),t&&(r+=jp),n.filter(l=>!ma(l)).reduce((l,i)=>l+(Tp.test(i)?Lp:i===""?Op:Ip),r)}function Mp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Fp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Ap({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},m),h=a.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:ht([i,p.pathname]),pathnameBase:Qp(ht([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=ht([i,p.pathnameBase]))}return o}function Ap(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:h,isOptional:y}=m;if(h==="*"){let x=s[p]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const w=s[p];return y&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Bp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hp=e=>Wp.test(e);function Vp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?At(e):e,i;if(n)if(Hp(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Tl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=ha(n.substring(1),"/"):i=ha(n,t)}else i=t;return{pathname:i,search:Kp(r),hash:qp(l)}}function ha(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function si(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dc(e,t){let n=$p(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=At(e):(l=rr({},e),G(!l.pathname||!l.pathname.includes("?"),si("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),si("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),si("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;l.pathname=h.join("/")}s=p>=0?t[p]:"/"}let a=Vp(l,s),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||m)&&(a.pathname+="/"),a}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),Qp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fc=["post","put","patch","delete"];new Set(Fc);const Yp=["get",...Fc];new Set(Yp);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const es=S.createContext(null),bp=S.createContext(null),Bt=S.createContext(null),Ll=S.createContext(null),Ze=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Ac=S.createContext(null);function Xp(e,t){let{relative:n}=t===void 0?{}:t;cr()||G(!1);let{basename:r,navigator:l}=S.useContext(Bt),{hash:i,pathname:o,search:s}=Uc(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:ht([r,o])),l.createHref({pathname:a,search:s,hash:i})}function cr(){return S.useContext(Ll)!=null}function jl(){return cr()||G(!1),S.useContext(Ll).location}function Bc(e){S.useContext(Bt).static||S.useLayoutEffect(e)}function Zp(){let{isDataRoute:e}=S.useContext(Ze);return e?mm():Jp()}function Jp(){cr()||G(!1);let e=S.useContext(es),{basename:t,future:n,navigator:r}=S.useContext(Bt),{matches:l}=S.useContext(Ze),{pathname:i}=jl(),o=JSON.stringify(Dc(l,n.v7_relativeSplatPath)),s=S.useRef(!1);return Bc(()=>{s.current=!0}),S.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Mc(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ht([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}const em=S.createContext(null);function tm(e){let t=S.useContext(Ze).outlet;return t&&S.createElement(em.Provider,{value:e},t)}function nm(){let{matches:e}=S.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function Uc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Bt),{matches:l}=S.useContext(Ze),{pathname:i}=jl(),o=JSON.stringify(Dc(l,r.v7_relativeSplatPath));return S.useMemo(()=>Mc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function rm(e,t){return lm(e,t)}function lm(e,t,n,r){cr()||G(!1);let{navigator:l}=S.useContext(Bt),{matches:i}=S.useContext(Ze),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=jl(),m;if(t){var p;let E=typeof t=="string"?At(t):t;a==="/"||(p=E.pathname)!=null&&p.startsWith(a)||G(!1),m=E}else m=u;let h=m.pathname||"/",y=h;if(a!=="/"){let E=a.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=Rp(e,{pathname:y}),x=um(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:ht([a,l.encodeLocation?l.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:ht([a,l.encodeLocation?l.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return t&&x?S.createElement(Ll.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ot.Pop}},x):x}function im(){let e=pm(),t=Gp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:l},n):null,null)}const om=S.createElement(im,null);class sm extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Ze.Provider,{value:this.props.routeContext},S.createElement(Ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:t,match:n,children:r}=e,l=S.useContext(es);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ze.Provider,{value:t},r)}function um(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||G(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:h,errors:y}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,p,h)=>{let y,w=!1,x=null,E=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||om,a&&(u<0&&h===0?(hm("route-fallback"),w=!0,E=null):u===h&&(w=!0,E=p.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,h+1)),c=()=>{let f;return y?f=x:w?f=E:p.route.Component?f=S.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,S.createElement(am,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?S.createElement(sm,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Wc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wc||{}),Hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hc||{});function cm(e){let t=S.useContext(es);return t||G(!1),t}function dm(e){let t=S.useContext(bp);return t||G(!1),t}function fm(e){let t=S.useContext(Ze);return t||G(!1),t}function Vc(e){let t=fm(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function pm(){var e;let t=S.useContext(Ac),n=dm(),r=Vc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mm(){let{router:e}=cm(Wc.UseNavigateStable),t=Vc(Hc.UseNavigateStable),n=S.useRef(!1);return Bc(()=>{n.current=!0}),S.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,lr({fromRouteId:t},i)))},[e,t])}const ga={};function hm(e,t,n){ga[e]||(ga[e]=!0)}function gm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vm(e){return tm(e.context)}function Ln(e){G(!1)}function ym(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:o=!1,future:s}=e;cr()&&G(!1);let a=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:i,static:o,future:lr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=At(r));let{pathname:m="/",search:p="",hash:h="",state:y=null,key:w="default"}=r,x=S.useMemo(()=>{let E=Jo(m,a);return E==null?null:{location:{pathname:E,search:p,hash:h,state:y,key:w},navigationType:l}},[a,m,p,h,y,w,l]);return x==null?null:S.createElement(Bt.Provider,{value:u},S.createElement(Ll.Provider,{children:n,value:x}))}function wm(e){let{children:t,location:n}=e;return rm(no(t),n)}new Promise(()=>{});function no(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,l)=>{if(!S.isValidElement(r))return;let i=[...t,l];if(r.type===S.Fragment){n.push.apply(n,no(r.props.children,i));return}r.type!==Ln&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=no(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function xm(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function km(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sm(e,t){return e.button===0&&(!t||t==="_self")&&!km(e)}const _m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Em="6";try{window.__reactRouterVersion=Em}catch{}const Cm="startTransition",va=cd[Cm];function Rm(e){let{basename:t,children:n,future:r,window:l}=e,i=S.useRef();i.current==null&&(i.current=_p({window:l,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=S.useCallback(p=>{u&&va?va(()=>a(p)):a(p)},[a,u]);return S.useLayoutEffect(()=>o.listen(m),[o,m]),S.useEffect(()=>gm(r),[r]),S.createElement(ym,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=S.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:u,preventScrollReset:m,viewTransition:p}=t,h=xm(t,_m),{basename:y}=S.useContext(Bt),w,x=!1;if(typeof u=="string"&&Pm.test(u)&&(w=u,Nm))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=Jo(v.pathname,y);v.origin===f.origin&&_!=null?u=_+v.search+v.hash:x=!0}catch{}let E=Xp(u,{relative:l}),d=Tm(u,{replace:o,state:s,target:a,preventScrollReset:m,relative:l,viewTransition:p});function c(f){r&&r(f),f.defaultPrevented||d(f)}return S.createElement("a",ro({},h,{href:w||E,onClick:x||i?r:c,ref:n,target:a}))});var ya;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ya||(ya={}));var wa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wa||(wa={}));function Tm(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,a=Zp(),u=jl(),m=Uc(e,{relative:o});return S.useCallback(p=>{if(Sm(p,n)){p.preventDefault();let h=r!==void 0?r:fl(u)===fl(m);a(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[u,a,m,r,l,n,e,i,o,s])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Se=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:a,...u},m)=>S.createElement("svg",{ref:m,...Lm,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${jm(e)}`,s].join(" "),...u},[...t.map(([p,h])=>S.createElement(p,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=Se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=Se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=Se("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=Se("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=Se("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=Se("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=Se("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=Se("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=Se("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Se("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Se("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Se("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),$m=()=>g.jsx("nav",{className:"bg-white border-b border-slate-200 sticky top-0 z-50",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex justify-between h-16",children:[g.jsx("div",{className:"flex items-center",children:g.jsxs(gt,{to:"/",className:"flex items-center space-x-2",children:[g.jsx(Vm,{className:"h-8 w-8 text-indigo-600"}),g.jsx("span",{className:"text-xl font-bold text-slate-900",children:"TechNotes"})]})}),g.jsxs("div",{className:"flex items-center space-x-8",children:[g.jsx(gt,{to:"/",className:"text-slate-600 hover:text-indigo-600 font-medium",children:"Home"}),g.jsx(gt,{to:"/solutions",className:"text-slate-600 hover:text-indigo-600 font-medium",children:"Knowledge Base"}),g.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-slate-600 hover:text-indigo-600",children:g.jsx(Um,{className:"h-6 w-6"})})]})]})})}),Qm=()=>g.jsx("footer",{className:"bg-slate-900 text-white py-12",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[g.jsxs("div",{className:"mb-4 md:mb-0",children:[g.jsx("h3",{className:"text-xl font-bold",children:"EngSolutions"}),g.jsx("p",{className:"text-slate-400 mt-2",children:"Sharing engineering wisdom, one solution at a time."})]}),g.jsx("div",{className:"flex space-x-6",children:g.jsxs("p",{className:"text-slate-400",children:["© ",new Date().getFullYear()," Engineering Solutions. All rights reserved."]})})]})})}),Km=()=>g.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[g.jsx($m,{}),g.jsx("main",{className:"flex-grow",children:g.jsx(vm,{})}),g.jsx(Qm,{})]}),qm=()=>g.jsxs("div",{className:"bg-white",children:[g.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:g.jsx("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl",children:"Tech Notes & Engineering Deep Dives"}),g.jsx("p",{className:"mt-6 text-lg leading-8 text-slate-600",children:"A curated collection of engineering notes, system design deep dives, experiments, and real-world learnings from building large-scale systems."}),g.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[g.jsx(gt,{to:"/solutions",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Browse Knowledge Base"}),g.jsxs("a",{href:"https://github.com",className:"text-sm font-semibold leading-6 text-slate-900",children:["View on GitHub ",g.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})})}),g.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8 pb-24",children:[g.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[g.jsx("h2",{className:"text-base font-semibold leading-7 text-indigo-600",children:"Explore Topics"}),g.jsx("p",{className:"mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",children:"From Internals to Architecture"})]}),g.jsx("div",{className:"mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none",children:g.jsxs("dl",{className:"grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Wm,{className:"h-5 w-5 flex-none text-indigo-600"}),"System Design & SRE"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Distributed systems, scalability patterns, SLIs/SLOs, and resilience engineering."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Dm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Cloud & Platform"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Kubernetes internals, networking, GitOps, and observability."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Fm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Databases & Storage"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Internals of persistence engines, consensus algorithms (Raft), and vector search."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Mm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Programming & Internals"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Go language deep dives, concurrency models, memory management, and OS fundamentals."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Bm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Experiments"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Proofs of concept, design explorations, and performance benchmarks."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(zm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Deep Dives"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Long-form articles dissecting complex technologies and architectural decisions."})})]})]})})]})]}),Qc=[{id:"sre-error-budgets",title:"Implementing Error Budgets: A Practical Guide to SRE",description:"A comprehensive guide to defining, calculating, and using error budgets to balance reliability and innovation velocity.",category:"deep-dive",topic:"SRE",tags:["SRE","Reliability","Error Budgets","SLO","DevOps","Production"],date:"2026-01-04",content:`
<h2>Implementing Error Budgets: A Practical Guide to SRE</h2>

<p>Error budgets are the cornerstone of Site Reliability Engineering (SRE). They provide a data-driven framework for balancing system reliability with innovation velocity. In this deep dive, I'll walk you through implementing error budgets in production systems, from theory to practice.</p>

<h3>What Are Error Budgets?</h3>

<p>An error budget is the maximum amount of unreliability your system can tolerate while still meeting your Service Level Objectives (SLOs). It's the inverse of your reliability target.</p>

<p><strong>The fundamental formula:</strong></p>
<pre><code>Error Budget = 1 - SLO Target
</code></pre>

<p>If your SLO is 99.9% uptime, your error budget is 0.1% downtime. Over a 30-day month, that's approximately <strong>43.2 minutes</strong> of allowed downtime.</p>

<h3>Why Error Budgets Matter</h3>

<p>Error budgets solve a critical tension in engineering organizations:</p>

<ul>
  <li><strong>Product teams</strong> want to ship features fast</li>
  <li><strong>SRE teams</strong> want to maintain reliability</li>
  <li><strong>Business stakeholders</strong> want both</li>
</ul>

<p>Without error budgets, these goals conflict. With error budgets, they align. The budget becomes the shared metric that everyone optimizes for.</p>

<h3>The Error Budget Policy</h3>

<p>An error budget policy defines what happens when the budget is exhausted. Here's a typical policy framework:</p>

<h4>Budget Status: Healthy (>50% remaining)</h4>
<ul>
  <li>Normal feature velocity</li>
  <li>Standard change approval process</li>
  <li>Regular deployment cadence</li>
  <li>Experimental features allowed</li>
</ul>

<h4>Budget Status: Warning (10-50% remaining)</h4>
<ul>
  <li>Increase monitoring</li>
  <li>Review recent changes</li>
  <li>Stricter change approval</li>
  <li>Focus on stability fixes</li>
</ul>

<h4>Budget Status: Critical (<10% remaining)</h4>
<ul>
  <li>Feature freeze</li>
  <li>Emergency changes only</li>
  <li>All hands on reliability</li>
  <li>Post-mortem required</li>
</ul>

<h4>Budget Status: Exhausted (0% remaining)</h4>
<ul>
  <li>Complete deployment freeze</li>
  <li>Incident review mandatory</li>
  <li>Recovery plan required</li>
  <li>Executive notification</li>
</ul>

<h3>Calculating Error Budgets</h3>

<h4>Availability-Based Error Budget</h4>

<p>For services where uptime is the primary metric:</p>

<pre><code class="language-python">def calculate_availability_budget(slo_percentage, time_period_days):
    """
    Calculate error budget in minutes for availability SLO
    
    Args:
        slo_percentage: Target availability (e.g., 99.9)
        time_period_days: Measurement window (e.g., 30)
    
    Returns:
        Allowed downtime in minutes
    """
    total_minutes = time_period_days * 24 * 60
    error_budget_percentage = 100 - slo_percentage
    error_budget_minutes = total_minutes * (error_budget_percentage / 100)
    return error_budget_minutes

# Example: 99.9% SLO over 30 days
budget = calculate_availability_budget(99.9, 30)
print(f"Error budget: {budget:.2f} minutes")  # 43.20 minutes
</code></pre>

<h4>Request-Based Error Budget</h4>

<p>For services where request success rate matters:</p>

<pre><code class="language-python">def calculate_request_budget(slo_percentage, total_requests):
    """
    Calculate error budget in number of failed requests
    
    Args:
        slo_percentage: Target success rate (e.g., 99.9)
        total_requests: Total requests in measurement window
    
    Returns:
        Allowed failed requests
    """
    error_budget_percentage = 100 - slo_percentage
    allowed_failures = total_requests * (error_budget_percentage / 100)
    return int(allowed_failures)

# Example: 99.9% success rate, 10M requests/day
daily_requests = 10_000_000
budget = calculate_request_budget(99.9, daily_requests)
print(f"Error budget: {budget:,} failed requests/day")  # 10,000 failures allowed
</code></pre>

<h4>Latency-Based Error Budget</h4>

<p>For services with latency SLOs:</p>

<pre><code class="language-python">def calculate_latency_budget(slo_percentage, latency_threshold_ms, total_requests):
    """
    Calculate error budget for latency SLO
    
    Args:
        slo_percentage: Target percentage below threshold (e.g., 99.9)
        latency_threshold_ms: Latency threshold in milliseconds (e.g., 100)
        total_requests: Total requests in measurement window
    
    Returns:
        Allowed slow requests
    """
    error_budget_percentage = 100 - slo_percentage
    allowed_slow_requests = total_requests * (error_budget_percentage / 100)
    return int(allowed_slow_requests)

# Example: 99.9% of requests under 100ms, 5M requests/day
budget = calculate_latency_budget(99.9, 100, 5_000_000)
print(f"Error budget: {budget:,} slow requests/day")  # 5,000 allowed
</code></pre>

<h3>Real-World Implementation</h3>

<p>Here's a complete error budget tracker implementation:</p>

<pre><code class="language-python">from datetime import datetime, timedelta
from typing import Dict, List
import json

class ErrorBudgetTracker:
    """Production-grade error budget tracking"""
    
    def __init__(self, slo_target: float, window_days: int = 30):
        """
        Initialize error budget tracker
        
        Args:
            slo_target: SLO target percentage (e.g., 99.9)
            window_days: Rolling window in days
        """
        self.slo_target = slo_target
        self.window_days = window_days
        self.error_budget_percentage = 100 - slo_target
        self.incidents: List[Dict] = []
    
    def add_incident(self, duration_minutes: float, timestamp: datetime = None):
        """Record an incident"""
        if timestamp is None:
            timestamp = datetime.now()
        
        self.incidents.append({
            'timestamp': timestamp,
            'duration_minutes': duration_minutes
        })
    
    def get_current_budget_consumption(self) -> Dict:
        """Calculate current error budget consumption"""
        cutoff_time = datetime.now() - timedelta(days=self.window_days)
        
        # Filter incidents within window
        recent_incidents = [
            inc for inc in self.incidents 
            if inc['timestamp'] > cutoff_time
        ]
        
        # Calculate total downtime
        total_downtime = sum(inc['duration_minutes'] for inc in recent_incidents)
        
        # Calculate total available time
        total_available = self.window_days * 24 * 60
        
        # Calculate error budget
        error_budget_minutes = total_available * (self.error_budget_percentage / 100)
        
        # Calculate consumption
        consumption_percentage = (total_downtime / error_budget_minutes) * 100 if error_budget_minutes > 0 else 0
        remaining_percentage = max(0, 100 - consumption_percentage)
        
        # Determine status
        if remaining_percentage > 50:
            status = "HEALTHY"
        elif remaining_percentage > 10:
            status = "WARNING"
        elif remaining_percentage > 0:
            status = "CRITICAL"
        else:
            status = "EXHAUSTED"
        
        return {
            'slo_target': self.slo_target,
            'window_days': self.window_days,
            'total_downtime_minutes': total_downtime,
            'error_budget_minutes': error_budget_minutes,
            'remaining_minutes': max(0, error_budget_minutes - total_downtime),
            'consumption_percentage': consumption_percentage,
            'remaining_percentage': remaining_percentage,
            'status': status,
            'incident_count': len(recent_incidents),
            'recommendation': self._get_recommendation(status)
        }
    
    def _get_recommendation(self, status: str) -> str:
        """Get action recommendation based on budget status"""
        recommendations = {
            'HEALTHY': 'Normal operations. Continue with standard deployment cadence.',
            'WARNING': 'Increase monitoring. Review recent changes. Consider slowing deployment velocity.',
            'CRITICAL': 'Focus on stability. Implement stricter change approval. Defer non-critical features.',
            'EXHAUSTED': 'FEATURE FREEZE. All changes must be approved by SRE. Focus entirely on reliability improvements.'
        }
        return recommendations.get(status, 'Unknown status')
    
    def get_burn_rate(self) -> float:
        """
        Calculate current burn rate
        Burn rate = How fast you're consuming the budget
        """
        cutoff_time = datetime.now() - timedelta(hours=1)
        
        # Get incidents in last hour
        recent_incidents = [
            inc for inc in self.incidents 
            if inc['timestamp'] > cutoff_time
        ]
        
        hourly_downtime = sum(inc['duration_minutes'] for inc in recent_incidents)
        
        # Calculate expected hourly budget
        error_budget_minutes = (self.window_days * 24 * 60) * (self.error_budget_percentage / 100)
        hourly_budget = error_budget_minutes / (self.window_days * 24)
        
        # Burn rate = actual consumption / expected consumption
        burn_rate = hourly_downtime / hourly_budget if hourly_budget > 0 else 0
        
        return burn_rate

# Example usage
tracker = ErrorBudgetTracker(slo_target=99.9, window_days=30)

# Simulate some incidents
tracker.add_incident(15, datetime.now() - timedelta(days=5))
tracker.add_incident(8, datetime.now() - timedelta(days=2))
tracker.add_incident(5, datetime.now() - timedelta(hours=6))

# Get current status
status = tracker.get_current_budget_consumption()
print(json.dumps(status, indent=2))
</code></pre>

<h3>Monitoring and Alerting</h3>

<h4>Key Metrics to Track</h4>

<ol>
  <li><strong>Budget Consumption Rate:</strong> How fast you're spending the budget</li>
  <li><strong>Burn Rate:</strong> Current consumption vs. expected consumption</li>
  <li><strong>Time to Exhaustion:</strong> When the budget will run out at current rate</li>
  <li><strong>Incident Frequency:</strong> Number of incidents consuming the budget</li>
</ol>

<h4>Alert Thresholds</h4>

<pre><code># Prometheus AlertManager rules example
groups:
  - name: error_budget_alerts
    rules:
      - alert: ErrorBudgetWarning
        expr: error_budget_remaining_percentage < 50
        for: 5m
        annotations:
          summary: "Error budget below 50%"
          
      - alert: ErrorBudgetCritical
        expr: error_budget_remaining_percentage < 10
        for: 5m
        annotations:
          summary: "Error budget CRITICAL"
          
      - alert: HighBurnRate
        expr: error_budget_burn_rate > 2
        for: 1h
        annotations:
          summary: "Burning budget 2x faster than sustainable"
</code></pre>

<h3>Common Pitfalls and How to Avoid Them</h3>

<h4>1. Setting Unrealistic SLOs</h4>
<p><strong>Problem:</strong> 99.999% (five nines) sounds great but leaves only 26 seconds of downtime per month.</p>
<p><strong>Solution:</strong> Start with achievable SLOs (99.9%) and improve incrementally.</p>

<h4>2. Not Enforcing the Policy</h4>
<p><strong>Problem:</strong> Teams ignore the error budget when it runs out.</p>
<p><strong>Solution:</strong> Make the policy non-negotiable. Automate deployment freezes if possible.</p>

<h4>3. Ignoring Planned Maintenance</h4>
<p><strong>Problem:</strong> Maintenance windows consume error budget unfairly.</p>
<p><strong>Solution:</strong> Exclude planned maintenance from budget calculations, but track it separately.</p>

<h4>4. Having Only One SLO</h4>
<p><strong>Problem:</strong> Single metric doesn't capture full user experience.</p>
<p><strong>Solution:</strong> Use multiple SLOs (availability, latency, error rate) with separate budgets.</p>

<h3>Integration with Incident Response</h3>

<p>Error budgets should be central to your incident response process:</p>

<ol>
  <li><strong>During Incident:</strong> Track real-time budget consumption</li>
  <li><strong>Post-Incident:</strong> Calculate budget impact in post-mortem</li>
  <li><strong>Planning:</strong> Use historical budget data to prioritize reliability work</li>
  <li><strong>Retrospectives:</strong> Review budget trends monthly</li>
</ol>

<h3>Dashboard Example</h3>

<p>A good error budget dashboard should show:</p>

<ul>
  <li>Current budget remaining (percentage and absolute time)</li>
  <li>Budget consumption trend over time</li>
  <li>Current burn rate</li>
  <li>Projected time to exhaustion</li>
  <li>Recent incidents and their budget impact</li>
  <li>Policy status and recommendations</li>
</ul>

<h3>Case Study: From Chaos to Control</h3>

<p>Before implementing error budgets at my previous company:</p>
<ul>
  <li>Constant arguments between product and SRE teams</li>
  <li>No data-driven way to prioritize reliability work</li>
  <li>Unclear when to stop shipping features</li>
  <li>Reactive approach to incidents</li>
</ul>

<p>After implementing error budgets:</p>
<ul>
  <li>Aligned incentives across teams</li>
  <li>Clear prioritization framework</li>
  <li>Automated deployment controls</li>
  <li>Proactive reliability improvements</li>
  <li>40% reduction in incident frequency over 6 months</li>
</ul>

<h3>Key Takeaways</h3>

<ol>
  <li><strong>Error budgets quantify acceptable risk</strong> - They turn reliability into a measurable, manageable metric</li>
  <li><strong>Policy enforcement is critical</strong> - Without teeth, error budgets are just numbers</li>
  <li><strong>Start simple, iterate</strong> - Begin with availability-based budgets, add complexity as needed</li>
  <li><strong>Automate everything</strong> - Manual tracking doesn't scale</li>
  <li><strong>Use budgets for prioritization</strong> - They're not just for incidents, but for planning reliability work</li>
</ol>

<h3>Further Reading</h3>

<ul>
  <li><strong>Google SRE Book</strong> - Chapter 3: Embracing Risk</li>
  <li><strong>The Site Reliability Workbook</strong> - Implementing SLOs</li>
  <li><strong>Seeking SRE</strong> - Error Budget Policies</li>
</ul>

<h3>Conclusion</h3>

<p>Error budgets transform reliability from a vague goal into a concrete, measurable objective. They provide the framework for making rational decisions about risk, velocity, and system health. By implementing error budgets with clear policies and automation, you create a sustainable balance between innovation and reliability.</p>

<p>The implementation shown here demonstrates practical patterns for tracking, monitoring, and acting on error budget data. Start with these fundamentals, then customize based on your organization's needs and maturity.</p>

<p><em>Have questions about implementing error budgets in your organization? The patterns and code examples here are battle-tested in production systems handling millions of requests per day.</em></p>
  `},{id:"api-gateway-python",title:"Building a Production-Grade API Gateway in Python",description:"A comprehensive guide to building an API Gateway with rate limiting, circuit breakers, and load balancing",category:"deep-dive",topic:"System Design",tags:["Python","API Gateway","Distributed Systems","Rate Limiting","Circuit Breaker"],date:"2026-01-04",content:`
<h2>Building a Production-Grade API Gateway in Python</h2>

<p>As microservices architecture continues to dominate modern software development, the API Gateway has become a critical component in distributed systems. In this post, I'll walk you through building a production-grade API Gateway in Python, covering essential patterns like rate limiting, circuit breakers, and load balancing.</p>

<h3>What is an API Gateway?</h3>

<p>An API Gateway acts as a reverse proxy that sits between clients and backend microservices. It provides a single entry point for all client requests and handles cross-cutting concerns like:</p>

<ul>
  <li><strong>Authentication & Authorization</strong></li>
  <li><strong>Rate Limiting</strong></li>
  <li><strong>Load Balancing</strong></li>
  <li><strong>Request/Response Transformation</strong></li>
  <li><strong>Circuit Breaking</strong></li>
  <li><strong>Logging & Monitoring</strong></li>
</ul>

<h3>Architecture Overview</h3>

<pre><code>Client → API Gateway → [Rate Limiter] → [Auth] → [Load Balancer] → Backend Services
                ↓
          [Circuit Breaker]
                ↓
          [Metrics & Logging]
</code></pre>

<h3>Core Components</h3>

<h4>1. Rate Limiter (Token Bucket with Sliding Window)</h4>

<p>The rate limiter prevents abuse and protects backend services from being overwhelmed.</p>

<pre><code class="language-python">class RateLimiter:
    """Token bucket rate limiter with sliding window"""
    
    def __init__(self, requests_per_minute: int = 60):
        self.requests_per_minute = requests_per_minute
        self.buckets: Dict[str, List[float]] = defaultdict(list)
        self.lock = threading.Lock()
    
    def is_allowed(self, client_id: str) -> bool:
        with self.lock:
            now = time.time()
            window_start = now - 60
            
            # Clean old requests outside the window
            self.buckets[client_id] = [
                ts for ts in self.buckets[client_id] if ts > window_start
            ]
            
            if len(self.buckets[client_id]) >= self.requests_per_minute:
                return False
            
            self.buckets[client_id].append(now)
            return True
</code></pre>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Sliding window:</strong> More accurate than fixed windows</li>
  <li><strong>Thread-safe:</strong> Uses locks for concurrent access</li>
  <li><strong>Per-client tracking:</strong> Enforces limits individually by client IP</li>
  <li><strong>Memory efficient:</strong> Automatically cleans old timestamps</li>
</ul>

<h4>2. Circuit Breaker (Fault Tolerance)</h4>

<p>The circuit breaker prevents cascading failures when backend services fail.</p>

<pre><code class="language-python">class CircuitBreaker:
    """Circuit breaker pattern for fault tolerance"""
    
    class State(Enum):
        CLOSED = "CLOSED"      # Normal operation
        OPEN = "OPEN"          # Failing, reject requests
        HALF_OPEN = "HALF_OPEN"  # Testing recovery
    
    def __init__(self, failure_threshold: int = 5, timeout: int = 60):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failure_count = 0
        self.state = self.State.CLOSED
</code></pre>

<p><strong>How it works:</strong></p>
<ol>
  <li><strong>CLOSED:</strong> Normal operation, requests flow through</li>
  <li>After <strong>5 failures</strong> → Circuit opens</li>
  <li><strong>OPEN:</strong> All requests fail immediately (fast-fail)</li>
  <li>After <strong>60 seconds</strong> → Transition to HALF_OPEN</li>
  <li><strong>HALF_OPEN:</strong> Test with one request
    <ul>
      <li>Success → Back to CLOSED</li>
      <li>Failure → Back to OPEN</li>
    </ul>
  </li>
</ol>

<h4>3. Load Balancer (Round-Robin)</h4>

<p>Distributes traffic across multiple backend instances for high availability.</p>

<ul>
  <li><b>Load Balancer (Round-Robin):</b> Distributes traffic across multiple backend instances for high availability.</li>
</ul>

<h3>Request Processing Pipeline</h3>

<p>Every incoming request flows through this pipeline:</p>

<pre><code>1. Route Matching    → Is this path registered?
2. Authentication    → Is the user authorized?
3. Rate Limiting     → Has the client exceeded quota?
4. Load Balancing    → Which backend should handle this?
5. Circuit Breaking  → Is the backend healthy?
6. Forward Request   → Send to backend service
7. Response          → Return to client
</code></pre>

<h3>Usage Example</h3>

<pre><code class="language-python"># Initialize gateway
gateway = APIGateway()

# Register a public endpoint
gateway.register_route(Route(
    path="/api/public",
    method=HTTPMethod.GET,
    backend="backend1:8001",
    auth_required=False
))

# Register a protected endpoint with rate limiting
gateway.register_route(Route(
    path="/api/users",
    method=HTTPMethod.GET,
    backend="backend2:8002",
    auth_required=True,
    rate_limit=10  # 10 requests per minute
))

# Register a load-balanced endpoint
gateway.register_load_balanced_route(
    path="/api/products",
    method=HTTPMethod.GET,
    backends=["backend3:8003", "backend4:8004", "backend5:8005"],
    rate_limit=100
)

# Handle incoming request
request = Request(
    method=HTTPMethod.GET,
    path="/api/users",
    headers={"authorization": "Bearer token123"}
)
response = gateway.handle_request(request)
</code></pre>

<h3>Design Decisions & Trade-offs</h3>

<h4>Thread Safety</h4>
<p>All shared state uses <code>threading.Lock()</code> to prevent race conditions when handling concurrent requests. This is critical in production where thousands of requests hit simultaneously.</p>

<h4>Scalability Considerations</h4>
<p>This implementation is designed for a single instance. For Google-scale systems, you'd need:</p>
<ul>
  <li><strong>Distributed Rate Limiting:</strong> Use Redis instead of in-memory storage</li>
  <li><strong>Service Mesh Integration:</strong> Istio, Linkerd for advanced traffic management</li>
  <li><strong>Async I/O:</strong> Replace threading with asyncio for better performance</li>
  <li><strong>Distributed Tracing:</strong> OpenTelemetry for request tracking across services</li>
</ul>

<h3>Key Learnings</h3>

<ol>
  <li><strong>Concurrency is Hard:</strong> Thread safety requires careful design</li>
  <li><strong>Fail Fast:</strong> Circuit breakers are essential for system resilience</li>
  <li><strong>Observability Matters:</strong> Without metrics, you're flying blind</li>
  <li><strong>Start Simple:</strong> Add complexity only when needed</li>
</ol>

<h3>Production Enhancements</h3>

<p>To take this to production, you'd want to add:</p>
<ul>
  <li>TLS Termination</li>
  <li>Request Validation</li>
  <li>Response Caching</li>
  <li>WebSocket Support</li>
  <li>gRPC Support</li>
  <li>API Versioning</li>
  <li>DDoS Protection</li>
  <li>Health Checks</li>
</ul>

<h3>Conclusion</h3>

<p>Building this API Gateway taught me valuable lessons about distributed systems, concurrency, and fault tolerance. The patterns implemented here form the foundation of resilient microservices architecture.</p>

<p>The complete source code demonstrates essential patterns like rate limiting (token bucket algorithm), circuit breakers (fault tolerance), round-robin load balancing, and token-based authentication - all implemented with thread-safe operations and zero external dependencies.</p>
  `},{id:"lc3-vm-rust",title:"Building an LC-3 Virtual Machine in Rust: A Deep Dive into Systems Programming",description:"A comprehensive guide to implementing a complete virtual machine in Rust, exploring pattern matching, memory safety, low-level programming, and error handling.",category:"deep-dive",topic:"Programming",tags:["Rust","Virtual Machines","Systems Programming","Computer Architecture","Low-Level"],date:"2026-01-05",content:`
<h2>Building an LC-3 Virtual Machine in Rust: A Deep Dive into Systems Programming</h2>

<p>Virtual machines and CPU emulation are fascinating topics that sit at the intersection of computer architecture and systems programming. In this deep dive, I'll walk you through building a complete LC-3 virtual machine in Rust—a journey that will teach you fundamental concepts about how computers work while showcasing powerful Rust features.</p>

<p>By the end, you'll understand instruction decoding, memory management, the fetch-decode-execute cycle, and how Rust's type system and ownership model make systems programming both safe and elegant.</p>

<h3>What is the LC-3?</h3>

<p>The LC-3 (Little Computer 3) is an educational computer architecture designed to teach assembly language and CPU concepts. It's remarkably simple yet complete:</p>

<ul>
  <li><strong>Memory:</strong> 65,536 16-bit addressable locations (128 KB total)</li>
  <li><strong>Registers:</strong> 8 general-purpose (R0-R7), Program Counter (PC), and Condition Flags (COND)</li>
  <li><strong>Instructions:</strong> 16 opcodes covering arithmetic, logic, memory access, control flow, and I/O</li>
  <li><strong>Execution:</strong> Standard fetch-decode-execute cycle</li>
</ul>

<p>The original C implementation is about 250 lines of code, making it perfect for learning. Our Rust version is slightly longer due to explicit error handling and type safety, but far more robust.</p>

<h3>Why Rust for Systems Programming?</h3>

<p>Rust is ideal for this project because it combines:</p>

<ul>
  <li><strong>Performance:</strong> No garbage collection, compiled to native code (like C)</li>
  <li><strong>Safety:</strong> Memory safety without runtime overhead</li>
  <li><strong>Expressiveness:</strong> Powerful type system and pattern matching</li>
  <li><strong>Reliability:</strong> Catches entire categories of bugs at compile time</li>
</ul>

<h3>Key Rust Concepts We'll Explore</h3>

<p>This implementation demonstrates four critical Rust concepts:</p>

<h4>1. Enums and Pattern Matching</h4>
<p>Rust's enums are far more powerful than simple C enums. We'll use them for type-safe instruction decoding.</p>

<h4>2. Error Handling with Result Types</h4>
<p>Rather than silent failures or exceptions, we'll use <code>Result&lt;T, E&gt;</code> for explicit error handling.</p>

<h4>3. Memory Safety Through Borrowing</h4>
<p>Rust's ownership system prevents entire categories of bugs: null pointer dereferences, buffer overflows, use-after-free, and data races—all without a garbage collector.</p>

<h4>4. Low-Level Bit Operations</h4>
<p>Working with 16-bit instructions requires bit manipulation that Rust makes type-safe and clear.</p>

<h3>Architecture Overview</h3>

<p>Our LC-3 VM consists of several modules:</p>

<pre><code class="language-text">error.rs       → Custom error types for all failure modes
register.rs    → Type-safe register definitions (R0-R7, PC, COND)
memory.rs      → 65,536 × 16-bit word memory array
instruction.rs → Opcode enum and instruction decoder
vm.rs          → Main VM struct and execution engine
main.rs        → CLI interface
</code></pre>

<h3>Module 1: Error Handling with Custom Types</h3>

<p>Rust's error handling starts with custom error types. This demonstrates how Rust makes error cases explicit:</p>

<pre><code class="language-rust">#[derive(Debug)]
pub enum LC3Error {
    InvalidOpcode(u16),
    InvalidRegister(u16),
    InvalidMemory(u16),
    IOError(io::Error),
    InvalidInstruction(String),
}

impl fmt::Display for LC3Error {
    fn fmt(&amp;self, f: &amp;mut fmt::Formatter) -&gt; fmt::Result {
        match self {
            LC3Error::InvalidOpcode(op) =&gt; {
                write!(f, "Invalid opcode: 0x{:04x}", op)
            }
            // ... other variants ...
        }
    }
}

impl From&lt;io::Error&gt; for LC3Error {
    fn from(err: io::Error) -&gt; Self {
        LC3Error::IOError(err)
    }
}

pub type LC3Result&amp;lt;T&amp;gt; = Result&amp;lt;T, LC3Error&amp;gt;;
</code></pre>

<p><strong>Key Concepts:</strong></p>

<ul>
  <li><strong>Enum variants with data:</strong> Errors carry context (which opcode? which register?)</li>
  <li><strong>From trait:</strong> Automatic conversion from <code>io::Error</code> enables the <code>?</code> operator</li>
  <li><strong>Type alias:</strong> <code>LC3Result&lt;T&gt;</code> is cleaner than writing <code>Result&lt;T, LC3Error&gt;</code> everywhere</li>
</ul>

<h3>Module 2: Type-Safe Registers</h3>

<p>Instead of using raw integers for registers, we define an enum:</p>

<pre><code class="language-rust">#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum Register {
    R0, R1, R2, R3, R4, R5, R6, R7,
    PC,      // Program Counter
    COND,    // Condition Flags
}

impl Register {
    pub fn from_number(num: u16) -&gt; LC3Result&lt;Self&gt; {
        match num {
            0 =&gt; Ok(Register::R0),
            1 =&gt; Ok(Register::R1),
            // ...
            8 =&gt; Ok(Register::PC),
            9 =&gt; Ok(Register::COND),
            _ =&gt; Err(LC3Error::InvalidRegister(num)),
        }
    }
}
</code></pre>

<p><strong>Benefits:</strong></p>

<ul>
  <li><strong>Type safety:</strong> Compiler ensures you're using valid registers</li>
  <li><strong>Exhaustive matching:</strong> If you use all registers in a match statement, compiler ensures no cases are missed</li>
  <li><strong>Zero runtime cost:</strong> Enums are compiled away to integers</li>
</ul>

<p>The RegisterFile manages all registers with proper borrowing:</p>

<pre><code class="language-rust">pub struct RegisterFile {
    registers: [u16; 10],
}

impl RegisterFile {
    pub fn read(&amp;self, reg: Register) -&gt; u16 {
        self.registers[reg as usize]
    }

    pub fn write(&amp;mut self, reg: Register, value: u16) {
        self.registers[reg as usize] = value;
    }

    pub fn update_flags(&amp;mut self, reg: Register) {
        let value = self.read(reg);
        self.registers[9] = if value == 0 {
            ConditionFlag::ZRO.bit_value()
        } else if value &gt;&gt; 15 == 1 {
            ConditionFlag::NEG.bit_value()
        } else {
            ConditionFlag::POS.bit_value()
        };
    }
}
</code></pre>

<p><strong>Memory Safety:</strong></p>

<ul>
  <li><code>&amp;self</code> = immutable reference (read-only, safe to call from multiple places)</li>
  <li><code>&amp;mut self</code> = mutable reference (exclusive access, compiler ensures no data races)</li>
  <li>Rust's borrow checker ensures you can't accidentally violate these rules</li>
</ul>

<h3>Module 3: Instructions and Pattern Matching</h3>

<p>Now we get to the heart of the VM: instruction decoding. Rust's pattern matching shines here:</p>

<pre><code class="language-rust">#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[repr(u8)]
pub enum Opcode {
    BR = 0x0,    // Branch
    ADD = 0x1,   // Add
    LD = 0x2,    // Load
    ST = 0x3,    // Store
    JSR = 0x4,   // Jump to subroutine
    AND = 0x5,   // Bitwise AND
    // ... 10 more opcodes ...
    TRAP = 0xF,  // Trap (system call)
}

impl Opcode {
    pub fn from_u16(value: u16) -&gt; LC3Result&lt;Self&gt; {
        let opcode_bits = (value &gt;&gt; 12) &amp; 0xF;  // Top 4 bits
        match opcode_bits {
            0x0 =&gt; Ok(Opcode::BR),
            0x1 =&gt; Ok(Opcode::ADD),
            // ... exhaustive matching guaranteed by compiler
            0xF =&gt; Ok(Opcode::TRAP),
            _ =&gt; Err(LC3Error::InvalidOpcode(value)),
        }
    }
}
</code></pre>

<p><strong>Instruction Decoding - Bit Extraction:</strong></p>

<pre><code class="language-rust">pub struct InstructionDecoder {
    pub raw: u16,
}

impl InstructionDecoder {
    // Extract 3-bit register field at position
    pub fn extract_register(&amp;self, position: u8) -&gt; LC3Result&lt;Register&gt; {
        let reg_bits = (self.raw &gt;&gt; position) &amp; 0x7;
        Register::from_number(reg_bits)
    }

    // Destination register (bits 9-11)
    pub fn dr(&amp;self) -&gt; LC3Result&lt;Register&gt; {
        self.extract_register(9)
    }

    // Source register 1 (bits 6-8)
    pub fn sr1(&amp;self) -&gt; LC3Result&lt;Register&gt; {
        self.extract_register(6)
    }

    // Check immediate mode (bit 5)
    pub fn is_immediate_mode(&amp;self) -&gt; bool {
        ((self.raw &gt;&gt; 5) &amp; 0x1) != 0
    }

    // Extract 5-bit immediate with sign extension
    pub fn imm5(&amp;self) -&gt; i16 {
        let imm = (self.raw &amp; 0x1F) as i16;
        sign_extend(imm, 5)
    }
}

// Sign extend a value from bit_count bits to 16 bits
#[inline]
pub fn sign_extend(value: i16, bit_count: u8) -&gt; i16 {
    let sign_bit = 1 &lt;&lt; (bit_count - 1);
    if (value &amp; sign_bit) != 0 {
        value | !(sign_bit - 1)
    } else {
        value &amp; ((1 &lt;&lt; bit_count) - 1)
    }
}
</code></pre>

<p><strong>Low-Level Concepts:</strong></p>

<ul>
  <li><strong>Bit shifting:</strong> <code>value &gt;&gt; 12</code> extracts the top 4 bits (the opcode)</li>
  <li><strong>Bit masking:</strong> <code>&amp; 0xF</code> isolates specific bits</li>
  <li><strong>Sign extension:</strong> Converts signed integers in fewer bits to signed integers in more bits (critical for LC-3's two's complement)</li>
  <li><strong>Type safety:</strong> Rust ensures you're working with i16 and u16 correctly</li>
</ul>

<h3>Module 4: The Main VM - Fetch-Decode-Execute</h3>

<p>Now we implement the heart of any CPU: the fetch-decode-execute cycle:</p>

<pre><code class="language-rust">pub struct VM {
    memory: Memory,
    registers: RegisterFile,
    running: bool,
}

impl VM {
    pub fn new() -&gt; Self {
        VM {
            memory: Memory::new(),
            registers: RegisterFile::new(),
            running: false,
        }
    }

    pub fn run(&amp;mut self) -&gt; LC3Result&lt;()&gt; {
        self.running = true;

        while self.running {
            // FETCH: Read instruction from memory at PC
            let pc = self.registers.read(Register::PC);
            let instruction = self.memory.read(pc)?;

            // DECODE &amp; EXECUTE: Process instruction
            self.execute_instruction(instruction)?;
        }

        Ok(())
    }

    fn execute_instruction(&amp;mut self, instr: u16) -&gt; LC3Result&lt;()&gt; {
        // Decode the opcode
        let opcode = Opcode::from_u16(instr)?;
        let decoder = InstructionDecoder::new(instr);

        // Pattern match on opcode - exhaustive checking
        match opcode {
            Opcode::ADD =&gt; self.op_add(&amp;decoder)?,
            Opcode::AND =&gt; self.op_and(&amp;decoder)?,
            Opcode::NOT =&gt; self.op_not(&amp;decoder)?,
            Opcode::BR =&gt; self.op_br(&amp;decoder)?,
            Opcode::JMP =&gt; self.op_jmp(&amp;decoder)?,
            Opcode::JSR =&gt; self.op_jsr(&amp;decoder)?,
            Opcode::LD =&gt; self.op_ld(&amp;decoder)?,
            // ... more instructions ...
            Opcode::TRAP =&gt; self.op_trap(&amp;decoder)?,
            Opcode::RTI | Opcode::RES =&gt; {
                return Err(LC3Error::InvalidInstruction(
                    "This instruction is not implemented".to_string(),
                ))
            }
        }

        // Increment PC for next instruction
        let pc = self.registers.read(Register::PC);
        self.registers.write(Register::PC, pc.wrapping_add(1));

        Ok(())
    }
}
</code></pre>

<h3>Implementing Instructions - Pattern Matching in Action</h3>

<p>Let's look at the ADD instruction, which demonstrates immediate vs. register modes:</p>

<pre><code class="language-rust">fn op_add(&amp;mut self, decoder: &amp;InstructionDecoder) -&gt; LC3Result&lt;()&gt; {
    let dr = decoder.dr()?;
    let sr1 = decoder.sr1()?;
    let sr1_val = self.registers.read(sr1);

    // Pattern matching on immediate mode
    let result = if decoder.is_immediate_mode() {
        // Immediate mode: ADD DR, SR1, IMM5
        let imm = decoder.imm5() as u16;
        sr1_val.wrapping_add(imm)
    } else {
        // Register mode: ADD DR, SR1, SR2
        let sr2 = decoder.sr2()?;
        let sr2_val = self.registers.read(sr2);
        sr1_val.wrapping_add(sr2_val)
    };

    self.registers.write(dr, result);
    self.registers.update_flags(dr);
    Ok(())
}
</code></pre>

<p><strong>Key Patterns:</strong></p>

<ul>
  <li><strong>Error propagation with ?:</strong> If <code>decoder.dr()?</code> returns an error, it immediately propagates up</li>
  <li><strong>Pattern matching on bool:</strong> The <code>if decoder.is_immediate_mode()</code> chooses between two execution paths</li>
  <li><strong>Wrapping arithmetic:</strong> <code>wrapping_add</code> matches LC-3's 16-bit behavior (overflow wraps around)</li>
  <li><strong>Type safety:</strong> Result types make all error cases explicit</li>
</ul>

<h3>Memory Access Instructions</h3>

<p>Loading from memory shows how Result types propagate errors naturally:</p>

<pre><code class="language-rust">fn op_ld(&amp;mut self, decoder: &amp;InstructionDecoder) -&gt; LC3Result&lt;()&gt; {
    let dr = decoder.dr()?;
    let pc = self.registers.read(Register::PC);
    let offset = decoder.pc_offset9();
    let addr = pc.wrapping_add(offset as u16);

    // Memory read - error handling is automatic with ?
    let value = self.memory.read(addr)?;

    self.registers.write(dr, value);
    self.registers.update_flags(dr);
    Ok(())
}

fn op_ldi(&amp;mut self, decoder: &amp;InstructionDecoder) -&gt; LC3Result&lt;()&gt; {
    // Load indirect - two memory accesses in sequence
    let dr = decoder.dr()?;
    let pc = self.registers.read(Register::PC);
    let offset = decoder.pc_offset9();
    let addr_addr = pc.wrapping_add(offset as u16);

    // First access gets the address
    let addr = self.memory.read(addr_addr)?;

    // Second access gets the value
    let value = self.memory.read(addr)?;

    self.registers.write(dr, value);
    self.registers.update_flags(dr);
    Ok(())
}
</code></pre>

<p><strong>Error Handling with ?:</strong></p>

<p>Notice how clean the error handling is. Each <code>?</code> means "if this returns an error, stop here and propagate it up". Without Result types, we'd need verbose error checking at every step.</p>

<h3>System Calls - TRAP Instructions</h3>

<p>TRAP routines handle I/O. This demonstrates Rust's I/O safety:</p>

<pre><code class="language-rust">fn trap_getc(&amp;mut self) -&gt; LC3Result&lt;()&gt; {
    use std::io::{self, Read};
    let mut byte = [0u8; 1];
    io::stdin().read_exact(&amp;mut byte)?;
    self.registers.write(Register::R0, byte[0] as u16);
    Ok(())
}

fn trap_out(&amp;mut self) -&gt; LC3Result&lt;()&gt; {
    use std::io::Write;
    let char_code = self.registers.read(Register::R0) as u8;
    print!("{}", char_code as char);
    std::io::stdout().flush()?;
    Ok(())
}

fn trap_puts(&amp;mut self) -&gt; LC3Result&lt;()&gt; {
    use std::io::Write;
    let mut addr = self.registers.read(Register::R0);

    loop {
        let char_code = self.memory.read(addr)?;
        if char_code == 0 {  // Null-terminated string
            break;
        }
        print!("{}", (char_code &amp; 0xFF) as u8 as char);
        addr = addr.wrapping_add(1);
    }

    std::io::stdout().flush()?;
    Ok(())
}

fn trap_halt(&amp;mut self) -&gt; LC3Result&lt;()&gt; {
    println!("
--- Halted ---");
    self.running = false;
    Ok(())
}
</code></pre>

<p><strong>Memory Safety in Action:</strong></p>

<ul>
  <li><strong>Null checks:</strong> The loop terminates when reading a null terminator (safe bounds)</li>
  <li><strong>Error handling:</strong> I/O errors are caught and propagated</li>
  <li><strong>Integer casting:</strong> Rust enforces explicit casting between u16, u8, and char</li>
</ul>

<h3>Testing the VM</h3>

<p>The instruction module includes tests:</p>

<pre><code class="language-rust">#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_opcode_decoding() {
        let instr: u16 = 0x1000;  // ADD opcode
        assert_eq!(Opcode::from_u16(instr).unwrap(), Opcode::ADD);
    }

    #[test]
    fn test_sign_extend() {
        // -1 in 5 bits = 0b11111
        assert_eq!(sign_extend(0b11111 as i16, 5), -1);

        // +15 in 5 bits = 0b01111
        assert_eq!(sign_extend(0b01111 as i16, 5), 15);
    }

    #[test]
    fn test_instruction_decoder() {
        // ADD R2, R3, #5 (immediate mode)
        let instr: u16 = 0x1265;
        let decoder = InstructionDecoder::new(instr);

        assert_eq!(decoder.dr().unwrap(), Register::R2);
        assert_eq!(decoder.sr1().unwrap(), Register::R3);
        assert!(decoder.is_immediate_mode());
        assert_eq!(decoder.imm5(), 5);
    }
}
</code></pre>

<h3>Building and Running</h3>

<p>The complete project is on GitHub and builds with:</p>

<pre><code class="language-bash">cd lc3-vm-rust
cargo build --release
./target/release/lc3-vm-rust program.obj
</code></pre>

<h3>Key Takeaways</h3>

<ol>
  <li><strong>Enums for Safety:</strong> Using enums for registers and opcodes makes invalid states impossible</li>
  <li><strong>Result Types for Error Handling:</strong> Explicit error handling forces you to consider what can go wrong</li>
  <li><strong>Memory Safety Without GC:</strong> Rust's borrow checker prevents entire classes of bugs with zero runtime cost</li>
  <li><strong>Pattern Matching:</strong> Exhaustive matching ensures you handle all cases</li>
  <li><strong>Bit Operations Are Type-Safe:</strong> Rust doesn't let you accidentally mix types during bit manipulation</li>
  <li><strong>Performance:</strong> This VM runs at near-C speeds with far better safety guarantees</li>
</ol>

<h3>Comparing to the C Original</h3>

<p>The original LC-3 C implementation is ~250 lines and brilliantly simple. Our Rust version is longer (because we handle errors explicitly and use type safety), but:</p>

<ul>
  <li><strong>No buffer overflows:</strong> Array access is bounds-checked</li>
  <li><strong>No use-after-free:</strong> Ownership system prevents dangling pointers</li>
  <li><strong>No data races:</strong> Borrow checker ensures thread safety</li>
  <li><strong>No undefined behavior:</strong> All edge cases are explicit</li>
  <li><strong>Same performance:</strong> Compiles to nearly identical machine code</li>
</ul>

<h3>What We Learned About Rust</h3>

<p>This project showcases why Rust is powerful for systems programming:</p>

<ul>
  <li><strong>Type safety catches bugs at compile time</strong> - A typo with a register is a compile error, not a runtime mystery</li>
  <li><strong>Ownership model is more than memory safety</strong> - It naturally expresses intent (mutable vs. immutable)</li>
  <li><strong>Pattern matching is ergonomic</strong> - Instruction dispatch is cleaner than C switch statements</li>
  <li><strong>Error handling is explicit</strong> - No silent failures or exception overhead</li>
</ul>

<h3>Next Steps</h3>

<p>To dive deeper:</p>

<ol>
  <li><strong>Add more TRAP routines</strong> - Implement GETC, IN, PUTSP variants</li>
  <li><strong>Implement a debugger</strong> - Add step-through execution and breakpoints</li>
  <li><strong>Write an assembler</strong> - Create a compiler that generates .obj files</li>
  <li><strong>Study the Rust Book</strong> - Ownership and borrowing chapters go deeper</li>
  <li><strong>Explore Unsafe Rust</strong> - Understand when and why you need it</li>
</ol>

<h3>Further Reading</h3>

<ul>
  <li><strong>The LC-3 Tutorial:</strong> https://www.jmeiners.com/lc3-vm/</li>
  <li><strong>Rust Book - Chapters 4-6:</strong> Ownership, References, Pattern Matching</li>
  <li><strong>Computer Architecture Basics:</strong> Fetch-decode-execute cycle concepts</li>
  <li><strong>Two's Complement:</strong> Understanding signed integer representation in binary</li>
</ul>

<h3>Conclusion</h3>

<p>Building an LC-3 virtual machine in Rust is a rewarding exercise that ties together computer architecture, language design, and systems programming. The result is a fully functional computer emulator that's safe, fast, and elegant.</p>

<p>The journey from high-level type definitions to low-level bit manipulation, from error handling to pattern matching, shows why Rust is such a compelling choice for systems programming. You get the performance and control of C or assembly, with the safety guarantees typically found in high-level languages.</p>

<p>Whether you're learning Rust, exploring computer architecture, or both, implementing an LC-3 VM is an excellent project that builds intuition about how computers really work. The code is clean, the compilation is fast, and the runtime is blazing quick.</p>

<p><em>The complete source code with all 16 instructions, TRAP routines, and comprehensive error handling is available in the lc3-vm-rust directory. Clone it, build it, and run some LC-3 programs to see a real virtual machine in action.</em></p>
  `}],Gm=()=>{const[e,t]=S.useState("all"),[n,r]=S.useState("all"),l=Qc.filter(s=>{const a=e==="all"||s.category===e,u=n==="all"||s.topic===n;return a&&u}),i=[{value:"all",label:"All Content"},{value:"note",label:"Notes"},{value:"deep-dive",label:"Deep Dives"},{value:"project",label:"Projects"}],o=[{value:"all",label:"All Topics"},{value:"SRE",label:"SRE"},{value:"Kubernetes",label:"Kubernetes"},{value:"Databases",label:"Databases"},{value:"System Design",label:"System Design"},{value:"Programming",label:"Programming"}];return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs("div",{className:"mb-12",children:[g.jsx("h1",{className:"text-3xl font-bold text-slate-900",children:"Knowledge Base"}),g.jsx("p",{className:"mt-4 text-xl text-slate-600",children:"Explore engineering notes, deep dives, and projects."})]}),g.jsxs("div",{className:"mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-slate-50 p-4 rounded-lg border border-slate-200",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-700 font-medium",children:[g.jsx(Am,{className:"h-4 w-4"}),g.jsx("span",{children:"Filters:"})]}),g.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.jsx("select",{value:e,onChange:s=>t(s.target.value),className:"block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:i.map(s=>g.jsx("option",{value:s.value,children:s.label},s.value))}),g.jsx("select",{value:n,onChange:s=>r(s.target.value),className:"block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:o.map(s=>g.jsx("option",{value:s.value,children:s.label},s.value))})]})]}),g.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:l.map(s=>g.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col",children:[g.jsxs("div",{className:"p-6 flex-grow",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                  ${s.category==="deep-dive"?"bg-purple-100 text-purple-800":s.category==="project"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:s.category.replace("-"," ")}),g.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[g.jsx($c,{className:"h-4 w-4"}),g.jsx("time",{children:s.date})]})]}),g.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-2",children:g.jsx(gt,{to:`/solutions/${s.id}`,className:"hover:text-indigo-600",children:s.title})}),g.jsx("p",{className:"text-slate-600 mb-4 line-clamp-3",children:s.description}),g.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:g.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600",children:s.topic})})]}),g.jsx("div",{className:"p-6 pt-0 mt-auto",children:g.jsxs(gt,{to:`/solutions/${s.id}`,className:"inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500",children:["Read More ",g.jsx(Im,{className:"ml-2 h-4 w-4"})]})})]},s.id))}),l.length===0&&g.jsx("div",{className:"text-center py-12 text-slate-500",children:"No posts found matching your filters."})]})},Ym=()=>{const{id:e}=nm(),t=Qc.find(n=>n.id===e);return t?g.jsxs("article",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs(gt,{to:"/solutions",className:"inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors",children:[g.jsx(Om,{className:"h-4 w-4 mr-2"}),"Back to Knowledge Base"]}),g.jsxs("header",{className:"mb-12",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[g.jsx("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize
            ${t.category==="deep-dive"?"bg-purple-100 text-purple-800":t.category==="project"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:t.category.replace("-"," ")}),g.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700",children:t.topic})]}),g.jsx("h1",{className:"text-4xl font-bold text-slate-900 mb-4",children:t.title}),g.jsxs("div",{className:"flex items-center gap-2 text-slate-500",children:[g.jsx($c,{className:"h-5 w-5"}),g.jsx("time",{className:"text-lg",children:t.date})]})]}),g.jsx("div",{className:"prose prose-lg prose-indigo max-w-none",dangerouslySetInnerHTML:{__html:t.content}}),g.jsxs("div",{className:"mt-12 pt-8 border-t border-slate-200",children:[g.jsx("h3",{className:"text-sm font-medium text-slate-500 mb-4",children:"Tags"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(n=>g.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600",children:[g.jsx(Hm,{className:"w-3 h-3 mr-1"}),n]},n))})]})]}):g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center",children:[g.jsx("h1",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Post Not Found"}),g.jsx("p",{className:"text-slate-600 mb-8",children:"The engineering note or deep dive you are looking for does not exist."}),g.jsx(gt,{to:"/solutions",className:"text-indigo-600 hover:text-indigo-500 font-medium",children:"← Back to Knowledge Base"})]})};function bm(){return g.jsx(wm,{children:g.jsxs(Ln,{path:"/",element:g.jsx(Km,{}),children:[g.jsx(Ln,{index:!0,element:g.jsx(qm,{})}),g.jsx(Ln,{path:"solutions",element:g.jsx(Gm,{})}),g.jsx(Ln,{path:"solutions/:id",element:g.jsx(Ym,{})})]})})}ai.createRoot(document.getElementById("root")).render(g.jsx(La.StrictMode,{children:g.jsx(Rm,{children:g.jsx(bm,{})})}));
