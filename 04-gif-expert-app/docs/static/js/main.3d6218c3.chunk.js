(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(7),r=a.n(c),i=(a(15),a(2)),s=a(9),o=a(0),u=function(e){var t=e.categories,a=e.setCategories,c=0,r=Object(n.useState)(""),u=Object(i.a)(r,2),l=u[0],d=u[1];return Object(o.jsxs)("form",{className:"searchBox",onSubmit:function(e){e.preventDefault(),console.log("Submit ha sido detenido"),l.trim().length>2?a([l].concat(Object(s.a)(t))):d("")},children:[Object(o.jsxs)("span",{children:["Tu b\xfasqueda es: ",l]}),Object(o.jsx)("input",{type:"text",name:"search",id:"searchItem",placeholder:"Ingresa tu b\xfasqueda",onKeyUp:function(e){var t=e.target.value;clearTimeout(c),c=setTimeout((function(){d(t)}),300)},autoComplete:"off"})]})},l=a(10),d=a(6),j=a.n(d),m=a(8),p=function(){var e=Object(m.a)(j.a.mark((function e(t){var a,n,c,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=".concat("oOLjcgRwQ07eJZFYI3dMKQ3quhERcQLE","&q=").concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.id,a=e.url,n=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:a,alt:n},t)})},f=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),1e3)}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(o.jsxs)("div",{className:"categoriesList",children:[Object(o.jsx)("div",{className:"categoryTitle",children:Object(o.jsxs)("h3",{children:[" ",t," "]})}),r&&Object(o.jsx)("strong",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(o.jsx)("div",{className:"categoryContent",children:c.map((function(e){return Object(o.jsxs)("div",{className:"".concat(e.title.toLowerCase().replace(/\s/gi,"-"),"-item card animate__animated animate__fadeIn"),children:[Object(o.jsx)(b,Object(l.a)({},e),e.id),Object(o.jsx)("div",{className:"titleParragraph",children:Object(o.jsx)("span",{children:e.title})})]})}))})]})};var h=function(){var e=Object(n.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{categories:a,setCategories:c}),a.map((function(e){return Object(o.jsx)(f,{category:e},e)}))]})};r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3d6218c3.chunk.js.map