(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{6071:function(e,n,t){"use strict";var r=t(3848),o=t(9448);n.default=void 0;var a=o(t(7294)),u=t(1689),c=t(2441),i=t(5749),f={};function l(e,n,t,r){if(e&&(0,u.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,_=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),E=m&&"object"===typeof m&&m.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),w=r(g,2),L=w[0],k=w[1],M=a.default.useCallback((function(e){L(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,L]);(0,a.useEffect)((function(){var e=k&&n&&(0,u.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,k,y,n,t]);var C={ref:M,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}))}(e,t,d,p,h,b,_,y)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof y?y:t&&t.locale,I=t&&t.isLocaleDomain&&(0,u.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);C.href=I||(0,u.addBasePath)((0,u.addLocale)(p,N,t&&t.defaultLocale))}return a.default.cloneElement(m,C)};n.default=s},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,i=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!u&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(8391),u="undefined"!==typeof IntersectionObserver;var c=new Map},3861:function(e,n,t){"use strict";var r=(0,t(4894).Z)((function(e){return{router:{},events:null,setEvents:function(n){e({events:n})}}}));n.Z=r},5771:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return i}});var r=t(5893),o=t(3861),a=t(5152),u=(t(1664),(0,a.default)((function(){return Promise.all([t.e(774),t.e(737),t.e(95),t.e(322),t.e(898)]).then(t.bind(t,898))}),{ssr:!1,loadableGenerated:{webpack:function(){return[898]},modules:["@/components/canvas/Sphere"]}})),c=!0,i=function(e){var n=e.title;return o.Z.setState({title:n}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{r3f:!0})})}},3685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5771)}])},1664:function(e,n,t){e.exports=t(6071)},4453:function(){}},function(e){e.O(0,[774,597,212],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);