(this["webpackJsonpreact-pipefy-clone"]=this["webpackJsonpreact-pipefy-clone"]||[]).push([[0],{12:function(e,n,a){e.exports=a(21)},21:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(5),l=a.n(o),i=a(1),c=a(2);function d(){var e=Object(i.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    font: 14px 'Roboto', sans-serif;\n    background: #ecf1f8;\n    color: #333;\n    -webkit-font-smoothing: antialiased !important\n  }\n\n  ul {\n    list-style: none;\n  }\n"]);return d=function(){return e},e}var s=Object(c.a)(d());function p(){var e=Object(i.a)(["\n  height: 80px;\n  padding: 0 30px;\n  background: #7159c1;\n  color: #FFF;\n\n  display: flex;\n  align-items: center;\n\n"]);return p=function(){return e},e}var u=c.b.div(p());function b(){return r.a.createElement(u,null,r.a.createElement("h1",null,"Pipefy"))}var f=a(10);function g(){var e=Object(i.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: ",";\n\n  & + span {\n    margin-left: 2px;\n  }\n"]);return g=function(){return e},e}function m(){var e=Object(i.a)(["\n  position: relative;\n  background: #FFF;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4);\n  cursor: grab;\n\n  .card-header {\n    height: 20px;\n    position: absolute;\n    top: -18px;\n    left: 15px; // Unused\n  }\n\n  p {\n    font-weight: 600;\n    line-height: 20px;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n    border-radius: 2px;\n    margin-top: 5px;\n  }\n"]);return m=function(){return e},e}var h=c.b.div(m()),v=c.b.span(g(),(function(e){return e.color}));function x(e){var n=e.data;return r.a.createElement(h,null,r.a.createElement("header",{className:"card-header"},n.labels.map((function(e){return r.a.createElement(v,{key:e,color:e})}))),r.a.createElement("p",null,n.content),n.user&&r.a.createElement("img",{src:n.user,alt:""}))}function y(){var e=Object(i.a)(["\n  padding: 0 15px;\n  height: 100%;\n\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 320px;\n\n  opacity: ",";\n\n  & + div {\n    border-left: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  .task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n\n    h2 {\n      font-weight: 600;\n      font-size: 16px;\n      padding: 0 10px;\n\n    }\n\n    button {\n      width: 42px;\n      height: 42px;\n      border-radius: 20px;\n      background: #3b5bfd;\n      border: 0;\n      cursor: pointer;\n    }\n  }\n\n  ul {\n    margin-top: 30px;\n  }\n\n"]);return y=function(){return e},e}var E=c.b.div(y(),(function(e){return e.done?.6:1}));function k(e){var n=e.data;return r.a.createElement(E,null,r.a.createElement("header",{className:"task-header"},r.a.createElement("h2",null,n.title),n.creatable&&r.a.createElement("button",{type:"button"},r.a.createElement(f.a,{size:24,color:"#FFF"}))),r.a.createElement("ul",null,n.cards.map((function(e){return r.a.createElement(x,{key:e.id,data:e})}))))}function w(){var e=Object(i.a)(["\n  display: flex;\n  padding: 30px 0;\n  height: calc(100% - 80px);\n\n"]);return w=function(){return e},e}var R=c.b.div(w());var F=[{title:"Tarefas",creatable:!0,cards:[{id:1,content:"Estudar m\xf3dulo 01 de NodeJS",labels:["#7159c1","#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:2,content:"Criar v\xeddeo para o Youtube ensinando a recriar a interface do Pipefy",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:3,content:"Estudar m\xf3dulo 03 de React Native",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:4,content:'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',labels:["#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:5,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"}]},{title:"Fazendo",creatable:!1,cards:[{id:6,content:"Recriando clone do Pipefy",labels:[],user:"https://api.adorable.io/avatars/285/abott@adorable.png"}]},{title:"Pausado",creatable:!1,cards:[{id:7,content:"Gravar sobre Geolocaliza\xe7\xe3o e mapas com React Native",labels:["#7159c1"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:8,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"],user:"https://api.adorable.io/avatars/285/abott@adorable.png"},{id:9,content:"Ajustes na biblioteca unform",labels:[]}]},{title:"Conclu\xeddo",creatable:!1,done:!0,cards:[{id:10,content:"Gravar aula sobre deploy e CI com React Native",labels:[]},{id:12,content:"Gravar testes e deploy ReactJS",labels:["#54e1f7"]},{id:13,content:'Gravar Aula "Internacionaliza\xe7\xe3o de aplica\xe7\xf5es Node.js, ReactJS e React Native"',labels:["#7159c1"]}]}];function j(){return r.a.createElement(R,null,F.map((function(e){return r.a.createElement(k,{key:e.title,data:e})})))}var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(s,null))};l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bc4c9be0.chunk.js.map