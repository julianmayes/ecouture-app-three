_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"55Ip":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("Ty5D");function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}var a=n("q1tI"),c=n.n(a),s=n("LhCv");n("17x9");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var f=n("9R94"),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=Object(s.a)(t.props),t}return i(t,e),t.prototype.render=function(){return c.a.createElement(r.c,{history:this.history,children:this.props.children})},t}(c.a.Component);c.a.Component;var p=function(e,t){return"function"===typeof e?e(t):e},d=function(e,t){return"string"===typeof e?Object(s.c)(e,null,null,t):e},m=function(e){return e},b=c.a.forwardRef;"undefined"===typeof b&&(b=m);var g=b((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=u(e,["innerRef","navigate","onClick"]),a=i.target,s=l({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=m!==b&&t||n,c.a.createElement("a",s)}));var y=b((function(e,t){var n=e.component,o=void 0===n?g:n,i=e.replace,a=e.to,s=e.innerRef,h=u(e,["component","replace","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=e.history,r=d(p(a,e.location),e.location),u=r?n.createHref(r):"",g=l({},h,{href:u,navigate:function(){var t=p(a,e.location);(i?n.replace:n.push)(t)}});return m!==b?g.ref=t||s:g.innerRef=s,c.a.createElement(o,g)}))})),j=function(e){return e},v=c.a.forwardRef;"undefined"===typeof v&&(v=j);v((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,i=e.activeClassName,a=void 0===i?"active":i,s=e.activeStyle,h=e.className,m=e.exact,b=e.isActive,g=e.location,O=e.sensitive,w=e.strict,x=e.style,C=e.to,_=e.innerRef,E=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.a.createElement(r.e.Consumer,null,(function(e){e||Object(f.a)(!1);var n=g||e.location,i=d(p(C,n),n),u=i.pathname,N=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=N?Object(r.f)(n.pathname,{path:N,exact:m,sensitive:O,strict:w}):null,R=!!(b?b(k,n):k),T=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(h,a):h,H=R?l({},x,{},s):x,A=l({"aria-current":R&&o||null,className:T,style:H,to:i},E);return j!==v?A.ref=t||_:A.innerRef=_,c.a.createElement(y,A)}))}))},Capr:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("gYMh"),i=n("MX0m"),a=n.n(i),c=(n("N8vD"),n("O0l9")),s=n("q1tI"),l=n("55Ip"),u=n("Ty5D");function f(e){Object(o.a)(e);var t=Object(s.useState)([]),n=t[0],i=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{children:Object(r.jsx)("div",{className:"jsx-3090424074 App",children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.a,{exact:!0,from:"/",to:"/home"}),Object(r.jsx)(u.b,{path:"/home",children:Object(r.jsx)(c.a,{colorOne:"#3884ff",choices:n,setChoices:i,linkTo:"/form1",page:"home",waterHeight:"5",buttons:["get started"],dialogue:"Check to see if your future clothing purchase is sustainable.",dialogueColor:"#3884ff",title:"Eco Calculator"})}),Object(r.jsx)(u.b,{path:"/form1",children:Object(r.jsx)(c.a,{colorOne:"#3884ff",choices:n,setChoices:i,linkTo:"/form2",page:"form1",waterHeight:"25",buttons:["burnaby","vancouver","richmond","surrey"],dialogue:"or closest to",title:"Where are you located?"})}),Object(r.jsx)(u.b,{path:"/form2",children:Object(r.jsx)(c.a,{colorOne:"#3884ff",choices:n,setChoices:i,linkTo:"/form3",page:"form2",waterHeight:"65",buttons:["on-line","in-store","both"],dialogue:"Shopping online contributes significantly more waste than in store.",title:"Where do you shop?"})}),Object(r.jsx)(u.b,{path:"/form3",children:Object(r.jsx)(c.a,{title:"What condition do you buy?",colorOne:"#3884ff",choices:n,setChoices:i,linkTo:"/form4",page:"form3",waterHeight:"75",buttons:["new","used","both"],dialogue:"Buying used clothing can reduce your carbon footprint."})}),Object(r.jsx)(u.b,{path:"/form4",children:Object(r.jsx)(c.a,{title:"What are your clothes made from?",colorOne:"green",choices:n,setChoices:i,linkTo:"/loading",page:"form4",waterHeight:"100",buttons:["cotton","animal","plant","synthetic"],dialogue:"* or most of your clothes"})}),Object(r.jsx)(u.b,{path:"/loading",children:Object(r.jsx)(c.a,{colorOne:"green",choices:n,setChoices:i,linkTo:"/home",page:"loading",waterHeight:"110",buttons:["cotton","animal","plant","synthetic"],dialogue:""})})]})})}),Object(r.jsx)(a.a,{id:"3090424074",children:["@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');","html,body{width:100%;height:100%;margin:0;padding:0;overflow-x:hidden;font-family:Nunito;}","*{margin:0;}","a{color:white;}"]})]})}},gYMh:function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return r}))},xtzE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form1",function(){return n("Capr")}])}},[["xtzE",0,1,2,3,4]]]);