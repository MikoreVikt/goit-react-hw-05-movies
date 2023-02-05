"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[47],{877:function(n,t,e){e.d(t,{RF:function(){return l},T8:function(){return d},Y5:function(){return f},Zm:function(){return s},fD:function(){return h},wr:function(){return p}});var r=e(5861),c=e(4687),a=e.n(c),i=e(3263),o="14ce8915ef52d801924d89668f2ca827",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/original",p=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/search/movie/?api_key=").concat(o,"&query=").concat(t,"&page=",1));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8047:function(n,t,e){e.r(t);var r=e(5861),c=e(9439),a=e(4687),i=e.n(a),o=e(2791),u=e(7689),s=e(877),p=e(2558),f=e(8616),l=e(1322),h=e(184);t.default=function(){var n=(0,o.useState)(),t=(0,c.Z)(n,2),e=t[0],a=t[1],d=(0,o.useState)(!0),x=(0,c.Z)(d,2),v=x[0],m=x[1],g=(0,u.UO)().movieId;if((0,o.useEffect)((function(){!function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.RF)(g);case 3:t=n.sent,a(t.data.cast),m(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Ooops!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()()}),[g]),(0,o.useEffect)((function(){window.scrollTo({top:700,behavior:"smooth"})}),[e]),e)return(0,h.jsxs)(f.im,{children:[(0,h.jsx)(f.Ll,{children:"Cast"}),(0,h.jsx)(f.Hp,{children:e.length>0?e.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,c=n.character;return(0,h.jsxs)(f.iF,{children:[e?(0,h.jsx)(f.vm,{src:s.Zm+e,alt:r,width:200,height:300}):(0,h.jsx)(f.vm,{src:p,alt:r,width:200,height:300}),(0,h.jsx)(f._l,{children:r}),(0,h.jsxs)(f._l,{children:["Character: ",(0,h.jsx)("span",{children:c})]})]},t)})):(0,h.jsx)("p",{style:{display:"flex",justifyContent:"center",color:"white"},children:"We don't have any casts for this movie!"})}),(0,h.jsx)(l.a,{loading:v})]})}},8616:function(n,t,e){e.d(t,{Hp:function(){return h},Ll:function(){return l},_l:function(){return v},iF:function(){return d},im:function(){return f},vm:function(){return x}});var r,c,a,i,o,u,s=e(168),p=e(82),f=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),l=p.ZP.h2(c||(c=(0,s.Z)(["\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n  color: white;\n"]))),h=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 40px;\n  width: 80%;\n  padding: 0;\n"]))),d=p.ZP.li(i||(i=(0,s.Z)(["\n  margin: 0;\n  padding: 0;\n  color: white;\n  list-style: none;\n  width: 200px;\n  background-color: #740101ba;\n  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),\n    0 11px 9px -5px rgb(0 0 0 / 75%);\n  border-radius: 5px;\n  overflow: hidden;\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.03;\n  }\n"]))),x=p.ZP.img(o||(o=(0,s.Z)(["\n  margin: 0;\n  object-fit: cover;\n"]))),v=p.ZP.p(u||(u=(0,s.Z)(["\n  padding: 7px 5px;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n  span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"])))},2558:function(n,t,e){n.exports=e.p+"static/media/actor-placeholder.85c62025af96b3223d78.jpg"}}]);
//# sourceMappingURL=47.9da3d013.chunk.js.map