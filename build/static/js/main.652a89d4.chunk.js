(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(48)},31:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=a(14),s=a(11),i=(a(16),a(50)),m=a(51),u=a(22),d=a(53),f=a(52),p=(a(31),a(54));function E(e){var t=e.items,a=t.id,r=t.todo,c=t.isDone;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"alert  alert-dismissible fade show alertBox w-75 mx-auto shadow-lg todo-color",role:"alert"},o.a.createElement("div",{key:a,onClick:function(){return e.markComplete(a)}},o.a.createElement(p.a.Check,{className:"trigger",custom:!0,onChange:function(){},checked:c,id:a,type:"checkbox",label:o.a.createElement("strong",{className:"ml-3",style:{cursor:"pointer",textDecoration:c?"line-through":"none"}},r),onClick:function(){return e.markComplete(a)}})),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e.delTodo(a)},style:{cursor:"pointer"}},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}function h(e){var t="";try{for(var a in e)t=e[a].map((function(t){return o.a.createElement(E,{key:t.id,items:t,markComplete:e.markComplete,delTodo:e.delTodo})}))}catch(n){}return o.a.createElement("div",{className:"p-3 container justify-content-center"},t)}var g=a(23),b=a.n(g),y="TODOS_KEY";c.a.render(o.a.createElement((function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),p=Object(s.a)(c,2),E=p[0],g=p[1],w=Object(n.useState)(!1),k=Object(s.a)(w,2),v=k[0],x=k[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(y));e&&g(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(y,JSON.stringify(E))}),[E]);var N=function(){if(""!==a){var e={id:b()(),todo:a,isDone:!1};g((function(t){return[].concat(Object(l.a)(t),[e])})),r("")}else x(!0)};return o.a.createElement(n.Fragment,null,o.a.createElement(i.a,{className:"mt-3 p-3 "},o.a.createElement("h2",{className:" p-3 text-center header-color text-white shadow-lg "},"ToDo App"),o.a.createElement(m.a,{className:"p-2 mt-3 mx-auto"},o.a.createElement(u.a,{xs:12,sm:12,md:12},o.a.createElement(d.a,{variant:"danger",className:"fade show",show:v},"Oopss!!! enter something...")," "),o.a.createElement(u.a,{xs:12,sm:12,md:8,className:"p-3 d-flex justify-content-center"},o.a.createElement("input",{className:"  shadow form-control d-flex justify-content-center ",type:"text",value:a,style:{height:"50px"},onChange:function(e){r(e.target.value),!0===v&&x(!1)},placeholder:"Enter Something...",onKeyDown:function(e){"Enter"===e.key&&N()}})),o.a.createElement(u.a,{xs:12,sm:12,md:4,className:"p-3 d-flex justify-content-center"},o.a.createElement(f.a,{className:"addItem btn-lg w-75 shadow ",variant:"outline-warning",onClick:N},"Add Item")))),o.a.createElement(h,{todos:E,markComplete:function(e){var t=E.map((function(t){return t.id===e&&(t.isDone=!t.isDone),t}));g(t)},delTodo:function(e){g(Object(l.a)(E.filter((function(t){return t.id!==e}))))}}))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.652a89d4.chunk.js.map