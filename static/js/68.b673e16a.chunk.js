"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[68],{7852:function(n,t,e){function r(n,t,e,r,o,i,c){try{var a=n[i](c),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var c=n.apply(t,e);function a(n){r(c,o,i,a,u,"next",n)}function u(n){r(c,o,i,a,u,"throw",n)}a(void 0)}))}}e.d(t,{Zm:function(){return s},E3:function(){return p},fP:function(){return l},wr:function(){return f}});var i=e(4687),c=e.n(i),a="14ce8915ef52d801924d89668f2ca827",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/original",f=function(){var n=o(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(a));case 3:return t=n.sent,e=t.json(),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=o(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(a,"&query=").concat(t));case 3:return e=n.sent,r=e.json(),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=o(c().mark((function n(t,e){var r,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={},n.prev=1,""!==e){n.next=8;break}return n.next=5,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(a));case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,fetch("".concat(u,"/movie/").concat(t,"/").concat(e,"?api_key=").concat(a));case 10:r=n.sent;case 11:return o=r.json(),n.abrupt("return",o);case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(t,e){return n.apply(this,arguments)}}()},8616:function(n,t,e){e.d(t,{Hp:function(){return h},Ll:function(){return d},_l:function(){return g},aU:function(){return m},iF:function(){return v},im:function(){return l},vm:function(){return x}});var r,o,i,c,a,u,s,f=e(168),p=e(82),l=p.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),d=p.ZP.h2(o||(o=(0,f.Z)(["\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n"]))),h=p.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 40px;\n  width: 80%;\n  padding: 0;\n"]))),v=p.ZP.li(c||(c=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n  color: white;\n  list-style: none;\n  width: 200px;\n  background-color: #940000ba;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n  }\n"]))),x=p.ZP.img(a||(a=(0,f.Z)(["\n  margin: 0;\n  object-fit: cover;\n"]))),m=p.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 250px;\n  font-weight: 700;\n  font-size: 20px;\n  color: black;\n  background-color: #dddddd;\n"]))),g=p.ZP.p(s||(s=(0,f.Z)(["\n  padding: 5px 5px;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"])))},4068:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,o,i=e(9439),c=e(2791),a=e(7689),u=e(7852),s=e(8616),f=e(168),p=e(82),l=p.ZP.ul(r||(r=(0,f.Z)(["\n  width: 80%;\n  padding: 0;\n  margin: 0 auto;\n  list-style: none;\n"]))),d=p.ZP.li(o||(o=(0,f.Z)(["\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),h=e(184),v=function(){var n=(0,a.bx)(),t=(0,i.Z)(n,1)[0],e=(0,c.useState)(null),r=(0,i.Z)(e,2),o=r[0],f=r[1];if((0,c.useEffect)((function(){(0,u.fP)(t,"reviews").then((function(n){return f(n.results)}))}),[t]),(0,c.useEffect)((function(){setTimeout((function(){window.scrollTo({top:600,left:0,behavior:"smooth"})}),500)}),[o]),o)return(0,h.jsxs)(s.im,{children:[(0,h.jsx)(s.Ll,{children:"Reviews"}),(0,h.jsx)(l,{children:o.length>0?o.map((function(n){return(0,h.jsxs)(d,{children:[(0,h.jsxs)("h3",{style:{marginBottom:"10px"},children:["Author:",n.author]}),(0,h.jsx)("p",{children:n.content})]},n.id)})):(0,h.jsx)("p",{children:"We don't have any reviews for this movie."})})]})}}}]);
//# sourceMappingURL=68.b673e16a.chunk.js.map