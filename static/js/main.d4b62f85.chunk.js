(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),c=(a(14),a(5),a(4)),m=a(1);function u(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,"Exercicis React"),l.a.createElement("div",{class:"HolyGrail-body"},l.a.createElement("main",{class:"HolyGrail-content"},l.a.createElement(m.a,null)),l.a.createElement("nav",{class:"HolyGrail-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/avatar"},"Avatar")," "),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/calculadora"},"Calculadora")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/comptador"},"Comptador")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/graella-fotos"},"Graella de fotos")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/acordio"},"Acordio")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/toggle-button"},"Toggle button")))),l.a.createElement("aside",{class:"HolyGrail-ads"},"Aside")),l.a.createElement("footer",null,"by Nuria Viana"))}function i(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Welcome!!"),l.a.createElement("p",null,"Si us plau, uitlitza el navegador per veure'ls"))}function s(e){var t=e.author;return l.a.createElement("img",{className:"Avatar",src:t.avatarUrl,alt:t.name})}function E(e){var t=e.user;return l.a.createElement("div",{className:"UserInfo"},l.a.createElement(s,{author:t}),l.a.createElement("div",{className:"UserInfo-name"},t.name))}function d(e){var t=e.author,a=e.text,n=e.date;return l.a.createElement("div",{className:"Comment"},l.a.createElement(E,{user:t}),l.a.createElement("div",{className:"Comment-text"},a),l.a.createElement("div",{className:"Comment-date"},function(e){return new Date(e).toLocaleDateString("ca",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}(n)))}function p(){return l.a.createElement(d,{author:{avatarUrl:"https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg",name:"Ward Cunninghan"},text:"Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community.",date:"June 2009"})}var g=a(2),b=[1,2,3,4,5,6,7,8,9,0];function f(e){var t=e.onPressed,a=e.children;return l.a.createElement("button",{onClick:t},a)}function v(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),c=Object(g.a)(o,2),m=c[0],u=c[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),E=s[0],d=s[1],p=Object(n.useState)("false"),v=Object(g.a)(p,2),h=v[0],C=v[1],j=function(e){C(!0),u(a),h||w(),d(e)},w=function(){"+"===E&&r(m+a),"-"===E&&r(m-a)};return l.a.createElement("div",{className:"Calculator"},l.a.createElement("div",{className:"Display"},a),l.a.createElement("div",{className:"Numbers"},b.map(function(e){return l.a.createElement(f,{onPressed:function(){return function(e){r(h?e:10*a+e),C(!1)}(e)}},e)})),l.a.createElement("div",{className:"Buttons"},l.a.createElement("button",{onClick:function(){return j("+")}},"+"),l.a.createElement("button",{onClick:function(){return j("-")}},"-"),l.a.createElement("button",{onClick:w},"="),l.a.createElement("button",{onClick:function(){d(""),r(0)}},"C")))}function h(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],o=function(e){!function(e){return a+parseInt(e)<0?(console.log(a),!1):!(a+parseInt(e)>10)||(console.log(a),!1)}(e)?r("error"):("+1"===e&&r(a+1),"-1"===e&&r(a-1),"+5"===e&&r(a+5))};return l.a.createElement("div",{className:"Comptador"},l.a.createElement("div",{className:"Comptador__Display"},a),l.a.createElement("div",{className:"Comptador__Buttons"},l.a.createElement("button",{className:"Comptador__button",onClick:function(){return o("+1")}},"+ 1"),l.a.createElement("button",{className:"Comptador__button",onClick:function(){return o("-1")}},"- 1"),l.a.createElement("button",{className:"Comptador__button",onClick:function(){return o("+5")}},"+ 5")))}var C=["https://ep01.epimg.net/elviajero/imagenes/2017/06/01/actualidad/1496332304_582513_1496333053_noticia_normal.jpg","https://previews.123rf.com/images/ksena32/ksena321710/ksena32171000413/87933208-fondo-de-confeti-de-peque%C3%B1as-estrellas-de-colores.jpg","https://previews.123rf.com/images/pwg89/pwg891509/pwg89150900025/45306031-hojas-peque%C3%B1as.jpg","https://thumbs.dreamstime.com/z/bu%C3%B1uelo-lindo-del-kawai-rosa-con-el-desmoche-y-peque%C3%B1as-estrellas-objeto-separado-fondo-elemento-vector-para-su-embalaje-tarjeta-143012373.jpg"];function j(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(g.a)(o,2),m=c[0],u=c[1],i=function(e){u(e.target.src),""===a&&r("full-screen"),"full-screen"===a&&r("")};return l.a.createElement("div",{className:"container"},C.map(function(e){return l.a.createElement("picture",{key:e},l.a.createElement("img",{className:e===m?a:"",src:e,alt:"img",width:"150px",height:"100px",onClick:i}))}))}var w=[{id:1,titol:"T\xedtol 1",text:"Contingut 1"},{id:2,titol:"T\xedtol 2",text:"Contingut 2"},{id:3,titol:"T\xedtol 3",text:"Contingut 3"},{id:4,titol:"T\xedtol 4",text:"Contingut 4"}];function k(){var e=Object(n.useState)("null"),t=Object(g.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"Container"},w.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("h1",{className:"Text",onClick:function(){return function(e){console.log(e),console.log(a),r(a!==e?e:null)}(e)}},e.titol),l.a.createElement("h5",{className:e===a?"Text":"Text-none"},e.text))}))}function N(){var e=Object(n.useState)("yellow"),t=Object(g.a)(e,2),a=t[0],r=t[1],o="yellow"!==a;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{style:{background:a},onClick:function(){a&&r("green"),"green"===a&&r("yellow")}},"Toggle Me"),o?l.a.createElement("p",null,"Bot\xf3 premut"):l.a.createElement("p",null,"Bot\xf3 no premut"))}function y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Ups! P\xe1gina no encontrada"),l.a.createElement("h5",null,"Error 404"))}var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",element:l.a.createElement(u,null)},l.a.createElement(m.b,{index:!0,element:l.a.createElement(i,null)}),l.a.createElement(m.b,{path:"avatar",element:l.a.createElement(p,null)}),l.a.createElement(m.b,{path:"calculadora",element:l.a.createElement(v,null)}),l.a.createElement(m.b,{path:"comptador",element:l.a.createElement(h,null)}),l.a.createElement(m.b,{path:"graella-fotos",element:l.a.createElement(j,null)}),l.a.createElement(m.b,{path:"acordio",element:l.a.createElement(k,null)}),l.a.createElement(m.b,{path:"toggle-button",element:l.a.createElement(N,null)}),l.a.createElement(m.b,{path:"*",element:l.a.createElement(y,null)})))))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),O()},5:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d4b62f85.chunk.js.map