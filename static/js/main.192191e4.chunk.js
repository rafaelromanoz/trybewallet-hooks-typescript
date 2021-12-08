(this["webpackJsonptrybewallet-typescript-hooks"]=this["webpackJsonptrybewallet-typescript-hooks"]||[]).push([[0],{40:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(17),s=c.n(n),r=c(18),i=c(4),l=(c(40),c(12)),j=c(27),d=c(28),o=c(10),b={email:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;return"ACTION_LOGIN"===t.type?Object(o.a)(Object(o.a)({},e),{},{email:t.payload.email}):e},h=c(30),O={expenses:[],editSwitch:!1,idEdit:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSES":return Object(o.a)(Object(o.a)({},e),{},{expenses:[].concat(Object(h.a)(e.expenses),[t.payload.expenses])});case"DELETE_EXPENSES":return Object(o.a)(Object(o.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});case"ACTION_EDIT":return Object(o.a)(Object(o.a)({},e),{},{idEdit:t.id,editSwitch:!0});default:return e}},p=Object(l.combineReducers)({reducerLogin:u,reducerWallet:x}),m=Object(l.createStore)(p,Object(j.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),v=c(3),f=c(9),g=c.p+"static/media/wallet.8689e39f.svg",N=function(e){return{type:"ACTION_LOGIN",payload:{email:e}}},y=c(1),E=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1],s=Object(v.f)(),r=Object(a.useState)(""),l=Object(f.a)(r,2),j=l[0],d=l[1],o=Object(i.d)();return Object(y.jsx)("section",{className:"hero is-light  is-fullheight",children:Object(y.jsx)("div",{className:"hero-body",children:Object(y.jsx)("div",{className:"container has-text-centered",children:Object(y.jsxs)("div",{className:"column is-4 is-offset-4",children:[Object(y.jsx)("h3",{className:"title has-text-black",children:"Login"}),Object(y.jsx)("hr",{className:"login-hr"}),Object(y.jsx)("p",{className:"subtitle has-text-black",children:"Please login to proceed."}),Object(y.jsxs)("div",{className:"box",children:[Object(y.jsx)("figure",{className:"avatar",children:Object(y.jsx)("img",{style:{width:"130px"},src:g,alt:"login wallet"})}),Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"field",children:Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("input",{className:"input is-large",type:"email",placeholder:"Your Email",onChange:function(e){var t=e.target;return n(t.value)}})})}),Object(y.jsx)("div",{className:"field",children:Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("input",{className:"input is-large",type:"password",placeholder:"Your Password",onChange:function(e){var t=e.target;return d(t.value)}})})}),Object(y.jsxs)("button",{type:"button",className:"button is-block is-info is-large is-fullwidth",disabled:!(/(.*)@(.*).com/.test(c)&&j.length>=6),onClick:function(){return o(N(c)),void s.push("/carteira")},children:["Login",Object(y.jsx)("i",{className:"fa fa-sign-in","aria-hidden":"true"})]})]})]})]})})})})},C=c(13),T=c.n(C),w=c(21),S=c(16),k=c.p+"static/media/wallet-page.ed9ea66e.svg",D=function(){var e=Object(i.e)((function(e){return e.reducerLogin})).email,t=Object(i.e)((function(e){return e.reducerWallet}),i.c).expenses;return Object(y.jsxs)("nav",{className:"navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(y.jsxs)("div",{className:"navbar-brand",children:[Object(y.jsx)("a",{className:"navbar-item",href:"/login",children:Object(y.jsx)("img",{src:k,alt:"walletIcon"})}),Object(y.jsx)("h1",{className:"navbar-item title",children:"TrybeWallet"})]}),Object(y.jsx)("div",{className:"navbar-menu",children:Object(y.jsx)("h3",{className:"subtitle is-4 navbar-item ",children:"Total de despesas: ".concat(0!==t.length?t.reduce((function(e,t){return e+=t.data[t.currency].ask*t.value}),0).toFixed(2):0)})}),Object(y.jsx)("div",{className:"navbar-menu",children:Object(y.jsx)("p",{className:"navbar-item navbar-end",children:"Email: ".concat(e)})})]})},F=c(25),L=Object(i.b)((function(e){return{expenses:e.reducerWallet}}))((function(){var e=Object(i.e)((function(e){return e.reducerWallet}),i.c).expenses,t=Object(i.d)(),c=function(e){t(function(e){return{type:"DELETE_EXPENSES",id:e}}(e)),S.b.error("Despesa excluida")};return 0===e.length?Object(y.jsx)("h3",{children:"N\xe3o possui despesas cadastradas"}):Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Valor"}),Object(y.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(y.jsx)("th",{children:"Moeda"}),Object(y.jsx)("th",{children:"M\xe9todo de pagamento"}),Object(y.jsx)("th",{children:"Tag"}),Object(y.jsx)("th",{children:"C\xe2mbio utilizado"}),Object(y.jsx)("th",{children:"Moeda de convers\xe3o"}),Object(y.jsx)("th",{children:"Valor convertido"}),Object(y.jsx)("th",{children:"Real"}),Object(y.jsx)("th",{children:"Editar/Excluir"})]})}),Object(y.jsx)("tbody",{children:e.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.value}),Object(y.jsx)("td",{children:e.description}),Object(y.jsx)("td",{children:e.currency}),Object(y.jsx)("td",{children:e.method}),Object(y.jsx)("td",{children:e.tag}),Object(y.jsx)("td",{children:e.data[e.currency].name.split("/")[0]}),Object(y.jsx)("td",{children:parseFloat(e.data[e.currency].ask).toFixed(2)}),Object(y.jsx)("td",{children:(e.data[e.currency].ask*e.value).toFixed(2)}),Object(y.jsx)("td",{children:"Real"}),Object(y.jsxs)("div",{style:{marginLeft:"15px"},children:[Object(y.jsx)("button",{type:"button",className:"button is-warning",onClick:function(){return c=e.id,void t(function(e){return{type:"ACTION_EDIT",id:e}}(c));var c},children:Object(y.jsx)(F.b,{})}),Object(y.jsx)("button",{type:"button",onClick:function(){return c(e.id)},className:"button is-danger",children:Object(y.jsx)(F.a,{})})]})]},e.id)}))})]})}));function I(){return(I=Object(w.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(){return I.apply(this,arguments)},M=c.p+"static/media/gifWallet.425b1e82.gif",P=function(e){var t=e.estados,c=e.currency,a=e.onClickAdd,n=t.setCurrency,s=t.setValue,r=t.setDescription,i=t.setMethod,l=t.setTag;return Object(y.jsx)("div",{children:Object(y.jsxs)("form",{className:"level-left",children:[Object(y.jsxs)("label",{className:"label",htmlFor:"value",children:["Valor",Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("input",{type:"number",className:"input",style:{width:"100px"},onChange:function(e){var t=e.target;return s(Number(t.value))}})})]}),Object(y.jsx)("div",{className:"field",children:Object(y.jsxs)("label",{className:"label",htmlFor:"description",style:{marginTop:"5px"},children:["Descri\xe7\xe3o",Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("input",{className:"input",type:"text",name:"description",onChange:function(e){var t=e.target;return r(t.value)}})})]})}),Object(y.jsx)("div",{className:"field",children:Object(y.jsxs)("label",{htmlFor:"asad",className:"label",style:{marginTop:"5px"},children:["Moeda",Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("div",{className:"select",children:Object(y.jsx)("select",{name:"currency",onChange:function(e){var t=e.target;return n(t.value)},children:Object.keys(c).filter((function(e){return"USDT"!==e})).map((function(e){return Object(y.jsx)("option",{children:e})}))})})})]})}),Object(y.jsx)("div",{className:"field",children:Object(y.jsxs)("label",{htmlFor:"asad",className:"label",style:{marginTop:"5px"},children:["M\xe9todo de pagamento",Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("div",{className:"select",children:Object(y.jsx)("select",{onChange:function(e){var t=e.target;return i(t.value)},children:["Dinheiro","Cart\xe3o de Cr\xe9dito","Cart\xe3o de d\xe9bito"].map((function(e){return Object(y.jsx)("option",{children:e})}))})})})]})}),Object(y.jsx)("div",{className:"field",children:Object(y.jsxs)("label",{htmlFor:"asad",className:"label",style:{marginTop:"6px"},children:["Tag",Object(y.jsx)("div",{className:"control",children:Object(y.jsx)("div",{className:"select",children:Object(y.jsx)("select",{onChange:function(e){var t=e.target;return l(t.value)},children:["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"].map((function(e){return Object(y.jsx)("option",{children:e},e)}))})})})]})}),Object(y.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){return a()},style:{marginLeft:"17px",marginTop:"15px"},children:"Adicionar despesa"})]})})},W=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),r=Object(f.a)(s,2),l=r[0],j=r[1],d=Object(a.useState)(0),o=Object(f.a)(d,2),b=o[0],u=o[1],h=Object(a.useState)(""),O=Object(f.a)(h,2),x=O[0],p=O[1],m=Object(a.useState)(""),v=Object(f.a)(m,2),g=v[0],N=v[1],E=Object(a.useState)(""),C=Object(f.a)(E,2),k=C[0],F=C[1],I=Object(a.useState)(""),W=Object(f.a)(I,2),_=W[0],V=W[1],X=Object(i.d)(),R=function(){var e=Object(w.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){R()}),[]);var z={value:l,id:b,description:x,currency:g,data:c,method:k,tag:_},B={setValue:j,setCurrency:N,setDescription:p,setMethod:F,setTag:V};return void 0===c?Object(y.jsx)("img",{src:M,alt:"gifWallet"}):Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{}),Object(y.jsx)(S.a,{position:"top-right"}),Object(y.jsx)(P,{estados:B,currency:c,onClickAdd:function(){u((function(e){return e+1})),X({type:"ADD_EXPENSES",payload:{expenses:z}}),S.b.success("Despesa adicionada com sucesso")}}),Object(y.jsx)(L,{})]})},_=function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(v.c,{children:[Object(y.jsx)(v.a,{path:"/carteira",component:W}),Object(y.jsx)(v.a,{path:"/",component:E})]})})},V=(c(47),function(){return Object(y.jsx)("div",{children:Object(y.jsx)(_,{})})}),X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(48);s.a.render(Object(y.jsx)(r.a,{basename:"/trybewallet-hooks-typescript",children:Object(y.jsx)(i.a,{store:m,children:Object(y.jsx)(V,{})})}),document.getElementById("root")),X()}},[[49,1,2]]]);
//# sourceMappingURL=main.192191e4.chunk.js.map