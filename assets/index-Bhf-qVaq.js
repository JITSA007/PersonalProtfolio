(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function k_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zp={exports:{}},fl={},Bp={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),z_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),G_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),X_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),Y_=Symbol.for("react.lazy"),Qd=Symbol.iterator;function $_(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Vp={};function Es(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wp(){}Wp.prototype=Es.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}var qu=Xu.prototype=new Wp;qu.constructor=Xu;Gp(qu,Es.prototype);qu.isPureReactComponent=!0;var Jd=Array.isArray,jp=Object.prototype.hasOwnProperty,Yu={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jp.call(e,i)&&!Xp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:t,key:s,ref:o,props:r,_owner:Yu.current}}function K_(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $u(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function Z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ef=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z_(""+t.key):e.toString(36)}function Ea(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ol(o,0):i,Jd(r)?(n="",t!=null&&(n=t.replace(ef,"$&/")+"/"),Ea(r,e,n,"",function(c){return c})):r!=null&&($u(r)&&(r=K_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ef,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ol(s,a);o+=Ea(s,e,n,l,r)}else if(l=$_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ol(s,a++),o+=Ea(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(t,e,n){if(t==null)return t;var i=[],r=0;return Ea(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ta={transition:null},J_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Yu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!$u(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Es;Ge.Fragment=B_;Ge.Profiler=G_;Ge.PureComponent=Xu;Ge.StrictMode=H_;Ge.Suspense=X_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;Ge.act=Yp;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jp.call(e,l)&&!Xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Eo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V_,_context:t},t.Consumer=t};Ge.createElement=qp;Ge.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:j_,render:t}};Ge.isValidElement=$u;Ge.lazy=function(t){return{$$typeof:Y_,_payload:{_status:-1,_result:t},_init:Q_}};Ge.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};Ge.unstable_act=Yp;Ge.useCallback=function(t,e){return qt.current.useCallback(t,e)};Ge.useContext=function(t){return qt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return qt.current.useEffect(t,e)};Ge.useId=function(){return qt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return qt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Ge.useRef=function(t){return qt.current.useRef(t)};Ge.useState=function(t){return qt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return qt.current.useTransition()};Ge.version="18.3.1";Bp.exports=Ge;var un=Bp.exports;const e0=k_(un);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=un,n0=Symbol.for("react.element"),i0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,s0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o0={key:!0,ref:!0,__self:!0,__source:!0};function $p(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)r0.call(e,i)&&!o0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n0,type:t,key:s,ref:o,props:r,_owner:s0.current}}fl.Fragment=i0;fl.jsx=$p;fl.jsxs=$p;zp.exports=fl;var T=zp.exports,Gc={},Kp={exports:{}},pn={},Zp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,I){var H=N.length;N.push(I);e:for(;0<H;){var $=H-1>>>1,Z=N[$];if(0<r(Z,I))N[$]=I,N[H]=Z,H=$;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],H=N.pop();if(H!==I){N[0]=H;e:for(var $=0,Z=N.length,W=Z>>>1;$<W;){var K=2*($+1)-1,le=N[K],fe=K+1,me=N[fe];if(0>r(le,H))fe<Z&&0>r(me,le)?(N[$]=me,N[fe]=H,$=fe):(N[$]=le,N[K]=H,$=K);else if(fe<Z&&0>r(me,H))N[$]=me,N[fe]=H,$=fe;else break e}}return I}function r(N,I){var H=N.sortIndex-I.sortIndex;return H!==0?H:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=N)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function S(N){if(v=!1,g(N),!x)if(n(l)!==null)x=!0,X(b);else{var I=n(c);I!==null&&Y(S,I.startTime-N)}}function b(N,I){x=!1,v&&(v=!1,u(U),U=-1),m=!0;var H=f;try{for(g(I),h=n(l);h!==null&&(!(h.expirationTime>I)||N&&!j());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var Z=$(h.expirationTime<=I);I=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),g(I)}else i(l);h=n(l)}if(h!==null)var W=!0;else{var K=n(c);K!==null&&Y(S,K.startTime-I),W=!1}return W}finally{h=null,f=H,m=!1}}var C=!1,R=null,U=-1,M=5,w=-1;function j(){return!(t.unstable_now()-w<M)}function q(){if(R!==null){var N=t.unstable_now();w=N;var I=!0;try{I=R(!0,N)}finally{I?ie():(C=!1,R=null)}}else C=!1}var ie;if(typeof _=="function")ie=function(){_(q)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=q,ie=function(){G.postMessage(null)}}else ie=function(){p(q,0)};function X(N){R=N,C||(C=!0,ie())}function Y(N,I){U=p(function(){N(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var H=f;f=I;try{return N()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=f;f=N;try{return I()}finally{f=H}},t.unstable_scheduleCallback=function(N,I,H){var $=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,N={id:d++,callback:I,priorityLevel:N,startTime:H,expirationTime:Z,sortIndex:-1},H>$?(N.sortIndex=H,e(c,N),n(l)===null&&N===n(c)&&(v?(u(U),U=-1):v=!0,Y(S,H-$))):(N.sortIndex=Z,e(l,N),x||m||(x=!0,X(b))),N},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(N){var I=f;return function(){var H=f;f=I;try{return N.apply(this,arguments)}finally{f=H}}}})(Qp);Zp.exports=Qp;var a0=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=un,hn=a0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,io={};function Tr(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(io[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function u0(t){return Vc.call(nf,t)?!0:Vc.call(tf,t)?!1:c0.test(t)?nf[t]=!0:(tf[t]=!0,!1)}function d0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f0(t,e,n,i){if(e===null||typeof e>"u"||d0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ku,Zu);Nt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ku,Zu);Nt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ku,Zu);Nt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qu(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f0(e,n,r,i)&&(n=null),i||r===null?u0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),rf=Symbol.iterator;function bs(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,kl;function Vs(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var zl=!1;function Bl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function h0(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Wr:return"Portal";case Wc:return"Profiler";case Ju:return"StrictMode";case jc:return"Suspense";case Xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function p0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=m0(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sm(t,e){e=e.checked,e!=null&&Qu(t,"checked",e,!1)}function $c(t,e){sm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||Fa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Ws(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function om(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){g0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _0=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(_0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function eu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tu=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nu=null,ss=null,os=null;function cf(t){if(t=Ao(t)){if(typeof nu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=_l(e),nu(t.stateNode,t.type,e))}}function dm(t){ss?os?os.push(t):os=[t]:ss=t}function fm(){if(ss){var t=ss,e=os;if(os=ss=null,cf(t),e)for(t=0;t<e.length;t++)cf(e[t])}}function hm(t,e){return t(e)}function pm(){}var Hl=!1;function mm(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return hm(t,e,n)}finally{Hl=!1,(ss!==null||os!==null)&&(pm(),fm())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var i=_l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var iu=!1;if(di)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{iu=!1}function v0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ys=!1,Oa=null,ka=!1,ru=null,x0={onError:function(t){Ys=!0,Oa=t}};function y0(t,e,n,i,r,s,o,a,l){Ys=!1,Oa=null,v0.apply(x0,arguments)}function S0(t,e,n,i,r,s,o,a,l){if(y0.apply(this,arguments),Ys){if(Ys){var c=Oa;Ys=!1,Oa=null}else throw Error(ee(198));ka||(ka=!0,ru=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uf(t){if(wr(t)!==t)throw Error(ee(188))}function M0(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return uf(r),t;if(s===i)return uf(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function _m(t){return t=M0(t),t!==null?vm(t):null}function vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vm(t);if(e!==null)return e;t=t.sibling}return null}var xm=hn.unstable_scheduleCallback,df=hn.unstable_cancelCallback,E0=hn.unstable_shouldYield,T0=hn.unstable_requestPaint,mt=hn.unstable_now,w0=hn.unstable_getCurrentPriorityLevel,id=hn.unstable_ImmediatePriority,ym=hn.unstable_UserBlockingPriority,za=hn.unstable_NormalPriority,A0=hn.unstable_LowPriority,Sm=hn.unstable_IdlePriority,hl=null,$n=null;function R0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:P0,C0=Math.log,b0=Math.LN2;function P0(t){return t>>>=0,t===0?32:31-(C0(t)/b0|0)|0}var zo=64,Bo=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=js(a):(s&=o,s!==0&&(i=js(s)))}else o=n&~r,o!==0?i=js(o):s!==0&&(i=js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function L0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=L0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=zo;return zo<<=1,!(zo&4194240)&&(zo=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function D0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function Em(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,sd,wm,Am,Rm,ou=!1,Ho=[],Di=null,Ui=null,Ii=null,oo=new Map,ao=new Map,Ai=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function I0(t,e,n,i,r){switch(e){case"focusin":return Di=Ls(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Ls(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Ls(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ls(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,Ls(ao.get(s)||null,t,e,n,i,r)),!0}return!1}function Cm(t){var e=lr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);tu=i,n.target.dispatchEvent(i),tu=null}else return e=Ao(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function hf(t,e,n){wa(t)&&n.delete(e)}function F0(){ou=!1,Di!==null&&wa(Di)&&(Di=null),Ui!==null&&wa(Ui)&&(Ui=null),Ii!==null&&wa(Ii)&&(Ii=null),oo.forEach(hf),ao.forEach(hf)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,ou||(ou=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,F0)))}function lo(t){function e(r){return Ns(r,t)}if(0<Ho.length){Ns(Ho[0],t);for(var n=1;n<Ho.length;n++){var i=Ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Ns(Di,t),Ui!==null&&Ns(Ui,t),Ii!==null&&Ns(Ii,t),oo.forEach(e),ao.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&Ai.shift()}var as=gi.ReactCurrentBatchConfig,Ha=!0;function O0(t,e,n,i){var r=qe,s=as.transition;as.transition=null;try{qe=1,od(t,e,n,i)}finally{qe=r,as.transition=s}}function k0(t,e,n,i){var r=qe,s=as.transition;as.transition=null;try{qe=4,od(t,e,n,i)}finally{qe=r,as.transition=s}}function od(t,e,n,i){if(Ha){var r=au(t,e,n,i);if(r===null)Ql(t,e,i,Ga,n),ff(t,i);else if(I0(r,t,e,n,i))i.stopPropagation();else if(ff(t,i),e&4&&-1<U0.indexOf(t)){for(;r!==null;){var s=Ao(r);if(s!==null&&Tm(s),s=au(t,e,n,i),s===null&&Ql(t,e,i,Ga,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ql(t,e,i,null,n)}}var Ga=null;function au(t,e,n,i){if(Ga=null,t=nd(i),t=lr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case id:return 1;case ym:return 4;case za:case A0:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Ci=null,ad=null,Aa=null;function Pm(){if(Aa)return Aa;var t,e=ad,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Aa=r.slice(t,1<i?1-i:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function pf(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:pf,this.isPropagationStopped=pf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=mn(Ts),wo=ct({},Ts,{view:0,detail:0}),z0=mn(wo),Vl,Wl,Ds,pl=ct({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Vl=t.screenX-Ds.screenX,Wl=t.screenY-Ds.screenY):Wl=Vl=0,Ds=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),mf=mn(pl),B0=ct({},pl,{dataTransfer:0}),H0=mn(B0),G0=ct({},wo,{relatedTarget:0}),jl=mn(G0),V0=ct({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=mn(V0),j0=ct({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X0=mn(j0),q0=ct({},Ts,{data:0}),gf=mn(q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function cd(){return Z0}var Q0=ct({},wo,{key:function(t){if(t.key){var e=Y0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=mn(Q0),ev=ct({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=mn(ev),tv=ct({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),nv=mn(tv),iv=ct({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=mn(iv),sv=ct({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=mn(sv),av=[9,13,27,32],ud=di&&"CompositionEvent"in window,$s=null;di&&"documentMode"in document&&($s=document.documentMode);var lv=di&&"TextEvent"in window&&!$s,Lm=di&&(!ud||$s&&8<$s&&11>=$s),vf=" ",xf=!1;function Nm(t,e){switch(t){case"keyup":return av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function cv(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(xf=!0,vf);case"textInput":return t=e.data,t===vf&&xf?null:t;default:return null}}function uv(t,e){if(Xr)return t==="compositionend"||!ud&&Nm(t,e)?(t=Pm(),Aa=ad=Ci=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lm&&e.locale!=="ko"?null:e.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dv[t.type]:e==="textarea"}function Um(t,e,n,i){dm(i),e=Va(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,co=null;function fv(t){jm(t,0)}function ml(t){var e=$r(t);if(rm(e))return t}function hv(t,e){if(t==="change")return e}var Im=!1;if(di){var Xl;if(di){var ql="oninput"in document;if(!ql){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),ql=typeof Sf.oninput=="function"}Xl=ql}else Xl=!1;Im=Xl&&(!document.documentMode||9<document.documentMode)}function Mf(){Ks&&(Ks.detachEvent("onpropertychange",Fm),co=Ks=null)}function Fm(t){if(t.propertyName==="value"&&ml(co)){var e=[];Um(e,co,t,nd(t)),mm(fv,e)}}function pv(t,e,n){t==="focusin"?(Mf(),Ks=e,co=n,Ks.attachEvent("onpropertychange",Fm)):t==="focusout"&&Mf()}function mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(co)}function gv(t,e){if(t==="click")return ml(e)}function _v(t,e){if(t==="input"||t==="change")return ml(e)}function vv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:vv;function uo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,e){var n=Ef(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=Fa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fa(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xv(t){var e=km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tf(n,s);var o=Tf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yv=di&&"documentMode"in document&&11>=document.documentMode,qr=null,lu=null,Zs=null,cu=!1;function wf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||qr==null||qr!==Fa(i)||(i=qr,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&uo(Zs,i)||(Zs=i,i=Va(lu,"onSelect"),0<i.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Yl={},zm={};di&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function gl(t){if(Yl[t])return Yl[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return Yl[t]=e[n];return t}var Bm=gl("animationend"),Hm=gl("animationiteration"),Gm=gl("animationstart"),Vm=gl("transitionend"),Wm=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){Wm.set(t,e),Tr(e,[t])}for(var $l=0;$l<Af.length;$l++){var Kl=Af[$l],Sv=Kl.toLowerCase(),Mv=Kl[0].toUpperCase()+Kl.slice(1);qi(Sv,"on"+Mv)}qi(Bm,"onAnimationEnd");qi(Hm,"onAnimationIteration");qi(Gm,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Vm,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Rf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,S0(i,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rf(r,a,c),s=l}}}if(ka)throw t=ru,ka=!1,ru=null,t}function tt(t,e){var n=e[pu];n===void 0&&(n=e[pu]=new Set);var i=t+"__bubble";n.has(i)||(Xm(e,t,2,!1),n.add(i))}function Zl(t,e,n){var i=0;e&&(i|=4),Xm(n,t,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Wo]){t[Wo]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(Ev.has(n)||Zl(n,!1,t),Zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,Zl("selectionchange",!1,e))}}function Xm(t,e,n,i){switch(bm(e)){case 1:var r=O0;break;case 4:r=k0;break;default:r=od}n=r.bind(null,e,n,t),r=void 0,!iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mm(function(){var c=s,d=nd(n),h=[];e:{var f=Wm.get(t);if(f!==void 0){var m=ld,x=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":m=J0;break;case"focusin":x="focus",m=jl;break;case"focusout":x="blur",m=jl;break;case"beforeblur":case"afterblur":m=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nv;break;case Bm:case Hm:case Gm:m=W0;break;case Vm:m=rv;break;case"scroll":m=z0;break;case"wheel":m=ov;break;case"copy":case"cut":case"paste":m=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_f}var v=(e&4)!==0,p=!v&&t==="scroll",u=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=so(_,u),S!=null&&v.push(ho(_,S,g)))),p)break;_=_.return}0<v.length&&(f=new m(f,x,null,n,d),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==tu&&(x=n.relatedTarget||n.fromElement)&&(lr(x)||x[fi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?lr(x):null,x!==null&&(p=wr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(v=mf,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=_f,S="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?f:$r(m),g=x==null?f:$r(x),f=new v(S,_+"leave",m,n,d),f.target=p,f.relatedTarget=g,S=null,lr(d)===c&&(v=new v(u,_+"enter",x,n,d),v.target=g,v.relatedTarget=p,S=v),p=S,m&&x)t:{for(v=m,u=x,_=0,g=v;g;g=Ar(g))_++;for(g=0,S=u;S;S=Ar(S))g++;for(;0<_-g;)v=Ar(v),_--;for(;0<g-_;)u=Ar(u),g--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break t;v=Ar(v),u=Ar(u)}v=null}else v=null;m!==null&&Cf(h,f,m,v,!1),x!==null&&p!==null&&Cf(h,p,x,v,!0)}}e:{if(f=c?$r(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=hv;else if(yf(f))if(Im)b=_v;else{b=mv;var C=pv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=gv);if(b&&(b=b(t,c))){Um(h,b,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Kc(f,"number",f.value)}switch(C=c?$r(c):window,t){case"focusin":(yf(C)||C.contentEditable==="true")&&(qr=C,lu=c,Zs=null);break;case"focusout":Zs=lu=qr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,wf(h,n,d);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":wf(h,n,d)}var R;if(ud)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Xr?Nm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Lm&&n.locale!=="ko"&&(Xr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Xr&&(R=Pm()):(Ci=d,ad="value"in Ci?Ci.value:Ci.textContent,Xr=!0)),C=Va(c,U),0<C.length&&(U=new gf(U,t,null,n,d),h.push({event:U,listeners:C}),R?U.data=R:(R=Dm(n),R!==null&&(U.data=R)))),(R=lv?cv(t,n):uv(t,n))&&(c=Va(c,"onBeforeInput"),0<c.length&&(d=new gf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=R))}jm(h,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Va(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(t,n),s!=null&&i.unshift(ho(t,s,r)),s=so(t,e),s!=null&&i.push(ho(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=so(n,s),l!=null&&o.unshift(ho(n,l,a))):r||(l=so(n,s),l!=null&&o.push(ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Tv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function bf(t){return(typeof t=="string"?t:""+t).replace(Tv,`
`).replace(wv,"")}function jo(t,e,n){if(e=bf(e),bf(t)!==e&&n)throw Error(ee(425))}function Wa(){}var uu=null,du=null;function fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(t){return Pf.resolve(null).then(t).catch(Cv)}:hu;function Cv(t){setTimeout(function(){throw t})}function Jl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lo(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ws,po="__reactProps$"+ws,fi="__reactContainer$"+ws,pu="__reactEvents$"+ws,bv="__reactListeners$"+ws,Pv="__reactHandles$"+ws;function lr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lf(t);t!==null;){if(n=t[Yn])return n;t=Lf(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Yn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function _l(t){return t[po]||null}var mu=[],Kr=-1;function Yi(t){return{current:t}}function it(t){0>Kr||(t.current=mu[Kr],mu[Kr]=null,Kr--)}function et(t,e){Kr++,mu[Kr]=t.current,t.current=e}var ji={},zt=Yi(ji),Jt=Yi(!1),_r=ji;function hs(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function ja(){it(Jt),it(zt)}function Nf(t,e,n){if(zt.current!==ji)throw Error(ee(168));et(zt,e),et(Jt,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,p0(t)||"Unknown",r));return ct({},n,i)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,_r=zt.current,et(zt,t),et(Jt,Jt.current),!0}function Df(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=qm(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,it(Jt),it(zt),et(zt,t)):it(Jt),et(Jt,n)}var si=null,vl=!1,ec=!1;function Ym(t){si===null?si=[t]:si.push(t)}function Lv(t){vl=!0,Ym(t)}function $i(){if(!ec&&si!==null){ec=!0;var t=0,e=qe;try{var n=si;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,vl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),xm(id,$i),r}finally{qe=e,ec=!1}}return null}var Zr=[],Qr=0,qa=null,Ya=0,Sn=[],Mn=0,vr=null,ai=1,li="";function nr(t,e){Zr[Qr++]=Ya,Zr[Qr++]=qa,qa=t,Ya=e}function $m(t,e,n){Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=vr,vr=t;var i=ai;t=li;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-Bn(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function fd(t){t.return!==null&&(nr(t,1),$m(t,1,0))}function hd(t){for(;t===qa;)qa=Zr[--Qr],Zr[Qr]=null,Ya=Zr[--Qr],Zr[Qr]=null;for(;t===vr;)vr=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null,ai=Sn[--Mn],Sn[Mn]=null}var dn=null,cn=null,rt=!1,Fn=null;function Km(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(rt){var e=cn;if(e){var n=e;if(!Uf(t,e)){if(gu(t))throw Error(ee(418));e=Fi(n.nextSibling);var i=dn;e&&Uf(t,e)?Km(i,n):(t.flags=t.flags&-4097|2,rt=!1,dn=t)}}else{if(gu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,rt=!1,dn=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Xo(t){if(t!==dn)return!1;if(!rt)return If(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fu(t.type,t.memoizedProps)),e&&(e=cn)){if(gu(t))throw Zm(),Error(ee(418));for(;e;)Km(t,e),e=Fi(e.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?Fi(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=cn;t;)t=Fi(t.nextSibling)}function ps(){cn=dn=null,rt=!1}function pd(t){Fn===null?Fn=[t]:Fn.push(t)}var Nv=gi.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ff(t){var e=t._init;return e(t._payload)}function Qm(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Bi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,S){return _===null||_.tag!==6?(_=ac(g,u.mode,S),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,S){var b=g.type;return b===jr?d(u,_,g.props.children,S,g.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&Ff(b)===_.type)?(S=r(_,g.props),S.ref=Us(u,_,g),S.return=u,S):(S=Ua(g.type,g.key,g.props,null,u.mode,S),S.ref=Us(u,_,g),S.return=u,S)}function c(u,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=lc(g,u.mode,S),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function d(u,_,g,S,b){return _===null||_.tag!==7?(_=fr(g,u.mode,S,b),_.return=u,_):(_=r(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ac(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fo:return g=Ua(_.type,_.key,_.props,null,u.mode,g),g.ref=Us(u,null,_),g.return=u,g;case Wr:return _=lc(_,u.mode,g),_.return=u,_;case Ti:var S=_._init;return h(u,S(_._payload),g)}if(Ws(_)||bs(_))return _=fr(_,u.mode,g,null),_.return=u,_;qo(u,_)}return null}function f(u,_,g,S){var b=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fo:return g.key===b?l(u,_,g,S):null;case Wr:return g.key===b?c(u,_,g,S):null;case Ti:return b=g._init,f(u,_,b(g._payload),S)}if(Ws(g)||bs(g))return b!==null?null:d(u,_,g,S,null);qo(u,g)}return null}function m(u,_,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,a(_,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fo:return u=u.get(S.key===null?g:S.key)||null,l(_,u,S,b);case Wr:return u=u.get(S.key===null?g:S.key)||null,c(_,u,S,b);case Ti:var C=S._init;return m(u,_,g,C(S._payload),b)}if(Ws(S)||bs(S))return u=u.get(g)||null,d(_,u,S,b,null);qo(_,S)}return null}function x(u,_,g,S){for(var b=null,C=null,R=_,U=_=0,M=null;R!==null&&U<g.length;U++){R.index>U?(M=R,R=null):M=R.sibling;var w=f(u,R,g[U],S);if(w===null){R===null&&(R=M);break}t&&R&&w.alternate===null&&e(u,R),_=s(w,_,U),C===null?b=w:C.sibling=w,C=w,R=M}if(U===g.length)return n(u,R),rt&&nr(u,U),b;if(R===null){for(;U<g.length;U++)R=h(u,g[U],S),R!==null&&(_=s(R,_,U),C===null?b=R:C.sibling=R,C=R);return rt&&nr(u,U),b}for(R=i(u,R);U<g.length;U++)M=m(R,u,U,g[U],S),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?U:M.key),_=s(M,_,U),C===null?b=M:C.sibling=M,C=M);return t&&R.forEach(function(j){return e(u,j)}),rt&&nr(u,U),b}function v(u,_,g,S){var b=bs(g);if(typeof b!="function")throw Error(ee(150));if(g=b.call(g),g==null)throw Error(ee(151));for(var C=b=null,R=_,U=_=0,M=null,w=g.next();R!==null&&!w.done;U++,w=g.next()){R.index>U?(M=R,R=null):M=R.sibling;var j=f(u,R,w.value,S);if(j===null){R===null&&(R=M);break}t&&R&&j.alternate===null&&e(u,R),_=s(j,_,U),C===null?b=j:C.sibling=j,C=j,R=M}if(w.done)return n(u,R),rt&&nr(u,U),b;if(R===null){for(;!w.done;U++,w=g.next())w=h(u,w.value,S),w!==null&&(_=s(w,_,U),C===null?b=w:C.sibling=w,C=w);return rt&&nr(u,U),b}for(R=i(u,R);!w.done;U++,w=g.next())w=m(R,u,U,w.value,S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?U:w.key),_=s(w,_,U),C===null?b=w:C.sibling=w,C=w);return t&&R.forEach(function(q){return e(u,q)}),rt&&nr(u,U),b}function p(u,_,g,S){if(typeof g=="object"&&g!==null&&g.type===jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fo:e:{for(var b=g.key,C=_;C!==null;){if(C.key===b){if(b=g.type,b===jr){if(C.tag===7){n(u,C.sibling),_=r(C,g.props.children),_.return=u,u=_;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&Ff(b)===C.type){n(u,C.sibling),_=r(C,g.props),_.ref=Us(u,C,g),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===jr?(_=fr(g.props.children,u.mode,S,g.key),_.return=u,u=_):(S=Ua(g.type,g.key,g.props,null,u.mode,S),S.ref=Us(u,_,g),S.return=u,u=S)}return o(u);case Wr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=lc(g,u.mode,S),_.return=u,u=_}return o(u);case Ti:return C=g._init,p(u,_,C(g._payload),S)}if(Ws(g))return x(u,_,g,S);if(bs(g))return v(u,_,g,S);qo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=ac(g,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return p}var ms=Qm(!0),Jm=Qm(!1),$a=Yi(null),Ka=null,Jr=null,md=null;function gd(){md=Jr=Ka=null}function _d(t){var e=$a.current;it($a),t._currentValue=e}function vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Ka=t,md=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(Ka===null)throw Error(ee(308));Jr=t,Ka.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var cr=null;function vd(t){cr===null?cr=[t]:cr.push(t)}function eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}function Of(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Za(t,e,n,i){var r=t.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(f=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break e;h=ct({},h,f);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=h}}function kf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ro={},Kn=Yi(Ro),mo=Yi(Ro),go=Yi(Ro);function ur(t){if(t===Ro)throw Error(ee(174));return t}function yd(t,e){switch(et(go,e),et(mo,t),et(Kn,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}it(Kn),et(Kn,e)}function gs(){it(Kn),it(mo),it(go)}function ng(t){ur(go.current);var e=ur(Kn.current),n=Qc(e,t.type);e!==n&&(et(mo,t),et(Kn,n))}function Sd(t){mo.current===t&&(it(Kn),it(mo))}var at=Yi(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Md(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var ba=gi.ReactCurrentDispatcher,nc=gi.ReactCurrentBatchConfig,xr=0,lt=null,vt=null,wt=null,Ja=!1,Qs=!1,_o=0,Dv=0;function Ut(){throw Error(ee(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Td(t,e,n,i,r,s){if(xr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?Ov:kv,t=n(i,r),Qs){s=0;do{if(Qs=!1,_o=0,25<=s)throw Error(ee(301));s+=1,wt=vt=null,e.updateQueue=null,ba.current=zv,t=n(i,r)}while(Qs)}if(ba.current=el,e=vt!==null&&vt.next!==null,xr=0,wt=vt=lt=null,Ja=!1,e)throw Error(ee(300));return t}function wd(){var t=_o!==0;return _o=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?lt.memoizedState=wt=t:wt=wt.next=t,wt}function bn(){if(vt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=wt===null?lt.memoizedState:wt.next;if(e!==null)wt=e,vt=t;else{if(t===null)throw Error(ee(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},wt===null?lt.memoizedState=wt=t:wt=wt.next=t}return wt}function vo(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((xr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,lt.lanes|=d,yr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ig(){}function rg(t,e){var n=lt,i=bn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Ad(ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,xo(9,og.bind(null,n,i,r,e),void 0,null),At===null)throw Error(ee(349));xr&30||sg(n,e,r)}return r}function sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function og(t,e,n,i){e.value=n,e.getSnapshot=i,lg(e)&&cg(t)}function ag(t,e,n){return n(function(){lg(e)&&cg(t)})}function lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function cg(t){var e=hi(t,1);e!==null&&Hn(e,t,1,-1)}function zf(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=Fv.bind(null,lt,t),[e.memoizedState,t]}function xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ug(){return bn().memoizedState}function Pa(t,e,n,i){var r=Xn();lt.flags|=t,r.memoizedState=xo(1|e,n,void 0,i===void 0?null:i)}function xl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&Ed(i,o.deps)){r.memoizedState=xo(e,n,s,i);return}}lt.flags|=t,r.memoizedState=xo(1|e,n,s,i)}function Bf(t,e){return Pa(8390656,8,t,e)}function Ad(t,e){return xl(2048,8,t,e)}function dg(t,e){return xl(4,2,t,e)}function fg(t,e){return xl(4,4,t,e)}function hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,hg.bind(null,e,t),n)}function Rd(){}function mg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _g(t,e,n){return xr&21?(Vn(n,e)||(n=Mm(),lt.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function Uv(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=nc.transition;nc.transition={};try{t(!1),e()}finally{qe=n,nc.transition=i}}function vg(){return bn().memoizedState}function Iv(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))yg(e,n);else if(n=eg(t,e,n,i),n!==null){var r=Xt();Hn(n,t,i,r),Sg(n,e,i)}}function Fv(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=eg(t,e,r,i),n!==null&&(r=Xt(),Hn(n,t,i,r),Sg(n,e,i))}}function xg(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function yg(t,e){Qs=Ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}var el={readContext:Cn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Ov={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Bf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Iv.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:zf,useDebugValue:Rd,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=zf(!1),e=t[0];return t=Uv.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Xn();if(rt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),At===null)throw Error(ee(349));xr&30||sg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bf(ag.bind(null,i,s,t),[t]),i.flags|=2048,xo(9,og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=At.identifierPrefix;if(rt){var n=li,i=ai;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kv={readContext:Cn,useCallback:mg,useContext:Cn,useEffect:Ad,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:ic,useRef:ug,useState:function(){return ic(vo)},useDebugValue:Rd,useDeferredValue:function(t){var e=bn();return _g(e,vt.memoizedState,t)},useTransition:function(){var t=ic(vo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1},zv={readContext:Cn,useCallback:mg,useContext:Cn,useEffect:Ad,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:rc,useRef:ug,useState:function(){return rc(vo)},useDebugValue:Rd,useDeferredValue:function(t){var e=bn();return vt===null?e.memoizedState=t:_g(e,vt.memoizedState,t)},useTransition:function(){var t=rc(vo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Hn(e,t,r,i),Ca(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Hn(e,t,r,i),Ca(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=zi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Hn(e,t,i,n),Ca(e,t,i))}};function Hf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function Mg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=en(e)?_r:zt.current,i=e.contextTypes,s=(i=i!=null)?hs(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=en(e)?_r:zt.current,r.context=hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),Za(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=h0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Su(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nl||(nl=!0,Lu=i),Su(t,e)},n}function Tg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Su(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Su(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Bv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ex.bind(null,t,e,n),e.then(t,t))}function Wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var Hv=gi.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?Jm(e,null,n,i):ms(e,t.child,n,i)}function Xf(t,e,n,i,r){n=n.render;var s=e.ref;return ls(e,r),i=Td(t,e,n,i,s,r),n=wd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(rt&&n&&fd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function qf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,i,r)):(t=Ua(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Mu(t,e,n,i,r)}function Ag(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ts,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(ts,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(ts,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(ts,ln),ln|=i;return Wt(t,e,r,n),e.child}function Rg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mu(t,e,n,i,r){var s=en(n)?_r:zt.current;return s=hs(e,s),ls(e,r),n=Td(t,e,n,i,s,r),i=wd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(rt&&i&&fd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Yf(t,e,n,i,r){if(en(n)){var s=!0;Xa(e)}else s=!1;if(ls(e,r),e.stateNode===null)La(t,e),Mg(e,n,i),yu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=en(n)?_r:zt.current,c=hs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Gf(e,o,i,c),wi=!1;var f=e.memoizedState;o.state=f,Za(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jt.current||wi?(typeof d=="function"&&(xu(e,n,d,i),l=e.memoizedState),(a=wi||Hf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=en(n)?_r:zt.current,l=hs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Gf(e,o,i,l),wi=!1,f=e.memoizedState,o.state=f,Za(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Jt.current||wi?(typeof m=="function"&&(xu(e,n,m,i),x=e.memoizedState),(c=wi||Hf(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Eu(t,e,n,i,s,r)}function Eu(t,e,n,i,r,s){Rg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Df(e,n,!1),pi(t,e,s);i=e.stateNode,Hv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ms(e,t.child,null,s),e.child=ms(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&Df(e,n,!0),e.child}function Cg(t){var e=t.stateNode;e.pendingContext?Nf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nf(t,e.context,!1),yd(t,e.containerInfo)}function $f(t,e,n,i,r){return ps(),pd(r),e.flags|=256,Wt(t,e,n,i),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(at,r&1),t===null)return _u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wu(n),e.memoizedState=Tu,t):Cd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,i){return i!==null&&pd(i),ms(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=sc(Error(ee(422))),Yo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=El({mode:"visible",children:i.children},r,0,null),s=fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ms(e,t.child,null,o),e.child.memoizedState=wu(o),e.memoizedState=Tu,s);if(!(e.mode&1))return Yo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=sc(s,i,void 0),Yo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),Hn(i,t,r,-1))}return Ud(),i=sc(Error(ee(421))),Yo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Fi(r.nextSibling),dn=e,rt=!0,Fn=null,t!==null&&(Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=vr,ai=t.id,li=t.overflow,vr=e),e=Cd(e,i.children),e.flags|=4096,e)}function Kf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vu(t.return,e,n)}function oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Pg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kf(t,n,e);else if(t.tag===19)Kf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vv(t,e,n){switch(e.tag){case 3:Cg(e),ps();break;case 5:ng(e);break;case 1:en(e.type)&&Xa(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et($a,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(et(at,at.current&1),t=pi(t,e,n),t!==null?t.sibling:null);et(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Pg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return pi(t,e,n)}var Lg,Au,Ng,Dg;Lg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Au=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Kn.current);var s=null;switch(n){case"input":r=Yc(t,r),i=Yc(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Zc(t,r),i=Zc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wa)}Jc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Wv(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return en(e.type)&&ja(),It(e),null;case 3:return i=e.stateNode,gs(),it(Jt),it(zt),Md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Uu(Fn),Fn=null))),Au(t,e),It(e),null;case 5:Sd(e);var r=ur(go.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return It(e),null}if(t=ur(Kn.current),Xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[po]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)tt(Xs[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":sf(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":af(i,s),tt("invalid",i)}Jc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Oo(i),of(i,s,!0);break;case"textarea":Oo(i),lf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[po]=i,Lg(t,e,!1,!1),e.stateNode=t;e:{switch(o=eu(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)tt(Xs[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":sf(t,i),r=Yc(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),tt("invalid",t);break;case"textarea":af(t,i),r=Zc(t,i),tt("invalid",t);break;default:r=i}Jc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?um(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&Qu(t,s,l,o))}switch(n){case"input":Oo(t),of(t,i,!1);break;case"textarea":Oo(t),lf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=ur(go.current),ur(Kn.current),Xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return It(e),null;case 13:if(it(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&cn!==null&&e.mode&1&&!(e.flags&128))Zm(),ps(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Yn]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Fn!==null&&(Uu(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?xt===0&&(xt=3):Ud())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return gs(),Au(t,e),t===null&&fo(e.stateNode.containerInfo),It(e),null;case 10:return _d(e.type._context),It(e),null;case 17:return en(e.type)&&ja(),It(e),null;case 19:if(it(at),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>vs&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return It(e),null}else 2*mt()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=at.current,et(at,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Dd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function jv(t,e){switch(hd(e),e.tag){case 1:return en(e.type)&&ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gs(),it(Jt),it(zt),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(it(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(at),null;case 4:return gs(),null;case 10:return _d(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var $o=!1,kt=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,de=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Ru(t,e,n){try{n()}catch(i){ft(t,e,i)}}var Zf=!1;function qv(t,e){if(uu=Ha,t=km(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:t,selectionRange:n},Ha=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Un(e.type,v),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){ft(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=Zf,Zf=!1,x}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ru(e,n,s)}r=r.next}while(r!==i)}}function Sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[po],delete e[pu],delete e[bv],delete e[Pv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ig(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wa));else if(i!==4&&(t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}var Ct=null,In=!1;function vi(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:kt||es(n,e);case 6:var i=Ct,r=In;Ct=null,vi(t,e,n),Ct=i,In=r,Ct!==null&&(In?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(In?(t=Ct,n=n.stateNode,t.nodeType===8?Jl(t.parentNode,n):t.nodeType===1&&Jl(t,n),lo(t)):Jl(Ct,n.stateNode));break;case 4:i=Ct,r=In,Ct=n.stateNode.containerInfo,In=!0,vi(t,e,n),Ct=i,In=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ru(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!kt&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,vi(t,e,n),kt=i):vi(t,e,n);break;default:vi(t,e,n)}}function Jf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xv),e.forEach(function(i){var r=nx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,In=!1;break e;case 3:Ct=a.stateNode.containerInfo,In=!0;break e;case 4:Ct=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Ct===null)throw Error(ee(160));Fg(s,o,r),Ct=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),jn(t),i&4){try{Js(3,t,t.return),Sl(3,t)}catch(v){ft(t,t.return,v)}try{Js(5,t,t.return)}catch(v){ft(t,t.return,v)}}break;case 1:Pn(e,t),jn(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(Pn(e,t),jn(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{ro(r,"")}catch(v){ft(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sm(r,s),eu(a,o);var c=eu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?um(r,h):d==="dangerouslySetInnerHTML"?lm(r,h):d==="children"?ro(r,h):Qu(r,d,h,c)}switch(a){case"input":$c(r,s);break;case"textarea":om(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?rs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(r,!!s.multiple,s.defaultValue,!0):rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(v){ft(t,t.return,v)}}break;case 6:if(Pn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){ft(t,t.return,v)}}break;case 3:if(Pn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(v){ft(t,t.return,v)}break;case 4:Pn(e,t),jn(t);break;case 13:Pn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=mt())),i&4&&Jf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,Pn(e,t),kt=c):Pn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(de=t,d=t.child;d!==null;){for(h=de=d;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:Js(4,f,f.return);break;case 1:es(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){ft(i,n,v)}}break;case 5:es(f,f.return);break;case 22:if(f.memoizedState!==null){th(h);continue}}m!==null?(m.return=f,de=m):th(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cm("display",o))}catch(v){ft(t,t.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){ft(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),jn(t),i&4&&Jf(t);break;case 21:break;default:Pn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ig(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=Qf(t);Pu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qf(t);bu(t,a,o);break;default:throw Error(ee(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yv(t,e,n){de=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$o;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=$o;var c=kt;if($o=o,(kt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?nh(r):l!==null?(l.return=o,de=l):nh(r);for(;s!==null;)de=s,kg(s),s=s.sibling;de=r,$o=a,kt=c}eh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):eh(t)}}function eh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&lo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}kt||e.flags&512&&Cu(e)}catch(f){ft(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function th(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function nh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sl(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var s=e.return;try{Cu(e)}catch(l){ft(e,s,l)}break;case 5:var o=e.return;try{Cu(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var $v=Math.ceil,tl=gi.ReactCurrentDispatcher,bd=gi.ReactCurrentOwner,Rn=gi.ReactCurrentBatchConfig,We=0,At=null,_t=null,Lt=0,ln=0,ts=Yi(0),xt=0,yo=null,yr=0,Ml=0,Pd=0,eo=null,Kt=null,Ld=0,vs=1/0,ri=null,nl=!1,Lu=null,ki=null,Ko=!1,bi=null,il=0,to=0,Nu=null,Na=-1,Da=0;function Xt(){return We&6?mt():Na!==-1?Na:Na=mt()}function zi(t){return t.mode&1?We&2&&Lt!==0?Lt&-Lt:Nv.transition!==null?(Da===0&&(Da=Mm()),Da):(t=qe,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Hn(t,e,n,i){if(50<to)throw to=0,Nu=null,Error(ee(185));To(t,n,i),(!(We&2)||t!==At)&&(t===At&&(!(We&2)&&(Ml|=n),xt===4&&Ri(t,Lt)),tn(t,i),n===1&&We===0&&!(e.mode&1)&&(vs=mt()+500,vl&&$i()))}function tn(t,e){var n=t.callbackNode;N0(t,e);var i=Ba(t,t===At?Lt:0);if(i===0)n!==null&&df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&df(n),e===1)t.tag===0?Lv(ih.bind(null,t)):Ym(ih.bind(null,t)),Rv(function(){!(We&6)&&$i()}),n=null;else{switch(Em(i)){case 1:n=id;break;case 4:n=ym;break;case 16:n=za;break;case 536870912:n=Sm;break;default:n=za}n=Xg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(Na=-1,Da=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var i=Ba(t,t===At?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rl(t,i);else{e=i;var r=We;We|=2;var s=Hg();(At!==t||Lt!==e)&&(ri=null,vs=mt()+500,dr(t,e));do try{Qv();break}catch(a){Bg(t,a)}while(!0);gd(),tl.current=s,We=r,_t!==null?e=0:(At=null,Lt=0,e=xt)}if(e!==0){if(e===2&&(r=su(t),r!==0&&(i=r,e=Du(t,r))),e===1)throw n=yo,dr(t,0),Ri(t,i),tn(t,mt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!Kv(r)&&(e=rl(t,i),e===2&&(s=su(t),s!==0&&(i=s,e=Du(t,s))),e===1))throw n=yo,dr(t,0),Ri(t,i),tn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ir(t,Kt,ri);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=Ld+500-mt(),10<e)){if(Ba(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hu(ir.bind(null,t,Kt,ri),e);break}ir(t,Kt,ri);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$v(i/1960))-i,10<i){t.timeoutHandle=hu(ir.bind(null,t,Kt,ri),i);break}ir(t,Kt,ri);break;case 5:ir(t,Kt,ri);break;default:throw Error(ee(329))}}}return tn(t,mt()),t.callbackNode===n?zg.bind(null,t):null}function Du(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=rl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Uu(e)),t}function Uu(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Kv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Pd,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function ih(t){if(We&6)throw Error(ee(327));cs();var e=Ba(t,0);if(!(e&1))return tn(t,mt()),null;var n=rl(t,e);if(t.tag!==0&&n===2){var i=su(t);i!==0&&(e=i,n=Du(t,i))}if(n===1)throw n=yo,dr(t,0),Ri(t,e),tn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Kt,ri),tn(t,mt()),null}function Nd(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(vs=mt()+500,vl&&$i())}}function Sr(t){bi!==null&&bi.tag===0&&!(We&6)&&cs();var e=We;We|=1;var n=Rn.transition,i=qe;try{if(Rn.transition=null,qe=1,t)return t()}finally{qe=i,Rn.transition=n,We=e,!(We&6)&&$i()}}function Dd(){ln=ts.current,it(ts)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Av(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ja();break;case 3:gs(),it(Jt),it(zt),Md();break;case 5:Sd(i);break;case 4:gs();break;case 13:it(at);break;case 19:it(at);break;case 10:_d(i.type._context);break;case 22:case 23:Dd()}n=n.return}if(At=t,_t=t=Bi(t.current,null),Lt=ln=e,xt=0,yo=null,Pd=Ml=yr=0,Kt=eo=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cr=null}return t}function Bg(t,e){do{var n=_t;try{if(gd(),ba.current=el,Ja){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ja=!1}if(xr=0,wt=vt=lt=null,Qs=!1,_o=0,bd.current=null,n===null||n.return===null){xt=1,yo=e,_t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Wf(o);if(m!==null){m.flags&=-257,jf(m,o,a,s,e),m.mode&1&&Vf(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Vf(s,c,e),Ud();break e}l=Error(ee(426))}}else if(rt&&a.mode&1){var p=Wf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),jf(p,o,a,s,e),pd(_s(l,a));break e}}s=l=_s(l,a),xt!==4&&(xt=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Eg(s,l,e);Of(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ki===null||!ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Tg(s,a,e);Of(s,S);break e}}s=s.return}while(s!==null)}Vg(n)}catch(b){e=b,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Hg(){var t=tl.current;return tl.current=el,t===null?el:t}function Ud(){(xt===0||xt===3||xt===2)&&(xt=4),At===null||!(yr&268435455)&&!(Ml&268435455)||Ri(At,Lt)}function rl(t,e){var n=We;We|=2;var i=Hg();(At!==t||Lt!==e)&&(ri=null,dr(t,e));do try{Zv();break}catch(r){Bg(t,r)}while(!0);if(gd(),We=n,tl.current=i,_t!==null)throw Error(ee(261));return At=null,Lt=0,xt}function Zv(){for(;_t!==null;)Gg(_t)}function Qv(){for(;_t!==null&&!E0();)Gg(_t)}function Gg(t){var e=jg(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Vg(t):_t=e,bd.current=null}function Vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jv(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,_t=null;return}}else if(n=Wv(n,e,ln),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);xt===0&&(xt=5)}function ir(t,e,n){var i=qe,r=Rn.transition;try{Rn.transition=null,qe=1,Jv(t,e,n,i)}finally{Rn.transition=r,qe=i}return null}function Jv(t,e,n,i){do cs();while(bi!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(t,s),t===At&&(_t=At=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,Xg(za,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=qe;qe=1;var a=We;We|=4,bd.current=null,qv(t,n),Og(n,t),xv(du),Ha=!!uu,du=uu=null,t.current=n,Yv(n),T0(),We=a,qe=o,Rn.transition=s}else t.current=n;if(Ko&&(Ko=!1,bi=t,il=r),s=t.pendingLanes,s===0&&(ki=null),R0(n.stateNode),tn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nl)throw nl=!1,t=Lu,Lu=null,t;return il&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===Nu?to++:(to=0,Nu=t):to=0,$i(),null}function cs(){if(bi!==null){var t=Em(il),e=Rn.transition,n=qe;try{if(Rn.transition=null,qe=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,il=0,We&6)throw Error(ee(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:Js(8,d,s)}var h=d.child;if(h!==null)h.return=d,de=h;else for(;de!==null;){d=de;var f=d.sibling,m=d.return;if(Ug(d),d===c){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,de=u;break e}de=s.return}}var _=t.current;for(de=_;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(b){ft(a,a.return,b)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(We=r,$i(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(hl,t)}catch{}i=!0}return i}finally{qe=n,Rn.transition=e}}return!1}function rh(t,e,n){e=_s(n,e),e=Eg(t,e,1),t=Oi(t,e,1),e=Xt(),t!==null&&(To(t,1,e),tn(t,e))}function ft(t,e,n){if(t.tag===3)rh(t,t,n);else for(;e!==null;){if(e.tag===3){rh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=_s(n,t),t=Tg(e,t,1),e=Oi(e,t,1),t=Xt(),e!==null&&(To(e,1,t),tn(e,t));break}}e=e.return}}function ex(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Lt&n)===n&&(xt===4||xt===3&&(Lt&130023424)===Lt&&500>mt()-Ld?dr(t,0):Pd|=n),tn(t,e)}function Wg(t,e){e===0&&(t.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var n=Xt();t=hi(t,e),t!==null&&(To(t,e,n),tn(t,n))}function tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wg(t,n)}function nx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Wg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,Vv(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,rt&&e.flags&1048576&&$m(e,Ya,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;La(t,e),t=e.pendingProps;var r=hs(e,zt.current);ls(e,n),r=Td(null,e,i,t,r,n);var s=wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Xa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xd(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,yu(e,i,t,n),e=Eu(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&fd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(La(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rx(i),t=Un(i,t),r){case 0:e=Mu(null,e,i,t,n);break e;case 1:e=Yf(null,e,i,t,n);break e;case 11:e=Xf(null,e,i,t,n);break e;case 14:e=qf(null,e,i,Un(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Mu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Yf(t,e,i,r,n);case 3:e:{if(Cg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tg(t,e),Za(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(ee(423)),e),e=$f(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(ee(424)),e),e=$f(t,e,i,n,r);break e}else for(cn=Fi(e.stateNode.containerInfo.firstChild),dn=e,rt=!0,Fn=null,n=Jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),i===r){e=pi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return ng(e),t===null&&_u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fu(i,r)?o=null:s!==null&&fu(i,s)&&(e.flags|=32),Rg(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&_u(e),null;case 13:return bg(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ms(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Xf(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et($a,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!Jt.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ls(e,n),r=Cn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),qf(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),La(t,e),e.tag=1,en(i)?(t=!0,Xa(e)):t=!1,ls(e,n),Mg(e,i,r),yu(e,i,r,n),Eu(null,e,i,!0,t,n);case 19:return Pg(t,e,n);case 22:return Ag(t,e,n)}throw Error(ee(156,e.tag))};function Xg(t,e){return xm(t,e)}function ix(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new ix(t,e,n,i)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return fr(n.children,r,s,e);case Ju:o=8,r|=8;break;case Wc:return t=An(12,n,e,r|2),t.elementType=Wc,t.lanes=s,t;case jc:return t=An(13,n,e,r),t.elementType=jc,t.lanes=s,t;case Xc:return t=An(19,n,e,r),t.elementType=Xc,t.lanes=s,t;case nm:return El(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:o=10;break e;case tm:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case Ti:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function El(t,e,n,i){return t=An(22,t,i,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,i,r,s,o,a,l){return t=new sx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),t}function ox(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return ji;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(en(n))return qm(t,n,e)}return e}function Yg(t,e,n,i,r,s,o,a,l){return t=Fd(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=Xt(),r=zi(n),s=ui(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,To(t,r,i),tn(t,i),t}function Tl(t,e,n,i){var r=e.current,s=Xt(),o=zi(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,o),t!==null&&(Hn(t,r,o,s),Ca(t,r,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){sh(t,e),(t=t.alternate)&&sh(t,e)}function ax(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}wl.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Tl(t,e,null,null)};wl.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Tl(null,t,null,null)}),e[fi]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Cm(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oh(){}function lx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sl(o);s.call(c)}}var o=Yg(e,i,t,0,null,!1,!1,"",oh);return t._reactRootContainer=o,t[fi]=o.current,fo(t.nodeType===8?t.parentNode:t),Sr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sl(l);a.call(c)}}var l=Fd(t,0,!1,null,null,!1,!1,"",oh);return t._reactRootContainer=l,t[fi]=l.current,fo(t.nodeType===8?t.parentNode:t),Sr(function(){Tl(e,l,n,i)}),l}function Rl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sl(o);a.call(l)}}Tl(e,o,t,r)}else o=lx(n,e,t,r,i);return sl(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(rd(e,n|1),tn(e,mt()),!(We&6)&&(vs=mt()+500,$i()))}break;case 13:Sr(function(){var i=hi(t,1);if(i!==null){var r=Xt();Hn(i,t,1,r)}}),Od(t,1)}};sd=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=Xt();Hn(e,t,134217728,n)}Od(t,134217728)}};wm=function(t){if(t.tag===13){var e=zi(t),n=hi(t,e);if(n!==null){var i=Xt();Hn(n,t,e,i)}Od(t,e)}};Am=function(){return qe};Rm=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};nu=function(t,e,n){switch(e){case"input":if($c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_l(i);if(!r)throw Error(ee(90));rm(i),$c(i,r)}}}break;case"textarea":om(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};hm=Nd;pm=Sr;var cx={usingClientEntryPoint:!1,Events:[Ao,$r,_l,dm,fm,Nd]},Fs={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{hl=Zo.inject(ux),$n=Zo}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(ee(200));return ox(t,e,null,n)};pn.createRoot=function(t,e){if(!zd(t))throw Error(ee(299));var n=!1,i="",r=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,fo(t.nodeType===8?t.parentNode:t),new kd(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Sr(t)};pn.hydrate=function(t,e,n){if(!Al(e))throw Error(ee(200));return Rl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$g;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wl(e)};pn.render=function(t,e,n){if(!Al(e))throw Error(ee(200));return Rl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Al(t))throw Error(ee(40));return t._reactRootContainer?(Sr(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};pn.unstable_batchedUpdates=Nd;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Al(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Rl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Kp.exports=pn;var dx=Kp.exports,ah=dx;Gc.createRoot=ah.createRoot,Gc.hydrateRoot=ah.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="160",fx=0,lh=1,hx=2,Zg=1,px=2,ii=3,Xi=0,nn=1,oi=2,Hi=0,us=1,ch=2,uh=3,dh=4,mx=5,or=100,gx=101,_x=102,fh=103,hh=104,vx=200,xx=201,yx=202,Sx=203,Iu=204,Fu=205,Mx=206,Ex=207,Tx=208,wx=209,Ax=210,Rx=211,Cx=212,bx=213,Px=214,Lx=0,Nx=1,Dx=2,ol=3,Ux=4,Ix=5,Fx=6,Ox=7,Qg=0,kx=1,zx=2,Gi=0,Bx=1,Hx=2,Gx=3,Vx=4,Wx=5,jx=6,Jg=300,xs=301,ys=302,Ou=303,ku=304,Cl=306,zu=1e3,kn=1001,Bu=1002,jt=1003,ph=1004,cc=1005,En=1006,Xx=1007,So=1008,Vi=1009,qx=1010,Yx=1011,Hd=1012,e_=1013,Pi=1014,Li=1015,Mo=1016,t_=1017,n_=1018,hr=1020,$x=1021,zn=1023,Kx=1024,Zx=1025,pr=1026,Ss=1027,Qx=1028,i_=1029,Jx=1030,r_=1031,s_=1033,uc=33776,dc=33777,fc=33778,hc=33779,mh=35840,gh=35841,_h=35842,vh=35843,o_=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Rh=37814,Ch=37815,bh=37816,Ph=37817,Lh=37818,Nh=37819,Dh=37820,Uh=37821,pc=36492,Ih=36494,Fh=36495,ey=36283,Oh=36284,kh=36285,zh=36286,a_=3e3,mr=3001,ty=3200,ny=3201,iy=0,ry=1,wn="",bt="srgb",mi="srgb-linear",Gd="display-p3",bl="display-p3-linear",al="linear",nt="srgb",ll="rec709",cl="p3",Rr=7680,Bh=519,sy=512,oy=513,ay=514,l_=515,ly=516,cy=517,uy=518,dy=519,Hh=35044,Gh="300 es",Hu=1035,ci=2e3,ul=2001;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,Gu=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function fy(t,e){return(t%e+e)%e}function gc(t,e,n){return(1-n)*t+n*e}function Vh(t){return(t&t-1)===0&&t!==0}function Vu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],x=i[8],v=r[0],p=r[3],u=r[6],_=r[1],g=r[4],S=r[7],b=r[2],C=r[5],R=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*p+a*g+l*C,s[6]=o*u+a*S+l*R,s[1]=c*v+d*_+h*b,s[4]=c*p+d*g+h*C,s[7]=c*u+d*S+h*R,s[2]=f*v+m*_+x*b,s[5]=f*p+m*g+x*C,s[8]=f*u+m*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,x=n*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(d*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Be;function c_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hy(){const t=dl("canvas");return t.style.display="block",t}const Wh={};function no(t){t in Wh||(Wh[t]=!0,console.warn(t))}const jh=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[mi]:{transfer:al,primaries:ll,toReference:t=>t,fromReference:t=>t},[bt]:{transfer:nt,primaries:ll,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bl]:{transfer:al,primaries:cl,toReference:t=>t.applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh)},[Gd]:{transfer:nt,primaries:cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh).convertLinearToSRGB()}},py=new Set([mi,bl]),$e={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!py.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qo[e].toReference,r=Qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qo[t].primaries},getTransfer:function(t){return t===wn?al:Qo[t].transfer}};function ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class u_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=dl("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ds(n[i]/255)*255):n[i]=ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let my=0;class d_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xc(r[o].image)):s.push(xc(r[o]))}else s=xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?u_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gy=0;class fn extends As{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=kn,r=kn,s=En,o=So,a=zn,l=Vi,c=fn.DEFAULT_ANISOTROPY,d=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Co(),this.name="",this.source=new d_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===mr?bt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zu:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zu:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?mr:a_}set encoding(e){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?bt:wn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Jg;fn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],x=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,b=(u+1)/2,C=(d+f)/4,R=(h+v)/4,U=(x+p)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=R/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=U/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _y extends As{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?bt:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new d_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends _y{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f_ extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vy extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==f||c!==m||d!==x){let p=1-a;const u=l*f+c*m+d*x+h*v,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,u*_);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const S=a*_;if(l=l*p+f*S,c=c*p+m*S,d=d*p+x*S,h=h*p+v*S,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*m-c*f,e[n+1]=l*x+d*f+c*h-a*m,e[n+2]=c*x+d*m+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"YXZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"ZXY":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"ZYX":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"YZX":this._x=f*d*h+c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h-f*m*x;break;case"XZY":this._x=f*d*h-c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new B,qh=new bo;class Po{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),ea.subVectors(this.max,ks),br.subVectors(e.a,ks),Pr.subVectors(e.b,ks),Lr.subVectors(e.c,ks),xi.subVectors(Pr,br),yi.subVectors(Lr,Pr),Qi.subVectors(br,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Qi.z,Qi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Qi.z,0,-Qi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Qi.y,Qi.x,0];return!Sc(n,br,Pr,Lr,ea)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,br,Pr,Lr,ea))?!1:(ta.crossVectors(xi,yi),n=[ta.x,ta.y,ta.z],Sc(n,br,Pr,Lr,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,Jo=new Po,br=new B,Pr=new B,Lr=new B,xi=new B,yi=new B,Qi=new B,ks=new B,ea=new B,ta=new B,Ji=new B;function Sc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),d=i.dot(Ji);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const xy=new Po,zs=new B,Mc=new B;class Pl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Mc)),this.expandByPoint(zs.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new B,Ec=new B,na=new B,Si=new B,Tc=new B,ia=new B,wc=new B;class h_{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ec.copy(e).add(n).multiplyScalar(.5),na.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Ec);const s=e.distanceTo(n)*.5,o=-this.direction.dot(na),a=Si.dot(this.direction),l=-Si.dot(na),c=Si.lengthSq(),d=Math.abs(1-o*o);let h,f,m,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const v=1/d;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ec).addScaledVector(na,f),m}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Tc.subVectors(n,e),ia.subVectors(i,e),wc.crossVectors(Tc,ia);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(Si,ia));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(Si));if(c<0||l+c>o)return null;const d=-a*Si.dot(wc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,x,v,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,x,v,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,x,v,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=x,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,x=a*d,v=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,x=c*d,v=c*h;n[0]=f+v*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-x,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,x=c*d,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*d,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,x=a*d,v=a*h;n[0]=l*d,n[4]=x*c-m,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*d,n[4]=v-f*h,n[8]=x*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+x,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,v=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+v,n[5]=o*d,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yy,e,Sy)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),ra.crossVectors(on,Mi),r[0]=Mi.x,r[4]=ra.x,r[8]=on.x,r[1]=Mi.y,r[5]=ra.y,r[9]=on.y,r[2]=Mi.z,r[6]=ra.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],x=i[2],v=i[6],p=i[10],u=i[14],_=i[3],g=i[7],S=i[11],b=i[15],C=r[0],R=r[4],U=r[8],M=r[12],w=r[1],j=r[5],q=r[9],ie=r[13],L=r[2],G=r[6],X=r[10],Y=r[14],N=r[3],I=r[7],H=r[11],$=r[15];return s[0]=o*C+a*w+l*L+c*N,s[4]=o*R+a*j+l*G+c*I,s[8]=o*U+a*q+l*X+c*H,s[12]=o*M+a*ie+l*Y+c*$,s[1]=d*C+h*w+f*L+m*N,s[5]=d*R+h*j+f*G+m*I,s[9]=d*U+h*q+f*X+m*H,s[13]=d*M+h*ie+f*Y+m*$,s[2]=x*C+v*w+p*L+u*N,s[6]=x*R+v*j+p*G+u*I,s[10]=x*U+v*q+p*X+u*H,s[14]=x*M+v*ie+p*Y+u*$,s[3]=_*C+g*w+S*L+b*N,s[7]=_*R+g*j+S*G+b*I,s[11]=_*U+g*q+S*X+b*H,s[15]=_*M+g*ie+S*Y+b*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],x=e[3],v=e[7],p=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],x=e[12],v=e[13],p=e[14],u=e[15],_=h*p*c-v*f*c+v*l*m-a*p*m-h*l*u+a*f*u,g=x*f*c-d*p*c-x*l*m+o*p*m+d*l*u-o*f*u,S=d*v*c-x*h*c+x*a*m-o*v*m-d*a*u+o*h*u,b=x*h*l-d*v*l-x*a*f+o*v*f+d*a*p-o*h*p,C=n*_+i*g+r*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(v*f*s-h*p*s-v*r*m+i*p*m+h*r*u-i*f*u)*R,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*R,e[4]=g*R,e[5]=(d*p*s-x*f*s+x*r*m-n*p*m-d*r*u+n*f*u)*R,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*R,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*R,e[8]=S*R,e[9]=(x*h*s-d*v*s-x*i*m+n*v*m+d*i*u-n*h*u)*R,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*R,e[12]=b*R,e[13]=(d*v*r-x*h*r+x*i*f-n*v*f-d*i*p+n*h*p)*R,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*R,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,x=s*h,v=o*d,p=o*h,u=a*h,_=l*c,g=l*d,S=l*h,b=i.x,C=i.y,R=i.z;return r[0]=(1-(v+u))*b,r[1]=(m+S)*b,r[2]=(x-g)*b,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(f+u))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(x+g)*R,r[9]=(p-_)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(a===ci)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ul)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let x,v;if(a===ci)x=(o+s)*h,v=-2*h;else if(a===ul)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new B,Nn=new Rt,yy=new B(0,0,0),Sy=new B(1,1,1),Mi=new B,ra=new B,on=new B,Yh=new Rt,$h=new bo;class Ll{constructor(e=0,n=0,i=0,r=Ll.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ll.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Kh=new B,Dr=new bo,ei=new Rt,sa=new B,Bs=new B,Ey=new B,Ty=new bo,Zh=new B(1,0,0),Qh=new B(0,1,0),Jh=new B(0,0,1),wy={type:"added"},Ay={type:"removed"};class rn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new B,n=new Ll,i=new bo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Be}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sa.copy(e):sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,sa,this.up):ei.lookAt(sa,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ei),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ay)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new B,ti=new B,Ac=new B,ni=new B,Ur=new B,Ir=new B,ep=new B,Rc=new B,Cc=new B,bc=new B;let oa=!1;class On{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ti.subVectors(i,n),Ac.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ti),l=Dn.dot(Ac),c=ti.dot(ti),d=ti.dot(Ac),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,s,o,a,l){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ti.subVectors(e,n),Dn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Ir.subVectors(s,i),Rc.subVectors(e,i);const l=Ur.dot(Rc),c=Ir.dot(Rc);if(l<=0&&c<=0)return n.copy(i);Cc.subVectors(e,r);const d=Ur.dot(Cc),h=Ir.dot(Cc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ur,o);bc.subVectors(e,s);const m=Ur.dot(bc),x=Ir.dot(bc);if(x>=0&&m<=x)return n.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ir,a);const p=d*x-m*h;if(p<=0&&h-d>=0&&m-x>=0)return ep.subVectors(s,r),a=(h-d)/(h-d+(m-x)),n.copy(r).addScaledVector(ep,a);const u=1/(p+v+f);return o=v*u,a=f*u,n.copy(i).addScaledVector(Ur,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=fy(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pc(o,s,e+1/3),this.g=Pc(o,s,e),this.b=Pc(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bt){const i=m_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return $e.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Zt(Ot.r*255,0,255))*65536+Math.round(Zt(Ot.g*255,0,255))*256+Math.round(Zt(Ot.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=bt){$e.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(aa);const i=gc(Ei.h,aa.h,n),r=gc(Ei.s,aa.s,n),s=gc(Ei.l,aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new je;je.NAMES=m_;let Ry=0;class Lo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=us,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Fu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Fu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class g_ extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new B,la=new Ke;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)la.fromBufferAttribute(this,n),la.applyMatrix3(e),this.setXY(n,la.x,la.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class __ extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v_ extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gr extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Cy=0;const _n=new Rt,Lc=new rn,Fr=new B,an=new Po,Hs=new Po,Tt=new B;class _i extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c_(e)?v_:__)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(an.min,Hs.min),an.expandByPoint(Tt),Tt.addVectors(an.max,Hs.max),an.expandByPoint(Tt)):(an.expandByPoint(Hs.min),an.expandByPoint(Hs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Tt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Tt.add(Fr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new B,d[w]=new B;const h=new B,f=new B,m=new B,x=new Ke,v=new Ke,p=new Ke,u=new B,_=new B;function g(w,j,q){h.fromArray(r,w*3),f.fromArray(r,j*3),m.fromArray(r,q*3),x.fromArray(o,w*2),v.fromArray(o,j*2),p.fromArray(o,q*2),f.sub(h),m.sub(h),v.sub(x),p.sub(x);const ie=1/(v.x*p.y-p.x*v.y);isFinite(ie)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ie),_.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ie),c[w].add(u),c[j].add(u),c[q].add(u),d[w].add(_),d[j].add(_),d[q].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,j=S.length;w<j;++w){const q=S[w],ie=q.start,L=q.count;for(let G=ie,X=ie+L;G<X;G+=3)g(i[G+0],i[G+1],i[G+2])}const b=new B,C=new B,R=new B,U=new B;function M(w){R.fromArray(s,w*3),U.copy(R);const j=c[w];b.copy(j),b.sub(R.multiplyScalar(R.dot(j))).normalize(),C.crossVectors(U,j);const ie=C.dot(d[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ie}for(let w=0,j=S.length;w<j;++w){const q=S[w],ie=q.start,L=q.count;for(let G=ie,X=ie+L;G<X;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,d=new B,h=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*d;for(let u=0;u<d;u++)f[x++]=c[m++]}return new Gn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new Rt,er=new h_,ca=new Pl,np=new B,Or=new B,kr=new B,zr=new B,Nc=new B,ua=new B,da=new Ke,fa=new Ke,ha=new Ke,ip=new B,rp=new B,sp=new B,pa=new B,ma=new B;class Ni extends rn{constructor(e=new _i,n=new g_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Nc.fromBufferAttribute(h,e),o?ua.addScaledVector(Nc,d):ua.addScaledVector(Nc.sub(n),d))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(ca.containsPoint(er.origin)===!1&&(er.intersectSphere(ca,np)===null||er.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(s).invert(),er.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const p=f[x],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,b=g;S<b;S+=3){const C=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);r=ga(this,u,e,i,c,d,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=ga(this,o,e,i,c,d,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const p=f[x],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,b=g;S<b;S+=3){const C=S,R=S+1,U=S+2;r=ga(this,u,e,i,c,d,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,u=v;p<u;p+=3){const _=p,g=p+1,S=p+2;r=ga(this,o,e,i,c,d,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function by(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Or),t.getVertexPosition(l,kr),t.getVertexPosition(c,zr);const d=by(t,e,n,i,Or,kr,zr,pa);if(d){r&&(da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),d.uv=On.getInterpolation(pa,Or,kr,zr,da,fa,ha,new Ke)),s&&(da.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),d.uv1=On.getInterpolation(pa,Or,kr,zr,da,fa,ha,new Ke),d.uv2=d.uv1),o&&(ip.fromBufferAttribute(o,a),rp.fromBufferAttribute(o,l),sp.fromBufferAttribute(o,c),d.normal=On.getInterpolation(pa,Or,kr,zr,ip,rp,sp,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};On.getNormal(Or,kr,zr,h.normal),d.face=h}return d}class No extends _i{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gr(c,3)),this.setAttribute("normal",new gr(d,3)),this.setAttribute("uv",new gr(h,2));function x(v,p,u,_,g,S,b,C,R,U,M){const w=S/R,j=b/U,q=S/2,ie=b/2,L=C/2,G=R+1,X=U+1;let Y=0,N=0;const I=new B;for(let H=0;H<X;H++){const $=H*j-ie;for(let Z=0;Z<G;Z++){const W=Z*w-q;I[v]=W*_,I[p]=$*g,I[u]=L,c.push(I.x,I.y,I.z),I[v]=0,I[p]=0,I[u]=C>0?1:-1,d.push(I.x,I.y,I.z),h.push(Z/R),h.push(1-H/U),Y+=1}}for(let H=0;H<U;H++)for(let $=0;$<R;$++){const Z=f+$+G*H,W=f+$+G*(H+1),K=f+($+1)+G*(H+1),le=f+($+1)+G*H;l.push(Z,W,le),l.push(W,K,le),N+=6}a.addGroup(m,N,M),m+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const r in i)e[r]=i[r]}return e}function Py(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x_(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}const Ly={clone:Ms,merge:Vt};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class y_ extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends y_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gu*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Hr=1;class Uy extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Br,Hr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Br,Hr,e,n);s.layers=this.layers,this.add(s);const o=new Tn(Br,Hr,e,n);o.layers=this.layers,this.add(o);const a=new Tn(Br,Hr,e,n);a.layers=this.layers,this.add(a);const l=new Tn(Br,Hr,e,n);l.layers=this.layers,this.add(l);const c=new Tn(Br,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class S_ extends fn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:xs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iy extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?bt:wn),this.texture=new S_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new No(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Hi});s.uniforms.tEquirect.value=n;const o=new Ni(r,s),a=n.minFilter;return n.minFilter===So&&(n.minFilter=En),new Uy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Dc=new B,Fy=new B,Oy=new Be;class rr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Dc.subVectors(i,n).cross(Fy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Oy.getNormalMatrix(e),r=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Pl,_a=new B;class M_{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],x=r[9],v=r[10],p=r[11],u=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-u).normalize(),i[1].setComponents(l+s,f+c,p+m,S+u).normalize(),i[2].setComponents(l+o,f+d,p+x,S+_).normalize(),i[3].setComponents(l-o,f-d,p-x,S-_).normalize(),i[4].setComponents(l-a,f-h,p-v,S-g).normalize(),n===ci)i[5].setComponents(l+a,f+h,p+v,S+g).normalize();else if(n===ul)i[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ky(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=t.SHORT;else if(h instanceof Uint32Array)v=t.UNSIGNED_INT;else if(h instanceof Int32Array)v=t.INT;else if(h instanceof Int8Array)v=t.BYTE;else if(h instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,x=d.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let v=0,p=x.length;v<p;v++){const u=x[v];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Vd extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],x=[],v=[],p=[];for(let u=0;u<d;u++){const _=u*f-o;for(let g=0;g<c;g++){const S=g*h-s;x.push(S,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,S=_+c*(u+1),b=_+1+c*(u+1),C=_+1+c*u;m.push(g,S,C),m.push(S,b,C)}this.setIndex(m),this.setAttribute("position",new gr(x,3)),this.setAttribute("normal",new gr(v,3)),this.setAttribute("uv",new gr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.width,e.height,e.widthSegments,e.heightSegments)}}var zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,CS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,US=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,XM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:zy,alphahash_pars_fragment:By,alphamap_fragment:Hy,alphamap_pars_fragment:Gy,alphatest_fragment:Vy,alphatest_pars_fragment:Wy,aomap_fragment:jy,aomap_pars_fragment:Xy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:$y,beginnormal_vertex:Ky,bsdfs:Zy,iridescence_fragment:Qy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:oS,color_vertex:aS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:dS,displacementmap_vertex:fS,emissivemap_fragment:hS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:_S,envmap_common_pars_fragment:vS,envmap_pars_fragment:xS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:NS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_fragment:RS,lightmap_pars_fragment:CS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:PS,lights_pars_begin:LS,lights_toon_fragment:DS,lights_toon_pars_fragment:US,lights_phong_fragment:IS,lights_phong_pars_fragment:FS,lights_physical_fragment:OS,lights_physical_pars_fragment:kS,lights_fragment_begin:zS,lights_fragment_maps:BS,lights_fragment_end:HS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:jS,map_fragment:XS,map_pars_fragment:qS,map_particle_fragment:YS,map_particle_pars_fragment:$S,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphcolor_vertex:QS,morphnormal_vertex:JS,morphtarget_pars_vertex:eM,morphtarget_vertex:tM,normal_fragment_begin:nM,normal_fragment_maps:iM,normal_pars_fragment:rM,normal_pars_vertex:sM,normal_vertex:oM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:lM,clearcoat_normal_fragment_maps:cM,clearcoat_pars_fragment:uM,iridescence_pars_fragment:dM,opaque_fragment:fM,packing:hM,premultiplied_alpha_fragment:pM,project_vertex:mM,dithering_fragment:gM,dithering_pars_fragment:_M,roughnessmap_fragment:vM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:SM,shadowmap_vertex:MM,shadowmask_pars_fragment:EM,skinbase_vertex:TM,skinning_pars_vertex:wM,skinning_vertex:AM,skinnormal_vertex:RM,specularmap_fragment:CM,specularmap_pars_fragment:bM,tonemapping_fragment:PM,tonemapping_pars_fragment:LM,transmission_fragment:NM,transmission_pars_fragment:DM,uv_pars_fragment:UM,uv_pars_vertex:IM,uv_vertex:FM,worldpos_vertex:OM,background_vert:kM,background_frag:zM,backgroundCube_vert:BM,backgroundCube_frag:HM,cube_vert:GM,cube_frag:VM,depth_vert:WM,depth_frag:jM,distanceRGBA_vert:XM,distanceRGBA_frag:qM,equirect_vert:YM,equirect_frag:$M,linedashed_vert:KM,linedashed_frag:ZM,meshbasic_vert:QM,meshbasic_frag:JM,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:aE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:dE,points_vert:fE,points_frag:hE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:_E},se={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},qn={basic:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Vt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Vt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Vt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Vt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Vt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Vt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Vt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Vt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Vt([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Vt([se.lights,se.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};qn.physical={uniforms:Vt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const va={r:0,b:0,g:0};function vE(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function x(p,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Cl)?(d===void 0&&(d=new Ni(new No(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Ms(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,(h!==g||f!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ni(new Vd(2,2),new Er({name:"BackgroundMaterial",uniforms:Ms(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(va,x_(t)),i.buffers.color.setClear(va.r,va.g,va.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function xE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(L,G,X,Y,N){let I=!1;if(o){const H=v(Y,X,G);c!==H&&(c=H,m(c.object)),I=u(L,Y,X,N),I&&_(L,Y,X,N)}else{const H=G.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==H)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=H,I=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,U(L,G,X,Y),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,G,X){const Y=X.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let I=N[G.id];I===void 0&&(I={},N[G.id]=I);let H=I[Y];return H===void 0&&(H=p(f()),I[Y]=H),H}function p(L){const G=[],X=[],Y=[];for(let N=0;N<r;N++)G[N]=0,X[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:Y,object:L,attributes:{},index:null}}function u(L,G,X,Y){const N=c.attributes,I=G.attributes;let H=0;const $=X.getAttributes();for(const Z in $)if($[Z].location>=0){const K=N[Z];let le=I[Z];if(le===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;H++}return c.attributesNum!==H||c.index!==Y}function _(L,G,X,Y){const N={},I=G.attributes;let H=0;const $=X.getAttributes();for(const Z in $)if($[Z].location>=0){let K=I[Z];K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),N[Z]=le,H++}c.attributes=N,c.attributesNum=H,c.index=Y}function g(){const L=c.newAttributes;for(let G=0,X=L.length;G<X;G++)L[G]=0}function S(L){b(L,0)}function b(L,G){const X=c.newAttributes,Y=c.enabledAttributes,N=c.attributeDivisors;X[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),N[L]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),N[L]=G)}function C(){const L=c.newAttributes,G=c.enabledAttributes;for(let X=0,Y=G.length;X<Y;X++)G[X]!==L[X]&&(t.disableVertexAttribArray(X),G[X]=0)}function R(L,G,X,Y,N,I,H){H===!0?t.vertexAttribIPointer(L,G,X,N,I):t.vertexAttribPointer(L,G,X,Y,N,I)}function U(L,G,X,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=Y.attributes,I=X.getAttributes(),H=G.defaultAttributeValues;for(const $ in I){const Z=I[$];if(Z.location>=0){let W=N[$];if(W===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const K=W.normalized,le=W.itemSize,fe=n.get(W);if(fe===void 0)continue;const me=fe.buffer,Pe=fe.type,Ne=fe.bytesPerElement,Te=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||W.gpuType===e_);if(W.isInterleavedBufferAttribute){const Ve=W.data,F=Ve.stride,Bt=W.offset;if(Ve.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)b(Z.location+ye,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let ye=0;ye<Z.locationSize;ye++)S(Z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ye=0;ye<Z.locationSize;ye++)R(Z.location+ye,le/Z.locationSize,Pe,K,F*Ne,(Bt+le/Z.locationSize*ye)*Ne,Te)}else{if(W.isInstancedBufferAttribute){for(let Ve=0;Ve<Z.locationSize;Ve++)b(Z.location+Ve,W.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)S(Z.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ve=0;Ve<Z.locationSize;Ve++)R(Z.location+Ve,le/Z.locationSize,Pe,K,le*Ne,le/Z.locationSize*Ve*Ne,Te)}}else if(H!==void 0){const K=H[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}C()}function M(){q();for(const L in a){const G=a[L];for(const X in G){const Y=G[X];for(const N in Y)x(Y[N].object),delete Y[N];delete G[X]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const X in G){const Y=G[X];for(const N in Y)x(Y[N].object),delete Y[N];delete G[X]}delete a[L.id]}function j(L){for(const G in a){const X=a[G];if(X[L.id]===void 0)continue;const Y=X[L.id];for(const N in Y)x(Y[N].object),delete Y[N];delete X[L.id]}}function q(){ie(),d=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:j,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function yE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function SE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,S=o||e.has("OES_texture_float"),b=g&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:C}}function ME(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const _=s?0:i,g=_*4;let S=u.clippingState||null;l.value=S,S=d(x,f,g,m);for(let b=0;b!==g;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const u=m+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==v;++g,S+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function EE(t){let e=new WeakMap;function n(o,a){return a===Ou?o.mapping=xs:a===ku&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ou||a===ku)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Iy(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TE extends y_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,op=[.125,.215,.35,.446,.526,.582],ar=20,Uc=new TE,ap=new je;let Ic=null,Fc=0,Oc=0;const sr=(1+Math.sqrt(5))/2,Gr=1/sr,lp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,sr,Gr),new B(0,sr,-Gr),new B(Gr,0,sr),new B(-Gr,0,sr),new B(sr,Gr,0),new B(-sr,Gr,0)];class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ic=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Fc,Oc),e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Mo,format:zn,colorSpace:mi,depthBuffer:!1},r=up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(s)),this._blurMaterial=AE(s,e,n)}return r}_compileMaterial(e){const n=new Ni(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ap),d.toneMapping=Gi,d.autoClear=!1;const m=new g_({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Ni(new No,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ap),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;xa(r,_*g,u>2?g:0,g,g),d.setRenderTarget(r),v&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lp[(r-1)%lp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ni(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ar-1),v=s/x,p=isFinite(s)?1+Math.floor(d*v):ar;p>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ar}`);const u=[];let _=0;for(let R=0;R<ar;++R){const U=R/v,M=Math.exp(-U*U/2);u.push(M),R===0?_+=M:R<p&&(_+=2*M)}for(let R=0;R<u.length;R++)u[R]=u[R]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const S=this._sizeLods[r],b=3*S*(r>g-ns?r-g+ns:0),C=4*(this._cubeSize-S);xa(n,b,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Uc)}}function wE(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=op[o-t+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,v=3,p=2,u=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),S=new Float32Array(u*x*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,U=C>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(M,v*x*C),g.set(f,p*x*C);const w=[C,C,C,C,C,C];S.set(w,u*x*C)}const b=new _i;b.setAttribute("position",new Gn(_,v)),b.setAttribute("uv",new Gn(g,p)),b.setAttribute("faceIndex",new Gn(S,u)),e.push(b),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function up(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=Cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function AE(t,e,n){const i=new Float32Array(ar),r=new B(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function dp(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fp(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ou||l===ku,d=l===xs||l===ys;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new cp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new cp(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function CE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const v=f.morphAttributes[x];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,u=v.length;p<u;p++)e.update(v[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,S=_.length;g<S;g+=3){const b=_[g+0],C=_[g+1],R=_[g+2];f.push(b,C,C,R,R,b)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const b=g+0,C=g+1,R=g+2;f.push(b,C,C,R,R,b)}}else return;const p=new(c_(f)?v_:__)(f,1);p.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function PE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function h(m,x,v){if(v===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,m*l,v),n.update(x,s,v)}function f(m,x,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,v);let u=0;for(let _=0;_<v;_++)u+=x[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function LE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NE(t,e){return t[0]-e[0]}function DE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function UE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==v){let G=function(){ie.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),b===!0&&(M=3);let w=d.attributes.position.count*M,j=1;w>e.maxTextureSize&&(j=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*j*4*v),ie=new f_(q,w,j,v);ie.type=Li,ie.needsUpdate=!0;const L=M*4;for(let X=0;X<v;X++){const Y=C[X],N=R[X],I=U[X],H=w*j*4*X;for(let $=0;$<Y.count;$++){const Z=$*L;g===!0&&(o.fromBufferAttribute(Y,$),q[H+Z+0]=o.x,q[H+Z+1]=o.y,q[H+Z+2]=o.z,q[H+Z+3]=0),S===!0&&(o.fromBufferAttribute(N,$),q[H+Z+4]=o.x,q[H+Z+5]=o.y,q[H+Z+6]=o.z,q[H+Z+7]=0),b===!0&&(o.fromBufferAttribute(I,$),q[H+Z+8]=o.x,q[H+Z+9]=o.y,q[H+Z+10]=o.z,q[H+Z+11]=I.itemSize===4?o.w:1)}}p={count:v,texture:ie,size:new Ke(w,j)},s.set(d,p),d.addEventListener("dispose",G)}let u=0;for(let g=0;g<f.length;g++)u+=f[g];const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let v=i[d.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];i[d.id]=v}for(let S=0;S<x;S++){const b=v[S];b[0]=S,b[1]=f[S]}v.sort(DE);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(NE);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const b=a[S],C=b[0],R=b[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&d.getAttribute("morphTarget"+S)!==p[C]&&d.setAttribute("morphTarget"+S,p[C]),u&&d.getAttribute("morphNormal"+S)!==u[C]&&d.setAttribute("morphNormal"+S,u[C]),r[S]=R,_+=R):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const g=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function IE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class T_ extends fn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:pr,d!==pr&&d!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===pr&&(i=Pi),i===void 0&&d===Ss&&(i=hr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const w_=new fn,A_=new T_(1,1);A_.compareFunction=l_;const R_=new f_,C_=new vy,b_=new S_,hp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function Rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hp[r];if(s===void 0&&(s=new Float32Array(r),hp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nl(t,e){let n=pp[e];n===void 0&&(n=new Int32Array(e),pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;_p.set(i),t.uniformMatrix2fv(this.addr,!1,_p),St(n,i)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;gp.set(i),t.uniformMatrix3fv(this.addr,!1,gp),St(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;mp.set(i),t.uniformMatrix4fv(this.addr,!1,mp),St(n,i)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?A_:w_;n.setTexture2D(e||s,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C_,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function tT(t){switch(t){case 5126:return FE;case 35664:return OE;case 35665:return kE;case 35666:return zE;case 35674:return BE;case 35675:return HE;case 35676:return GE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return jE;case 35669:case 35673:return XE;case 5125:return qE;case 36294:return YE;case 36295:return $E;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(t,e){t.uniform1fv(this.addr,e)}function iT(t,e){const n=Rs(e,this.size,2);t.uniform2fv(this.addr,n)}function rT(t,e){const n=Rs(e,this.size,3);t.uniform3fv(this.addr,n)}function sT(t,e){const n=Rs(e,this.size,4);t.uniform4fv(this.addr,n)}function oT(t,e){const n=Rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aT(t,e){const n=Rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lT(t,e){const n=Rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cT(t,e){t.uniform1iv(this.addr,e)}function uT(t,e){t.uniform2iv(this.addr,e)}function dT(t,e){t.uniform3iv(this.addr,e)}function fT(t,e){t.uniform4iv(this.addr,e)}function hT(t,e){t.uniform1uiv(this.addr,e)}function pT(t,e){t.uniform2uiv(this.addr,e)}function mT(t,e){t.uniform3uiv(this.addr,e)}function gT(t,e){t.uniform4uiv(this.addr,e)}function _T(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||w_,s[o])}function vT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||C_,s[o])}function xT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b_,s[o])}function yT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||R_,s[o])}function ST(t){switch(t){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return aT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return dT;case 35669:case 35673:return fT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}class MT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tT(n.type)}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ST(n.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function vp(t,e){t.seq.push(e),t.map[e.id]=e}function wT(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),o=kc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vp(n,c===void 0?new MT(a,t,e):new ET(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new TT(a),vp(n,h)),n=h}}}class Ia{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AT=37297;let RT=0;function CT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===cl&&n===ll?i="LinearDisplayP3ToLinearSRGB":e===ll&&n===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case bl:return[i,"LinearTransferOETF"];case bt:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CT(t.getShaderSource(e),o)}else return r}function PT(t,e){const n=bT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LT(t,e){let n;switch(e){case Bx:n="Linear";break;case Hx:n="Reinhard";break;case Gx:n="OptimizedCineon";break;case Vx:n="ACESFilmic";break;case jx:n="AgX";break;case Wx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function NT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function DT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function UT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function is(t){return t!==""}function Sp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(t){return t.replace(FT,kT)}const OT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kT(t,e){let n=Ue[e];if(n===void 0){const i=OT.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wu(n)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(t){return t.replace(zT,BT)}function BT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function GT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function WT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qg:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function jT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HT(n),c=GT(n),d=VT(n),h=WT(n),f=jT(n),m=n.isWebGL2?"":NT(n),x=DT(n),v=UT(s),p=r.createProgram();let u,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(is).join(`
`),u.length>0&&(u+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(is).join(`
`),_.length>0&&(_+=`
`)):(u=[Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),_=[m,Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Gi?LT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,PT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(is).join(`
`)),o=Wu(o),o=Sp(o,n),o=Mp(o,n),a=Wu(a),a=Sp(a,n),a=Mp(a,n),o=Ep(o),a=Ep(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=g+u+o,b=g+_+a,C=xp(r,r.VERTEX_SHADER,S),R=xp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,C),r.attachShader(p,R),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function U(q){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(R).trim();let X=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,R);else{const N=yp(r,C,"vertex"),I=yp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+N+`
`+I)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||G==="")&&(Y=!1);Y&&(q.diagnostics={runnable:X,programLog:ie,vertexShader:{log:L,prefix:u},fragmentShader:{log:G,prefix:_}})}r.deleteShader(C),r.deleteShader(R),M=new Ia(r,p),w=IT(r,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(p,AT)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=R,this}let qT=0;class YT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $T(e),n.set(e,i)),i}}class $T{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}}function KT(t,e,n,i,r,s,o){const a=new p_,l=new YT,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,w,j,q,ie){const L=q.fog,G=ie.geometry,X=M.isMeshStandardMaterial?q.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),N=Y&&Y.mapping===Cl?Y.image.height:null,I=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$=H!==void 0?H.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let W,K,le,fe;if(I){const Ht=qn[I];W=Ht.vertexShader,K=Ht.fragmentShader}else W=M.vertexShader,K=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const me=t.getRenderTarget(),Pe=ie.isInstancedMesh===!0,Ne=ie.isBatchedMesh===!0,Te=!!M.map,Ve=!!M.matcap,F=!!Y,Bt=!!M.aoMap,ye=!!M.lightMap,Ce=!!M.bumpMap,ge=!!M.normalMap,st=!!M.displacementMap,Ie=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,k=M.anisotropy>0,te=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,_e=M.transmission>0,ce=k&&!!M.anisotropyMap,he=te&&!!M.clearcoatMap,Ee=te&&!!M.clearcoatNormalMap,Fe=te&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,Ye=J&&!!M.iridescenceThicknessMap,He=ne&&!!M.sheenColorMap,Re=ne&&!!M.sheenRoughnessMap,xe=!!M.specularMap,pe=!!M.specularColorMap,De=!!M.specularIntensityMap,Xe=_e&&!!M.transmissionMap,ut=_e&&!!M.thicknessMap,ke=!!M.gradientMap,re=!!M.alphaMap,P=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,we=!!G.attributes.uv1,Se=!!G.attributes.uv2,Ze=!!G.attributes.uv3;let Qe=Gi;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=t.toneMapping),{isWebGL2:d,shaderID:I,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:K,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ne,instancing:Pe,instancingColor:Pe&&ie.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:mi,map:Te,matcap:Ve,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:N,aoMap:Bt,lightMap:ye,bumpMap:Ce,normalMap:ge,displacementMap:f&&st,emissiveMap:Ie,normalMapObjectSpace:ge&&M.normalMapType===ry,normalMapTangentSpace:ge&&M.normalMapType===iy,metalnessMap:A,roughnessMap:y,anisotropy:k,anisotropyMap:ce,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ye,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:pe,specularIntensityMap:De,transmission:_e,transmissionMap:Xe,thicknessMap:ut,gradientMap:ke,opaque:M.transparent===!1&&M.blending===us,alphaMap:re,alphaTest:P,alphaHash:oe,combine:M.combine,mapUv:Te&&v(M.map.channel),aoMapUv:Bt&&v(M.aoMap.channel),lightMapUv:ye&&v(M.lightMap.channel),bumpMapUv:Ce&&v(M.bumpMap.channel),normalMapUv:ge&&v(M.normalMap.channel),displacementMapUv:st&&v(M.displacementMap.channel),emissiveMapUv:Ie&&v(M.emissiveMap.channel),metalnessMapUv:A&&v(M.metalnessMap.channel),roughnessMapUv:y&&v(M.roughnessMap.channel),anisotropyMapUv:ce&&v(M.anisotropyMap.channel),clearcoatMapUv:he&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(M.sheenRoughnessMap.channel),specularMapUv:xe&&v(M.specularMap.channel),specularColorMapUv:pe&&v(M.specularColorMap.channel),specularIntensityMapUv:De&&v(M.specularIntensityMap.channel),transmissionMapUv:Xe&&v(M.transmissionMap.channel),thicknessMapUv:ut&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ge||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Se,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(Te||re),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)w.push(j),w.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const w=x[M.type];let j;if(w){const q=qn[w];j=Ly.clone(q.uniforms)}else j=M.uniforms;return j}function b(M,w){let j;for(let q=0,ie=c.length;q<ie;q++){const L=c[q];if(L.cacheKey===w){j=L,++j.usedTimes;break}}return j===void 0&&(j=new XT(t,w,M,s),c.push(j)),j}function C(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:b,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:U}}function ZT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function QT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ap(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,x,v,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=v,u.group=p),e++,u}function a(h,f,m,x,v,p){const u=o(h,f,m,x,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,x,v,p){const u=o(h,f,m,x,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||QT),i.length>1&&i.sort(f||wp),r.length>1&&r.sort(f||wp)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function JT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ap,t.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function e1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new je};break;case"SpotLight":n={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function t1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let n1=0;function i1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function r1(t,e){const n=new e1,i=t1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new B);const s=new B,o=new Rt,a=new Rt;function l(d,h){let f=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,u=0,_=0,g=0,S=0,b=0,C=0,R=0,U=0,M=0;d.sort(i1);const w=h===!0?Math.PI:1;for(let q=0,ie=d.length;q<ie;q++){const L=d[q],G=L.color,X=L.intensity,Y=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*X*w,m+=G.g*X*w,x+=G.b*X*w;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],X);M++}else if(L.isDirectionalLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const H=L.shadow,$=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=N,r.directionalShadowMatrix[v]=L.shadow.matrix,S++}r.directional[v]=I,v++}else if(L.isSpotLight){const I=n.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(G).multiplyScalar(X*w),I.distance=Y,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[u]=I;const H=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,H.updateMatrices(L),L.castShadow&&U++),r.spotLightMatrix[u]=H.matrix,L.castShadow){const $=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[u]=$,r.spotShadowMap[u]=N,C++}u++}else if(L.isRectAreaLight){const I=n.get(L);I.color.copy(G).multiplyScalar(X),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=I,_++}else if(L.isPointLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*w),I.distance=L.distance,I.decay=L.decay,L.castShadow){const H=L.shadow,$=i.get(L);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,b++}r.point[p]=I,p++}else if(L.isHemisphereLight){const I=n.get(L);I.skyColor.copy(L.color).multiplyScalar(X*w),I.groundColor.copy(L.groundColor).multiplyScalar(X*w),r.hemi[g]=I,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==v||j.pointLength!==p||j.spotLength!==u||j.rectAreaLength!==_||j.hemiLength!==g||j.numDirectionalShadows!==S||j.numPointShadows!==b||j.numSpotShadows!==C||j.numSpotMaps!==R||j.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,j.directionalLength=v,j.pointLength=p,j.spotLength=u,j.rectAreaLength=_,j.hemiLength=g,j.numDirectionalShadows=S,j.numPointShadows=b,j.numSpotShadows=C,j.numSpotMaps=R,j.numLightProbes=M,r.version=n1++)}function c(d,h){let f=0,m=0,x=0,v=0,p=0;const u=h.matrixWorldInverse;for(let _=0,g=d.length;_<g;_++){const S=d[_];if(S.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(S.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Rp(t,e){const n=new r1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function s1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Rp(t,e),n.set(s,[l])):o>=a.length?(l=new Rp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class o1 extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u1(t,e,n){let i=new M_;const r=new Ke,s=new Ke,o=new Pt,a=new o1({depthPacking:ny}),l=new a1,c={},d=n.maxTextureSize,h={[Xi]:nn,[nn]:Xi,[oi]:oi},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:l1,fragmentShader:c1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new _i;x.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ni(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let u=this.type;this.render=function(C,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),w=t.getActiveCubeFace(),j=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Hi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ie=u!==ii&&this.type===ii,L=u===ii&&this.type!==ii;for(let G=0,X=C.length;G<X;G++){const Y=C[G],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const I=N.getFrameExtents();if(r.multiply(I),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,N.mapSize.y=s.y)),N.map===null||ie===!0||L===!0){const $=this.type!==ii?{minFilter:jt,magFilter:jt}:{};N.map!==null&&N.map.dispose(),N.map=new Mr(r.x,r.y,$),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const H=N.getViewportCount();for(let $=0;$<H;$++){const Z=N.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),q.viewport(o),N.updateMatrices(Y,$),i=N.getFrustum(),S(R,U,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===ii&&_(N,U),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,w,j)};function _(C,R){const U=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,U,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,U,m,v,null)}function g(C,R,U,M){let w=null;const j=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(j!==void 0)w=j;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=w.uuid,ie=R.uuid;let L=c[q];L===void 0&&(L={},c[q]=L);let G=L[ie];G===void 0&&(G=w.clone(),L[ie]=G,R.addEventListener("dispose",b)),w=G}if(w.visible=R.visible,w.wireframe=R.wireframe,M===ii?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=t.properties.get(w);q.light=U}return w}function S(C,R,U,M,w){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),L=C.material;if(Array.isArray(L)){const G=ie.groups;for(let X=0,Y=G.length;X<Y;X++){const N=G[X],I=L[N.materialIndex];if(I&&I.visible){const H=g(C,I,M,w);C.onBeforeShadow(t,C,R,U,ie,H,N),t.renderBufferDirect(U,null,ie,H,C,N),C.onAfterShadow(t,C,R,U,ie,H,N)}}}else if(L.visible){const G=g(C,L,M,w);C.onBeforeShadow(t,C,R,U,ie,G,null),t.renderBufferDirect(U,null,ie,G,C,null),C.onAfterShadow(t,C,R,U,ie,G,null)}}const q=C.children;for(let ie=0,L=q.length;ie<L;ie++)S(q[ie],R,U,M,w)}function b(C){C.target.removeEventListener("dispose",b);for(const U in c){const M=c[U],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function d1(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const oe=new Pt;let ae=null;const we=new Pt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!P&&(t.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){P=Se},setClear:function(Se,Ze,Qe,Mt,Ht){Ht===!0&&(Se*=Mt,Ze*=Mt,Qe*=Mt),oe.set(Se,Ze,Qe,Mt),we.equals(oe)===!1&&(t.clearColor(Se,Ze,Qe,Mt),we.copy(oe))},reset:function(){P=!1,ae=null,we.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,ae=null,we=null;return{setTest:function(Se){Se?Ne(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!P&&(t.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Lx:t.depthFunc(t.NEVER);break;case Nx:t.depthFunc(t.ALWAYS);break;case Dx:t.depthFunc(t.LESS);break;case ol:t.depthFunc(t.LEQUAL);break;case Ux:t.depthFunc(t.EQUAL);break;case Ix:t.depthFunc(t.GEQUAL);break;case Fx:t.depthFunc(t.GREATER);break;case Ox:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){P=Se},setClear:function(Se){we!==Se&&(t.clearDepth(Se),we=Se)},reset:function(){P=!1,oe=null,ae=null,we=null}}}function o(){let P=!1,oe=null,ae=null,we=null,Se=null,Ze=null,Qe=null,Mt=null,Ht=null;return{setTest:function(Je){P||(Je?Ne(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!P&&(t.stencilMask(Je),oe=Je)},setFunc:function(Je,Gt,Wn){(ae!==Je||we!==Gt||Se!==Wn)&&(t.stencilFunc(Je,Gt,Wn),ae=Je,we=Gt,Se=Wn)},setOp:function(Je,Gt,Wn){(Ze!==Je||Qe!==Gt||Mt!==Wn)&&(t.stencilOp(Je,Gt,Wn),Ze=Je,Qe=Gt,Mt=Wn)},setLocked:function(Je){P=Je},setClear:function(Je){Ht!==Je&&(t.clearStencil(Je),Ht=Je)},reset:function(){P=!1,oe=null,ae=null,we=null,Se=null,Ze=null,Qe=null,Mt=null,Ht=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},x=new WeakMap,v=[],p=null,u=!1,_=null,g=null,S=null,b=null,C=null,R=null,U=null,M=new je(0,0,0),w=0,j=!1,q=null,ie=null,L=null,G=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=I>=1):H.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=I>=2);let $=null,Z={};const W=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),le=new Pt().fromArray(W),fe=new Pt().fromArray(K);function me(P,oe,ae,we){const Se=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(P,Ze),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<ae;Qe++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(oe+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ze}const Pe={};Pe[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(ol),Ie(!1),A(lh),Ne(t.CULL_FACE),ge(Hi);function Ne(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function Te(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ve(P,oe){return m[P]!==oe?(t.bindFramebuffer(P,oe),m[P]=oe,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function F(P,oe){let ae=v,we=!1;if(P)if(ae=x.get(oe),ae===void 0&&(ae=[],x.set(oe,ae)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(ae.length!==Se.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Se.length;Ze<Qe;Ze++)ae[Ze]=t.COLOR_ATTACHMENT0+Ze;ae.length=Se.length,we=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,we=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Bt(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const ye={[or]:t.FUNC_ADD,[gx]:t.FUNC_SUBTRACT,[_x]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[fh]=t.MIN,ye[hh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[fh]=P.MIN_EXT,ye[hh]=P.MAX_EXT)}const Ce={[vx]:t.ZERO,[xx]:t.ONE,[yx]:t.SRC_COLOR,[Iu]:t.SRC_ALPHA,[Ax]:t.SRC_ALPHA_SATURATE,[Tx]:t.DST_COLOR,[Mx]:t.DST_ALPHA,[Sx]:t.ONE_MINUS_SRC_COLOR,[Fu]:t.ONE_MINUS_SRC_ALPHA,[wx]:t.ONE_MINUS_DST_COLOR,[Ex]:t.ONE_MINUS_DST_ALPHA,[Rx]:t.CONSTANT_COLOR,[Cx]:t.ONE_MINUS_CONSTANT_COLOR,[bx]:t.CONSTANT_ALPHA,[Px]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(P,oe,ae,we,Se,Ze,Qe,Mt,Ht,Je){if(P===Hi){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),P!==mx){if(P!==_||Je!==j){if((g!==or||C!==or)&&(t.blendEquation(t.FUNC_ADD),g=or,C=or),Je)switch(P){case us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.ONE,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,b=null,R=null,U=null,M.set(0,0,0),w=0,_=P,j=Je}return}Se=Se||oe,Ze=Ze||ae,Qe=Qe||we,(oe!==g||Se!==C)&&(t.blendEquationSeparate(ye[oe],ye[Se]),g=oe,C=Se),(ae!==S||we!==b||Ze!==R||Qe!==U)&&(t.blendFuncSeparate(Ce[ae],Ce[we],Ce[Ze],Ce[Qe]),S=ae,b=we,R=Ze,U=Qe),(Mt.equals(M)===!1||Ht!==w)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ht),M.copy(Mt),w=Ht),_=P,j=!1}function st(P,oe){P.side===oi?Te(t.CULL_FACE):Ne(t.CULL_FACE);let ae=P.side===nn;oe&&(ae=!ae),Ie(ae),P.blending===us&&P.transparent===!1?ge(Hi):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const we=P.stencilWrite;c.setTest(we),we&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){q!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),q=P)}function A(P){P!==fx?(Ne(t.CULL_FACE),P!==ie&&(P===lh?t.cullFace(t.BACK):P===hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),ie=P}function y(P){P!==L&&(N&&t.lineWidth(P),L=P)}function k(P,oe,ae){P?(Ne(t.POLYGON_OFFSET_FILL),(G!==oe||X!==ae)&&(t.polygonOffset(oe,ae),G=oe,X=ae)):Te(t.POLYGON_OFFSET_FILL)}function te(P){P?Ne(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function J(P){P===void 0&&(P=t.TEXTURE0+Y-1),$!==P&&(t.activeTexture(P),$=P)}function ne(P,oe,ae){ae===void 0&&($===null?ae=t.TEXTURE0+Y-1:ae=$);let we=Z[ae];we===void 0&&(we={type:void 0,texture:void 0},Z[ae]=we),(we.type!==P||we.texture!==oe)&&($!==ae&&(t.activeTexture(ae),$=ae),t.bindTexture(P,oe||Pe[P]),we.type=P,we.texture=oe)}function _e(){const P=Z[$];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){le.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function Xe(P){fe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function ut(P,oe){let ae=h.get(oe);ae===void 0&&(ae=new WeakMap,h.set(oe,ae));let we=ae.get(P);we===void 0&&(we=t.getUniformBlockIndex(oe,P.name),ae.set(P,we))}function ke(P,oe){const we=h.get(oe).get(P);d.get(oe)!==we&&(t.uniformBlockBinding(oe,we,P.__bindingPointIndex),d.set(oe,we))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},$=null,Z={},m={},x=new WeakMap,v=[],p=null,u=!1,_=null,g=null,S=null,b=null,C=null,R=null,U=null,M=new je(0,0,0),w=0,j=!1,q=null,ie=null,L=null,G=null,X=null,le.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:Te,bindFramebuffer:Ve,drawBuffers:F,useProgram:Bt,setBlending:ge,setMaterial:st,setFlipSided:Ie,setCullFace:A,setLineWidth:y,setPolygonOffset:k,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:ut,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ye,scissor:De,viewport:Xe,reset:re}}function f1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return m?new OffscreenCanvas(A,y):dl("canvas")}function v(A,y,k,te){let J=1;if((A.width>te||A.height>te)&&(J=te/Math.max(A.width,A.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=y?Vu:Math.floor,_e=ne(J*A.width),ce=ne(J*A.height);h===void 0&&(h=x(_e,ce));const he=k?x(_e,ce):h;return he.width=_e,he.height=ce,he.getContext("2d").drawImage(A,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ce+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Vh(A.width)&&Vh(A.height)}function u(A){return a?!1:A.wrapS!==kn||A.wrapT!==kn||A.minFilter!==jt&&A.minFilter!==En}function _(A,y){return A.generateMipmaps&&y&&A.minFilter!==jt&&A.minFilter!==En}function g(A){t.generateMipmap(A)}function S(A,y,k,te,J=!1){if(a===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=y;if(y===t.RED&&(k===t.FLOAT&&(ne=t.R32F),k===t.HALF_FLOAT&&(ne=t.R16F),k===t.UNSIGNED_BYTE&&(ne=t.R8)),y===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ne=t.R8UI),k===t.UNSIGNED_SHORT&&(ne=t.R16UI),k===t.UNSIGNED_INT&&(ne=t.R32UI),k===t.BYTE&&(ne=t.R8I),k===t.SHORT&&(ne=t.R16I),k===t.INT&&(ne=t.R32I)),y===t.RG&&(k===t.FLOAT&&(ne=t.RG32F),k===t.HALF_FLOAT&&(ne=t.RG16F),k===t.UNSIGNED_BYTE&&(ne=t.RG8)),y===t.RGBA){const _e=J?al:$e.getTransfer(te);k===t.FLOAT&&(ne=t.RGBA32F),k===t.HALF_FLOAT&&(ne=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ne=_e===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(A,y,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){return A===jt||A===ph||A===cc?t.NEAREST:t.LINEAR}function R(A){const y=A.target;y.removeEventListener("dispose",R),M(y),y.isVideoTexture&&d.delete(y)}function U(A){const y=A.target;y.removeEventListener("dispose",U),j(y)}function M(A){const y=i.get(A);if(y.__webglInit===void 0)return;const k=A.source,te=f.get(k);if(te){const J=te[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys(te).length===0&&f.delete(k)}i.remove(A)}function w(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const k=A.source,te=f.get(k);delete te[y.__cacheKey],o.memory.textures--}function j(A){const y=A.texture,k=i.get(A),te=i.get(y);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let ne=0;ne<k.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(k.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)t.deleteFramebuffer(k.__webglFramebuffer[J]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,ne=y.length;J<ne;J++){const _e=i.get(y[J]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(y[J])}i.remove(y),i.remove(A)}let q=0;function ie(){q=0}function L(){const A=q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),q+=1,A}function G(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const k=i.get(A);if(A.isVideoTexture&&st(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,A,y);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+y)}function Y(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){le(k,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+y)}function N(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){le(k,A,y);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+y)}function I(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){fe(k,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+y)}const H={[zu]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[Bu]:t.MIRRORED_REPEAT},$={[jt]:t.NEAREST,[ph]:t.NEAREST_MIPMAP_NEAREST,[cc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Xx]:t.LINEAR_MIPMAP_NEAREST,[So]:t.LINEAR_MIPMAP_LINEAR},Z={[sy]:t.NEVER,[dy]:t.ALWAYS,[oy]:t.LESS,[l_]:t.LEQUAL,[ay]:t.EQUAL,[uy]:t.GEQUAL,[ly]:t.GREATER,[cy]:t.NOTEQUAL};function W(A,y,k){if(k?(t.texParameteri(A,t.TEXTURE_WRAP_S,H[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,H[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,H[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,$[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,$[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==kn||y.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==jt&&y.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===jt||y.minFilter!==cc&&y.minFilter!==So||y.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Mo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function K(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));const te=y.source;let J=f.get(te);J===void 0&&(J={},f.set(te,J));const ne=G(y);if(ne!==A.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ne].usedTimes++;const _e=J[A.__cacheKey];_e!==void 0&&(J[A.__cacheKey].usedTimes--,_e.usedTimes===0&&w(y)),A.__cacheKey=ne,A.__webglTexture=J[ne].texture}return k}function le(A,y,k){let te=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=t.TEXTURE_3D);const J=K(A,y),ne=y.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+k);const _e=i.get(ne);if(ne.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const ce=$e.getPrimaries($e.workingColorSpace),he=y.colorSpace===wn?null:$e.getPrimaries(y.colorSpace),Ee=y.colorSpace===wn||ce===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=u(y)&&p(y.image)===!1;let Q=v(y.image,Fe,!1,r.maxTextureSize);Q=Ie(y,Q);const Ye=p(Q)||a,He=s.convert(y.format,y.colorSpace);let Re=s.convert(y.type),xe=S(y.internalFormat,He,Re,y.colorSpace,y.isVideoTexture);W(te,y,Ye);let pe;const De=y.mipmaps,Xe=a&&y.isVideoTexture!==!0&&xe!==o_,ut=_e.__version===void 0||J===!0,ke=b(y,Q,Ye);if(y.isDepthTexture)xe=t.DEPTH_COMPONENT,a?y.type===Li?xe=t.DEPTH_COMPONENT32F:y.type===Pi?xe=t.DEPTH_COMPONENT24:y.type===hr?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:y.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===pr&&xe===t.DEPTH_COMPONENT&&y.type!==Hd&&y.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Pi,Re=s.convert(y.type)),y.format===Ss&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,y.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=hr,Re=s.convert(y.type))),ut&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,xe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Re,null));else if(y.isDataTexture)if(De.length>0&&Ye){Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,ke,xe,De[0].width,De[0].height);for(let re=0,P=De.length;re<P;re++)pe=De[re],Xe?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Re,pe.data):n.texImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Re,pe.data);y.generateMipmaps=!1}else Xe?(ut&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Re,Q.data)):n.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Re,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,xe,De[0].width,De[0].height,Q.depth);for(let re=0,P=De.length;re<P;re++)pe=De[re],y.format!==zn?He!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,He,Re,pe.data)}else{Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,ke,xe,De[0].width,De[0].height);for(let re=0,P=De.length;re<P;re++)pe=De[re],y.format!==zn?He!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Re,pe.data):n.texImage2D(t.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Re,pe.data)}else if(y.isDataArrayTexture)Xe?(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,xe,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Re,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,He,Re,Q.data);else if(y.isData3DTexture)Xe?(ut&&n.texStorage3D(t.TEXTURE_3D,ke,xe,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Re,Q.data)):n.texImage3D(t.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,He,Re,Q.data);else if(y.isFramebufferTexture){if(ut)if(Xe)n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height);else{let re=Q.width,P=Q.height;for(let oe=0;oe<ke;oe++)n.texImage2D(t.TEXTURE_2D,oe,xe,re,P,0,He,Re,null),re>>=1,P>>=1}}else if(De.length>0&&Ye){Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,ke,xe,De[0].width,De[0].height);for(let re=0,P=De.length;re<P;re++)pe=De[re],Xe?n.texSubImage2D(t.TEXTURE_2D,re,0,0,He,Re,pe):n.texImage2D(t.TEXTURE_2D,re,xe,He,Re,pe);y.generateMipmaps=!1}else Xe?(ut&&n.texStorage2D(t.TEXTURE_2D,ke,xe,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Re,Q)):n.texImage2D(t.TEXTURE_2D,0,xe,He,Re,Q);_(y,Ye)&&g(te),_e.__version=ne.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function fe(A,y,k){if(y.image.length!==6)return;const te=K(A,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const _e=$e.getPrimaries($e.workingColorSpace),ce=y.colorSpace===wn?null:$e.getPrimaries(y.colorSpace),he=y.colorSpace===wn||_e===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ee&&!Fe?Q[re]=v(y.image[re],!1,!0,r.maxCubemapSize):Q[re]=Fe?y.image[re].image:y.image[re],Q[re]=Ie(y,Q[re]);const Ye=Q[0],He=p(Ye)||a,Re=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),pe=S(y.internalFormat,Re,xe,y.colorSpace),De=a&&y.isVideoTexture!==!0,Xe=ne.__version===void 0||te===!0;let ut=b(y,Ye,He);W(t.TEXTURE_CUBE_MAP,y,He);let ke;if(Ee){De&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,pe,Ye.width,Ye.height);for(let re=0;re<6;re++){ke=Q[re].mipmaps;for(let P=0;P<ke.length;P++){const oe=ke[P];y.format!==zn?Re!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Re,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,oe.width,oe.height,Re,xe,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,pe,oe.width,oe.height,0,Re,xe,oe.data)}}}else{ke=y.mipmaps,De&&Xe&&(ke.length>0&&ut++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,pe,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Fe){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,Re,xe,Q[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Q[re].width,Q[re].height,0,Re,xe,Q[re].data);for(let P=0;P<ke.length;P++){const ae=ke[P].image[re].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,ae.width,ae.height,Re,xe,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,pe,ae.width,ae.height,0,Re,xe,ae.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,xe,Q[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Re,xe,Q[re]);for(let P=0;P<ke.length;P++){const oe=ke[P];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Re,xe,oe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,pe,Re,xe,oe.image[re])}}}_(y,He)&&g(t.TEXTURE_CUBE_MAP),ne.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function me(A,y,k,te,J,ne){const _e=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),he=S(k.internalFormat,_e,ce,k.colorSpace);if(!i.get(y).__hasExternalTextures){const Fe=Math.max(1,y.width>>ne),Q=Math.max(1,y.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,he,Fe,Q,y.depth,0,_e,ce,null):n.texImage2D(J,ne,he,Fe,Q,0,_e,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(k).__webglTexture,0,Ce(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(k).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(A,y,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||ge(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===Li?te=t.DEPTH_COMPONENT32F:J.type===Pi&&(te=t.DEPTH_COMPONENT24));const ne=Ce(y);ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const te=Ce(y);k&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<te.length;J++){const ne=te[J],_e=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),he=S(ne.internalFormat,_e,ce,ne.colorSpace),Ee=Ce(y);k&&ge(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,he,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,he,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,he,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const te=i.get(y.depthTexture).__webglTexture,J=Ce(y);if(y.depthTexture.format===pr)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(y.depthTexture.format===Ss)ge(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(A){const y=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ne(y.__webglFramebuffer,A)}else if(k){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=t.createRenderbuffer(),Pe(y.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),Pe(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(A,y,k){const te=i.get(A);y!==void 0&&me(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Te(A)}function F(A){const y=A.texture,k=i.get(A),te=i.get(y);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=y.version,o.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,_e=p(A)||a;if(J){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let he=0;he<y.mipmaps.length;he++)k.__webglFramebuffer[ce][he]=t.createFramebuffer()}else k.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)k.__webglFramebuffer[ce]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ce=A.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const Fe=i.get(ce[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){const ce=ne?y:[y];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<ce.length;he++){const Ee=ce[he];k.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const Fe=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),Ye=S(Ee.internalFormat,Fe,Q,Ee.colorSpace,A.isXRRenderTarget===!0),He=Ce(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,k.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),W(t.TEXTURE_CUBE_MAP,y,_e);for(let ce=0;ce<6;ce++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(k.__webglFramebuffer[ce][he],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else me(k.__webglFramebuffer[ce],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(y,_e)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ce=A.texture;for(let he=0,Ee=ce.length;he<Ee;he++){const Fe=ce[he],Q=i.get(Fe);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),W(t.TEXTURE_2D,Fe,_e),me(k.__webglFramebuffer,A,Fe,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),_(Fe,_e)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,te.__webglTexture),W(ce,y,_e),a&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)me(k.__webglFramebuffer[he],A,y,t.COLOR_ATTACHMENT0,ce,he);else me(k.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ce,0);_(y,_e)&&g(ce),n.unbindTexture()}A.depthBuffer&&Te(A)}function Bt(A){const y=p(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,J=k.length;te<J;te++){const ne=k[te];if(_(ne,y)){const _e=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ne).__webglTexture;n.bindTexture(_e,ce),g(_e),n.unbindTexture()}}}function ye(A){if(a&&A.samples>0&&ge(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,te=A.height;let J=t.COLOR_BUFFER_BIT;const ne=[],_e=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(A),he=A.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<y.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){ne.push(t.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&ne.push(_e);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),he){const Q=i.get(y[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,k,te,0,0,k,te,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<y.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Fe=i.get(y[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(r.maxSamples,A.samples)}function ge(A){const y=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function st(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function Ie(A,y){const k=A.colorSpace,te=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Hu||k!==mi&&k!==wn&&($e.getTransfer(k)===nt?a===!1?e.has("EXT_sRGB")===!0&&te===zn?(A.format=Hu,A.minFilter=En,A.generateMipmaps=!1):y=u_.sRGBToLinear(y):(te!==zn||J!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=Ve,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function h1(t,e,n){const i=n.isWebGL2;function r(s,o=wn){let a;const l=$e.getTransfer(o);if(s===Vi)return t.UNSIGNED_BYTE;if(s===t_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===n_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===qx)return t.BYTE;if(s===Yx)return t.SHORT;if(s===Hd)return t.UNSIGNED_SHORT;if(s===e_)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===Mo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$x)return t.ALPHA;if(s===zn)return t.RGBA;if(s===Kx)return t.LUMINANCE;if(s===Zx)return t.LUMINANCE_ALPHA;if(s===pr)return t.DEPTH_COMPONENT;if(s===Ss)return t.DEPTH_STENCIL;if(s===Hu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qx)return t.RED;if(s===i_)return t.RED_INTEGER;if(s===Jx)return t.RG;if(s===r_)return t.RG_INTEGER;if(s===s_)return t.RGBA_INTEGER;if(s===uc||s===dc||s===fc||s===hc)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===_h||s===vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xh)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sh||s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===bh||s===Ph||s===Lh||s===Nh||s===Dh||s===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ch)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pc||s===Ih||s===Fh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pc)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ey||s===Oh||s===kh||s===zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class p1 extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m1={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class g1 extends As{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,x=null;const v=n.getContextAttributes();let p=null,u=null;const _=[],g=[],S=new Ke;let b=null;const C=new Tn;C.layers.enable(1),C.viewport=new Pt;const R=new Tn;R.layers.enable(2),R.viewport=new Pt;const U=[C,R],M=new p1;M.layers.enable(1),M.layers.enable(2);let w=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=_[W];return K===void 0&&(K=new zc,_[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=_[W];return K===void 0&&(K=new zc,_[W]=K),K.getGripSpace()},this.getHand=function(W){let K=_[W];return K===void 0&&(K=new zc,_[W]=K),K.getHandSpace()};function q(W){const K=g.indexOf(W.inputSource);if(K===-1)return;const le=_[K];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",L);for(let W=0;W<_.length;W++){const K=g[W];K!==null&&(g[W]=null,_[W].disconnect(K))}w=null,j=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Mr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,le=null,fe=null;v.depth&&(fe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=v.stencil?Ss:pr,le=v.stencil?hr:Pi);const me={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Mr(f.textureWidth,f.textureHeight,{format:zn,type:Vi,depthTexture:new T_(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(W){for(let K=0;K<W.removed.length;K++){const le=W.removed[K],fe=g.indexOf(le);fe>=0&&(g[fe]=null,_[fe].disconnect(le))}for(let K=0;K<W.added.length;K++){const le=W.added[K];let fe=g.indexOf(le);if(fe===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=g.length){g.push(le),fe=Pe;break}else if(g[Pe]===null){g[Pe]=le,fe=Pe;break}if(fe===-1)break}const me=_[fe];me&&me.connect(le)}}const G=new B,X=new B;function Y(W,K,le){G.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const fe=G.distanceTo(X),me=K.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ne=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],F=(me[9]-1)/me[5],Bt=(me[8]-1)/me[0],ye=(Pe[8]+1)/Pe[0],Ce=Ne*Bt,ge=Ne*ye,st=fe/(-Bt+ye),Ie=st*-Bt;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(st),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ne+st,y=Te+st,k=Ce-Ie,te=ge+(fe-Ie),J=Ve*Te/y*A,ne=F*Te/y*A;W.projectionMatrix.makePerspective(k,te,J,ne,A,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function N(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;M.near=R.near=C.near=W.near,M.far=R.far=C.far=W.far,(w!==M.near||j!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,j=M.far);const K=W.parent,le=M.cameras;N(M,K);for(let fe=0;fe<le.length;fe++)N(le[fe],K);le.length===2?Y(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),I(W,M,K)};function I(W,K,le){le===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gu*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let H=null;function $(W,K){if(d=K.getViewerPose(c||o),x=K,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let fe=!1;le.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let me=0;me<le.length;me++){const Pe=le[me];let Ne=null;if(m!==null)Ne=m.getViewport(Pe);else{const Ve=h.getViewSubImage(f,Pe);Ne=Ve.viewport,me===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let Te=U[me];Te===void 0&&(Te=new Tn,Te.layers.enable(me),Te.viewport=new Pt,U[me]=Te),Te.matrix.fromArray(Pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Te)}}for(let le=0;le<_.length;le++){const fe=g[le],me=_[le];fe!==null&&me!==void 0&&me.update(fe,K,c||o)}H&&H(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Z=new E_;Z.setAnimationLoop($),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function _1(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,x_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(x(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(_,b);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function d(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],S=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,R=S.length;C<R;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,w=U.length;M<w;M++){const j=U[M];if(m(j,C,M,b)===!0){const q=j.__offset,ie=Array.isArray(j.value)?j.value:[j.value];let L=0;for(let G=0;G<ie.length;G++){const X=ie[G],Y=v(X);typeof X=="number"||typeof X=="boolean"?(j.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,q+L,j.__data)):X.isMatrix3?(j.__data[0]=X.elements[0],j.__data[1]=X.elements[1],j.__data[2]=X.elements[2],j.__data[3]=0,j.__data[4]=X.elements[3],j.__data[5]=X.elements[4],j.__data[6]=X.elements[5],j.__data[7]=0,j.__data[8]=X.elements[6],j.__data[9]=X.elements[7],j.__data[10]=X.elements[8],j.__data[11]=0):(X.toArray(j.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,j.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S,b){const C=_.value,R=g+"_"+S;if(b[R]===void 0)return typeof C=="number"||typeof C=="boolean"?b[R]=C:b[R]=C.clone(),!0;{const U=b[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return b[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(_){const g=_.uniforms;let S=0;const b=16;for(let R=0,U=g.length;R<U;R++){const M=Array.isArray(g[R])?g[R]:[g[R]];for(let w=0,j=M.length;w<j;w++){const q=M[w],ie=Array.isArray(q.value)?q.value:[q.value];for(let L=0,G=ie.length;L<G;L++){const X=ie[L],Y=v(X),N=S%b;N!==0&&b-N<Y.boundary&&(S+=b-N),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Y.storage}}}const C=S%b;return C>0&&(S+=b-C),_.__size=S,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class P_{constructor(e={}){const{canvas:n=hy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const g=this;let S=!1,b=0,C=0,R=null,U=-1,M=null;const w=new Pt,j=new Pt;let q=null;const ie=new je(0);let L=0,G=n.width,X=n.height,Y=1,N=null,I=null;const H=new Pt(0,0,G,X),$=new Pt(0,0,G,X);let Z=!1;const W=new M_;let K=!1,le=!1,fe=null;const me=new Rt,Pe=new Ke,Ne=new B,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return R===null?Y:1}let F=i;function Bt(E,D){for(let z=0;z<E.length;z++){const V=E[z],O=n.getContext(V,D);if(O!==null)return O}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",oe,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),F=Bt(D,E),F===null)throw Bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Ce,ge,st,Ie,A,y,k,te,J,ne,_e,ce,he,Ee,Fe,Q,Ye,He,Re,xe,pe,De,Xe;function ut(){ye=new CE(F),Ce=new SE(F,ye,e),ye.init(Ce),pe=new h1(F,ye,Ce),ge=new d1(F,ye,Ce),st=new LE(F),Ie=new ZT,A=new f1(F,ye,ge,Ie,Ce,pe,st),y=new EE(g),k=new RE(g),te=new ky(F,Ce),De=new xE(F,ye,te,Ce),J=new bE(F,te,st,De),ne=new IE(F,J,te,st),He=new UE(F,Ce,A),Fe=new ME(Ie),_e=new KT(g,y,k,ye,Ce,De,Fe),ce=new _1(g,Ie),he=new JT,Ee=new s1(ye,Ce),Ye=new vE(g,y,k,ge,ne,f,l),Q=new u1(g,ne,Ce),Xe=new v1(F,st,Ce,ge),Re=new yE(F,ye,st,Ce),xe=new PE(F,ye,st,Ce),st.programs=_e.programs,g.capabilities=Ce,g.extensions=ye,g.properties=Ie,g.renderLists=he,g.shadowMap=Q,g.state=ge,g.info=st}ut();const ke=new g1(g,F);this.xr=ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(G,X,!1))},this.getSize=function(E){return E.set(G,X)},this.setSize=function(E,D,z=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,X=D,n.width=Math.floor(E*Y),n.height=Math.floor(D*Y),z===!0&&(n.style.width=E+"px",n.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(G*Y,X*Y).floor()},this.setDrawingBufferSize=function(E,D,z){G=E,X=D,Y=z,n.width=Math.floor(E*z),n.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(H)},this.setViewport=function(E,D,z,V){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,D,z,V),ge.viewport(w.copy(H).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,D,z,V){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,D,z,V),ge.scissor(j.copy($).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ge.setScissorTest(Z=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(E=!0,D=!0,z=!0){let V=0;if(E){let O=!1;if(R!==null){const ue=R.texture.format;O=ue===s_||ue===r_||ue===i_}if(O){const ue=R.texture.type,ve=ue===Vi||ue===Pi||ue===Hd||ue===hr||ue===t_||ue===n_,Me=Ye.getClearColor(),Ae=Ye.getClearAlpha(),Oe=Me.r,be=Me.g,Le=Me.b;ve?(m[0]=Oe,m[1]=be,m[2]=Le,m[3]=Ae,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Oe,x[1]=be,x[2]=Le,x[3]=Ae,F.clearBufferiv(F.COLOR,0,x))}else V|=F.COLOR_BUFFER_BIT}D&&(V|=F.DEPTH_BUFFER_BIT),z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),Ee.dispose(),Ie.dispose(),y.dispose(),k.dispose(),ne.dispose(),De.dispose(),Xe.dispose(),_e.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ht),ke.removeEventListener("sessionend",Je),fe&&(fe.dispose(),fe=null),Gt.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=st.autoReset,D=Q.enabled,z=Q.autoUpdate,V=Q.needsUpdate,O=Q.type;ut(),st.autoReset=E,Q.enabled=D,Q.autoUpdate=z,Q.needsUpdate=V,Q.type=O}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){const D=E.target;D.removeEventListener("dispose",ae),we(D)}function we(E){Se(E),Ie.remove(E)}function Se(E){const D=Ie.get(E).programs;D!==void 0&&(D.forEach(function(z){_e.releaseProgram(z)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,V,O,ue){D===null&&(D=Te);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Me=U_(E,D,z,V,O);ge.setMaterial(V,ve);let Ae=z.index,Oe=1;if(V.wireframe===!0){if(Ae=J.getWireframeAttribute(z),Ae===void 0)return;Oe=2}const be=z.drawRange,Le=z.attributes.position;let pt=be.start*Oe,sn=(be.start+be.count)*Oe;ue!==null&&(pt=Math.max(pt,ue.start*Oe),sn=Math.min(sn,(ue.start+ue.count)*Oe)),Ae!==null?(pt=Math.max(pt,0),sn=Math.min(sn,Ae.count)):Le!=null&&(pt=Math.max(pt,0),sn=Math.min(sn,Le.count));const Et=sn-pt;if(Et<0||Et===1/0)return;De.setup(O,V,Me,z,Ae);let Zn,ot=Re;if(Ae!==null&&(Zn=te.get(Ae),ot=xe,ot.setIndex(Zn)),O.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*Ve()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(O.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*Ve()),O.isLineSegments?ot.setMode(F.LINES):O.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else O.isPoints?ot.setMode(F.POINTS):O.isSprite&&ot.setMode(F.TRIANGLES);if(O.isBatchedMesh)ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ot.renderInstances(pt,Et,O.count);else if(z.isInstancedBufferGeometry){const ze=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Dl=Math.min(z.instanceCount,ze);ot.renderInstances(pt,Et,Dl)}else ot.render(pt,Et)};function Ze(E,D,z){E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Uo(E,D,z),E.side=Xi,E.needsUpdate=!0,Uo(E,D,z),E.side=oi):Uo(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),p=Ee.get(z),p.init(),_.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(g._useLegacyLights);const V=new Set;return E.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];Ze(Me,z,O),V.add(Me)}else Ze(ue,z,O),V.add(ue)}),_.pop(),p=null,V},this.compileAsync=function(E,D,z=null){const V=this.compile(E,D,z);return new Promise(O=>{function ue(){if(V.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){O(E);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Qe=null;function Mt(E){Qe&&Qe(E)}function Ht(){Gt.stop()}function Je(){Gt.start()}const Gt=new E_;Gt.setAnimationLoop(Mt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(E){Qe=E,ke.setAnimationLoop(E),E===null?Gt.stop():Gt.start()},ke.addEventListener("sessionstart",Ht),ke.addEventListener("sessionend",Je),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(D),D=ke.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,D,R),p=Ee.get(E,_.length),p.init(),_.push(p),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(me),le=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,le),v=he.get(E,u.length),v.init(),u.push(v),Wn(E,D,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(N,I),this.info.render.frame++,K===!0&&Fe.beginShadows();const z=p.state.shadowsArray;if(Q.render(z,E,D),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(v,E),p.setupLights(g._useLegacyLights),D.isArrayCamera){const V=D.cameras;for(let O=0,ue=V.length;O<ue;O++){const ve=V[O];Xd(v,E,ve,ve.viewport)}}else Xd(v,E,D);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(g,E,D),De.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Wn(E,D,z,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){V&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const ve=ne.update(E),Me=E.material;Me.visible&&v.push(E,ve,Me,z,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ve=ne.update(E),Me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Ae=ve.groups;for(let Oe=0,be=Ae.length;Oe<be;Oe++){const Le=Ae[Oe],pt=Me[Le.materialIndex];pt&&pt.visible&&v.push(E,ve,pt,z,Ne.z,Le)}}else Me.visible&&v.push(E,ve,Me,z,Ne.z,null)}}const ue=E.children;for(let ve=0,Me=ue.length;ve<Me;ve++)Wn(ue[ve],D,z,V)}function Xd(E,D,z,V){const O=E.opaque,ue=E.transmissive,ve=E.transparent;p.setupLightsView(z),K===!0&&Fe.setGlobalState(g.clippingPlanes,z),ue.length>0&&D_(O,ue,D,z),V&&ge.viewport(w.copy(V)),O.length>0&&Do(O,D,z),ue.length>0&&Do(ue,D,z),ve.length>0&&Do(ve,D,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function D_(E,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=Ce.isWebGL2;fe===null&&(fe=new Mr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Mo:Vi,minFilter:So,samples:ue?4:0})),g.getDrawingBufferSize(Pe),ue?fe.setSize(Pe.x,Pe.y):fe.setSize(Vu(Pe.x),Vu(Pe.y));const ve=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(ie),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Gi,Do(E,z,V),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe);let Ae=!1;for(let Oe=0,be=D.length;Oe<be;Oe++){const Le=D[Oe],pt=Le.object,sn=Le.geometry,Et=Le.material,Zn=Le.group;if(Et.side===oi&&pt.layers.test(V.layers)){const ot=Et.side;Et.side=nn,Et.needsUpdate=!0,qd(pt,z,V,sn,Et,Zn),Et.side=ot,Et.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe)),g.setRenderTarget(ve),g.setClearColor(ie,L),g.toneMapping=Me}function Do(E,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ue=E.length;O<ue;O++){const ve=E[O],Me=ve.object,Ae=ve.geometry,Oe=V===null?ve.material:V,be=ve.group;Me.layers.test(z.layers)&&qd(Me,D,z,Ae,Oe,be)}}function qd(E,D,z,V,O,ue){E.onBeforeRender(g,D,z,V,O,ue),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(g,D,z,V,E,ue),O.transparent===!0&&O.side===oi&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,g.renderBufferDirect(z,D,V,O,E,ue),O.side=Xi,O.needsUpdate=!0,g.renderBufferDirect(z,D,V,O,E,ue),O.side=oi):g.renderBufferDirect(z,D,V,O,E,ue),E.onAfterRender(g,D,z,V,O,ue)}function Uo(E,D,z){D.isScene!==!0&&(D=Te);const V=Ie.get(E),O=p.state.lights,ue=p.state.shadowsArray,ve=O.state.version,Me=_e.getParameters(E,O.state,ue,D,z),Ae=_e.getProgramCacheKey(Me);let Oe=V.programs;V.environment=E.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),Oe===void 0&&(E.addEventListener("dispose",ae),Oe=new Map,V.programs=Oe);let be=Oe.get(Ae);if(be!==void 0){if(V.currentProgram===be&&V.lightsStateVersion===ve)return $d(E,Me),be}else Me.uniforms=_e.getUniforms(E),E.onBuild(z,Me,g),E.onBeforeCompile(Me,g),be=_e.acquireProgram(Me,Ae),Oe.set(Ae,be),V.uniforms=Me.uniforms;const Le=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),$d(E,Me),V.needsLights=F_(E),V.lightsStateVersion=ve,V.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=be,V.uniformsList=null,be}function Yd(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ia.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function $d(E,D){const z=Ie.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function U_(E,D,z,V,O){D.isScene!==!0&&(D=Te),A.resetTextureUnits();const ue=D.fog,ve=V.isMeshStandardMaterial?D.environment:null,Me=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,Ae=(V.isMeshStandardMaterial?k:y).get(V.envMap||ve),Oe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!z.morphAttributes.position,pt=!!z.morphAttributes.normal,sn=!!z.morphAttributes.color;let Et=Gi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=g.toneMapping);const Zn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=Zn!==void 0?Zn.length:0,ze=Ie.get(V),Dl=p.state.lights;if(K===!0&&(le===!0||E!==M)){const gn=E===M&&V.id===U;Fe.setState(V,E,gn)}let dt=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Dl.state.version||ze.outputColorSpace!==Me||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||ze.envMap!==Ae||V.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==be||ze.morphTargets!==Le||ze.morphNormals!==pt||ze.morphColors!==sn||ze.toneMapping!==Et||Ce.isWebGL2===!0&&ze.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,ze.__version=V.version);let Ki=ze.currentProgram;dt===!0&&(Ki=Uo(V,D,O));let Kd=!1,Cs=!1,Ul=!1;const Dt=Ki.getUniforms(),Zi=ze.uniforms;if(ge.useProgram(Ki.program)&&(Kd=!0,Cs=!0,Ul=!0),V.id!==U&&(U=V.id,Cs=!0),Kd||M!==E){Dt.setValue(F,"projectionMatrix",E.projectionMatrix),Dt.setValue(F,"viewMatrix",E.matrixWorldInverse);const gn=Dt.map.cameraPosition;gn!==void 0&&gn.setValue(F,Ne.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Cs=!0,Ul=!0)}if(O.isSkinnedMesh){Dt.setOptional(F,O,"bindMatrix"),Dt.setOptional(F,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(Ce.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(F,"boneTexture",gn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Dt.setOptional(F,O,"batchingTexture"),Dt.setValue(F,"batchingTexture",O._matricesTexture,A));const Il=z.morphAttributes;if((Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&Ce.isWebGL2===!0)&&He.update(O,z,Ki),(Cs||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,Dt.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Zi.envMap.value=Ae,Zi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Cs&&(Dt.setValue(F,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&I_(Zi,Ul),ue&&V.fog===!0&&ce.refreshFogUniforms(Zi,ue),ce.refreshMaterialUniforms(Zi,V,Y,X,fe),Ia.upload(F,Yd(ze),Zi,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ia.upload(F,Yd(ze),Zi,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(F,"center",O.center),Dt.setValue(F,"modelViewMatrix",O.modelViewMatrix),Dt.setValue(F,"normalMatrix",O.normalMatrix),Dt.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let Fl=0,O_=gn.length;Fl<O_;Fl++)if(Ce.isWebGL2){const Zd=gn[Fl];Xe.update(Zd,Ki),Xe.bind(Zd,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function I_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function F_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,D,z){Ie.get(E.texture).__webglTexture=D,Ie.get(E.depthTexture).__webglTexture=z;const V=Ie.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const z=Ie.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){R=E,b=D,C=z;let V=!0,O=null,ue=!1,ve=!1;if(E){const Ae=Ie.get(E);Ae.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Ae.__webglFramebuffer===void 0?A.setupRenderTarget(E):Ae.__hasExternalTextures&&A.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const be=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[D])?O=be[D][z]:O=be[D],ue=!0):Ce.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?O=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[z]:O=be,w.copy(E.viewport),j.copy(E.scissor),q=E.scissorTest}else w.copy(H).multiplyScalar(Y).floor(),j.copy($).multiplyScalar(Y).floor(),q=Z;if(ge.bindFramebuffer(F.FRAMEBUFFER,O)&&Ce.drawBuffers&&V&&ge.drawBuffers(E,O),ge.viewport(w),ge.scissor(j),ge.setScissorTest(q),ue){const Ae=Ie.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,z)}else if(ve){const Ae=Ie.get(E.texture),Oe=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Oe)}U=-1},this.readRenderTargetPixels=function(E,D,z,V,O,ue,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){ge.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Ae=E.texture,Oe=Ae.format,be=Ae.type;if(Oe!==zn&&pe.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=be===Mo&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(be!==Vi&&pe.convert(be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Li&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&z>=0&&z<=E.height-O&&F.readPixels(D,z,V,O,pe.convert(Oe),pe.convert(be),ue)}finally{const Ae=R!==null?Ie.get(R).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,D,z=0){const V=Math.pow(2,-z),O=Math.floor(D.image.width*V),ue=Math.floor(D.image.height*V);A.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,E.x,E.y,O,ue),ge.unbindTexture()},this.copyTextureToTexture=function(E,D,z,V=0){const O=D.image.width,ue=D.image.height,ve=pe.convert(z.format),Me=pe.convert(z.type);A.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,O,ue,ve,Me,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,ve,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,ve,Me,D.image),V===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z,V,O=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,Ae=pe.convert(V.format),Oe=pe.convert(V.type);let be;if(V.isData3DTexture)A.setTexture3D(V,0),be=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Le=F.getParameter(F.UNPACK_ROW_LENGTH),pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),Et=F.getParameter(F.UNPACK_SKIP_ROWS),Zn=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=z.isCompressedTexture?z.mipmaps[O]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(be,O,D.x,D.y,D.z,ue,ve,Me,Ae,Oe,ot.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(be,O,D.x,D.y,D.z,ue,ve,Me,Ae,ot.data)):F.texSubImage3D(be,O,D.x,D.y,D.z,ue,ve,Me,Ae,Oe,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zn),O===0&&V.generateMipmaps&&F.generateMipmap(be),ge.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?mr:a_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?bt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class x1 extends P_{}x1.prototype.isWebGL1Renderer=!0;class jd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new jd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y1 extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class L_ extends Lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cp=new Rt,ju=new h_,Sa=new Pl,Ma=new B;class S1 extends rn{constructor(e=new _i,n=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;Cp.copy(r).invert(),ju.copy(e.ray).applyMatrix4(Cp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,v=m;x<v;x++){const p=c.getX(x);Ma.fromBufferAttribute(h,p),bp(Ma,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,v=m;x<v;x++)Ma.fromBufferAttribute(h,x),bp(Ma,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bp(t,e,n,i,r,s,o){const a=ju.distanceSqToPoint(t);if(a<n){const l=new B;ju.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ht=(t,e)=>{const n=un.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>un.createElement("svg",{ref:d,...M1,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${E1(t)}`,a].join(" "),...c},[...e.map(([h,f])=>un.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=ht("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=ht("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=ht("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=ht("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=ht("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=ht("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=ht("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=ht("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=ht("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=ht("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=ht("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=ht("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=ht("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=ht("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=ht("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=ht("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=ht("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=ht("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=ht("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=ht("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=ht("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ht("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),I1=()=>{const t=un.useRef(null);return un.useEffect(()=>{const e=t.current,n=new y1;n.fog=new jd(328965,.002);const i=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const r=new P_({alpha:!0,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);const s=new _i,o=700,a=new Float32Array(o*3);for(let v=0;v<o*3;v++)a[v]=(Math.random()-.5)*80;s.setAttribute("position",new Gn(a,3));const l=new L_({size:.15,color:65535,transparent:!0,opacity:.8}),c=new S1(s,l);n.add(c);let d=0,h=0;const f=v=>{d=v.clientX/window.innerWidth-.5,h=v.clientY/window.innerHeight-.5},m=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",f),window.addEventListener("resize",m);const x=()=>{requestAnimationFrame(x),c.rotation.y+=.001,c.rotation.x+=5e-4,i.position.x+=(d*10-i.position.x)*.05,i.position.y+=(-h*10-i.position.y)*.05,i.lookAt(n.position),r.render(n,i)};return x(),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("resize",m),e&&e.removeChild(r.domElement),s.dispose(),l.dispose(),r.dispose()}},[]),T.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900"})},vn=({href:t,children:e,mobile:n,onClick:i})=>T.jsx("a",{href:t,onClick:i,className:`${n?"block w-full py-4 text-center hover:bg-cyan-900/30":"hover:text-cyan-400"} transition-colors duration-300 font-mono text-sm uppercase tracking-widest`,children:e}),Gs=({icon:t,title:e,subtitle:n})=>T.jsxs("div",{className:"mb-12 text-center","data-aos":"fade-up",children:[T.jsx("div",{className:"flex justify-center mb-4",children:T.jsx("div",{className:"p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",children:T.jsx(t,{size:32})})}),T.jsx("h2",{className:"text-4xl font-bold text-white mb-2 tracking-tight",children:e}),T.jsx("div",{className:"h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"}),n&&T.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto font-light",children:n})]}),yn=({children:t,className:e=""})=>T.jsx("div",{className:`bg-gray-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl ${e}`,children:t}),xn=({skill:t})=>T.jsxs("div",{className:"flex flex-col gap-2",children:[T.jsx("div",{className:"flex justify-between text-xs font-mono text-cyan-300 uppercase",children:T.jsx("span",{children:t})}),T.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:T.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-full animate-pulse"})})]}),Vr=({role:t,company:e,period:n,loc:i,details:r})=>T.jsxs("div",{className:"relative pl-8 pb-12 border-l border-cyan-500/30 last:border-0 last:pb-0 group",children:[T.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"}),T.jsxs(yn,{className:"ml-4 -mt-2 group-hover:translate-x-2 transition-transform duration-300",children:[T.jsx("h3",{className:"text-xl font-bold text-white",children:t}),T.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-cyan-400 font-mono my-2",children:[T.jsx("span",{children:e}),T.jsx("span",{children:"•"}),T.jsx("span",{children:n})]}),T.jsx("p",{className:"text-gray-400 text-sm italic mb-3",children:i}),T.jsx("ul",{className:"space-y-2",children:r.map((s,o)=>T.jsxs("li",{className:"flex items-start text-gray-300 text-sm",children:[T.jsx("span",{className:"mr-2 text-cyan-500",children:"▹"}),s]},o))})]})]}),F1=({title:t,description:e,tags:n,link:i,privateRepo:r})=>T.jsxs(yn,{className:"flex flex-col h-full hover:-translate-y-2 transition-transform duration-300",children:[T.jsxs("div",{className:"flex justify-between items-start mb-4",children:[T.jsx("div",{className:"p-3 bg-cyan-900/20 rounded-lg text-cyan-400",children:T.jsx(C1,{size:24})}),T.jsxs("div",{className:"flex gap-3",children:[i&&!r&&T.jsx("a",{href:i,target:"_blank",rel:"noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:T.jsx(N_,{size:20})}),r&&T.jsx("span",{className:"text-xs text-yellow-500 font-mono border border-yellow-500/30 px-2 py-1 rounded",children:"PRIVATE"})]})]}),T.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:t}),T.jsx("p",{className:"text-gray-400 text-sm mb-6 flex-grow leading-relaxed",children:e}),T.jsx("div",{className:"flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5",children:n.map((s,o)=>T.jsxs("span",{className:"text-xs font-mono text-cyan-500",children:["#",s]},o))})]}),Hc=({label:t,value:e,icon:n})=>T.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors",children:[T.jsx("div",{className:"text-cyan-400",children:T.jsx(n,{size:24})}),T.jsxs("div",{children:[T.jsx("div",{className:"text-2xl font-bold text-white",children:e}),T.jsx("div",{className:"text-xs text-gray-400 uppercase tracking-wider",children:t})]})]}),O1=({children:t})=>{const e=un.useRef(null),[n,i]=un.useState({x:0,y:0}),r=o=>{if(!e.current)return;const a=e.current.getBoundingClientRect(),l=o.clientX-a.left,c=o.clientY-a.top,d=a.width/2,h=a.height/2,f=(c-h)/h*-15,m=(l-d)/d*15;i({x:f,y:m})},s=()=>{i({x:0,y:0})};return T.jsx("div",{ref:e,onMouseMove:r,onMouseLeave:s,className:"relative w-full aspect-square rounded-full flex items-center justify-center transition-transform duration-100 ease-out z-20",style:{transform:`perspective(1000px) rotateX(${n.x}deg) rotateY(${n.y}deg)`},children:t})};function k1(){const[t,e]=un.useState(!1),[n,i]=un.useState({name:"",purpose:"Mentorship",message:""});un.useEffect(()=>{window.scrollTo(0,0)},[]);const r=()=>e(!t),s=l=>{l.preventDefault();const{name:c,purpose:d,message:h}=n,f=`*New Connection Request*%0A%0A*Name:* ${c}%0A*Purpose:* ${d}%0A*Message:* ${h}`;window.open(`https://wa.me/919664301637?text=${f}`,"_blank")},o=l=>{const{name:c,value:d}=l.target;i(h=>({...h,[c]:d}))},a=[{title:"TB Detection AI",description:"AI-powered detection tool using Vision Transformers (PyTorch) & Gradio. Classifies chest X-rays as Normal or Tuberculosis.",tags:["Python","PyTorch","Gradio","Healthcare"],link:"https://github.com/JITSA007/Tuberculosis-Detection-Using-AI-ML",private:!1},{title:"DevSpark AI (Mentorjitsa)",description:"Intelligent web app to help self-learners break 'Tutorial Hell'. Provides structured mentorship paths.",tags:["HTML","Education","AI","Mentorship"],link:"https://github.com/JITSA007/Mentorjitsa",private:!1},{title:"Mock Interview App",description:"Voice-activated AI mock interview app. Uses Groq & Llama 3 for real-time voice interviews based on job descriptions.",tags:["React","Next.js","Groq API","Voice AI"],link:"https://github.com/JITSA007/mock-interview-app",private:!1},{title:"Ashis Remedies",description:"Immersive Ayurvedic wellness platform bridging Silicon & Soil. Features cosmic theme engines and AI diagnostics.",tags:["React","Wellness","Ayurveda","Tailwind"],link:"https://github.com/JITSA007/ashis-remedies",private:!1},{title:"Smart Attendance (BLE)",description:"Secure, proximity-based attendance system using Flutter (BLE), Next.js, and Geofencing.",tags:["Flutter","Bluetooth","Next.js","IoT"],link:"https://github.com/JITSA007/smart-attendance-system",private:!1},{title:"Nosokoma Care",description:"Home healthcare marketplace integrating real-time tracking, secure payments, and medical records.",tags:["HTML","Healthcare","Management"],link:"https://github.com/JITSA007/Nosokoma-Care-Website",private:!0},{title:"University Scheduler",description:"Zero-install timetabling tool with Glassmorphism UI. Features smart auto-scheduling and conflict detection.",tags:["HTML","Algorithms","Education"],link:"https://github.com/JITSA007/UniversityClassScheduler",private:!1},{title:"Blue Attend",description:"Smart Academic Attendance & Management System using Bluetooth technology for seamless tracking.",tags:["JavaScript","Bluetooth","Academic"],link:"https://github.com/JITSA007/blue-attend2",private:!1},{title:"Secure PDF Editor",description:"Client-side PDF editor allowing text editing, signing, and organizing pages directly in browser without uploads.",tags:["JavaScript","PDF-Lib","Privacy"],link:"https://github.com/JITSA007/pdfeditor",private:!1},{title:"MindVerse Portal",description:"Official Digital Portal for CD MINDVERSE Magazine. Where Code Meets Creativity.",tags:["JavaScript","Digital Media","Creative"],link:"https://github.com/JITSA007/MindVerse2",private:!1}];return T.jsxs("div",{className:"min-h-screen text-gray-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden",children:[T.jsx(I1,{}),T.jsxs("nav",{className:"fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-gray-900/80 backdrop-blur-lg",children:[T.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[T.jsxs("div",{className:"text-2xl font-bold tracking-tighter text-white flex items-center gap-2",children:[T.jsx(kp,{className:"text-cyan-500"}),T.jsxs("span",{children:["JITSA",T.jsx("span",{className:"text-cyan-500",children:".DEV"})]})]}),T.jsxs("div",{className:"hidden md:flex gap-8",children:[T.jsx(vn,{href:"#home",children:"Home"}),T.jsx(vn,{href:"#about",children:"About"}),T.jsx(vn,{href:"#projects",children:"Projects"}),T.jsx(vn,{href:"#expertise",children:"Expertise"}),T.jsx(vn,{href:"#experience",children:"Timeline"}),T.jsx(vn,{href:"#contact",children:"Contact"})]}),T.jsx("button",{onClick:r,className:"md:hidden text-white p-2",children:t?T.jsx(U1,{}):T.jsx(P1,{})})]}),t&&T.jsxs("div",{className:"md:hidden bg-gray-900 border-b border-white/10 absolute w-full",children:[T.jsx(vn,{mobile:!0,href:"#home",onClick:r,children:"Home"}),T.jsx(vn,{mobile:!0,href:"#about",onClick:r,children:"About"}),T.jsx(vn,{mobile:!0,href:"#projects",onClick:r,children:"Projects"}),T.jsx(vn,{mobile:!0,href:"#expertise",onClick:r,children:"Expertise"}),T.jsx(vn,{mobile:!0,href:"#experience",onClick:r,children:"Timeline"}),T.jsx(vn,{mobile:!0,href:"#contact",onClick:r,children:"Contact"})]})]}),T.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 relative",children:[T.jsxs("div",{className:"max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center",children:[T.jsxs("div",{className:"space-y-6 z-10",children:[T.jsx("div",{className:"inline-block px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-4 animate-fade-in-up",children:"Hello, World. I am Jitendra Prajapat."}),T.jsxs("h1",{className:"text-5xl md:text-7xl font-bold text-white leading-tight",children:["Professor who ",T.jsx("br",{}),T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",children:"Refuses to be Boring"})]}),T.jsxs("p",{className:"text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-cyan-500 pl-4",children:["AI/ML Researcher • Cybersecurity Expert • Social Innovator.",T.jsx("br",{}),"Turning students into innovators by day, saving lives with code by night."]}),T.jsxs("div",{className:"flex flex-wrap gap-4 pt-4",children:[T.jsx("a",{href:"#contact",className:"px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]",children:"Connect With Me"}),T.jsxs("a",{href:"https://www.linkedin.com/in/jitsa00/",target:"_blank",rel:"noreferrer",className:"px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full transition-all flex items-center gap-2",children:[T.jsx(R1,{size:18})," View Linkedin"]})]}),T.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-8",children:[T.jsx(Hc,{icon:Np,value:"25+",label:"Repositories"}),T.jsx(Hc,{icon:Lp,value:"PhD",label:"Scholar"}),T.jsx(Hc,{icon:Op,value:"Farmer",label:"At Heart"})]})]}),T.jsx("div",{className:"relative z-10 hidden md:flex items-center justify-center",children:T.jsxs("div",{className:"relative w-[400px] h-[400px] flex items-center justify-center",children:[T.jsx("div",{className:"absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-[spin_20s_linear_infinite]"}),T.jsx("div",{className:"absolute inset-8 rounded-full border border-purple-500/30 border-dotted animate-[spin_15s_linear_infinite_reverse]"}),T.jsx("div",{className:"absolute inset-0 animate-[spin_25s_linear_infinite]",children:T.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-2 rounded-full border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]",children:T.jsx(w1,{size:20,className:"text-cyan-400"})})}),T.jsx("div",{className:"absolute inset-12 animate-[spin_18s_linear_infinite_reverse]",children:T.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-900 p-2 rounded-full border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]",children:T.jsx(T1,{size:20,className:"text-purple-400"})})}),T.jsx(O1,{children:T.jsxs("div",{className:"relative text-center p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden group",children:[T.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"}),T.jsxs("div",{className:"relative z-10",children:[T.jsx("div",{className:"flex justify-center mb-3",children:T.jsx(N1,{size:32,className:"text-cyan-400 animate-pulse"})}),T.jsx("p",{className:"text-cyan-400 font-mono text-xs mb-2 tracking-widest",children:"<SYSTEM_FOCUS>"}),T.jsx("h3",{className:"text-white font-bold text-2xl mb-1",children:"AI x Health"}),T.jsx("p",{className:"text-white/80 font-semibold text-lg",children:"TB Diagnosis"}),T.jsx("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent my-3"}),T.jsxs("p",{className:"text-gray-400 text-xs mt-2 italic",children:['"Saving lives, not just',T.jsx("br",{}),'crunching numbers."']}),T.jsx("p",{className:"text-cyan-400 font-mono text-xs mt-3 tracking-widest",children:"</SYSTEM_FOCUS>"})]}),T.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"})]})})]})})]}),T.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500",children:T.jsx(A1,{})})]}),T.jsx("section",{id:"about",className:"py-24 bg-black/30 relative",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[T.jsx(Gs,{icon:kp,title:"The Man Behind The Code",subtitle:"Bridging the gap between Academia, Industry, and the Soil."}),T.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[T.jsxs(yn,{className:"md:col-span-2 h-full flex flex-col",children:[T.jsxs("h3",{className:"text-3xl font-bold text-white mb-6 flex items-center gap-3",children:[T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",children:"My Multiverse"}),T.jsx("span",{className:"text-sm font-mono text-gray-500 font-normal px-2 py-1 border border-gray-700 rounded bg-gray-900",children:"v2.0.26"})]}),T.jsxs("div",{className:"bg-black/50 p-5 rounded-lg border border-gray-800 font-mono text-xs md:text-sm text-gray-300 mb-8 shadow-inner relative overflow-hidden group",children:[T.jsx("div",{className:"absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity",children:T.jsx(Bc,{size:16,className:"text-gray-600"})}),T.jsxs("div",{className:"flex gap-2 mb-4 border-b border-gray-800 pb-2",children:[T.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),T.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),T.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsxs("p",{children:[T.jsx("span",{className:"text-pink-500",children:"const"})," ",T.jsx("span",{className:"text-blue-400",children:"identity"})," = ",T.jsx("span",{className:"text-yellow-300",children:'"Technocrat"'}),";"]}),T.jsxs("p",{children:[T.jsx("span",{className:"text-pink-500",children:"let"})," ",T.jsx("span",{className:"text-blue-400",children:"day_job"})," = ",T.jsx("span",{className:"text-green-400",children:'"Assistant Professor @ JNU"'}),";"]}),T.jsxs("p",{children:[T.jsx("span",{className:"text-pink-500",children:"let"})," ",T.jsx("span",{className:"text-blue-400",children:"night_mode"})," = ",T.jsx("span",{className:"text-green-400",children:'"AI Researcher (TB Diagnosis)"'}),";"]}),T.jsxs("p",{children:[T.jsx("span",{className:"text-pink-500",children:"let"})," ",T.jsx("span",{className:"text-blue-400",children:"roots"})," = [",T.jsx("span",{className:"text-orange-400",children:'"Farmer"'}),", ",T.jsx("span",{className:"text-orange-400",children:'"Poet"'}),", ",T.jsx("span",{className:"text-orange-400",children:'"Human"'}),"];"]}),T.jsx("p",{className:"animate-pulse text-cyan-500 mt-2",children:"> executing social_impact_protocol..."})]})]}),T.jsxs("div",{className:"space-y-6 text-gray-300 leading-relaxed text-lg font-light flex-grow",children:[T.jsxs("p",{children:["I operate at the intersection of conflicting worlds. By day, I am an ",T.jsx("strong",{className:"text-white",children:"Assistant Professor"})," guiding BCA & BTech students to break and rebuild technology, refusing to be boring in a lecture hall."]}),T.jsxs("p",{children:["By night, I transform into a researcher, applying ",T.jsx("strong",{className:"text-cyan-400",children:"AI/ML for Tuberculosis Diagnosis"})," because I believe code should save lives, not just crunch numbers."]}),T.jsx("div",{className:"pl-4 border-l-2 border-green-500/50 my-6",children:T.jsxs("p",{className:"italic text-gray-400",children:['"But my roots are deep—literally. I am a ',T.jsx("strong",{className:"text-green-400",children:"farmer"})," and poet who believes tech should serve people first. Whether I'm securing cyberspace as a ",T.jsx("strong",{className:"text-purple-400",children:"Certified Ethical Hacker"})," or tending to the fields in Rajasthan, my mission remains the same: ",T.jsx("span",{className:"text-white font-bold underline decoration-cyan-500 decoration-2 underline-offset-4",children:"Growth"}),'."']})}),T.jsxs("p",{children:["I don't just teach syntax; I teach survival in the digital age. From designing industry-ready curricula to leading social-impact startups like ",T.jsx("strong",{className:"text-white",children:"Aquantrix"}),", I bridge the gap between silicon chips and soil, ensuring that innovation reaches the last mile."]})]}),T.jsx("div",{className:"flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5",children:["Python","MachineLearning","Cybersecurity","TB_Research","Poetry","Farming","EdTech","SocialInnovation","EthicalHacking","PublicSpeaking","Mentorship","OpenSource","Rajasthan","PhD_Life","TechForGood","CloudComputing","Automation","Storytelling"].map(l=>T.jsxs("span",{className:"px-3 py-1.5 rounded-md bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-gray-400 text-xs font-mono border border-white/10 hover:border-cyan-500/50 transition-all cursor-default",children:["#",l]},l))})]}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs(yn,{className:"bg-gradient-to-br from-purple-900/20 to-black hover:scale-[1.02] transition-transform duration-300",children:[T.jsx(Fp,{className:"text-purple-400 mb-4",size:32}),T.jsx("h4",{className:"text-xl font-bold text-white",children:"Cyber Guardian"}),T.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Building a generation of security-first engineers."})]}),T.jsxs(yn,{className:"bg-gradient-to-br from-green-900/20 to-black hover:scale-[1.02] transition-transform duration-300",children:[T.jsx(Op,{className:"text-green-400 mb-4",size:32}),T.jsx("h4",{className:"text-xl font-bold text-white",children:"Rooted Innovator"}),T.jsx("p",{className:"text-sm text-gray-400 mt-2",children:'"Tech Meets Soil" - Applying innovation to rural challenges.'})]}),T.jsxs(yn,{className:"bg-gradient-to-br from-blue-900/20 to-black hover:scale-[1.02] transition-transform duration-300",children:[T.jsx(Lp,{className:"text-blue-400 mb-4",size:32}),T.jsx("h4",{className:"text-xl font-bold text-white",children:"PhD Scholar"}),T.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Researching AI for healthcare impact and curriculum design."})]}),T.jsxs(yn,{className:"bg-gradient-to-br from-yellow-900/20 to-black hover:scale-[1.02] transition-transform duration-300",children:[T.jsx(L1,{className:"text-yellow-400 mb-4",size:32}),T.jsx("h4",{className:"text-xl font-bold text-white",children:"Public Speaker"}),T.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Motivational storytelling that inspires the next generation."})]})]})]})]})}),T.jsx("section",{id:"projects",className:"py-24 relative bg-gradient-to-b from-gray-900/50 to-black/50",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[T.jsx(Gs,{icon:Np,title:"Code Repository",subtitle:"A selection of my open-source contributions and private innovations."}),T.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map((l,c)=>T.jsx(F1,{...l},c))}),T.jsx("div",{className:"text-center mt-12",children:T.jsxs("a",{href:"https://github.com/JITSA007?tab=repositories",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors",children:[T.jsx(N_,{size:20})," View All 25+ Repositories"]})})]})}),T.jsx("section",{id:"expertise",className:"py-24 relative",children:T.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[T.jsx(Gs,{icon:Bc,title:"Technical Arsenal",subtitle:"Tools I use to build the future."}),T.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[T.jsxs(yn,{children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx(Dp,{className:"text-blue-400"}),T.jsx("h4",{className:"font-bold text-white",children:"Web & Cloud"})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsx(xn,{skill:"Databricks"}),T.jsx(xn,{skill:"IT Infrastructure"}),T.jsx(xn,{skill:"Automation"})]})]}),T.jsxs(yn,{children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx(Bc,{className:"text-purple-400"}),T.jsx("h4",{className:"font-bold text-white",children:"AI & Data"})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsx(xn,{skill:"Machine Learning"}),T.jsx(xn,{skill:"Python"}),T.jsx(xn,{skill:"Healthcare AI"})]})]}),T.jsxs(yn,{children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx(Fp,{className:"text-red-400"}),T.jsx("h4",{className:"font-bold text-white",children:"Security"})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsx(xn,{skill:"Ethical Hacking"}),T.jsx(xn,{skill:"Network Security"}),T.jsx(xn,{skill:"Cyber Protocols"})]})]}),T.jsxs(yn,{children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx(Pp,{className:"text-yellow-400"}),T.jsx("h4",{className:"font-bold text-white",children:"Leadership"})]}),T.jsxs("div",{className:"space-y-3",children:[T.jsx(xn,{skill:"Curriculum Dev"}),T.jsx(xn,{skill:"Public Speaking"}),T.jsx(xn,{skill:"Mentorship"})]})]})]})]})}),T.jsx("section",{id:"experience",className:"py-24 bg-black/30",children:T.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[T.jsx(Gs,{icon:Pp,title:"The Journey",subtitle:"From managing hospital IT to shaping the minds of tomorrow."}),T.jsxs("div",{className:"mt-12",children:[T.jsx(Vr,{role:"Program Coordinator & Assistant Professor",company:"ImaginXP",period:"Aug 2023 - Present",loc:"Jaipur, Rajasthan",details:["Bridging academia & industry: Integrating AI, UX, and product innovation modules.","Streamlining academic administration for concurrent programs.","Mentoring multidisciplinary student teams for industry-relevant projects."]}),T.jsx(Vr,{role:"Assistant Professor",company:"Jaipur National University",period:"Aug 2023 - Present",loc:"Jaipur, Rajasthan",details:["Delivering BCA & BTech modules in AI/ML and Python.","Guided 15+ final year projects with industry recognition.","Acting as liaison with industry partners to improve placements."]}),T.jsx(Vr,{role:"Managing Director",company:"Aquantrix Private Limited",period:"June 2021 - Present",loc:"Jaipur, Rajasthan",details:["Designed AI & IoT-enabled water monitoring solutions for rural communities.","Scaled solutions to 200+ households via NGO collaborations.","Social-impact driven enterprise management."]}),T.jsx(Vr,{role:"Assistant Professor",company:"JECRC University",period:"Sep 2022 - Oct 2023",loc:"Jaipur, Rajasthan",details:["Embedded technology literacy into MBA/BBA curricula.","Increased internship-to-job conversion rates by 15%."]}),T.jsx(Vr,{role:"IT Operations Manager",company:"Activant Solutions Pvt Ltd",period:"Apr 2021 - Oct 2022",loc:"Jaipur, Rajasthan",details:["Improved operational efficiency by 25% through infrastructure upgrades.","Reduced deployment bugs by 40% with new testing frameworks."]}),T.jsx(Vr,{role:"Senior Manager Information System",company:"Shri Hariram Hospital & Research Center",period:"Jun 2014 - Mar 2021",loc:"Nagaur, Rajasthan",details:["Managed complete IT ecosystem for healthcare organization.","Maintained 24/7 uptime for mission-critical medical records."]})]})]})}),T.jsxs("section",{id:"contact",className:"py-24 relative overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0"}),T.jsxs("div",{className:"max-w-4xl mx-auto px-6 relative z-10",children:[T.jsx(Gs,{icon:Up,title:"Initialize Handshake",subtitle:"Let's collaborate on Research, Speaking, or the next Big Idea."}),T.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-start",children:[T.jsxs("div",{className:"space-y-6",children:[T.jsx("h3",{className:"text-2xl font-bold text-white",children:"Get in Touch"}),T.jsx("p",{className:"text-gray-400",children:"DM me on LinkedIn or drop an email. The next big innovation might start with a simple message."}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("a",{href:"mailto:jitsahere@gmail.com",className:"flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 bg-white/5 rounded-lg border border-white/10",children:[T.jsx(Up,{className:"text-cyan-500"}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-gray-500 uppercase",children:"Email"}),T.jsx("div",{className:"font-mono",children:"jitsahere@gmail.com"})]})]}),T.jsxs("a",{href:"https://www.linkedin.com/in/jitsa00",target:"_blank",rel:"noreferrer",className:"flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 bg-white/5 rounded-lg border border-white/10",children:[T.jsx(b1,{className:"text-cyan-500"}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-gray-500 uppercase",children:"LinkedIn"}),T.jsx("div",{className:"font-mono",children:"linkedin.com/in/jitsa00"})]})]}),T.jsxs("a",{href:"https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=jitsa00",target:"_blank",rel:"noreferrer",className:"flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors p-4 bg-blue-900/20 rounded-lg border border-blue-500/30 hover:border-blue-400 group",children:[T.jsx(D1,{className:"text-cyan-500 group-hover:text-white transition-colors"}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-blue-400 uppercase font-bold tracking-widest",children:"Direct Follow"}),T.jsx("div",{className:"font-mono font-bold text-white",children:"Follow on LinkedIn"})]})]}),T.jsxs("div",{className:"flex items-center gap-4 text-gray-300 p-4 bg-white/5 rounded-lg border border-white/10",children:[T.jsx(Dp,{className:"text-cyan-500"}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-gray-500 uppercase",children:"Location"}),T.jsx("div",{className:"font-mono",children:"Jaipur, Rajasthan, India"})]})]})]})]}),T.jsxs(yn,{className:"bg-gray-900 border-t-4 border-t-green-500",children:[T.jsxs("div",{className:"mb-6",children:[T.jsxs("div",{className:"flex items-center gap-2 text-green-400 mb-2",children:[T.jsx(Ip,{size:24}),T.jsx("span",{className:"font-mono text-sm tracking-widest",children:"WHATSAPP DIRECT LINK"})]}),T.jsx("h3",{className:"text-xl font-bold text-white",children:"Collaboration Hub"}),T.jsx("p",{className:"text-sm text-gray-400",children:"Select your purpose and connect directly."})]}),T.jsxs("form",{className:"space-y-4",onSubmit:s,children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-mono text-cyan-500 mb-2",children:"IDENTIFIER (NAME)"}),T.jsx("input",{type:"text",name:"name",required:!0,value:n.name,onChange:o,className:"w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors",placeholder:"Enter your name"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-mono text-cyan-500 mb-2",children:"PURPOSE_OF_CONTACT"}),T.jsxs("select",{name:"purpose",value:n.purpose,onChange:o,className:"w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors appearance-none",children:[T.jsx("option",{value:"Mentorship",children:"Mentorship Request"}),T.jsx("option",{value:"Collaboration",children:"Project Collaboration"}),T.jsx("option",{value:"Speaking",children:"Speaking Opportunity"}),T.jsx("option",{value:"General",children:"General Query"})]})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-mono text-cyan-500 mb-2",children:"PAYLOAD (MESSAGE)"}),T.jsx("textarea",{name:"message",required:!0,rows:"4",value:n.message,onChange:o,className:"w-full bg-black/50 border border-gray-700 rounded-md p-3 text-white focus:border-green-500 focus:outline-none transition-colors",placeholder:"Briefly describe your request..."})]}),T.jsxs("button",{type:"submit",className:"w-full bg-green-600 hover:bg-green-500 text-black font-bold py-4 rounded-md uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",children:[T.jsx(Ip,{size:20}),"Initialize WhatsApp Protocol"]})]})]})]})]})]}),T.jsx("footer",{className:"py-8 bg-black border-t border-white/10 text-center text-gray-600 text-sm font-mono",children:T.jsx("p",{children:"© 2026 Jitendra Prajapat. Built with React & Three.js."})})]})}Gc.createRoot(document.getElementById("root")).render(T.jsx(e0.StrictMode,{children:T.jsx(k1,{})}));
