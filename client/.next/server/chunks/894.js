exports.id=894,exports.ids=[894],exports.modules={459:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return i}});let n="refresh",o="navigate",u="restore",l="server-patch",f="prefetch",a="fast-refresh",i="server-action";(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1982:(e,t,r)=>{"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(4293),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(1763),o=n._(r(6689)),u=r(2250),l=r(5877),f=r(4151),a=r(4453),i=r(9213),c=r(6329),s=r(5316),d=r(3662),p=r(1982),v=r(6598),y=r(459);function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:f,as:b,children:g,prefetch:_=null,passHref:O,replace:m,shallow:h,scroll:E,locale:C,onClick:T,onMouseEnter:j,onTouchStart:M,legacyBehavior:R=!1,...P}=e;r=g,R&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let A=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),x=null!=A?A:I,S=!A,L=!1!==_,N=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:U,as:k}=o.default.useMemo(()=>{if(!A){let e=formatStringOrUrl(f);return{href:e,as:b?formatStringOrUrl(b):e}}let[e,t]=(0,u.resolveHref)(A,f,!0);return{href:e,as:b?(0,u.resolveHref)(A,b):t||e}},[A,f,b]),K=o.default.useRef(U),D=o.default.useRef(k);R&&(n=o.default.Children.only(r));let F=R?n&&"object"==typeof n&&n.ref:t,[H,w,V]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(D.current!==k||K.current!==U)&&(V(),D.current=k,K.current=U),H(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[k,F,U,V,H]);o.default.useEffect(()=>{},[k,U,w,C,L,null==A?void 0:A.locale,x,S,N]);let z={ref:q,onClick(e){R||"function"!=typeof T||T(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,r,n,u,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:f,locale:i,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,x,U,k,m,h,E,C,S,L)},onMouseEnter(e){R||"function"!=typeof j||j(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){R||"function"!=typeof M||M(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,a.isAbsoluteUrl)(k))z.href=k;else if(!R||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(k,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);z.href=t||(0,v.addBasePath)((0,i.addLocale)(k,e,null==A?void 0:A.defaultLocale))}return R?o.default.cloneElement(n,z):o.default.createElement("a",{...P,...z},r)}),g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3662:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(6689),o=r(5152),u="function"==typeof IntersectionObserver,l=new Map,f=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:a}=e,i=a||!u,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},f.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]);let v=(0,n.useCallback)(()=>{s(!1)},[]);return[p,c,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5316:(e,t,r)=>{"use strict";e.exports=r(9847).vendored.contexts.AppRouterContext},9894:(e,t,r)=>{e.exports=r(8368)}};