function Kc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xa={exports:{}},pl={},ka={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Gc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.memo"),ld=Symbol.for("react.lazy"),ns=Symbol.iterator;function id(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var _a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sa=Object.assign,Ea={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||_a}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ca(){}Ca.prototype=pn.prototype;function lo(e,t,n){this.props=e,this.context=t,this.refs=Ea,this.updater=n||_a}var io=lo.prototype=new Ca;io.constructor=lo;Sa(io,pn.prototype);io.isPureReactComponent=!0;var rs=Array.isArray,Ra=Object.prototype.hasOwnProperty,oo={current:null},Pa={key:!0,ref:!0,__self:!0,__source:!0};function Ta(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ra.call(t,r)&&!Pa.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:oo.current}}function od(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function so(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ls=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sd(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Gc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+zl(o,0):r,rs(l)?(n="",e!=null&&(n=e.replace(ls,"$&/")+"/"),Lr(l,t,n,"",function(u){return u})):l!=null&&(so(l)&&(l=od(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ls,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+zl(i,s);o+=Lr(i,t,n,a,l)}else if(a=id(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+zl(i,s++),o+=Lr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Or={transition:null},ud={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Or,ReactCurrentOwner:oo};function Na(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!so(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=pn;I.Fragment=Yc;I.Profiler=Zc;I.PureComponent=lo;I.StrictMode=Xc;I.Suspense=nd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ud;I.act=Na;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sa({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=oo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ra.call(t,a)&&!Pa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};I.createElement=Ta;I.createFactory=function(e){var t=Ta.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:td,render:e}};I.isValidElement=so;I.lazy=function(e){return{$$typeof:ld,_payload:{_status:-1,_result:e},_init:ad}};I.memo=function(e,t){return{$$typeof:rd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};I.unstable_act=Na;I.useCallback=function(e,t){return ue.current.useCallback(e,t)};I.useContext=function(e){return ue.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};I.useEffect=function(e,t){return ue.current.useEffect(e,t)};I.useId=function(){return ue.current.useId()};I.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ue.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};I.useRef=function(e){return ue.current.useRef(e)};I.useState=function(e){return ue.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ue.current.useTransition()};I.version="18.3.1";ka.exports=I;var _=ka.exports;const La=Qc(_),cd=Kc({__proto__:null,default:La},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=_,fd=Symbol.for("react.element"),pd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,hd=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gd={key:!0,ref:!0,__self:!0,__source:!0};function Oa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)md.call(t,r)&&!gd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:fd,type:e,key:i,ref:o,props:l,_owner:hd.current}}pl.Fragment=pd;pl.jsx=Oa;pl.jsxs=Oa;xa.exports=pl;var g=xa.exports,ai={},Ia={exports:{}},xe={},ja={exports:{}},Ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var O=R.length;R.push(L);e:for(;0<O;){var $=O-1>>>1,X=R[$];if(0<l(X,L))R[$]=L,R[O]=X,O=$;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],O=R.pop();if(O!==L){R[0]=O;e:for(var $=0,X=R.length,dr=X>>>1;$<dr;){var _t=2*($+1)-1,Ml=R[_t],St=_t+1,fr=R[St];if(0>l(Ml,O))St<X&&0>l(fr,Ml)?(R[$]=fr,R[St]=O,$=St):(R[$]=Ml,R[_t]=O,$=_t);else if(St<X&&0>l(fr,O))R[$]=fr,R[St]=O,$=St;else break e}}return L}function l(R,L){var O=R.sortIndex-L.sortIndex;return O!==0?O:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],m=1,p=null,h=3,v=!1,w=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function y(R){if(x=!1,f(R),!w)if(n(a)!==null)w=!0,Il(S);else{var L=n(u);L!==null&&jl(y,L.startTime-R)}}function S(R,L){w=!1,x&&(x=!1,d(N),N=-1),v=!0;var O=h;try{for(f(L),p=n(a);p!==null&&(!(p.expirationTime>L)||R&&!Ne());){var $=p.callback;if(typeof $=="function"){p.callback=null,h=p.priorityLevel;var X=$(p.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(a)&&r(a),f(L)}else r(a);p=n(a)}if(p!==null)var dr=!0;else{var _t=n(u);_t!==null&&jl(y,_t.startTime-L),dr=!1}return dr}finally{p=null,h=O,v=!1}}var P=!1,T=null,N=-1,V=5,j=-1;function Ne(){return!(e.unstable_now()-j<V)}function gn(){if(T!==null){var R=e.unstable_now();j=R;var L=!0;try{L=T(!0,R)}finally{L?yn():(P=!1,T=null)}}else P=!1}var yn;if(typeof c=="function")yn=function(){c(gn)};else if(typeof MessageChannel<"u"){var ts=new MessageChannel,qc=ts.port2;ts.port1.onmessage=gn,yn=function(){qc.postMessage(null)}}else yn=function(){E(gn,0)};function Il(R){T=R,P||(P=!0,yn())}function jl(R,L){N=E(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Il(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var O=h;h=L;try{return R()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return L()}finally{h=O}},e.unstable_scheduleCallback=function(R,L,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,R={id:m++,callback:L,priorityLevel:R,startTime:O,expirationTime:X,sortIndex:-1},O>$?(R.sortIndex=O,t(u,R),n(a)===null&&R===n(u)&&(x?(d(N),N=-1):x=!0,jl(y,O-$))):(R.sortIndex=X,t(a,R),w||v||(w=!0,Il(S))),R},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(R){var L=h;return function(){var O=h;h=L;try{return R.apply(this,arguments)}finally{h=O}}}})(Ma);ja.exports=Ma;var yd=ja.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=_,we=yd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var za=new Set,Un={};function At(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Un[e]=t,e=0;e<t.length;e++)za.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},os={};function xd(e){return ui.call(os,e)?!0:ui.call(is,e)?!1:wd.test(e)?os[e]=!0:(is[e]=!0,!1)}function kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,n,r){if(t===null||typeof t>"u"||kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,uo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function co(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,n,l,r)&&(n=null),r||l===null?xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),bt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Da=Symbol.for("react.context"),po=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Fa=Symbol.for("react.offscreen"),ss=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Al;function Rn(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Dl=!1;function Fl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Sd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case bt:return"Portal";case ci:return"Profiler";case fo:return"StrictMode";case di:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Da:return(e.displayName||"Context")+".Consumer";case Aa:return(e._context.displayName||"Context")+".Provider";case po:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function Ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ba(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cd(e){var t=Ba(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Cd(e))}function Ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ba(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function as(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ba(e,t){t=t.checked,t!=null&&co(e,"checked",t,!1)}function hi(e,t){ba(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Pn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Wa(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function $a(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function qa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=$a(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Pd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wi(e,t){if(t){if(Pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,en=null,tn=null;function fs(e){if(e=ar(e)){if(typeof _i!="function")throw Error(k(280));var t=e.stateNode;t&&(t=vl(t),_i(e.stateNode,e.type,t))}}function Ka(e){en?tn?tn.push(e):tn=[e]:en=e}function Qa(){if(en){var e=en,t=tn;if(tn=en=null,fs(e),t)for(e=0;e<t.length;e++)fs(t[e])}}function Ga(e,t){return e(t)}function Ya(){}var Bl=!1;function Xa(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Ga(e,t,n)}finally{Bl=!1,(en!==null||tn!==null)&&(Ya(),Qa())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Si=!1;if(Ke)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Si=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Si=!1}function Td(e,t,n,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var In=!1,Hr=null,Vr=!1,Ei=null,Nd={onError:function(e){In=!0,Hr=e}};function Ld(e,t,n,r,l,i,o,s,a){In=!1,Hr=null,Td.apply(Nd,arguments)}function Od(e,t,n,r,l,i,o,s,a){if(Ld.apply(this,arguments),In){if(In){var u=Hr;In=!1,Hr=null}else throw Error(k(198));Vr||(Vr=!0,Ei=u)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ps(e){if(Dt(e)!==e)throw Error(k(188))}function Id(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ps(l),e;if(i===r)return ps(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ja(e){return e=Id(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=we.unstable_scheduleCallback,ms=we.unstable_cancelCallback,jd=we.unstable_shouldYield,Md=we.unstable_requestPaint,q=we.unstable_now,zd=we.unstable_getCurrentPriorityLevel,go=we.unstable_ImmediatePriority,nu=we.unstable_UserBlockingPriority,$r=we.unstable_NormalPriority,Ad=we.unstable_LowPriority,ru=we.unstable_IdlePriority,ml=null,Ue=null;function Dd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Ud,Fd=Math.log,Bd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Fd(e)/Bd|0)|0}var yr=64,vr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Tn(s):(i&=o,i!==0&&(r=Tn(i)))}else o=n&~l,o!==0?r=Tn(o):i!==0&&(r=Tn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=bd(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function yo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var z=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ou,vo,su,au,uu,Ri=!1,wr=[],st=null,at=null,ut=null,Hn=new Map,Vn=new Map,nt=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function xn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ar(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function $d(e,t,n,r,l){switch(t){case"focusin":return st=xn(st,e,t,n,r,l),!0;case"dragenter":return at=xn(at,e,t,n,r,l),!0;case"mouseover":return ut=xn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,xn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Vn.set(i,xn(Vn.get(i)||null,e,t,n,r,l)),!0}return!1}function cu(e){var t=Rt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Za(n),t!==null){e.blockedOn=t,uu(e.priority,function(){su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ki=r,n.target.dispatchEvent(r),ki=null}else return t=ar(n),t!==null&&vo(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){Ir(e)&&n.delete(t)}function qd(){Ri=!1,st!==null&&Ir(st)&&(st=null),at!==null&&Ir(at)&&(at=null),ut!==null&&Ir(ut)&&(ut=null),Hn.forEach(gs),Vn.forEach(gs)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,qd)))}function $n(e){function t(l){return kn(l,e)}if(0<wr.length){kn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&kn(st,e),at!==null&&kn(at,e),ut!==null&&kn(ut,e),Hn.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)cu(n),n.blockedOn===null&&nt.shift()}var nn=Xe.ReactCurrentBatchConfig,Kr=!0;function Kd(e,t,n,r){var l=z,i=nn.transition;nn.transition=null;try{z=1,wo(e,t,n,r)}finally{z=l,nn.transition=i}}function Qd(e,t,n,r){var l=z,i=nn.transition;nn.transition=null;try{z=4,wo(e,t,n,r)}finally{z=l,nn.transition=i}}function wo(e,t,n,r){if(Kr){var l=Pi(e,t,n,r);if(l===null)Yl(e,t,r,Qr,n),hs(e,r);else if($d(l,e,t,n,r))r.stopPropagation();else if(hs(e,r),t&4&&-1<Vd.indexOf(e)){for(;l!==null;){var i=ar(l);if(i!==null&&ou(i),i=Pi(e,t,n,r),i===null&&Yl(e,t,r,Qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Qr=null;function Pi(e,t,n,r){if(Qr=null,e=ho(r),e=Rt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Za(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case go:return 1;case nu:return 4;case $r:case Ad:return 16;case ru:return 536870912;default:return 16}default:return 16}}var lt=null,xo=null,jr=null;function fu(){if(jr)return jr;var e,t=xo,n=t.length,r,l="value"in lt?lt.value:lt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function ys(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:ys,this.isPropagationStopped=ys,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=ke(mn),sr=W({},mn,{view:0,detail:0}),Gd=ke(sr),bl,Wl,_n,hl=W({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(bl=e.screenX-_n.screenX,Wl=e.screenY-_n.screenY):Wl=bl=0,_n=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),vs=ke(hl),Yd=W({},hl,{dataTransfer:0}),Xd=ke(Yd),Zd=W({},sr,{relatedTarget:0}),Hl=ke(Zd),Jd=W({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),ef=ke(Jd),tf=W({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=ke(tf),rf=W({},mn,{data:0}),ws=ke(rf),lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function _o(){return af}var uf=W({},sr,{key:function(e){if(e.key){var t=lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_o,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=ke(uf),df=W({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=ke(df),ff=W({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_o}),pf=ke(ff),mf=W({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=ke(mf),gf=W({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=ke(gf),vf=[9,13,27,32],So=Ke&&"CompositionEvent"in window,jn=null;Ke&&"documentMode"in document&&(jn=document.documentMode);var wf=Ke&&"TextEvent"in window&&!jn,pu=Ke&&(!So||jn&&8<jn&&11>=jn),ks=" ",_s=!1;function mu(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function xf(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(_s=!0,ks);case"textInput":return e=t.data,e===ks&&_s?null:e;default:return null}}function kf(e,t){if(Ht)return e==="compositionend"||!So&&mu(e,t)?(e=fu(),jr=xo=lt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function gu(e,t,n,r){Ka(r),t=Gr(t,"onChange"),0<t.length&&(n=new ko("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,qn=null;function Sf(e){Pu(e,0)}function gl(e){var t=qt(e);if(Ua(t))return e}function Ef(e,t){if(e==="change")return t}var yu=!1;if(Ke){var Vl;if(Ke){var $l="oninput"in document;if(!$l){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),$l=typeof Es.oninput=="function"}Vl=$l}else Vl=!1;yu=Vl&&(!document.documentMode||9<document.documentMode)}function Cs(){Mn&&(Mn.detachEvent("onpropertychange",vu),qn=Mn=null)}function vu(e){if(e.propertyName==="value"&&gl(qn)){var t=[];gu(t,qn,e,ho(e)),Xa(Sf,t)}}function Cf(e,t,n){e==="focusin"?(Cs(),Mn=t,qn=n,Mn.attachEvent("onpropertychange",vu)):e==="focusout"&&Cs()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(qn)}function Pf(e,t){if(e==="click")return gl(t)}function Tf(e,t){if(e==="input"||e==="change")return gl(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:Nf;function Kn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ui.call(t,l)||!Ae(e[l],t[l]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var n=Rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ps(n,i);var o=Ps(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,Ti=null,zn=null,Ni=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||Vt==null||Vt!==Wr(r)||(r=Vt,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Kn(zn,r)||(zn=r,r=Gr(Ti,"onSelect"),0<r.length&&(t=new ko("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},ql={},ku={};Ke&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function yl(e){if(ql[e])return ql[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return ql[e]=t[n];return e}var _u=yl("animationend"),Su=yl("animationiteration"),Eu=yl("animationstart"),Cu=yl("transitionend"),Ru=new Map,Ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Ru.set(e,t),At(t,[e])}for(var Kl=0;Kl<Ns.length;Kl++){var Ql=Ns[Kl],If=Ql.toLowerCase(),jf=Ql[0].toUpperCase()+Ql.slice(1);wt(If,"on"+jf)}wt(_u,"onAnimationEnd");wt(Su,"onAnimationIteration");wt(Eu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Cu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Od(r,t,void 0,e),e.currentTarget=null}function Pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Ls(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Ls(l,s,u),i=a}}}if(Vr)throw e=Ei,Vr=!1,Ei=null,e}function D(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+"__bubble";n.has(r)||(Tu(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),Tu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[_r]){e[_r]=!0,za.forEach(function(n){n!=="selectionchange"&&(Mf.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Gl("selectionchange",!1,t))}}function Tu(e,t,n,r){switch(du(t)){case 1:var l=Kd;break;case 4:l=Qd;break;default:l=wo}n=l.bind(null,t,n,e),l=void 0,!Si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Rt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Xa(function(){var u=i,m=ho(n),p=[];e:{var h=Ru.get(e);if(h!==void 0){var v=ko,w=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":v=cf;break;case"focusin":w="focus",v=Hl;break;case"focusout":w="blur",v=Hl;break;case"beforeblur":case"afterblur":v=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=pf;break;case _u:case Su:case Eu:v=ef;break;case Cu:v=hf;break;case"scroll":v=Gd;break;case"wheel":v=yf;break;case"copy":case"cut":case"paste":v=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xs}var x=(t&4)!==0,E=!x&&e==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Wn(c,d),y!=null&&x.push(Gn(c,y,f)))),E)break;c=c.return}0<x.length&&(h=new v(h,w,null,n,m),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==ki&&(w=n.relatedTarget||n.fromElement)&&(Rt(w)||w[Qe]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Rt(w):null,w!==null&&(E=Dt(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(x=vs,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=xs,y="onPointerLeave",d="onPointerEnter",c="pointer"),E=v==null?h:qt(v),f=w==null?h:qt(w),h=new x(y,c+"leave",v,n,m),h.target=E,h.relatedTarget=f,y=null,Rt(m)===u&&(x=new x(d,c+"enter",w,n,m),x.target=f,x.relatedTarget=E,y=x),E=y,v&&w)t:{for(x=v,d=w,c=0,f=x;f;f=Ut(f))c++;for(f=0,y=d;y;y=Ut(y))f++;for(;0<c-f;)x=Ut(x),c--;for(;0<f-c;)d=Ut(d),f--;for(;c--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ut(x),d=Ut(d)}x=null}else x=null;v!==null&&Os(p,h,v,x,!1),w!==null&&E!==null&&Os(p,E,w,x,!0)}}e:{if(h=u?qt(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=Ef;else if(Ss(h))if(yu)S=Tf;else{S=Rf;var P=Cf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Pf);if(S&&(S=S(e,u))){gu(p,S,n,m);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&gi(h,"number",h.value)}switch(P=u?qt(u):window,e){case"focusin":(Ss(P)||P.contentEditable==="true")&&(Vt=P,Ti=u,zn=null);break;case"focusout":zn=Ti=Vt=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,Ts(p,n,m);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":Ts(p,n,m)}var T;if(So)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ht?mu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(pu&&n.locale!=="ko"&&(Ht||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ht&&(T=fu()):(lt=m,xo="value"in lt?lt.value:lt.textContent,Ht=!0)),P=Gr(u,N),0<P.length&&(N=new ws(N,e,null,n,m),p.push({event:N,listeners:P}),T?N.data=T:(T=hu(n),T!==null&&(N.data=T)))),(T=wf?xf(e,n):kf(e,n))&&(u=Gr(u,"onBeforeInput"),0<u.length&&(m=new ws("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=T))}Pu(p,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Gn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Wn(n,i),a!=null&&o.unshift(Gn(n,a,s))):l||(a=Wn(n,i),a!=null&&o.push(Gn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var zf=/\r\n?/g,Af=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Af,"")}function Sr(e,t,n){if(t=Is(t),Is(e)!==t&&n)throw Error(k(425))}function Yr(){}var Li=null,Oi=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,js=typeof Promise=="function"?Promise:void 0,Ff=typeof queueMicrotask=="function"?queueMicrotask:typeof js<"u"?function(e){return js.resolve(null).then(e).catch(Bf)}:ji;function Bf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Be="__reactFiber$"+hn,Yn="__reactProps$"+hn,Qe="__reactContainer$"+hn,Mi="__reactEvents$"+hn,Uf="__reactListeners$"+hn,bf="__reactHandles$"+hn;function Rt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ms(e);e!==null;){if(n=e[Be])return n;e=Ms(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Be]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function vl(e){return e[Yn]||null}var zi=[],Kt=-1;function xt(e){return{current:e}}function F(e){0>Kt||(e.current=zi[Kt],zi[Kt]=null,Kt--)}function A(e,t){Kt++,zi[Kt]=e.current,e.current=t}var vt={},oe=xt(vt),pe=xt(!1),Ot=vt;function sn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Xr(){F(pe),F(oe)}function zs(e,t,n){if(oe.current!==vt)throw Error(k(168));A(oe,t),A(pe,n)}function Nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Ed(e)||"Unknown",l));return W({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Ot=oe.current,A(oe,e),A(pe,pe.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Nu(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,F(pe),F(oe),A(oe,e)):F(pe),A(pe,n)}var He=null,wl=!1,Zl=!1;function Lu(e){He===null?He=[e]:He.push(e)}function Wf(e){wl=!0,Lu(e)}function kt(){if(!Zl&&He!==null){Zl=!0;var e=0,t=z;try{var n=He;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,wl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),tu(go,kt),l}finally{z=t,Zl=!1}}return null}var Qt=[],Gt=0,Jr=null,el=0,Se=[],Ee=0,It=null,Ve=1,$e="";function Et(e,t){Qt[Gt++]=el,Qt[Gt++]=Jr,Jr=e,el=t}function Ou(e,t,n){Se[Ee++]=Ve,Se[Ee++]=$e,Se[Ee++]=It,It=e;var r=Ve;e=$e;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Me(t)+l|n<<l|r,$e=i+e}else Ve=1<<i|n<<l|r,$e=e}function Co(e){e.return!==null&&(Et(e,1),Ou(e,1,0))}function Ro(e){for(;e===Jr;)Jr=Qt[--Gt],Qt[Gt]=null,el=Qt[--Gt],Qt[Gt]=null;for(;e===It;)It=Se[--Ee],Se[Ee]=null,$e=Se[--Ee],Se[Ee]=null,Ve=Se[--Ee],Se[Ee]=null}var ve=null,ye=null,B=!1,je=null;function Iu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(B){var t=ye;if(t){var n=t;if(!Ds(e,t)){if(Ai(e))throw Error(k(418));t=ct(n.nextSibling);var r=ve;t&&Ds(e,t)?Iu(r,n):(e.flags=e.flags&-4097|2,B=!1,ve=e)}}else{if(Ai(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,ve=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Er(e){if(e!==ve)return!1;if(!B)return Fs(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=ye)){if(Ai(e))throw ju(),Error(k(418));for(;t;)Iu(e,t),t=ct(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?ct(e.stateNode.nextSibling):null;return!0}function ju(){for(var e=ye;e;)e=ct(e.nextSibling)}function an(){ye=ve=null,B=!1}function Po(e){je===null?je=[e]:je.push(e)}var Hf=Xe.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function Mu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function l(d,c){return d=mt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,y){return c===null||c.tag!==6?(c=ii(f,d.mode,y),c.return=d,c):(c=l(c,f),c.return=d,c)}function a(d,c,f,y){var S=f.type;return S===Wt?m(d,c,f.props.children,y,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Bs(S)===c.type)?(y=l(c,f.props),y.ref=Sn(d,c,f),y.return=d,y):(y=br(f.type,f.key,f.props,null,d.mode,y),y.ref=Sn(d,c,f),y.return=d,y)}function u(d,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=oi(f,d.mode,y),c.return=d,c):(c=l(c,f.children||[]),c.return=d,c)}function m(d,c,f,y,S){return c===null||c.tag!==7?(c=Lt(f,d.mode,y,S),c.return=d,c):(c=l(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ii(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return f=br(c.type,c.key,c.props,null,d.mode,f),f.ref=Sn(d,null,c),f.return=d,f;case bt:return c=oi(c,d.mode,f),c.return=d,c;case et:var y=c._init;return p(d,y(c._payload),f)}if(Pn(c)||vn(c))return c=Lt(c,d.mode,f,null),c.return=d,c;Cr(d,c)}return null}function h(d,c,f,y){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(d,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===S?a(d,c,f,y):null;case bt:return f.key===S?u(d,c,f,y):null;case et:return S=f._init,h(d,c,S(f._payload),y)}if(Pn(f)||vn(f))return S!==null?null:m(d,c,f,y,null);Cr(d,f)}return null}function v(d,c,f,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(c,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mr:return d=d.get(y.key===null?f:y.key)||null,a(c,d,y,S);case bt:return d=d.get(y.key===null?f:y.key)||null,u(c,d,y,S);case et:var P=y._init;return v(d,c,f,P(y._payload),S)}if(Pn(y)||vn(y))return d=d.get(f)||null,m(c,d,y,S,null);Cr(c,y)}return null}function w(d,c,f,y){for(var S=null,P=null,T=c,N=c=0,V=null;T!==null&&N<f.length;N++){T.index>N?(V=T,T=null):V=T.sibling;var j=h(d,T,f[N],y);if(j===null){T===null&&(T=V);break}e&&T&&j.alternate===null&&t(d,T),c=i(j,c,N),P===null?S=j:P.sibling=j,P=j,T=V}if(N===f.length)return n(d,T),B&&Et(d,N),S;if(T===null){for(;N<f.length;N++)T=p(d,f[N],y),T!==null&&(c=i(T,c,N),P===null?S=T:P.sibling=T,P=T);return B&&Et(d,N),S}for(T=r(d,T);N<f.length;N++)V=v(T,d,N,f[N],y),V!==null&&(e&&V.alternate!==null&&T.delete(V.key===null?N:V.key),c=i(V,c,N),P===null?S=V:P.sibling=V,P=V);return e&&T.forEach(function(Ne){return t(d,Ne)}),B&&Et(d,N),S}function x(d,c,f,y){var S=vn(f);if(typeof S!="function")throw Error(k(150));if(f=S.call(f),f==null)throw Error(k(151));for(var P=S=null,T=c,N=c=0,V=null,j=f.next();T!==null&&!j.done;N++,j=f.next()){T.index>N?(V=T,T=null):V=T.sibling;var Ne=h(d,T,j.value,y);if(Ne===null){T===null&&(T=V);break}e&&T&&Ne.alternate===null&&t(d,T),c=i(Ne,c,N),P===null?S=Ne:P.sibling=Ne,P=Ne,T=V}if(j.done)return n(d,T),B&&Et(d,N),S;if(T===null){for(;!j.done;N++,j=f.next())j=p(d,j.value,y),j!==null&&(c=i(j,c,N),P===null?S=j:P.sibling=j,P=j);return B&&Et(d,N),S}for(T=r(d,T);!j.done;N++,j=f.next())j=v(T,d,N,j.value,y),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?N:j.key),c=i(j,c,N),P===null?S=j:P.sibling=j,P=j);return e&&T.forEach(function(gn){return t(d,gn)}),B&&Et(d,N),S}function E(d,c,f,y){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var S=f.key,P=c;P!==null;){if(P.key===S){if(S=f.type,S===Wt){if(P.tag===7){n(d,P.sibling),c=l(P,f.props.children),c.return=d,d=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Bs(S)===P.type){n(d,P.sibling),c=l(P,f.props),c.ref=Sn(d,P,f),c.return=d,d=c;break e}n(d,P);break}else t(d,P);P=P.sibling}f.type===Wt?(c=Lt(f.props.children,d.mode,y,f.key),c.return=d,d=c):(y=br(f.type,f.key,f.props,null,d.mode,y),y.ref=Sn(d,c,f),y.return=d,d=y)}return o(d);case bt:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=l(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=oi(f,d.mode,y),c.return=d,d=c}return o(d);case et:return P=f._init,E(d,c,P(f._payload),y)}if(Pn(f))return w(d,c,f,y);if(vn(f))return x(d,c,f,y);Cr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=l(c,f),c.return=d,d=c):(n(d,c),c=ii(f,d.mode,y),c.return=d,d=c),o(d)):n(d,c)}return E}var un=Mu(!0),zu=Mu(!1),tl=xt(null),nl=null,Yt=null,To=null;function No(){To=Yt=nl=null}function Lo(e){var t=tl.current;F(tl),e._currentValue=t}function Fi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){nl=e,To=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(nl===null)throw Error(k(308));Yt=e,nl.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Pt=null;function Oo(e){Pt===null?Pt=[e]:Pt.push(e)}function Au(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,Oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yo(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;tt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(i!==null){var p=l.baseState;o=0,m=u=a=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(h=t,v=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){p=w.call(v,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(v,p,h):w,h==null)break e;p=W({},p,h);break e;case 2:tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=v,a=p):m=m.next=v,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=p}}function bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var ur={},be=xt(ur),Xn=xt(ur),Zn=xt(ur);function Tt(e){if(e===ur)throw Error(k(174));return e}function jo(e,t){switch(A(Zn,t),A(Xn,e),A(be,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}F(be),A(be,t)}function cn(){F(be),F(Xn),F(Zn)}function Fu(e){Tt(Zn.current);var t=Tt(be.current),n=vi(t,e.type);t!==n&&(A(Xn,e),A(be,n))}function Mo(e){Xn.current===e&&(F(be),F(Xn))}var U=xt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function zo(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ar=Xe.ReactCurrentDispatcher,ei=Xe.ReactCurrentBatchConfig,jt=0,b=null,G=null,Z=null,il=!1,An=!1,Jn=0,Vf=0;function re(){throw Error(k(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,l,i){if(jt=i,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?Qf:Gf,e=n(r,l),An){i=0;do{if(An=!1,Jn=0,25<=i)throw Error(k(301));i+=1,Z=G=null,t.updateQueue=null,Ar.current=Yf,e=n(r,l)}while(An)}if(Ar.current=ol,t=G!==null&&G.next!==null,jt=0,Z=G=b=null,il=!1,t)throw Error(k(300));return e}function Fo(){var e=Jn!==0;return Jn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?b.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(G===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Z===null?b.memoizedState:Z.next;if(t!==null)Z=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?b.memoizedState=Z=e:Z=Z.next=e}return Z}function er(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var m=u.lane;if((jt&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,b.lanes|=m,Mt|=m}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,Ae(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,b.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ni(e){var t=Te(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ae(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bu(){}function Uu(e,t){var n=b,r=Te(),l=t(),i=!Ae(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,Bo(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,tr(9,Wu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(k(349));jt&30||bu(n,t,l)}return l}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wu(e,t,n,r){t.value=n,t.getSnapshot=r,Vu(t)&&$u(e)}function Hu(e,t,n){return n(function(){Vu(t)&&$u(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function $u(e){var t=Ge(e,1);t!==null&&ze(t,e,1,-1)}function Ws(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Kf.bind(null,b,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qu(){return Te().memoizedState}function Dr(e,t,n,r){var l=Fe();b.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&Ao(r,o.deps)){l.memoizedState=tr(t,n,i,r);return}}b.flags|=e,l.memoizedState=tr(1|t,n,i,r)}function Hs(e,t){return Dr(8390656,8,e,t)}function Bo(e,t){return xl(2048,8,e,t)}function Ku(e,t){return xl(4,2,e,t)}function Qu(e,t){return xl(4,4,e,t)}function Gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Gu.bind(null,t,e),n)}function Uo(){}function Xu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return jt&21?(Ae(n,t)||(n=lu(),b.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function $f(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),t()}finally{z=n,ei.transition=r}}function ec(){return Te().memoizedState}function qf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))nc(t,n);else if(n=Au(e,t,n,r),n!==null){var l=ae();ze(n,e,r,l),rc(n,t,r)}}function Kf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))nc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ae(s,o)){var a=t.interleaved;a===null?(l.next=l,Oo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Au(e,t,l,r),n!==null&&(l=ae(),ze(n,e,r,l),rc(n,t,r))}}function tc(e){var t=e.alternate;return e===b||t!==null&&t===b}function nc(e,t){An=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yo(e,n)}}var ol={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Qf={readContext:Pe,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Hs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qf.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:Uo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=$f.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,l=Fe();if(B){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),J===null)throw Error(k(349));jt&30||bu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Hs(Hu.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,Wu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=J.identifierPrefix;if(B){var n=$e,r=Ve;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gf={readContext:Pe,useCallback:Xu,useContext:Pe,useEffect:Bo,useImperativeHandle:Yu,useInsertionEffect:Ku,useLayoutEffect:Qu,useMemo:Zu,useReducer:ti,useRef:qu,useState:function(){return ti(er)},useDebugValue:Uo,useDeferredValue:function(e){var t=Te();return Ju(t,G.memoizedState,e)},useTransition:function(){var e=ti(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Uu,useId:ec,unstable_isNewReconciler:!1},Yf={readContext:Pe,useCallback:Xu,useContext:Pe,useEffect:Bo,useImperativeHandle:Yu,useInsertionEffect:Ku,useLayoutEffect:Qu,useMemo:Zu,useReducer:ni,useRef:qu,useState:function(){return ni(er)},useDebugValue:Uo,useDeferredValue:function(e){var t=Te();return G===null?t.memoizedState=e:Ju(t,G.memoizedState,e)},useTransition:function(){var e=ni(er)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Uu,useId:ec,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(ze(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,l),t!==null&&(ze(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(ze(t,e,r,n),zr(t,e,r))}};function Vs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(l,i):!0}function lc(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=me(t)?Ot:oe.current,r=t.contextTypes,i=(r=r!=null)?sn(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Io(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=me(t)?Ot:oe.current,l.context=sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Sd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Xi=r),bi(e,t)},n}function oc(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bi(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=dp.bind(null,e,t,n),t.then(e,e))}function Ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Zf=Xe.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?zu(t,null,n,r):un(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var i=t.ref;return rn(t,l),r=Do(e,t,n,r,i,l),n=Fo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(B&&n&&Co(t),t.flags|=1,se(e,t,r,l),t.child)}function Ys(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Qo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sc(e,t,i,r,l)):(e=br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Kn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Wi(e,t,n,r,l)}function ac(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Zt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Zt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(Zt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(Zt,ge),ge|=r;return se(e,t,l,n),t.child}function uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,l){var i=me(n)?Ot:oe.current;return i=sn(t,i),rn(t,l),n=Do(e,t,n,r,i,l),r=Fo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(B&&r&&Co(t),t.flags|=1,se(e,t,n,l),t.child)}function Xs(e,t,n,r,l){if(me(n)){var i=!0;Zr(t)}else i=!1;if(rn(t,l),t.stateNode===null)Fr(e,t),lc(t,n,r),Ui(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pe(u):(u=me(n)?Ot:oe.current,u=sn(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&$s(t,o,r,u),tt=!1;var h=t.memoizedState;o.state=h,rl(t,r,o,l),a=t.memoizedState,s!==r||h!==a||pe.current||tt?(typeof m=="function"&&(Bi(t,n,m,r),a=t.memoizedState),(s=tt||Vs(t,n,s,r,h,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Du(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Oe(t.type,s),o.props=u,p=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Pe(a):(a=me(n)?Ot:oe.current,a=sn(t,a));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==a)&&$s(t,o,r,a),tt=!1,h=t.memoizedState,o.state=h,rl(t,r,o,l);var w=t.memoizedState;s!==p||h!==w||pe.current||tt?(typeof v=="function"&&(Bi(t,n,v,r),w=t.memoizedState),(u=tt||Vs(t,n,u,r,h,w,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Hi(e,t,n,r,i,l)}function Hi(e,t,n,r,l,i){uc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&As(t,n,!1),Ye(e,t,i);r=t.stateNode,Zf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=un(t,e.child,null,i),t.child=un(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&As(t,n,!0),t.child}function cc(e){var t=e.stateNode;t.pendingContext?zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zs(e,t.context,!1),jo(e,t.containerInfo)}function Zs(e,t,n,r,l){return an(),Po(l),t.flags|=256,se(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function dc(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(U,l&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=El(o,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$i(n),t.memoizedState=Vi,e):bo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Jf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=mt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=mt(s,i):(i=Lt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?$i(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bo(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&Po(r),un(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(k(422))),Rr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=El({mode:"visible",children:r.children},l,0,null),i=Lt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&un(t,e.child,null,o),t.child.memoizedState=$i(o),t.memoizedState=Vi,i);if(!(t.mode&1))return Rr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=ri(i,r,void 0),Rr(e,t,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),ze(r,e,l,-1))}return Ko(),r=ri(Error(k(421))),Rr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=fp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ct(l.nextSibling),ve=t,B=!0,je=null,e!==null&&(Se[Ee++]=Ve,Se[Ee++]=$e,Se[Ee++]=It,Ve=e.id,$e=e.overflow,It=t),t=bo(t,r.children),t.flags|=4096,t)}function Js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fi(e.return,t,n)}function li(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function fc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),li(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ep(e,t,n){switch(t.tag){case 3:cc(t),an();break;case 5:Fu(t);break;case 1:me(t.type)&&Zr(t);break;case 4:jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?dc(e,t,n):(A(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);A(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return Ye(e,t,n)}var pc,qi,mc,hc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qi=function(){};mc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(be.current);var i=null;switch(n){case"input":l=mi(e,l),r=mi(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=yi(e,l),r=yi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}wi(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Un.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Un.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tp(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Xr(),le(t),null;case 3:return r=t.stateNode,cn(),F(pe),F(oe),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(eo(je),je=null))),qi(e,t),le(t),null;case 5:Mo(t);var l=Tt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)mc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=Tt(be.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)D(Nn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":as(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":cs(r,i),D("invalid",r)}wi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",""+s]):Un.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":hr(r),us(r,i,!0);break;case"textarea":hr(r),ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[Yn]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(o=xi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)D(Nn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":as(e,r),l=mi(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":cs(e,r),l=yi(e,r),D("invalid",e);break;default:l=r}wi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?qa(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Va(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&bn(e,a):typeof a=="number"&&bn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?a!=null&&i==="onScroll"&&D("scroll",e):a!=null&&co(e,i,a,o))}switch(n){case"input":hr(e),us(e,r,!1);break;case"textarea":hr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(Zn.current),Tt(be.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return le(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&t.mode&1&&!(t.flags&128))ju(),an(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Be]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else je!==null&&(eo(je),je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):Ko())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return cn(),qi(e,t),e===null&&Qn(t.stateNode.containerInfo),le(t),null;case 10:return Lo(t.type._context),le(t),null;case 17:return me(t.type)&&Xr(),le(t),null;case 19:if(F(U),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)En(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,En(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>fn&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return le(t),null}else 2*q()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=U.current,A(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return qo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function np(e,t){switch(Ro(t),t.tag){case 1:return me(t.type)&&Xr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),F(pe),F(oe),zo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mo(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return cn(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return qo(),null;case 24:return null;default:return null}}var Pr=!1,ie=!1,rp=typeof WeakSet=="function"?WeakSet:Set,C=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){H(e,t,r)}}var ea=!1;function lp(e,t){if(Li=Kr,e=xu(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,m=0,p=e,h=null;t:for(;;){for(var v;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++u===l&&(s=o),h===i&&++m===r&&(a=o),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},Kr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,E=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=ea,ea=!1,w}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ki(t,n,i)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Yn],delete t[Mi],delete t[Uf],delete t[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function ta(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var ee=null,Ie=!1;function Je(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ie||Xt(n,t);case 6:var r=ee,l=Ie;ee=null,Je(e,t,n),ee=r,Ie=l,ee!==null&&(Ie?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Ie?(e=ee,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),$n(e)):Xl(ee,n.stateNode));break;case 4:r=ee,l=Ie,ee=n.stateNode.containerInfo,Ie=!0,Je(e,t,n),ee=r,Ie=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ki(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ie&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function na(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rp),t.forEach(function(r){var l=pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Ie=!1;break e;case 3:ee=s.stateNode.containerInfo,Ie=!0;break e;case 4:ee=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(ee===null)throw Error(k(160));vc(i,o,l),ee=null,Ie=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){H(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{Dn(3,e,e.return),_l(3,e)}catch(x){H(e,e.return,x)}try{Dn(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{bn(l,"")}catch(x){H(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ba(l,i),xi(s,o);var u=xi(s,i);for(o=0;o<a.length;o+=2){var m=a[o],p=a[o+1];m==="style"?qa(l,p):m==="dangerouslySetInnerHTML"?Va(l,p):m==="children"?bn(l,p):co(l,m,p,u)}switch(s){case"input":hi(l,i);break;case"textarea":Wa(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Jt(l,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Jt(l,!!i.multiple,i.defaultValue,!0):Jt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yn]=i}catch(x){H(e,e.return,x)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){H(e,e.return,x)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Vo=q())),r&4&&na(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||m,Le(t,e),ie=u):Le(t,e),De(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(h=C,v=h.child,h.tag){case 0:case 11:case 14:case 15:Dn(4,h,h.return);break;case 1:Xt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){H(r,n,x)}}break;case 5:Xt(h,h.return);break;case 22:if(h.memoizedState!==null){la(p);continue}}v!==null?(v.return=h,C=v):la(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=$a("display",o))}catch(x){H(e,e.return,x)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){H(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),De(e),r&4&&na(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(bn(l,""),r.flags&=-33);var i=ta(e);Yi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ta(e);Gi(e,s,o);break;default:throw Error(k(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e,t,n){C=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Pr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ie;s=Pr;var u=ie;if(Pr=o,(ie=a)&&!u)for(C=l;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?ia(l):a!==null?(a.return=o,C=a):ia(l);for(;i!==null;)C=i,xc(i),i=i.sibling;C=l,Pr=s,ie=u}ra(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):ra(e)}}function ra(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&bs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&$n(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||t.flags&512&&Qi(t)}catch(h){H(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function la(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ia(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(a){H(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){H(t,l,a)}}var i=t.return;try{Qi(t)}catch(a){H(t,i,a)}break;case 5:var o=t.return;try{Qi(t)}catch(a){H(t,o,a)}}}catch(a){H(t,t.return,a)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var op=Math.ceil,sl=Xe.ReactCurrentDispatcher,Wo=Xe.ReactCurrentOwner,Re=Xe.ReactCurrentBatchConfig,M=0,J=null,K=null,te=0,ge=0,Zt=xt(0),Y=0,nr=null,Mt=0,Sl=0,Ho=0,Fn=null,de=null,Vo=0,fn=1/0,We=null,al=!1,Xi=null,ft=null,Tr=!1,it=null,ul=0,Bn=0,Zi=null,Br=-1,Ur=0;function ae(){return M&6?q():Br!==-1?Br:Br=q()}function pt(e){return e.mode&1?M&2&&te!==0?te&-te:Hf.transition!==null?(Ur===0&&(Ur=lu()),Ur):(e=z,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function ze(e,t,n,r){if(50<Bn)throw Bn=0,Zi=null,Error(k(185));or(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(Sl|=n),Y===4&&rt(e,te)),he(e,r),n===1&&M===0&&!(t.mode&1)&&(fn=q()+500,wl&&kt()))}function he(e,t){var n=e.callbackNode;Wd(e,t);var r=qr(e,e===J?te:0);if(r===0)n!==null&&ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ms(n),t===1)e.tag===0?Wf(oa.bind(null,e)):Lu(oa.bind(null,e)),Ff(function(){!(M&6)&&kt()}),n=null;else{switch(iu(r)){case 1:n=go;break;case 4:n=nu;break;case 16:n=$r;break;case 536870912:n=ru;break;default:n=$r}n=Tc(n,kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kc(e,t){if(Br=-1,Ur=0,M&6)throw Error(k(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=qr(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=M;M|=2;var i=Sc();(J!==e||te!==t)&&(We=null,fn=q()+500,Nt(e,t));do try{up();break}catch(s){_c(e,s)}while(!0);No(),sl.current=i,M=l,K!==null?t=0:(J=null,te=0,t=Y)}if(t!==0){if(t===2&&(l=Ci(e),l!==0&&(r=l,t=Ji(e,l))),t===1)throw n=nr,Nt(e,0),rt(e,r),he(e,q()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!sp(l)&&(t=cl(e,r),t===2&&(i=Ci(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=nr,Nt(e,0),rt(e,r),he(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ct(e,de,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Vo+500-q(),10<t)){if(qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(Ct.bind(null,e,de,We),t);break}Ct(e,de,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*op(r/1960))-r,10<r){e.timeoutHandle=ji(Ct.bind(null,e,de,We),r);break}Ct(e,de,We);break;case 5:Ct(e,de,We);break;default:throw Error(k(329))}}}return he(e,q()),e.callbackNode===n?kc.bind(null,e):null}function Ji(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=de,de=n,t!==null&&eo(t)),e}function eo(e){de===null?de=e:de.push.apply(de,e)}function sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ae(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ho,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function oa(e){if(M&6)throw Error(k(327));ln();var t=qr(e,0);if(!(t&1))return he(e,q()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=Ci(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=nr,Nt(e,0),rt(e,t),he(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,de,We),he(e,q()),null}function $o(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(fn=q()+500,wl&&kt())}}function zt(e){it!==null&&it.tag===0&&!(M&6)&&ln();var t=M;M|=1;var n=Re.transition,r=z;try{if(Re.transition=null,z=1,e)return e()}finally{z=r,Re.transition=n,M=t,!(M&6)&&kt()}}function qo(){ge=Zt.current,F(Zt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Df(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:cn(),F(pe),F(oe),zo();break;case 5:Mo(r);break;case 4:cn();break;case 13:F(U);break;case 19:F(U);break;case 10:Lo(r.type._context);break;case 22:case 23:qo()}n=n.return}if(J=e,K=e=mt(e.current,null),te=ge=t,Y=0,nr=null,Ho=Sl=Mt=0,de=Fn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Pt=null}return e}function _c(e,t){do{var n=K;try{if(No(),Ar.current=ol,il){for(var r=b.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(jt=0,Z=G=b=null,An=!1,Jn=0,Wo.current=null,n===null||n.return===null){Y=1,nr=t,K=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Ks(o);if(v!==null){v.flags&=-257,Qs(v,o,s,i,t),v.mode&1&&qs(i,u,t),t=v,a=u;var w=t.updateQueue;if(w===null){var x=new Set;x.add(a),t.updateQueue=x}else w.add(a);break e}else{if(!(t&1)){qs(i,u,t),Ko();break e}a=Error(k(426))}}else if(B&&s.mode&1){var E=Ks(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qs(E,o,s,i,t),Po(dn(a,s));break e}}i=a=dn(a,s),Y!==4&&(Y=2),Fn===null?Fn=[i]:Fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=ic(i,a,t);Us(i,d);break e;case 1:s=a;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=oc(i,s,t);Us(i,y);break e}}i=i.return}while(i!==null)}Cc(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Sc(){var e=sl.current;return sl.current=ol,e===null?ol:e}function Ko(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Mt&268435455)&&!(Sl&268435455)||rt(J,te)}function cl(e,t){var n=M;M|=2;var r=Sc();(J!==e||te!==t)&&(We=null,Nt(e,t));do try{ap();break}catch(l){_c(e,l)}while(!0);if(No(),M=n,sl.current=r,K!==null)throw Error(k(261));return J=null,te=0,Y}function ap(){for(;K!==null;)Ec(K)}function up(){for(;K!==null&&!jd();)Ec(K)}function Ec(e){var t=Pc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Cc(e):K=t,Wo.current=null}function Cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=np(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=tp(n,t,ge),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Ct(e,t,n){var r=z,l=Re.transition;try{Re.transition=null,z=1,cp(e,t,n,r)}finally{Re.transition=l,z=r}return null}function cp(e,t,n,r){do ln();while(it!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hd(e,i),e===J&&(K=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Tc($r,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var o=z;z=1;var s=M;M|=4,Wo.current=null,lp(e,n),wc(n,e),Lf(Oi),Kr=!!Li,Oi=Li=null,e.current=n,ip(n),Md(),M=s,z=o,Re.transition=i}else e.current=n;if(Tr&&(Tr=!1,it=e,ul=l),i=e.pendingLanes,i===0&&(ft=null),Dd(n.stateNode),he(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xi,Xi=null,e;return ul&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===Zi?Bn++:(Bn=0,Zi=e):Bn=0,kt(),null}function ln(){if(it!==null){var e=iu(ul),t=Re.transition,n=z;try{if(Re.transition=null,z=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ul=0,M&6)throw Error(k(331));var l=M;for(M|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Dn(8,m,i)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var h=m.sibling,v=m.return;if(gc(m),m===u){C=null;break}if(h!==null){h.return=v,C=h;break}C=v}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_l(9,s)}}catch(S){H(s,s.return,S)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(M=l,kt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{z=n,Re.transition=t}}return!1}function sa(e,t,n){t=dn(n,t),t=ic(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(or(e,1,t),he(e,t))}function H(e,t,n){if(e.tag===3)sa(e,e,n);else for(;t!==null;){if(t.tag===3){sa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=oc(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(or(t,1,e),he(t,e));break}}t=t.return}}function dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>q()-Vo?Nt(e,0):Ho|=n),he(e,t)}function Rc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ae();e=Ge(e,t),e!==null&&(or(e,t,n),he(e,n))}function fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rc(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rc(e,n)}var Pc;Pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,ep(e,t,n);fe=!!(e.flags&131072)}else fe=!1,B&&t.flags&1048576&&Ou(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var l=sn(t,oe.current);rn(t,n),l=Do(null,t,r,e,l,n);var i=Fo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Zr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Io(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Ui(t,r,e,n),t=Hi(null,t,r,!0,i,n)):(t.tag=0,B&&i&&Co(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=hp(r),e=Oe(r,e),l){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=Xs(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Ys(null,t,r,Oe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Wi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Xs(e,t,r,l,n);case 3:e:{if(cc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Du(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dn(Error(k(423)),t),t=Zs(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(k(424)),t),t=Zs(e,t,r,n,l);break e}else for(ye=ct(t.stateNode.containerInfo.firstChild),ve=t,B=!0,je=null,n=zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===l){t=Ye(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Fu(t),e===null&&Di(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ii(r,l)?o=null:i!==null&&Ii(r,i)&&(t.flags|=32),uc(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Di(t),null;case 13:return dc(e,t,n);case 4:return jo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Gs(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,A(tl,r._currentValue),r._currentValue=o,i!==null)if(Ae(i.value,o)){if(i.children===l.children&&!pe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=qe(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Fi(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Fi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=Pe(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ys(e,t,r,l,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fr(e,t),t.tag=1,me(r)?(e=!0,Zr(t)):e=!1,rn(t,n),lc(t,r,l),Ui(t,r,l,n),Hi(null,t,r,!0,e,n);case 19:return fc(e,t,n);case 22:return ac(e,t,n)}throw Error(k(156,t.tag))};function Tc(e,t){return tu(e,t)}function mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new mp(e,t,n,r)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return Qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===po)return 11;if(e===mo)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function br(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Qo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Lt(n.children,l,i,t);case fo:o=8,l|=8;break;case ci:return e=Ce(12,n,t,l|2),e.elementType=ci,e.lanes=i,e;case di:return e=Ce(13,n,t,l),e.elementType=di,e.lanes=i,e;case fi:return e=Ce(19,n,t,l),e.elementType=fi,e.lanes=i,e;case Fa:return El(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Aa:o=10;break e;case Da:o=9;break e;case po:o=11;break e;case mo:o=14;break e;case et:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Fa,e.lanes=n,e.stateNode={isHidden:!1},e}function ii(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,l,i,o,s,a){return e=new gp(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(i),e}function yp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nc(e){if(!e)return vt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(me(n))return Nu(e,n,t)}return t}function Lc(e,t,n,r,l,i,o,s,a){return e=Go(n,r,!0,e,l,i,o,s,a),e.context=Nc(null),n=e.current,r=ae(),l=pt(n),i=qe(r,l),i.callback=t??null,dt(n,i,l),e.current.lanes=l,or(e,l,r),he(e,r),e}function Cl(e,t,n,r){var l=t.current,i=ae(),o=pt(l);return n=Nc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,o),e!==null&&(ze(e,l,o,i),zr(e,l,o)),o}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){aa(e,t),(e=e.alternate)&&aa(e,t)}function vp(){return null}var Oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Rl.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Cl(e,t,null,null)};Rl.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){Cl(null,e,null,null)}),t[Qe]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&cu(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ua(){}function wp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=dl(o);i.call(u)}}var o=Lc(t,r,e,0,null,!1,!1,"",ua);return e._reactRootContainer=o,e[Qe]=o.current,Qn(e.nodeType===8?e.parentNode:e),zt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=dl(a);s.call(u)}}var a=Go(e,0,!1,null,null,!1,!1,"",ua);return e._reactRootContainer=a,e[Qe]=a.current,Qn(e.nodeType===8?e.parentNode:e),zt(function(){Cl(t,a,n,r)}),a}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=dl(o);s.call(a)}}Cl(t,o,e,l)}else o=wp(n,t,e,l,r);return dl(o)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(yo(t,n|1),he(t,q()),!(M&6)&&(fn=q()+500,kt()))}break;case 13:zt(function(){var r=Ge(e,1);if(r!==null){var l=ae();ze(r,e,1,l)}}),Yo(e,1)}};vo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ae();ze(t,e,134217728,n)}Yo(e,134217728)}};su=function(e){if(e.tag===13){var t=pt(e),n=Ge(e,t);if(n!==null){var r=ae();ze(n,e,t,r)}Yo(e,t)}};au=function(){return z};uu=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};_i=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=vl(r);if(!l)throw Error(k(90));Ua(r),hi(r,l)}}}break;case"textarea":Wa(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Ga=$o;Ya=zt;var xp={usingClientEntryPoint:!1,Events:[ar,qt,vl,Ka,Qa,$o]},Cn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{ml=Nr.inject(kp),Ue=Nr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(k(200));return yp(e,t,null,n)};xe.createRoot=function(e,t){if(!Zo(e))throw Error(k(299));var n=!1,r="",l=Oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Qn(e.nodeType===8?e.parentNode:e),new Xo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return zt(e)};xe.hydrate=function(e,t,n){if(!Pl(t))throw Error(k(200));return Tl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,l,!1,i,o),e[Qe]=t.current,Qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Rl(t)};xe.render=function(e,t,n){if(!Pl(t))throw Error(k(200));return Tl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(k(40));return e._reactRootContainer?(zt(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};xe.unstable_batchedUpdates=$o;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Tl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function Ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic)}catch(e){console.error(e)}}Ic(),Ia.exports=xe;var _p=Ia.exports,ca=_p;ai.createRoot=ca.createRoot,ai.hydrateRoot=ca.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const da="popstate";function Sp(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:s="",hash:a=""}=Ft(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),to("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:fl(i))}function r(l,i){Nl(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Cp(t,n,r,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ep(){return Math.random().toString(36).substr(2,8)}function fa(e,t){return{usr:e.state,key:e.key,idx:t}}function to(e,t,n,r){return n===void 0&&(n=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||Ep()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Cp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=ot.Pop,a=null,u=m();u==null&&(u=0,o.replaceState(rr({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=ot.Pop;let E=m(),d=E==null?null:E-u;u=E,a&&a({action:s,location:x.location,delta:d})}function h(E,d){s=ot.Push;let c=to(x.location,E,d);n&&n(c,E),u=m()+1;let f=fa(c,u),y=x.createHref(c);try{o.pushState(f,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(y)}i&&a&&a({action:s,location:x.location,delta:1})}function v(E,d){s=ot.Replace;let c=to(x.location,E,d);n&&n(c,E),u=m();let f=fa(c,u),y=x.createHref(c);o.replaceState(f,"",y),i&&a&&a({action:s,location:x.location,delta:0})}function w(E){let d=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof E=="string"?E:fl(E);return c=c.replace(/ $/,"%20"),Q(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let x={get action(){return s},get location(){return e(l,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(da,p),a=E,()=>{l.removeEventListener(da,p),a=null}},createHref(E){return t(l,E)},createURL:w,encodeLocation(E){let d=w(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:v,go(E){return o.go(E)}};return x}var pa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pa||(pa={}));function Rp(e,t,n){return n===void 0&&(n="/"),Pp(e,t,n)}function Pp(e,t,n,r){let l=typeof t=="string"?Ft(t):t,i=Jo(l.pathname||"/",n);if(i==null)return null;let o=jc(e);Tp(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=Up(i);s=Dp(o[a],u)}return s}function jc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(Q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ht([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jc(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:zp(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of Mc(i.path))l(i,o,a)}),t}function Mc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Mc(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Tp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ap(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Np=/^:[\w-]+$/,Lp=3,Op=2,Ip=1,jp=10,Mp=-2,ma=e=>e==="*";function zp(e,t){let n=e.split("/"),r=n.length;return n.some(ma)&&(r+=Mp),t&&(r+=Op),n.filter(l=>!ma(l)).reduce((l,i)=>l+(Np.test(i)?Lp:i===""?Ip:jp),r)}function Ap(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Dp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Fp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},m),h=a.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:ht([i,p.pathname]),pathnameBase:$p(ht([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=ht([i,p.pathnameBase]))}return o}function Fp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:h,isOptional:v}=m;if(h==="*"){let x=s[p]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const w=s[p];return v&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Bp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Nl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wp=e=>bp.test(e);function Hp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Ft(e):e,i;if(n)if(Wp(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Nl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=ha(n.substring(1),"/"):i=ha(n,t)}else i=t;return{pathname:i,search:qp(r),hash:Kp(l)}}function ha(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function si(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zc(e,t){let n=Vp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ac(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Ft(e):(l=rr({},e),Q(!l.pathname||!l.pathname.includes("?"),si("?","pathname","search",l)),Q(!l.pathname||!l.pathname.includes("#"),si("#","pathname","hash",l)),Q(!l.search||!l.search.includes("#"),si("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;l.pathname=h.join("/")}s=p>=0?t[p]:"/"}let a=Hp(l,s),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||m)&&(a.pathname+="/"),a}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),$p=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dc=["post","put","patch","delete"];new Set(Dc);const Gp=["get",...Dc];new Set(Gp);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const es=_.createContext(null),Yp=_.createContext(null),Bt=_.createContext(null),Ll=_.createContext(null),Ze=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Fc=_.createContext(null);function Xp(e,t){let{relative:n}=t===void 0?{}:t;cr()||Q(!1);let{basename:r,navigator:l}=_.useContext(Bt),{hash:i,pathname:o,search:s}=Uc(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:ht([r,o])),l.createHref({pathname:a,search:s,hash:i})}function cr(){return _.useContext(Ll)!=null}function Ol(){return cr()||Q(!1),_.useContext(Ll).location}function Bc(e){_.useContext(Bt).static||_.useLayoutEffect(e)}function Zp(){let{isDataRoute:e}=_.useContext(Ze);return e?mm():Jp()}function Jp(){cr()||Q(!1);let e=_.useContext(es),{basename:t,future:n,navigator:r}=_.useContext(Bt),{matches:l}=_.useContext(Ze),{pathname:i}=Ol(),o=JSON.stringify(zc(l,n.v7_relativeSplatPath)),s=_.useRef(!1);return Bc(()=>{s.current=!0}),_.useCallback(function(u,m){if(m===void 0&&(m={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Ac(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ht([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}const em=_.createContext(null);function tm(e){let t=_.useContext(Ze).outlet;return t&&_.createElement(em.Provider,{value:e},t)}function nm(){let{matches:e}=_.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function Uc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Bt),{matches:l}=_.useContext(Ze),{pathname:i}=Ol(),o=JSON.stringify(zc(l,r.v7_relativeSplatPath));return _.useMemo(()=>Ac(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function rm(e,t){return lm(e,t)}function lm(e,t,n,r){cr()||Q(!1);let{navigator:l}=_.useContext(Bt),{matches:i}=_.useContext(Ze),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ol(),m;if(t){var p;let E=typeof t=="string"?Ft(t):t;a==="/"||(p=E.pathname)!=null&&p.startsWith(a)||Q(!1),m=E}else m=u;let h=m.pathname||"/",v=h;if(a!=="/"){let E=a.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=Rp(e,{pathname:v}),x=um(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:ht([a,l.encodeLocation?l.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:ht([a,l.encodeLocation?l.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return t&&x?_.createElement(Ll.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ot.Pop}},x):x}function im(){let e=pm(),t=Qp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:l},n):null,null)}const om=_.createElement(im,null);class sm extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Ze.Provider,{value:this.props.routeContext},_.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:t,match:n,children:r}=e,l=_.useContext(es);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Ze.Provider,{value:t},r)}function um(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||Q(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:h,errors:v}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,p,h)=>{let v,w=!1,x=null,E=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||om,a&&(u<0&&h===0?(hm("route-fallback"),w=!0,E=null):u===h&&(w=!0,E=p.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,h+1)),c=()=>{let f;return v?f=x:w?f=E:p.route.Component?f=_.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,_.createElement(am,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?_.createElement(sm,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var bc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bc||{}),Wc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wc||{});function cm(e){let t=_.useContext(es);return t||Q(!1),t}function dm(e){let t=_.useContext(Yp);return t||Q(!1),t}function fm(e){let t=_.useContext(Ze);return t||Q(!1),t}function Hc(e){let t=fm(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function pm(){var e;let t=_.useContext(Fc),n=dm(),r=Hc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mm(){let{router:e}=cm(bc.UseNavigateStable),t=Hc(Wc.UseNavigateStable),n=_.useRef(!1);return Bc(()=>{n.current=!0}),_.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,lr({fromRouteId:t},i)))},[e,t])}const ga={};function hm(e,t,n){ga[e]||(ga[e]=!0)}function gm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ym(e){return tm(e.context)}function Ln(e){Q(!1)}function vm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:o=!1,future:s}=e;cr()&&Q(!1);let a=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:a,navigator:i,static:o,future:lr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=Ft(r));let{pathname:m="/",search:p="",hash:h="",state:v=null,key:w="default"}=r,x=_.useMemo(()=>{let E=Jo(m,a);return E==null?null:{location:{pathname:E,search:p,hash:h,state:v,key:w},navigationType:l}},[a,m,p,h,v,w,l]);return x==null?null:_.createElement(Bt.Provider,{value:u},_.createElement(Ll.Provider,{children:n,value:x}))}function wm(e){let{children:t,location:n}=e;return rm(no(t),n)}new Promise(()=>{});function no(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,l)=>{if(!_.isValidElement(r))return;let i=[...t,l];if(r.type===_.Fragment){n.push.apply(n,no(r.props.children,i));return}r.type!==Ln&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=no(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function xm(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function km(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _m(e,t){return e.button===0&&(!t||t==="_self")&&!km(e)}const Sm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Em="6";try{window.__reactRouterVersion=Em}catch{}const Cm="startTransition",ya=cd[Cm];function Rm(e){let{basename:t,children:n,future:r,window:l}=e,i=_.useRef();i.current==null&&(i.current=Sp({window:l,v5Compat:!0}));let o=i.current,[s,a]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=_.useCallback(p=>{u&&ya?ya(()=>a(p)):a(p)},[a,u]);return _.useLayoutEffect(()=>o.listen(m),[o,m]),_.useEffect(()=>gm(r),[r]),_.createElement(vm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=_.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:u,preventScrollReset:m,viewTransition:p}=t,h=xm(t,Sm),{basename:v}=_.useContext(Bt),w,x=!1;if(typeof u=="string"&&Tm.test(u)&&(w=u,Pm))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=Jo(y.pathname,v);y.origin===f.origin&&S!=null?u=S+y.search+y.hash:x=!0}catch{}let E=Xp(u,{relative:l}),d=Nm(u,{replace:o,state:s,target:a,preventScrollReset:m,relative:l,viewTransition:p});function c(f){r&&r(f),f.defaultPrevented||d(f)}return _.createElement("a",ro({},h,{href:w||E,onClick:x||i?r:c,ref:n,target:a}))});var va;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(va||(va={}));var wa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wa||(wa={}));function Nm(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,a=Zp(),u=Ol(),m=Uc(e,{relative:o});return _.useCallback(p=>{if(_m(p,n)){p.preventDefault();let h=r!==void 0?r:fl(u)===fl(m);a(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[u,a,m,r,l,n,e,i,o,s])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:a,...u},m)=>_.createElement("svg",{ref:m,...Lm,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Om(e)}`,s].join(" "),...u},[...t.map(([p,h])=>_.createElement(p,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=_e("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=_e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=_e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=_e("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=_e("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=_e("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=_e("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=_e("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=_e("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=_e("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=_e("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=_e("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=_e("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),Vm=()=>g.jsx("nav",{className:"bg-white border-b border-slate-200 sticky top-0 z-50",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex justify-between h-16",children:[g.jsx("div",{className:"flex items-center",children:g.jsxs(gt,{to:"/",className:"flex items-center space-x-2",children:[g.jsx(Hm,{className:"h-8 w-8 text-indigo-600"}),g.jsx("span",{className:"text-xl font-bold text-slate-900",children:"TechNotes"})]})}),g.jsxs("div",{className:"flex items-center space-x-8",children:[g.jsx(gt,{to:"/",className:"text-slate-600 hover:text-indigo-600 font-medium",children:"Home"}),g.jsx(gt,{to:"/solutions",className:"text-slate-600 hover:text-indigo-600 font-medium",children:"Knowledge Base"}),g.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-slate-600 hover:text-indigo-600",children:g.jsx(Um,{className:"h-6 w-6"})})]})]})})}),$m=()=>g.jsx("footer",{className:"bg-slate-900 text-white py-12",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[g.jsxs("div",{className:"mb-4 md:mb-0",children:[g.jsx("h3",{className:"text-xl font-bold",children:"EngSolutions"}),g.jsx("p",{className:"text-slate-400 mt-2",children:"Sharing engineering wisdom, one solution at a time."})]}),g.jsx("div",{className:"flex space-x-6",children:g.jsxs("p",{className:"text-slate-400",children:["© ",new Date().getFullYear()," Engineering Solutions. All rights reserved."]})})]})})}),qm=()=>g.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[g.jsx(Vm,{}),g.jsx("main",{className:"flex-grow",children:g.jsx(ym,{})}),g.jsx($m,{})]}),Km=()=>g.jsxs("div",{className:"bg-white",children:[g.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:g.jsx("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl",children:"Tech Notes & Engineering Deep Dives"}),g.jsx("p",{className:"mt-6 text-lg leading-8 text-slate-600",children:"A curated collection of engineering notes, system design deep dives, experiments, and real-world learnings from building large-scale systems."}),g.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[g.jsx(gt,{to:"/solutions",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Browse Knowledge Base"}),g.jsxs("a",{href:"https://github.com",className:"text-sm font-semibold leading-6 text-slate-900",children:["View on GitHub ",g.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})})}),g.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8 pb-24",children:[g.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[g.jsx("h2",{className:"text-base font-semibold leading-7 text-indigo-600",children:"Explore Topics"}),g.jsx("p",{className:"mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",children:"From Internals to Architecture"})]}),g.jsx("div",{className:"mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none",children:g.jsxs("dl",{className:"grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(bm,{className:"h-5 w-5 flex-none text-indigo-600"}),"System Design & SRE"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Distributed systems, scalability patterns, SLIs/SLOs, and resilience engineering."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(zm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Cloud & Platform"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Kubernetes internals, networking, GitOps, and observability."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Dm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Databases & Storage"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Internals of persistence engines, consensus algorithms (Raft), and vector search."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Am,{className:"h-5 w-5 flex-none text-indigo-600"}),"Programming & Internals"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Go language deep dives, concurrency models, memory management, and OS fundamentals."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Bm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Experiments"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Proofs of concept, design explorations, and performance benchmarks."})})]}),g.jsxs("div",{className:"flex flex-col",children:[g.jsxs("dt",{className:"flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900",children:[g.jsx(Mm,{className:"h-5 w-5 flex-none text-indigo-600"}),"Deep Dives"]}),g.jsx("dd",{className:"mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600",children:g.jsx("p",{className:"flex-auto",children:"Long-form articles dissecting complex technologies and architectural decisions."})})]})]})})]})]}),$c=[{id:"building-llm-os-rust",title:"Building an AI-First Operating System in Rust from Scratch",description:`A deep dive into building Andrej Karpathy's "LLM OS" concept on bare metal in Rust — mapping context windows to RAM, vector stores to filesystems, and tool calls to syscalls.`,category:"deep-dive",topic:"Programming",tags:["Rust","AI","Operating Systems","LLM","Bare Metal","Andrej Karpathy"],date:"2026-01-22",content:`
<h2>Building an AI-First Operating System in Rust from Scratch</h2>

<p>What happens when you invert the entire operating system? Instead of a kernel serving human users through a GUI, the kernel serves a single entity — an AI Agent — that <em>is</em> the userland. This is the premise behind Andrej Karpathy's "LLM OS" concept, and in this post, I'll lay out a concrete roadmap for building it from scratch in Rust on bare metal.</p>

<p>This isn't a toy project. It's a design exercise that forces you to rethink every layer of the stack: memory management becomes context window management, the filesystem becomes a vector store, and system calls become tool invocations.</p>

<h3>Why Rust?</h3>

<p>Before diving in, the language choice deserves a brief justification:</p>

<ul>
  <li><strong>No garbage collector.</strong> You cannot afford GC pauses when you're managing interrupt handlers and DMA buffers.</li>
  <li><strong>Zero-cost abstractions.</strong> Traits, generics, and ownership give you high-level ergonomics without runtime overhead.</li>
  <li><strong><code>#![no_std]</code> ecosystem.</strong> Rust has first-class support for freestanding binaries. Crates like <code>bootloader</code>, <code>x86_64</code>, <code>volatile</code>, and <code>linked_list_allocator</code> mean you aren't reinventing every wheel.</li>
  <li><strong>Memory safety at compile time.</strong> In kernel development, a use-after-free isn't a segfault — it's silent memory corruption that surfaces hours later. Rust eliminates this class of bugs entirely.</li>
</ul>

<h3>The Karpathy LLM OS Architecture</h3>

<p>Karpathy's insight is deceptively simple: map every traditional OS concept to its LLM equivalent.</p>

<table>
  <thead><tr><th>Traditional OS</th><th>LLM OS Equivalent</th></tr></thead>
  <tbody>
    <tr><td>CPU</td><td>The Large Language Model — processes tokens instead of machine instructions</td></tr>
    <tr><td>RAM</td><td>Context Window — fast, volatile working memory for the current reasoning chain</td></tr>
    <tr><td>Disk / Filesystem</td><td>RAG + Embeddings — long-term memory stored as vectors, retrieved by semantic similarity</td></tr>
    <tr><td>Processes</td><td>Agents / Tool-use threads — concurrent reasoning chains</td></tr>
    <tr><td>System Calls</td><td>Tool Invocations — the agent "calls" a calculator, a Python interpreter, or a web search</td></tr>
    <tr><td>Peripherals</td><td>Multimodal I/O — microphone (speech-to-text), camera (vision embeddings), display (rendered output)</td></tr>
    <tr><td>Scheduler</td><td>Orchestrator — decides which agent gets the next inference cycle</td></tr>
  </tbody>
</table>

<p>The key shift: in a traditional OS, the human is the "outer loop" and the CPU is the "inner loop." In the LLM OS, the <strong>agent is the outer loop</strong> and the hardware is just infrastructure.</p>

<h3>Phase 1: The Bare-Metal Rust Kernel</h3>

<p>Since we're building from scratch, we can't use Rust's standard library (<code>std</code>) — it depends on an existing OS for threads, file I/O, and memory allocation. Everything starts with a <code>#![no_std]</code> freestanding binary.</p>

<p>I recommend following the bootloader methodology from Philipp Oppermann's excellent <a href="https://os.phil-opp.com/">Writing an OS in Rust</a> series, adapted for our AI-first architecture.</p>

<h4>1.1 The Entry Point</h4>

<pre><code class="language-rust">#![no_std]
#![no_main]

use core::panic::PanicInfo;
use bootloader::{entry_point, BootInfo};

entry_point!(kernel_main);

fn kernel_main(boot_info: &'static BootInfo) -> ! {
    // Phase 1: Hardware foundation
    gdt::init();                    // Global Descriptor Table
    interrupts::init_idt();         // Interrupt Descriptor Table
    unsafe { interrupts::PICS.lock().initialize() };
    x86_64::instructions::interrupts::enable();

    // Phase 2: Memory subsystem
    let phys_mem_offset = VirtAddr::new(
        boot_info.physical_memory_offset.into_option().unwrap()
    );
    let mut mapper = unsafe { memory::init(phys_mem_offset) };
    let mut frame_allocator = unsafe {
        memory::BootInfoFrameAllocator::init(&boot_info.memory_map)
    };
    allocator::init_heap(&mut mapper, &mut frame_allocator)
        .expect("heap initialization failed");

    // Phase 3: Boot the Agent
    agent::init();

    // Halt loop — interrupts will wake us
    loop {
        x86_64::instructions::hlt();
    }
}

#[panic_handler]
fn panic(info: &PanicInfo) -> ! {
    serial_println!("KERNEL PANIC: {}", info);
    loop { x86_64::instructions::hlt(); }
}
</code></pre>

<p><strong>What's happening here:</strong> We initialize the CPU's descriptor tables, set up interrupt handling (so the keyboard, timer, and network card can talk to us), bring up virtual memory with paging, carve out a heap so we can use <code>alloc::Vec</code> and <code>alloc::String</code>, and finally hand control to the agent.</p>

<h4>1.2 Memory Management</h4>

<p>The heap allocator is critical. We need dynamic allocation for the agent's context window, token buffers, and embedding vectors:</p>

<pre><code class="language-rust">use linked_list_allocator::LockedHeap;

#[global_allocator]
static ALLOCATOR: LockedHeap = LockedHeap::empty();

pub const HEAP_START: usize = 0x_4444_4444_0000;
pub const HEAP_SIZE: usize = 1024 * 1024; // 1 MiB initial heap

pub fn init_heap(
    mapper: &mut impl Mapper&lt;Size4KiB&gt;,
    frame_allocator: &mut impl FrameAllocator&lt;Size4KiB&gt;,
) -> Result&lt;(), MapToError&lt;Size4KiB&gt;&gt; {
    let page_range = {
        let heap_start = VirtAddr::new(HEAP_START as u64);
        let heap_end = heap_start + HEAP_SIZE - 1u64;
        Page::range_inclusive(
            Page::containing_address(heap_start),
            Page::containing_address(heap_end),
        )
    };

    for page in page_range {
        let frame = frame_allocator
            .allocate_frame()
            .ok_or(MapToError::FrameAllocationFailed)?;
        let flags = PageTableFlags::PRESENT | PageTableFlags::WRITABLE;
        unsafe { mapper.map_to(page, frame, flags, frame_allocator)?.flush(); }
    }

    unsafe { ALLOCATOR.lock().init(HEAP_START as *mut u8, HEAP_SIZE); }
    Ok(())
}
</code></pre>

<h4>1.3 Driver Layer</h4>

<p>At minimum, we need three drivers to make the agent functional:</p>

<table>
  <thead><tr><th>Driver</th><th>Purpose</th><th>Why the Agent Needs It</th></tr></thead>
  <tbody>
    <tr><td><strong>Serial/UART</strong></td><td>Text I/O over COM port</td><td>Debugging + basic agent output before display driver is ready</td></tr>
    <tr><td><strong>Network (virtio-net)</strong></td><td>TCP/IP stack</td><td>Agent must reach an LLM inference API (or run inference locally)</td></tr>
    <tr><td><strong>Disk (virtio-blk / ATA)</strong></td><td>Persistent storage</td><td>RAG vector store, conversation logs, embeddings</td></tr>
  </tbody>
</table>

<p>The network driver is the most critical — without it, the agent can't think.</p>

<h3>Phase 2: The Agent Runtime</h3>

<p>This is where traditional OS development diverges. Instead of building a shell for a human user, we build a runtime for an AI agent.</p>

<h4>2.1 The Agent Core</h4>

<pre><code class="language-rust">pub struct Agent {
    context_window: ContextWindow,
    tool_registry: ToolRegistry,
    memory_store: VectorStore,
    inference_client: InferenceClient,
    orchestrator: Orchestrator,
}

impl Agent {
    pub fn init() -> Self {
        let mut agent = Agent {
            context_window: ContextWindow::new(MAX_TOKENS),
            tool_registry: ToolRegistry::new(),
            memory_store: VectorStore::new(),
            inference_client: InferenceClient::connect("inference-server:8080"),
            orchestrator: Orchestrator::new(),
        };

        // Register built-in tools
        agent.tool_registry.register("calculator", tools::calculator);
        agent.tool_registry.register("web_search", tools::web_search);
        agent.tool_registry.register("read_file", tools::read_file);
        agent.tool_registry.register("write_file", tools::write_file);
        agent.tool_registry.register("run_code", tools::run_code);
        agent.tool_registry.register("memory_store", tools::memory_store);
        agent.tool_registry.register("memory_recall", tools::memory_recall);

        agent.run_loop();
        agent
    }

    fn run_loop(&mut self) -> ! {
        loop {
            // 1. Gather input (interrupts, network messages, timers)
            let input = self.orchestrator.next_input();

            // 2. Build prompt with context
            self.context_window.push_message(Role::User, &input);
            let prompt = self.context_window.serialize();

            // 3. Run inference
            let response = self.inference_client.complete(&prompt);

            // 4. Parse and execute tool calls
            if let Some(tool_calls) = response.tool_calls() {
                for call in tool_calls {
                    let result = self.tool_registry.execute(&call.name, &call.args);
                    self.context_window.push_message(Role::Tool, &result);
                }
                continue; // Re-run inference with tool results
            }

            // 5. Output response
            self.context_window.push_message(Role::Assistant, &response.text);
            self.orchestrator.emit_output(&response.text);
        }
    }
}
</code></pre>

<h4>2.2 Context Window as RAM</h4>

<p>The context window is the agent's working memory. Unlike traditional RAM that stores arbitrary bytes, it stores a structured sequence of messages (tokens). Managing it well is the difference between a useful agent and one that forgets what it was doing:</p>

<pre><code class="language-rust">pub struct ContextWindow {
    messages: VecDeque&lt;Message&gt;,
    max_tokens: usize,
    current_tokens: usize,
}

impl ContextWindow {
    pub fn push_message(&mut self, role: Role, content: &str) {
        let token_count = tokenize(content).len();

        // Eviction policy: drop oldest non-system messages when full
        while self.current_tokens + token_count > self.max_tokens {
            if let Some(evicted) = self.evict_oldest() {
                self.summarize_and_store(&evicted);
            } else {
                break; // Only system prompt remains
            }
        }

        self.messages.push_back(Message { role, content: content.into() });
        self.current_tokens += token_count;
    }

    fn evict_oldest(&mut self) -> Option&lt;Message&gt; {
        if self.messages.len() <= 1 { return None; }
        let msg = self.messages.remove(1)?;
        self.current_tokens -= tokenize(&msg.content).len();
        Some(msg)
    }

    fn summarize_and_store(&self, message: &Message) {
        // Compress evicted context into long-term memory (RAG store)
        // This is the "swap to disk" equivalent
    }
}
</code></pre>

<p><strong>The analogy is precise:</strong> when RAM is full, the OS pages data to disk. When the context window is full, the agent summarizes old messages and stores them in the vector database. Retrieval-Augmented Generation is literally virtual memory for LLMs.</p>

<h4>2.3 Tool Invocations as System Calls</h4>

<p>In a traditional OS, user programs make system calls (<code>read()</code>, <code>write()</code>, <code>fork()</code>) to request kernel services. In the LLM OS, the agent makes <strong>tool calls</strong> to interact with the outside world:</p>

<pre><code class="language-rust">pub struct ToolRegistry {
    tools: BTreeMap&lt;String, Box&lt;dyn Tool&gt;&gt;,
}

pub trait Tool: Send + Sync {
    fn name(&self) -> &str;
    fn description(&self) -> &str;
    fn execute(&self, args: &Value) -> Result&lt;String, ToolError&gt;;
}

// Example: Calculator tool
pub struct Calculator;

impl Tool for Calculator {
    fn name(&self) -> &str { "calculator" }
    fn description(&self) -> &str {
        "Evaluate a mathematical expression. Input: {\\"expr\\": \\"2 + 2 * 3\\"}"
    }
    fn execute(&self, args: &Value) -> Result&lt;String, ToolError&gt; {
        let expr = args["expr"].as_str().ok_or(ToolError::InvalidArgs)?;
        let result = eval_math(expr)?;
        Ok(format!("{}", result))
    }
}
</code></pre>

<p>The tool registry is functionally equivalent to a syscall table. The agent's output is parsed for structured tool-call tokens, the kernel dispatches to the appropriate handler, and the result is fed back into the next inference cycle.</p>

<h3>Phase 3: Long-Term Memory (The Vector Filesystem)</h3>

<p>A traditional filesystem organizes data by path (<code>/home/user/notes.txt</code>). The LLM OS organizes data by <strong>semantic similarity</strong> — you don't look up a file by name, you describe what you're looking for and the system retrieves the most relevant chunks.</p>

<h4>3.1 The Vector Store</h4>

<pre><code class="language-rust">pub struct VectorStore {
    entries: Vec&lt;MemoryEntry&gt;,
}

pub struct MemoryEntry {
    pub id: u64,
    pub content: String,
    pub embedding: Vec&lt;f32&gt;,    // 1536-dim for text-embedding-ada-002
    pub metadata: Metadata,
    pub timestamp: u64,
}

impl VectorStore {
    pub fn store(&mut self, content: &str, embedding: Vec&lt;f32&gt;) {
        let entry = MemoryEntry {
            id: self.next_id(),
            content: content.into(),
            embedding,
            metadata: Metadata::default(),
            timestamp: crate::time::now(),
        };
        self.entries.push(entry);
    }

    pub fn recall(&self, query_embedding: &[f32], top_k: usize) -> Vec&lt;&MemoryEntry&gt; {
        let mut scored: Vec&lt;_&gt; = self.entries.iter()
            .map(|entry| {
                let similarity = cosine_similarity(&entry.embedding, query_embedding);
                (entry, similarity)
            })
            .collect();

        scored.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        scored.into_iter().take(top_k).map(|(entry, _)| entry).collect()
    }
}

fn cosine_similarity(a: &[f32], b: &[f32]) -> f32 {
    let dot: f32 = a.iter().zip(b).map(|(x, y)| x * y).sum();
    let mag_a: f32 = a.iter().map(|x| x * x).sum::&lt;f32&gt;().sqrt();
    let mag_b: f32 = b.iter().map(|x| x * x).sum::&lt;f32&gt;().sqrt();
    if mag_a == 0.0 || mag_b == 0.0 { return 0.0; }
    dot / (mag_a * mag_b)
}
</code></pre>

<h4>3.2 Memory Hierarchy</h4>

<p>Just like a CPU has L1/L2/L3 caches, RAM, and disk, the LLM OS has a memory hierarchy:</p>

<pre><code>┌───────────────────────────────┐
│  System Prompt (always in     │  ← "L1 Cache" — never evicted
│  context, ~500 tokens)        │
├───────────────────────────────┤
│  Recent Messages              │  ← "RAM" — the context window
│  (up to max_tokens)           │
├───────────────────────────────┤
│  Summarized History           │  ← "L2 Cache" — compressed summaries
│  (retrieved on demand)        │    of evicted conversations
├───────────────────────────────┤
│  Vector Store (RAG)           │  ← "Disk" — all past knowledge,
│  (semantic retrieval)         │    retrieved by similarity search
├───────────────────────────────┤
│  External APIs                │  ← "Network" — web search, databases,
│  (tool calls)                 │    live data from the outside world
└───────────────────────────────┘
</code></pre>

<p>This hierarchy enables the agent to have effectively <strong>infinite memory</strong> while operating within a fixed context window. The cost model mirrors hardware: "closer" memory is faster (no extra inference) but limited; "farther" memory has higher latency (requires a retrieval step) but is unbounded.</p>

<h3>Phase 4: The Orchestrator (Scheduler)</h3>

<p>A traditional OS scheduler multiplexes CPU time across processes. The LLM OS orchestrator multiplexes <strong>inference cycles</strong> across tasks:</p>

<pre><code class="language-rust">pub struct Orchestrator {
    task_queue: VecDeque&lt;Task&gt;,
    active_task: Option&lt;Task&gt;,
    interrupt_handlers: BTreeMap&lt;InterruptType, fn(&str) -> Task&gt;,
}

pub struct Task {
    pub id: u64,
    pub priority: Priority,
    pub description: String,
    pub status: TaskStatus,
}

impl Orchestrator {
    pub fn next_input(&mut self) -> String {
        // Check for hardware interrupts (keyboard, network, timer)
        if let Some(interrupt) = self.poll_interrupts() {
            return self.handle_interrupt(interrupt);
        }

        // Check task queue
        if let Some(task) = self.task_queue.pop_front() {
            self.active_task = Some(task.clone());
            return task.description;
        }

        // Idle — agent can do background work
        "No pending tasks. Perform memory consolidation or await input.".into()
    }
}
</code></pre>

<p><strong>Interesting design question:</strong> Should the orchestrator support preemption? In a traditional OS, the timer interrupt preempts a running process. In the LLM OS, you could interrupt a long reasoning chain if a higher-priority task arrives — but you'd need to save and restore the context window state, which is expensive.</p>

<h3>Phase 5: Multimodal I/O (Peripherals)</h3>

<p>The final layer connects the agent to the physical world:</p>

<table>
  <thead><tr><th>Peripheral</th><th>Traditional OS</th><th>LLM OS</th></tr></thead>
  <tbody>
    <tr><td>Keyboard</td><td>Key codes → stdin</td><td>Key codes → tokenizer → agent input</td></tr>
    <tr><td>Display</td><td>Framebuffer → pixels</td><td>Agent output → renderer → framebuffer</td></tr>
    <tr><td>Microphone</td><td>PCM audio → /dev/audio</td><td>PCM audio → Whisper → tokens → agent input</td></tr>
    <tr><td>Camera</td><td>Raw frames → /dev/video</td><td>Raw frames → CLIP/Vision → embeddings → agent input</td></tr>
    <tr><td>Network</td><td>Packets → TCP/IP stack</td><td>Packets → tool results / inference API</td></tr>
  </tbody>
</table>

<p>The display driver is particularly interesting. The agent doesn't "print to stdout" — it emits structured output (markdown, HTML, SVG) that a rendering engine converts to pixels on the framebuffer. The agent is effectively its own window manager.</p>

<h3>The Complete Boot Sequence</h3>

<pre><code> 1. BIOS/UEFI → Bootloader (GRUB/bootloader crate)
 2. Bootloader → kernel_main()
 3. GDT, IDT, PIC initialization
 4. Page table setup, heap allocation
 5. Serial driver init (early debug output)
 6. Network driver init (virtio-net or e1000)
 7. Disk driver init (virtio-blk or ATA)
 8. Vector store loaded from disk
 9. Agent::init()
    ├── ContextWindow created (system prompt loaded)
    ├── ToolRegistry populated
    ├── InferenceClient connected
    └── Agent enters run_loop()
10. Agent is now "alive" — waiting for input
</code></pre>

<p>From step 10 onward, the agent is in control. It processes inputs, reasons about them, calls tools, and emits outputs. The kernel is invisible — it just keeps the hardware humming.</p>

<h3>Open Questions and Future Work</h3>

<ol>
  <li><strong>Where does inference run?</strong> On-device (requires GPU driver + CUDA/ROCm in kernel space) or off-device (requires only a network stack, but adds latency)?</li>
  <li><strong>Multi-agent scheduling.</strong> Can we run multiple agents concurrently, each with their own context window, and have the orchestrator schedule inference cycles across them?</li>
  <li><strong>Security model.</strong> In a traditional OS, rings and page tables isolate processes. How do you isolate agents from each other? Tool-call permissions? Context window sandboxing?</li>
  <li><strong>Self-modification.</strong> The agent could theoretically modify its own system prompt, tool registry, or even kernel code. Should this be allowed? What guardrails are needed?</li>
  <li><strong>Persistence and crash recovery.</strong> If the system crashes mid-inference, how do you restore the agent's state? The context window needs checkpointing, similar to process core dumps.</li>
</ol>

<h3>Getting Started</h3>

<pre><code class="language-bash"># Install Rust nightly (required for #![no_std] kernel dev)
rustup install nightly
rustup component add rust-src --toolchain nightly
rustup component add llvm-tools-preview --toolchain nightly

# Install bootimage tool
cargo install bootimage

# Create the project
cargo new llm-os --edition 2021
cd llm-os

# Run with QEMU
cargo bootimage
qemu-system-x86_64 -drive format=raw,file=target/x86-64/debug/bootimage-llm-os.bin
</code></pre>

<p>Start with Oppermann's tutorials for the kernel foundation, then diverge at the point where you'd normally build a shell — build the agent runtime instead.</p>

<h3>Conclusion</h3>

<p>The LLM OS isn't science fiction. Every component I've described maps to well-understood systems programming concepts. The context window is RAM with an eviction policy. The vector store is a content-addressed filesystem. Tool calls are system calls. The orchestrator is a scheduler.</p>

<p>What makes it exciting is the <em>inversion</em>: the AI isn't a program running on the OS — the AI <strong>is</strong> the OS. Every design decision flows from that single architectural choice.</p>

<p>The full source code will be published on <a href="https://github.com/ranjan42">GitHub</a> as the project matures. If you're interested in OS development, AI systems, or Rust, I'd love to hear from you.</p>

<p><em>Further reading:</em></p>
<ul>
  <li><a href="https://os.phil-opp.com/">Writing an OS in Rust — Philipp Oppermann</a></li>
  <li><a href="https://docs.rust-embedded.org/book/">The Rust <code>#![no_std]</code> Book</a></li>
  <li><a href="https://github.com/dmarro89/go-dav-os">go-dav-os — A freestanding OS kernel in Go</a> (a project I contribute to)</li>
</ul>
  `},{id:"sre-error-budgets",title:"Implementing Error Budgets: A Practical Guide to SRE",description:"A comprehensive guide to defining, calculating, and using error budgets to balance reliability and innovation velocity.",category:"deep-dive",topic:"SRE",tags:["SRE","Reliability","Error Budgets","SLO","DevOps","Production"],date:"2026-01-04",content:`
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
  `}],Qm=()=>{const[e,t]=_.useState("all"),[n,r]=_.useState("all"),l=$c.filter(s=>{const a=e==="all"||s.category===e,u=n==="all"||s.topic===n;return a&&u}),i=[{value:"all",label:"All Content"},{value:"note",label:"Notes"},{value:"deep-dive",label:"Deep Dives"},{value:"project",label:"Projects"}],o=[{value:"all",label:"All Topics"},{value:"SRE",label:"SRE"},{value:"Kubernetes",label:"Kubernetes"},{value:"Databases",label:"Databases"},{value:"System Design",label:"System Design"},{value:"Programming",label:"Programming"}];return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs("div",{className:"mb-12",children:[g.jsx("h1",{className:"text-3xl font-bold text-slate-900",children:"Knowledge Base"}),g.jsx("p",{className:"mt-4 text-xl text-slate-600",children:"Explore engineering notes, deep dives, and projects."})]}),g.jsxs("div",{className:"mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-slate-50 p-4 rounded-lg border border-slate-200",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-700 font-medium",children:[g.jsx(Fm,{className:"h-4 w-4"}),g.jsx("span",{children:"Filters:"})]}),g.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.jsx("select",{value:e,onChange:s=>t(s.target.value),className:"block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:i.map(s=>g.jsx("option",{value:s.value,children:s.label},s.value))}),g.jsx("select",{value:n,onChange:s=>r(s.target.value),className:"block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",children:o.map(s=>g.jsx("option",{value:s.value,children:s.label},s.value))})]})]}),g.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:l.map(s=>g.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col",children:[g.jsxs("div",{className:"p-6 flex-grow",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                  ${s.category==="deep-dive"?"bg-purple-100 text-purple-800":s.category==="project"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:s.category.replace("-"," ")}),g.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[g.jsx(Vc,{className:"h-4 w-4"}),g.jsx("time",{children:s.date})]})]}),g.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-2",children:g.jsx(gt,{to:`/solutions/${s.id}`,className:"hover:text-indigo-600",children:s.title})}),g.jsx("p",{className:"text-slate-600 mb-4 line-clamp-3",children:s.description}),g.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:g.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600",children:s.topic})})]}),g.jsx("div",{className:"p-6 pt-0 mt-auto",children:g.jsxs(gt,{to:`/solutions/${s.id}`,className:"inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500",children:["Read More ",g.jsx(jm,{className:"ml-2 h-4 w-4"})]})})]},s.id))}),l.length===0&&g.jsx("div",{className:"text-center py-12 text-slate-500",children:"No posts found matching your filters."})]})},Gm=()=>{const{id:e}=nm(),t=$c.find(n=>n.id===e);return t?g.jsxs("article",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs(gt,{to:"/solutions",className:"inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors",children:[g.jsx(Im,{className:"h-4 w-4 mr-2"}),"Back to Knowledge Base"]}),g.jsxs("header",{className:"mb-12",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[g.jsx("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize
            ${t.category==="deep-dive"?"bg-purple-100 text-purple-800":t.category==="project"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:t.category.replace("-"," ")}),g.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700",children:t.topic})]}),g.jsx("h1",{className:"text-4xl font-bold text-slate-900 mb-4",children:t.title}),g.jsxs("div",{className:"flex items-center gap-2 text-slate-500",children:[g.jsx(Vc,{className:"h-5 w-5"}),g.jsx("time",{className:"text-lg",children:t.date})]})]}),g.jsx("div",{className:"prose prose-lg prose-indigo max-w-none",dangerouslySetInnerHTML:{__html:t.content}}),g.jsxs("div",{className:"mt-12 pt-8 border-t border-slate-200",children:[g.jsx("h3",{className:"text-sm font-medium text-slate-500 mb-4",children:"Tags"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(n=>g.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600",children:[g.jsx(Wm,{className:"w-3 h-3 mr-1"}),n]},n))})]})]}):g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center",children:[g.jsx("h1",{className:"text-3xl font-bold text-slate-900 mb-4",children:"Post Not Found"}),g.jsx("p",{className:"text-slate-600 mb-8",children:"The engineering note or deep dive you are looking for does not exist."}),g.jsx(gt,{to:"/solutions",className:"text-indigo-600 hover:text-indigo-500 font-medium",children:"← Back to Knowledge Base"})]})};function Ym(){return g.jsx(wm,{children:g.jsxs(Ln,{path:"/",element:g.jsx(qm,{}),children:[g.jsx(Ln,{index:!0,element:g.jsx(Km,{})}),g.jsx(Ln,{path:"solutions",element:g.jsx(Qm,{})}),g.jsx(Ln,{path:"solutions/:id",element:g.jsx(Gm,{})})]})})}ai.createRoot(document.getElementById("root")).render(g.jsx(La.StrictMode,{children:g.jsx(Rm,{children:g.jsx(Ym,{})})}));
