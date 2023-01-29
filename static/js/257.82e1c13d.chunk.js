"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{7852:function(n,e,t){function r(n,e,t,r,o,i,c){try{var a=n[i](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,i){var c=n.apply(e,t);function a(n){r(c,o,i,a,s,"next",n)}function s(n){r(c,o,i,a,s,"throw",n)}a(void 0)}))}}t.d(e,{Zm:function(){return u},E3:function(){return p},fP:function(){return d},wr:function(){return l}});var i=t(4687),c=t.n(i),a="14ce8915ef52d801924d89668f2ca827",s="https://api.themoviedb.org/3",u="https://image.tmdb.org/t/p/original",l=function(){var n=o(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 3:return e=n.sent,t=e.json(),n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=o(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(a,"&query=").concat(e));case 3:return t=n.sent,r=t.json(),n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=o(c().mark((function n(e,t){var r,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={},n.prev=1,""!==t){n.next=8;break}return n.next=5,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(a));case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,fetch("".concat(s,"/movie/").concat(e,"/").concat(t,"?api_key=").concat(a));case 10:r=n.sent;case 11:return o=r.json(),n.abrupt("return",o);case 15:n.prev=15,n.t0=n.catch(1),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(e,t){return n.apply(this,arguments)}}()},9257:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,i,c,a,s=t(9439),u=t(2791),l=t(7689),p=t(168),d=t(82),f=t(1087),h=(0,d.ZP)(f.rU)(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 5px 10px;\n  width: 80px;\n  height: 30px;\n  border: 2px solid black;\n  border-radius: 5px;\n  text-decoration: none;\n  margin-bottom: 15px;\n  margin-left: 25px;\n  color: black;\n  transition: all 200ms linear;\n\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),v=d.ZP.h2(o||(o=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),x=d.ZP.p(i||(i=(0,p.Z)(["\n  margin-bottom: 20px;\n  span {\n    margin-right: 8px;\n  }\n"]))),m=d.ZP.h3(c||(c=(0,p.Z)(["\n  margin-bottom: 15px;\n"]))),g=d.ZP.p(a||(a=(0,p.Z)(["\n  margin-bottom: 40px;\n"]))),j=t(1258),w=t(7852),b=t(184),y=function(){var n,e,t,r,o,i,c=(0,u.useState)({}),a=(0,s.Z)(c,2),p=a[0],d=a[1],f=(0,l.UO)().movieId,y=(0,l.TH)();(0,u.useEffect)((function(){(0,w.fP)(f,"").then(d),window.scrollTo({top:0})}),[f]);var k=p.poster_path,_=p.original_title,Z=p.release_date,P=p.vote_average,C=p.overview,F=p.genres;if(Z)return(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,b.jsx)(h,{to:null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"30px"},children:[(0,b.jsx)("img",{src:w.Zm+k,alt:_,width:300}),(0,b.jsxs)("div",{style:{marginLeft:"30px",maxWidth:"500px"},children:[(0,b.jsx)(v,{children:_+"(".concat(new Date(Z).getFullYear(),")")}),(0,b.jsxs)(x,{children:[(0,b.jsx)("span",{children:"User score:"}),Math.round(10*P),"%"]}),(0,b.jsx)(m,{children:"Overview"}),(0,b.jsx)(g,{children:C}),(0,b.jsx)(m,{children:"Genres"}),(0,b.jsx)(g,{children:F.map((function(n){return n.name})).join(", ")}),(0,b.jsxs)("div",{children:[(0,b.jsx)(m,{children:"Additional information"}),(0,b.jsxs)("div",{style:{display:"flex",columnGap:"20px"},children:[(0,b.jsx)(j.Fg,{to:"cast",state:{from:null!==(t=null===(r=y.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,b.jsx)(j.Fg,{to:"reviews",state:{from:null!==(o=null===(i=y.state)||void 0===i?void 0:i.from)&&void 0!==o?o:"/"},children:"Reviews"})]})]})]})]}),(0,b.jsx)(u.Suspense,{fallback:null,children:(0,b.jsx)(l.j3,{context:[f]})})]})}}}]);
//# sourceMappingURL=257.82e1c13d.chunk.js.map