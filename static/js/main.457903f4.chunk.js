(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[4],{108:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),c=(t(97),t(26));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(40);o.a.render(l.a.createElement(i.a.Provider,null,l.a.createElement(c.b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(53),t(20)),o=t(35),c=(t(108),t(40)),i=t(44),m=t.n(i),s=t(75),u=t(142),d=t(144),p=t(145),g=t(146),f=t(147),b=t(38),h=t(148),y=t(149),E=t(150),x=t(151),v=t(152),N=t(153),j=t(154),O=t(155),k=Object(s.a)((function(e){return{root:{width:240},loaderStyles:{height:2},dummyLoader:{height:2,width:"100%",background:e.palette.primary.main},listItem:{"&:hover":{color:e.palette.secondary.main}},listItemText:{fontFamily:K},nestedItem:{paddingLeft:e.spacing(4)}}})),w={"/home":"Home","/notifications":"Notifications","/gallery":"Gallery","/about":"About IGMC","/complaints":"Complaints","/papers&books":"Papers & Books","/addstudent":"Add Student"},I=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)(!1),I=Object(o.a)(s,2),A=I[0],T=I[1],C=Object(r.usePath)(),F=Object(c.a)().loading,L=k();return l.a.createElement("header",null,l.a.createElement(u.a,{position:"fixed"},F?l.a.createElement(d.a,{className:L.loaderStyles,color:"secondary"}):l.a.createElement("div",{className:L.dummyLoader}),l.a.createElement(p.a,null,l.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return i(!0)}},l.a.createElement(f.a,null,"menu")),l.a.createElement(b.a,{variant:"h6",className:"font-head",style:{paddingLeft:"8px"}},function(e){return console.log(e),w[e]?w[e]:e.startsWith("/clubs")?"Clubs":"NotFound"}(C)))),l.a.createElement(h.a,{open:t,onClose:function(){return i(!1)}},l.a.createElement("div",{className:L.root,role:"presentation"},l.a.createElement(y.a,{component:"nav","aria-labelledby":"menu",subheader:l.a.createElement(E.a,null,l.a.createElement(x.a,null,l.a.createElement(v.a,{src:m.a,style:{display:"inline-block"}})),l.a.createElement(N.a,{disableTypography:!0,primary:l.a.createElement(b.a,{className:L.listItemText},"Menu")}))},l.a.createElement(j.a,null),["Home","Gallery","Notifications","Complaints","Papers & Books","Add Student"].map((function(e,a){return l.a.createElement(E.a,{button:!0,key:a,className:L.listItem,component:r.A,href:"/".concat(e.toLowerCase().split(" ").join(""))},l.a.createElement(N.a,{disableTypography:!0,primary:l.a.createElement(b.a,{className:L.listItemText},e)}))})),l.a.createElement(E.a,{className:L.listItem,button:!0,onClick:function(){return T(!A)}},l.a.createElement(N.a,{disableTypography:!0,primary:l.a.createElement(b.a,{className:L.listItemText},"Clubs")}),l.a.createElement(f.a,null,A?"expand_less":"expand_more")),l.a.createElement(O.a,{in:A,timeout:"auto"},l.a.createElement(y.a,{component:"div",disablePadding:!0},["ISIS","Memers","Arts"].map((function(e,a){return l.a.createElement(E.a,{className:"".concat(L.listItem," ").concat(L.nestedItem),button:!0,key:a,component:r.A,href:"/clubs/".concat(e.toLowerCase())},l.a.createElement(N.a,{disableTypography:!0,primary:l.a.createElement(b.a,{className:L.listItemText},e)}))})))),l.a.createElement(E.a,{button:!0,component:r.A,href:"/about",className:L.listItem},l.a.createElement(N.a,{disableTypography:!0,primary:l.a.createElement(b.a,{className:L.listItemText},"About Us")}))))))},A=t(83),T=t(122),C=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,294))})),F=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,295))})),L=Object(n.lazy)((function(){return t.e(10).then(t.bind(null,296))})),S=Object(n.lazy)((function(){return t.e(11).then(t.bind(null,297))})),G=Object(n.lazy)((function(){return t.e(20).then(t.bind(null,313))})),z=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,298))})),P=Object(n.lazy)((function(){return t.e(9).then(t.bind(null,299))})),R=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(3),t.e(19)]).then(t.bind(null,300))})),M={"/home":function(){return l.a.createElement(L,null)},"/notifications":function(){return l.a.createElement(C,null)},"/papers&books":function(){return l.a.createElement(F,null)},"/clubs*":function(){return l.a.createElement(G,null)},"/about":function(){return l.a.createElement(S,null)},"/gallery":function(){return l.a.createElement(z,null)},"/complaints":function(){return l.a.createElement(P,null)},"/addstudent":function(){return l.a.createElement(R,null)}},B=t(71),_=t(160),D=t(161),H=t(82),q=t(159),U=t(51),W=t(158),J=t(60);t.d(a,"a",(function(){return K}));var $=new A.a({uri:["https://csaigmc-backend.herokuapp.com","graphql"].join("/")}),K=["Comfortaa","roboto","cursive"].join(","),Q=(["Roboto","sans-serif"].join(","),Object(H.a)({palette:{type:"dark",primary:{light:U.a[600],main:U.a[800],dark:U.a[900]},secondary:W.a},typography:{h1:{fontFamily:K},h2:{fontFamily:K},h3:{fontFamily:K},h4:{fontFamily:K},h5:{fontFamily:K},h6:{fontFamily:K},button:{fontFamily:K}}})),V=Object(s.a)((function(e){e.spacing(10)}));a.b=function(){V();Object(r.useRedirect)("/","/home");var e=Object(r.useRoutes)(M);return l.a.createElement(q.a,{theme:Q},l.a.createElement(T.a,{client:$},l.a.createElement(n.Fragment,null,l.a.createElement(I,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(_.a,null),l.a.createElement(D.a,{style:{paddingTop:"84px"}},e||l.a.createElement(B.a,null)),l.a.createElement(J.a,null)))))}},40:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(35),l=t(0),r=t(74),o={PAGE_LOADING:"page-loading"},c=function(e,a){switch(console.log(a.type),a.type){case o.LOADING:return a.loading;default:throw new Error("Unspecified type for loading!")}},i=Object(r.a)((function(){var e=Object(l.useReducer)(c,!1),a=Object(n.a)(e,2),t=a[0],r=a[1],i=t;return{loading:i,setLoading:function(e){console.log("trying set loading to => "+e),i!==e&&r({type:o.LOADING,loading:e})}}}))},44:function(e,a,t){e.exports=t.p+"static/media/IGMC.d874c619.png"},53:function(e,a,t){},60:function(e,a,t){"use strict";var n=t(10),l=t(0),r=t.n(l),o=t(20),c=t(75),i=t(156),m=t(38),s=t(157),u=t(26),d=t(119),p=Object(d.a)((function(e){return{padder:{padding:e.spacing(2)},padderLoc:{paddingTop:e.spacing(2)},fontmain:{color:e.palette.grey[400]}}})),g=function(){var e=p();return r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:12,md:6},r.a.createElement("iframe",{style:{width:"100%"},height:"320",id:"gmap_canvas",src:"https://maps.google.com/maps?q=igmc%20shimla&t=&z=17&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"})),r.a.createElement(i.a,{item:!0,xs:12,md:6,style:{padding:"8px"}},r.a.createElement(m.a,{className:e.fontmain,style:{fontFamily:u.a,textTransform:"uppercase"}},"Location"),r.a.createElement(m.a,{className:"".concat(e.fontmain," ").concat(e.padderLoc),style:{fontFamily:u.a}},"Indira Gandhi Medical College & Hospital ",r.a.createElement("br",null),"Ridge Sanjauli Rd, Lakkar Bazar, Shimla, Himachal Pradesh ",r.a.createElement("br",null)," 171001"),r.a.createElement("br",null)))},f=t(44),b=t.n(f);t.d(a,"a",(function(){return y}));var h=Object(c.a)((function(e){return{fontmain:{fontFamily:u.a,color:e.palette.grey[500]},padder:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},ccontainer:{position:"relative",bottom:"0",marginTop:e.spacing(4),paddingTop:e.spacing(4),paddingBottom:e.spacing(4),backgroundColor:e.palette.primary.dark},followus:Object(n.a)({color:e.palette.grey[400],textAlign:"center"},e.breakpoints.up("md"),{paddingLeft:"16px",textAlign:"left",alignSelf:"center"}),socialicon:{fontSize:20,marginLeft:"6px",marginRight:"6px",color:e.palette.grey[400]},instagram:{"&:hover":{color:"#405DE6"}},submit_complaint_here:{cursor:"pointer",color:e.palette.secondary.light,"&:hover":{color:e.palette.secondary.dark}},imagelogo:{borderRadius:"98px",background:e.palette.primary.main,padding:"4px",width:128,height:128},divider:Object(n.a)({textAlign:"center"},e.breakpoints.up("md"),{borderRight:"1px solid ".concat(e.palette.grey[700]),paddingRight:"16px",textAlign:"right"}),logoText:Object(n.a)({fontFamily:u.a,verticalAlign:"middle",paddingRight:"8px",display:"block",color:e.palette.grey[700]},e.breakpoints.up("md"),{display:"inline"})}})),y=function(){var e=h(),a=Object(o.usePath)();return r.a.createElement(i.a,{container:!0,className:e.ccontainer},"/home"===a?r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(g,null)):null,r.a.createElement(i.a,{item:!0,container:!0},r.a.createElement(i.a,{item:!0,xs:12,md:6,className:"".concat("/home"===a?e.padder:""," ").concat(e.divider)},r.a.createElement("img",{className:e.imagelogo,src:b.a,alt:"CSA IGMC LOGO"}),"            ",r.a.createElement(m.a,{className:e.logoText,variant:"h5"},"CSA IGMC")),r.a.createElement(i.a,{item:!0,xs:12,md:6,className:"".concat("/home"===a?e.padder:""," ").concat(e.followus)},r.a.createElement(m.a,{variant:"subtitle1",style:{fontFamily:"comfortaa"}},"Follow us on Social Media:"),r.a.createElement(s.a,{className:"".concat(e.socialicon," ").concat(e.instagram),href:"https://instagram.com/atelier_igmc?igshid=1ikxqwc1in0gp"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement(s.a,{className:"".concat(e.socialicon),href:"#"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement(s.a,{className:"".concat(e.socialicon),href:"#"},r.a.createElement("i",{className:"fab fa-facebook-f "})))),r.a.createElement(i.a,{item:!0,xs:12,style:{textAlign:"center",paddingTop:"16px",paddingBottom:"16px"}},r.a.createElement(m.a,{variant:"body1",className:e.fontmain,style:{textAlign:"center",fontSize:"12px"}},"CopyRight \xa9 2019 CSAIGMC. All rights reserved.")))}},71:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),l=t.n(n),r=(t(53),function(){return l.a.createElement("div",{className:"container font-head"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",null,"404 ;("),l.a.createElement("br",null),"Not Found"),l.a.createElement("div",{className:"col-12 small text-center pt-4"},"The resource you are looking for cannot be found.")))})},92:function(e,a,t){e.exports=t(115)},97:function(e,a,t){}},[[92,5,6]]]);
//# sourceMappingURL=main.457903f4.chunk.js.map