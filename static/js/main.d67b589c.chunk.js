(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{64:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(10),a=n.n(r),o=(n(64),n(30)),l=n(7);var s=function(e){var t=e.text,n=void 0===t?"LOGO":t;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"logo",children:n})})})},d=n(115);var j=function(e){var t=e.onSave,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],a=i[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r),a("")},children:Object(l.jsx)(d.a,{label:"Add todo",margin:"normal",variant:"filled",fullWidth:!0,value:r,onChange:function(e){a(e.target.value)}})})},u=n(110),b=n(33),O=n(50),h=n(111),f=n(117),v=n(112),x=n(116),m=n(113),k=n(114),g=n(49),p=n.n(g),S=["children","checked","onClick","onDelete"];var C=function(e){var t=e.children,n=e.checked,c=e.onClick,i=e.onDelete,r=Object(O.a)(e,S);return Object(l.jsxs)(h.a,Object(b.a)(Object(b.a)({},r),{},{className:"TodoItem",button:!0,onClick:c,children:[Object(l.jsx)(v.a,{children:Object(l.jsx)(x.a,{checked:n,disableRipple:!0})}),Object(l.jsx)(f.a,{children:t}),Object(l.jsx)(k.a,{children:Object(l.jsx)(m.a,{onClick:i,children:Object(l.jsx)(p.a,{})})})]}))};var N=function(e){var t=e.list,n=e.onDeleteItem,c=e.onCheck;return e.sort,Object(l.jsx)(u.a,{children:t.map((function(e,t){return Object(l.jsx)(C,{checked:e.checked,onClick:function(){return c(t,!e.checked)},onDelete:function(){return n(t)},children:e.text},e.id)}))})},D=(n(73),n(45)),I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{id:t,text:e,checked:n}};var w=function(e){var t=Object(c.useState)(e),n=Object(o.a)(t,2),i=n[0],r=n[1];return[i,function(e){var t=i.reduce((function(e,t){return t.id>e?t.id:e}),0)+1;r([].concat(Object(D.a)(i),[I(e,t)]))},function(e){return r(i.filter((function(t,n){return n!==e})))},function(e,t){var n=Object(D.a)(i),c=n[e];void 0!==c&&(n.splice(e,1,Object(b.a)(Object(b.a)({},c),{},{checked:t})),r(n))},r]},F="todo-list",J=[];void 0!==window.localStorage&&(J=JSON.parse(localStorage.getItem(F)||"[]"));var L=function(){var e=w(J),t=Object(o.a)(e,4),n=t[0],i=t[1],r=t[2],a=t[3];return Object(c.useEffect)((function(){n!==J&&localStorage.setItem(F,JSON.stringify(n))}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(s,{text:"todo list"}),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{onSave:i}),Object(l.jsx)(N,{list:n,onDeleteItem:r,onCheck:a})]})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.d67b589c.chunk.js.map