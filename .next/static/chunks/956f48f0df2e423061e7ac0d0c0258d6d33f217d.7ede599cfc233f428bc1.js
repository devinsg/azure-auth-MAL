(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{VtrM:function(e,t,n){"use strict";var r=n("q1tI"),i=n("miPH"),o=n.n(i);function a(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function u(){return"undefined"===typeof navigator.onLine||navigator.onLine}const f=new Map;function c(e){return f.get(e)}function s(e,t){return f.set(e,t)}const d={},l={},p={},y={},g={};const h="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),v={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,i){if(!a())return;if(n.errorRetryCount&&i.retryCount>n.errorRetryCount)return;const o=Math.min(i.retryCount||0,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)},errorRetryInterval:1e3*(h?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(h?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:o.a};let w=!1;if("undefined"!==typeof window&&window.addEventListener&&!w){const e=()=>{if(a()&&u())for(let e in p)p[e][0]&&p[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),w=!0}var b=v;const O=new WeakMap;let m=0;const j=Object(r.createContext)({});j.displayName="SWRConfigContext";var E=j;const R="undefined"===typeof window,C=R?r.useEffect:r.useLayoutEffect,I=e=>e?"err@"+e:"",T=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):O.has(e[n])?r=O.get(e[n]):(r=m,O.set(e[n],m++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},S=(e,t,n)=>{const r=y[e];if(e&&r)for(let i=0;i<r.length;++i)r[i](!1,t,n)},L=async(e,t,n=!0)=>{const[r]=T(e);if(!r)return;if("undefined"===typeof t)return((e,t=!0)=>{const[n]=T(e);if(!n)return;const r=y[n];if(n&&r){const e=c(n),i=c(I(n));for(let n=0;n<r.length;++n)r[n](t,e,i,!1)}})(e,n);let i,o;if(g[r]=Date.now()-1,t&&"function"===typeof t)try{i=await t(c(r))}catch(u){o=u}else if(t&&"function"===typeof t.then)try{i=await t}catch(u){o=u}else i=t;"undefined"!==typeof i&&s(r,i);const a=y[r];if(a)for(let f=0;f<a.length;++f)a[f](!!n,i,o,false);if(o)throw o;return i};E.Provider;var V=function(...e){let t,n,i={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],i=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(i=e[1]);const[o,f]=T(t),h=I(o);i=Object.assign({},b,Object(r.useContext)(E),i),"undefined"===typeof n&&(n=i.fetcher);const v=c(o)||i.initialData,w=c(h),O=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),m=Object(r.useRef)({data:v,error:w,isValidating:!1}),j=Object(r.useState)(null)[1];let V=Object(r.useCallback)(e=>{let t=!1;for(let n in e)m.current[n]=e[n],O.current[n]&&(t=!0);(t||i.suspense)&&j({})},[]);const k=Object(r.useRef)(!1),x=Object(r.useRef)(o),D=Object(r.useCallback)((e,t)=>L(o,e,t),[o]),W=Object(r.useCallback)(async(e={})=>{if(!o||!n)return!1;if(k.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,r="undefined"!==typeof d[o]&&e.dedupe;try{let e,a;if(V({isValidating:!0}),r?(a=l[o],e=await d[o]):(d[o]&&(g[o]=Date.now()-1),i.loadingTimeout&&!c(o)&&setTimeout(()=>{t&&i.onLoadingSlow(o,i)},i.loadingTimeout),d[o]=null!==f?n(...f):n(o),l[o]=a=Date.now(),e=await d[o],setTimeout(()=>{delete d[o],delete l[o]},i.dedupingInterval),i.onSuccess(e,o,i)),g[o]&&a<=g[o])return V({isValidating:!1}),!1;s(o,e),s(h,void 0),x.current=o;const u={isValidating:!1};"undefined"!==typeof m.current.error&&(u.error=void 0),i.compare(m.current.data,e)||(u.data=e),V(u),r||S(o,e,void 0)}catch(a){if(delete d[o],delete l[o],s(h,a),x.current=o,m.current.error!==a&&(V({isValidating:!1,error:a}),r||S(o,void 0,a)),i.onError(a,o,i),i.shouldRetryOnError){const t=(e.retryCount||0)+1;i.onErrorRetry(a,o,i,W,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[o]);if(C(()=>{if(!o)return;k.current=!1;const e=m.current.data,t=c(o)||i.initialData;x.current===o&&i.compare(e,t)||(V({data:t}),x.current=o);const n=()=>W({dedupe:!0});let r;i.initialData||("undefined"!==typeof t&&!R&&window.requestIdleCallback?window.requestIdleCallback(n):n()),i.revalidateOnFocus&&(r=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,i.focusThrottleInterval),p[o]?p[o].push(r):p[o]=[r]);const a=(e=!0,t,r,a=!0)=>{const u={};let f=!1;return"undefined"===typeof t||i.compare(m.current.data,t)||(u.data=t,f=!0),m.current.error!==r&&(u.error=r,f=!0),f&&V(u),x.current=o,!!e&&(a?n():W())};y[o]?y[o].push(a):y[o]=[a];let u=null;return"undefined"!==typeof addEventListener&&i.revalidateOnReconnect&&(u=addEventListener("online",n)),()=>{if(V=()=>null,k.current=!0,r&&p[o]){const e=p[o],t=e.indexOf(r);t>=0&&(e[t]=e[e.length-1],e.pop())}if(y[o]){const e=y[o],t=e.indexOf(a);t>=0&&(e[t]=e[e.length-1],e.pop())}"undefined"!==typeof removeEventListener&&null!==u&&removeEventListener("online",u)}},[o,W]),C(()=>{let e=null;const t=async()=>{m.current.error||!i.refreshWhenHidden&&!a()||i.refreshWhenOffline||!u()||await W({dedupe:!0}),i.refreshInterval&&(e=setTimeout(t,i.refreshInterval))};return i.refreshInterval&&(e=setTimeout(t,i.refreshInterval)),()=>{e&&clearTimeout(e)}},[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,W]),i.suspense){if(R)throw new Error("Suspense on server side is not yet supported!");let e=c(o),t=c(h);if("undefined"===typeof e&&"undefined"===typeof t){if(d[o]||W(),d[o]&&"function"===typeof d[o].then)throw d[o];e=d[o]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:W,mutate:D,isValidating:m.current.isValidating}}return Object(r.useMemo)(()=>{const e={revalidate:W,mutate:D};return Object.defineProperties(e,{error:{get:function(){return O.current.error=!0,x.current===o?m.current.error:w}},data:{get:function(){return O.current.data=!0,x.current===o?m.current.data:v}},isValidating:{get:function(){return O.current.isValidating=!0,m.current.isValidating}}}),e},[W])};new Map;t.a=V},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,f,c=r(t),s=r(n);if(c&&s){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(c!=s)return!1;var d=t instanceof Date,l=n instanceof Date;if(d!=l)return!1;if(d&&l)return t.getTime()==n.getTime();var p=t instanceof RegExp,y=n instanceof RegExp;if(p!=y)return!1;if(p&&y)return t.toString()==n.toString();var g=i(t);if((u=g.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,g[a]))return!1;for(a=u;0!==a--;)if(!e(t[f=g[a]],n[f]))return!1;return!0}return t!==t&&n!==n}}}]);