(this.webpackJsonpexercicis=this.webpackJsonpexercicis||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),c=a.n(l),u=(a(23),a(14),a(7)),o=a(2);function m(e){var t=e.author;return r.a.createElement("img",{className:"Avatar",src:t.avatarUrl,alt:t.name})}function i(e){var t=e.user;return r.a.createElement("div",{className:"UserInfo"},r.a.createElement(m,{author:t}),r.a.createElement("div",{className:"UserInfo-name"},t.name))}function s(e){var t=e.author,a=e.text,n=e.date;return r.a.createElement("div",{className:"Comment"},r.a.createElement(i,{user:t}),r.a.createElement("div",{className:"Comment-text"},a),r.a.createElement("div",{className:"Comment-date"},function(e){return new Date(e).toLocaleDateString("ca",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}(n)))}function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Avatar"),r.a.createElement(s,{author:{avatarUrl:"https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg",name:"Ward Cunninghan"},text:"Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community.",date:"June 2009"}))}var d=a(3),b=(a(24),[1,2,3,4,5,6,7,8,9,0]);function g(e){var t=e.onPressed,a=e.children;return r.a.createElement("button",{onClick:t},a)}function p(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),u=Object(d.a)(c,2),o=u[0],m=u[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),E=s[0],p=s[1],f=Object(n.useState)("false"),h=Object(d.a)(f,2),v=h[0],C=h[1],N=function(e){C(!0),m(a),v||j(),p(e)},j=function(){"+"===E&&l(o+a),"-"===E&&l(o-a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Calculadora"),r.a.createElement("div",{className:"Calculator"},r.a.createElement("div",{className:"Display"},a),r.a.createElement("div",{className:"Numbers"},b.map((function(e){return r.a.createElement(g,{onPressed:function(){return function(e){l(v?e:10*a+e),C(!1)}(e)}},e)}))),r.a.createElement("div",{className:"Buttons"},r.a.createElement("button",{onClick:function(){return N("+")}},"+"),r.a.createElement("button",{onClick:function(){return N("-")}},"-"),r.a.createElement("button",{onClick:j},"="),r.a.createElement("button",{onClick:function(){p(""),l(0)}},"C"))))}a(25);function f(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],l=t[1],c=function(e){!function(e){return a+parseInt(e)<0?(console.log(a),!1):!(a+parseInt(e)>10)||(console.log(a),!1)}(e)?l("error"):("+1"===e&&l(a+1),"-1"===e&&l(a-1),"+5"===e&&l(a+5))};return r.a.createElement("div",{className:"Comptador"},r.a.createElement("h1",null,"Comptador"),r.a.createElement("div",{className:"Comptador__Display"},a),r.a.createElement("div",{className:"Comptador__Buttons"},r.a.createElement("button",{className:"Comptador__button",onClick:function(){return c("+1")}},"+ 1"),r.a.createElement("button",{className:"Comptador__button",onClick:function(){return c("-1")}},"- 1"),r.a.createElement("button",{className:"Comptador__button",onClick:function(){return c("+5")}},"+ 5")))}a(26);var h=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU","https://www.ecartelera.com/images/sets/44200/44256.jpg","https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg","https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg"];function v(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1];return a?r.a.createElement("div",{className:"full-screen"},r.a.createElement("img",{src:a,alt:"celebrities",onClick:function(){return l(!1)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Graella de fotos"),r.a.createElement("div",{className:"container"},h.map((function(e){return r.a.createElement("picture",{key:e},r.a.createElement("img",{src:e,alt:"celebrities",onClick:function(){return l(e)}}))}))))}a(27);var C=[{id:1,titol:"T\xedtol 1",text:"Contingut 1"},{id:2,titol:"T\xedtol 2",text:"Contingut 2"},{id:3,titol:"T\xedtol 3",text:"Contingut 3"},{id:4,titol:"T\xedtol 4",text:"Contingut 4"}];function N(){var e=Object(n.useState)("null"),t=Object(d.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",null,"Acordi\xf3"),C.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",{className:"Text",onClick:function(){return function(e){console.log(e),console.log(a),l(a!==e?e:null)}(e)}},e.titol),r.a.createElement("h5",{className:e===a?"Text":"Text-none"},e.text))})))}function j(){var e=Object(n.useState)("yellow"),t=Object(d.a)(e,2),a=t[0],l=t[1],c="yellow"!==a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Toggle Button"),r.a.createElement("button",{style:{background:a},onClick:function(){l("yellow"===a?"green":"yellow")}},"Toggle Me"),c?r.a.createElement("p",null,"Bot\xf3 premut"):r.a.createElement("p",null,"Bot\xf3 no premut"))}a(28);function O(){var e=function(e){return e+1},t=Object(n.useState)(0),a=Object(d.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{className:"Comptador-container"},r.a.createElement("h1",null,"Counter useState"),r.a.createElement("div",null,l),r.a.createElement("button",{className:"Comptador-button",onClick:function(){return c(e)}},"+1"))}a(15);function y(e,t){switch(t.type){case"INCREMENT":return e+t.amount;case"RESET":return 0;default:return e}}function k(e){var t=e.dispatch,a=e.amount;return r.a.createElement("button",{className:"comptador-button",onClick:function(){return t(function(e){return{type:"INCREMENT",amount:e}}(+a))}},a)}function T(e){var t=e.dispatch;return r.a.createElement("button",{className:"comptador-button",onClick:function(){return t({type:"RESET"})}},"reset")}function S(e){var t=e.count;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Counter useReducer"),r.a.createElement("div",null,t))}function x(){var e=Object(n.useReducer)(y,0),t=Object(d.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"comptador-container"},r.a.createElement(S,{count:a}),r.a.createElement(k,{dispatch:l,amount:"+1"}),r.a.createElement(k,{dispatch:l,amount:"-1"}),r.a.createElement(T,{dispatch:l}))}function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(x,null))}var R=a(12);function A(e){return console.log(e),e.counter}var _=a(6);function D(){var e=Object(_.c)(A);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Counter Redux"),r.a.createElement("div",null,e))}function F(e){var t=e.amount,a=Object(_.b)();return r.a.createElement("button",{className:"Comptador-button",onClick:function(){return a(function(e){return{type:"counter/INCREMENT",amount:e}}(+t))}},t)}function I(){var e=Object(_.b)();return r.a.createElement("button",{className:"Comptador-button",onClick:function(){return e({type:"counter/RESET"})}},"reset")}function M(){return r.a.createElement("div",{className:"Comptador-container"},r.a.createElement(D,null),r.a.createElement(F,{amount:"+1"}),r.a.createElement(F,{amount:"-1"}),r.a.createElement(I,null))}a(32);var B=Object(R.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"counter/INCREMENT":return e+t.amount;case"counter/RESET":return 0;default:return e}}}),G=Object(R.b)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function q(){return r.a.createElement(_.a,{store:G},r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(M,null),r.a.createElement(x,null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(D,null),r.a.createElement(F,{amount:"+44"}),r.a.createElement(I,null)))}var U=a(11),V=(a(33),[{imgId:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU"},{imgId:2,image:"https://www.ecartelera.com/images/sets/44200/44256.jpg"},{imgId:3,image:"https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg"},{imgId:4,image:"https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg"}]),J=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],l=t[1],c=V.length;if(!Array.isArray(V)||V.length<=0)return r.a.createElement("p",null,"Has de carregar imatges");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Carrusel"),r.a.createElement("div",{className:"carrusel"},r.a.createElement(U.a,{className:"left-arrow",onClick:function(){l(0===a?c-1:a-1)}}),r.a.createElement(U.b,{className:"right-arrow",onClick:function(){l(a===c-1?0:a+1)}}),V.map((function(e,t){return r.a.createElement(r.a.Fragment,null,t===a&&r.a.createElement("img",{className:"img-carrusel",key:e.imgId,src:e.image,alt:"celebrities"}))}))))},P=(a(34),function(){var e=Object(n.useState)("cap"),t=Object(d.a)(e,2),a=t[0],l=t[1],c=function(e){l(e)};return r.a.createElement("div",{className:"group-button-container"},r.a.createElement("h1",null,"Group Button"),r.a.createElement("div",{className:"group-button"},r.a.createElement("button",{className:"square-button",style:{background:"Text A"===a?"pink":""},onClick:function(){return c("Text A")}},"Text A"),r.a.createElement("button",{className:"square-button",style:{background:"Text B"===a?"pink":""},onClick:function(){return c("Text B")}},"Text B"),r.a.createElement("button",{className:"square-button",style:{background:"Text C"===a?"pink":""},onClick:function(){return c("Text C")}},"Text C")),r.a.createElement("div",{className:"text-mostrar-container"},a))}),H=a(17),L=(a(35),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("h1",null,"Toggleable Sidebar"),r.a.createElement(H.a,{className:"menu-icon",onClick:function(){l(""===a?"none":"")}}),r.a.createElement("div",{className:"sidebar",style:{display:a}},r.a.createElement("div",{className:"sidebar-text"},"sidebar")))}),X=(a(36),function(){var e=Object(n.useState)("Contingut 1"),t=Object(d.a)(e,2),a=t[0],l=t[1],c=function(e){l(e)};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("h1",null,"Tabs"),r.a.createElement("div",{className:"tabs-buttons"},r.a.createElement("button",{style:{background:"Contingut 1"===a?"cyan":""},onClick:function(){return c("Contingut 1")}},"1"),r.a.createElement("button",{style:{background:"Contingut 2"===a?"cyan":""},onClick:function(){return c("Contingut 2")}},"2")),r.a.createElement("div",{className:"tabs-text"},a))}),K=(a(37),new Date),Q=function(e){switch(e){case 1:return"Dilluns";case 2:return"Dimarts";case 3:return"Dimecres";case 4:return"Dijous";case 5:return"Divendres";case 6:return"Dissabte";case 7:return"Diumenge"}}(K.getDay())+", "+(("0"+K.getDate()).slice(-2)+" de ")+function(e){switch(e){case 1:return"Febrer";case 2:return"Mar\xe7";case 3:return"Abril";case 4:return"Maig";case 5:return"Juny";case 6:return"Juliol";case 7:return"Agost";case 8:return"Setembre";case 9:return"Octubre";case 10:return"Novembre";case 11:return"Desembre";case 12:return"Gener"}}(K.getMonth())+" del "+K.getFullYear();function W(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)("data-display"),c=Object(d.a)(l,2),u=c[0],o=c[1],m=Object(n.useState)("Amagar Data"),i=Object(d.a)(m,2),s=i[0],E=i[1],b=(new Date).toLocaleTimeString();Object(n.useEffect)((function(){setInterval((function(){a((function(e){return e+1}))}),1e3)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Rellotge Digital"),r.a.createElement("div",{className:"container-display"},r.a.createElement("h3",{className:"hora-display"},b),r.a.createElement("h5",{className:u},Q," "),r.a.createElement("button",{className:"toggle-button",onClick:function(){return"horaRellotge-amagar"===u?(o("hora-display"),E("Amagar Data")):(o("horaRellotge-amagar"),E("Mostrar Data"))}},s)))}a(38);var Z=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),u=Object(d.a)(c,2),o=u[0],m=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sumador de N\xfameros"),r.a.createElement("div",{className:"container-sumNum"},r.a.createElement("label",null,"Valor: "),r.a.createElement("input",{className:"input-sumNum",type:"number",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Total: "),r.a.createElement("input",{className:"input-sumNum",type:"number",value:o}),r.a.createElement("br",null),r.a.createElement("button",{className:"button-sumNum",onClick:function(){return function(e){return parseFloat(e)||0===e?m(o+parseFloat(e)):l(0)}(a)}},"SUMAR")))},z=[{path:"/avatar",titol:"Avatar",element:r.a.createElement(E,null)},{path:"/toggle-button",titol:"Toggle button",element:r.a.createElement(j,null)},{path:"/comptador",titol:"Comptador",element:r.a.createElement(f,null)},{path:"/group-button",titol:"Group Button",element:r.a.createElement(P,null)},{path:"/toggleable-sidebar",titol:"Toggleable sidebar",element:r.a.createElement(L,null)},{path:"/tabs",titol:"Tabs",element:r.a.createElement(X,null)},{path:"/sumador-numeros",titol:"Sumador N\xfameros",element:r.a.createElement(Z,null)},{path:"/rellotge-digital",titol:"Rellotge digital",element:r.a.createElement(W,null)},{path:"/graella-fotos",titol:"Graella de fotos",element:r.a.createElement(v,null)},{path:"/acordio",titol:"Acordio",element:r.a.createElement(N,null)},{path:"/carrusel",titol:"Carrusel",element:r.a.createElement(J,null)},{path:"/calculadora",titol:"Calculadora",element:r.a.createElement(p,null)},{path:"/comptador-useState",titol:"Comptador useState",element:r.a.createElement(O,null)},{path:"/comptador-useReducer",titol:"Comptador useReducer",element:r.a.createElement(w,null)},{path:"/comptador-Redux",titol:"Comptador Redux",element:r.a.createElement(q,null)}];function Y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,"Exercicis React"),r.a.createElement("div",{class:"HolyGrail-body"},r.a.createElement("main",{class:"HolyGrail-content"},r.a.createElement(o.a,null)),r.a.createElement("nav",{class:"HolyGrail-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home")),z.map((function(e){return r.a.createElement("li",null,r.a.createElement(u.b,{className:"nav-link",to:e.path},e.titol))})))),r.a.createElement("aside",{class:"HolyGrail-ads"},"Aside")),r.a.createElement("footer",null,"by Nuria Viana"))}function $(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome!!"),r.a.createElement("p",null,"Si us plau, uitlitza el navegador per veure'ls"))}function ee(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Ups! P\xe1gina no encontrada"),r.a.createElement("h5",null,"Error 404"))}function te(){return r.a.createElement(u.a,{basename:"/TC-React2022-exercicis"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",element:r.a.createElement(Y,null)},r.a.createElement(o.b,{index:!0,element:r.a.createElement($,null)}),z.map((function(e){return r.a.createElement(o.b,{path:e.path,element:e.element})})),r.a.createElement(o.b,{path:"*",element:r.a.createElement(ee,null)}))))}var ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),ae()}],[[18,1,2]]]);
//# sourceMappingURL=main.dd6a190b.chunk.js.map