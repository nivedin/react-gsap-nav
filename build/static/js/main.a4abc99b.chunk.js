(this["webpackJsonpgsap-menu"]=this["webpackJsonpgsap-menu"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(16),r=n.n(a),s=(n(22),n(23),n(8)),o=n(2),u=n(11),l=n(4),d=n.p+"static/media/dallas.515fa077.webp",j=n.p+"static/media/austin.890f7d26.webp",m=n.p+"static/media/newyork.824150ab.webp",f=n.p+"static/media/sanfrancisco.08608ad9.webp",h=n.p+"static/media/beijing.28d52862.webp",b=n(0),p=[{name:"Dallas",image:d},{name:"Austin",image:j},{name:"Newyork",image:m},{name:"Sanfrancisco",image:f},{name:"Beijing",image:h}];var O=function(e){var t=e.state,n=Object(i.useRef)(null),c=Object(i.useRef)(null),a=Object(i.useRef)(null),r=Object(i.useRef)(null),o=Object(i.useRef)(null),u=Object(i.useRef)(null),d=Object(i.useRef)(null),j=Object(i.useRef)(null);Object(i.useEffect)((function(){!1===t.clicked?(l.a.to([c,a],{duration:.8,height:0,ease:"power3.inOut",stagger:{amount:.07}}),l.a.to(n,{duration:1,css:{display:"none"}})):(!0===t.clicked||!0===t.clicked&&null===t.initial)&&(l.a.to(n,{duration:0,css:{display:"block"}}),l.a.to([a,c],{duration:0,opacity:1,height:"100%"}),m(a,c),h(j),f(o,u,d))}),[t]);var m=function(e,t){l.a.from([e,t],{duration:.8,height:0,transform:"right top",skewY:2,ease:"power3.inOut",stagger:{amount:.1}})},f=function(e,t,n){l.a.from([e,t,n],{duration:.8,y:100,delay:.1,ease:"power3.inOut",stagger:{amount:.5}})},h=function(e){l.a.from(e,{y:60,duration:1,delay:.2,opacity:0,ease:"power3.inOut"})},O=function(){l.a.to(r,{duration:.4,opacity:0})},x=function(e){l.a.to(e.target,{duration:.3,y:3,skewX:4,ease:"power3.inOut"})},g=function(e){l.a.to(e.target,{duration:.3,y:-3,skewX:0,ease:"power3.inOut"})};return Object(b.jsxs)("div",{ref:function(e){return n=e},className:"hamburger-menu",children:[Object(b.jsx)("div",{ref:function(e){return a=e},className:"menu-secondary-background-color"}),Object(b.jsxs)("div",{ref:function(e){return c=e},className:"menu-layer",children:[Object(b.jsx)("div",{ref:function(e){return r=e},className:"menu-city-background"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"menu-links",children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{onMouseEnter:function(e){return x(e)},onMouseOut:function(e){return g(e)},ref:function(e){return o=e},to:"/oppurtunities",children:"Oppurtunities"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{onMouseEnter:function(e){return x(e)},onMouseOut:function(e){return g(e)},ref:function(e){return u=e},to:"/solutions",children:"Solutions"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{onMouseEnter:function(e){return x(e)},onMouseOut:function(e){return g(e)},ref:function(e){return d=e},to:"/contact-us",children:"Contact"})})]})}),Object(b.jsxs)("div",{ref:function(e){return j=e},className:"info",children:[Object(b.jsx)("h3",{children:"Our Promise"}),Object(b.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]}),Object(b.jsxs)("div",{className:"locations",children:[Object(b.jsx)("span",{className:"locationText",children:"Locations:"}),p.map((function(e){return Object(b.jsx)("span",{onMouseEnter:function(){return t=e.image,l.a.to(r,{duration:0,background:"url(".concat(t,") center center")}),l.a.to(r,{duration:.8,opacity:1,ease:"power3.inOut"}),void l.a.from(r,{duration:.4,skewY:2,transformOrigin:"right top"});var t},onMouseOut:O,children:e.name},e.name)}))]})]})})})]})]})};var x=Object(o.f)((function(e){var t=e.history,n=Object(i.useState)({initial:!1,clicked:null,menuName:"Menu"}),c=Object(u.a)(n,2),a=c[0],r=c[1],o=Object(i.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1];Object(i.useEffect)((function(){t.listen((function(){r({clicked:!1,menuName:"Menu"})}))}),[]);var m=function(){j(!d),setTimeout((function(){j(!1)}),1200)};return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"inner-header",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(s.b,{to:"/",children:"HAMBGR."})}),Object(b.jsx)("div",{className:"menu",children:Object(b.jsx)("button",{disabled:d,onClick:function(){m(),!1===a.initial?r({initial:null,clicked:!0,menuName:"Close"}):!0===a.clicked?r({clicked:!a.clicked,menuName:"Menu"}):!1===a.clicked&&r({clicked:!a.clicked,menuName:"Close"})},children:a.menuName})})]})})}),Object(b.jsx)(O,{state:a})]})}));var g=function(){return Object(b.jsx)("div",{className:"homeContainer",children:Object(b.jsx)("div",{className:"homeWrapper",children:Object(b.jsxs)("h5",{children:["The ",Object(b.jsx)("b",{children:"HAMBRG"}),", is a creative, engineer driven, global agency working on advancing the software, advertising and design communities to new heights."]})})})},v=["https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1497&q=80","https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80","https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80","https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"];n(33);var w=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(i.useState)(e),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(i.useEffect)((function(){function t(){a(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c}(),c={ease:.1,current:0,previous:0,rounded:0};Object(i.useEffect)((function(){document.body.style.height="".concat(t.current.getBoundingClientRect().height,"px")}),[n.height]),Object(i.useEffect)((function(){requestAnimationFrame((function(){return a()}))}),[]);var a=function e(){c.current=window.scrollY,c.previous+=(c.current-c.previous)*c.ease,c.rounded=Math.round(100*c.previous)/100;var i=7.5*+((c.current-c.rounded)/n.width);t.current.style.transform="translate3d(0,-".concat(c.rounded,"px,0) skewY(").concat(i,"deg)"),requestAnimationFrame((function(){return e()}))};return Object(b.jsx)("div",{ref:e,className:"Appscroll",children:Object(b.jsx)("div",{ref:t,className:"scroll",children:v.map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:e,alt:"people ".concat(t)})},t),Object(b.jsxs)("h2",{children:["Skew ",Object(b.jsx)("span",{className:"outline",children:"Scrolling"})]})]})}))})})};var y=function(){return Object(b.jsx)("p",{style:{marginTop:"100px"},children:"Solutions that help you."})};var k=function(){return Object(b.jsx)("p",{style:{marginTop:"100px"},children:"Feel free to reach us."})};var N=function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(o.a,{path:"/oppurtunities",component:w}),Object(b.jsx)(o.a,{path:"/solutions",component:y}),Object(b.jsx)(o.a,{path:"/contact-us",component:k})]})})})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),M()}},[[34,1,2]]]);
//# sourceMappingURL=main.a4abc99b.chunk.js.map