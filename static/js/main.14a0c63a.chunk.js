(this["webpackJsonphahow-frontend-project"]=this["webpackJsonphahow-frontend-project"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t(12),c=t.n(i),a=t(3),u=t(4);function s(){var n=Object(a.a)(["\n  html {\n    scroll-behavior: smooth;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: white;\n    letter-spacing: 1px;\n  }\n\n  h1, h2, h3 {\n    color: white;\n    font-weight: 400;\n  }\n\n  li {\n    list-style-type: none;\n  }\n  \n  a {\n    text-decoration: none;\n    display: flex;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  button {\n    border: none;\n    background-color: #fff;\n    cursor: pointer;\n  }\n\n  button:hover, button:focus {\n    outline: none;\n  }\n\n  body {\n    font:  14px 'Anton', sans-serif;\n  }\n"]);return s=function(){return n},n}var f=Object(u.a)(s()),l=t(11);function d(){var n=Object(a.a)([""]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n  width: 105%;\n"]);return b=function(){return n},n}function h(){var n=Object(a.a)(["\n  overflow: hidden;\n"]);return h=function(){return n},n}function j(){var n=Object(a.a)(["\n  padding: 15px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: white;\n  font-size: 18px;\n  font-weight: 400;\n"]);return j=function(){return n},n}function p(){var n=Object(a.a)(["\n  padding: 10px;\n  background-color: #101010;\n  text-align: center;\n  filter: brightness(0.65);\n  transition: filter linear 0.2s;\n\n  &.active,\n  :hover {\n    transition: all linear 0.2s;\n    filter: brightness(1.5);\n    & img {\n      transition: all linear 0.2s;\n      transform: translateX(-5px);\n    }\n    & h1 {\n      color: #ffd700;\n    }\n  }\n"]);return p=function(){return n},n}var x=Object(u.b)(l.b)(p()),g=u.b.h1(j()),O=u.b.div(h()),v=u.b.img(b()),m=u.b.div(d()),P=function(n){var e=n.hero;return Object(r.jsx)(x,{to:"/heros/".concat(e.id),children:Object(r.jsxs)(m,{children:[Object(r.jsx)(O,{children:Object(r.jsx)(v,{src:e.image})}),Object(r.jsx)(g,{children:e.name})]})})};function y(){var n=Object(a.a)(["\n  margin: 0 20px;\n  width: 20px;\n  text-align: center;\n  font-size: 22px;\n"]);return y=function(){return n},n}function w(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return w=function(){return n},n}function k(){var n=Object(a.a)(["\n  margin-right: 40px;\n  width: 10%;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  font-size: 22px;\n"]);return k=function(){return n},n}function M(){var n=Object(a.a)(["\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n"]);return M=function(){return n},n}var H=u.b.div(M()),z=u.b.h3(k()),S=u.b.div(w()),E=u.b.div(y()),C=function(n){var e=n.abilityName,t=n.abilityPoint,o=n.handlePlusPoint,i=n.handleMinusPoint;return Object(r.jsxs)(H,{children:[Object(r.jsx)(z,{children:e}),Object(r.jsxs)(S,{children:[Object(r.jsx)(N,{onClick:function(){return o(e)},children:"\u2795"}),Object(r.jsx)(E,{children:t}),Object(r.jsx)(N,{onClick:function(){return i(e)},children:"\u2796"})]})]})};function G(){var n=Object(a.a)(["\n  margin-top: 20px;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 5px 30px;\n  background-color: #81559a;\n  font-size: 18px;\n  :hover {\n    filter: brightness(130%);\n  }\n"]);return G=function(){return n},n}var I=u.b.button(G());function J(){var n=Object(a.a)(["\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 2px;\n  background-color: #81559a;\n  font-size: 22px;\n  :hover {\n    filter: brightness(130%);\n  }\n"]);return J=function(){return n},n}var N=u.b.button(J()),A=t(8),F=t(13),L="https://hahow-recruit.herokuapp.com/heroes",T=Object(F.b)({name:"hero",initialState:{heros:[],sumPoints:0,heroProfile:{str:0,int:0,agi:0,luk:0},message:null,errorMessage:null},reducers:{setHeros:function(n,e){n.heros=e.payload},setHero:function(n,e){n.hero=e.payload},setHeroProfile:function(n,e){n.heroProfile=e.payload},setSumPoints:function(n,e){n.sumPoints=e.payload},plusPoint:function(n,e){n.heroProfile[e.payload]+=1},minusPoint:function(n,e){n.heroProfile[e.payload]-=1},setMessage:function(n,e){n.message=e.payload},setErrorMessage:function(n,e){n.errorMessage=e.payload}}}),B=T.actions,K=B.setHeros,X=B.setHeroProfile,q=B.setSumPoints,D=B.plusPoint,Q=B.minusPoint,R=B.setMessage,U=B.setErrorMessage,V=function(){return function(n){fetch("".concat(L,"/")).then((function(n){return n.json()})).then((function(e){void 0===e[0].name?n(U("Fail to Load")):n(K(e))}))}},W=function(n){return function(e){(function(n){return fetch("".concat(L,"/").concat(n,"/profile")).then((function(n){return n.json()}))})(n).then((function(n){if(void 0===n.str)e(U("\u66ab\u6642\u7121\u6cd5\u53d6\u5f97\u8cc7\u6599\uff0c\u8acb\u91cd\u65b0\u6574\u7406"));else{var t=n,r=Object.values(n).reduce((function(n,e){return n+e}));e(X(t)),e(q(r))}}))}},Y=function(n,e){return function(t){(function(n,e){return fetch("".concat(L,"/").concat(n,"/profile"),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.statusText}))})(n,e).then((function(n){return t(n&&"OK"===n?R("\u5132\u5b58\u6210\u529f"):U("\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"))}))}},Z=function(n){return n.hero.heros},$=function(n){return n.hero.heroProfile},_=function(n){return n.hero.message},nn=function(n){return n.hero.errorMessage},en=function(n){return n.hero.sumPoints},tn=T.reducer;function rn(){var n=Object(A.b)(),e=Object(A.c)(Z),t=Object(A.c)($),r=Object(A.c)(_),o=Object(A.c)(nn),i=Object(A.c)(en)-Object.values(t).reduce((function(n,e){return n+e})),c=function(){n(R(null)),n(U(null))};return{handleGetHeros:function(){n(V())},handleGetHeroProfile:function(e){n(W(e))},handleSaveProfile:function(e,t){n(0===i?Y(e,t):U("\u9084\u6709\u9ede\u6578\u54e6"))},handlePlusPoint:function(e){0!==i&&(n(D(e)),c())},handleMinusPoint:function(e){t[e]>0&&(n(Q(e)),c())},resetMessage:c,heros:e,heroProfile:t,errorMessage:o,message:r,lastPoints:i}}function on(){var n=Object(a.a)(["\n  font-size: 24px;\n  color: red;\n"]);return on=function(){return n},n}function cn(){var n=Object(a.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  justify-items: center;\n  margin: 0 auto;\n  padding: 10px;\n  max-width: 800px;\n  background-color: #34094b;\n  box-shadow: 5px 5px 15px 5px #000000;\n"]);return cn=function(){return n},n}var an=u.b.div(cn()),un=u.b.div(on()),sn=function(){var n=rn(),e=n.heros,t=n.errorMessage,i=n.handleGetHeros;return Object(o.useEffect)((function(){return i()}),[]),Object(r.jsx)(an,{children:"Fail to Load"===t?Object(r.jsx)(un,{children:t}):e.map((function(n){return Object(r.jsx)(P,{hero:n},n.id)}))})},fn=t(22),ln="@media screen and (min-width: 680px)",dn=t(2);function bn(){var n=Object(a.a)(["\n  margin-bottom: 5px;\n  color: red;\n  font-weight: 800;\n"]);return bn=function(){return n},n}function hn(){var n=Object(a.a)(["\n  margin-bottom: 5px;\n  color: white;\n  font-weight: 800;\n"]);return hn=function(){return n},n}function jn(){var n=Object(a.a)([""]);return jn=function(){return n},n}function pn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  font-size: 18px;\n  "," {\n    margin: 0;\n    justify-content: flex-end;\n    width: 30%;\n  }\n"]);return pn=function(){return n},n}function xn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  "," {\n    width: 70%;\n    height: 100%;\n  }\n"]);return xn=function(){return n},n}function gn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px 30px;\n  "," {\n    flex-direction: row;\n  }\n"]);return gn=function(){return n},n}function On(){var n=Object(a.a)(["\n  margin: 20px auto 0;\n  max-width: 800px;\n  min-height: fit-content;\n  padding: 10px;\n  background-color: #34094b;\n  box-shadow: 5px 5px 15px 5px #000000;\n"]);return On=function(){return n},n}var vn=u.b.div(On()),mn=u.b.div(gn(),ln),Pn=u.b.div(xn(),ln),yn=u.b.div(pn(),ln),wn=u.b.div(jn()),kn=u.b.div(hn()),Mn=Object(u.b)(kn)(bn()),Hn=function(){var n=Object(dn.h)().heroId,e=rn(),t=e.heroProfile,i=e.errorMessage,c=e.message,a=e.lastPoints,u=e.handleGetHeroProfile,s=e.handlePlusPoint,f=e.handleMinusPoint,l=e.handleSaveProfile,d=e.resetMessage;return Object(o.useEffect)((function(){u(n),d()}),[n]),Object(r.jsx)(vn,{children:Object(r.jsxs)(mn,{children:[Object(r.jsx)(Pn,{children:Object.entries(t).map((function(n){var e=Object(fn.a)(n,2),t=e[0],o=e[1];return Object(r.jsx)(C,{abilityName:t,abilityPoint:o,handlePlusPoint:s,handleMinusPoint:f},t)}))}),Object(r.jsxs)(yn,{children:[i&&Object(r.jsx)(Mn,{children:i}),c&&Object(r.jsx)(kn,{children:c}),Object(r.jsxs)(wn,{children:["\u5269\u9918\u9ede\u6578\uff1a",a]}),Object(r.jsx)(I,{onClick:function(){return l(n,t)},children:"\u5132\u5b58"})]})]})})};function zn(){var n=Object(a.a)(["\n  padding: 20px 60px;\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(#64337f, #000);\n"]);return zn=function(){return n},n}var Sn=u.b.div(zn());var En=function(){return Object(r.jsxs)(Sn,{children:[Object(r.jsx)(f,{}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(sn,{}),Object(r.jsx)(dn.c,{basename:"/heros",children:Object(r.jsx)(dn.a,{path:"/:heroId",element:Object(r.jsx)(Hn,{})})})]})]})},Cn=Object(F.a)({reducer:{hero:tn}});c.a.render(Object(r.jsx)(A.a,{store:Cn,children:Object(r.jsx)(En,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.14a0c63a.chunk.js.map