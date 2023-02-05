"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[68],{877:function(n,t,e){e.d(t,{RF:function(){return l},T8:function(){return h},Y5:function(){return f},Zm:function(){return s},fD:function(){return d},wr:function(){return p}});var r=e(5861),c=e(4687),i=e.n(c),a=e(3263),o="14ce8915ef52d801924d89668f2ca827",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/original",p=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(u,"/search/movie/?api_key=").concat(o,"&query=").concat(t,"&page=",1));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8616:function(n,t,e){e.d(t,{Hp:function(){return d},Ll:function(){return l},_l:function(){return v},iF:function(){return h},im:function(){return f},vm:function(){return x}});var r,c,i,a,o,u,s=e(168),p=e(82),f=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),l=p.ZP.h2(c||(c=(0,s.Z)(["\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n  color: white;\n"]))),d=p.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 40px;\n  width: 80%;\n  padding: 0;\n"]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n  margin: 0;\n  padding: 0;\n  color: white;\n  list-style: none;\n  width: 200px;\n  background-color: #740101ba;\n  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),\n    0 11px 9px -5px rgb(0 0 0 / 75%);\n  border-radius: 5px;\n  overflow: hidden;\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n  }\n"]))),x=p.ZP.img(o||(o=(0,s.Z)(["\n  margin: 0;\n  object-fit: cover;\n"]))),v=p.ZP.p(u||(u=(0,s.Z)(["\n  padding: 7px 5px;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"])))},4068:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,c,i=e(5861),a=e(9439),o=e(4687),u=e.n(o),s=e(2791),p=e(7689),f=e(877),l=e(168),d=e(82),h=d.ZP.ul(r||(r=(0,l.Z)(["\n  width: 80%;\n  padding: 0;\n  margin: 0 auto;\n  list-style: none;\n"]))),x=d.ZP.li(c||(c=(0,l.Z)(["\n  padding: 20px;\n  border: 1px solid white;\n  border-radius: 10px;\n  color: white;\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),v=e(8616),g=e(1322),m=e(184),w=function(){var n=(0,s.useState)(),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,s.useState)(!0),o=(0,a.Z)(c,2),l=o[0],d=o[1],w=(0,p.UO)().movieId;if((0,s.useEffect)((function(){!function(){var n=(0,i.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.fD)(w);case 3:return t=n.sent,n.next=6,r(t.data.results);case 6:return n.next=8,d(!1);case 8:return n.next=10,n.sent;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("Ooops!");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}()()}),[w]),(0,s.useEffect)((function(){window.scrollTo({top:700,behavior:"smooth"})}),[e]),e)return(0,m.jsxs)(v.im,{children:[(0,m.jsx)(v.Ll,{children:"Reviews"}),(0,m.jsx)(h,{children:e.length>0?e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsxs)(x,{children:[(0,m.jsx)("h3",{children:e}),(0,m.jsx)("p",{children:r})]},t)})):(0,m.jsx)("p",{style:{display:"flex",justifyContent:"center",color:"white"},children:"We don't have any reviews for this movie!"})}),(0,m.jsx)(g.a,{loading:l})]})}}}]);
//# sourceMappingURL=68.b51cd345.chunk.js.map