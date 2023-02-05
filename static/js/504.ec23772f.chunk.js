"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[504],{877:function(n,t,e){e.d(t,{RF:function(){return l},T8:function(){return x},Y5:function(){return f},Zm:function(){return s},fD:function(){return d},wr:function(){return p}});var r=e(5861),o=e(4687),a=e.n(o),i=e(3263),c="14ce8915ef52d801924d89668f2ca827",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p/original",p=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/all/day?api_key=").concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/search/movie/?api_key=").concat(c,"&query=").concat(t,"&page=",1));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4146:function(n,t,e){e.d(t,{e:function(){return v}});var r,o,a,i,c=e(7689),u=e(877),s=e(168),p=e(82),f=e(1087),l=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  margin: 40px 0;\n  gap: 30px;\n"]))),d=p.ZP.li(o||(o=(0,s.Z)(["\n  width: 240px;\n  background-color: #740101ba;\n  box-shadow: inset 0 0 30px 1px rgb(0 0 0 / 75%),\n    0 11px 9px -5px rgb(0 0 0 / 75%);\n  border-radius: 5px;\n  overflow: hidden;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    scale: 1.1;\n  }\n"]))),x=(0,p.ZP)(f.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n"]))),h=p.ZP.p(i||(i=(0,s.Z)(["\n  text-align: center;\n  padding: 10px;\n  color: white;\n  font-size: 15px;\n  font-weight: 700;\n"]))),m=e(8384),g=e(184),v=function(n){var t=n.moviesArr,e=(0,c.TH)();if(t!==[])return(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.original_title,o=n.original_name,a=n.poster_path;return(0,g.jsx)(d,{children:(0,g.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[a?(0,g.jsx)("img",{src:u.Zm+a,alt:r,width:240,height:320}):(0,g.jsx)("img",{src:m,alt:"defaulLogo",width:240,height:320}),(0,g.jsx)(h,{children:r||o})]})},t)}))})}},5504:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,o,a,i,c,u=e(5861),s=e(9439),p=e(4687),f=e.n(p),l=e(2791),d=e(1087),x=e(2134),h=e(877),m=e(1322),g=e(4146),v=e(168),w=e(82),b=w.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n"]))),Z=w.ZP.h2(o||(o=(0,v.Z)(["\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  color: white;\n"]))),y=w.ZP.form(a||(a=(0,v.Z)(["\n  position: relative;\n  margin-bottom: 30px;\n"]))),k=w.ZP.input(i||(i=(0,v.Z)(["\n  min-width: 250px;\n  height: 30px;\n  font-size: 16px;\n  padding: 5px 30px 5px 10px;\n  color: white;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid white;\n  transition: border-color 250ms linear;\n  &:hover,\n  &:focus {\n    outline: none;\n    border: none;\n    border-bottom: 2px solid white;\n  }\n"]))),j=w.ZP.button(c||(c=(0,v.Z)(["\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  transform: translateY(-50%);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: white;\n  transition: color 250ms linear;\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),_=e(184),P=function(){var n,t=(0,l.useState)(""),e=(0,s.Z)(t,2),r=e[0],o=e[1],a=(0,l.useState)([]),i=(0,s.Z)(a,2),c=i[0],p=i[1],v=(0,l.useState)(!0),w=(0,s.Z)(v,2),P=w[0],C=w[1],S=(0,d.lr)(),q=(0,s.Z)(S,2),T=q[0],F=q[1],L=null!==(n=T.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){if(!L)return p([]),void C(!1);!function(){var n=(0,u.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.T8)(L);case 3:return t=n.sent,n.next=6,p(t.data.results);case 6:return n.next=8,C(!1);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("Oops! Something went wrong! Try again!");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}()()}),[L]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(b,{children:[(0,_.jsx)(Z,{children:"Movie search"}),(0,_.jsxs)(y,{onSubmit:function(n){if(n.preventDefault(),C(!0),!r.trim()||L===r.trim().toLowerCase())return o(""),void C(!1);F({query:r.trim().toLowerCase()}),o("")},children:[(0,_.jsx)(k,{onChange:function(n){o(n.target.value)},value:r,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter a search query"}),(0,_.jsx)(j,{type:"submit",children:(0,_.jsx)(x.RB5,{})})]})]}),(0,_.jsx)(g.e,{moviesArr:c}),(0,_.jsx)(m.a,{loading:P})]})}},8384:function(n,t,e){n.exports=e.p+"static/media/logo-movie-tape-cinema.bed37fbfee5bd8f087b5.png"}}]);
//# sourceMappingURL=504.ec23772f.chunk.js.map