(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){},6:function(t,e,n){t.exports=n(7)},7:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n(5),r=n(0),d=n.n(r),a=n(1),l=n.n(a),c=n(3),s=n.n(c),C=(n(18),n(19),{columns:[{id:1,title:"Design",cards:[{id:1,title:"Card title 1",description:"Card content"},{id:2,title:"Card title 2",description:"Card content"},{id:3,title:"Card title 3",description:"Card content"}]},{id:2,title:"Devlopment",cards:[{id:9,title:"Card title 4",description:"Card content"}]},{id:3,title:"Testing",cards:[{id:10,title:"Card title 5",description:"Card content"},{id:11,title:"Card title 6",description:"Card content"}]},{id:4,title:"Support",cards:[{id:12,title:"Card title 7",description:"Card content"},{id:13,title:"Card title 8",description:"Card content"}]}]});function u(t){Object(r.useEffect)(function(){console.log(e,"dsd")},[e]);var e=t.board;return d.a.createElement(s.a,{allowRemoveLane:!0,allowRenameColumn:!0,allowRemoveCard:!0,onLaneRemove:console.log,onCardRemove:console.log,onLaneRename:console.log,initialBoard:e,allowAddCard:{on:"top"},onNewCardConfirm:function(t){return Object(o.a)({id:(new Date).getTime()},t)},onCardNew:console.log})}function p(){var t=Object(r.useState)({columns:[{id:1,title:"Design",cards:[{id:1,title:"Card title 1",description:"Card content"},{id:2,title:"Card title 2",description:"Card content"},{id:3,title:"Card title 3",description:"Card content"}]},{id:2,title:"Devlopment",cards:[{id:9,title:"Card title 4",description:"Card content"}]},{id:3,title:"Testing",cards:[{id:10,title:"Card title 5",description:"Card content"},{id:11,title:"Card title 6",description:"Card content"}]},{id:4,title:"Support",cards:[{id:12,title:"Card title 7",description:"Card content"},{id:13,title:"Card title 8",description:"Card content"}]}]}),e=Object(i.a)(t,2),n=e[0],o=e[1];return d.a.createElement("div",null,d.a.createElement("input",{className:"Search",type:"text",placeholder:"Search......",onChange:function(t){console.log("search function worked",t);var e=C.columns.filter(function(e,n){return console.log(e.title.toLowerCase().startsWith(t.target.value.toLowerCase())),e.title.toLowerCase().startsWith(t.target.value.toLowerCase())});console.log(e),o({columns:e})}}),d.a.createElement("h4",null,"Columns"),d.a.createElement(u,{board:n}))}var m=document.getElementById("root");l.a.render(d.a.createElement(p,null),m)}},[[6,1,2]]]);
//# sourceMappingURL=main.f0a18d93.chunk.js.map