(this.webpackJsonptictactoegame=this.webpackJsonptictactoegame||[]).push([[0],{19:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(7),r=t.n(n),o=t(11),i=t(8),l=t(2),j=function(e){var c=e.name,t=e.sizeOfIcon,s=void 0===t?"50":t;switch(c){case"circle":return Object(l.jsx)(i.b,{size:s,className:"icons"});case"cross":return Object(l.jsx)(i.c,{size:s,className:"icons"});default:return Object(l.jsx)(i.a,{size:s,className:"icons"})}},m=t(9),b=(t(17),t(24)),d=t(25),x=t(26),O=t(27),u=t(28),h=t(29),p=(t(18),t(19),!1),f=!1,y=new Array(9).fill("empty"),N=function(){var e=Object(s.useState)(!1),c=Object(o.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],N=r[1],w=function(e){return i?Object(m.b)(i):"empty"!==y[e]?Object(m.b)("Already filled"):(y[e]=t?"cross":"circle",a(!t),"empty"!==y[0]&&y[0]===y[1]&&y[0]===y[2]?(f=!0,N("".concat(y[0]," won !"))):"empty"!==y[3]&&y[3]===y[4]&&y[3]===y[5]?(f=!0,N("".concat(y[3]," won !"))):"empty"!==y[6]&&y[6]===y[7]&&y[6]===y[8]?(f=!0,N("".concat(y[6]," won !"))):"empty"!==y[0]&&y[0]===y[3]&&y[0]===y[6]?(f=!0,N("".concat(y[0]," won !"))):"empty"!==y[1]&&y[1]===y[4]&&y[1]===y[7]?(f=!0,N("".concat(y[1]," won !"))):"empty"!==y[2]&&y[2]===y[5]&&y[2]===y[8]?(f=!0,N("".concat(y[2]," won !"))):"empty"!==y[0]&&y[0]===y[4]&&y[0]===y[8]?(f=!0,N("".concat(y[0]," won !"))):"empty"!==y[2]&&y[2]===y[4]&&y[2]===y[6]&&(f=!0,N("".concat(y[2]," won !"))),void(0==f&&(y.forEach((function(e){"empty"===e&&(p=!0)})),!1===p&&N("Game Drawn !"),p=!1)))};return Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)(b.a,{className:"text-center display-4 mt-5",children:Object(l.jsx)("h1",{className:"heading",children:"Tic-Tac-Toe"})}),Object(l.jsxs)(b.a,{className:"p-4",children:[Object(l.jsx)(m.a,{toastStyle:{color:"#CAD5E2",backgroundColor:"#03203C"},autoClose:1e3,position:"bottom-center"}),Object(l.jsx)(d.a,{children:Object(l.jsxs)(x.a,{md:6,className:"offset-md-3",children:[Object(l.jsx)("div",{className:"grid",children:y.map((function(e,c){return Object(l.jsx)(O.a,{onClick:function(){return w(c)},children:Object(l.jsx)(u.a,{className:"box",children:Object(l.jsx)(j,{name:e})})})}))}),Object(l.jsx)("div",{className:"text-below-grid",children:i?Object(l.jsxs)("div",{className:"mb-2 mt-1",children:[Object(l.jsx)("h1",{className:"winMessageClass text-uppercase text-center",children:i}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)(h.a,{className:"buttonClass",onClick:function(){a(!1),N(""),p=!0,f=!1,y.fill("empty",0,9)},children:"Reload Game"})})]}):Object(l.jsxs)("h1",{className:"text-center turnTeller",children:[t?"Cross's":"Circle's"," turn"]})})]})})]})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1c24b4d7.chunk.js.map