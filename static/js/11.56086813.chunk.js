(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[11],{193:function(e,t,a){"use strict";var n=a(40),r=a(27),o=a(10),l=a(0),i=a.n(l),c=(a(55),a(198)),m=a.n(c),s=a(124),u=a(24),d=a(39),p=a(173),h=a.n(p),g=a(77),f=a(158),b=a(38),E=a(319),x=a(144),y=a(147),_=a(148),v=a(156),w=a(172),O=a(119),j=Object(g.a)((function(e){return{item:{background:"".concat(e.palette.primary.dark,"8f"),borderRadius:"8px",marginTop:"8px",marginBottom:"8px"},width100:{width:"100%"},width60:{width:"60%"},width50:{width:"50%"},width20:{width:"20%"},width10:{width:"10%"},height196:Object(o.a)({height:"156px"},e.breakpoints.down("sm"),{height:"128px"}),height20:{height:"20px"}}})),N=function(){var e=j();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat(e.item," ").concat(e.height196," ").concat(e.width100)}),i.a.createElement("div",{className:"".concat(e.item," ").concat(e.height20," ").concat(e.width50)}),i.a.createElement("div",{className:"".concat(e.item," ").concat(e.height20," ").concat(e.width60)}))},q=function(){return i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,style:{padding:"4px"},xs:12,md:4},i.a.createElement(N,null)),i.a.createElement(f.a,{item:!0,style:{padding:"4px"},xs:12,md:4},i.a.createElement(N,null)),i.a.createElement(f.a,{item:!0,style:{padding:"4px"},xs:12,md:4},i.a.createElement(N,null)))};a.d(t,"a",(function(){return B}));var C=Object(g.a)((function(e){return{infoContainer:{padding:e.spacing(1),border:"1px solid transparent",borderRadius:"1px",overflow:"hidden",transition:"0.14s all ease-in-out","&:hover":{backgroundColor:e.palette.primary.dark,border:"1px solid ".concat(e.palette.primary.light)},marginBottom:e.spacing(1),marginTop:e.spacing(1)},imazo:Object(o.a)({width:"100%",height:"180px",objectFit:"cover"},e.breakpoints.down("md"),{height:"180px"}),title:{fontFamily:u.a,fontWeight:"bold",color:e.textColor.main,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",maxHeight:"2rem"},info:{fontFamily:u.a,fontSize:"16px",color:e.textColor.main},subinfo:{fontFamily:u.a,fontSize:"12px",color:e.textColor.dark}}})),k=/!\[.*\]\((.*)\)/,F=function(e){var t=new Date;t.setTime(e);var a=t.getUTCDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"/").concat(a,"/").concat(r)},T=function(e){e.showInfo;var t=e.info,a=e.handleClick,n=C(),r=function(e){var t=e.match(k),a=null;if(null!==t)try{a=t[1]}catch(n){return null}return a}(t.text);return console.log(r),i.a.createElement(f.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer,onClick:a},i.a.createElement(f.a,{container:!0},r?i.a.createElement("img",{className:n.imazo,src:r}):null,i.a.createElement(f.a,{item:!0,xs:12,style:{paddingTop:"8px"}},i.a.createElement(b.a,{variant:"h6",className:n.title},t.title)),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(b.a,{variant:"h6",className:n.info},t.author)),i.a.createElement(f.a,{item:!0,xs:12,style:{paddingTop:"16px"}},i.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},F(t.create_date))),i.a.createElement(f.a,{item:!0,xs:12},i.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},t.about_author))))},A=i.a.forwardRef((function(e,t){return i.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))})),S=Object(g.a)((function(e){return{toolbar:{boxShadow:e.shadows[0],borderBottom:"1px solid ".concat(e.palette.grey[200],"5f")},title:{fontFamily:u.a,color:"inherit"},aboutAuthor:{fontFamily:u.a,color:e.textColor.dark,fontSize:"14px"},author:{fontFamily:u.a,color:e.textColor.light,fontSize:"14px"},error:{fontFamily:u.a,color:e.palette.grey[500]},text:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),color:e.textColor.main},meta_info_container:{border:"1px solid ".concat(e.palette.primary.light),backgroundColor:e.palette.primary.dark,padding:e.spacing(2),borderRadius:"1px"}}})),R=function(e){var t=e.showing,a=e.info,n=e.handleClose,r=S();return i.a.createElement(E.a,{fullScreen:!0,open:t,TransitionComponent:A,onClose:function(){return n()}},i.a.createElement(x.a,{position:"fixed"},i.a.createElement(y.a,{className:r.toolbar},i.a.createElement(_.a,{color:"inherit",onClick:function(){return n()}},i.a.createElement(v.a,null,"close")),i.a.createElement(b.a,{className:r.title,style:{paddingLeft:"8px"}},a?a.title:"Not Found"))),i.a.createElement(w.a,null,a?i.a.createElement(f.a,{container:!0,style:{paddingTop:"84px"}},i.a.createElement(f.a,{item:!0,xs:12,className:r.meta_info_container},i.a.createElement(b.a,{className:r.author},"Author: ",a.author),i.a.createElement(b.a,{className:r.aboutAuthor},"About Author: ",a.about_author),i.a.createElement(b.a,{className:r.aboutAuthor},"Created On: ",F(a.create_date))),i.a.createElement(f.a,{item:!0,xs:12,className:"react-article-source ".concat(r.text)},i.a.createElement(m.a,{source:a.text}))):i.a.createElement(f.a,{container:!0,style:{paddingTop:"84px"}},i.a.createElement(f.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{className:r.error,variant:"h5"},"\\_[^_^]_/",i.a.createElement("br",null)," ",i.a.createElement("br",null),"ERROR")))))},z=Object(g.a)((function(e){return{notFound:{color:e.palette.grey[600],paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},loading_display:{fontFamily:u.a,fontSize:"16px",color:e.palette.grey[400]}}})),B=function(e){var t,a=e.queryObject,c=e.shouldDisplayInfo,m=z(),u=Object(l.useState)(!0),p=Object(r.a)(u,2),g=p[0],E=p[1],x=Object(s.c)(a.query_query,{variables:{options:{skip:0,limit:12,type:a.query_params}}}),y=x.data,_=x.error,v=x.loading,w=x.fetchMore,O=Object(d.a)().setLoading,j=Object(l.useState)(-1),N=Object(r.a)(j,2),C=N[0],k=N[1];Object(l.useEffect)((function(){!0===v?O(!0):!1===v&&(O(!1),y[a.query_tablename].length<12&&E(!1))}),[v]);if(v)t=i.a.createElement(q,null);else if(_)t=i.a.createElement("div",null,"Error");else if(y){var F=function(){for(var e=y[a.query_tablename].map((function(e,t){return i.a.createElement(T,{showInfo:c,info:e,key:t,handleClick:function(){return k(t)}})})),t=[],n=0;n<y[a.query_tablename].length;n+=4){for(var r=[],o=0;o<4&&n+o<y[a.query_tablename].length;++o)r.push(e[n+o]);t.push(i.a.createElement(f.a,{container:!0},r))}return t}();console.log(F),t=0===F.length?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{container:!0,className:m.notFound},i.a.createElement(f.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{variant:"h4"},"-\\_(^_^)_/- ",i.a.createElement("br",null),i.a.createElement("br",null),"Nothing Found")))):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{dataLength:F.length,loader:i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{className:m.loading_display},"Loading"))),endMessage:i.a.createElement(i.a.Fragment,null),hasMore:g,next:function(){return w({variables:{options:{skip:y.length/12,limit:12,type:a.query_params}},updateQuery:function(e,t){var r=t.fetchMoreResult;return r&&g?(r[a.query_tablename].length<12&&E(!1),Object(o.a)({},a.query_tablename,[].concat(Object(n.a)(e[a.query_tablename]),Object(n.a)(r[a.query_tablename])))):e}})}},F))}return i.a.createElement(i.a.Fragment,null,t,i.a.createElement(R,{showing:C>=0,info:C>=0?y[a.query_tablename][C]:null,handleClose:function(){return k(-1)}}))}},318:function(e,t,a){"use strict";a.r(t);var n=a(174),r=a(0),o=a.n(r),l=a(61),i=a.n(l),c=(a(24),a(158)),m=a(193);function s(){var e=Object(n.a)(["\nquery allEnigma($options: InpOptions) {\n    allArticles(options: $options) {\n        _id\n        text\n        title\n        author\n        about_author\n        create_date\n    }\n}"]);return s=function(){return e},e}var u=i()(s());t.default=function(){return o.a.createElement(c.a,{container:!0},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(m.a,{queryObject:{query_query:u,query_tablename:"allArticles",query_params:"enigma"}})))}}}]);
//# sourceMappingURL=11.56086813.chunk.js.map