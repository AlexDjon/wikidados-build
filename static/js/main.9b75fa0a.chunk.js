(this["webpackJsonpwikidados-avaliacao"]=this["webpackJsonpwikidados-avaliacao"]||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/default-user.02d4c0fa.png"},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),s=a(11),o=a(31),u=a(2),l=a.n(u),m=a(5),p=a(3),f=a(27),d=a.n(f).a.create({baseURL:"https://reqres.in/api/"});function v(){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(l.a.mark((function e(){var t,a,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/users");case 2:return t=e.sent,a=t.data.total,n="/users?per_page=".concat(a),e.next=7,d.get(n);case 7:for(r=e.sent,c=[],i=a-1;i>=0;i--)c=[].concat(Object(s.a)(c),[r.data.data[i]]);return e.abrupt("return",{totalUsers:a,users:c});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=a(7),E=a.n(h),x=a(12),O={create:x.a().shape({email:x.b().email("O E-mail \xe9 inv\xe1lido!").required("Voc\xea precisa inserir um E-mail"),first_name:x.b().min(3,"O Nome precisa ter no m\xednimo 3 caract\xe9res").max(20,"O Nome pode ter no m\xe1ximo 20 caract\xe9res").required("Voc\xea precisa inserir um Nome"),last_name:x.b().min(3,"O Sobrenome precisa ter no m\xednimo 3 caract\xe9res").max(20,"O Sobrenome precisa ter no m\xe1ximo 20 caract\xe9res").required("Voc\xea precisa inserir um Sobrenome"),avatar:x.b().url("Url do Avatar \xe9 inv\xe1lida").max(300,"A Url do Avatar s\xf3 pode ter no m\xe1ximo 300 caract\xe9res")})},j=(a(56),function(e){var t=e.create,a=Object(n.useState)(""),c=Object(p.a)(a,2),i=c[0],s=c[1],o=Object(n.useState)(""),u=Object(p.a)(o,2),l=u[0],m=u[1],f=Object(n.useState)(""),d=Object(p.a)(f,2),v=d[0],b=d[1],h=Object(n.useState)(""),x=Object(p.a)(h,2),j=x[0],w=x[1];return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var a={email:v,first_name:i,last_name:l,avatar:j};O.create.validate(a).then((function(){t(a),E.a.fire({text:"Usu\xe1rio cadastrado!",icon:"success"})})).catch((function(e){var t=e.errors;E.a.fire({text:t.join("\n"),icon:"error"})}))}(e)},className:"create shadow"},r.a.createElement("h3",null,r.a.createElement("b",null,"Cr"),"iar Usu\xe1rio"),r.a.createElement("input",{type:"text",placeholder:"Nome:",onChange:function(e){var t=e.target;return s(t.value)}}),r.a.createElement("input",{type:"text",placeholder:"Sobrenome:",onChange:function(e){var t=e.target;return m(t.value)}}),r.a.createElement("input",{type:"email",placeholder:"Email:",onChange:function(e){var t=e.target;return b(t.value)}}),r.a.createElement("input",{type:"text",placeholder:"Url do Avatar (opcional):",onChange:function(e){var t=e.target;return w(t.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"material-icons"},"add"),"Cadastrar"))}),w=(a(57),function(e){var t=e.user,n=e.remove,c=e.edit,i=e.index,s=""===t.avatar?a(58):t.avatar;function o(){return(o=Object(m.a)(l.a.mark((function e(a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.fire({title:"Editar",html:'<input id="e-first_name" placeholder="Nome:" value="'.concat(t.first_name,'" class="swal2-input">')+'<input id="e-last_name" placeholder="Sobrenome:" value="'.concat(t.last_name,'" class="swal2-input">')+'<input id="e-email" placeholder="E-mail:" value="'.concat(t.email,'" class="swal2-input">')+'<input id="e-avatar" placeholder="Url do Avatar (opcional):" value="'.concat(t.avatar,'" class="swal2-input">'),focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Salvar!",cancelButtonText:"Cancelar!",reverseButtons:!0,preConfirm:function(){return{id:t.id,email:document.getElementById("e-email").value,first_name:document.getElementById("e-first_name").value,last_name:document.getElementById("e-last_name").value,avatar:document.getElementById("e-avatar").value}}});case 2:n=e.sent,(r=n.value)&&O.create.validate(r).then((function(){c(a,r),E.a.fire({text:"Usu\xe1rio editado!",icon:"success"})})).catch((function(e){var t=e.errors;E.a.fire({text:t.join("\n"),icon:"error"})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("article",{className:"item shadow"},r.a.createElement("img",{src:s,alt:t.first_name+" Avatar"}),r.a.createElement("div",{className:"data"},r.a.createElement("h3",null,t.first_name," ",t.last_name),r.a.createElement("a",{href:"mailto:"+t.email},t.email),r.a.createElement("h4",null,"ID: ",t.id)),r.a.createElement("div",{className:"action-buttons"},r.a.createElement("button",{onClick:function(){return function(e){E.a.fire({text:"Deletar o usu\xe1rio?",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim!",cancelButtonText:"N\xe3o!",reverseButtons:!0}).then((function(t){t.value&&(n(e),E.a.fire({text:"O usu\xe1rio foi removido.",icon:"success"}))}))}(i)}},r.a.createElement("i",{className:"material-icons"}," delete ")),r.a.createElement("button",{onClick:function(){return function(e){return o.apply(this,arguments)}(i,t)}},r.a.createElement("i",{className:"material-icons"}," edit "))))}),g=(a(59),function(e){var t=e.list,a=e.page,c=e.setPage,i=e.total,s=e.limit,o=e.setLimit,u=e.count,l=e.remove,m=e.edit,f=e.search,d=Object(n.useState)([]),v=Object(p.a)(d,2),b=v[0],h=v[1];function E(e){"plus"===e?c(a<i?a+1:1):"down"===e&&c(a>1?a-1:i)}function x(e){"plus"===e?o(s===u?1:s+1):"down"===e&&o(1===s?u:s-1)}return Object(n.useEffect)((function(){var e=t.map((function(e,t){return r.a.createElement(w,{user:e,index:t,remove:l,edit:m,key:t})}));h(e)}),[m,t,l,f]),r.a.createElement("section",{className:"list"},r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"change page"},r.a.createElement("button",{onClick:function(){return E("down")},className:"shadow"},r.a.createElement("i",{className:"material-icons"},"navigate_before")),r.a.createElement("label",null,r.a.createElement("b",{className:"hide_in_mobile"},"P\xe1gina")," ",r.a.createElement("b",null,a)," de ",r.a.createElement("b",null,i)),r.a.createElement("button",{onClick:function(){return E("plus")},className:"shadow"},r.a.createElement("i",{className:"material-icons"},"navigate_next"))),r.a.createElement("div",{className:"change search"},r.a.createElement("input",{type:"text",placeholder:"Pesquisar:",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",{className:"change limit"},r.a.createElement("button",{onClick:function(){return x("down")},className:"shadow"},r.a.createElement("i",{className:"material-icons"},"remove")),r.a.createElement("label",null,r.a.createElement("b",null,s)),r.a.createElement("button",{onClick:function(){return x("plus")},className:"shadow"},r.a.createElement("i",{className:"material-icons"},"add")))),b)});a(60);function N(){var e=Object(n.useState)(1),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(6),u=Object(p.a)(i,2),f=u[0],d=u[1],b=Object(n.useState)(1),h=Object(p.a)(b,2),E=h[0],x=h[1],O=Object(n.useState)([]),w=Object(p.a)(O,2),N=w[0],y=w[1],_=Object(n.useState)([]),k=Object(p.a)(_,2),S=k[0],C=k[1],B=Object(n.useState)(0),U=Object(p.a)(B,2),A=U[0],I=U[1],q=Object(n.useState)(0),P=Object(p.a)(q,2),T=P[0],D=P[1];function L(){return(L=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(a=T+1),n=Object(o.a)({id:a},t),e.next=6,y([n].concat(Object(s.a)(N)));case 6:return e.next=8,I(A+1);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("N\xe3o foi poss\xedvel cadastrar novo usu\xe1rio");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function V(){return(V=Object(m.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(N.filter((function(e,a){return a!==t})));case 2:I(A-1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(m.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(N.map((function(e,n){return t===n?a:e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(m.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e,a){var n=new RegExp(t,"gi");return e[a].split(n).length>1},e.next=3,N.filter((function(e){return a(e,"first_name")}));case 3:return n=e.sent,e.next=6,N.filter((function(e){return a(e,"last_name")}));case 6:return r=e.sent,e.next=9,d(A);case 9:return e.next=11,C([].concat(Object(s.a)(n),Object(s.a)(r)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,a=t.totalUsers,n=t.users,I(a),D(a),y(n),6,x((a/6).toFixed()),d(6),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("N\xe3o foi poss\xedvel carregar os dados iniciais");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f*(a-1),n=f*a,r=N.slice(t,n),e.next=5,C(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){var e=Math.ceil(A/f);e<1||!isFinite(e)?x(1):x(e),a>E&&c(E)}(),function(){e.apply(this,arguments)}()}),[A,f,a,E,N]),r.a.createElement("div",{className:"home"},r.a.createElement(j,{create:function(e){return L.apply(this,arguments)}}),r.a.createElement(g,{list:S,page:a,setPage:c,total:E,count:A,limit:f,setLimit:d,remove:function(e){return V.apply(this,arguments)},edit:function(e,t){return F.apply(this,arguments)},search:function(e){return J.apply(this,arguments)}}))}a(61);var y=function(){return r.a.createElement(N,null)};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9b75fa0a.chunk.js.map