_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),w=y&&"object"===typeof y&&y.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),_=r(E,2),M=_[0],L=_[1],j=a.default.useCallback((function(e){M(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,M]);(0,a.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,L,m,n,t]);var x={ref:j,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,d,p,h,b,g,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var O="undefined"!==typeof m?m:t&&t.locale,R=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,O,t&&t.locales,t&&t.domainLocales);x.href=R||(0,c.addBasePath)((0,c.addLocale)(p,O,t&&t.defaultLocale))}return a.default.cloneElement(y,x)};n.default=f},epR4:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("uZ6U"),a=t("Vvt1"),c=t.n(a),u=t("YFqc"),i=t.n(u),s=function(){return Object(r.jsx)(i.a,{href:"/",as:"/",children:Object(r.jsx)("a",{className:"absolute z-20 p-2 m-2 text-gray-100 focus:outline-none focus:ring",children:"Previous page"})})},l=c()((function(){return Promise.all([t.e(0),t.e(4),t.e(15)]).then(t.bind(null,"EFaM"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["EFaM"]},modules:["@/components/canvas/Box"]}});n.default=function(){return o.a.setState({title:"Box"}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{r3f:!0}),Object(r.jsx)(s,{})]})}},fRa2:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/box",function(){return t("epR4")}])},vNVm:function(e,n,t){"use strict";var r=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["fRa2",1,0,2,3]]]);